SIDE = {
	LEFT: "#FF0000",
	RIGHT: "#0000FF",
}

ACTIONS = {
	NONE: 0,
	BUSTER: 1,
	CARD: 2,
}

var playerOne = {
	name:"one",
	hp:1000,
	color:"#0000FF",
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
	hp:1000,
	color:"#FF0000",
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

function Board(width,height,canvas){
	cells = [[]];
	this.width = width;
	this.height = height;
	this.canvas = canvas;
	this.selected = -1;
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
		playerOne.hp = 1000;
		playerOne.x = 1;
		playerOne.y = 1;
		playerTwo.hp = 1000;
		playerTwo.x = 4;
		playerTwo.y = 1;
		player = playerOne;
	}

	this.drawCell = function(x,y){
		var canvas = this.canvas;
		var cwidth = canvas.width;
		var cheight = canvas.height;
		var cellWidth = cwidth/this.width;
		var cellHeight = cheight/this.height;
		var top = x*cellWidth;
		var left = y*cellHeight;
		var ctx = canvas.getContext('2d');
		ctx.fillStyle=cells[x][y];
		ctx.fillRect(top+2,left+2,cellWidth-4,cellHeight-4);
	}

	this.drawPlayer = function(player){
		var canvas = this.canvas;
		var ctx = canvas.getContext('2d');
		var cwidth = canvas.width;
		var cheight = canvas.height;
		var cellWidth = cwidth/this.width;
		var cellHeight = cheight/this.height;
		var centerX = player.x * cellWidth + cellWidth / 2;
		var centerY = player.y * cellHeight + cellHeight / 2;

		ctx.fillStyle=player.color;
		ctx.beginPath();
      	ctx.arc(centerX, centerY, cellHeight/2.5, 0, 2 * Math.PI, false);
    	ctx.fill();
    	ctx.fillStyle="#FFFFFF";
    	ctx.textAlign = "center";
    	ctx.font = "20px Arial";
		ctx.fillText(player.hp,centerX,centerY+cellHeight/4);
	}

	this.draw = function(){
		var canvas = this.canvas;
		var ctx = canvas.getContext('2d');
		var cwidth = canvas.width;
		var cheight = canvas.height;
		var cellWidth = cwidth/this.width;
		var cellHeight = cheight/this.height;
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
		this.mouseCellX = Math.floor(this.width * e.offsetX/e.target.width);
		this.mouseCellY = Math.floor(this.height * e.offsetY/e.target.height);
		if(playerOne.x === this.mouseCellX && playerOne.y === this.mouseCellY && player === playerOne){
			this.selected = 1;
		}
		else if(playerTwo.x === this.mouseCellX && playerTwo.y === this.mouseCellY && player === playerTwo){
			this.selected = 2;
		}
	}.bind(this);

	this.mouseMove = function(e){

	}

	this.mouseUp = function(e){
		this.mouseCellX = Math.floor(this.width * e.offsetX/e.target.width);
		this.mouseCellY = Math.floor(this.height * e.offsetY/e.target.height);
		if(this.selected === 1 && cells[this.mouseCellX][this.mouseCellY] === SIDE.LEFT){
			playerOne.x = this.mouseCellX;
			playerOne.y = this.mouseCellY;
		}
		else if (this.selected === 2 && cells[this.mouseCellX][this.mouseCellY] === SIDE.RIGHT){
			playerTwo.x = this.mouseCellX;
			playerTwo.y = this.mouseCellY;
		}

		this.draw();
		return false;
	}.bind(this);

	this.resolveTurn = function(){
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
		console.log("======================== turn end ========================");
		this.isGameOver();
	}

	this.resolveActions = function(attacker, defender){
		if(attacker.stunned < 1){
			if(attacker.action === ACTIONS.BUSTER){
				console.log("player " + attacker.name + " used: their BUSTER");
				if(attacker.y === defender.y){
					if(defender.guard < 1){
						defender.hp = defender.hp - 10;
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

		if(player === playerOne){
			document.getElementById("p2buster").style.display='none';
			document.getElementById("p2card").style.display='none';
			document.getElementById("p1buster").style.display='block';
			document.getElementById("p1card").style.display='block';
		}
		else{
			document.getElementById("p1buster").style.display='none';
			document.getElementById("p1card").style.display='none';
			document.getElementById("p2buster").style.display='block';
			document.getElementById("p2card").style.display='block';
		}
	}

	this.buster = function(playerNum){
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
					var canvas = this.canvas;
					var ctx = canvas.getContext('2d');
					var cwidth = canvas.width;
					var cheight = canvas.height;
					var cellWidth = cwidth/this.width;
					var cellHeight = cheight/this.height;
					var top = x*cellWidth;
					var left = y*cellHeight;
					ctx.fillStyle="#00FF00";
					ctx.fillRect(top+cellWidth/4,left+cellHeight/4,cellWidth/2,cellHeight/2);
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
			document.getElementById("rturn").disabled = true;
		}
		else if(playerOne.hp < 1){
			console.log("GAME OVER - P2 Wins");
			document.getElementById("nextturn").disabled = true;
			document.getElementById("rturn").disabled = true;
		}
		else if(playerTwo.hp < 1){
			console.log("GAME OVER - P1 Wins");
			document.getElementById("nextturn").disabled = true;
			document.getElementById("rturn").disabled = true;
		}
	}
}
