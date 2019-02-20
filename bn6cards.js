
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
		if(defender.guard === null){
			if(attacker.name === "one" && defender.x < 5){
				if(!board.cellHasSolidObject(defender.x+1, defender.y) && cells[defender.x+1][defender.y].panelType !== PANELTYPE.HOLE){
					cells[defender.x][defender.y].player = null;
					defender.x = defender.x+1;
					cells[defender.x][defender.y].player = defender;
				}
			}
			else if(defender.x > 0){
				if(!board.cellHasSolidObject(defender.x-1, defender.y) && cells[defender.x-1][defender.y].panelType !== PANELTYPE.HOLE){
					cells[defender.x][defender.y].player = null;
					defender.x = defender.x-1;
					cells[defender.x][defender.y].player = defender;
				}
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
	showSpecial: function(attacker, defender){
		if(attacker.name == player.name){
			document.getElementById("special").style.display='block';
			document.getElementById("special").innerHTML ='Continue Using GunDelSol!';
			document.getElementById("special").value ='Continue Using GunDelSol!';
			document.getElementById("special").onclick=function () { BN6GunSol1.useSpecial(BN6GunSol1); };
			if(attacker.name === "one"){
				document.getElementById("special").style.float='left';
			}
			else{
				document.getElementById("special").style.float='right';
			}
		}
	},
	useSpecial: function(card){
		document.getElementById("nextturn").style.display='block';
		if(player.name === "one"){
			if(playerOne.action === ACTIONS.CARD){
				HAND.unshift(playerOne.card);
			}
			playerOne.action = ACTIONS.SPECIAL;
			playerOne.card = card;
		}
		else if (player.name === "two"){
			if(playerTwo.action === ACTIONS.CARD){
				HAND.unshift(playerTwo.card);
			}
			playerTwo.card = card;
			playerTwo.action = ACTIONS.SPECIAL;
		}
	},
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
		BN6GunSol1.showSpecial(attacker, defender);
		defender.guard = null;
		defender.invis = 0;
	},
	effectmiss: function(attacker, defender){
		BN6GunSol1.showSpecial(attacker, defender);
	}
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
	showSpecial: function(attacker, defender){
		if(attacker.name == player.name){
			document.getElementById("special").style.display='block';
			document.getElementById("special").innerHTML ='Continue Using GunDelSol!';
			document.getElementById("special").value ='Continue Using GunDelSol!';
			document.getElementById("special").onclick= function () { BN6GunSol2.useSpecial(BN6GunSol2); };
			if(attacker.name === "one"){
				document.getElementById("special").style.float='left';
			}
			else{
				document.getElementById("special").style.float='right';
			}
		}
	},
	useSpecial: function(card){
		BN6GunSol1.useSpecial(card);
	},
	hithuh: function(attacker, defender){
		return BN6GunSol1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){
		BN6GunSol1.effecthit(attacker, defender);
		BN6GunSol2.showSpecial(attacker, defender);
	},
	effectmiss: function(attacker, defender){
		BN6GunSol2.showSpecial(attacker, defender);
	}
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
	showSpecial: function(attacker, defender){
		if(attacker.name == player.name){
			document.getElementById("special").style.display='block';
			document.getElementById("special").innerHTML ='Continue Using GunDelSol!';
			document.getElementById("special").value ='Continue Using GunDelSol!';
			document.getElementById("special").onclick =function () { BN6GunSol3.useSpecial(BN6GunSol3); };
			if(attacker.name === "one"){
				document.getElementById("special").style.float='left';
			}
			else{
				document.getElementById("special").style.float='right';
			}
		}
	},
	useSpecial: function(card){
		BN6GunSol1.useSpecial(card);
	},
	hithuh: function(attacker, defender){
		return BN6GunSol1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){
		BN6GunSol1.effecthit(attacker, defender);
		BN6GunSol3.showSpecial(attacker, defender);
	},
	effectmiss: function(attacker, defender){
		BN6GunSol3.showSpecial(attacker, defender);
	}
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
	elements:[ELEMENTS.sword],
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
			else{
				for(var i=1; i < 4; i++){
					if(cells[attacker.x - i][attacker.y].player){
						if(i < 3){
							this.hits = 2;
						}
						else{
							this.hits = 3;
						}
					}
					if(attacker.x-i === defender.x && attacker.y === defender.y){
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
	image:BN6TrainArrow1IMG,
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
	image:BN6TrainArrow2IMG,
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
	image:BN6TrainArrow3IMG,
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
	image:BN6BubbleStar1IMG,
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
				if(cells[attacker.x-1][attacker.y-1]){
					if(board.cellHasSolidObject(attacker.x-1, attacker.y-1)){
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
		if(defender.guard === null){
			defender.bubbled = 2;
		}
	},
	effectmiss: function(attacker, defender){}
}

var BN6BubbleStar2 = {
	id:"BN6BubbleStar2",
	name:"BubbleStar2",
	image:BN6BubbleStar2IMG,
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
	image:BN6BubbleStar3IMG,
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
	image:BN6ThunderIMG,
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
		if(defender.guard === null){
			defender.stunned = 2;
		}
	},
	effectmiss: function(attacker, defender){
		if(attacker.name === "one"){
			if(!board.cellHasSolidObject(attacker.x+1, attacker.y)){
			cells[attacker.x+1][attacker.y].object.push(new BN6ThunderBall(attacker.x+1, attacker.y, attacker, defender, 8));
			}
		}
		else{
			if(!board.cellHasSolidObject(attacker.x-1, attacker.y)){
				cells[attacker.x-1][attacker.y].object.push(new BN6ThunderBall(attacker.x-1, attacker.y, attacker, defender, 8));
			}
		}
	}
}

var BN6DollThunder1 = {
	id:"BN6DollThunder1",
	name:"DollThunder1",
	image:BN6DollThunder1IMG,
	code:["A", "E", "Q"],
	mb:24,
	rank:"standard",
	damage:120,
	hits:1,
	priority:2,
	elements:[ELEMENTS.elec],
	hithuh: function(attacker, defender){
		if(defender.invis < 1){
			if(attacker.name === "one"){
				return defender.y === attacker.y && defender.x > attacker.x;
			}
			else{
				return defender.y === attacker.y && defender.x < attacker.x;
			}
		}
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6DollThunder2 = {
	id:"BN6DollThunder2",
	name:"DollThunder2",
	image:BN6DollThunder2IMG,
	code:["C", "L", "P"],
	mb:31,
	rank:"standard",
	damage:150,
	hits:1,
	priority:2,
	elements:[ELEMENTS.elec],
	hithuh: function(attacker, defender){
		return BN6DollThunder1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6DollThunder3 = {
	id:"BN6DollThunder3",
	name:"DollThunder3",
	image:BN6DollThunder3IMG,
	code:["B", "R", "V"],
	mb:38,
	rank:"standard",
	damage:180,
	hits:1,
	priority:2,
	elements:[ELEMENTS.elec],
	hithuh: function(attacker, defender){
		return BN6DollThunder1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6ElecPulse1 = {
	id:"BN6ElecPulse1",
	name:"ElecPulse1",
	image:BN6ElecPulse1IMG,
	code:["J", "L", "S"],
	mb:32,
	rank:"standard",
	damage:100,
	hits:1,
	priority:2,
	elements:[ELEMENTS.elec],
	hithuh: function(attacker, defender){
		if(attacker.name === "one"){
			if(attacker.y === defender.y && attacker.x+1 === defender.x){
				return true;
			}
			var offset = [-1, 0, 1];
			for(var i=0; i < offset.length; i++){
				if(attacker.y+offset[i] === defender.y && attacker.x+2 === defender.x){
					return true;
				}
			}
		}
		else{
			if(attacker.y === defender.y && attacker.x-1 === defender.x){
				return true;
			}
			var offset = [-1, 0, 1];
			for(var i=0; i < offset.length; i++){
				if(attacker.y+offset[i] === defender.y && attacker.x-2 === defender.x){
					return true;
				}
			}
		}
		return false;
	},
	effecthit: function(attacker, defender){
		if(defender.guard === null){
			defender.invis = 0;
			defender.stunned = 1;
		}
	},
	effectmiss: function(attacker, defender){}
}


var BN6ElecPulse2 = {
	id:"BN6ElecPulse2",
	name:"ElecPulse2",
	image:BN6ElecPulse2IMG,
	code:["A", "E", "J"],
	mb:36,
	rank:"standard",
	damage:120,
	hits:1,
	priority:2,
	elements:[ELEMENTS.elec],
	hithuh: function(attacker, defender){
		return BN6ElecPulse1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){
		if(defender.guard === null){
			defender.invis = 0;
			if(attacker === "one"){
				if(!cellHasSolidObject[defender.x-1][defender.y] && cells[defender.x-1][defender.y].panelType !== PANELTYPE.HOLE){
					cells[defender.x][defender.y].player = null;
					defender.x = defender.x-1;
					cells[defender.x][defender.y].player = defender;
				}
			}
			else{
				if(!cellHasSolidObject[defender.x+1][defender.y] && cells[defender.x-1][defender.y].panelType !== PANELTYPE.HOLE){
					cells[defender.x][defender.y].player = null;
					defender.x = defender.x+1;
					cells[defender.x][defender.y].player = defender;
				}
			}
		}
	},
	effectmiss: function(attacker, defender){}
}

var BN6ElecPulse3 = {
	id:"BN6ElecPulse3",
	name:"ElecPulse3",
	image:BN6ElecPulse3IMG,
	code:["A", "J", "S"],
	mb:40,
	rank:"standard",
	damage:140,
	hits:1,
	priority:2,
	elements:[ELEMENTS.elec],
	hithuh: function(attacker, defender){
		return BN6ElecPulse1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){
		if(defender.guard === null){
			defender.invis = 0;
			defender.bugs = defender.bugs.concat([new HPBug(10)]);
		}
	},
	effectmiss: function(attacker, defender){}
}

var BN6CornShot1 = {
	id:"BN6CornShot1",
	name:"CornShot1",
	image:BN6CornShot1IMG,
	code:["J", "K", "L"],
	mb:14,
	rank:"standard",
	damage:50,
	hits:1,
	priority:3,
	elements:[ELEMENTS.wood],
	hithuh: function(attacker, defender){
		this.hits = 1;
		if(defender.invis < 1){
			if(attacker.name === "one"){
				if(cells[attacker.x+2] && cells[attacker.x+2][attacker.y] && attacker.x+2 === defender.x && attacker.y === defender.y){
					this.hits = 2;
					return true;
				}
				else{
					var offset = [-1, 0, 1];
					for(var i = 0; i < offset.length; i++){
						if(cells[attacker.x+3] && cells[attacker.x+3][attacker.y+offset[i]] && attacker.x+3 === defender.x && attacker.y+offset[i] === defender.y){
							this.hits = 1;
							return true;
						}
					}
				}
			}
			else{
				if(cells[attacker.x-2] && cells[attacker.x-2][attacker.y] && attacker.x-2 === defender.x && attacker.y === defender.y){
					this.hits = 2;
					return true;
				}
				else{
					var offset = [-1, 0, 1];
					for(var i = 0; i < offset.length; i++){
						if(cells[attacker.x-3] && cells[attacker.x-3][attacker.y+offset[i]] && attacker.x-3 === defender.x && attacker.y+offset[i] === defender.y){
							this.hits = 1;
							return true;
						}
					}
				}
			}
		}
		BN6CornShot2.hits = this.hits;
		BN6CornShot3.hits = this.hits;
		return false;
	},
	effecthit: function(attacker, defender){
		BN6CornShot1.effectmiss(attacker, defender);
		cells[defender.x][defender.y].panelType = PANELTYPE.GRASS;
	},
	effectmiss: function(attacker, defender){
		if(attacker.name === "one"){
			if(cells[attacker.x+2][attacker.y]){
				cells[attacker.x+2][attacker.y].panelType = PANELTYPE.GRASS;
			}
		}
	}
}

var BN6CornShot2 = {
	id:"BN6CornShot2",
	name:"CornShot2",
	image:BN6CornShot2IMG,
	code:["C", "D", "E"],
	mb:26,
	rank:"standard",
	damage:60,
	hits:1,
	priority:3,
	elements:[ELEMENTS.wood],
	hithuh: function(attacker, defender){
		var hitbool = BN6CornShot1.hithuh(attacker, defender);
		this.hits = BN6CornShot1.hits;
		BN6CornShot3.hits = BN6CornShot1.hits;
		return hitbool;
	},
	effecthit: function(attacker, defender){
		BN6CornShot1.effecthit(attacker, defender);
	},
	effectmiss: function(attacker, defender){
		BN6CornShot1.effectmiss(attacker, defender);
	}
}

var BN6CornShot3 = {
	id:"BN6CornShot3",
	name:"CornShot3",
	image:BN6CornShot3IMG,
	code:["C", "D", "E"],
	mb:38,
	rank:"standard",
	damage:70,
	hits:1,
	priority:3,
	elements:[ELEMENTS.wood],
	hithuh: function(attacker, defender){
		var hitbool = BN6CornShot1.hithuh(attacker, defender);
		this.hits = BN6CornShot1.hits;
		BN6CornShot2.hits = BN6CornShot1.hits;
		return hitbool;
	},
	effecthit: function(attacker, defender){
		BN6CornShot1.effecthit(attacker, defender);
	},
	effectmiss: function(attacker, defender){
		BN6CornShot1.effectmiss(attacker, defender);
	}
}

var BN6RiskyHoney1 = {
	id:"BN6RiskyHoney1",
	name:"RiskyHoney1",
	image:BN6RiskyHoney1IMG,
	code:["B", "G", "S"],
	mb:21,
	rank:"standard",
	damage:10,
	hits:5,
	priority:1,
	elements:[ELEMENTS.wood],
	hithuh: function(attacker, defender){
		return SWORD.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){
		attacker.guard = new HoneyGuard(this.damage);
	},
	effectmiss: function(attacker, defender){
		BN6RiskyHoney1.effecthit(attacker, defender);
		if(attacker.name === "one"){
			if(!board.cellHasSolidObject(attacker.x+1, attacker.y)){
				cells[attacker.x+1][attacker.y].object.push(new BN6HoneyBall(attacker.x+1, attacker.y, attacker, defender, this.damage));
			}
		}
		else{	
			if(!board.cellHasSolidObject(attacker.x-1, attacker.y)){
				cells[attacker.x-1][attacker.y].object.push(new BN6HoneyBall(attacker.x-1, attacker.y, attacker, defender, this.damage));
			}
		}
	}
}

var BN6RiskyHoney2 = {
	id:"BN6RiskyHoney2",
	name:"RiskyHoney2",
	image:BN6RiskyHoney2IMG,
	code:["C", "R", "V"],
	mb:28,
	rank:"standard",
	damage:15,
	hits:5,
	priority:1,
	elements:[ELEMENTS.wood],
	hithuh: function(attacker, defender){
		return BN6RiskyHoney1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){
		attacker.guard = new HoneyGuard(this.damage);
	},
	effectmiss: function(attacker, defender){
		BN6RiskyHoney2.effecthit(attacker, defender);
		if(attacker.name === "one"){
			if(!board.cellHasSolidObject(attacker.x+1, attacker.y)){
				cells[attacker.x+1][attacker.y].object.push(new BN6HoneyBall(attacker.x+1, attacker.y, attacker, defender, this.damage));
			}
		}
		else{	
			if(!board.cellHasSolidObject(attacker.x-1, attacker.y)){
				cells[attacker.x-1][attacker.y].object.push(new BN6HoneyBall(attacker.x-1, attacker.y, attacker, defender, this.damage));
			}
		}
	}
}

var BN6RiskyHoney3 = {
	id:"BN6RiskyHoney3",
	name:"RiskyHoney3",
	image:BN6RiskyHoney3IMG,
	code:["A", "D", "M"],
	mb:35,
	rank:"standard",
	damage:20,
	hits:5,
	priority:1,
	elements:[ELEMENTS.wood],
	hithuh: function(attacker, defender){
		return BN6RiskyHoney1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){
		attacker.guard = new HoneyGuard(this.damage);
	},
	effectmiss: function(attacker, defender){
		BN6RiskyHoney3.effecthit(attacker, defender);
		if(attacker.name === "one"){
			if(!board.cellHasSolidObject(attacker.x+1, attacker.y)){
				cells[attacker.x+1][attacker.y].object.push(new BN6HoneyBall(attacker.x+1, attacker.y, attacker, defender, this.damage));
			}
		}
		else{	
			if(!board.cellHasSolidObject(attacker.x-1, attacker.y)){
				cells[attacker.x-1][attacker.y].object.push(new BN6HoneyBall(attacker.x-1, attacker.y, attacker, defender, this.damage));
			}
		}
	}
}

var BN6RollingLog1 = {
	id:"BN6RollingLog1",
	name:"RollingLog1",
	image:BN6RollingLog1IMG,
	code:["I", "K", "P"],
	mb:14,
	rank:"standard",
	damage:50,
	hits:1,
	priority:2,
	elements:[ELEMENTS.wood],
	hithuh: function(attacker, defender){
		this.hits = 1;
		if(defender.invis < 1){
			if(attacker.y === 0){
				if(BN6RollingLog1.oneloghit(attacker, defender, 0, 1)){
					this.hits = 2;
					return true;
				}
			}
			else if(attacker.y === 2){
				if(BN6RollingLog1.oneloghit(attacker, defender, 1, 2)){
					this.hits = 2;
					return true;
				}
			}
			else{
				if(BN6RollingLog1.oneloghit(attacker, defender, 0, 1) && BN6RollingLog1.oneloghit(attacker, defender, 1, 2)){
					this.hits = 2;
					return true;
				}
				else if(BN6RollingLog1.oneloghit(attacker, defender, 0, 1)){
					this.hits = 1;
					return true;
				}
				else if(BN6RollingLog1.oneloghit(attacker, defender, 1, 2)){
					this.hits = 1;
					return true;
				}
			}
		}
		return false;
	},
	oneloghit: function(attacker, defender, top, bottom){
		if(attacker.name === "one"){
			for(var i=1; i <= defender.x - attacker.x; i++){
				if(board.cellHasSolidObject(attacker.x + i - 1, top) || board.cellHasSolidObject(attacker.x + i - 1, bottom)){
					return false;
				}
				if(cells[attacker.x+i][top].panelType === PANELTYPE.HOLE || cells[attacker.x+i][bottom].panelType === PANELTYPE.HOLE){
					return false;
				}
			}
			return (defender.y === top || defender.y === bottom) && defender.x > attacker.x;
		}
		else{
			for(var i=1; i <= attacker.x - defender.x; i++){
				if(board.cellHasSolidObject(attacker.x - i + 1, top) || board.cellHasSolidObject(attacker.x - i + 1, bottom)){
					return false;
				}
				if(cells[attacker.x-i][top].panelType === PANELTYPE.HOLE || cells[attacker.x-i][bottom].panelType === PANELTYPE.HOLE){
					return false;
				}
			}
			return (defender.y === top || defender.y === bottom) && defender.x < attacker.x;
		}
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6RollingLog2 = {
	id:"BN6RollingLog2",
	name:"RollingLog2",
	image:BN6RollingLog2IMG,
	code:["E", "Q", "Z"],
	mb:26,
	rank:"standard",
	damage:70,
	hits:1,
	priority:2,
	elements:[ELEMENTS.wood],
	hithuh: function(attacker, defender){
		var hitbool = BN6RollingLog1.hithuh(attacker, defender);
		this.hits = BN6RollingLog1.hits;
		return hitbool;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6RollingLog3 = {
	id:"BN6RollingLog3",
	name:"RollingLog3",
	image:BN6RollingLog3IMG,
	code:["F", "N", "W"],
	mb:38,
	rank:"standard",
	damage:90,
	hits:1,
	priority:2,
	elements:[ELEMENTS.wood],
	hithuh: function(attacker, defender){
		var hitbool = BN6RollingLog1.hithuh(attacker, defender);
		this.hits = BN6RollingLog1.hits;
		return hitbool;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6IronShell1 = {
	id:"BN6IronShell1",
	name:"IronShell1",
	image:BN6IronShell1IMG,
	code:["J", "K", "L"],
	mb:13,
	rank:"standard",
	damage:70,
	hits:1,
	priority:2,
	elements:[ELEMENTS.break],
	hithuh: function(attacker, defender){
		this.hits = 1;
		if(defender.invis < 1){
			if(attacker.name === "one"){
				for(var i=1; i <= defender.x - attacker.x; i++){
					if(cells[attacker.x + i][attacker.y].panelType === PANELTYPE.HOLE){
						return false;
					}
				}
				if(attacker.y === defender.y && defender.x === 5){
					this.hits = 2;
					return true;
				}
				else if(attacker.y === defender.y && defender.x > attacker.x){
					this.hits = 1;
					return true;
				}
			}
			else{
				for(var i=1; i <= attacker.x - defender.x; i++){
					if(cells[attacker.x - i][attacker.y].panelType === PANELTYPE.HOLE){
						return false;
					}
				}
				if(attacker.y === defender.y && defender.x === 0){
					this.hits = 2;
					return true;
				}
				else if(attacker.y === defender.y && defender.x < attacker.x){
					this.hits = 1;
					return true;
				}
			}
		}
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6IronShell2 = {
	id:"BN6IronShell2",
	name:"IronShell2",
	image:BN6IronShell2IMG,
	code:["C", "D", "E"],
	mb:20,
	rank:"standard",
	damage:100,
	hits:1,
	priority:2,
	elements:[ELEMENTS.break],
	hithuh: function(attacker, defender){
		var hitbool = BN6IronShell1.hithuh(attacker, defender);
		this.hits = BN6IronShell1.hits;
		return hitbool;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6IronShell3 = {
	id:"BN6IronShell3",
	name:"IronShell3",
	image:BN6IronShell3IMG,
	code:["L", "M", "N"],
	mb:27,
	rank:"standard",
	damage:130,
	hits:1,
	priority:2,
	elements:[ELEMENTS.break],
	hithuh: function(attacker, defender){
		var hitbool = BN6IronShell1.hithuh(attacker, defender);
		this.hits = BN6IronShell1.hits;
		return hitbool;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6AuraHead1 = {
	id:"BN6AuraHead1",
	name:"AuraHead1",
	image:BN6AuraHead1IMG,
	code:["B", "C", "D"],
	mb:25,
	rank:"standard",
	damage:130,
	hits:1,
	priority:2,
	elements:[ELEMENTS.break],
	hithuh: function(attacker, defender){
		this.addDamage = null;
		if(attacker.barrier){
			this.addDamage = 50;
		}
		return BN6AuraHead1.hitbool(attacker, defender);
	},
	hitbool: function(attacker, defender){
		if(attacker.y === defender.y && defender.invis < 1){
			if(attacker.name == "one"){
				for(var i = 1; i < 4; i++){
					if(attacker.x + i === defender.x){
						return true;
					}
				}
			}
			else{
				for(var i = 1; i < 4; i++){
					if(attacker.x - i === defender.x){
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

var BN6AuraHead2 = {
	id:"BN6AuraHead2",
	name:"AuraHead2",
	image:BN6AuraHead2IMG,
	code:["D", "E", "F"],
	mb:33,
	rank:"standard",
	damage:150,
	hits:1,
	priority:2,
	elements:[ELEMENTS.break],
	hithuh: function(attacker, defender){
		this.addDamage = null;
		if(attacker.barrier){
			this.addDamage = 50;
		}
		return BN6AuraHead1.hitbool(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6AuraHead3 = {
	id:"BN6AuraHead3",
	name:"AuraHead3",
	image:BN6AuraHead3IMG,
	code:["F", "G", "H"],
	mb:39,
	rank:"standard",
	damage:170,
	hits:1,
	priority:2,
	elements:[ELEMENTS.break],
	hithuh: function(attacker, defender){
		this.addDamage = null;
		if(attacker.barrier){
			this.addDamage = 50;
		}
		return BN6AuraHead1.hitbool(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6AirHock = {
	id:"BN6AirHock",
	name:"AirHock",
	image:BN6AirHockIMG,
	code:["Q", "R", "S"],
	mb:40,
	rank:"standard",
	damage:60,
	hits:1,
	priority:2,
	elements:[ELEMENTS.break],
	hithuh: function(attacker, defender){
		this.hitbool = false;
		this.hits = 0;
		if(defender.invis < 1){
			this.xDirection = -1;
			this.yDirection = 1;
			this.puckX = attacker.x - 1;
			this.puckY = attacker.y;
			this.side = SIDE.RIGHT;
			this.switchedSides = false;
				
			if(attacker.name === "one"){
				this.xDirection = 1;
				this.puckX = attacker.x + 1;
				this.side = SIDE.LEFT;
			}
			
			for(var i = 0; i < 11; i++){
				if(cells[this.puckX][this.puckY].panelType === PANELTYPE.HOLE){
					return false;
				}
				if(this.puckX === defender.x && this.puckY === defender.y){
					this.hitbool = true;
					this.hits++;
				}
				if(cells[this.puckX][this.puckY].side !== this.side){
					this.switchedSides = true;
				}
				
				if(!cells[this.puckX + this.xDirection]){
					this.xDirection = this.xDirection * -1;
				}
				this.puckX = this.puckX + this.xDirection;
				
				if(!cells[this.puckX][this.puckY + this.yDirection]){
					this.yDirection = this.yDirection * -1;
				}
				this.puckY = this.puckY + this.yDirection;
				
				if(this.switchedSides){
					if(cells[this.puckX][this.puckY].side === this.side){
						this.xDirection = this.xDirection * -1;
						this.puckX = this.puckX + this.xDirection * 2;
					}
					if(!cells[this.puckX]){
						return this.hitbool;
					}
					if(cells[this.puckX][this.puckY].side === this.side){
						this.yDirection = this.yDirection * -1;
						this.puckY = this.puckY + this.xDirection * 2;
					}
					if(!cells[this.puckX][this.puckY]){
						return this.hitbool;
					}
				}
			}
		}
		if(this.hits < 1){
			this.hits === 1
		}
		return this.hitbool;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6DrillArm = {
	id:"BN6DrillArm",
	name:"DrillArm",
	image:BN6DrillArmIMG,
	code:["G", "M", "W"],
	mb:32,
	rank:"standard",
	damage:70,
	hits:1,
	priority:1,
	elements:[ELEMENTS.break],
	hithuh: function(attacker, defender){
		this.hitbool = false;
		this.tempDefX = defender.x;
		this.hits = 0;
		
		if(defender.invis < 1 && defender.y == attacker.y){
			this.xDirection = -1;
			if(attacker.name == "one"){
				this.xDirection = 1;
			}
			for(var i = 0; i < 3; i++){
				if(attacker.x + this.xDirection === this.tempDefX || attacker.x + this.xDirection*2 === this.tempDefX){
					this.hitbool = true;
					this.hits++;
					if(cells[this.tempDefX + this.xDirection] && cells[this.tempDefX + this.xDirection][defender.y].panelType !== PANELTYPE.HOLE){
						this.tempDefX = this.tempDefX + this.xDirection;
					}
				}
			}
		}
		if(this.hits < 1){
			this.hits = 1;
		}
		return this.hitbool;
	},
	effecthit: function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name == "one"){
			this.xDirection = 1;
		}
		for(var i = 0; i < 2; i ++){
			if(attacker.x + this.xDirection === defender.x || attacker.x + this.xDirection*2 === defender.x){
				if(cells[defender.x + this.xDirection] && cells[defender.x + this.xDirection][defender.y].panelType !== PANELTYPE.HOLE){
					defender.x = defender.x + this.xDirection
				}
			}
		}
	},
	effectmiss: function(attacker, defender){}
}

var BN6Tornado = {
	id:"BN6Tornado",
	name:"Tornado",
	image:BN6TornadoIMG,
	code:["L", "R", "T"],
	mb:16,
	rank:"standard",
	damage:20,
	hits:8,
	priority:2,
	elements:[ELEMENTS.wind],
	hithuh: function(attacker, defender){
		if(defender.invis < 1 && defender.y == attacker.y){
			this.xDirection = -2;
			if(attacker.name == "one"){
				this.xDirection = 2;
			}
			return attacker.x + this.xDirection === defender.x;
		}
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6NoiseStorm = {
	id:"BN6NoiseStorm",
	name:"NoiseStorm",
	image:BN6NoiseStormIMG,
	code:["G", "S", "V"],
	mb:30,
	rank:"standard",
	damage:20,
	hits:8,
	priority:2,
	elements:[ELEMENTS.wind],
	hithuh: function(attacker, defender){
		if(defender.invis < 1){
			this.xDirection = -1;
			if(attacker.name == "one"){
				this.xDirection = 1;
			}
			if(attacker.bugs.length < 1){
				return attacker.x + this.xDirection*2 === defender.x && attacker.y === defender.y;
			}
			else if(attacker.bugs.length < 2){
				this.offSetY = [-1, 0, 1];
				for(var i = 0; i < this.offSetY.length; i++){
					if(attacker.y + this.offSetY[i] === defender.y && attacker.x + this.xDirection*2 === defender.x){
						return true;
					}
				}
				return attacker.y === defender.y && attacker.x + this.xDirection*3 === defender.x;
			}
			else{
				this.offSetY = [-1, 0, 1];
				for(var i = 0; i < this.offSetY.length; i++){
					if(attacker.y + this.offSetY[i] === defender.y && (attacker.x + this.xDirection*2 === defender.x || attacker.x + this.xDirection*3 === defender.x)){
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

var BN6MachineGun1 = {
	id:"BN6MachineGun1",
	name:"MachineGun1",
	image:BN6MachineGun1IMG,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	mb:12,
	rank:"standard",
	damage:30,
	hits:1,
	priority:2,
	elements:[ELEMENTS.target],
	hithuh: function(attacker, defender){
		if(defender.invis < 1){
			this.affectedColumn = playerOne.x;
			if(attacker.name === "one"){
				this.affectedColumn = playerTwo.x;
			}
			if(defender.x === this.affectedColumn){
				if(defender.y === 0){
					this.hits = 2;
				}
				else if(defender.y === 1){
					this.hits = 4;
				}
				else{
					this.hits = 3;
				}
				return true;
			}
		}
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6MachineGun2 = {
	id:"BN6MachineGun2",
	name:"MachineGun2",
	image:BN6MachineGun2IMG,
	code:["E", "G", "S"],
	mb:24,
	rank:"standard",
	damage:50,
	hits:1,
	priority:2,
	elements:[ELEMENTS.target],
	hithuh: function(attacker, defender){
		this.hitbool = BN6MachineGun1.hithuh(attacker, defender);
		this.hits = BN6MachineGun1.hits;
		return this.hitbool;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6MachineGun3 = {
	id:"BN6MachineGun3",
	name:"MachineGun3",
	image:BN6MachineGun3IMG,
	code:["B", "F", "M"],
	mb:36,
	rank:"standard",
	damage:70,
	hits:1,
	priority:2,
	elements:[ELEMENTS.target],
	hithuh: function(attacker, defender){
		this.hitbool = BN6MachineGun1.hithuh(attacker, defender);
		this.hits = BN6MachineGun1.hits;
		return this.hitbool;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6MiniBomb = {
	id:"BN6MiniBomb",
	name:"MiniBomb",
	image:BN6MiniBombIMG,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	mb:6,
	rank:"standard",
	damage:50,
	hits:1,
	priority:3,
	elements:[],
	hithuh: function(attacker, defender){
		if(defender.invis < 1){
			this.xDirection = -3;
			if(attacker.name == "one"){
				this.xDirection = 3;
			}
			return attacker.x + this.xDirection === defender.x && attacker.y === defender.y;
		}
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6BigBomb = {
	id:"BN6BigBomb",
	name:"BigBomb",
	image:BN6BigBombIMG,
	code:["O", "P", "V"],
	mb:32,
	rank:"standard",
	damage:140,
	hits:1,
	priority:3,
	elements:[],
	hithuh: function(attacker, defender){
		if(defender.invis < 1){
			this.xDirection = -3;
			if(attacker.name == "one"){
				this.xDirection = 3;
			}
			if(attacker.x + this.xDirection === defender.x && attacker.y === defender.y){
				return true;
			}
			if(cells[attacker.x + this.xDirection]){
				return cards.around(attacker.x + this.xDirection, attacker.y, defender);
			}
		}
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6EnergyBomb = {
	id:"BN6EnergyBomb",
	name:"EnergyBomb",
	image:BN6EnergyBombIMG,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	mb:11,
	rank:"standard",
	damage:40,
	hits:3,
	priority:3,
	elements:[],
	hithuh: function(attacker, defender){
		return BN6MiniBomb.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6MegEnBomb = {
	id:"BN6MegEnBomb",
	name:"MegEnBomb",
	image:BN6MegEnBombIMG,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	mb:27,
	rank:"standard",
	damage:60,
	hits:3,
	priority:3,
	elements:[],
	hithuh: function(attacker, defender){
		return BN6MiniBomb.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6FlashBomb1 = {
	id:"BN6FlashBomb1",
	name:"FlashBomb1",
	image:BN6FlashBomb1IMG,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	mb:30,
	rank:"standard",
	damage:40,
	hits:1,
	priority:3,
	elements:[],
	hithuh: function(attacker, defender){
		return BN6MiniBomb.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){
		this.xDirection = -3;
		if(attacker.name == "one"){
			this.xDirection = 3;
		}
		if(cells[attacker.x + this.xDirection]){
			if(cells[attacker.x + this.xDirection][attacker.y].panelType !== PANELTYPE.HOLE){
				if(!cellHasSolidObject(attacker.x + this.xDirection, attacker.y)){
					cells[attacker.x+this.xDirection][attacker.y].object.push(new BN6FlashBomb(attacker.x+1, attacker.y, attacker, defender, this.damage));
				}
			}
		}
	}
}

var BN6FlashBomb2 = {
	id:"BN6FlashBomb2",
	name:"FlashBomb2",
	image:BN6FlashBomb2IMG,
	code:["G", "K", "R"],
	mb:34,
	rank:"standard",
	damage:70,
	hits:1,
	priority:3,
	elements:[],
	hithuh: function(attacker, defender){
		return BN6MiniBomb.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){
		this.xDirection = -3;
		if(attacker.name == "one"){
			this.xDirection = 3;
		}
		if(cells[attacker.x + this.xDirection]){
			if(cells[attacker.x + this.xDirection][attacker.y].panelType !== PANELTYPE.HOLE){
				if(!cellHasSolidObject(attacker.x + this.xDirection, attacker.y)){
					cells[attacker.x+this.xDirection][attacker.y].object.push(new BN6FlashBomb(attacker.x+1, attacker.y, attacker, defender, this.damage));
				}
			}
		}
	}
}

var BN6FlashBomb3 = {
	id:"BN6FlashBomb3",
	name:"FlashBomb3",
	image:BN6FlashBomb3IMG,
	code:["H", "P", "S"],
	mb:38,
	rank:"standard",
	damage:100,
	hits:1,
	priority:3,
	elements:[],
	hithuh: function(attacker, defender){
		return BN6MiniBomb.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){
		this.xDirection = -3;
		if(attacker.name == "one"){
			this.xDirection = 3;
		}
		if(cells[attacker.x + this.xDirection]){
			if(cells[attacker.x + this.xDirection][attacker.y].panelType !== PANELTYPE.HOLE){
				if(!cellHasSolidObject(attacker.x + this.xDirection, attacker.y)){
					cells[attacker.x+this.xDirection][attacker.y].object.push(new BN6FlashBomb(attacker.x+1, attacker.y, attacker, defender, this.damage));
				}
			}
		}
	}
}

var BN6CARDS = [BN6Cannon, BN6HiCannon, BN6MegaCannon, BN6AirShot, BN6Vulcan1, BN6Vulcan2, BN6Vulcan3, 
				BN6SuperVulcan, BN6Spreader1, BN6Spreader2, BN6Spreader3, BN6BigTank1, BN6BigTank2, 
				BN6BigTank3, BN6GunSol1, BN6GunSol2, BN6GunSol3, BN6Yoyo, BN6HellBurner1, BN6HellBurner2, 
				BN6HellBurner3, BN6WideShot, BN6TrainArrow1, BN6TrainArrow2, BN6TrainArrow3, BN6BubbleStar1, 
				BN6BubbleStar2, BN6BubbleStar3, BN6Thunder, BN6DollThunder1, BN6DollThunder2, 
				BN6DollThunder3, BN6ElecPulse1, BN6ElecPulse2, BN6ElecPulse3, BN6CornShot1, BN6CornShot2, 
				BN6CornShot3, BN6RiskyHoney1, BN6RiskyHoney2, BN6RiskyHoney3, BN6RollingLog1, 
				BN6RollingLog2, BN6RollingLog3, BN6IronShell1, BN6IronShell2, BN6IronShell3, BN6AuraHead1, 
				BN6AuraHead2, BN6AuraHead3, BN6AirHock, BN6DrillArm, BN6Tornado, BN6NoiseStorm, 
				BN6MachineGun1, BN6MachineGun2, BN6MachineGun3, BN6MiniBomb, BN6BigBomb, BN6EnergyBomb, 
				BN6MegEnBomb, BN6FlashBomb1, BN6FlashBomb2, BN6FlashBomb3];

function Bn6Cards(){

}
