
var BN6Cannon = {
	id:"BN6Cannon",
	name:"Cannon",
	image:BN6CannonIMG,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	mb:6,
	rank:"standard",
	damage:40,
	hits:1,
	priority:2,
	elements:[],
	hithuh: function(attacker, defender){
		return CANNON1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6HiCannon = {
	id:"BN6HiCannon",
	name:"HiCannon",
	image:BN6HiCannonIMG,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	mb:24,
	rank:"standard",
	damage:100,
	hits:1,
	priority:2,
	elements:[],
	hithuh: function(attacker, defender){
		return BN6Cannon.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6MegaCannon= {
	id:"BN6MegaCannon",
	name:"MegaCannon",
	image:BN6MegaCannonIMG,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	mb:38,
	rank:"standard",
	damage:180,
	hits:1,
	priority:2,
	elements:[],
	hithuh: function(attacker, defender){
		return BN6Cannon.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6AirShot = {
	id:"BN6AirShot",
	name:"AirShot",
	image:BN6AirShotIMG,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	mb:4,
	rank:"standard",
	damage:20,
	hits:1,
	priority:1,
	elements:[ELEMENTS.wind],
	hithuh: function(attacker, defender){
		return BN6Cannon.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){
		if(defender.guard < 1){
			if(attacker.name === "one" && defender.x !== 5){
				defender.x = defender.x + 1;
			}
			else if(defender.x !== 0){
				defender.x = defender.x - 1;
			}
		}
	},
	effectmiss: function(attacker, defender){}
}

var BN6Vulcan1 = {
	id:"BN6Vulcan1",
	name:"Vulcan1",
	image:BN6Vulcan1IMG,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	mb:5,
	rank:"standard",
	damage:10,
	hits:3,
	priority:1,
	elements:[],
	hithuh: function(attacker, defender){
		if(defender.invis < 1){
			if(attacker.name === "one"){
				for(var i=1; i <= 5 - attacker.x; i++){
					if(attacker.y === defender.y && attacker.x + i === defender.x){
						return true;
					}
					if(board.cellHasSolidObject(attacker.x + i, attacker.y)){
						return attacker.y === defender.y && (defender.x === attacker.x + i + 1);
					}
				}
			}
			else{
				for(var i=1; i <= attacker.x; i++){
					if(attacker.y === defender.y && attacker.x - i === defender.x){
						return true;
					}
					if(board.cellHasSolidObject(attacker.x - i, attacker.y)){
						return attacker.y === defender.y && (defender.x === attacker.x - i - 1);
					}
				}
			}
		}
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6Vulcan2 = {
	id:"BN6Vulcan2",
	name:"Vulcan2",
	image:BN6Vulcan2IMG,
	code:["D", "F", "L"],
	mb:18,
	rank:"standard",
	damage:15,
	hits:4,
	priority:1,
	elements:[],
	hithuh: function(attacker, defender){
		return BN6Vulcan1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6Vulcan3 = {
	id:"BN6Vulcan3",
	name:"Vulcan3",
	image:BN6Vulcan3IMG,
	code:["A", "G", "R"],
	mb:30,
	rank:"standard",
	damage:20,
	hits:5,
	priority:1,
	elements:[],
	hithuh: function(attacker, defender){
		return BN6Vulcan1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6SuperVulcan = {
	id:"BN6SuperVulcan",
	name:"SuperVulcan",
	image:BN6SuperVulcanIMG,
	code:["V"],
	mb:75,
	rank:"standard",
	damage:20,
	hits:10,
	priority:1,
	elements:[],
	hithuh: function(attacker, defender){
		return BN6Vulcan1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6Spreader1 = {
	id:"BN6Spreader1",
	name:"Spreader1",
	image:BN6Spreader1IMG,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	mb:10,
	rank:"standard",
	damage:30,
	hits:1,
	priority:1,
	elements:[],
	hithuh: function(attacker, defender){
		if(defender.invis < 1){
			if(attacker.name === "one"){
				for(var i=1; i <= 5 - attacker.x; i++){
					if(attacker.y === defender.y && attacker.x + i === defender.x){
						return true;
					}
					if(board.cellHasSolidObject(attacker.x + i, attacker.y)){
						return cards.around(attacker.x + i, attacker.y, defender);
					}
				}
			}
			else{
				for(var i=1; i <= attacker.x; i++){
					if(attacker.y === defender.y && attacker.x - i === defender.x){
						return true;
					}
					if(board.cellHasSolidObject(attacker.x - i, attacker.y)){
						return cards.around(attacker.x - i, attacker.y, defender);
					}
				}
			}
		}
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6Spreader2 = {
	id:"BN6Spreader2",
	name:"Spreader2",
	image:BN6Spreader2IMG,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	mb:18,
	rank:"standard",
	damage:60,
	hits:1,
	priority:1,
	elements:[],
	hithuh: function(attacker, defender){
		return BN6Spreader1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6Spreader3 = {
	id:"BN6Spreader3",
	name:"Spreader3",
	image:BN6Spreader3IMG,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	mb:26,
	rank:"standard",
	damage:90,
	hits:1,
	priority:1,
	elements:[],
	hithuh: function(attacker, defender){
		return BN6Spreader1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6BigTank1 = {
	id:"BN6BigTank1",
	name:"BigTank1",
	image:BN6BigTank1IMG,
	code:["A", "G", "R"],
	mb:17,
	rank:"standard",
	damage:120,
	hits:1,
	priority:3,
	elements:[],
	hithuh: function(attacker, defender){
		if(defender.invis < 1){
			if(BN6Cannon.hithuh(attacker, defender)){
				return true;
			}
			for(var i=1; i <= 5 - attacker.x; i++){
				if(board.cellHasSolidObject(attacker.x + i, attacker.y)){
					return false;
				}
			}
			if(attacker.name === "one" && defender.x === 5){
				return attacker.y === defender.y || attacker.y === defender.y+1 || attacker.y === defender.y-1;
			}
			if(attacker.name === "two" && defender.x === 0){
				return attacker.y === defender.y || attacker.y === defender.y+1 || attacker.y === defender.y-1;
			}
		}
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6BigTank2 = {
	id:"BN6BigTank2",
	name:"BigTank2",
	image:BN6BigTank2IMG,
	code:["L", "S", "V"],
	mb:28,
	rank:"standard",
	damage:160,
	hits:1,
	priority:3,
	elements:[],
	hithuh: function(attacker, defender){
		return BN6BigTank1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6BigTank3 = {
	id:"BN6BigTank3",
	name:"BigTank3",
	image:BN6BigTank3IMG,
	code:["B", "M", "P"],
	mb:39,
	rank:"standard",
	damage:200,
	hits:1,
	priority:3,
	elements:[],
	hithuh: function(attacker, defender){
		return BN6BigTank1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6GunSol1 = {
	id:"BN6GunSol1",
	name:"GunSol1",
	image:BN6GunSol1IMG,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	mb:15,
	rank:"standard",
	damage:5,
	hits:10,
	priority:2,
	elements:[],
	special:"GunSol",
	hithuh: function(attacker, defender){
		if(attacker.name === "one"){
			if(attacker.x + 2 === defender.x){
				return attacker.y + 1 === defender.y || attacker.y === defender.y || attacker.y - 1 === defender.y;
			}
		}
		else{
			if(attacker.x - 2 === defender.x){
				return attacker.y + 1 === defender.y || attacker.y === defender.y || attacker.y - 1 === defender.y;
			}
		}
		return false;
	},
	effecthit: function(attacker, defender){
		defender.guard = 0;
		defender.invis = 0;
	},
	effectmiss: function(attacker, defender){}
}

var BN6GunSol2 = {
	id:"BN6GunSol2",
	name:"GunSol2",
	image:BN6GunSol2IMG,
	code:["B", "E", "R"],
	mb:30,
	rank:"standard",
	damage:10,
	hits:10,
	priority:2,
	elements:[],
	special:"GunSol",
	hithuh: function(attacker, defender){
		return BN6GunSol1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){
		return BN6GunSol1.effecthit(attacker, defender);
	},
	effectmiss: function(attacker, defender){}
}

var BN6GunSol3 = {
	id:"BN6GunSol3",
	name:"GunSol3",
	image:BN6GunSol3IMG,
	code:["N", "Q", "W"],
	mb:38,
	rank:"standard",
	damage:15,
	hits:10,
	priority:2,
	elements:[],
	special:"GunSol",
	hithuh: function(attacker, defender){
		return BN6GunSol1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){
		return BN6GunSol1.effecthit(attacker, defender);
	},
	effectmiss: function(attacker, defender){}
}

var BN6Yoyo = {
	id:"BN6Yoyo",
	name:"Yoyo",
	image:BN6YoyoIMG,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	mb:32,
	rank:"standard",
	damage:50,
	hits:1,
	priority:2,
	elements:[],
	hithuh: function(attacker, defender){
		this.hits = 1;
		if(defender.invis < 1){
			if(attacker.name === "one"){
				for(var i=1; i < 4; i++){
					if(cells[attacker.x + i][attacker.y].player){
						if(i < 3){
							this.hits = 2;
						}
						else{
							this.hits = 3;
						}
					}
					if(attacker.x+i === defender.x && attacker.y === defender.y){
						return true;
					}
				}
			}
		}
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6HellBurner1 = {
	id:"BN6HellBurner1",
	name:"HellBurner1",
	image:BN6HellBurner1IMG,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	mb:8,
	rank:"standard",
	damage:70,
	hits:1,
	priority:1,
	elements:[ELEMENTS.fire],
	hithuh: function(attacker, defender){
		if(defender.invis < 1){
			if(LONGSWORD.hithuh(attacker, defender)){
				return true;
			}
			else{
				if(attacker.name === "one"){
					if(attacker.y === defender.y && attacker.x + 3 === defender.x){
						return true;
					}
				}
				else{
					if(attacker.y === defender.y && attacker.x - 3 === defender.x){
						return true;
					}
				}
			}
		}
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6HellBurner2 = {
	id:"BN6HellBurner2",
	name:"HellBurner2",
	image:BN6HellBurner2IMG,
	code:["S", "T", "U"],
	mb:21,
	rank:"standard",
	damage:110,
	hits:1,
	priority:1,
	elements:[ELEMENTS.fire],
	hithuh: function(attacker, defender){
		return BN6HellBurner1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6HellBurner3 = {
	id:"BN6HellBurner3",
	name:"HellBurner3",
	image:BN6HellBurner3IMG,
	code:["C", "D", "E"],
	mb:34,
	rank:"standard",
	damage:150,
	hits:1,
	priority:1,
	elements:[ELEMENTS.fire],
	hithuh: function(attacker, defender){
		return BN6HellBurner1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6WideShot = {
	id:"BN6WideShot",
	name:"WideShot",
	image:BN6WideShotIMG,
	code:["P", "Q", "R"],
	mb:34,
	rank:"standard",
	damage:100,
	hits:1,
	priority:2,
	elements:[ELEMENTS.aqua],
	hithuh: function(attacker, defender){
		if(defender.invis < 1){
			if(attacker.name === "one"){
				for(var i=1; i <= defender.x - attacker.x; i++){
					if(board.cellHasSolidObject(attacker.x + i - 1, attacker.y)){
						return false;
					}
					if(board.cellHasSolidObject(attacker.x + i - 1, attacker.y+1)){
						return false;
					}
					if(board.cellHasSolidObject(attacker.x + i - 1, attacker.y-1)){
						return false;
					}
				}
				return (attacker.y === defender.y || attacker.y+1 === defender.y || attacker.y-1 === defender.y) && defender.x > attacker.x;
			}
			else{
				for(var i=1; i <= attacker.x; i++){
					if(board.cellHasSolidObject(attacker.x - i + 1, attacker.y)){
						return false;
					}
					if(board.cellHasSolidObject(attacker.x - i + 1, attacker.y+1)){
						return false;
					}
					if(board.cellHasSolidObject(attacker.x - i + 1, attacker.y-1)){
						return false;
					}
				}
				return (attacker.y === defender.y || attacker.y+1 === defender.y || attacker.y-1 === defender.y) && defender.x < attacker.x;
			}
		}
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6TrainArrow1 = {
	id:"BN6TrainArrow1",
	name:"TrainArrow1",
	image:BN6TrainArrow1,
	code:["A", "F", "K"],
	mb:30,
	rank:"standard",
	damage:30,
	hits:1,
	priority:2,
	elements:[ELEMENTS.aqua],
	hithuh: function(attacker, defender){
		this.hits = 1;
		this.hitPlayer = false;
		if(defender.invis < 1){
			if(attacker.name === "one"){
				for(var i=attacker.x+1; i < 6; i++){
					if(board.cellHasSolidObject(i, attacker.y)){
						return false;
					}
					if(i === defender.x && attacker.y === defender.y){
						return true;
					}
					if(!cells[i][attacker.y].player && !this.hitPlayer){	
						this.hits++;
					}
					else{
						this.hitPlayer = true;
					}
				}
			}
			else{
				for(var i=attacker.x-1; i > -1; i--){
					if(board.cellHasSolidObject(i, attacker.y)){
						return false;
					}
					if(i === defender.x && attacker.y === defender.y){
						return true;
					}
					if(!cells[i][attacker.y].player && !this.hitPlayer){
						this.hits++;
					}
					else{
						this.hitPlayer = true;
					}
				}
			}
		}
		BN6TrainArrow2.hits = BN6TrainArrow1.hits;
		BN6TrainArrow3.hits = BN6TrainArrow1.hits;
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6TrainArrow2 = {
	id:"BN6TrainArrow2",
	name:"TrainArrow2",
	image:BN6TrainArrow2,
	code:["G", "M", "Z"],
	mb:36,
	rank:"standard",
	damage:40,
	hits:1,
	priority:2,
	elements:[ELEMENTS.aqua],
	hithuh: function(attacker, defender){
		var hitbool = BN6TrainArrow1.hithuh(attacker, defender);
		this.hits = BN6TrainArrow1.hits;
		BN6TrainArrow3.hits = BN6TrainArrow1.hits;
		return hitbool;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6TrainArrow3 = {
	id:"BN6TrainArrow3",
	name:"TrainArrow3",
	image:BN6TrainArrow3,
	code:["M", "S", "Y"],
	mb:42,
	rank:"standard",
	damage:50,
	hits:1,
	priority:2,
	elements:[ELEMENTS.aqua],
	hithuh: function(attacker, defender){
		var hitbool = BN6TrainArrow1.hithuh(attacker, defender);
		this.hits = BN6TrainArrow1.hits;
		BN6TrainArrow2.hits = BN6TrainArrow1.hits;
		return hitbool;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6BubbleStar1 = {
	id:"BN6BubbleStar1",
	name:"BubbleStar1",
	image:BN6BubbleStar1,
	code:["B", "E", "T"],
	mb:30,
	rank:"standard",
	damage:60,
	hits:1,
	priority:2,
	elements:[ELEMENTS.aqua],
	hithuh: function(attacker, defender){
		if(defender.invis < 1){
			if(attacker.name === "one"){
				if(defender.x === attacker.x+1 && defender.y === attacker.y-1){
					return true;
				}
				if(cells[attacker.x+1][attacker.y-1]){
					if(board.cellHasSolidObject(attacker.x+1, attacker.y-1)){
						return false;
					}
				}
				var isDirectionDown = true;
				for(var x = attacker.x+2; x < 6; x++){
					var offset = [-1, 0, 1];
					for(var i = 0; i < offset.length; i++){
						if(isDirectionDown){
							if(defender.x === x && defender.y === attacker.y + offset[i]){
								return true;
							}
							if(cells[x][attacker.y + offset[i]]){
								if(board.cellHasSolidObject(x, attacker.y + offset[i])){
									return false;
								}
							}
						}
						else{
							if(defender.x === x && defender.y === attacker.y + offset[2-i]){
								return true;
							}
							if(cells[x][attacker.y + offset[2-i]]){
								if(board.cellHasSolidObject(x, attacker.y + offset[2-i])){
									return false;
								}
							}
						}
					}
					isDirectionDown = !isDirectionDown;
				}
			}
			else{
				if(defender.x === attacker.x-1 && defender.y === attacker.y-1){
					return true;
				}
				if(cells[attacker.x+1][attacker.y-1]){
					if(board.cellHasSolidObject(attacker.x+1, attacker.y-1)){
						return false;
					}
				}
				var isDirectionDown = true;
				for(var x = attacker.x-2; x > -1; x--){
					var offset = [-1, 0, 1];
					for(var i = 0; i < offset.length; i++){
						if(isDirectionDown){
							if(defender.x === x && defender.y === attacker.y + offset[i]){
								return true;
							}
							if(cells[x][attacker.y + offset[i]]){
								if(board.cellHasSolidObject(x,attacker.y + offset[i])){
									return false;
								}
							}
						}
						else{
							if(defender.x === x && defender.y === attacker.y + offset[2-i]){
								return true;
							}
							if(cells[x][attacker.y + offset[2-i]]){
								if(board.cellHasSolidObject(x, attacker.y + offset[2-i])){
									return false;
								}
							}
						}
					}
					isDirectionDown = !isDirectionDown;
				}
			}
		}
		return false;
	},
	effecthit: function(attacker, defender){
		if(defender.guard < 1){
			defender.bubbled = 2;
		}
	},
	effectmiss: function(attacker, defender){}
}

var BN6BubbleStar2 = {
	id:"BN6BubbleStar2",
	name:"BubbleStar2",
	image:BN6BubbleStar2,
	code:["B", "E", "T"],
	mb:38,
	rank:"standard",
	damage:80,
	hits:1,
	priority:2,
	elements:[ELEMENTS.aqua],
	hithuh: function(attacker, defender){
		return BN6BubbleStar1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){
		return BN6BubbleStar1.effecthit(attacker, defender);
	},
	effectmiss: function(attacker, defender){}
}

var BN6BubbleStar3 = {
	id:"BN6BubbleStar3",
	name:"BubbleStar3",
	image:BN6BubbleStar3,
	code:["B", "E", "T"],
	mb:46,
	rank:"standard",
	damage:100,
	hits:1,
	priority:2,
	elements:[ELEMENTS.aqua],
	hithuh: function(attacker, defender){
		return BN6BubbleStar1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){
		return BN6BubbleStar1.effecthit(attacker, defender);
	},
	effectmiss: function(attacker, defender){}
}

var BN6Thunder = {
	id:"BN6Thunder",
	name:"Thunder",
	image:BN6Thunder,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	mb:7,
	rank:"standard",
	damage:40,
	hits:1,
	priority:2,
	elements:[ELEMENTS.elec],
	hithuh: function(attacker, defender){
		if(defender.invis < 1){
			if(attacker.name === "one"){
				return attacker.x+1 === defender.x && attacker.y === defender.y;
			}
			else{
				return attacker.x-1 === defender.x && attacker.y === defender.y;
			}
		}
		return false;
	},
	effecthit: function(attacker, defender){
		if(defender.guard < 1){
			defender.stunned = 2;
		}
	},
	effectmiss: function(attacker, defender){
		if(attacker.name === "one"){
			if(board.cellHasSolidObject(attacker.x+1, attacker.y)){
				cells[attacker.x+1][attacker.y].object = new BN6Thunder(attacker.x+1, attacker.y, attacker);
			}
		}
		else{
			if(board.cellHasSolidObject(attacker.x+1, attacker.y)){
				cells[attacker.x-1][attacker.y].object = new BN6Thunder(attacker.x-1, attacker.y, attacker);
			}
		}
	}
}


var BN6CARDS = [BN6Cannon, BN6HiCannon, BN6MegaCannon, BN6AirShot, BN6Vulcan1, BN6Vulcan2, BN6Vulcan3, BN6SuperVulcan, BN6Spreader1, BN6Spreader2, 
				BN6Spreader3, BN6BigTank1, BN6BigTank2, BN6BigTank3, BN6GunSol1, BN6GunSol2, BN6GunSol3, BN6Yoyo, BN6HellBurner1, BN6HellBurner2, 
				BN6HellBurner3, BN6WideShot, BN6TrainArrow1, BN6TrainArrow2, BN6TrainArrow3, BN6BubbleStar1, BN6BubbleStar2, BN6BubbleStar3, BN6Thunder];

function Bn6Cards(){

}
