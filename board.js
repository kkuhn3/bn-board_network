SIDE = {
	LEFT: red_tile,
	RIGHT: blue_tile,
}

PANELTYPE = {
	NORMAL: "normal",
	HOLE: "hole",
	GRASS: "grass",
}

ACTIONS = {
	NONE: 0,
	BUSTER: 1,
	CARD: 2,
}

var playerHP = 500;
var busterDefualt = 10;
var reflDefault = 50;

var playerOne = {
	name:"one",
	hp:playerHP,
	color:"#0000FF",
	image: blue_man,
	x:1,
	y:1,
	action:ACTIONS.NONE,
	card:null,
	invis:0,
	guard:0,
	stunned: 0,
	bubbled: 0,
	busterDamage: busterDefualt,
	reflDamage: reflDefault,
	bugs: []
};

var playerTwo = {
	name:"two",
	hp:playerHP,
	color:"#FF0000",
	image: grey_man,
	x:4,
	y:1,
	action:ACTIONS.NONE,
	card:null,
	invis:0,
	guard:0,
	stunned:0,
	bubbled: 0,
	busterDamage: busterDefualt,
	reflDamage: reflDefault,
	bugs: []
};

var player = -1;
var cells = null;
var playerSelected = false;
var movementEnabled = false;

function Board(width,height,canvas){
	cells = [[]];
	this.width = width;
	this.height = height;
	this.canvas = canvas;
	this.selected = -1;
	var ctx = canvas.getContext('2d');
	var cwidth = this.canvas.width;
	var cheight = this.canvas.height / 2;
	var cellWidth = cwidth/this.width;
	var cellHeight = cheight/this.height;

	this.initCells = function(){
		cells = [];
		for(var x=0;x<this.width;x++){
			cells[x]=[];
			for(var y=0;y<this.height;y++){
				if(x < 3){
					cells[x][y]={
						side:SIDE.LEFT,
						currentSide:SIDE.LEFT,
						sideTimer:0,
						object:null,
						panelType:PANELTYPE.NORMAL,
						panelTimer:0,
						player:null
					};
				}
				else{
					cells[x][y]={
						side:SIDE.RIGHT,
						currentSide:SIDE.RIGHT,
						sideTimer:0,
						object:null,
						panelType:PANELTYPE.NORMAL,
						panelTimer:0,
						player:null
					};
				}
			}
		}
		//cells[5][1].object = new BN6RockCube(4, 1);
	}

	this.reset = function(){
		this.initCells();
		playerOne.hp = playerHP;
		playerOne.x = 1;
		playerOne.y = 1;
		playerTwo.hp = playerHP;
		playerTwo.x = 4;
		playerTwo.y = 1;
		cells[1][1].player = playerOne;
		cells[4][1].player = playerTwo;
		player = playerOne;
		$.post("save.php",{id:"confirmone", state: JSON.stringify(false)});
		$.post("save.php",{id:"confirmtwo", state: JSON.stringify(false)});
	}

	this.drawCell = function(x,y){
		var left = x*cellWidth;
		var top = y*cellHeight + cheight;
		ctx.drawImage(cells[x][y].side,left+2,top+2,cellWidth-4,cellHeight-4);
		if(cells[x][y].object){
			ctx.drawImage(cells[x][y].object.image, left+4, top+4, cellWidth-8, cellHeight-4);
		}
	}

	this.drawPlayer = function(playerDraw){
		var centerX = playerDraw.x * cellWidth + cellWidth / 2;
		var centerY = playerDraw.y * cellHeight + cellHeight / 2 + cheight;

		this.drawPlayerImage(centerX, centerY, playerDraw);
	}

	this.drawPlayerImage = function(centerX, centerY, playerDraw){
    	ctx.drawImage(playerDraw.image,centerX - cellWidth/2,centerY-cellHeight*1.5,cellWidth,cellHeight*2);

    	ctx.fillStyle="#FFFFFF";
    	ctx.textAlign = "center";
    	ctx.font = "20px Arial";
		ctx.fillText(playerDraw.hp,centerX,centerY+cellHeight/4);
	}

	this.draw = function(){
		ctx.fillStyle="#000000";
		ctx.fillRect(0,0,canvas.width,canvas.height);
		for(var x=0;x<this.width;x++){
			for(var y=0;y<this.height;y++){
				this.drawCell(x,y);
			}
		}
		this.drawPlayer(playerOne);
		this.drawPlayer(playerTwo);
	}

	this.mouseDown = function(e){
		this.selected = -1;
		if(movementEnabled){
			this.mouseCellX = Math.floor(this.width * e.offsetX/e.target.width);
			this.mouseCellY = Math.floor((this.height * (e.offsetY - e.target.height/2 )) / (e.target.height/2));
			if(playerOne.x === this.mouseCellX && playerOne.y === this.mouseCellY && player === playerOne){
				this.selected = 1;
				cells[this.mouseCellX][this.mouseCellY].player = null;
			}
			else if(playerTwo.x === this.mouseCellX && playerTwo.y === this.mouseCellY && player === playerTwo){
				this.selected = 2;
				cells[this.mouseCellX][this.mouseCellY].player = null;
			}
		}
	}.bind(this);

	this.mouseMove = function(e){
		this.draw();
		if(this.selected !== -1){
			if(this.selected === 1){
				this.drawPlayerImage(e.offsetX, e.offsetY, playerOne);
			}
			else if (this.selected === 2){
				this.drawPlayerImage(e.offsetX, e.offsetY, playerTwo);
			}
		}
	}.bind(this);

	this.mouseUp = function(e){
		this.mouseCellX = Math.floor(this.width * e.offsetX/e.target.width);
		this.mouseCellY = Math.floor((this.height * (e.offsetY - e.target.height/2 )) / (e.target.height/2));
		if(this.selected === 1 && cells[this.mouseCellX][this.mouseCellY].side === SIDE.LEFT){
			playerOne.x = this.mouseCellX;
			playerOne.y = this.mouseCellY;
			cells[this.mouseCellX][this.mouseCellY].player = playerOne;
		}
		else if (this.selected === 2 && cells[this.mouseCellX][this.mouseCellY].side === SIDE.RIGHT){
			playerTwo.x = this.mouseCellX;
			playerTwo.y = this.mouseCellY;
			cells[this.mouseCellX][this.mouseCellY].player = playerTwo;
		}

		this.draw();
		this.selected = -1;
	}.bind(this);

	this.resolveTurn = function(){
		$.post("save.php",{id:"confirm"+player.name, state: JSON.stringify(false)});
		console.log("======================= turn start =======================");
		this.objectPassives();
		this.p1priority = 2;
		this.p2priority = 2;
		if(playerOne.action === ACTIONS.CARD){
			this.p1priority = playerOne.card.priority;
		}
		if(playerTwo.action === ACTIONS.CARD){
			this.p2priority = playerTwo.card.priority;
		}

		if(this.p1priority === 0 && this.p2priority === 0){
			this.resolve(playerTwo, playerOne);
			this.resolve(playerOne, playerTwo);
		}
		else if(this.p1priority <= this.p2priority){
			this.resolve(playerOne, playerTwo);
			this.resolve(playerTwo, playerOne);
		}
		else{
			this.resolve(playerTwo, playerOne);
			this.resolve(playerOne, playerTwo);
		}
		this.resolveBugs();
		this.resetPlayer(playerOne);
		this.resetPlayer(playerTwo);
		this.draw();
		custom.drawHand();
		console.log("======================== turn end ========================");
		document.getElementById("nextturn").style.display='none';
		this.isGameOver();
	}

	this.resolveBugs = function(){
		for(var i = 0; i < playerOne.bugs.length; i++){
			player.bugs[i].resolve(playerOne);
		}
		for(var j = 0; j < playerTwo.bugs.length; j++){
			player.bugs[j].resolve(playerTwo);
		}
	}
	
	this.objectPassives = function(){
		for(var x=0; x < cells.length; x++){
			for(var y=0; y < cells[x].length; y++){
				if(cells[x][y].object && !cells[x][y].object.passiveTriggered){
					cells[x][y].object.passiveTriggered = true;
					cells[x][y].object.passive();
				}
			}
		}
		for(var x=0; x < cells.length; x++){
			for(var y=0; y < cells[x].length; y++){
				if(cells[x][y].object){
					cells[x][y].object.passiveTriggered = false;
				}
			}
		}
	}

	this.resolve = function(attacker, defender){
		this.resolveActions(attacker, defender);
		this.resolveObjects(attacker, defender);
		attacker.stunned = attacker.stunned - 1;
		attacker.bubbled = attacker.bubbled - 1;
	}

	this.resolveActions = function(attacker, defender){
		if(attacker.stunned < 1 && attacker.bubbled < 1){
			if(attacker.action === ACTIONS.BUSTER){
				console.log("player " + attacker.name + " used: their BUSTER");
				if(CANNON1.hithuh(attacker, defender)){
					if(defender.guard < 1){
						defender.hp = defender.hp - attacker.busterDamage;
						console.log("it hit!");
					}
					else{
						attacker.hp = attacker.hp - defender.reflDamage;
						console.log("it was reflected!");
					}
				}
				else{
					console.log("it missed!");
				}
			}
			else if(attacker.action === ACTIONS.CARD){
				console.log("player " + attacker.name + " used: " + attacker.card.name);
				if(attacker.card.hithuh(attacker, defender)){
					attacker.card.effecthit(attacker, defender);
					if(defender.guard < 1){
						defender.hp = defender.hp - attacker.card.damage * attacker.card.hits;
						console.log("it hit!");
					}
					else{
						attacker.hp = attacker.hp - defender.reflDamage;
						console.log("it was reflected!");
					}
				}
				else{
					attacker.card.effectmiss(attacker, defender);
					console.log("it missed!");
				}
			}
		}
		else{
			console.log("player " + attacker.name + " is Stunned!");
		}
	}

	this.resolveObjects = function(attacker, defender){
		var fakeDefender = {
			x: -1,
			y: -1,
			invis: 0,
			guard: 0
		};

		cells[defender.x][defender.y].object = new PlayerObject();
		for(var x=0; x < cells.length; x++){
			for(var y=0; y < cells[x].length; y++){
				if(cells[x][y].object && cells[x][y].object.id !== "playerObject"){
					fakeDefender.x = x;
					fakeDefender.y = y;

					if(attacker.action === ACTIONS.BUSTER){
						if(CANNON1.hithuh(attacker, fakeDefender)){
							cells[x][y].object.hitByBuster(attacker);
						}
					}
					else if(attacker.action === ACTIONS.CARD){
						if(attacker.card.hithuh(attacker, fakeDefender)){
							if(attacker.name === "one"){
								cells[x][y].object.effecthit(attacker.card, "east");
							}
							else{
								cells[x][y].object.effecthit(attacker.card, "west");
							}
						}
					}
				}
			}
		}
		cells[defender.x][defender.y].object = null;
	}

	this.cellHasSolidObject = function(x, y){
		if(cells[x][y]){
			if(cells[x][y].object){
				return cells[x][y].object.solid;
			}
		}
		return false;
	}

	this.resetPlayer = function(player){
		player.action = ACTIONS.NONE;
		player.card = null;
		player.invis = player.invis - 1;
		player.guard = player.guard - 1;
	}

	this.switchPlayer = function(){
		if(player === playerOne){
			player = playerTwo;
		}
		else{
			player = playerOne;
		}
	}
	
	this.turnOffbuttons = function(){
		document.getElementById("P1").style.display='none';
		document.getElementById("P2").style.display='none';
		
		document.getElementById("playerText").style.display='block';
		document.getElementById("playerText").innerHTML ='You are player ' + player.name;
		
		document.getElementById("confirm").style.display='block';
		playerSelected = true;
	}

	this.buster = function(playerNum){
		document.getElementById("nextturn").style.display='block';
		if(playerNum === 1){
			playerOne.action = ACTIONS.BUSTER;
			if(playerOne.card !== null){
				HAND.unshift(playerOne.card);
				playerOne.card = null;
			}
		}
		else if (playerNum === 2){
			playerTwo.action = ACTIONS.BUSTER;
			if(playerTwo.card !== null){
				HAND.unshift(playerTwo.card);
				playerTwo.card = null;
			}
		}
	}

	this.card = function(playerNum){
		document.getElementById("nextturn").style.display='block';
		if(HAND.length === 0){
			this.buster(playerNum);
		}
		else{
			if(playerNum === 1){
				if(playerOne.action !== ACTIONS.CARD){
					playerOne.action = ACTIONS.CARD;
					playerOne.card = HAND.shift();
				}
			}
			else if (playerNum === 2){
				if(playerTwo.action !== ACTIONS.CARD){
					playerTwo.action = ACTIONS.CARD;
					playerTwo.card = HAND.shift();
				}
			}
		}
	}

	this.showRange = function(attacker, card){
		var fakeDefender = {
			x: -1,
			y: -1,
			invis: 0,
			guard: 0
		};
		for(var x=0;x<cells.length;x++){
			for(var y=0;y<cells[x].length;y++){
				fakeDefender.x = x;
				fakeDefender.y = y;
				if(card.hithuh(attacker, fakeDefender)){
					var left = x*cellWidth;
					var top = y*cellHeight + cheight;
					ctx.fillStyle="#00FF00";
					ctx.fillRect(left+cellWidth/4,top+cellHeight/4,cellWidth/2,cellHeight/2);
				}
			}
		}
	}

	this.randomMovePlayer = function(player){
		player.x = Math.floor(Math.random() * 6);
		player.y = Math.floor(Math.random() * 3);

		if(cells[player.x][player.y] === player.color){
			this.randomMovePlayer(player);
		}
		return true;
	}

	this.isGameOver = function(){
		if(playerOne.hp < 1 && playerTwo.hp < 1){
			console.log("GAME OVER - TIE");
			document.getElementById("nextturn").disabled = true;
		}
		else if(playerOne.hp < 1){
			console.log("GAME OVER - P2 Wins");
			document.getElementById("nextturn").disabled = true;
		}
		else if(playerTwo.hp < 1){
			console.log("GAME OVER - P1 Wins");
			document.getElementById("nextturn").disabled = true;
		}
	}
}
