
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
					if(cells[attacker.x + i][attacker.y].object){
						return attacker.y === defender.y && (defender.x === attacker.x + i + 1);
					}
				}
			}
			else{
				for(var i=1; i <= attacker.x; i++){
					if(attacker.y === defender.y && attacker.x - i === defender.x){
						return true;
					}
					if(cells[attacker.x - i][attacker.y].object){
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
					if(cells[attacker.x + i][attacker.y].object){
						return cards.around(attacker.x + i, attacker.y, defender);
					}
				}
			}
			else{
				for(var i=1; i <= attacker.x; i++){
					if(attacker.y === defender.y && attacker.x - i === defender.x){
						return true;
					}
					if(cells[attacker.x - i][attacker.y].object){
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
				if(cells[attacker.x + i][attacker.y].object){
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
	hits:2,
	priority:2,
	elements:[],
	hithuh: function(attacker, defender){
		if(defender.invis < 1){
			if(LONGSWORD.hithuh(attacker, defender)){
				BN6Yoyo.hits = 2;
				return true;
			}
			else{
				if(attacker.name === "one"){
					if(attacker.y === defender.y && attacker.x + 3 === defender.x){
						BN6Yoyo.hits = 3;
						return true;
					}
				}
				else{
					if(attacker.y === defender.y && attacker.x - 3 === defender.x){
						BN6Yoyo.hits = 3;
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
					if(cells[attacker.x + i - 1][attacker.y].object){
						return false;
					}
					if(cells[attacker.x + i - 1][attacker.y+1].object){
						return false;
					}
					if(cells[attacker.x + i - 1][attacker.y-1].object){
						return false;
					}
				}
				return (attacker.y === defender.y || attacker.y+1 === defender.y || attacker.y-1 === defender.y) && defender.x > attacker.x;
			}
			else{
				for(var i=1; i <= attacker.x; i++){
					if(cells[attacker.x - i + 1][attacker.y].object){
						return false;
					}
					if(cells[attacker.x - i + 1][attacker.y+1].object){
						return false;
					}
					if(cells[attacker.x - i + 1][attacker.y-1].object){
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

var BN6CARDS = [BN6Cannon, BN6HiCannon, BN6MegaCannon, BN6AirShot, BN6Vulcan1, BN6Vulcan2, BN6Vulcan3, BN6SuperVulcan, BN6Spreader1, BN6Spreader2, 
				BN6Spreader3, BN6BigTank1, BN6BigTank2, BN6BigTank3, BN6GunSol1, BN6GunSol2, BN6GunSol3, BN6Yoyo, BN6HellBurner1, BN6HellBurner2, 
				BN6HellBurner3, BN6WideShot];

function Bn6Cards(){

}
