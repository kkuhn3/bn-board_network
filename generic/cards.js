ELEMENTS = {
	fire: "fire",
	aqua: "aqua",
	elec: "elec",
	wood: "wood",

	break: "break",
	cursor: "cursor",
	wind: "wind",
	sword: "sword", 

	normal: "normal"
}

// Use cannon for example
function CANNON1(){
	// It's an ID. Used to map the card to itself.
	this.id="CANNON1";
	// It's name! (just for printouts)
	this.name="Cannon1";
	// The image used for this card
	this.image=cannon1;
	// what codes it can be selected with. any character listed and * means all.
	this.code=["A","B","C"];
	// whic set of cards it comes from.
	this.goo="Debug";
	// How many copies per folder
	this.copies=5;
	// What "level" of card it is.
	this.rank="standard";
	// how much damage it does on hit
	this.damage=40;
	// How many times this attack hits
	this.hits=1;
	// 0 "stop time", cannot counter. p2 gets priority
	// 1 "fast", can counter 3s
	// 2 "medium", cannot counter or be countered
	// 3 "slow", can be countered by 1s
	this.priority=2;
	// Which element(s) this chip is
	this.elements=[];
	// returns True if hits, false otherwise. 
	// may adjust damage
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			if(attacker.name === playerOne.name){
				for(var i=0; i < defender.x - attacker.x; i++){
					if(board.cellHasSolidObject(attacker.x + i, attacker.y)){
						return false;
					}
				}
				return attacker.y === defender.y && defender.x > attacker.x;
			}
			else{
				for(var i=0; i < attacker.x - defender.x; i++){
					if(board.cellHasSolidObject(attacker.x - i, attacker.y)){
						return false;
					}
				}
				return attacker.y === defender.y && defender.x < attacker.x;
			}
		}
		return false;
	};
	// effects that trigger when the attack hits
	this.effecthit= function(attacker, defender){};
	// effects that trigger when teh attack misses
	this.effectmiss= function(attacker, defender){};
}

function CANNON2(){
	this.id="CANNON2";
	this.name="Cannon2";
	this.image=cannon2;
	this.code=["B","C","D"];
	this.goo="Debug";
	this.copies=5;
	this.rank="standard";
	this.damage=80;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new CANNON1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function CANNON3(){
	this.id="CANNON3";
	this.name="Cannon3";
	this.image=cannon3;
	this.code=["C","D","E"];
	this.goo="Debug";
	this.copies=5;
	this.rank="standard";
	this.damage=120;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new CANNON1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function PIERCECANNON(){
	this.id="PIERCECANNON";
	this.name="Pierce Cannon";
	this.image=piercecannon;
	this.code=["D","E","F"];
	this.goo="Debug";
	this.copies=5;
	this.rank="standard";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.cursor];
	this.hithuh= function(attacker, defender){
		if(attacker.name === playerOne.name){
			for(var i=1; i <= defender.x - attacker.x; i++){
				if(board.cellHasSolidObject(attacker.x + i, attacker.y)){
					return false;
				}
			}
			return attacker.y === defender.y && defender.x > attacker.x;
		}
		else{
			for(var i=1; i <= attacker.x - defender.x; i++){
				if(board.cellHasSolidObject(attacker.x - i, attacker.y)){
					return false;
				}
			}
			return attacker.y === defender.y && defender.x < attacker.x;
		}
		return false;
	};
	this.effecthit= function(attacker, defender){
		if(defender.guard === null){
			defender.invis = 0;
		}
	};
	this.effectmiss= function(attacker, defender){};
}

function BREAKCANNON(){
	this.id="BREAKCANNON";
	this.name="Break Cannon";
	this.image=breakcannon;
	this.code=["E","F","G"];
	this.goo="Debug";
	this.copies=5;
	this.rank="standard";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new CANNON1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function STUNCANNON(){
	this.id="STUNCANNON";
	this.name="Stun Cannon";
	this.image=stuncannon;
	this.code=["F","G","H"];
	this.goo="Debug";
	this.copies=5;
	this.rank="standard";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new CANNON1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		if(defender.guard === null){
			defender.stunned = 1;
		}
	};
	this.effectmiss= function(attacker, defender){};
}

function GUARD(){
	this.id="GUARD";
	this.name="Guard";
	this.image=guard;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="Debug";
	this.damage=50;
	this.boostDamage=0;
	this.hits=1;
	this.copies=5;
	this.rank="standard";
	this.priority=1;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		attacker.guard = new Reflector(GUARD.damage);
	};
}

function INVIS(){
	this.id="INVIS";
	this.name="Invis";
	this.image=invis;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="Debug";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.copies=5;
	this.rank="standard";
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		attacker.invis = 2;
	};
}

function AREAGRAB(){
	this.id="AREAGRAB";
	this.name="Area Grab";
	this.image=areagrab;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="Debug";
	this.damage=10;
	this.boostDamage=0;
	this.hits=1;
	this.copies=5;
	this.rank="standard";
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		if(defender.x === (new AREAGRAB()).affectedColumn(attacker, defender) && defender.invis < 1){
			return true;
		}
		return false;
	};
	this.affectedColumn= function(attacker, defender){
		if(attacker.name === playerOne.name){
			this.column = 7;
			for(var x=0;x<cells.length;x++){
				for(var y=0;y<cells[x].length;y++){
					if(cells[x][y].side===SIDE.RIGHT && x < this.column){
						this.column = x;
					}
				}
			}
			return this.column;
		}
		else{
			this.column = -1;
			for(var x=0;x<cells.length;x++){
				for(var y=0;y<cells[x].length;y++){
					if(cells[x][y].side===SIDE.LEFT && x > this.column){
						this.column = x;
					}
				}
			}
			return this.column;
		}
	};
	this.effecthit= function(attacker, defender){
		this.column = (new AREAGRAB()).affectedColumn(attacker, defender);
		if(attacker.name === playerOne.name){
			for(var x=0;x<cells.length;x++){
				for(var y=0;y<cells[x].length;y++){
					if(x === this.column && !(playerTwo.x === x && playerTwo.y === y) && !board.cellHasSolidObject(x,y) && cells[x][y].panelType !== PANELTYPE.MISS){
						cells[x][y].side = SIDE.LEFT;
						cells[x][y].sideTimer = 12;
					}
				}
			}
		}
		else{
			for(var x=0;x<cells.length;x++){
				for(var y=0;y<cells[x].length;y++){
					if(x === this.column && !(playerOne.x === x && playerOne.y === y) && !board.cellHasSolidObject(x,y) && cells[x][y].panelType !== PANELTYPE.MISS){
						cells[x][y].side = SIDE.RIGHT;
						cells[x][y].sideTimer = 12;
					}
				}
			}
		}
	};
	this.effectmiss= function(attacker, defender){
		(new AREAGRAB()).effecthit(attacker, defender);
	};
}

function SWORD(){
	this.id="SWORD";
	this.name="Sword";
	this.image=sword;
	this.code=["G","H","I"];
	this.goo="Debug";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.copies=5;
	this.rank="standard";
	this.priority=1;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		this.direction = 0;
		if(attacker.name === playerOne.name){
			this.direction = 1;
		}
		else{
			this.direction = -1;
		}

		if(defender.invis < 1){
			if(attacker.y === defender.y){
				if(attacker.x + this.direction === defender.x){
					return true;
				}
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function WIDESWORD(){
	this.id="WIDESWORD";
	this.name="Wide Sword";
	this.image=widesword;
	this.code=["H","I","J"];
	this.goo="Debug";
	this.damage=80;
	this.boostDamage=0;
	this.hits=1;
	this.copies=5;
	this.rank="standard";
	this.priority=1;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		this.direction = 0;
		if(attacker.name === playerOne.name){
			this.direction = 1;
		}
		else{
			this.direction = -1;
		}

		if(defender.invis < 1){
			if(attacker.y === defender.y || attacker.y + 1 === defender.y || attacker.y -1 === defender.y){
				if(attacker.x + this.direction === defender.x){
					return true;
				}
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function LONGSWORD(){
	this.id="LONGSWORD";
	this.name="Long Sword";
	this.image=longsword;
	this.code=["I","J","K"];
	this.goo="Debug";
	this.damage=80;
	this.boostDamage=0;
	this.hits=1;
	this.copies=5;
	this.rank="standard";
	this.priority=1;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		this.direction = 0;
		if(attacker.name === playerOne.name){
			this.direction = 1;
		}
		else{
			this.direction = -1;
		}

		if(defender.invis < 1){
			if(attacker.y === defender.y){
				if(attacker.x + this.direction === defender.x || attacker.x + this.direction + this.direction === defender.x){
					return true;
				}
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

var CARDLIST = null;
var DEFAULTCARDS = [new CANNON1(), new CANNON2(), new CANNON3(), new PIERCECANNON(), new BREAKCANNON(), new STUNCANNON(), new GUARD(), new INVIS(), new AREAGRAB(), new SWORD(), new WIDESWORD(), new LONGSWORD()];
var TEMPDECKLIST = null;
var BUILDABLECARDS = null;

var randomCard = function(){
	return CARDLIST[Math.floor(Math.random() * CARDLIST.length)]
}

function Cards(){
	this.getCardById = function(id){
		for(var i = 0; i < CARDLIST.length; i++){
			if(CARDLIST[i].id === id){
				return CARDLIST[i];
			}
		}
		return false;
	}

	this.initCards = function(){
		CARDLIST = DEFAULTCARDS.concat(BN6CARDS).concat(BN6UNCARDS).concat(BN6PAS).concat(SF3CARDS);
		BUILDABLECARDS = DEFAULTCARDS.concat(BN6CARDS).concat(SF3CARDS);
		TEMPDECKLIST = [].concat(BN6CARDS).concat(SF3CARDS);
		TEMPDECKLIST = [new BN6BigBomb(), new BN6SandWorm1(), new SF3WhiteMeteor(), new BN6Boomerang(), new BN6Lance()];
	}

	this.setDeck = function(newDeckID){
		for(var i = 0; i < FOLDERS.length; i++){
			if(FOLDERS[i].id === newDeckID){
				customPick.setDeck(FOLDERS[i].contents);
			}
		}
	}

	this.around = function(x, y, defender){
		var offX = Math.abs(defender.x - x);
		var offY = Math.abs(defender.y - y);
		if(offX === 0 && offY === 0){
			return false;
		}
		return offX < 2 && offY < 2;
	}
	
	this.damageText = function(aCard){
		this.damageTxt = "" + aCard.damage;
		if(aCard.addDamage && aCard.addDamage > 0){
			this.damageTxt = this.damageTxt + "+" + (aCard.addDamage + aCard.boostDamage);
			if(aCard.hits > 1){
				return "(" + this.damageTxt + ")x" + aCard.hits;
			}
		}
		else if(aCard.boostDamage > 0){
			this.damageTxt = this.damageTxt + "+" + aCard.boostDamage;
			if(aCard.hits > 1){
				return "(" + this.damageTxt + ")x" + aCard.hits;
			}
		}
		else if(aCard.hits !== 1){
			return this.damageTxt + "x" + aCard.hits;
		}
		return this.damageTxt;
	}

	this.recoverHealth = function(attacker, health){
		if(attacker.hp > 0){
			attacker.hp = attacker.hp + health;
			if(attacker.hp > playerHP){
				attacker.hp = playerHP;
			}
		}
	}
}
