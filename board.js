SIDE = {
	LEFT: 'red',
	RIGHT: 'blue',
}

PANELTYPE = {
	NORMAL: "normal",
	HOLE: "hole",
	GRASS: "grass",
	POISON: "poison",
	CRACKED: "cracked",
	ICE: "ice",
	HOLY: "holy",
	BROKEN: "broken",
	UP: "up",
	RIGHT: "right",
	DOWN: "down",
	LEFT: "left",
}
var paneltypes = [PANELTYPE.NORMAL, PANELTYPE.HOLE, PANELTYPE.GRASS, PANELTYPE.POISON, 
				  PANELTYPE.CRACKED, PANELTYPE.ICE, PANELTYPE.HOLY, PANELTYPE.BROKEN, 
				  PANELTYPE.UP, PANELTYPE.RIGHT, PANELTYPE.DOWN, PANELTYPE.LEFT];

ACTIONS = {
	NONE: 0,
	BUSTER: 1,
	CARD: 2,
	SPECIAL: 3,
}

var playerHP = 1500;
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
	guard:null,
	stunned: 0,
	bubbled: 0,
	frozen: 0,
	busterDamage: busterDefualt,
	bugs: [],
	barrier: null, 
	bonusDamage: 0,
	invincible: 0,
	confused: 0,
	timpanid: 0,
	blinded: 0,
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
	guard:null,
	stunned:0,
	bubbled: 0,
	frozen: 0,
	busterDamage: busterDefualt,
	bugs: [],
	barrier: null,
	bonusDamage: 0,
	invincible: 0,
	confused: 0,
	timpanid: 0,
	blinded: 0,
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
						defaultside:SIDE.LEFT,
						sideTimer:-1,
						object:[],
						//panelType:PANELTYPE.NORMAL,
						panelType: paneltypes[Math.floor(Math.random() * paneltypes.length)],
						panelTimer:-1,
						player:null
					};
				}
				else{
					cells[x][y]={
						side:SIDE.RIGHT,
						defaultside:SIDE.RIGHT,
						sideTimer:-1,
						object:[],
						//panelType:PANELTYPE.NORMAL,
						panelType: paneltypes[Math.floor(Math.random() * paneltypes.length)],
						panelTimer:-1,
						player:null
					};
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
		cells[1][1].player = playerOne;
		cells[4][1].player = playerTwo;
		cells[1][1].panelType = PANELTYPE.NORMAL;
		cells[4][1].panelType = PANELTYPE.NORMAL;
		player = playerOne;
		$.post("save.php",{id:"confirmone", state: JSON.stringify(false)});
		$.post("save.php",{id:"confirmtwo", state: JSON.stringify(false)});
	}

	this.drawCell = function(x,y){
		var left = x*cellWidth;
		var top = y*cellHeight + cheight;
		if(this.isOverlayPanel(cells[x][y].panelType)){
			ctx.drawImage(document.getElementById(cells[x][y].side+PANELTYPE.NORMAL),left,top,cellWidth,cellHeight);
			ctx.drawImage(document.getElementById(cells[x][y].panelType+"overlay"),left,top,cellWidth,cellHeight);
		}
		else{
			ctx.drawImage(document.getElementById(cells[x][y].side+cells[x][y].panelType),left,top,cellWidth,cellHeight);
		}
		for(var i = 0; i < cells[x][y].object.length; i++){
			ctx.drawImage(cells[x][y].object[i].image, left+cellWidth/8, top-cellHeight/2, 3*cellWidth/4, cellHeight*1.5);
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
		if(player.name === playerOne.name || playerTwo.blinded < 1){
			this.drawPlayer(playerOne);
		}
		if(player.name === playerTwo.name || playerOne.blinded < 1){
			this.drawPlayer(playerTwo);
		}
	}

	this.mouseDown = function(e){
		this.selected = -1;
		if(movementEnabled){
			this.mouseCellX = Math.floor(this.width * e.offsetX/e.target.width);
			this.mouseCellY = Math.floor((this.height * (e.offsetY - e.target.height/2 )) / (e.target.height/2));
			if(playerOne.x === this.mouseCellX && playerOne.y === this.mouseCellY && player === playerOne && this.playerCanMove(player)){
				this.selected = 1;
				cells[this.mouseCellX][this.mouseCellY].player = null;
			}
			else if(playerTwo.x === this.mouseCellX && playerTwo.y === this.mouseCellY && player === playerTwo && this.playerCanMove(player)){
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
		if(this.selected === 1 && this.isCellThisPlayerValid(this.mouseCellX, this.mouseCellY, playerOne)){
			playerOne.x = this.mouseCellX;
			playerOne.y = this.mouseCellY;
			cells[this.mouseCellX][this.mouseCellY].player = playerOne;
		}
		else if (this.selected === 2 && this.isCellThisPlayerValid(this.mouseCellX, this.mouseCellY, playerTwo)){
			playerTwo.x = this.mouseCellX;
			playerTwo.y = this.mouseCellY;
			cells[this.mouseCellX][this.mouseCellY].player = playerTwo;
		}

		this.draw();
		this.selected = -1;
	}.bind(this);
	
	this.playerCanMove = function(aPlayer){
		if(aPlayer.stunned > 0){
			return false;
		}
		if(aPlayer.frozen > 0){
			return false;
		}
		if(aPlayer.bubbled > 0){
			return false;
		}
		if(aPlayer.timpanid > 0){
			return false;
		}
		return true;
	}

	this.resolveTurn = function(){
		$.post("save.php",{id:"confirm"+player.name, state: JSON.stringify(false)});
		console.log("======================= turn start =======================");
		this.resolvePlayerPanels(playerOne);
		this.resolvePlayerPanels(playerTwo);
		this.objectPassives();
		this.p1priority = 2;
		this.p2priority = 2;
		if(playerOne.confused > 0 && this.generateRandomBoolean()){
			playerOne.action = ACTIONS.BUSTER;
		}
		if(playerTwo.confused > 0 && this.generateRandomBoolean()){
			playerTwo.action = ACTIONS.BUSTER;
		}
		if(playerOne.action === ACTIONS.CARD || playerOne.action === ACTIONS.SPECIAL){
			this.p1priority = playerOne.card.priority;
		}
		if(playerTwo.action === ACTIONS.CARD || playerTwo.action === ACTIONS.SPECIAL){
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
		this.resolvePlayerPanels(playerOne);
		this.resolvePlayerPanels(playerTwo);
		this.resolvePanels();
		this.resetPlayer(playerOne);
		this.resetPlayer(playerTwo);
		this.draw();
		custom.drawHand();
		console.log("======================== turn end ========================");
		document.getElementById("nextturn").style.display='none';
		this.isGameOver();
	}

	this.generateRandomBoolean = function(){
		this.sum = 0;
		if(playerOne.ACTIONS === ACTIONS.CARD){
			sum = sum + CARDLIST.indexOf(playerOne.card);
		}
		else{
			sum = sum + CARDLIST.length+1;
		}
		if(playerTwo.ACTIONS === ACTIONS.CARD){
			sum = sum + CARDLIST.indexOf(playerTwo.card);
		}
		else{
			sum = sum + CARDLIST.length+2;
		}
		this.val = this.sum % 2;
		return this.val === 1;
	}

	this.resolveBugs = function(){
		for(var i = 0; i < playerOne.bugs.length; i++){
			playerOne.bugs[i].resolve(playerOne);
		}
		for(var j = 0; j < playerTwo.bugs.length; j++){
			playerTwo.bugs[j].resolve(playerTwo);
		}
	}

	this.resolvePlayerPanels = function(aPlayer){
		this.movePanels = [PANELTYPE.UP, PANELTYPE.RIGHT, PANELTYPE.DOWN, PANELTYPE.LEFT];
		while(this.movePanels.includes(cells[aPlayer.x][aPlayer.y].panelType)){
			this.PlayerPanel = cells[aPlayer.x][aPlayer.y].panelType;
			if(this.PlayerPanel === PANELTYPE.UP){
				if(board.isCellThisPlayerValid(aPlayer.x, aPlayer.y-1, aPlayer)){
					aPlayer.y = aPlayer.y - 1;
				}
				else{
					break;
				}
			}
			else if(this.PlayerPanel === PANELTYPE.RIGHT){
				if(board.isCellThisPlayerValid(aPlayer.x+1, aPlayer.y, aPlayer)){
					aPlayer.x = aPlayer.x + 1;
				}
				else{
					break;
				}
			}
			else if(this.PlayerPanel === PANELTYPE.DOWN){
				if(board.isCellThisPlayerValid(aPlayer.x, aPlayer.y+1, aPlayer)){
					aPlayer.y = aPlayer.y + 1;
				}
				else{
					break;
				}
			}
			else if(this.PlayerPanel === PANELTYPE.LEFT){
				if(board.isCellThisPlayerValid(aPlayer.x-1, aPlayer.y, aPlayer)){
					aPlayer.x = aPlayer.x - 1;
				}
				else{
					break;
				}
			}
		}
		if(cells[aPlayer.x][aPlayer.y].panelType === PANELTYPE.POISON){
			aPlayer.hp = aPlayer.hp - 25;
		}
	}
	
	this.resolvePanels = function(){
		for(var i = 0; i < cells.length; i++){
			for(var j = 0; j < cells[i].length; j++){
				if(cells[i][j].sideTimer === 0){
					if(cells[i][j].defaultside === SIDE.LEFT){
						if(playerTwo.x > i || playerTwo.y !== j){
							cells[i][j].side = cells[i][j].defaultside;
							cells[i][j].sideTimer = -1;
						}
					}
					else if(cells[i][j].defaultside === SIDE.RIGHT){
						if(playerOne.x < i || playerOne.y !== j){
							cells[i][j].side = cells[i][j].defaultside;
							cells[i][j].sideTimer = -1;
						}
					}
				}
				else if(cells[i][j].sideTimer > 0){
					cells[i][j].sideTimer--;
				}
				if(cells[i][j].panelTimer === 0){
					this.convertPanel(i, j, PANELTYPE.NORMAL);
					cells[i][j].panelTimer = -1;
				}
				else if(cells[i][j].panelTimer > 0){
					cells[i][j].panelTimer--;
				}
			}
		}
	}
	
	this.objectPassives = function(){
		for(var x=0; x < cells.length; x++){
			for(var y=0; y < cells[x].length; y++){
				for(var i=0; i < cells[x][y].object.length; i++){
					if(!cells[x][y].object[i].passiveTriggered){
						cells[x][y].object[i].passiveTriggered = true;
						cells[x][y].object[i].passive();
					}
				}
			}
		}
		for(var x=0; x < cells.length; x++){
			for(var y=0; y < cells[x].length; y++){
				for(var i=0; i < cells[x][y].object.length; i++){
					cells[x][y].object[i].passiveTriggered = false;
				}
			}
		}
	}

	this.resolve = function(attacker, defender){
		this.resolveActions(attacker, defender);
		this.resolveObjects(attacker, defender);
		attacker.stunned = attacker.stunned - 1;
		attacker.bubbled = attacker.bubbled - 1;
		attacker.frozen = attacker.frozen - 1;
	}

	this.resolveActions = function(attacker, defender){
		if(attacker.name === player.name){
			document.getElementById("special").style.display='none';
		}
		if(attacker.stunned < 1 && attacker.bubbled < 1){
			if(attacker.action === ACTIONS.BUSTER){
				console.log("player " + attacker.name + " used: their BUSTER");
				if(CANNON1.hithuh(attacker, defender)){
					if(defender.guard === null){
						defender.hp = defender.hp - attacker.busterDamage;
						defender.bubbled = 0;
						console.log("it hit!");
					}
					else{
						defender.guard.onHit(attacker, defender);
						console.log("it was guarded!");
					}
				}
				else{
					console.log("it missed!");
				}
			}
			else if(attacker.action === ACTIONS.CARD || attacker.action === ACTIONS.SPECIAL){
				console.log("player " + attacker.name + " used: " + attacker.card.name);
				if(attacker.card.hithuh(attacker, defender)){
					if(attacker.card.elements.includes(ELEMENTS.break)){
						defender.guard = null;
					}
					if(attacker.card.elements.includes(ELEMENTS.wind)){
						defender.barrier = null;
					}
					if(defender.guard === null){
						if(defender.invincible < 1){
							this.oneHitmultiplier = this.calculateOneHitMultiplier(attacker, defender);
							this.allHitmultiplier = this.calculateAllHitMultiplier(attacker, defender);
							this.damageDealt = this.calculateDamage(attacker, defender, this.oneHitmultiplier, this.allHitmultiplier);
							defender.hp = defender.hp - this.damageDealt;
							if(defender.barrier && defender.barrier.isBarrierDestroyed()){
								defender.barrier = null;
							}
							console.log("it hit! Dealing " + this.damageDealt + " damage!");
						}
						else{
							console.log("it hit! But Player " + defender.name + " was Invincible.");
						}
						defender.bubbled = 0;
					}
					else{
						defender.guard.onHit(attacker, defender);
						console.log("it was reflected!");
					}
					attacker.card.effecthit(attacker, defender);
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
	
	this.calculateOneHitMultiplier = function(attacker, defender){
		this.multiplier = 1.0;
		if(attacker.card.elements.includes(ELEMENTS.fire) && cells[defender.x][defender.y].panelType === PANELTYPE.GRASS){
			this.multiplier = this.multiplier*2;
			this.convertPanel(defender.x, defender.y, PANELTYPE.NORMAL);
		}
		if(attacker.card.elements.includes(ELEMENTS.elec) && defender.bubbled > 0){
			this.multiplier = this.multiplier*2;
		}
		if(attacker.card.elements.includes(ELEMENTS.break) && defender.frozen > 0){
			this.multiplier = this.multiplier*2;
			defender.frozen = 0;
		}
		if(attacker.card.elements.includes(ELEMENTS.elec) && defender.barrier !== null && defender.barrier.id === "BubbleBarrier"){
			this.multiplier = this.multiplier*2;
			defender.barrier = null;
		}
		return this.multiplier;
	}
	
	this.calculateAllHitMultiplier = function(attacker, defender){
		this.multiplier = 1.0;
		if(cells[defender.x][defender.y].panelType === PANELTYPE.HOLY){
			this.multiplier = this.multiplier * .5;
		}
		return this.multiplier;
	}
	
	this.calculateDamage = function(attacker, defender, oneHitMulti, allHitMulti){
		if(attacker.card.damage === 0){
			return 0;
		}
		if(!attacker.card.addDamage){
			attacker.card.addDamage = 0;
		}
		if(!attacker.bonusDamage){
			attacker.bonusDamage = 0;
		}
		this.baseDamage = attacker.card.damage + attacker.card.addDamage + attacker.bonusDamage;
		this.barrierAbsorbed = 0;
		if(defender.barrier !== null){
			this.barrierAbsorbed = defender.barrier.calculateDamageAbsorbed(this.baseDamage, oneHitMulti, allHitMulti, attacker.card.hits);
		}
		this.firstHit = this.baseDamage * oneHitMulti;
		this.restHits = 0;
		if(attacker.card.hits > 1){
			this.restHits = this.baseDamage * (attacker.card.hits - 1);
		}
		this.totalBase = this.firstHit + this.restHits;
		return this.totalBase * allHitMulti - this.barrierAbsorbed;
	}

	this.resolveObjects = function(attacker, defender){
		var fakeDefender = {
			x: -1,
			y: -1,
			invis: 0,
			guard: null
		};

		cells[defender.x][defender.y].object.concat([new PlayerObject()]);
		for(var x=0; x < cells.length; x++){
			for(var y=0; y < cells[x].length; y++){
				for(var i=0; i < cells[x][y].object.length; i++){
					if(cells[x][y].object[i].id !== "playerObject"){
						fakeDefender.x = x;
						fakeDefender.y = y;

						if(attacker.action === ACTIONS.BUSTER){
							if(CANNON1.hithuh(attacker, fakeDefender)){
								cells[x][y].object[i].hitByBuster(attacker);
							}
						}
						else if(attacker.action === ACTIONS.CARD){
							if(attacker.card.hithuh(attacker, fakeDefender)){
								cells[x][y].object[i].effecthit(attacker);
							}
						}
					}
				}
			}
		}
		cells[defender.x][defender.y].object = [];
	}

	this.convertPanel = function(x, y, newPanel){
		if(cells[x]){
			if(cells[x][y]){
				if(cells[x][y].panelType === PANELTYPE.HOLE){
					return false;
				}
				if(cells[x][y].panelType === PANELTYPE.BROKEN && (PANELTYPE.NORMAL === newPanel || PANELTYPE.HOLY === newPanel)){
					cells[x][y].panelType = newPanel;
					return true;
				}
				if(cells[x][y].panelType === PANELTYPE.BROKEN){
					return false;
				}
				if(cells[x][y].panelType === PANELTYPE.CRACKED && newPanel === PANELTYPE.CRACKED){
					newPanel = PANELTYPE.BROKEN;
				}
				if(newPanel === PANELTYPE.BROKEN){
					if(cells[x][y].player !== null || this.cellHasSolidObject(x, y)){
						newPanel = PANELTYPE.CRACKED;
					}
					else{
						cells[x][y].panelTimer = timer.turncount;
					}
				}
				cells[x][y].panelType = newPanel;
				return true;
			}
		}
		return false;
	}

	this.cellHasSolidObject = function(x, y){
		if(cells[x]){
			if(cells[x][y]){
				for(var i=0; i < cells[x][y].object.length; i++){
					if(cells[x][y].object[i].solid){
						return true;
					}
				}
			}
		}
		return false;
	}

	this.isHole = function(x, y){
		if(cells[x]){
			if(cells[x][y]){
				if(cells[x][y].panelType === PANELTYPE.HOLE){
					return true;
				}
				if(cells[x][y].panelType === PANELTYPE.BROKEN){
					return true;
				}
			}
		}
		return false;
	}

	this.isCellPlayerValid = function(x, y){
		if(cells[x]){
			if(cells[x][y]){
				if(this.isHole(x, y)){
					return false;
				}
				if(this.cellHasSolidObject(x, y)){
					return false;
				}
				if(cells[x][y].player !== null){
					return false;
				}
				return true;
			}
		}
		return false;
	}

	this.isCellThisPlayerValid = function(x, y, aPlayer){
		this.acceptedSide = SIDE.RIGHT;
		if(aPlayer.name === "one"){
			this.acceptedSide = SIDE.LEFT;
		}
		if(this.isCellPlayerValid(x, y)){
			return cells[x][y].side === this.acceptedSide;
		}
		return false;
	}

	this.isOverlayPanel = function(panel){
		var normalPanels = [PANELTYPE.GRASS, PANELTYPE.POISON, PANELTYPE.ICE, PANELTYPE.HOLY, 
							PANELTYPE.UP, PANELTYPE.RIGHT, PANELTYPE.DOWN, PANELTYPE.LEFT];
		if(normalPanels.indexOf(panel) !== -1){
			return true;
		}
		return false;
	}

	this.resetPlayer = function(player){
		player.action = ACTIONS.NONE;
		player.card = null;
		player.invis = player.invis - 1;
		player.guard = null;
		player.invincible = player.invincible - 1;
		player.confused = player.confused - 1;
		player.timpanid = player.timpanid - 1;
		player.blinded = player.blinded - 1;
	}

	this.switchPlayer = function(){
		if(player === playerOne){
			player = playerTwo;
		}
		else{
			player = playerOne;
		}
		customPick.drawHand();
	}
	
	this.turnOffbuttons = function(){
		document.getElementById("P1").style.display='none';
		document.getElementById("P2").style.display='none';
		
		document.getElementById("playerText").style.display='block';
		document.getElementById("playerText").innerHTML ='You are player ' + player.name;
		
		document.getElementById("confirm").style.display='block';
		playerSelected = true;
	}

	this.showRange = function(attacker, card){
		var fakeDefender = {
			x: -1,
			y: -1,
			invis: 0,
			guard: null
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
		fakeDefender.x = playerOne.x;
		fakeDefender.y = playerOne.y;
		if(attacker.name === "one"){
			fakeDefender.x = playerTwo.x;
			fakeDefender.y = playerTwo.y;
		}
		card.hithuh(attacker, fakeDefender);
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
