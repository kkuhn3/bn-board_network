ELEMENTS = {
	fire: "fire",
	aqua: "aqua",
	elec: "elec",
	wood: "wood",

	break: "break",
	cursor: "cursor",
	wind: "wind",
	sword: "sword"
}

// Use cannon for example
var CANNON1 = {
	// It's an ID. Used to map the card to itself.
	id:"CANNON1",
	// It's name! (just for printouts)
	name:"Cannon1",
	// The image used for this card
	image:cannon1,
	// what codes it can be selected with. any character listed and * means all.
	code:["A","B","C"],
	// How much it "costs" to add this to a folder. -- TODO -- Add folder restrictions on MB.
	// a. 0-19 MB - 5
	// b. 20-29 MB - 4
	// c. 30-39 MB - 3
	// d. 40-49 MB - 2
	// e. 50+ MB - 1
	mb:0,
	// What "level" of card it is.
	rank:"standard",
	// how much damage it does on hit
	damage:40,
	// How many times this attack hits
	hits:1,
	// 0 "stop time", cannot counter. p2 gets priority
	// 1 "fast", can counter 3s
	// 2 "medium", cannot counter or be countered
	// 3 "slow", can be countered by 1s
	priority:2,
	// Which element(s) this chip is
	elements:[],
	// returns True if hits, false otherwise. 
	// may adjust damage
	hithuh: function(attacker, defender){
		if(defender.invis < 1){
			if(attacker.name === "one"){
				for(var i=1; i <= defender.x - attacker.x; i++){
					if(board.cellHasSolidObject(attacker.x + i - 1, attacker.y)){
						return false;
					}
				}
				return attacker.y === defender.y && defender.x > attacker.x;
			}
			else{
				for(var i=1; i <= attacker.x - defender.x; i++){
					if(board.cellHasSolidObject(attacker.x - i + 1, attacker.y)){
						return false;
					}
				}
				return attacker.y === defender.y && defender.x < attacker.x;
			}
		}
		return false;
	},
	// effects that trigger when the attack hits
	effecthit: function(attacker, defender){},
	// effects that trigger when teh attack misses
	effectmiss: function(attacker, defender){}
}

var CANNON2 = {
	id:"CANNON2",
	name:"Cannon2",
	image:cannon2,
	code:["B","C","D"],
	mb:0,
	rank:"standard",
	damage:80,
	hits:1,
	priority:2,
	elements:[],
	hithuh: function(attacker, defender){
		return CANNON1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var CANNON3 = {
	id:"CANNON3",
	name:"Cannon3",
	image:cannon3,
	code:["C","D","E"],
	mb:0,
	rank:"standard",
	damage:120,
	hits:1,
	priority:2,
	elements:[],
	hithuh: function(attacker, defender){
		return CANNON1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var PIERCECANNON = {
	id:"PIERCECANNON",
	name:"Pierce Cannon",
	image:piercecannon,
	code:["D","E","F"],
	mb:0,
	rank:"standard",
	damage:100,
	hits:1,
	priority:2,
	elements:[ELEMENTS.cursor],
	hithuh: function(attacker, defender){
		if(attacker.name === "one"){
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
	},
	effecthit: function(attacker, defender){
		if(defender.guard < 1){
			defender.invis = 0;
		}
	},
	effectmiss: function(attacker, defender){}
}

var BREAKCANNON = {
	id:"BREAKCANNON",
	name:"Break Cannon",
	image:breakcannon,
	code:["E","F","G"],
	mb:0,
	rank:"standard",
	damage:100,
	hits:1,
	priority:2,
	elements:[ELEMENTS.break],
	hithuh: function(attacker, defender){
		return CANNON1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){
		defender.guard = 0;
	},
	effectmiss: function(attacker, defender){}
}

var STUNCANNON = {
	id:"STUNCANNON",
	name:"Stun Cannon",
	image:stuncannon,
	code:["F","G","H"],
	mb:0,
	rank:"standard",
	damage:100,
	hits:1,
	priority:2,
	elements:[ELEMENTS.elec],
	hithuh: function(attacker, defender){
		return CANNON1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){
		if(defender.guard < 1){
			defender.stunned = 1;
		}
	},
	effectmiss: function(attacker, defender){}
}

var GUARD = {
	id:"GUARD",
	name:"Guard",
	image:guard,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	damage:0,
	hits:0,
	mb:0,
	rank:"standard",
	priority:1,
	elements:[],
	hithuh: function(attacker, defender){
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){
		attacker.guard = 1;
	}
}

var INVIS = {
	id:"INVIS",
	name:"Invis",
	image:invis,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	damage:0,
	hits:0,
	mb:0,
	rank:"standard",
	priority:0,
	elements:[],
	hithuh: function(attacker, defender){
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){
		attacker.invis = 2;
	}
}

var AREAGRAB = {
	id:"AREAGRAB",
	name:"Area Grab",
	image:areagrab,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	damage:10,
	hits:1,
	mb:0,
	rank:"standard",
	priority:0,
	elements:[],
	hithuh: function(attacker, defender){
		if(defender.x === AREAGRAB.affectedColumn(attacker, defender) && defender.invis < 1){
			return true;
		}
		return false;
	},
	affectedColumn: function(attacker, defender){
		if(attacker.name === "one"){
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
	},
	effecthit: function(attacker, defender){
		this.column = AREAGRAB.affectedColumn(attacker, defender);
		if(attacker.name === "one"){
			for(var x=0;x<cells.length;x++){
				for(var y=0;y<cells[x].length;y++){
					if(x === this.column && !(playerTwo.x === x && playerTwo.y === y) && !board.cellHasSolidObject(x,y)){
						cells[x][y].side = SIDE.LEFT;
					}
				}
			}
		}
		else{
			for(var x=0;x<cells.length;x++){
				for(var y=0;y<cells[x].length;y++){
					if(x === this.column && !(playerOne.x === x && playerOne.y === y) && !board.cellHasSolidObject(x,y)){
						cells[x][y].side = SIDE.RIGHT;
					}
				}
			}
		}
	},
	effectmiss: function(attacker, defender){
		AREAGRAB.effecthit(attacker, defender);
	}
}

var SWORD = {
	id:"SWORD",
	name:"Sword",
	image:sword,
	code:["G","H","I"],
	damage:100,
	hits:1,
	mb:0,
	rank:"standard",
	priority:1,
	elements:[ELEMENTS.sword],
	hithuh: function(attacker, defender){
		this.direction = 0;
		if(attacker.name === "one"){
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
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var WIDESWORD = {
	id:"WIDESWORD",
	name:"Wide Sword",
	image:widesword,
	code:["H","I","J"],
	damage:80,
	hits:1,
	mb:0,
	rank:"standard",
	priority:1,
	elements:[ELEMENTS.sword],
	hithuh: function(attacker, defender){
		this.direction = 0;
		if(attacker.name === "one"){
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
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var LONGSWORD = {
	id:"LONGSWORD",
	name:"Long Sword",
	image:longsword,
	code:["I","J","K"],
	damage:80,
	hits:1,
	mb:0,
	rank:"standard",
	priority:1,
	elements:[ELEMENTS.sword],
	hithuh: function(attacker, defender){
		this.direction = 0;
		if(attacker.name === "one"){
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
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var CARDLIST = null;
var DEFAULTCARDS = [CANNON1, CANNON2, CANNON3, PIERCECANNON, BREAKCANNON, STUNCANNON, GUARD, INVIS, AREAGRAB, SWORD, WIDESWORD, LONGSWORD];
var TEMPDECKLIST = [CANNON1, CANNON2, CANNON3, PIERCECANNON, BREAKCANNON, STUNCANNON, GUARD, INVIS, AREAGRAB, SWORD, WIDESWORD, LONGSWORD];

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
		CARDLIST = DEFAULTCARDS.concat(BN6CARDS);
		TEMPDECKLIST = [].concat(BN6CARDS);
		TEMPDECKLIST = [BN6AirShot, BN6CornShot1, BN6Thunder, BN6Thunder, BN6Thunder];
	}

	this.around = function(x, y, defender){
		var offX = Math.abs(defender.x - x);
		var offY = Math.abs(defender.y - y);
		if(offX === 0 && offY === 0){
			return false;
		}
		return offX < 2 && offY < 2;
	}
}
