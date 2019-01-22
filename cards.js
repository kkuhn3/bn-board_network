// Use cannon for example
var CANNON1 = {
	// It's name! (just for printouts)
	name:"Cannon1",
	// what codes it can be selected with. any character listed and * means all.
	code:"ABC",
	// how much damage it does on hit
	damage:40,
	// 0 "stop time", cannot counter. p2 gets priority
	// 1 "fast", can counter 3s
	// 2 "medium", cannot counter or be countered
	// 3 "slow", can be countered by 1s
	priority:2,
	// returns True if hits, false otherwise. 
	// may adjust damage
	hithuh: function(attacker, defender){
		if(defender.invis < 1){
			return attacker.y === defender.y;
		}
		return false;
	}
}

var CANNON2 = {
	name:"Cannon2",
	code:"BCD",
	damage:80,
	priority:2,
	hithuh: function(attacker, defender){
		if(defender.invis < 1){
			return attacker.y === defender.y;
		}
		return false;
	}
}

var CANNON3 = {
	name:"Cannon3",
	code:"CDE",
	damage:120,
	priority:2,
	hithuh: function(attacker, defender){
		if(defender.invis < 1){
			return attacker.y === defender.y;
		}
		return false;
	}
}

var PIERCECANNON = {
	name:"Pierce Cannon",
	code:"DEF",
	damage:100,
	priority:2,
	hithuh: function(attacker, defender){
		if(attacker.y === defender.y){
			defender.invis = 0;
			return true;
		}
		return false;
	}
}

var BREAKCANNON = {
	name:"Break Cannon",
	code:"EFG",
	damage:100,
	priority:2,
	hithuh: function(attacker, defender){
		defender.guard = 0;
		if(defender.invis < 1){
			return attacker.y === defender.y;
		}
		return false;
	}
}

var STUNCANNON = {
	name:"Stun Cannon",
	code:"FGH",
	damage:100,
	priority:2,
	hithuh: function(attacker, defender){
		if(defender.invis < 1){
			if(attacker.y === defender.y){
				defender.stunned = 1;
				return true;
			}
		}
		return false;
	}
}

var GUARD = {
	name:"Guard",
	code:"*",
	damage:0,
	priority:1,
	hithuh: function(attacker, defender){
		attacker.guard = 1;
		return false;
	}
}

var INVIS = {
	name:"Invis",
	code:"*",
	damage:0,
	priority:0,
	hithuh: function(attacker, defender){
		attacker.invis = 2;
		return false;
	}
}

var AREAGRAB = {
	name:"Area Grab",
	code:"*",
	damage:10,
	priority:0,
	hithuh: function(attacker, defender){
		if(defender.x === AREAGRAB.effect(attacker) && defender.invis < 1){
			return true;
		}
		return false;
	},
	effect: function(attacker){
		if(attacker.name === "one"){
			this.column = 7;
			for(var x=0;x<cells.length;x++){
				for(var y=0;y<cells[x].length;y++){
					if(cells[x][y]===SIDE.RIGHT && x < this.column){
						this.column = x;
					}
				}
			}
			for(var x=0;x<cells.length;x++){
				for(var y=0;y<cells[x].length;y++){
					if(x === this.column && !(playerTwo.x === x && playerTwo.y === y)){
						cells[x][y] = SIDE.LEFT;
					}
				}
			}
			return this.column;
		}
		else{
			this.column = -1;
			for(var x=0;x<cells.length;x++){
				for(var y=0;y<cells[x].length;y++){
					if(cells[x][y]===SIDE.LEFT && x > this.column){
						this.column = x;
					}
				}
			}
			for(var x=0;x<cells.length;x++){
				for(var y=0;y<cells[x].length;y++){
					if(x === this.column && !(playerOne.x === x && playerOne.y === y)){
						cells[x][y] = SIDE.RIGHT;
					}
				}
			}
			return this.column;
		}
	}
}

var SWORD = {
	name:"Sword",
	code:"GHI",
	damage:100,
	priority:1,
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
	}
}

var WIDESWORD = {
	name:"Wide Sword",
	code:"HIJ",
	damage:80,
	priority:1,
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
	}
}

var LONGSWORD = {
	name:"Long Sword",
	code:"IJK",
	damage:80,
	priority:1,
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
	}
}

var CARDLIST = [CANNON1, CANNON2, CANNON3, PIERCECANNON, BREAKCANNON, STUNCANNON, GUARD, INVIS, AREAGRAB, SWORD, WIDESWORD, LONGSWORD];

var randomCard = function(){
	return CARDLIST[Math.floor(Math.random() * CARDLIST.length)]
}

function Cards(){
}
