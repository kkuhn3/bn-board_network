SIDE = {
	LEFT: red_tile,
	RIGHT: blue_tile,
}

ACTIONS = {
	NONE: 0,
	BUSTER: 1,
	CARD: 2,
}

var playerHP = 500;

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
	stunned: 0
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
	stunned:0
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
					cells[x][y]=SIDE.LEFT;
				}
				else{
					cells[x][y]=SIDE.RIGHT;
				}
			}
		}
	}

	this.reset = function(){
		this.initCells();
		playerOne.hp = playerHP;
		playerOne.x = 1;
		playerOne.y = 1;
		playerTwo.hp = playerHP;
		playerTwo.x = 4;
		playerTwo.y = 1;
		player = playerOne;
		$.post("save.php",{id:"confirmone", state: JSON.stringify(false)});
		$.post("save.php",{id:"confirmtwo", state: JSON.stringify(false)});
	}

	this.drawCell = function(x,y){
		var top = x*cellWidth;
		var left = y*cellHeight + cheight;
		ctx.drawImage(cells[x][y],top+2,left+2,cellWidth-4,cellHeight-4);
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
			}
			else if(playerTwo.x === this.mouseCellX && playerTwo.y === this.mouseCellY && player === playerTwo){
				this.selected = 2;
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
		if(this.selected === 1 && cells[this.mouseCellX][this.mouseCellY] === SIDE.LEFT){
			playerOne.x = this.mouseCellX;
			playerOne.y = this.mouseCellY;
		}
		else if (this.selected === 2 && cells[this.mouseCellX][this.mouseCellY] === SIDE.RIGHT){
			playerTwo.x = this.mouseCellX;
			playerTwo.y = this.mouseCellY;
		}

		this.draw();
		this.selected = -1;
	}.bind(this);

	this.resolveTurn = function(){
		$.post("save.php",{id:"confirm"+player.name, state: JSON.stringify(false)});
		console.log("======================= turn start =======================");
		this.p1priority = 2;
		this.p2priority = 2;
		if(playerOne.action === ACTIONS.CARD){
			this.p1priority = playerOne.card.priority;
		}
		if(playerTwo.action === ACTIONS.CARD){
			this.p2priority = playerTwo.card.priority;
		}

		if(this.p1priority === 0 && this.p2priority === 0){
			this.resolveActions(playerTwo, playerOne);
			playerTwo.stunned = playerTwo.stunned - 1;
			this.resolveActions(playerOne, playerTwo);
			playerOne.stunned = playerOne.stunned - 1;
		}
		else if(this.p1priority <= this.p2priority){
			this.resolveActions(playerOne, playerTwo);
			playerOne.stunned = playerOne.stunned - 1;
			this.resolveActions(playerTwo, playerOne);
			playerTwo.stunned = playerTwo.stunned - 1;
		}
		else{
			this.resolveActions(playerTwo, playerOne);
			playerTwo.stunned = playerTwo.stunned - 1;
			this.resolveActions(playerOne, playerTwo);
			playerOne.stunned = playerOne.stunned - 1;
		}

		this.resetPlayer(playerOne);
		this.resetPlayer(playerTwo);
		this.draw();
		custom.drawHand();
		console.log("======================== turn end ========================");
		document.getElementById("nextturn").style.display='none';
		this.isGameOver();
	}

	this.resolveActions = function(attacker, defender){
		if(attacker.stunned < 1){
			if(attacker.action === ACTIONS.BUSTER){
				console.log("player " + attacker.name + " used: their BUSTER");
				if(attacker.y === defender.y){
					if(defender.guard < 1){
						defender.hp = defender.hp - 1000;
						console.log("it hit!");
					}
					else{
						attacker.hp = attacker.hp - 50;
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
						defender.hp = defender.hp - attacker.card.damage;
						console.log("it hit!");
					}
					else{
						attacker.hp = attacker.hp - 50;
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

	this.resetPlayer = function(player){
		player.action = ACTIONS.NONE;
		player.card = null;
		player.invis = player.invis - 1;
		player.guard = player.guard - 1;
	}

	// Player functions:
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
