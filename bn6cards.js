
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
				if(isCellPlayerValid(defender.x+1, defender.y)){
					cells[defender.x][defender.y].player = null;
					defender.x = defender.x+1;
					cells[defender.x][defender.y].player = defender;
				}
			}
			else if(defender.x > 0){
				if(isCellPlayerValid(defender.x+1, defender.y)){
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
				if(board.isCellPlayerValid(defender.x-1, defender.y)){
					cells[defender.x][defender.y].player = null;
					defender.x = defender.x-1;
					cells[defender.x][defender.y].player = defender;
				}
			}
			else{
				if(board.isCellPlayerValid(defender.x+1, defender.y)){
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
		board.convertPanel(defender.x, defender.y, PANELTYPE.GRASS);
	},
	effectmiss: function(attacker, defender){
		if(attacker.name === "one"){
			board.convertPanel(attacker.x+2, attacker.y, PANELTYPE.GRASS);
		}
		else{
			board.convertPanel(attacker.x-2, attacker.y, PANELTYPE.GRASS);
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
				if(board.isHole(attacker.x+i, top) || board.isHole(attacker.x+i, bottom)){
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
				if(board.isHole(attacker.x-i, top) || board.isHole(attacker.x-i, bottom)){
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
					if(board.isHole(attacker.x+i, attacker.y)){
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
					if(board.isHole(attacker.x-i, attacker.y)){
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
				if(board.isHole(this.puckX, this.puckY)){
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
					if(board.isHole(this.tempDefX + this.xDirection, defender.y)){
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
				if(board.isHole(this.tempDefX + this.xDirection, defender.y)){
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
		if(board.isCellPlayerValid(attacker.x + this.xDirection, attacker.y)){
			cells[attacker.x+this.xDirection][attacker.y].object.push(new BN6FlashBomb(attacker.x+this.xDirection, attacker.y, attacker, defender, this.damage));
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
		if(board.isCellPlayerValid(attacker.x + this.xDirection, attacker.y)){
			cells[attacker.x+this.xDirection][attacker.y].object.push(new BN6FlashBomb(attacker.x+this.xDirection, attacker.y, attacker, defender, this.damage));
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
		if(board.isCellPlayerValid(attacker.x + this.xDirection, attacker.y)){
			cells[attacker.x+this.xDirection][attacker.y].object.push(new BN6FlashBomb(attacker.x+this.xDirection, attacker.y, attacker, defender, this.damage));
		}
	}
}

var BN6BlackBomb = {
	id:"BN6BlackBomb",
	name:"BlackBomb",
	image:BN6BlackBombIMG,
	code:["B", "F", "O"],
	mb:32,
	rank:"standard",
	damage:100,
	hits:1,
	priority:3,
	elements:[ELEMENTS.fire],
	hithuh: function(attacker, defender){
		return BN6MiniBomb.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){
		this.xDirection = -3;
		if(attacker.name == "one"){
			this.xDirection = 3;
		}
		if(board.isCellPlayerValid(attacker.x + this.xDirection, attacker.y)){
			cells[attacker.x+this.xDirection][attacker.y].object.push(new BN6BlackBombObj(attacker.x+this.xDirection, attacker.y));
		}
	}
}

var BN6BugBomb = {
	id:"BN6BugBomb",
	name:"BugBomb",
	image:BN6BugBombIMG,
	code:["G", "S", "V"],
	mb:24,
	rank:"standard",
	damage:0,
	hits:1,
	priority:3,
	elements:[],
	hithuh: function(attacker, defender){
		return BN6BigBomb.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){
		defender.bugs.push(new HPBug(10), new BusterBug(), new PathBug());
	},
	effectmiss: function(attacker, defender){}
}

var BN6GrassSeed = {
	id:"BN6GrassSeed",
	name:"GrassSeed",
	image:BN6GrassSeedIMG,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	mb:19,
	rank:"standard",
	damage:0,
	hits:1,
	priority:3,
	elements:[ELEMENTS.wood],
	hithuh: function(attacker, defender){
		return BN6MiniBomb.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){
		board.convertPanel(defender.x, defender.y, PANELTYPE.GRASS);
	},
	effectmiss: function(attacker, defender){
		this.xDirection = -3;
		if(attacker.name == "one"){
			this.xDirection = 3;
		}
		this.x = attacker.x + this.xDirection;
		this.y = attacker.y
		if(!board.isHole(this.x, this.y)){
			if(board.cellHasSolidObject(this.x, this.y)){
				board.convertPanel(this.x, this.y, PANELTYPE.GRASS);
			}
			else{
				for(var i = -1; i < 2; i++){
					for(var j = -1; j < 2; j++){
						board.convertPanel(this.x+i, this.y+j, PANELTYPE.GRASS);
					}
				}
			}
		}
	}
}

var BN6IceSeed = {
	id:"BN6IceSeed",
	name:"IceSeed",
	image:BN6IceSeedIMG,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	mb:31,
	rank:"standard",
	damage:0,
	hits:1,
	priority:3,
	elements:[ELEMENTS.aqua],
	hithuh: function(attacker, defender){
		return BN6MiniBomb.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){
		board.convertPanel(defender.x, defender.y, PANELTYPE.ICE);
	},
	effectmiss: function(attacker, defender){
		this.xDirection = -3;
		if(attacker.name == "one"){
			this.xDirection = 3;
		}
		this.x = attacker.x + this.xDirection;
		this.y = attacker.y
		if(!board.isHole(this.x, this.y)){
			if(board.cellHasSolidObject(this.x, this.y)){
				board.convertPanel(this.x, this.y, PANELTYPE.ICE);
			}
			else{
				for(var i = -1; i < 2; i++){
					for(var j = -1; j < 2; j++){
						board.convertPanel(this.x+i, this.y+j, PANELTYPE.ICE);
					}
				}
			}
		}
	}
}

var BN6PoisonSeed = {
	id:"BN6PoisonSeed",
	name:"PoisonSeed",
	image:BN6PoisonSeedIMG,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	mb:37,
	rank:"standard",
	damage:0,
	hits:1,
	priority:3,
	elements:[],
	hithuh: function(attacker, defender){
		return BN6MiniBomb.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){
		board.convertPanel(defender.x, defender.y, PANELTYPE.POISON);
	},
	effectmiss: function(attacker, defender){
		this.xDirection = -3;
		if(attacker.name == "one"){
			this.xDirection = 3;
		}
		this.x = attacker.x + this.xDirection;
		this.y = attacker.y
		if(!board.isHole(this.x, this.y)){
			if(board.cellHasSolidObject(this.x, this.y)){
				board.convertPanel(this.x, this.y, PANELTYPE.POISON);
			}
			else{
				for(var i = -1; i < 2; i++){
					for(var j = -1; j < 2; j++){
						board.convertPanel(this.x+i, this.y+j, PANELTYPE.POISON);
					}
				}
			}
		}
	}
}

var BN6Sword = {
	id:"BN6Sword",
	name:"Sword",
	image:BN6SwordIMG,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	mb:8,
	rank:"standard",
	damage:80,
	hits:1,
	priority:1,
	elements:[ELEMENTS.sword],
	hithuh: function(attacker, defender){
		return SWORD.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6WideSword = {
	id:"BN6WideSword",
	name:"WideSword",
	image:BN6WideSwordIMG,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	mb:12,
	rank:"standard",
	damage:80,
	hits:1,
	priority:1,
	elements:[ELEMENTS.sword],
	hithuh: function(attacker, defender){
		return WIDESWORD.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6LongSword = {
	id:"BN6LongSword",
	name:"LongSword",
	image:BN6LongSwordIMG,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	mb:25,
	rank:"standard",
	damage:100,
	hits:1,
	priority:1,
	elements:[ELEMENTS.sword],
	hithuh: function(attacker, defender){
		return LONGSWORD.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6WideBlade = {
	id:"BN6WideBlade",
	name:"WideBlade",
	image:BN6WideBladeIMG,
	code:["B", "R", "W"],
	mb:38,
	rank:"standard",
	damage:150,
	hits:1,
	priority:1,
	elements:[ELEMENTS.sword],
	hithuh: function(attacker, defender){
		return BN6WideSword.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6LongBlade = {
	id:"BN6LongBlade",
	name:"LongBlade",
	image:BN6LongBladeIMG,
	code:["B", "M", "V"],
	mb:38,
	rank:"standard",
	damage:150,
	hits:1,
	priority:1,
	elements:[ELEMENTS.sword],
	hithuh: function(attacker, defender){
		return BN6LongSword.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6FireSword = {
	id:"BN6FireSword",
	name:"FireSword",
	image:BN6FireSwordIMG,
	code:["F", "O", "Z"],
	mb:30,
	rank:"standard",
	damage:140,
	hits:1,
	priority:1,
	elements:[ELEMENTS.sword, ELEMENTS.fire],
	hithuh: function(attacker, defender){
		return BN6WideSword.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6AquaSword = {
	id:"BN6AquaSword",
	name:"AquaSword",
	image:BN6AquaSwordIMG,
	code:["A", "I", "Y"],
	mb:32,
	rank:"standard",
	damage:160,
	hits:1,
	priority:1,
	elements:[ELEMENTS.sword, ELEMENTS.aqua],
	hithuh: function(attacker, defender){
		return BN6WideSword.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6ElecSword = {
	id:"BN6ElecSword",
	name:"ElecSword",
	image:BN6ElecSwordIMG,
	code:["B", "R", "W"],
	mb:35,
	rank:"standard",
	damage:120,
	hits:1,
	priority:1,
	elements:[ELEMENTS.sword, ELEMENTS.elec],
	hithuh: function(attacker, defender){
		return BN6WideSword.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){
		if(defender.guard < 1){
			defender.stunned = 1;
		}
	},
	effectmiss: function(attacker, defender){}
}

var BN6WoodSword = {
	id:"BN6WoodSword",
	name:"WoodSword",
	image:BN6WoodSwordIMG,
	code:["H", "S", "W"],
	mb:34,
	rank:"standard",
	damage:150,
	hits:1,
	priority:1,
	elements:[ELEMENTS.sword, ELEMENTS.wood],
	hithuh: function(attacker, defender){
		return BN6WideSword.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6WindRacket = {
	id:"BN6WindRacket",
	name:"WindRacket",
	image:BN6WindRacketIMG,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	mb:19,
	rank:"standard",
	damage:150,
	hits:1,
	priority:1,
	elements:[ELEMENTS.wind],
	hithuh: function(attacker, defender){
		return BN6WideSword.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){
		this.xDirection = 1;
		if(attacker.name === "two"){
			this.xDirection = -1;
		}
		if(defender.guard === null){
			for(var i = 0; i < 4; i++){
				this.xTile = defender.x + this.xDirection;
				this.yTile = defender.y;
				if(board.isCellPlayerValid(this.xTile, this.yTile)){
					cells[defender.x][defender.y].player = null;
					cells[this.xTile][this.yTile].player = defender;
					defender.x = this.xTile;
				}
			}
		}
	},
	effectmiss: function(attacker, defender){
		BN6WindRacket.effecthit(attacker, defender);
	}
}

var BN6Fumikomizan = {
	id:"BN6Fumikomizan",
	name:"Fumikomizan",
	image:BN6FumikomizanIMG,
	code:["B", "L", "P"],
	mb:28,
	rank:"standard",
	damage:160,
	hits:1,
	priority:2,
	elements:[ELEMENTS.sword],
	hithuh: function(attacker, defender){
		if(cells[attacker.x+2] && !board.cellHasSolidObject(attacker.x+2, attacker.y) && defender.invis < 1){
			attacker.x = attacker.x + 2;
			this.hitbool = BN6WideSword.hithuh(attacker, defender);
			attacker.x = attacker.x -2;
			return this.hitbool;
		}
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6VarSword = {
	id:"BN6VarSword",
	name:"VarSword",
	image:BN6VarSwordIMG,
	code:["K", "V", "W"],
	mb:28,
	rank:"standard",
	damage:80,
	hits:1,
	priority:1,
	elements:[ELEMENTS.sword],
	hithuh: function(attacker, defender){
		if(defender.invis < 1){
			if(BN6WideSword.hithuh(attacker, defender)){
				return true;
			}
			this.xDirection = -1;
			if(attacker.name === "one"){
				this.xDirection = 1;
			}
			attacker.x = attacker.x + this.xDirection;
			this.hitbool = BN6WideSword.hithuh(attacker, defender);
			attacker.x = attacker.x - this.xDirection;
			return this.hitbool;
		}
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6NeoVarSword = {
	id:"BN6NeoVarSword",
	name:"NeoVarSword",
	image:BN6NeoVarSwordIMG,
	code:["N"],
	mb:52,
	rank:"standard",
	damage:110,
	hits:2,
	priority:1,
	elements:[ELEMENTS.sword],
	hithuh: function(attacker, defender){
		return BN6VarSword.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6Kunai = {
	id:"BN6Kunai",
	name:"Kunai",
	image:BN6KunaiIMG,
	code:["A", "M", "T"],
	mb:25,
	rank:"standard",
	damage:120,
	hits:1,
	priority:1,
	elements:[ELEMENTS.sword],
	hithuh: function(attacker, defender){
		if(defender.invis < 1){
			return cards.around(attacker.x, attacker.y, defender);
		}
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6Muramasa = {
	id:"BN6Muramasa",
	name:"Muramasa",
	image:BN6MuramasaIMG,
	code:["M"],
	mb:77,
	rank:"standard",
	damage:0,
	hits:1,
	priority:1,
	elements:[ELEMENTS.sword],
	hithuh: function(attacker, defender){
		this.damage = playerHP - attacker.hp;
		return BN6LongSword.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6MachineSword = {
	id:"BN6MachineSword",
	name:"MachineSword",
	image:BN6MachineSwordIMG,
	code:["H", "L", "Q"],
	mb:37,
	rank:"standard",
	damage:200,
	hits:1,
	priority:2,
	elements:[ELEMENTS.sword],
	hithuh: function(attacker, defender){
		if(defender.stunned > 0 && defender.invis < 1){
			this.x = playerOne.x+1;
			this.y = playerOne.y;
			if(attacker.name === "one"){
				this.x = playerTwo.x-1;
				this.y = playerTwo.y;
			}
			if(this.x > 5 || this.x < 0){
				return false;
			}
			if(board.isCellPlayerValid(this.x, this.y)){
				return BN6MachineSword.wideSwordJump(attacker, defender, this.x, this.y);
			}
			this.y = this.y-1;
			if(board.isCellPlayerValid(this.x, this.y)){
				return BN6MachineSword.wideSwordJump(attacker, defender, this.x, this.y);
			}
			this.y = this.y+2;
			if(board.isCellPlayerValid(this.x, this.y)){
				return BN6MachineSword.wideSwordJump(attacker, defender, this.x, this.y);
			}
		}
		return false;
	},
	wideSwordJump: function(attacker, defender, x, y){
		this.tempX = attacker.x;
		this.tempY = attacker.y;
		attacker.x = x;
		attacker.y = y;
		this.hitbool = BN6WideSword.hithuh(attacker, defender);
		attacker.x = this.tempX;
		attacker.y = this.tempY;
		return this.hitbool;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6ElementSword = {
	id:"BN6ElementSword",
	name:"ElementSword",
	image:BN6ElementSwordIMG,
	code:["J", "M", "U"],
	mb:43,
	rank:"standard",
	damage:220,
	hits:1,
	priority:2,
	elements:[ELEMENTS.sword],
	hithuh: function(attacker, defender){
		if(defender.invis < 1 && (cells[defender.x][defender.y].panelType === PANELTYPE.GRASS || cells[defender.x][defender.y].panelType === PANELTYPE.ICE)){
			this.x = playerOne.x+1;
			this.y = playerOne.y;
			if(attacker.name === "one"){
				this.x = playerTwo.x-1;
				this.y = playerTwo.y;
			}
			if(this.x > 5 || this.x < 0){
				return false;
			}
			if(board.isCellPlayerValid(this.x, this.y)){
				return BN6MachineSword.wideSwordJump(attacker, defender, this.x, this.y);
			}
			this.y = this.y-1;
			if(board.isCellPlayerValid(this.x, this.y)){
				return BN6MachineSword.wideSwordJump(attacker, defender, this.x, this.y);
			}
			this.y = this.y+2;
			if(board.isCellPlayerValid(this.x, this.y)){
				return BN6MachineSword.wideSwordJump(attacker, defender, this.x, this.y);
			}
		}
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6AssassinSword = {
	id:"BN6AssassinSword",
	name:"AssassinSword",
	image:BN6AssassinSwordIMG,
	code:["N", "R", "Y"],
	mb:50,
	rank:"standard",
	damage:240,
	hits:1,
	priority:2,
	elements:[ELEMENTS.sword],
	hithuh: function(attacker, defender){
		return BN6MachineSword.hithuh(attacker, defender) || BN6ElementSword.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6CrackShoot = {
	id:"BN6CrackShoot",
	name:"CrackShoot",
	image:BN6CrackShootIMG,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	mb:4,
	rank:"standard",
	damage:60,
	hits:1,
	priority:2,
	elements:[],
	hithuh: function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === "one"){
			this.xDirection = 1;
		}
		if(board.isCellPlayerValid(attacker.x+this.xDirection, attacker.y) && cells[attacker.x+this.xDirection][attacker.y].player === null){
			return BN6Cannon.hithuh(attacker, defender);
		}
		return false;
	},
	effecthit: function(attacker, defender){
		BN6CrackShoot.effectmiss(attacker, defender);
	},
	effectmiss: function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === "one"){
			this.xDirection = 1;
		}
		if(board.isCellPlayerValid(attacker.x+this.xDirection, attacker.y) && cells[attacker.x+this.xDirection][attacker.y].player === null){
			board.convertPanel(attacker.x+this.xDirection, attacker.y, PANELTYPE.BROKEN);
		}
	}
}

var BN6DoubleShoot = {
	id:"BN6DoubleShoot",
	name:"DoubleShoot",
	image:BN6DoubleShootIMG,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	mb:8,
	rank:"standard",
	damage:60,
	hits:2,
	priority:2,
	elements:[],
	hithuh: function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === "one"){
			this.xDirection = 1;
		}
		attacker.x + this.xDirection;
		this.farhitbool = BN6CrackShoot.hithuh(attacker, defender);
		attacker.x - this.xDirection;
		this.closehitbool = BN6CrackShoot.hithuh(attacker, defender);
		if(this.farhitbool && this.closehitbool){
			this.hits = 2;
			return true;
		}
		if(this.farhitbool || this.closehitbool){
			this.hits = 1;
			return true;
		}
		this.hits = 2;
		return false;
	},
	effecthit: function(attacker, defender){
		BN6DoubleShoot.effectmiss(attacker, defender);
	},
	effectmiss: function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === "one"){
			this.xDirection = 1;
		}
		attacker.x + this.xDirection;
		BN6CrackShoot.effectmiss(attacker, defender);
		attacker.x - this.xDirection;
		BN6CrackShoot.effectmiss(attacker, defender);
	}
}

var BN6TripleShoot = {
	id:"BN6TripleShoot",
	name:"TripleShoot",
	image:BN6TripleShootIMG,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	mb:12,
	rank:"standard",
	damage:100,
	hits:1,
	priority:2,
	elements:[],
	hithuh: function(attacker, defender){
		attacker.y++;
		this.bothitbool = BN6CrackShoot.hithuh(attacker, defender);
		attacker.y = attacker.y - 2;
		this.tophitbool = BN6CrackShoot.hithuh(attacker, defender);
		attacker.y++;
		this.midhitbool = BN6CrackShoot.hithuh(attacker, defender);
		return this.bothitbool || this.tophitbool || this.midhitbool;
	},
	effecthit: function(attacker, defender){
		BN6TripleShoot.effectmiss(attacker, defender);
	},
	effectmiss: function(attacker, defender){
		attacker.y++;
		BN6CrackShoot.effectmiss(attacker, defender);
		attacker.y = attacker.y - 2;
		BN6CrackShoot.effectmiss(attacker, defender);
		attacker.y++;
		BN6CrackShoot.effectmiss(attacker, defender);
	}
}

var BN6ReflectMet1 = {
	id:"BN6ReflectMet1",
	name:"ReflectMet1",
	image:BN6ReflectMet1IMG,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	damage:60,
	hits:1,
	mb:7,
	rank:"standard",
	priority:1,
	elements:[],
	hithuh: function(attacker, defender){
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){
		attacker.guard = new ReflectMet(BN6ReflectMet1.damage);
	}
}

var BN6ReflectMet2 = {
	id:"BN6ReflectMet2",
	name:"ReflectMet2",
	image:BN6ReflectMet2IMG,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	damage:120,
	hits:1,
	mb:16,
	rank:"standard",
	priority:1,
	elements:[],
	hithuh: function(attacker, defender){
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){
		attacker.guard = new ReflectMet(BN6ReflectMet2.damage);
	}
}

var BN6ReflectMet3 = {
	id:"BN6ReflectMet3",
	name:"ReflectMet3",
	image:BN6ReflectMet3IMG,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	damage:200,
	hits:1,
	mb:25,
	rank:"standard",
	priority:1,
	elements:[],
	hithuh: function(attacker, defender){
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){
		attacker.guard = new ReflectMet(BN6ReflectMet3.damage);
	}
}

var BN6WaveArm1 = {
	id:"BN6WaveArm1",
	name:"WaveArm1",
	image:BN6WaveArm1IMG,
	code:["E", "F", "G"],
	damage:80,
	hits:1,
	mb:15,
	rank:"standard",
	priority:2,
	elements:[],
	hithuh: function(attacker, defender){
		if(defender.invis < 1){
			this.xDirection = -1;
			this.yDirection = 0;
			this.target = playerOne;
			if(attacker.name === "one"){
				this.xDirection = 1;
				this.target = playerTwo;
			}
			this.tempX = attacker.x + this.xDirection;
			this.tempY = attacker.y;
			while(this.tempX < 6 && this.tempX > -1){
				if(board.isHole(this.tempX, this.tempY)){
					return false;
				}
				if(this.tempX === defender.x && this.tempY === defender.y){
					return true;
				}
				this.yDiff = this.target.y - this.tempY;
				this.xDiff = this.target.x - this.tempX;
				if(Math.abs(this.yDiff) >= Math.abs(this.xDiff) && Math.abs(this.yDiff) > 0){
					this.yDirection = this.yDiff / Math.abs(this.yDiff);
				}
				this.tempX = this.tempX + this.xDirection;
				this.tempY = this.tempY + this.yDirection;
			}
		}
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6WaveArm2 = {
	id:"BN6WaveArm2",
	name:"WaveArm2",
	image:BN6WaveArm2IMG,
	code:["L", "M", "N"],
	damage:120,
	hits:1,
	mb:22,
	rank:"standard",
	priority:2,
	elements:[],
	hithuh: function(attacker, defender){
		WaveArm1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6WaveArm3 = {
	id:"BN6WaveArm3",
	name:"WaveArm3",
	image:BN6WaveArm3IMG,
	code:["R", "S", "T"],
	damage:160,
	hits:1,
	mb:29,
	rank:"standard",
	priority:2,
	elements:[],
	hithuh: function(attacker, defender){
		WaveArm1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6SandWorm1 = {
	id:"BN6SandWorm1",
	name:"SandWorm1",
	image:BN6SandWorm1IMG,
	code:["A", "G", "L"],
	damage:130,
	hits:1,
	mb:30,
	rank:"standard",
	priority:2,
	elements:[],
	hithuh: function(attacker, defender){
		this.hitbool = false;
		if(defender.invis < 1){
			if(attacker.name === "one"){
				this.target = playerTwo;
				if(this.target.x < 5){
					this.tempX = attacker.x;
					this.tempY = attacker.y;
					attacker.x = this.target.x - 1;
					attacker.y = this.target.y;
					this.hitbool = BN6LongSword.hithuh(attacker, defender);
					attacker.x = this.tempX;
					attacker.y = this.tempY;
				}
			}
			if(attacker.name === "two"){
				this.target = playerOne;
				if(this.target.x > -1){
					this.tempX = attacker.x;
					this.tempY = attacker.y;
					attacker.x = this.target.x + 1;
					attacker.y = this.target.y;
					this.hitbool = BN6LongSword.hithuh(attacker, defender);
					attacker.x = this.tempX;
					attacker.y = this.tempY;
				}
			}
		}
		return this.hitbool;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6SandWorm2 = {
	id:"BN6SandWorm2",
	name:"SandWorm2",
	image:BN6SandWorm2IMG,
	code:["B", "R", "Y"],
	damage:150,
	hits:1,
	mb:30,
	rank:"standard",
	priority:2,
	elements:[],
	hithuh: function(attacker, defender){
		SandWorm1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6SandWorm3 = {
	id:"BN6SandWorm3",
	name:"SandWorm3",
	image:BN6SandWorm3IMG,
	code:["H", "J", "S"],
	damage:170,
	hits:1,
	mb:30,
	rank:"standard",
	priority:2,
	elements:[],
	hithuh: function(attacker, defender){
		SandWorm1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6SummonBlack1 = {
	id:"BN6SummonBlack1",
	name:"SummonBlack1",
	image:BN6SummonBlack1IMG,
	code:["E", "I", "P"],
	damage:160,
	hits:1,
	mb:30,
	rank:"standard",
	priority:2,
	elements:[],
	hithuh: function(attacker, defender){
		if(defender.invis < 1){
			this.target = playerOne;
			this.xDirection = -1;
			if(attacker.name === "one"){
				this.target = playerTwo;
				this.xDirection = 1;
			}
			if(board.isHole(attacker.x + this.xDirection, attacker.y)){
				this.tempX = attacker.x;
				this.tempY = attacker.y;
				attacker.x = this.target.x - this.xDirection;
				attacker.y = this.target.y;
				this.hitbool = BN6WideSword.hithuh(attacker, defender);
				attacker.x = this.tempX;
				attacker.y = this.tempY;
				return this.hitbool;
			}
		}
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6SummonBlack2 = {
	id:"BN6SummonBlack2",
	name:"SummonBlack2",
	image:BN6SummonBlack2IMG,
	code:["H", "O", "V"],
	damage:200,
	hits:1,
	mb:40,
	rank:"standard",
	priority:2,
	elements:[],
	hithuh: function(attacker, defender){
		return BN6SummonBlack1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6SummonBlack3 = {
	id:"BN6SummonBlack3",
	name:"SummonBlack3",
	image:BN6SummonBlack3IMG,
	code:["W", "Y", "Z"],
	damage:260,
	hits:1,
	mb:40,
	rank:"standard",
	priority:2,
	elements:[],
	hithuh: function(attacker, defender){
		return BN6SummonBlack1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6Snake = {
	id:"BN6Snake",
	name:"Snake",
	image:BN6SnakeIMG,
	code:["H", "M", "L"],
	damage:30,
	hits:1,
	mb:34,
	rank:"standard",
	priority:0,
	elements:[],
	hithuh: function(attacker, defender){
		if(defender.invis < 1){
			this.hits = 0;
			this.xDirection = -1;
			this.target = playerOne;
			this.allySide = SIDE.RIGHT;
			if(attacker.name === "one"){
				this.xDirection = 1;
				this.target = playerTwo;
				this.allySide = SIDE.LEFT;
			}
			for(var i = 0; i < cells.length; i++){
				for(var j = 0; j < cells[i].length; j++){
					if(cells[i][j].side === this.allySide){
						if(board.isHole(i, j)){
							if(attacker.name == "one"){
								if(i > attacker.x){
									this.hits++;
								}
							}
							else{
								if(i < attacker.x){
									this.hits++;
								}
							}
						}
					}
				}
			}
			return defender.x === this.target.x && defender.y === this.target.y;
		}
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6NumberBall = {
	id:"BN6NumberBall",
	name:"NumberBall",
	image:BN6NumberBallIMG,
	code:["N"],
	damage:1,
	hits:4,
	mb:34,
	rank:"standard",
	priority:0,
	elements:[],
	hithuh: function(attacker, defender){
		this.damage = attacker.hp % 100;
		return BN6Cannon.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6FirePunch1 = {
	id:"BN6FirePunch1",
	name:"FirePunch1",
	image:BN6FirePunch1IMG,
	code:["D", "E", "F"],
	damage:60,
	hits:1,
	mb:12,
	rank:"standard",
	priority:2,
	elements:[ELEMENTS.fire],
	hithuh: function(attacker, defender){
		if(defender.invis < 1){
			this.target = playerOne;
			if(attacker.name === "one"){
				this.target = playerTwo;
			}
			if(defender.x === playerTwo.x && defender.y === playerTwo.y){
				if(Math.abs(attacker.x - defender.x) < 4){
					return true;
				}
			}
		}
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6FirePunch2 = {
	id:"BN6FirePunch2",
	name:"FirePunch2",
	image:BN6FirePunch2IMG,
	code:["R", "S", "T"],
	damage:120,
	hits:1,
	mb:22,
	rank:"standard",
	priority:2,
	elements:[ELEMENTS.fire],
	hithuh: function(attacker, defender){
		return BN6FirePunch1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6FirePunch3 = {
	id:"BN6FirePunch3",
	name:"FirePunch3",
	image:BN6FirePunch3IMG,
	code:["A", "B", "C"],
	damage:180,
	hits:1,
	mb:32,
	rank:"standard",
	priority:2,
	elements:[ELEMENTS.fire],
	hithuh: function(attacker, defender){
		return BN6FirePunch1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6BurnScare1 = {
	id:"BN6BurnScare1",
	name:"BurnScare1",
	image:BN6BurnScare1IMG,
	code:["H", "P", "V"],
	damage:100,
	hits:1,
	mb:24,
	rank:"standard",
	priority:0,
	elements:[ELEMENTS.fire],
	hithuh: function(attacker, defender){
		if(defender.invis < 1){
			this.square1 = [cells[0][0], cells[0][1], cells[1][0], cells[1][1]];
			this.square2 = [cells[0][1], cells[0][2], cells[1][1], cells[1][2]];
			this.square3 = [cells[1][0], cells[1][1], cells[2][0], cells[2][1]];
			this.square4 = [cells[1][1], cells[1][2], cells[2][1], cells[2][2]];
			this.square5 = [cells[2][0], cells[2][1], cells[3][0], cells[3][1]];
			this.square6 = [cells[2][1], cells[2][2], cells[3][1], cells[3][2]];
			this.square7 = [cells[3][0], cells[3][1], cells[4][0], cells[4][1]];
			this.square8 = [cells[3][1], cells[3][2], cells[4][1], cells[4][2]];
			this.square9 = [cells[4][0], cells[4][1], cells[5][0], cells[5][1]];
			this.square10 = [cells[4][1], cells[4][2], cells[5][1], cells[5][2]];

			this.squareOrder = [this.square2, this.square4, this.square6, this.square8, this.square10,
								this.square9, this.square7, this.square5, this.square3, this.square1];

			this.targetSide = SIDE.LEFT;
			this.targetPlayer = playerOne;
			if(attacker.name === "one"){
				this.targetSide = SIDE.RIGHT;
				this.targetPlayer = playerTwo;
			}

			for(var i = 0; i < this.squareOrder.length; i++){
				this.sideCorrect = true;
				for(var j = 0; j < this.squareOrder[i].length; j++){
					if(this.squareOrder[i][j].side !== this.targetSide){
						this.sideCorrect = false;
					}
				}
				if(this.sideCorrect){
					this.isPlayerHit = false;
					for(var j = 0; j < this.squareOrder[i].length; j++){
						if(this.squareOrder[i][j].player === this.targetPlayer){
							this.isPlayerHit = true;
						}
					}
					if(this.isPlayerHit){
						return this.squareOrder[i].includes(cells[defender.x][defender.y]);
					}
				}
			}
		}
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6BurnScare2 = {
	id:"BN6BurnScare2",
	name:"BurnScare2",
	image:BN6BurnScare2IMG,
	code:["D", "M", "T"],
	damage:120,
	hits:1,
	mb:30,
	rank:"standard",
	priority:0,
	elements:[ELEMENTS.fire],
	hithuh: function(attacker, defender){
		return BN6BurnScare1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6BurnScare3 = {
	id:"BN6BurnScare3",
	name:"BurnScare3",
	image:BN6BurnScare3IMG,
	code:["E", "O", "Z"],
	damage:140,
	hits:1,
	mb:36,
	rank:"standard",
	priority:0,
	elements:[ELEMENTS.fire],
	hithuh: function(attacker, defender){
		return BN6BurnScare1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6Meteors = {
	id:"BN6Meteors",
	name:"Meteors",
	image:BN6MeteorsIMG,
	code:["R"],
	damage:40,
	hits:1,
	mb:73,
	rank:"standard",
	priority:0,
	elements:[ELEMENTS.fire],
	hithuh: function(attacker, defender){
		this.hits = 0;
		this.hitbool = false;
		if(defender.invis < 1){
			this.targetSide = SIDE.LEFT;
			this.xDirection = 1;
			this.xStart = 0;
			this.xEnd = 5;
			if(attacker.name == "one"){
				this.targetSide = SIDE.RIGHT;
				this.xDirection = -1;
				this.xStart = 5;
				this.xEnd = 0;
			}
			this.x = this.xStart;
			var i = 0;
			this.y = 0;
			while(i < 30){
				if(cells[this.x][this.y].side === this.targetSide){
					i++;
					if(defender.x === this.x && defender.y === this.y){
						this.hits++;
						this.hitbool = true;
					}
				}
				this.y++;
				if(this.y > 2){
					this.y = 0;
					if(this.x === this.xEnd){
						this.x = this.xStart;
					}
					else{
						this.x = this.x + this.xDirection;
					}
				}
			}
		}
		if(this.hits === 0){
			this.hits = 1;
		}
		return this.hitbool;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6AquaNeedle1 = {
	id:"BN6AquaNeedle1",
	name:"AquaNeedle1",
	image:BN6AquaNeedle1IMG,
	code:["C", "J", "P"],
	damage:40,
	hits:3,
	mb:31,
	rank:"standard",
	priority:3,
	elements:[ELEMENTS.aqua],
	hithuh: function(attacker, defender){
		if(defender.invis < 1){
			this.target = playerOne;
			if(attacker.name === "one"){
				this.target = playerTwo;
			}
			return defender.x === playerTwo.x && defender.y === playerTwo.y
		}
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6AquaNeedle2 = {
	id:"BN6AquaNeedle2",
	name:"AquaNeedle2",
	image:BN6AquaNeedle2IMG,
	code:["F", "K", "T"],
	damage:60,
	hits:3,
	mb:35,
	rank:"standard",
	priority:3,
	elements:[ELEMENTS.aqua],
	hithuh: function(attacker, defender){
		return BN6AquaNeedle1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6AquaNeedle3 = {
	id:"BN6AquaNeedle3",
	name:"AquaNeedle3",
	image:BN6AquaNeedle3IMG,
	code:["A", "L", "U"],
	damage:80,
	hits:3,
	mb:39,
	rank:"standard",
	priority:3,
	elements:[ELEMENTS.aqua],
	hithuh: function(attacker, defender){
		return BN6AquaNeedle1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6BlizzardBall = {
	id:"BN6BlizzardBall",
	name:"BlizzardBall",
	image:BN6BlizzardBallIMG,
	code:["H", "N", "T"],
	damage:150,
	addDamage:0,
	hits:1,
	mb:76,
	rank:"standard",
	priority:0,
	elements:[ELEMENTS.aqua],
	hithuh: function(attacker, defender){
		if(defender.invis < 1){
			if(attacker.name === "one"){
				for(var i=0; i < defender.x - attacker.x; i++){
					if(board.cellHasSolidObject(attacker.x + i, attacker.y)){
						this.addDamage = this.addDamage + 150;
					}
				}
				return attacker.y === defender.y && defender.x > attacker.x;
			}
			else{
				for(var i=0; i < attacker.x - defender.x; i++){
					if(board.cellHasSolidObject(attacker.x - i, attacker.y)){
						this.addDamage = this.addDamage + 150;
					}
				}
				return attacker.y === defender.y && defender.x < attacker.x;
			}
		}
		return false;
	},
	effecthit: function(attacker, defender){
		this.xEnd = defender.x;
		this.xDirection = -1;
		if(attacker.name === "one"){
			this.xDirection = 1;
		}
		this.xStart = attacker.x + this.xDirection;
		for(var i = this.xStart; i !== xEnd; i = i + this.xDirection){
			if(board.cellHasSolidObject(i, attacker.y)){
				cells[i][attacker.y].object = [];
			}
		}
	},
	effectmiss: function(attacker, defender){
		this.tempX = defender.x;
		defender.x = -1;
		if(attacker.name === "one"){
			defender.x = 6;
		}
		BN6BlizzardBall.effecthit(attacker, defender);
		defender.x = this.tempX;
	}
}

var BN6KillerSensor1 = {
	id:"BN6KillerSensor1",
	name:"KillerSensor1",
	image:BN6KillerSensor1IMG,
	code:["J", "O", "W"],
	mb:32,
	rank:"standard",
	damage:100,
	hits:1,
	priority:0,
	elements:[ELEMENTS.elec],
	hithuh: function(attacker, defender){
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){
		if(attacker.name === "one"){
			if(!board.cellHasSolidObject(attacker.x+1, attacker.y) && cells[attacker.x+1][attacker.y].player === null){
				cells[attacker.x+1][attacker.y].object.push(new BN6KillerSensor(attacker.x+1, attacker.y, attacker, defender, BN6KillerSensor1.damage));
			}
		}
		else{
			if(!board.cellHasSolidObject(attacker.x-1, attacker.y) && cells[attacker.x+1][attacker.y].player === null){
				cells[attacker.x-1][attacker.y].object.push(new BN6KillerSensor(attacker.x-1, attacker.y, attacker, defender, BN6KillerSensor1.damage));
			}
		}
	}
}

var BN6KillerSensor2 = {
	id:"BN6KillerSensor2",
	name:"KillerSensor2",
	image:BN6KillerSensor2IMG,
	code:["N", "U", "Y"],
	mb:35,
	rank:"standard",
	damage:130,
	hits:1,
	priority:0,
	elements:[ELEMENTS.elec],
	hithuh: function(attacker, defender){
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){
		if(attacker.name === "one"){
			if(!board.cellHasSolidObject(attacker.x+1, attacker.y) && cells[attacker.x+1][attacker.y].player === null){
				cells[attacker.x+1][attacker.y].object.push(new BN6KillerSensor(attacker.x+1, attacker.y, attacker, defender, BN6KillerSensor2.damage));
			}
		}
		else{
			if(!board.cellHasSolidObject(attacker.x-1, attacker.y) && cells[attacker.x+1][attacker.y].player === null){
				cells[attacker.x-1][attacker.y].object.push(new BN6KillerSensor(attacker.x-1, attacker.y, attacker, defender, BN6KillerSensor2.damage));
			}
		}
	}
}

var BN6KillerSensor3 = {
	id:"BN6KillerSensor3",
	name:"KillerSensor3",
	image:BN6KillerSensor3IMG,
	code:["I", "K", "Q"],
	mb:38,
	rank:"standard",
	damage:160,
	hits:1,
	priority:0,
	elements:[ELEMENTS.elec],
	hithuh: function(attacker, defender){
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){
		if(attacker.name === "one"){
			if(!board.cellHasSolidObject(attacker.x+1, attacker.y) && cells[attacker.x+1][attacker.y].player === null){
				cells[attacker.x+1][attacker.y].object.push(new BN6KillerSensor(attacker.x+1, attacker.y, attacker, defender, BN6KillerSensor3.damage));
			}
		}
		else{
			if(!board.cellHasSolidObject(attacker.x-1, attacker.y) && cells[attacker.x+1][attacker.y].player === null){
				cells[attacker.x-1][attacker.y].object.push(new BN6KillerSensor(attacker.x-1, attacker.y, attacker, defender, BN6KillerSensor3.damage));
			}
		}
	}
}

var BN6Boomerang = {
	id:"BN6Boomerang",
	name:"Boomerang",
	image:BN6BoomerangIMG,
	code:["J", "K", "T"],
	mb:16,
	rank:"standard",
	damage:100,
	hits:1,
	priority:2,
	elements:[ELEMENTS.wood],
	hithuh: function(attacker, defender){
		if(defender.y === 0){
			return true;
		}
		if(defender.y === 2){
			return true;
		}
		this.xEnd = 0;
		if(attacker.name === "one"){
			this.xEnd = 5;
		}
		return defender.x === this.xEnd;
	},
	effecthit: function(attacker, defender){
		BN6Boomerang.effectmiss(attacker, defender);
	},
	effectmiss: function(attacker, defender){
		this.xEnd = 0;
		if(attacker.name === "one"){
			this.xEnd = 5;
		}
		for(var i = 0; i < cells.length; i++){
			for(var j = 0; j < cells[i].length; j++){
				if(i === this.xEnd){
					board.convertPanel(i, j, PANELTYPE.GRASS);
				}
				else if(j === 0 || j === 2){
					board.convertPanel(i, j, PANELTYPE.GRASS);
				}
			}
		}
	}
}

var BN6HiBoomerang = {
	id:"BN6HiBoomerang",
	name:"HiBoomerang",
	image:BN6HiBoomerangIMG,
	code:["B", "L", "V"],
	mb:26,
	rank:"standard",
	damage:140,
	hits:1,
	priority:2,
	elements:[ELEMENTS.wood],
	hithuh: function(attacker, defender){
		return BN6Boomerang.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){
		BN6HiBoomerang.effectmiss(attacker, defender);
	},
	effectmiss: function(attacker, defender){
		BN6Boomerang.effectmiss(attacker, defender);
	}
}

var BN6MegaBoomerang = {
	id:"BN6MegaBoomerang",
	name:"MegaBoomerang",
	image:BN6MegaBoomerangIMG,
	code:["I", "M", "W"],
	mb:36,
	rank:"standard",
	damage:170,
	hits:1,
	priority:2,
	elements:[ELEMENTS.wood],
	hithuh: function(attacker, defender){
		return BN6Boomerang.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){
		BN6MegaBoomerang.effectmiss(attacker, defender);
	},
	effectmiss: function(attacker, defender){
		BN6Boomerang.effectmiss(attacker, defender);
	}
}

var BN6Lance = {
	id:"BN6Lance",
	name:"Lance",
	image:BN6LanceIMG,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	mb:42,
	rank:"standard",
	damage:150,
	hits:1,
	priority:1,
	elements:[ELEMENTS.wood],
	hithuh: function(attacker, defender){
		if(defender.invis < 1){
			this.lastCol = 0;
			if(attacker.name === "one"){
				this.lastCol = 5;
			}
			return defender.x === this.lastCol;
		}
		return false;
	},
	effecthit: function(attacker, defender){
		this.nextCol = 1
		if(attacker.name === "one"){
			this.nextCol = 4;
		}
		if(board.isCellPlayerValid(this.nextCol, defender.y)){
			cells[defender.x][defender.y].player = null;
			defender.x = this.nextCol;
			cells[defender.x][defender.y].player = defender;
		}
	},
	effectmiss: function(attacker, defender){}
}

var BN6HeatDragon = {
	id:"BN6HeatDragon",
	name:"HeatDragon",
	image:BN6HeatDragonIMG,
	code:["G", "R", "T"],
	mb:40,
	rank:"standard",
	damage:140,
	hits:1,
	priority:2,
	elements:[ELEMENTS.fire],
	hithuh: function(attacker, defender){
		if(defender.invis < 1){
			this.xDirection = -1;
			this.target = playerOne;
			if(attacker.name === "one"){
				this.xDirection = 1;
				this.target = playerTwo;
			}
			return defender.x === this.target.x || defender.x === this.target.x + this.xDirection;
		}
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6ElecDragon = {
	id:"BN6ElecDragon",
	name:"ElecDragon",
	image:BN6ElecDragonIMG,
	code:["A", "L", "V"],
	mb:40,
	rank:"standard",
	damage:150,
	hits:1,
	priority:2,
	elements:[ELEMENTS.elec],
	hithuh: function(attacker, defender){
		return BN6HeatDragon.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){
		BN6ElecDragon.effectmiss(attacker, defender);
	},
	effectmiss: function(attacker, defender){
		var fakeDefender = {
			x: -1,
			y: -1,
			invis: 0,
			guard: null
		};
		for(var i = 0; i < cells.length; i++){
			for(var j = 0; j < cells.length; j++){
				fakeDefender.x = i;
				fakeDefender.y = j;
				if(BN6ElecDragon.hithuh(attacker, fakeDefender)){
					board.convertPanel(i, j, PANELTYPE.CRACKED);
				}
			}
		}
	}
}

var BN6AquaDragon = {
	id:"BN6AquaDragon",
	name:"AquaDragon",
	image:BN6AquaDragonIMG,
	code:["H", "P", "S"],
	mb:44,
	rank:"standard",
	damage:120,
	hits:1,
	priority:2,
	elements:[ELEMENTS.aqua],
	hithuh: function(attacker, defender){
		return BN6HeatDragon.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){
		BN6AquaDragon.effectmiss(attacker, defender);
	},
	effectmiss: function(attacker, defender){
		var fakeDefender = {
			x: -1,
			y: -1,
			invis: 0,
			guard: null
		};
		for(var i = 0; i < cells.length; i++){
			for(var j = 0; j < cells.length; j++){
				fakeDefender.x = i;
				fakeDefender.y = j;
				if(BN6AquaDragon.hithuh(attacker, fakeDefender)){
					board.convertPanel(i, j, PANELTYPE.ICE);
				}
			}
		}
	}
}

var BN6WoodDragon = {
	id:"BN6WoodDragon",
	name:"WoodDragon",
	image:BN6WoodDragonIMG,
	code:["G", "T", "V"],
	mb:48,
	rank:"standard",
	damage:130,
	hits:1,
	priority:2,
	elements:[ELEMENTS.wood],
	hithuh: function(attacker, defender){
		return BN6HeatDragon.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){
		BN6WoodDragon.effectmiss(attacker, defender);
	},
	effectmiss: function(attacker, defender){
		var fakeDefender = {
			x: -1,
			y: -1,
			invis: 0,
			guard: null
		};
		for(var i = 0; i < cells.length; i++){
			for(var j = 0; j < cells.length; j++){
				fakeDefender.x = i;
				fakeDefender.y = j;
				if(BN6WoodDragon.hithuh(attacker, fakeDefender)){
					board.convertPanel(i, j, PANELTYPE.WOOD);
				}
			}
		}
	}
}

var BN6GolemPunch1 = {
	id:"BN6GolemPunch1",
	name:"GolemPunch1",
	image:BN6GolemPunch1IMG,
	code:["I", "K", "Y"],
	mb:17,
	rank:"standard",
	damage:140,
	hits:1,
	priority:2,
	elements:[ELEMENTS.break],
	hithuh: function(attacker, defender){
		this.affectedColumn = AREAGRAB.affectedColumn(attacker, defender);
		return Math.abs(defender.y - attacker.y) < 2 && defender.x === this.affectedColumn;
	},
	effecthit: function(attacker, defender){
		BN6GolemPunch1.effectmiss(attacker, defender);
	},
	effectmiss: function(attacker, defender){
		var fakeDefender = {
			x: -1,
			y: -1,
			invis: 0,
			guard: null
		};
		for(var i = 0; i < cells.length; i++){
			for(var j = 0; j < cells.length; j++){
				fakeDefender.x = i;
				fakeDefender.y = j;
				if(BN6GolemPunch1.hithuh(attacker, fakeDefender)){
					board.convertPanel(i, j, PANELTYPE.CRACKED);
				}
			}
		}
	}
}

var BN6GolemPunch2 = {
	id:"BN6GolemPunch2",
	name:"GolemPunch2",
	image:BN6GolemPunch2IMG,
	code:["D", "P", "U"],
	mb:27,
	rank:"standard",
	damage:190,
	hits:1,
	priority:2,
	elements:[ELEMENTS.break],
	hithuh: function(attacker, defender){
		return BN6GolemPunch1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){
		BN6GolemPunch1.effectmiss(attacker, defender);
	},
	effectmiss: function(attacker, defender){
		BN6GolemPunch1.effectmiss(attacker, defender);
	}
}

var BN6GolemPunch3 = {
	id:"BN6GolemPunch3",
	name:"GolemPunch3",
	image:BN6GolemPunch3IMG,
	code:["H", "M", "V"],
	mb:37,
	rank:"standard",
	damage:250,
	hits:1,
	priority:2,
	elements:[ELEMENTS.break],
	hithuh: function(attacker, defender){
		return BN6GolemPunch1.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){
		BN6GolemPunch1.effectmiss(attacker, defender);
	},
	effectmiss: function(attacker, defender){
		BN6GolemPunch1.effectmiss(attacker, defender);
	}
}

var BN6JusticeOne = {
	id:"BN6JusticeOne",
	name:"JusticeOne",
	image:BN6JusticeOneIMG,
	code:["J"],
	mb:90,
	rank:"standard",
	damage:100,
	addDamage:0,
	hits:1,
	priority:2,
	elements:[ELEMENTS.break],
	hithuh: function(attacker, defender){
		this.addDamage = 0;
		if(BN6MiniBomb.hithuh(attacker, defender)){
			this.addDamage = 120;
		}
		return BN6BigBomb.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){
		BN6JusticeOne.effectmiss(attacker, defender);
	},
	effectmiss: function(attacker, defender){
		var fakeDefender = {
			x: -1,
			y: -1,
			invis: 0,
			guard: null
		};
		for(var i = 0; i < cells.length; i++){
			for(var j = 0; j < cells.length; j++){
				fakeDefender.x = i;
				fakeDefender.y = j;
				if(BN6BigBomb.hithuh(attacker, fakeDefender)){
					board.convertPanel(i, j, PANELTYPE.CRACKED);
				}
			}
		}
	}
}

var BN6AirWheel1 = {
	id:"BN6AirWheel1",
	name:"AirWheel1",
	image:BN6AirWheel1IMG,
	code:["F", "G", "R"],
	mb:22,
	rank:"standard",
	damage:50,
	hits:2,
	priority:2,
	elements:[ELEMENTS.wind],
	hithuh: function(attacker, defender){
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === "one"){
			this.xDirection = 1;
		}
		this.tempX = attacker.x + this.xDirection;
		if(board.isCellPlayerValid(this.tempX, attacker.y)){
			this.locReached = false;
			while(!this.locReached){
				if(!board.isCellPlayerValid(this.tempX, attacker.y)){
					this.locReached = true;
				}
				else{
					this.tempX = this.tempX + this.xDirection;
				}
			}
			cells[this.tempX][attacker.y].object = [new BN6AirWheel(this.tempX, attacker.y, attacker, defender, BN6AirWheel1.damage, BN6AirWheel1.hits)];
		}
	}
}

var BN6AirWheel2 = {
	id:"BN6AirWheel2",
	name:"AirWheel2",
	image:BN6AirWheel2IMG,
	code:["A", "L", "T"],
	mb:29,
	rank:"standard",
	damage:50,
	hits:3,
	priority:2,
	elements:[ELEMENTS.wind],
	hithuh: function(attacker, defender){
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === "one"){
			this.xDirection = 1;
		}
		this.tempX = attacker.x + this.xDirection;
		if(board.isCellPlayerValid(this.tempX, attacker.y)){
			this.locReached = false;
			while(!this.locReached){
				if(!board.isCellPlayerValid(this.tempX, attacker.y)){
					this.locReached = true;
				}
				else{
					this.tempX = this.tempX + this.xDirection;
				}
			}
			cells[this.tempX][attacker.y].object = [new BN6AirWheel(this.tempX, attacker.y, attacker, defender, BN6AirWheel2.damage, BN6AirWheel2.hits)];
		}
	}
}

var BN6AirWheel3 = {
	id:"BN6AirWheel3",
	name:"AirWheel3",
	image:BN6AirWheel3IMG,
	code:["N", "O", "T"],
	mb:36,
	rank:"standard",
	damage:50,
	hits:4,
	priority:2,
	elements:[ELEMENTS.wind],
	hithuh: function(attacker, defender){
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === "one"){
			this.xDirection = 1;
		}
		this.tempX = attacker.x + this.xDirection;
		if(board.isCellPlayerValid(this.tempX, attacker.y)){
			this.locReached = false;
			while(!this.locReached){
				if(!board.isCellPlayerValid(this.tempX, attacker.y)){
					this.locReached = true;
				}
				else{
					this.tempX = this.tempX + this.xDirection;
				}
			}
			cells[this.tempX][attacker.y].object = [new BN6AirWheel(this.tempX, attacker.y, attacker, defender, BN6AirWheel3.damage, BN6AirWheel3.hits)];
		}
	}
}

var BN6Wind = {
	id:"BN6Wind",
	name:"Wind",
	image:BN6WindIMG,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	mb:10,
	rank:"standard",
	damage:0,
	hits:1,
	priority:0,
	elements:[ELEMENTS.wind],
	hithuh: function(attacker, defender){
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === "one"){
			this.xDirection = 1;
		}
		if(board.isCellPlayerValid(attacker.x + this.xDirection, attacker.y)){
			cells[this.tempX][attacker.y].object = [new BN6WindBox(this.tempX, attacker.y, attacker, defender, 1)];
		}
	}
}

var BN6Fan = {
	id:"BN6Fan",
	name:"Fan",
	image:BN6FanIMG,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	mb:10,
	rank:"standard",
	damage:0,
	hits:1,
	priority:0,
	elements:[ELEMENTS.wind],
	hithuh: function(attacker, defender){
		return false;
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === "one"){
			this.xDirection = 1;
		}
		if(board.isCellPlayerValid(attacker.x + this.xDirection, attacker.y)){
			cells[this.tempX][attacker.y].object = [new BN6WindBox(this.tempX, attacker.y, attacker, defender, -1)];
		}
	}
}

var BN6Magnum = {
	id:"BN6Magnum",
	name:"Magnum",
	image:BN6MagnumIMG,
	code:["F", "L", "W"],
	mb:31,
	rank:"standard",
	damage:130,
	hits:1,
	priority:0,
	elements:[ELEMENTS.cursor],
	hithuh: function(attacker, defender){
		if(defender.invis < 1){
			this.target = playerOne;
			if(attacker.name === "one"){
				this.target = playerTwo;
			}
			if(defender.x === this.target.x){
				return true;
			}
		}
		return false;
	},
	effecthit: function(attacker, defender){
		BN6Magnum.effectmiss(attacker, defender);
	},
	effectmiss: function(attacker, defender){
		this.target = playerOne;
		if(attacker.name === "one"){
			this.target = playerTwo;
		}
		for(var j = 0; j < cells[this.target.x].length; j++){
			board.convertPanel(this.target.x, j, PANELTYPE.BROKEN);
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
				BN6MegEnBomb, BN6FlashBomb1, BN6FlashBomb2, BN6FlashBomb3, BN6BlackBomb, BN6BugBomb, 
				BN6GrassSeed, BN6IceSeed, BN6PoisonSeed, BN6Sword, BN6WideSword, BN6LongSword, 
				BN6WideBlade, BN6LongBlade, BN6FireSword, BN6AquaSword, BN6ElecSword, BN6WoodSword, 
				BN6WindRacket, BN6Fumikomizan, BN6VarSword, BN6NeoVarSword, BN6Kunai, BN6Muramasa, 
				BN6MachineSword, BN6ElementSword, BN6AssassinSword, BN6CrackShoot, BN6DoubleShoot, 
				BN6TripleShoot, BN6ReflectMet1, BN6ReflectMet2, BN6ReflectMet3, BN6WaveArm1, BN6WaveArm2, 
				BN6WaveArm3, BN6SandWorm1, BN6SandWorm2, BN6SandWorm3, BN6SummonBlack1, BN6SummonBlack2, 
				BN6SummonBlack3, BN6Snake, BN6NumberBall, BN6FirePunch1, BN6FirePunch2, BN6FirePunch3, 
				BN6BurnScare1, BN6BurnScare2, BN6BurnScare3, BN6Meteors, BN6AquaNeedle1, BN6AquaNeedle2, 
				BN6AquaNeedle3, BN6BlizzardBall, BN6KillerSensor1, BN6KillerSensor2, BN6KillerSensor3, 
				BN6Boomerang, BN6HiBoomerang, BN6MegaBoomerang, BN6Lance, BN6HeatDragon, BN6ElecDragon, 
				BN6AquaDragon, BN6WoodDragon, BN6GolemPunch1, BN6GolemPunch2, BN6GolemPunch3, BN6JusticeOne, 
				BN6AirWheel1, BN6AirWheel2, BN6AirWheel3, BN6Wind, BN6Fan, BN6Magnum];

function Bn6Cards(){

}
