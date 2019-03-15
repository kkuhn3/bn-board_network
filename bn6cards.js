
// -------------- Standard --------------
function BN6Cannon(){
	this.id="BN6Cannon";
	this.name="Cannon";
	this.image=BN6CannonIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=6;
	this.rank="standard";
	this.damage=40;
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

function BN6HiCannon(){
	this.id="BN6HiCannon";
	this.name="HiCannon";
	this.image=BN6HiCannonIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=24;
	this.rank="standard";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Cannon()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6MegaCannon(){
	this.id="BN6MegaCannon";
	this.name="MegaCannon";
	this.image=BN6MegaCannonIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=38;
	this.rank="standard";
	this.damage=180;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Cannon()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6AirShot(){
	this.id="BN6AirShot";
	this.name="AirShot";
	this.image=BN6AirShotIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=4;
	this.rank="standard";
	this.damage=20;
	this.boostDamage=0;
	this.hits=1;
	this.priority=1;
	this.elements=[ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		return (new BN6Cannon()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		if(defender.guard === null){
			if(attacker.name === "one" && defender.x < 5){
				if(board.isCellThisPlayerValid(defender.x+1, defender.y, defender)){
					cells[defender.x][defender.y].player = null;
					defender.x = defender.x+1;
					cells[defender.x][defender.y].player = defender;
				}
			}
			else if(defender.x > 0){
				if(board.isCellThisPlayerValid(defender.x+1, defender.y, defender)){
					cells[defender.x][defender.y].player = null;
					defender.x = defender.x-1;
					cells[defender.x][defender.y].player = defender;
				}
			}
		}
	};
	this.effectmiss= function(attacker, defender){};
}

function BN6Vulcan1(){
	this.id="BN6Vulcan1";
	this.name="Vulcan1";
	this.image=BN6Vulcan1IMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=5;
	this.rank="standard";
	this.damage=10;
	this.boostDamage=0;
	this.hits=3;
	this.priority=1;
	this.elements=[];
	this.hithuh= function(attacker, defender){
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
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6Vulcan2(){
	this.id="BN6Vulcan2";
	this.name="Vulcan2";
	this.image=BN6Vulcan2IMG;
	this.code=["D", "F", "L"];
	this.mb=18;
	this.rank="standard";
	this.damage=15;
	this.boostDamage=0;
	this.hits=4;
	this.priority=1;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Vulcan1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6Vulcan3(){
	this.id="BN6Vulcan3";
	this.name="Vulcan3";
	this.image=BN6Vulcan3IMG;
	this.code=["A", "G", "R"];
	this.mb=30;
	this.rank="standard";
	this.damage=20;
	this.boostDamage=0;
	this.hits=5;
	this.priority=1;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Vulcan1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6SuperVulcan(){
	this.id="BN6SuperVulcan";
	this.name="SuperVulcan";
	this.image=BN6SuperVulcanIMG;
	this.code=["V"];
	this.mb=75;
	this.rank="standard";
	this.damage=20;
	this.boostDamage=0;
	this.hits=10;
	this.priority=1;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Vulcan1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6Spreader1(){
	this.id="BN6Spreader1";
	this.name="Spreader1";
	this.image=BN6Spreader1IMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=10;
	this.rank="standard";
	this.damage=30;
	this.boostDamage=0;
	this.hits=1;
	this.priority=1;
	this.elements=[];
	this.hithuh= function(attacker, defender){
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
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6Spreader2(){
	this.id="BN6Spreader2";
	this.name="Spreader2";
	this.image=BN6Spreader2IMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=18;
	this.rank="standard";
	this.damage=60;
	this.boostDamage=0;
	this.hits=1;
	this.priority=1;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Spreader1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6Spreader3(){
	this.id="BN6Spreader3";
	this.name="Spreader3";
	this.image=BN6Spreader3IMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=26;
	this.rank="standard";
	this.damage=90;
	this.boostDamage=0;
	this.hits=1;
	this.priority=1;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Spreader1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6BigTank1(){
	this.id="BN6BigTank1";
	this.name="BigTank1";
	this.image=BN6BigTank1IMG;
	this.code=["A", "G", "R"];
	this.mb=17;
	this.rank="standard";
	this.damage=120;
	this.boostDamage=0;
	this.hits=1;
	this.priority=3;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			if((new BN6Cannon()).hithuh(attacker, defender)){
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
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6BigTank2(){
	this.id="BN6BigTank2";
	this.name="BigTank2";
	this.image=BN6BigTank2IMG;
	this.code=["L", "S", "V"];
	this.mb=28;
	this.rank="standard";
	this.damage=160;
	this.boostDamage=0;
	this.hits=1;
	this.priority=3;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6BigTank1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6BigTank3(){
	this.id="BN6BigTank3";
	this.name="BigTank3";
	this.image=BN6BigTank3IMG;
	this.code=["B", "M", "P"];
	this.mb=39;
	this.rank="standard";
	this.damage=200;
	this.boostDamage=0;
	this.hits=1;
	this.priority=3;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6BigTank1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6GunSol1(){
	this.id="BN6GunSol1";
	this.name="GunSol1";
	this.image=BN6GunSol1IMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=15;
	this.rank="standard";
	this.damage=5;
	this.boostDamage=0;
	this.hits=10;
	this.priority=2;
	this.elements=[];
	this.showSpecial= function(attacker, defender){
		if(attacker.name == player.name){
			document.getElementById("special").style.display='block';
			document.getElementById("special").innerHTML ='Continue Using GunDelSol!';
			document.getElementById("special").value ='Continue Using GunDelSol!';
			document.getElementById("special").onclick=function () { (new BN6GunSol1()).useSpecial((new BN6GunSol1())); };
			if(attacker.name === "one"){
				document.getElementById("special").style.float='left';
			}
			else{
				document.getElementById("special").style.float='right';
			}
		}
	};
	this.useSpecial= function(card){
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
	};
	this.hithuh= function(attacker, defender){
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
	};
	this.effecthit= function(attacker, defender){
		(new BN6GunSol1()).showSpecial(attacker, defender);
		defender.guard = null;
		defender.invis = 0;
	};
	this.effectmiss= function(attacker, defender){
		(new BN6GunSol1()).showSpecial(attacker, defender);
	};
}

function BN6GunSol2(){
	this.id="BN6GunSol2";
	this.name="GunSol2";
	this.image=BN6GunSol2IMG;
	this.code=["B", "E", "R"];
	this.mb=30;
	this.rank="standard";
	this.damage=10;
	this.boostDamage=0;
	this.hits=10;
	this.priority=2;
	this.elements=[];
	this.showSpecial= function(attacker, defender){
		if(attacker.name == player.name){
			document.getElementById("special").style.display='block';
			document.getElementById("special").innerHTML ='Continue Using GunDelSol!';
			document.getElementById("special").value ='Continue Using GunDelSol!';
			document.getElementById("special").onclick= function () { (new BN6GunSol2()).useSpecial((new BN6GunSol2())); };
			if(attacker.name === "one"){
				document.getElementById("special").style.float='left';
			}
			else{
				document.getElementById("special").style.float='right';
			}
		}
	};
	this.useSpecial= function(card){
		(new BN6GunSol1()).useSpecial(card);
	};
	this.hithuh= function(attacker, defender){
		return (new BN6GunSol1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new BN6GunSol1()).effecthit(attacker, defender);
		(new BN6GunSol2()).showSpecial(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new BN6GunSol2()).showSpecial(attacker, defender);
	};
}

function BN6GunSol3(){
	this.id="BN6GunSol3";
	this.name="GunSol3";
	this.image=BN6GunSol3IMG;
	this.code=["N", "Q", "W"];
	this.mb=38;
	this.rank="standard";
	this.damage=15;
	this.boostDamage=0;
	this.hits=10;
	this.priority=2;
	this.elements=[];
	this.showSpecial= function(attacker, defender){
		if(attacker.name == player.name){
			document.getElementById("special").style.display='block';
			document.getElementById("special").innerHTML ='Continue Using GunDelSol!';
			document.getElementById("special").value ='Continue Using GunDelSol!';
			document.getElementById("special").onclick =function () { (new BN6GunSol3()).useSpecial((new BN6GunSol3())); };
			if(attacker.name === "one"){
				document.getElementById("special").style.float='left';
			}
			else{
				document.getElementById("special").style.float='right';
			}
		}
	};
	this.useSpecial= function(card){
		(new BN6GunSol1()).useSpecial(card);
	};
	this.hithuh= function(attacker, defender){
		return (new BN6GunSol1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new BN6GunSol1()).effecthit(attacker, defender);
		(new BN6GunSol3()).showSpecial(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new BN6GunSol3()).showSpecial(attacker, defender);
	};
}

function BN6Yoyo(){
	this.id="BN6Yoyo";
	this.name="Yoyo";
	this.image=BN6YoyoIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=32;
	this.rank="standard";
	this.damage=50;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
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
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6HellBurner1(){
	this.id="BN6HellBurner1";
	this.name="HellBurner1";
	this.image=BN6HellBurner1IMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=8;
	this.rank="standard";
	this.damage=70;
	this.boostDamage=0;
	this.hits=1;
	this.priority=1;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			if((new LONGSWORD()).hithuh(attacker, defender)){
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
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6HellBurner2(){
	this.id="BN6HellBurner2";
	this.name="HellBurner2";
	this.image=BN6HellBurner2IMG;
	this.code=["S", "T", "U"];
	this.mb=21;
	this.rank="standard";
	this.damage=110;
	this.boostDamage=0;
	this.hits=1;
	this.priority=1;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new BN6HellBurner1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6HellBurner3(){
	this.id="BN6HellBurner3";
	this.name="HellBurner3";
	this.image=BN6HellBurner3IMG;
	this.code=["C", "D", "E"];
	this.mb=34;
	this.rank="standard";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=1;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new BN6HellBurner1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6WideShot(){
	this.id="BN6WideShot";
	this.name="WideShot";
	this.image=BN6WideShotIMG;
	this.code=["P", "Q", "R"];
	this.mb=34;
	this.rank="standard";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
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
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6TrainArrow1(){
	this.id="BN6TrainArrow1";
	this.name="TrainArrow1";
	this.image=BN6TrainArrow1IMG;
	this.code=["A", "F", "K"];
	this.mb=30;
	this.rank="standard";
	this.damage=30;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
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
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6TrainArrow2(){
	this.id="BN6TrainArrow2";
	this.name="TrainArrow2";
	this.image=BN6TrainArrow2IMG;
	this.code=["G", "M", "Z"];
	this.mb=36;
	this.rank="standard";
	this.damage=40;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		this.BN6TrainArrow1 = new BN6TrainArrow1();
		var hitbool = this.BN6TrainArrow1.hithuh(attacker, defender);
		this.hits = this.BN6TrainArrow1.hits;
		return hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6TrainArrow3(){
	this.id="BN6TrainArrow3";
	this.name="TrainArrow3";
	this.image=BN6TrainArrow3IMG;
	this.code=["M", "S", "Y"];
	this.mb=42;
	this.rank="standard";
	this.damage=50;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		this.BN6TrainArrow1 = new BN6TrainArrow1();
		var hitbool = this.BN6TrainArrow1.hithuh(attacker, defender);
		this.hits = this.BN6TrainArrow1.hits;
		return hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6BubbleStar1(){
	this.id="BN6BubbleStar1";
	this.name="BubbleStar1";
	this.image=BN6BubbleStar1IMG;
	this.code=["B", "E", "T"];
	this.mb=30;
	this.rank="standard";
	this.damage=60;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
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
	};
	this.effecthit= function(attacker, defender){
		if(defender.guard === null){
			defender.bubbled = 2;
		}
	};
	this.effectmiss= function(attacker, defender){};
}

function BN6BubbleStar2(){
	this.id="BN6BubbleStar2";
	this.name="BubbleStar2";
	this.image=BN6BubbleStar2IMG;
	this.code=["B", "E", "T"];
	this.mb=38;
	this.rank="standard";
	this.damage=80;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new BN6BubbleStar1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		return (new BN6BubbleStar1()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){};
}

function BN6BubbleStar3(){
	this.id="BN6BubbleStar3";
	this.name="BubbleStar3";
	this.image=BN6BubbleStar3IMG;
	this.code=["B", "E", "T"];
	this.mb=46;
	this.rank="standard";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new BN6BubbleStar1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		return (new BN6BubbleStar1()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){};
}

function BN6Thunder(){
	this.id="BN6Thunder";
	this.name="Thunder";
	this.image=BN6ThunderIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=7;
	this.rank="standard";
	this.damage=40;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			if(attacker.name === "one"){
				return attacker.x+1 === defender.x && attacker.y === defender.y;
			}
			else{
				return attacker.x-1 === defender.x && attacker.y === defender.y;
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){
		if(defender.guard === null){
			defender.stunned = 2;
		}
	};
	this.effectmiss= function(attacker, defender){
		if(attacker.name === "one"){
			if(!board.cellHasSolidObject(attacker.x+1, attacker.y) && cells[attacker.x+1][attacker.y].player === null){
				cells[attacker.x+1][attacker.y].object.push(new BN6ThunderBall(attacker.x+1, attacker.y, attacker, defender, 8));
			}
		}
		else{
			if(!board.cellHasSolidObject(attacker.x-1, attacker.y) && cells[attacker.x-1][attacker.y].player === null){
				cells[attacker.x-1][attacker.y].object.push(new BN6ThunderBall(attacker.x-1, attacker.y, attacker, defender, 8));
			}
		}
	};
}

function BN6DollThunder1(){
	this.id="BN6DollThunder1";
	this.name="DollThunder1";
	this.image=BN6DollThunder1IMG;
	this.code=["A", "E", "Q"];
	this.mb=24;
	this.rank="standard";
	this.damage=120;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			if(attacker.name === "one"){
				return defender.y === attacker.y && defender.x > attacker.x;
			}
			else{
				return defender.y === attacker.y && defender.x < attacker.x;
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6DollThunder2(){
	this.id="BN6DollThunder2";
	this.name="DollThunder2";
	this.image=BN6DollThunder2IMG;
	this.code=["C", "L", "P"];
	this.mb=31;
	this.rank="standard";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new BN6DollThunder1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6DollThunder3(){
	this.id="BN6DollThunder3";
	this.name="DollThunder3";
	this.image=BN6DollThunder3IMG;
	this.code=["B", "R", "V"];
	this.mb=38;
	this.rank="standard";
	this.damage=180;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new BN6DollThunder1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6ElecPulse1(){
	this.id="BN6ElecPulse1";
	this.name="ElecPulse1";
	this.image=BN6ElecPulse1IMG;
	this.code=["J", "L", "S"];
	this.mb=32;
	this.rank="standard";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
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
	};
	this.effecthit= function(attacker, defender){
		if(defender.guard === null){
			defender.invis = 0;
			defender.stunned = 1;
		}
	};
	this.effectmiss= function(attacker, defender){};
}


function BN6ElecPulse2(){
	this.id="BN6ElecPulse2";
	this.name="ElecPulse2";
	this.image=BN6ElecPulse2IMG;
	this.code=["A", "E", "J"];
	this.mb=36;
	this.rank="standard";
	this.damage=120;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new BN6ElecPulse1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		if(defender.guard === null){
			defender.invis = 0;
			if(attacker === "one"){
				if(board.isCellThisPlayerValid(defender.x-1, defender.y, defender)){
					cells[defender.x][defender.y].player = null;
					defender.x = defender.x-1;
					cells[defender.x][defender.y].player = defender;
				}
			}
			else{
				if(board.isCellThisPlayerValid(defender.x+1, defender.y, defender)){
					cells[defender.x][defender.y].player = null;
					defender.x = defender.x+1;
					cells[defender.x][defender.y].player = defender;
				}
			}
		}
	};
	this.effectmiss= function(attacker, defender){};
}

function BN6ElecPulse3(){
	this.id="BN6ElecPulse3";
	this.name="ElecPulse3";
	this.image=BN6ElecPulse3IMG;
	this.code=["A", "J", "S"];
	this.mb=40;
	this.rank="standard";
	this.damage=140;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new BN6ElecPulse1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		if(defender.guard === null){
			defender.invis = 0;
			defender.bugs = defender.bugs.concat([new HPBug(10)]);
		}
	};
	this.effectmiss= function(attacker, defender){};
}

function BN6CornShot1(){
	this.id="BN6CornShot1";
	this.name="CornShot1";
	this.image=BN6CornShot1IMG;
	this.code=["J", "K", "L"];
	this.mb=14;
	this.rank="standard";
	this.damage=50;
	this.boostDamage=0;
	this.hits=1;
	this.priority=3;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
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
		return false;
	};
	this.effecthit= function(attacker, defender){
		(new BN6CornShot1()).effectmiss(attacker, defender);
		board.convertPanel(defender.x, defender.y, PANELTYPE.GRASS);
	};
	this.effectmiss= function(attacker, defender){
		if(attacker.name === "one"){
			board.convertPanel(attacker.x+2, attacker.y, PANELTYPE.GRASS);
		}
		else{
			board.convertPanel(attacker.x-2, attacker.y, PANELTYPE.GRASS);
		}
	};
}

function BN6CornShot2(){
	this.id="BN6CornShot2";
	this.name="CornShot2";
	this.image=BN6CornShot2IMG;
	this.code=["C", "D", "E"];
	this.mb=26;
	this.rank="standard";
	this.damage=60;
	this.boostDamage=0;
	this.hits=1;
	this.priority=3;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		this.BN6CornShot1 = (new BN6CornShot1());
		var hitbool = this.BN6CornShot1.hithuh(attacker, defender);
		this.hits = this.BN6CornShot1.hits;
		return hitbool;
	};
	this.effecthit= function(attacker, defender){
		(new BN6CornShot1()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new BN6CornShot1()).effectmiss(attacker, defender);
	};
}

function BN6CornShot3(){
	this.id="BN6CornShot3";
	this.name="CornShot3";
	this.image=BN6CornShot3IMG;
	this.code=["C", "D", "E"];
	this.mb=38;
	this.rank="standard";
	this.damage=70;
	this.boostDamage=0;
	this.hits=1;
	this.priority=3;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		this.BN6CornShot1 = (new BN6CornShot1());
		var hitbool = this.BN6CornShot1.hithuh(attacker, defender);
		this.hits = this.BN6CornShot1.hits;
		return hitbool;
	};
	this.effecthit= function(attacker, defender){
		(new BN6CornShot1()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new BN6CornShot1()).effectmiss(attacker, defender);
	};
}

function BN6RiskyHoney1(){
	this.id="BN6RiskyHoney1";
	this.name="RiskyHoney1";
	this.image=BN6RiskyHoney1IMG;
	this.code=["B", "G", "S"];
	this.mb=21;
	this.rank="standard";
	this.damage=10;
	this.boostDamage=0;
	this.hits=5;
	this.priority=1;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		return (new SWORD()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		attacker.guard = new HoneyGuard(this.damage + this.boostDamage);
	};
	this.effectmiss= function(attacker, defender){
		(new BN6RiskyHoney1()).effecthit(attacker, defender);
		if(attacker.name === "one"){
			if(!board.cellHasSolidObject(attacker.x+1, attacker.y)){
				cells[attacker.x+1][attacker.y].object.push(new BN6HoneyBall(attacker.x+1, attacker.y, attacker, defender, this.damage + this.boostDamage));
			}
		}
		else{	
			if(!board.cellHasSolidObject(attacker.x-1, attacker.y)){
				cells[attacker.x-1][attacker.y].object.push(new BN6HoneyBall(attacker.x-1, attacker.y, attacker, defender, this.damage + this.boostDamage));
			}
		}
	};
}

function BN6RiskyHoney2(){
	this.id="BN6RiskyHoney2";
	this.name="RiskyHoney2";
	this.image=BN6RiskyHoney2IMG;
	this.code=["C", "R", "V"];
	this.mb=28;
	this.rank="standard";
	this.damage=15;
	this.boostDamage=0;
	this.hits=5;
	this.priority=1;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		return (new BN6RiskyHoney1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		attacker.guard = new HoneyGuard(this.damage + this.boostDamage);
	};
	this.effectmiss= function(attacker, defender){
		(new BN6RiskyHoney2()).effecthit(attacker, defender);
		if(attacker.name === "one"){
			if(!board.cellHasSolidObject(attacker.x+1, attacker.y)){
				cells[attacker.x+1][attacker.y].object.push(new BN6HoneyBall(attacker.x+1, attacker.y, attacker, defender, this.damage + this.boostDamage));
			}
		}
		else{	
			if(!board.cellHasSolidObject(attacker.x-1, attacker.y)){
				cells[attacker.x-1][attacker.y].object.push(new BN6HoneyBall(attacker.x-1, attacker.y, attacker, defender, this.damage + this.boostDamage));
			}
		}
	};
}

function BN6RiskyHoney3(){
	this.id="BN6RiskyHoney3";
	this.name="RiskyHoney3";
	this.image=BN6RiskyHoney3IMG;
	this.code=["A", "D", "M"];
	this.mb=35;
	this.rank="standard";
	this.damage=20;
	this.boostDamage=0;
	this.hits=5;
	this.priority=1;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		return (new BN6RiskyHoney1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		attacker.guard = new HoneyGuard(this.damage + this.boostDamage);
	};
	this.effectmiss= function(attacker, defender){
		(new BN6RiskyHoney3()).effecthit(attacker, defender);
		if(attacker.name === "one"){
			if(!board.cellHasSolidObject(attacker.x+1, attacker.y)){
				cells[attacker.x+1][attacker.y].object.push(new BN6HoneyBall(attacker.x+1, attacker.y, attacker, defender, this.damage + this.boostDamage));
			}
		}
		else{	
			if(!board.cellHasSolidObject(attacker.x-1, attacker.y)){
				cells[attacker.x-1][attacker.y].object.push(new BN6HoneyBall(attacker.x-1, attacker.y, attacker, defender, this.damage + this.boostDamage));
			}
		}
	};
}

function BN6RollingLog1(){
	this.id="BN6RollingLog1";
	this.name="RollingLog1";
	this.image=BN6RollingLog1IMG;
	this.code=["I", "K", "P"];
	this.mb=14;
	this.rank="standard";
	this.damage=50;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		this.hits = 1;
		if(defender.invis < 1){
			if(attacker.y === 0){
				if((new BN6RollingLog1()).oneloghit(attacker, defender, 0, 1)){
					this.hits = 2;
					return true;
				}
			}
			else if(attacker.y === 2){
				if((new BN6RollingLog1()).oneloghit(attacker, defender, 1, 2)){
					this.hits = 2;
					return true;
				}
			}
			else{
				if((new BN6RollingLog1()).oneloghit(attacker, defender, 0, 1) && (new BN6RollingLog1()).oneloghit(attacker, defender, 1, 2)){
					this.hits = 2;
					return true;
				}
				else if((new BN6RollingLog1()).oneloghit(attacker, defender, 0, 1)){
					this.hits = 1;
					return true;
				}
				else if((new BN6RollingLog1()).oneloghit(attacker, defender, 1, 2)){
					this.hits = 1;
					return true;
				}
			}
		}
		return false;
	};
	this.oneloghit= function(attacker, defender, top, bottom){
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
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6RollingLog2(){
	this.id="BN6RollingLog2";
	this.name="RollingLog2";
	this.image=BN6RollingLog2IMG;
	this.code=["E", "Q", "Z"];
	this.mb=26;
	this.rank="standard";
	this.damage=70;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		this.BN6RollingLog1 = (new BN6RollingLog1());
		var hitbool = this.BN6RollingLog1.hithuh(attacker, defender);
		this.hits = this.BN6RollingLog1.hits;
		return hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6RollingLog3(){
	this.id="BN6RollingLog3";
	this.name="RollingLog3";
	this.image=BN6RollingLog3IMG;
	this.code=["F", "N", "W"];
	this.mb=38;
	this.rank="standard";
	this.damage=90;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		this.BN6RollingLog1 = (new BN6RollingLog1());
		var hitbool = this.BN6RollingLog1.hithuh(attacker, defender);
		this.hits = this.BN6RollingLog1.hits;
		return hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6IronShell1(){
	this.id="BN6IronShell1";
	this.name="IronShell1";
	this.image=BN6IronShell1IMG;
	this.code=["J", "K", "L"];
	this.mb=13;
	this.rank="standard";
	this.damage=70;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
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
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6IronShell2(){
	this.id="BN6IronShell2";
	this.name="IronShell2";
	this.image=BN6IronShell2IMG;
	this.code=["C", "D", "E"];
	this.mb=20;
	this.rank="standard";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.BN6IronShell1 = new BN6IronShell1();
		var hitbool = this.BN6IronShell1.hithuh(attacker, defender);
		this.hits = this.BN6IronShell1.hits;
		return hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6IronShell3(){
	this.id="BN6IronShell3";
	this.name="IronShell3";
	this.image=BN6IronShell3IMG;
	this.code=["L", "M", "N"];
	this.mb=27;
	this.rank="standard";
	this.damage=130;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.BN6IronShell1 = new BN6IronShell1();
		var hitbool = this.BN6IronShell1.hithuh(attacker, defender);
		this.hits = this.BN6IronShell1.hits;
		return hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6AuraHead1(){
	this.id="BN6AuraHead1";
	this.name="AuraHead1";
	this.image=BN6AuraHead1IMG;
	this.code=["B", "C", "D"];
	this.mb=25;
	this.rank="standard";
	this.damage=130;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.addDamage = null;
		if(attacker.barrier){
			this.addDamage = 50;
		}
		return (new BN6AuraHead1()).hitbool(attacker, defender);
	};
	this.hitbool= function(attacker, defender){
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
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6AuraHead2(){
	this.id="BN6AuraHead2";
	this.name="AuraHead2";
	this.image=BN6AuraHead2IMG;
	this.code=["D", "E", "F"];
	this.mb=33;
	this.rank="standard";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.addDamage = null;
		if(attacker.barrier){
			this.addDamage = 50;
		}
		return (new BN6AuraHead1()).hitbool(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6AuraHead3(){
	this.id="BN6AuraHead3";
	this.name="AuraHead3";
	this.image=BN6AuraHead3IMG;
	this.code=["F", "G", "H"];
	this.mb=39;
	this.rank="standard";
	this.damage=170;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.addDamage = null;
		if(attacker.barrier){
			this.addDamage = 50;
		}
		return (new BN6AuraHead1()).hitbool(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6AirHock(){
	this.id="BN6AirHock";
	this.name="AirHock";
	this.image=BN6AirHockIMG;
	this.code=["Q", "R", "S"];
	this.mb=40;
	this.rank="standard";
	this.damage=60;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
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
					return this.hitbool;
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
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6DrillArm(){
	this.id="BN6DrillArm";
	this.name="DrillArm";
	this.image=BN6DrillArmIMG;
	this.code=["G", "M", "W"];
	this.mb=32;
	this.rank="standard";
	this.damage=70;
	this.boostDamage=0;
	this.hits=1;
	this.priority=1;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
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
	};
	this.effecthit= function(attacker, defender){
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
	};
	this.effectmiss= function(attacker, defender){};
}

function BN6Tornado(){
	this.id="BN6Tornado";
	this.name="Tornado";
	this.image=BN6TornadoIMG;
	this.code=["L", "R", "T"];
	this.mb=16;
	this.rank="standard";
	this.damage=20;
	this.boostDamage=0;
	this.hits=8;
	this.priority=2;
	this.elements=[ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1 && defender.y == attacker.y){
			this.xDirection = -2;
			if(attacker.name == "one"){
				this.xDirection = 2;
			}
			return attacker.x + this.xDirection === defender.x;
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6NoiseStorm(){
	this.id="BN6NoiseStorm";
	this.name="NoiseStorm";
	this.image=BN6NoiseStormIMG;
	this.code=["G", "S", "V"];
	this.mb=30;
	this.rank="standard";
	this.damage=20;
	this.boostDamage=0;
	this.hits=8;
	this.priority=2;
	this.elements=[ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
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
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6MachineGun1(){
	this.id="BN6MachineGun1";
	this.name="MachineGun1";
	this.image=BN6MachineGun1IMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=12;
	this.rank="standard";
	this.damage=30;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.target];
	this.hithuh= function(attacker, defender){
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
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6MachineGun2(){
	this.id="BN6MachineGun2";
	this.name="MachineGun2";
	this.image=BN6MachineGun2IMG;
	this.code=["E", "G", "S"];
	this.mb=24;
	this.rank="standard";
	this.damage=50;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.target];
	this.hithuh= function(attacker, defender){
		this.BN6MachineGun1 = new BN6MachineGun1();
		this.hitbool = this.BN6MachineGun1.hithuh(attacker, defender);
		this.hits = this.BN6MachineGun1.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6MachineGun3(){
	this.id="BN6MachineGun3";
	this.name="MachineGun3";
	this.image=BN6MachineGun3IMG;
	this.code=["B", "F", "M"];
	this.mb=36;
	this.rank="standard";
	this.damage=70;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.target];
	this.hithuh= function(attacker, defender){
		this.BN6MachineGun1 = new BN6MachineGun1();
		this.hitbool = this.BN6MachineGun1.hithuh(attacker, defender);
		this.hits = this.BN6MachineGun1.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6MiniBomb(){
	this.id="BN6MiniBomb";
	this.name="MiniBomb";
	this.image=BN6MiniBombIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=6;
	this.rank="standard";
	this.damage=50;
	this.boostDamage=0;
	this.hits=1;
	this.priority=3;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			this.xDirection = -3;
			if(attacker.name == "one"){
				this.xDirection = 3;
			}
			return attacker.x + this.xDirection === defender.x && attacker.y === defender.y;
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6BigBomb(){
	this.id="BN6BigBomb";
	this.name="BigBomb";
	this.image=BN6BigBombIMG;
	this.code=["O", "P", "V"];
	this.mb=32;
	this.rank="standard";
	this.damage=140;
	this.boostDamage=0;
	this.hits=1;
	this.priority=3;
	this.elements=[];
	this.hithuh= function(attacker, defender){
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
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6EnergyBomb(){
	this.id="BN6EnergyBomb";
	this.name="EnergyBomb";
	this.image=BN6EnergyBombIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=11;
	this.rank="standard";
	this.damage=40;
	this.boostDamage=0;
	this.hits=3;
	this.priority=3;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6MiniBomb()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6MegEnBomb(){
	this.id="BN6MegEnBomb";
	this.name="MegEnBomb";
	this.image=BN6MegEnBombIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=27;
	this.rank="standard";
	this.damage=60;
	this.boostDamage=0;
	this.hits=3;
	this.priority=3;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6MiniBomb()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6FlashBomb1(){
	this.id="BN6FlashBomb1";
	this.name="FlashBomb1";
	this.image=BN6FlashBomb1IMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=30;
	this.rank="standard";
	this.damage=40;
	this.boostDamage=0;
	this.hits=1;
	this.priority=3;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6MiniBomb()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -3;
		if(attacker.name == "one"){
			this.xDirection = 3;
		}
		if(board.isCellPlayerValid(attacker.x + this.xDirection, attacker.y)){
			cells[attacker.x+this.xDirection][attacker.y].object.push(new BN6FlashBomb(attacker.x+this.xDirection, attacker.y, attacker, defender, this.damage + this.boostDamage));
		}
	};
}

function BN6FlashBomb2(){
	this.id="BN6FlashBomb2";
	this.name="FlashBomb2";
	this.image=BN6FlashBomb2IMG;
	this.code=["G", "K", "R"];
	this.mb=34;
	this.rank="standard";
	this.damage=70;
	this.boostDamage=0;
	this.hits=1;
	this.priority=3;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6FlashBomb1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -3;
		if(attacker.name == "one"){
			this.xDirection = 3;
		}
		if(board.isCellPlayerValid(attacker.x + this.xDirection, attacker.y)){
			cells[attacker.x+this.xDirection][attacker.y].object.push(new BN6FlashBomb(attacker.x+this.xDirection, attacker.y, attacker, defender, this.damage + this.boostDamage));
		}
	};
}

function BN6FlashBomb3(){
	this.id="BN6FlashBomb3";
	this.name="FlashBomb3";
	this.image=BN6FlashBomb3IMG;
	this.code=["H", "P", "S"];
	this.mb=38;
	this.rank="standard";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=3;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6FlashBomb1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -3;
		if(attacker.name == "one"){
			this.xDirection = 3;
		}
		if(board.isCellPlayerValid(attacker.x + this.xDirection, attacker.y)){
			cells[attacker.x+this.xDirection][attacker.y].object.push(new BN6FlashBomb(attacker.x+this.xDirection, attacker.y, attacker, defender, this.damage + this.boostDamage));
		}
	};
}

function BN6BlackBomb(){
	this.id="BN6BlackBomb";
	this.name="BlackBomb";
	this.image=BN6BlackBombIMG;
	this.code=["B", "F", "O"];
	this.mb=32;
	this.rank="standard";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=3;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new BN6MiniBomb()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -3;
		if(attacker.name == "one"){
			this.xDirection = 3;
		}
		if(board.isCellPlayerValid(attacker.x + this.xDirection, attacker.y)){
			cells[attacker.x+this.xDirection][attacker.y].object.push(new BN6BlackBombObj(attacker.x+this.xDirection, attacker.y));
		}
	};
}

function BN6BugBomb(){
	this.id="BN6BugBomb";
	this.name="BugBomb";
	this.image=BN6BugBombIMG;
	this.code=["G", "S", "V"];
	this.mb=24;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=3;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6BigBomb()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		defender.bugs.push(new HPBug(10), new BusterBug(), new PathBug());
	};
	this.effectmiss= function(attacker, defender){};
}

function BN6GrassSeed(){
	this.id="BN6GrassSeed";
	this.name="GrassSeed";
	this.image=BN6GrassSeedIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=19;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=3;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		return (new BN6MiniBomb()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		board.convertPanel(defender.x, defender.y, PANELTYPE.GRASS);
	};
	this.effectmiss= function(attacker, defender){
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
	};
}

function BN6IceSeed(){
	this.id="BN6IceSeed";
	this.name="IceSeed";
	this.image=BN6IceSeedIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=31;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=3;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new BN6MiniBomb()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		board.convertPanel(defender.x, defender.y, PANELTYPE.ICE);
	};
	this.effectmiss= function(attacker, defender){
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
	};
}

function BN6PoisonSeed(){
	this.id="BN6PoisonSeed";
	this.name="PoisonSeed";
	this.image=BN6PoisonSeedIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=37;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=3;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6MiniBomb()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		board.convertPanel(defender.x, defender.y, PANELTYPE.POISON);
	};
	this.effectmiss= function(attacker, defender){
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
	};
}

function BN6Sword(){
	this.id="BN6Sword";
	this.name="Sword";
	this.image=BN6SwordIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=8;
	this.rank="standard";
	this.damage=80;
	this.boostDamage=0;
	this.hits=1;
	this.priority=1;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new SWORD()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6WideSword(){
	this.id="BN6WideSword";
	this.name="WideSword";
	this.image=BN6WideSwordIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=12;
	this.rank="standard";
	this.damage=80;
	this.boostDamage=0;
	this.hits=1;
	this.priority=1;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new WIDESWORD()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6LongSword(){
	this.id="BN6LongSword";
	this.name="LongSword";
	this.image=BN6LongSwordIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=25;
	this.rank="standard";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=1;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new LONGSWORD()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6WideBlade(){
	this.id="BN6WideBlade";
	this.name="WideBlade";
	this.image=BN6WideBladeIMG;
	this.code=["B", "R", "W"];
	this.mb=38;
	this.rank="standard";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=1;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new BN6WideSword()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6LongBlade(){
	this.id="BN6LongBlade";
	this.name="LongBlade";
	this.image=BN6LongBladeIMG;
	this.code=["B", "M", "V"];
	this.mb=38;
	this.rank="standard";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=1;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new BN6LongSword()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6FireSword(){
	this.id="BN6FireSword";
	this.name="FireSword";
	this.image=BN6FireSwordIMG;
	this.code=["F", "O", "Z"];
	this.mb=30;
	this.rank="standard";
	this.damage=140;
	this.boostDamage=0;
	this.hits=1;
	this.priority=1;
	this.elements=[ELEMENTS.sword, ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new BN6WideSword()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6AquaSword(){
	this.id="BN6AquaSword";
	this.name="AquaSword";
	this.image=BN6AquaSwordIMG;
	this.code=["A", "I", "Y"];
	this.mb=32;
	this.rank="standard";
	this.damage=160;
	this.boostDamage=0;
	this.hits=1;
	this.priority=1;
	this.elements=[ELEMENTS.sword, ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new BN6WideSword()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6ElecSword(){
	this.id="BN6ElecSword";
	this.name="ElecSword";
	this.image=BN6ElecSwordIMG;
	this.code=["B", "R", "W"];
	this.mb=35;
	this.rank="standard";
	this.damage=120;
	this.boostDamage=0;
	this.hits=1;
	this.priority=1;
	this.elements=[ELEMENTS.sword, ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new BN6WideSword()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		if(defender.guard < 1){
			defender.stunned = 1;
		}
	};
	this.effectmiss= function(attacker, defender){};
}

function BN6WoodSword(){
	this.id="BN6WoodSword";
	this.name="WoodSword";
	this.image=BN6WoodSwordIMG;
	this.code=["H", "S", "W"];
	this.mb=34;
	this.rank="standard";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=1;
	this.elements=[ELEMENTS.sword, ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		return (new BN6WideSword()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6WindRacket(){
	this.id="BN6WindRacket";
	this.name="WindRacket";
	this.image=BN6WindRacketIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=19;
	this.rank="standard";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=1;
	this.elements=[ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		return (new BN6WideSword()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		defender.barrier = null;
		this.xDirection = 1;
		if(attacker.name === "two"){
			this.xDirection = -1;
		}
		if(defender.guard === null){
			for(var i = 0; i < 4; i++){
				this.xTile = defender.x + this.xDirection;
				this.yTile = defender.y;
				if(board.isCellThisPlayerValid(this.xTile, this.yTile, defender)){
					cells[defender.x][defender.y].player = null;
					cells[this.xTile][this.yTile].player = defender;
					defender.x = this.xTile;
				}
				else{
					break;
				}
			}
		}
	};
	this.effectmiss= function(attacker, defender){
		(new BN6WindRacket()).effecthit(attacker, defender);
	};
}

function BN6Fumikomizan(){
	this.id="BN6Fumikomizan";
	this.name="Fumikomizan";
	this.image=BN6FumikomizanIMG;
	this.code=["B", "L", "P"];
	this.mb=28;
	this.rank="standard";
	this.damage=160;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		if(cells[attacker.x+2] && !board.cellHasSolidObject(attacker.x+2, attacker.y) && defender.invis < 1){
			attacker.x = attacker.x + 2;
			this.hitbool = (new BN6WideSword()).hithuh(attacker, defender);
			attacker.x = attacker.x -2;
			return this.hitbool;
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6VarSword(){
	this.id="BN6VarSword";
	this.name="VarSword";
	this.image=BN6VarSwordIMG;
	this.code=["K", "V", "W"];
	this.mb=28;
	this.rank="standard";
	this.damage=80;
	this.boostDamage=0;
	this.hits=1;
	this.priority=1;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			if((new BN6WideSword()).hithuh(attacker, defender)){
				return true;
			}
			this.xDirection = -1;
			if(attacker.name === "one"){
				this.xDirection = 1;
			}
			attacker.x = attacker.x + this.xDirection;
			this.hitbool = (new BN6WideSword()).hithuh(attacker, defender);
			attacker.x = attacker.x - this.xDirection;
			return this.hitbool;
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6NeoVarSword(){
	this.id="BN6NeoVarSword";
	this.name="NeoVarSword";
	this.image=BN6NeoVarSwordIMG;
	this.code=["N"];
	this.mb=52;
	this.rank="standard";
	this.damage=110;
	this.boostDamage=0;
	this.hits=2;
	this.priority=1;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new BN6VarSword()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6Kunai(){
	this.id="BN6Kunai";
	this.name="Kunai";
	this.image=BN6KunaiIMG;
	this.code=["A", "M", "T"];
	this.mb=25;
	this.rank="standard";
	this.damage=120;
	this.boostDamage=0;
	this.hits=1;
	this.priority=1;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			return cards.around(attacker.x, attacker.y, defender);
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6Muramasa(){
	this.id="BN6Muramasa";
	this.name="Muramasa";
	this.image=BN6MuramasaIMG;
	this.code=["M"];
	this.mb=77;
	this.rank="standard";
	this.damage=1;
	this.boostDamage=0;
	this.hits=1;
	this.priority=1;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		this.damage = playerHP - attacker.hp;
		if(this.damage < 1){
			this.damage = 1;
		}
		return (new BN6LongSword()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6MachineSword(){
	this.id="BN6MachineSword";
	this.name="MachineSword";
	this.image=BN6MachineSwordIMG;
	this.code=["H", "L", "Q"];
	this.mb=37;
	this.rank="standard";
	this.damage=200;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
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
				return (new BN6MachineSword()).wideSwordJump(attacker, defender, this.x, this.y);
			}
			this.y = this.y-1;
			if(board.isCellPlayerValid(this.x, this.y)){
				return (new BN6MachineSword()).wideSwordJump(attacker, defender, this.x, this.y);
			}
			this.y = this.y+2;
			if(board.isCellPlayerValid(this.x, this.y)){
				return (new BN6MachineSword()).wideSwordJump(attacker, defender, this.x, this.y);
			}
		}
		return false;
	};
	this.wideSwordJump= function(attacker, defender, x, y){
		this.tempX = attacker.x;
		this.tempY = attacker.y;
		attacker.x = x;
		attacker.y = y;
		this.hitbool = (new BN6WideSword()).hithuh(attacker, defender);
		attacker.x = this.tempX;
		attacker.y = this.tempY;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6ElementSword(){
	this.id="BN6ElementSword";
	this.name="ElementSword";
	this.image=BN6ElementSwordIMG;
	this.code=["J", "M", "U"];
	this.mb=43;
	this.rank="standard";
	this.damage=220;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
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
				return (new BN6MachineSword()).wideSwordJump(attacker, defender, this.x, this.y);
			}
			this.y = this.y-1;
			if(board.isCellPlayerValid(this.x, this.y)){
				return (new BN6MachineSword()).wideSwordJump(attacker, defender, this.x, this.y);
			}
			this.y = this.y+2;
			if(board.isCellPlayerValid(this.x, this.y)){
				return (new BN6MachineSword()).wideSwordJump(attacker, defender, this.x, this.y);
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6AssassinSword(){
	this.id="BN6AssassinSword";
	this.name="AssassinSword";
	this.image=BN6AssassinSwordIMG;
	this.code=["N", "R", "Y"];
	this.mb=50;
	this.rank="standard";
	this.damage=240;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new BN6MachineSword()).hithuh(attacker, defender) || (new BN6ElementSword()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6CrackShoot(){
	this.id="BN6CrackShoot";
	this.name="CrackShoot";
	this.image=BN6CrackShootIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=4;
	this.rank="standard";
	this.damage=60;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === "one"){
			this.xDirection = 1;
		}
		if(board.isCellPlayerValid(attacker.x+this.xDirection, attacker.y)){
			return (new BN6Cannon()).hithuh(attacker, defender);
		}
		return false;
	};
	this.effecthit= function(attacker, defender){
		(new BN6CrackShoot()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === "one"){
			this.xDirection = 1;
		}
		if(board.isCellPlayerValid(attacker.x+this.xDirection, attacker.y)){
			board.convertPanel(attacker.x+this.xDirection, attacker.y, PANELTYPE.BROKEN);
		}
	};
}

function BN6DoubleShoot(){
	this.id="BN6DoubleShoot";
	this.name="DoubleShoot";
	this.image=BN6DoubleShootIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=8;
	this.rank="standard";
	this.damage=60;
	this.boostDamage=0;
	this.hits=2;
	this.priority=2;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === "one"){
			this.xDirection = 1;
		}
		attacker.x + this.xDirection;
		this.farhitbool = (new BN6CrackShoot()).hithuh(attacker, defender);
		attacker.x - this.xDirection;
		this.closehitbool = (new BN6CrackShoot()).hithuh(attacker, defender);
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
	};
	this.effecthit= function(attacker, defender){
		(new BN6DoubleShoot()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === "one"){
			this.xDirection = 1;
		}
		attacker.x + this.xDirection;
		(new BN6CrackShoot()).effectmiss(attacker, defender);
		attacker.x - this.xDirection;
		(new BN6CrackShoot()).effectmiss(attacker, defender);
	};
}

function BN6TripleShoot(){
	this.id="BN6TripleShoot";
	this.name="TripleShoot";
	this.image=BN6TripleShootIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=12;
	this.rank="standard";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		attacker.y++;
		this.bothitbool = (new BN6CrackShoot()).hithuh(attacker, defender);
		attacker.y = attacker.y - 2;
		this.tophitbool = (new BN6CrackShoot()).hithuh(attacker, defender);
		attacker.y++;
		this.midhitbool = (new BN6CrackShoot()).hithuh(attacker, defender);
		return this.bothitbool || this.tophitbool || this.midhitbool;
	};
	this.effecthit= function(attacker, defender){
		(new BN6TripleShoot()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		attacker.y++;
		(new BN6CrackShoot()).effectmiss(attacker, defender);
		attacker.y = attacker.y - 2;
		(new BN6CrackShoot()).effectmiss(attacker, defender);
		attacker.y++;
		(new BN6CrackShoot()).effectmiss(attacker, defender);
	};
}

function BN6ReflectMet1(){
	this.id="BN6ReflectMet1";
	this.name="ReflectMet1";
	this.image=BN6ReflectMet1IMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.damage=60;
	this.boostDamage=0;
	this.hits=1;
	this.mb=7;
	this.rank="standard";
	this.priority=1;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return attacker.x === defender.x && attacker.y === defender.y;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		attacker.guard = new ReflectMet(this.damage + this.boostDamage);
	};
}

function BN6ReflectMet2(){
	this.id="BN6ReflectMet2";
	this.name="ReflectMet2";
	this.image=BN6ReflectMet2IMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.damage=120;
	this.boostDamage=0;
	this.hits=1;
	this.mb=16;
	this.rank="standard";
	this.priority=1;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6ReflectMet1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		attacker.guard = new ReflectMet(this.damage + this.boostDamage);
	};
}

function BN6ReflectMet3(){
	this.id="BN6ReflectMet3";
	this.name="ReflectMet3";
	this.image=BN6ReflectMet3IMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.damage=200;
	this.boostDamage=0;
	this.hits=1;
	this.mb=25;
	this.rank="standard";
	this.priority=1;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6ReflectMet1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		attacker.guard = new ReflectMet(this.damage + this.boostDamage);
	};
}

function BN6WaveArm1(){
	this.id="BN6WaveArm1";
	this.name="WaveArm1";
	this.image=BN6WaveArm1IMG;
	this.code=["E", "F", "G"];
	this.damage=80;
	this.boostDamage=0;
	this.hits=1;
	this.mb=15;
	this.rank="standard";
	this.priority=2;
	this.elements=[];
	this.hithuh= function(attacker, defender){
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
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6WaveArm2(){
	this.id="BN6WaveArm2";
	this.name="WaveArm2";
	this.image=BN6WaveArm2IMG;
	this.code=["L", "M", "N"];
	this.damage=120;
	this.boostDamage=0;
	this.hits=1;
	this.mb=22;
	this.rank="standard";
	this.priority=2;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6WaveArm1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6WaveArm3(){
	this.id="BN6WaveArm3";
	this.name="WaveArm3";
	this.image=BN6WaveArm3IMG;
	this.code=["R", "S", "T"];
	this.damage=160;
	this.boostDamage=0;
	this.hits=1;
	this.mb=29;
	this.rank="standard";
	this.priority=2;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6WaveArm1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6SandWorm1(){
	this.id="BN6SandWorm1";
	this.name="SandWorm1";
	this.image=BN6SandWorm1IMG;
	this.code=["A", "G", "L"];
	this.damage=130;
	this.boostDamage=0;
	this.hits=1;
	this.mb=30;
	this.rank="standard";
	this.priority=2;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		this.hitbool = false;
		if(defender.invis < 1){
			if(attacker.name === "one"){
				this.target = playerTwo;
				if(this.target.x < 5){
					this.tempX = attacker.x;
					this.tempY = attacker.y;
					attacker.x = this.target.x - 1;
					attacker.y = this.target.y;
					this.hitbool = (new BN6LongSword()).hithuh(attacker, defender);
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
					this.hitbool = (new BN6LongSword()).hithuh(attacker, defender);
					attacker.x = this.tempX;
					attacker.y = this.tempY;
				}
			}
		}
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6SandWorm2(){
	this.id="BN6SandWorm2";
	this.name="SandWorm2";
	this.image=BN6SandWorm2IMG;
	this.code=["B", "R", "Y"];
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.mb=30;
	this.rank="standard";
	this.priority=2;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6SandWorm1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6SandWorm3(){
	this.id="BN6SandWorm3";
	this.name="SandWorm3";
	this.image=BN6SandWorm3IMG;
	this.code=["H", "J", "S"];
	this.damage=170;
	this.boostDamage=0;
	this.hits=1;
	this.mb=30;
	this.rank="standard";
	this.priority=2;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6SandWorm1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6SummonBlack1(){
	this.id="BN6SummonBlack1";
	this.name="SummonBlack1";
	this.image=BN6SummonBlack1IMG;
	this.code=["E", "I", "P"];
	this.damage=160;
	this.boostDamage=0;
	this.hits=1;
	this.mb=30;
	this.rank="standard";
	this.priority=2;
	this.elements=[];
	this.hithuh= function(attacker, defender){
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
				this.hitbool = (new BN6WideSword()).hithuh(attacker, defender);
				attacker.x = this.tempX;
				attacker.y = this.tempY;
				return this.hitbool;
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6SummonBlack2(){
	this.id="BN6SummonBlack2";
	this.name="SummonBlack2";
	this.image=BN6SummonBlack2IMG;
	this.code=["H", "O", "V"];
	this.damage=200;
	this.boostDamage=0;
	this.hits=1;
	this.mb=40;
	this.rank="standard";
	this.priority=2;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6SummonBlack1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6SummonBlack3(){
	this.id="BN6SummonBlack3";
	this.name="SummonBlack3";
	this.image=BN6SummonBlack3IMG;
	this.code=["W", "Y", "Z"];
	this.damage=260;
	this.boostDamage=0;
	this.hits=1;
	this.mb=40;
	this.rank="standard";
	this.priority=2;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6SummonBlack1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6Snake(){
	this.id="BN6Snake";
	this.name="Snake";
	this.image=BN6SnakeIMG;
	this.code=["H", "M", "L"];
	this.damage=30;
	this.boostDamage=0;
	this.hits=1;
	this.mb=34;
	this.rank="standard";
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
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
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6NumberBall(){
	this.id="BN6NumberBall";
	this.name="NumberBall";
	this.image=BN6NumberBallIMG;
	this.code=["N"];
	this.damage=1;
	this.boostDamage=0;
	this.hits=4;
	this.mb=34;
	this.rank="standard";
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		this.damage = attacker.hp % 100;
		if(this.damage < 1){
			this.damage = 1;
		}
		return (new BN6Cannon()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6FirePunch1(){
	this.id="BN6FirePunch1";
	this.name="FirePunch1";
	this.image=BN6FirePunch1IMG;
	this.code=["D", "E", "F"];
	this.damage=60;
	this.boostDamage=0;
	this.hits=1;
	this.mb=12;
	this.rank="standard";
	this.priority=2;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
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
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6FirePunch2(){
	this.id="BN6FirePunch2";
	this.name="FirePunch2";
	this.image=BN6FirePunch2IMG;
	this.code=["R", "S", "T"];
	this.damage=120;
	this.boostDamage=0;
	this.hits=1;
	this.mb=22;
	this.rank="standard";
	this.priority=2;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new BN6FirePunch1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6FirePunch3(){
	this.id="BN6FirePunch3";
	this.name="FirePunch3";
	this.image=BN6FirePunch3IMG;
	this.code=["A", "B", "C"];
	this.damage=180;
	this.boostDamage=0;
	this.hits=1;
	this.mb=32;
	this.rank="standard";
	this.priority=2;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new BN6FirePunch1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6BurnScare1(){
	this.id="BN6BurnScare1";
	this.name="BurnScare1";
	this.image=BN6BurnScare1IMG;
	this.code=["H", "P", "V"];
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.mb=24;
	this.rank="standard";
	this.priority=0;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
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
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6BurnScare2(){
	this.id="BN6BurnScare2";
	this.name="BurnScare2";
	this.image=BN6BurnScare2IMG;
	this.code=["D", "M", "T"];
	this.damage=120;
	this.boostDamage=0;
	this.hits=1;
	this.mb=30;
	this.rank="standard";
	this.priority=0;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new BN6BurnScare1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6BurnScare3(){
	this.id="BN6BurnScare3";
	this.name="BurnScare3";
	this.image=BN6BurnScare3IMG;
	this.code=["E", "O", "Z"];
	this.damage=140;
	this.boostDamage=0;
	this.hits=1;
	this.mb=36;
	this.rank="standard";
	this.priority=0;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new BN6BurnScare1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6Meteors(){
	this.id="BN6Meteors";
	this.name="Meteors";
	this.image=BN6MeteorsIMG;
	this.code=["R"];
	this.damage=40;
	this.boostDamage=0;
	this.hits=1;
	this.mb=73;
	this.rank="standard";
	this.priority=0;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
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
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6AquaNeedle1(){
	this.id="BN6AquaNeedle1";
	this.name="AquaNeedle1";
	this.image=BN6AquaNeedle1IMG;
	this.code=["C", "J", "P"];
	this.damage=40;
	this.boostDamage=0;
	this.hits=3;
	this.mb=31;
	this.rank="standard";
	this.priority=3;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			this.target = playerOne;
			if(attacker.name === "one"){
				this.target = playerTwo;
			}
			return defender.x === playerTwo.x && defender.y === playerTwo.y
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6AquaNeedle2(){
	this.id="BN6AquaNeedle2";
	this.name="AquaNeedle2";
	this.image=BN6AquaNeedle2IMG;
	this.code=["F", "K", "T"];
	this.damage=60;
	this.boostDamage=0;
	this.hits=3;
	this.mb=35;
	this.rank="standard";
	this.priority=3;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new BN6AquaNeedle1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6AquaNeedle3(){
	this.id="BN6AquaNeedle3";
	this.name="AquaNeedle3";
	this.image=BN6AquaNeedle3IMG;
	this.code=["A", "L", "U"];
	this.damage=80;
	this.boostDamage=0;
	this.hits=3;
	this.mb=39;
	this.rank="standard";
	this.priority=3;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new BN6AquaNeedle1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6BlizzardBall(){
	this.id="BN6BlizzardBall";
	this.name="BlizzardBall";
	this.image=BN6BlizzardBallIMG;
	this.code=["H", "N", "T"];
	this.damage=150;
	this.addDamage=0;
	this.boostDamage=0;
	this.hits=1;
	this.mb=76;
	this.rank="standard";
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		this.addDamage=0;
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
	};
	this.effecthit= function(attacker, defender){
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
	};
	this.effectmiss= function(attacker, defender){
		this.tempX = defender.x;
		defender.x = -1;
		if(attacker.name === "one"){
			defender.x = 6;
		}
		(new BN6BlizzardBall()).effecthit(attacker, defender);
		defender.x = this.tempX;
	};
}

function BN6KillerSensor1(){
	this.id="BN6KillerSensor1";
	this.name="KillerSensor1";
	this.image=BN6KillerSensor1IMG;
	this.code=["J", "O", "W"];
	this.mb=32;
	this.rank="standard";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		if(attacker.name === "one"){
			if(!board.cellHasSolidObject(attacker.x+1, attacker.y) && cells[attacker.x+1][attacker.y].player === null){
				cells[attacker.x+1][attacker.y].object.push(new BN6KillerSensor(attacker.x+1, attacker.y, attacker, defender, this.damage + this.boostDamage));
			}
		}
		else{
			if(!board.cellHasSolidObject(attacker.x-1, attacker.y) && cells[attacker.x+1][attacker.y].player === null){
				cells[attacker.x-1][attacker.y].object.push(new BN6KillerSensor(attacker.x-1, attacker.y, attacker, defender, this.damage + this.boostDamage));
			}
		}
	};
}

function BN6KillerSensor2(){
	this.id="BN6KillerSensor2";
	this.name="KillerSensor2";
	this.image=BN6KillerSensor2IMG;
	this.code=["N", "U", "Y"];
	this.mb=35;
	this.rank="standard";
	this.damage=130;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		if(attacker.name === "one"){
			if(!board.cellHasSolidObject(attacker.x+1, attacker.y) && cells[attacker.x+1][attacker.y].player === null){
				cells[attacker.x+1][attacker.y].object.push(new BN6KillerSensor(attacker.x+1, attacker.y, attacker, defender, this.damage + this.boostDamage));
			}
		}
		else{
			if(!board.cellHasSolidObject(attacker.x-1, attacker.y) && cells[attacker.x+1][attacker.y].player === null){
				cells[attacker.x-1][attacker.y].object.push(new BN6KillerSensor(attacker.x-1, attacker.y, attacker, defender, this.damage + this.boostDamage));
			}
		}
	};
}

function BN6KillerSensor3(){
	this.id="BN6KillerSensor3";
	this.name="KillerSensor3";
	this.image=BN6KillerSensor3IMG;
	this.code=["I", "K", "Q"];
	this.mb=38;
	this.rank="standard";
	this.damage=160;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		if(attacker.name === "one"){
			if(!board.cellHasSolidObject(attacker.x+1, attacker.y) && cells[attacker.x+1][attacker.y].player === null){
				cells[attacker.x+1][attacker.y].object.push(new BN6KillerSensor(attacker.x+1, attacker.y, attacker, defender, this.damage + this.boostDamage));
			}
		}
		else{
			if(!board.cellHasSolidObject(attacker.x-1, attacker.y) && cells[attacker.x+1][attacker.y].player === null){
				cells[attacker.x-1][attacker.y].object.push(new BN6KillerSensor(attacker.x-1, attacker.y, attacker, defender, this.damage + this.boostDamage));
			}
		}
	};
}

function BN6Boomerang(){
	this.id="BN6Boomerang";
	this.name="Boomerang";
	this.image=BN6BoomerangIMG;
	this.code=["J", "K", "T"];
	this.mb=16;
	this.rank="standard";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
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
	};
	this.effecthit= function(attacker, defender){
		(new BN6Boomerang()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
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
	};
}

function BN6HiBoomerang(){
	this.id="BN6HiBoomerang";
	this.name="HiBoomerang";
	this.image=BN6HiBoomerangIMG;
	this.code=["B", "L", "V"];
	this.mb=26;
	this.rank="standard";
	this.damage=140;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		return (new BN6Boomerang()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new BN6HiBoomerang()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new BN6Boomerang()).effectmiss(attacker, defender);
	};
}

function BN6MegaBoomerang(){
	this.id="BN6MegaBoomerang";
	this.name="MegaBoomerang";
	this.image=BN6MegaBoomerangIMG;
	this.code=["I", "M", "W"];
	this.mb=36;
	this.rank="standard";
	this.damage=170;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		return (new BN6Boomerang()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new BN6MegaBoomerang()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new BN6Boomerang()).effectmiss(attacker, defender);
	};
}

function BN6Lance(){
	this.id="BN6Lance";
	this.name="Lance";
	this.image=BN6LanceIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=42;
	this.rank="standard";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=1;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			this.lastCol = 0;
			if(attacker.name === "one"){
				this.lastCol = 5;
			}
			return defender.x === this.lastCol;
		}
		return false;
	};
	this.effecthit= function(attacker, defender){
		this.nextCol = 1
		if(attacker.name === "one"){
			this.nextCol = 4;
		}
		if(board.isCellThisPlayerValid(this.nextCol, defender.y, defender)){
			cells[defender.x][defender.y].player = null;
			defender.x = this.nextCol;
			cells[defender.x][defender.y].player = defender;
		}
	};
	this.effectmiss= function(attacker, defender){};
}

function BN6HeatDragon(){
	this.id="BN6HeatDragon";
	this.name="HeatDragon";
	this.image=BN6HeatDragonIMG;
	this.code=["G", "R", "T"];
	this.mb=40;
	this.rank="standard";
	this.damage=140;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
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
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6ElecDragon(){
	this.id="BN6ElecDragon";
	this.name="ElecDragon";
	this.image=BN6ElecDragonIMG;
	this.code=["A", "L", "V"];
	this.mb=40;
	this.rank="standard";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new BN6HeatDragon()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new BN6ElecDragon()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
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
				if((new BN6ElecDragon()).hithuh(attacker, fakeDefender)){
					board.convertPanel(i, j, PANELTYPE.CRACKED);
				}
			}
		}
	};
}

function BN6AquaDragon(){
	this.id="BN6AquaDragon";
	this.name="AquaDragon";
	this.image=BN6AquaDragonIMG;
	this.code=["H", "P", "S"];
	this.mb=44;
	this.rank="standard";
	this.damage=120;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new BN6HeatDragon()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new BN6AquaDragon()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
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
				if((new BN6AquaDragon()).hithuh(attacker, fakeDefender)){
					board.convertPanel(i, j, PANELTYPE.ICE);
				}
			}
		}
	};
}

function BN6WoodDragon(){
	this.id="BN6WoodDragon";
	this.name="WoodDragon";
	this.image=BN6WoodDragonIMG;
	this.code=["G", "T", "V"];
	this.mb=48;
	this.rank="standard";
	this.damage=130;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		return (new BN6HeatDragon()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new BN6WoodDragon()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
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
				if((new BN6WoodDragon()).hithuh(attacker, fakeDefender)){
					board.convertPanel(i, j, PANELTYPE.WOOD);
				}
			}
		}
	};
}

function BN6GolemPunch1(){
	this.id="BN6GolemPunch1";
	this.name="GolemPunch1";
	this.image=BN6GolemPunch1IMG;
	this.code=["I", "K", "Y"];
	this.mb=17;
	this.rank="standard";
	this.damage=140;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.affectedColumn = (new AREAGRAB()).affectedColumn(attacker, defender);
		return Math.abs(defender.y - attacker.y) < 2 && defender.x === this.affectedColumn;
	};
	this.effecthit= function(attacker, defender){
		(new BN6GolemPunch1()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
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
				if((new BN6GolemPunch1()).hithuh(attacker, fakeDefender)){
					board.convertPanel(i, j, PANELTYPE.CRACKED);
				}
			}
		}
	};
}

function BN6GolemPunch2(){
	this.id="BN6GolemPunch2";
	this.name="GolemPunch2";
	this.image=BN6GolemPunch2IMG;
	this.code=["D", "P", "U"];
	this.mb=27;
	this.rank="standard";
	this.damage=190;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new BN6GolemPunch1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new BN6GolemPunch1()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new BN6GolemPunch1()).effectmiss(attacker, defender);
	};
}

function BN6GolemPunch3(){
	this.id="BN6GolemPunch3";
	this.name="GolemPunch3";
	this.image=BN6GolemPunch3IMG;
	this.code=["H", "M", "V"];
	this.mb=37;
	this.rank="standard";
	this.damage=250;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new BN6GolemPunch1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new BN6GolemPunch1()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new BN6GolemPunch1()).effectmiss(attacker, defender);
	};
}

function BN6JusticeOne(){
	this.id="BN6JusticeOne";
	this.name="JusticeOne";
	this.image=BN6JusticeOneIMG;
	this.code=["J"];
	this.mb=90;
	this.rank="standard";
	this.damage=100;
	this.addDamage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.addDamage = 0;
		if((new BN6MiniBomb()).hithuh(attacker, defender)){
			this.addDamage = 120;
		}
		return (new BN6BigBomb()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new BN6JusticeOne()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
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
				if((new BN6BigBomb()).hithuh(attacker, fakeDefender)){
					board.convertPanel(i, j, PANELTYPE.CRACKED);
				}
			}
		}
	};
}

function BN6AirWheel1(){
	this.id="BN6AirWheel1";
	this.name="AirWheel1";
	this.image=BN6AirWheel1IMG;
	this.code=["F", "G", "R"];
	this.mb=22;
	this.rank="standard";
	this.damage=50;
	this.boostDamage=0;
	this.hits=2;
	this.priority=2;
	this.elements=[ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === "one"){
			this.xDirection = 1;
		}
		this.tempX = attacker.x + this.xDirection;
		if(board.isCellPlayerValid(this.tempX, attacker.y)){
			this.locReached = false;
			while(!this.locReached){
				if(!board.isCellPlayerValid(this.tempX + this.xDirection, attacker.y)){
					this.locReached = true;
				}
				else{
					this.tempX = this.tempX + this.xDirection;
				}
			}
			cells[this.tempX][attacker.y].object = [new BN6AirWheel(this.tempX, attacker.y, attacker, defender, this.damage + this.boostDamage, this.hits)];
		}
	};
}

function BN6AirWheel2(){
	this.id="BN6AirWheel2";
	this.name="AirWheel2";
	this.image=BN6AirWheel2IMG;
	this.code=["A", "L", "T"];
	this.mb=29;
	this.rank="standard";
	this.damage=50;
	this.boostDamage=0;
	this.hits=3;
	this.priority=2;
	this.elements=[ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === "one"){
			this.xDirection = 1;
		}
		this.tempX = attacker.x + this.xDirection;
		if(board.isCellPlayerValid(this.tempX, attacker.y)){
			this.locReached = false;
			while(!this.locReached){
				if(!board.isCellPlayerValid(this.tempX + this.xDirection, attacker.y)){
					this.locReached = true;
				}
				else{
					this.tempX = this.tempX + this.xDirection;
				}
			}
			cells[this.tempX][attacker.y].object = [new BN6AirWheel(this.tempX, attacker.y, attacker, defender, this.damage + this.boostDamage, this.hits)];
		}
	};
}

function BN6AirWheel3(){
	this.id="BN6AirWheel3";
	this.name="AirWheel3";
	this.image=BN6AirWheel3IMG;
	this.code=["N", "O", "T"];
	this.mb=36;
	this.rank="standard";
	this.damage=50;
	this.boostDamage=0;
	this.hits=4;
	this.priority=2;
	this.elements=[ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === "one"){
			this.xDirection = 1;
		}
		this.tempX = attacker.x + this.xDirection;
		if(board.isCellPlayerValid(this.tempX, attacker.y)){
			this.locReached = false;
			while(!this.locReached){
				if(!board.isCellPlayerValid(this.tempX + this.xDirection, attacker.y)){
					this.locReached = true;
				}
				else{
					this.tempX = this.tempX + this.xDirection;
				}
			}
			cells[this.tempX][attacker.y].object = [new BN6AirWheel(this.tempX, attacker.y, attacker, defender, this.damage + this.boostDamage, this.hits)];
		}
	};
}

function BN6Wind(){
	this.id="BN6Wind";
	this.name="Wind";
	this.image=BN6WindIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=10;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === "one"){
			this.xDirection = 1;
		}
		this.tempX = attacker.x + this.xDirection;
		if(board.isCellPlayerValid(attacker.x + this.xDirection, attacker.y)){
			cells[this.tempX][attacker.y].object = [new BN6WindBox(this.tempX, attacker.y, attacker, defender, -1)];
		}
	};
}

function BN6Fan(){
	this.id="BN6Fan";
	this.name="Fan";
	this.image=BN6FanIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=10;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === "one"){
			this.xDirection = 1;
		}
		this.tempX = attacker.x + this.xDirection;
		if(board.isCellPlayerValid(attacker.x + this.xDirection, attacker.y)){
			cells[this.tempX][attacker.y].object = [new BN6WindBox(this.tempX, attacker.y, attacker, defender, 1)];
		}
	};
}

function BN6Magnum(){
	this.id="BN6Magnum";
	this.name="Magnum";
	this.image=BN6MagnumIMG;
	this.code=["F", "L", "W"];
	this.mb=31;
	this.rank="standard";
	this.damage=130;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.cursor];
	this.hithuh= function(attacker, defender){
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
	};
	this.effecthit= function(attacker, defender){
		(new BN6Magnum()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		this.target = playerOne;
		if(attacker.name === "one"){
			this.target = playerTwo;
		}
		for(var j = 0; j < cells[this.target.x].length; j++){
			board.convertPanel(this.target.x, j, PANELTYPE.BROKEN);
		}
	};
}

function BN6CircGun(){
	this.id="BN6CircGun";
	this.name="CircGun";
	this.image=BN6CircGunIMG;
	this.code=["P", "T", "V"];
	this.mb=35;
	this.rank="standard";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.cursor];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			this.target = playerOne;
			this.targetsX = [2, 2, 2, 1, 0, 0, 0, 1];
			this.targetsY = [0, 1, 2, 2, 2, 1, 0, 0];
			if(attacker.name === "one"){
				this.target = playerTwo;
				this.targetsX = [3, 3, 3, 4, 5, 5, 5, 4];
			}
			
			for(var i = 0; i < this.targetsX.length; i++){
				if(this.target.x === this.targetsX[i] && this.target.y === this.targetsY[i]){
					for(var j = 0; j < 4; j++){
						this.ind = (i + j) % this.targetsX.length;
						if(defender.x === this.targetsX[this.ind] && defender.y === this.targetsY[this.ind]){
							return true;
						}
					}
				}
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6RockCube(){
	this.id="BN6RockCube";
	this.name="RockCube";
	this.image=BN6RockCubeIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=6;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === "one"){
			this.xDirection = 1;
		}
		if(board.isCellPlayerValid(attacker.x + this.xDirection, attacker.y)){
			cells[attacker.x + this.xDirection][attacker.y].object = [new BN6RockCubeObj(attacker.x + this.xDirection, attacker.y)];
		}
	};
}

function BN6LittleBoiler1(){
	this.id="BN6LittleBoiler1";
	this.name="LittleBoiler1";
	this.image=BN6LittleBoiler1IMG;
	this.code=["F", "K", "L"];
	this.mb=18;
	this.rank="standard";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=3;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		this.damage = 100;
		this.hitbool = (new BN6MiniBomb()).hithuh(attacker, defender);
		if(this.hitbool){
			this.damage = 50;
		}
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -3;
		if(attacker.name == "one"){
			this.xDirection = 3;
		}
		if(board.isCellPlayerValid(attacker.x + this.xDirection, attacker.y)){
			cells[attacker.x+this.xDirection][attacker.y].object.push(new BN6LittleBoiler(attacker.x+this.xDirection, attacker.y, this.damage + this.boostDamage, attacker));
		}
	};
}

function BN6LittleBoiler2(){
	this.id="BN6LittleBoiler2";
	this.name="LittleBoiler2";
	this.image=BN6LittleBoiler2IMG;
	this.code=["E", "M", "V"];
	this.mb=23;
	this.rank="standard";
	this.damage=140;
	this.boostDamage=0;
	this.hits=1;
	this.priority=3;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		this.damage = 140;
		this.hitbool = (new BN6MiniBomb()).hithuh(attacker, defender);
		if(this.hitbool){
			this.damage = 70;
		}
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -3;
		if(attacker.name == "one"){
			this.xDirection = 3;
		}
		if(board.isCellPlayerValid(attacker.x + this.xDirection, attacker.y)){
			cells[attacker.x+this.xDirection][attacker.y].object.push(new BN6LittleBoiler(attacker.x+this.xDirection, attacker.y, this.damage + this.boostDamage, attacker));
		}
	};
}

function BN6LittleBoiler3(){
	this.id="BN6LittleBoiler3";
	this.name="LittleBoiler3";
	this.image=BN6LittleBoiler3IMG;
	this.code=["G", "S", "Z"];
	this.mb=23;
	this.rank="standard";
	this.damage=180;
	this.boostDamage=0;
	this.hits=1;
	this.priority=3;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		this.damage = 180;
		this.hitbool = (new BN6MiniBomb()).hithuh(attacker, defender);
		if(this.hitbool){
			this.damage = 90;
		}
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -3;
		if(attacker.name == "one"){
			this.xDirection = 3;
		}
		if(board.isCellPlayerValid(attacker.x + this.xDirection, attacker.y)){
			cells[attacker.x+this.xDirection][attacker.y].object.push(new BN6LittleBoiler(attacker.x+this.xDirection, attacker.y, this.damage + this.boostDamage, attacker));
		}
	};
}

function BN6AirRaid1(){
	this.id="BN6AirRaid1";
	this.name="AirRaid1";
	this.image=BN6AirRaid1IMG;
	this.code=["G", "K", "R"];
	this.mb=26;
	this.rank="standard";
	this.damage=10;
	this.boostDamage=0;
	this.hits=10;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === "one"){
			this.xDirection = 1;
		}
		if(board.isCellPlayerValid(attacker.x + this.xDirection, attacker.y)){
			cells[attacker.x + this.xDirection][attacker.y].object = [new BN6AirRaid(attacker.x + this.xDirection, attacker.y, attacker, defender, this.hits)];
		}
	};
}

function BN6AirRaid2(){
	this.id="BN6AirRaid2";
	this.name="AirRaid2";
	this.image=BN6AirRaid2IMG;
	this.code=["O", "T", "Y"];
	this.mb=32;
	this.rank="standard";
	this.damage=10;
	this.boostDamage=0;
	this.hits=14;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === "one"){
			this.xDirection = 1;
		}
		if(board.isCellPlayerValid(attacker.x + this.xDirection, attacker.y)){
			cells[attacker.x + this.xDirection][attacker.y].object = [new BN6AirRaid(attacker.x + this.xDirection, attacker.y, attacker, defender, this.hits)];
		}
	};
}

function BN6AirRaid3(){
	this.id="BN6AirRaid3";
	this.name="AirRaid3";
	this.image=BN6AirRaid3IMG;
	this.code=["N", "U", "Z"];
	this.mb=39;
	this.rank="standard";
	this.damage=10;
	this.boostDamage=0;
	this.hits=18;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === "one"){
			this.xDirection = 1;
		}
		if(board.isCellPlayerValid(attacker.x + this.xDirection, attacker.y)){
			cells[attacker.x + this.xDirection][attacker.y].object = [new BN6AirRaid(attacker.x + this.xDirection, attacker.y, attacker, defender, this.hits)];
		}
	};
}

function BN6TimeBomb1(){
	this.id="BN6TimeBomb1";
	this.name="TimeBomb1";
	this.image=BN6TimeBomb1IMG;
	this.code=["F", "G", "H"];
	this.mb=20;
	this.rank="standard";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -1;
		this.targetSide = SIDE.LEFT;
		if(attacker.name === "one"){
			this.xDirection = 1;
			this.targetSide = SIDE.RIGHT;
		}
		this.bombPlaced = false;
		this.tempX = attacker.x + this.xDirection;
		while(!this.bombPlaced){
			if(cells[this.tempX]){
				if(cells[this.tempX][attacker.y] && cells[this.tempX][attacker.y].side === this.targetSide){
					if(board.isCellPlayerValid(this.tempX, attacker.y)){
						cells[this.tempX][attacker.y].object = [new BN6TimeBomb(this.tempX, attacker.y, attacker, defender, this.damage + this.boostDamage)];
					}
				}
				this.tempX++
			}
			this.bombPlaced = true;
		}
	};
}

function BN6TimeBomb2(){
	this.id="BN6TimeBomb2";
	this.name="TimeBomb2";
	this.image=BN6TimeBomb2IMG;
	this.code=["C", "D", "E"];
	this.mb=30;
	this.rank="standard";
	this.damage=190;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -1;
		this.targetSide = SIDE.LEFT;
		if(attacker.name === "one"){
			this.xDirection = 1;
			this.targetSide = SIDE.RIGHT;
		}
		this.bombPlaced = false;
		this.tempX = attacker.x + this.xDirection;
		while(!this.bombPlaced){
			if(cells[this.tempX]){
				if(cells[this.tempX][attacker.y] && cells[this.tempX][attacker.y].side === this.targetSide){
					if(board.isCellPlayerValid(this.tempX, attacker.y)){
						cells[this.tempX][attacker.y].object = [new BN6TimeBomb(this.tempX, attacker.y, attacker, defender, this.damage + this.boostDamage)];
					}
				}
				this.tempX++
			}
			this.bombPlaced = true;
		}
	};
}

function BN6TimeBomb3(){
	this.id="BN6TimeBomb3";
	this.name="TimeBomb3";
	this.image=BN6TimeBomb3IMG;
	this.code=["L", "M", "N"];
	this.mb=37;
	this.rank="standard";
	this.damage=230;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -1;
		this.targetSide = SIDE.LEFT;
		if(attacker.name === "one"){
			this.xDirection = 1;
			this.targetSide = SIDE.RIGHT;
		}
		this.bombPlaced = false;
		this.tempX = attacker.x + this.xDirection;
		while(!this.bombPlaced){
			if(cells[this.tempX]){
				if(cells[this.tempX][attacker.y] && cells[this.tempX][attacker.y].side === this.targetSide){
					if(board.isCellPlayerValid(this.tempX, attacker.y)){
						cells[this.tempX][attacker.y].object = [new BN6TimeBomb(this.tempX, attacker.y, attacker, defender, this.damage + this.boostDamage)];
					}
				}
				this.tempX++
			}
			this.bombPlaced = true;
		}
	};
}

function BN6Mine(){
	this.id="BN6Mine";
	this.name="Mine";
	this.image=BN6MineIMG;
	this.code=["A", "S", "T"];
	this.mb=28;
	this.rank="standard";
	this.damage=200;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.count = 0;
		this.target = -1;
		if(defender.action === ACTIONS.CARD || defender.action === ACTIONS.SPECIAL){
			this.target = CARDLIST.indexOf(defender.card);
		}
		if(this.target === -1){
			this.target = CARDLIST.length+1;
		}
		this.tempX = attacker.x + this.xDirection;
		while(this.count !== this.target){
			for(var i = 0; i < cells.length; i++){
				for(var j = 0; j < cells[i].length; j ++){
					if(board.isCellThisPlayerValid(i, j, defender)){
						this.count++
						if(this.count === this.target){
							cells[i][j].object.push(new BN6MineObj(i, j, attacker, defender, this.damage + this.boostDamage));
						}
					}
				}
			}
		}
	};
}

function BN6Fanfare(){
	this.id="BN6Fanfare";
	this.name="Fanfare";
	this.image=BN6FanfareIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=20;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === "one"){
			this.xDirection = 1;
		}
		if(board.isCellPlayerValid(attacker.x + this.xDirection, attacker.y)){
			cells[attacker.x + this.xDirection][attacker.y].object = [new BN6FanfareObj(attacker.x + this.xDirection, attacker.y, attacker)];
		}
	};
}

function BN6Discord(){
	this.id="BN6Discord";
	this.name="Discord";
	this.image=BN6DiscordIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=20;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === "one"){
			this.xDirection = 1;
		}
		if(board.isCellPlayerValid(attacker.x + this.xDirection, attacker.y)){
			cells[attacker.x + this.xDirection][attacker.y].object = [new BN6DiscordObj(attacker.x + this.xDirection, attacker.y, attacker, defender)];
		}
	};
}

function BN6Timpani(){
	this.id="BN6Timpani";
	this.name="Timpani";
	this.image=BN6TimpaniIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=20;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === "one"){
			this.xDirection = 1;
		}
		if(board.isCellPlayerValid(attacker.x + this.xDirection, attacker.y)){
			cells[attacker.x + this.xDirection][attacker.y].object = [new BN6TimpaniObj(attacker.x + this.xDirection, attacker.y, attacker, defender)];
		}
	};
}

function BN6Silence(){
	this.id="BN6Silence";
	this.name="Silence";
	this.image=BN6SilenceIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=20;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === "one"){
			this.xDirection = 1;
		}
		if(board.isCellPlayerValid(attacker.x + this.xDirection, attacker.y)){
			cells[attacker.x + this.xDirection][attacker.y].object = [new BN6SilenceObj(attacker.x + this.xDirection, attacker.y, attacker, defender)];
		}
	};
}

function BN6VDoll(){
	this.id="BN6VDoll";
	this.name="VDoll";
	this.image=BN6VDollIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=39;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=3;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6MiniBomb()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -3;
		if(attacker.name == "one"){
			this.xDirection = 3;
		}
		if(board.isCellPlayerValid(attacker.x + this.xDirection, attacker.y)){
			cells[attacker.x+this.xDirection][attacker.y].object.push(new BN6VDollObj(attacker.x+this.xDirection, attacker.y, defender, attacker));
			board.convertPanel(attacker.x+this.xDirection, attacker.y, PANELTYPE.POISON);
		}
	};
}

function BN6Guardian(){
	this.id="BN6Guardian";
	this.name="Guardian";
	this.image=BN6GuardianIMG;
	this.code=["O"];
	this.mb=64;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === "one"){
			this.xDirection = 1;
		}
		if(board.isCellPlayerValid(attacker.x + this.xDirection, attacker.y)){
			cells[attacker.x + this.xDirection][attacker.y].object = [new BN6GuardianObj(attacker.x + this.xDirection, attacker.y, attacker)];
		}
	};
}

function BN6Anubis(){
	this.id="BN6Anubis";
	this.name="Anubis";
	this.image=BN6AnubisIMG;
	this.code=["P"];
	this.mb=86;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === "one"){
			this.xDirection = 1;
		}
		if(board.isCellPlayerValid(attacker.x + this.xDirection, attacker.y)){
			cells[attacker.x + this.xDirection][attacker.y].object = [new BN6AnubisObj(attacker.x + this.xDirection, attacker.y, defender, attacker)];
		}
	};
}

function BN6Recover10(){
	this.id="BN6Recover10";
	this.name="Recover10";
	this.image=BN6Recover10IMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=4;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=1;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return attacker.x === defender.x && attacker.y === defender.y;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		attacker.hp = attacker.hp + 10;
		if(attacker.hp > playerHP){
			attacker.hp = playerHP;
		}
	};
}

function BN6Recover30(){
	this.id="BN6Recover30";
	this.name="Recover30";
	this.image=BN6Recover30IMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=12;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=1;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		attacker.hp = attacker.hp + 30;
		if(attacker.hp > playerHP){
			attacker.hp = playerHP;
		}
	};
}

function BN6Recover50(){
	this.id="BN6Recover50";
	this.name="Recover50";
	this.image=BN6Recover50IMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=18;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=1;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		attacker.hp = attacker.hp + 50;
		if(attacker.hp > playerHP){
			attacker.hp = playerHP;
		}
	};
}

function BN6Recover80(){
	this.id="BN6Recover80";
	this.name="Recover80";
	this.image=BN6Recover80IMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=24;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=1;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		attacker.hp = attacker.hp + 80;
		if(attacker.hp > playerHP){
			attacker.hp = playerHP;
		}
	};
}

function BN6Recover120(){
	this.id="BN6Recover120";
	this.name="Recover120";
	this.image=BN6Recover120IMG;
	this.code=["F", "P", "S"];
	this.mb=32;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=1;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		attacker.hp = attacker.hp + 120;
		if(attacker.hp > playerHP){
			attacker.hp = playerHP;
		}
	};
}

function BN6Recover150(){
	this.id="BN6Recover150";
	this.name="Recover150";
	this.image=BN6Recover150IMG;
	this.code=["J", "M", "T"];
	this.mb=38;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=1;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		attacker.hp = attacker.hp + 150;
		if(attacker.hp > playerHP){
			attacker.hp = playerHP;
		}
	};
}

function BN6Recover200(){
	this.id="BN6Recover200";
	this.name="Recover200";
	this.image=BN6Recover200IMG;
	this.code=["I", "Q", "Z"];
	this.mb=42;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=1;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		attacker.hp = attacker.hp + 200;
		if(attacker.hp > playerHP){
			attacker.hp = playerHP;
		}
	};
}

function BN6Recover300(){
	this.id="BN6Recover300";
	this.name="Recover300";
	this.image=BN6Recover300IMG;
	this.code=["J", "O", "Y"];
	this.mb=48;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=1;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		attacker.hp = attacker.hp + 300;
		if(attacker.hp > playerHP){
			attacker.hp = playerHP;
		}
	};
}

function BN6PanelGrab(){
	this.id="BN6PanelGrab";
	this.name="PanelGrab";
	this.image=BN6PanelGrabIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=6;
	this.rank="standard";
	this.damage=10;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			return (new BN6PanelGrab()).affectedX(attacker, defender) === defender.x && attacker.y === defender.y;
		}
		return false;
	};
	this.affectedX= function(attacker, defender){
		this.xDirection = -1;
		this.sideToSteal = SIDE.LEFT;
		if(attacker.name === "one"){
			this.xDirection = 1;
			this.sideToSteal = SIDE.RIGHT;
		}
		this.tempX = attacker.x + this.xDirection;
		this.found = false;
		while(!this.found){
			if(cells[this.tempX][attacker.y].side === this.sideToSteal){
				this.found = true;
			}
			else{
				this.tempX = this.tempX + this.xDirection;
			}
		}
		return this.tempX;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.sideToConvert = SIDE.RIGHT;
		if(attacker.name === "one"){
			this.sideToConvert = SIDE.LEFT;
		}
		if(!board.cellHasSolidObject(x,y)){
			cells[this.affectedX(attacker, defender)][attacker.y].side = this.sideToConvert;
			cells[this.affectedX(attacker, defender)][attacker.y].sideTimer = 12;
		}
	};
}

function BN6AreaGrab(){
	this.id="BN6AreaGrab";
	this.name="AreaGrab";
	this.image=BN6AreaGrabIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=8;
	this.rank="standard";
	this.damage=10;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new AREAGRAB()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new AREAGRAB()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new AREAGRAB()).effectmiss(attacker, defender);
	};
}

function BN6GrabBanish(){
	this.id="BN6GrabBanish";
	this.name="GrabBanish";
	this.image=BN6GrabBanishIMG;
	this.code=["B", "M", "S"];
	this.mb=24;
	this.rank="standard";
	this.damage=20;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		this.hits = (new BN6GrabBanish()).panelCount(attacker, defender);
		if(defender.invis < 1){
			this.targetPlayer = playerOne;
			if(attacker.name == "one"){
				this.targetPlayer = playerTwo;
			}
			return defender.x === this.targetPlayer.x && defender.y === this.targetPlayer.y;
		}
		return false;
	};
	this.panelCount= function(attacker, defender){
		this.count = 0;
		this.mySide = SIDE.RIGHT;
		if(attacker.name == "one"){
			this.mySide = SIDE.LEFT;
		}
		for(var i = 0; i < cells.length; i ++){
			for(var j = 0; j < cells[i].length; j++){
				if(cells[i][j].defaultside === this.mySide){
					if(cells[i][j].side !== this.mySide){
						this.count++;
					}
				}
			}
		}
		return this.count;
	};
	this.effecthit= function(attacker, defender){
		(new BN6GrabBanish()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		this.mySide = SIDE.RIGHT;
		if(attacker.name == "one"){
			this.mySide = SIDE.LEFT;
		}
		for(var i = 0; i < cells.length; i ++){
			for(var j = 0; j < cells[i].length; j++){
				if(cells[i][j].defaultside === this.mySide){
					if(cells[i][j].side !== this.mySide){
						cells[i][j].sideTimer = 0;
					}
				}
			}
		}
	};
}

function BN6GrabRevenge(){
	this.id="BN6GrabRevenge";
	this.name="GrabRevenge";
	this.image=BN6GrabRevengeIMG;
	this.code=["F", "N", "P"];
	this.mb=50;
	this.rank="standard";
	this.damage=40;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		this.hits = (new BN6GrabBanish()).panelCount(attacker, defender);
		return (new BN6GrabBanish()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new BN6GrabBanish()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new BN6GrabBanish()).effectmiss(attacker, defender);
	};
}

function BN6PanelReturn(){
	this.id="BN6PanelReturn";
	this.name="PanelReturn";
	this.image=BN6PanelReturnIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=14;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.mySide = SIDE.RIGHT;
		if(attacker.name == "one"){
			this.mySide = SIDE.LEFT;
		}
		for(var i = 0; i < cells.length; i ++){
			for(var j = 0; j < cells[i].length; j++){
				if(cells[i][j].side === this.mySide){
					board.convertPanel(i, j, PANELTYPE.NORMAL);
				}
			}
		}
	};
}

function BN6DeathMatch(){
	this.id="BN6DeathMatch";
	this.name="DeathMatch";
	this.image=BN6DeathMatchIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=47;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		for(var i = 0; i < cells.length; i ++){
			for(var j = 0; j < cells[i].length; j++){
				board.convertPanel(i, j, PANELTYPE.BROKEN);
			}
		}
	};
}

function BN6HolyPanel(){
	this.id="BN6HolyPanel";
	this.name="HolyPanel";
	this.image=BN6HolyPanelIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=24;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name == "one"){
			this.xDirection = 1;
		}
		board.convertPanel(attacker.x + this.xDirection, attacker.y, PANELTYPE.HOLY);
	};
}

function BN6Sanctuary(){
	this.id="BN6Sanctuary";
	this.name="Sanctuary";
	this.image=BN6SanctuaryIMG;
	this.code=["Z"];
	this.mb=62;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.mySide = SIDE.RIGHT;
		if(attacker.name == "one"){
			this.mySide = SIDE.LEFT;
		}
		for(var i = 0; i < cells.length; i ++){
			for(var j = 0; j < cells[i].length; j++){
				if(cells[i][j].side === this.mySide){
					board.convertPanel(i, j, PANELTYPE.HOLY);
				}
			}
		}
	};
}

function BN6ComingRoad(){
	this.id="BN6ComingRoad";
	this.name="ComingRoad";
	this.image=BN6ComingRoadIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=21;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.convertToPanel = PANELTYPE.RIGHT;
		this.targetSide = SIDE.LEFT;
		if(attacker.name == "one"){
			this.convertToPanel = PANELTYPE.LEFT;
			this.targetSide = SIDE.RIGHT;
		}
		for(var i = 0; i < cells.length; i ++){
			if(cells[i][attacker.y].side === this.targetSide ){
				board.convertPanel(i, attacker.y, this.convertToPanel);
			}
		}
	};
}

function BN6GoingRoad(){
	this.id="BN6GoingRoad";
	this.name="GoingRoad";
	this.image=BN6GoingRoadIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=21;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.convertToPanel = PANELTYPE.LEFT;
		this.targetSide = SIDE.LEFT;
		if(attacker.name == "one"){
			this.convertToPanel = PANELTYPE.RIGHT;
			this.targetSide = SIDE.RIGHT;
		}
		for(var i = 0; i < cells.length; i ++){
			if(cells[i][attacker.y].side === this.targetSide ){
				board.convertPanel(i, attacker.y, this.convertToPanel);
			}
		}
	};
}

function BN6Slowgauge(){
	this.id="BN6Slowgauge";
	this.name="Slowgauge";
	this.image=BN6SlowgaugeIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=42;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		timer.turncount = timer.turncount + 2;
		if(timer.turncount > 9){
			timer.turncount = 9;
		}
	};
}

function BN6Fastgauge(){
	this.id="BN6Fastgauge";
	this.name="Fastgauge";
	this.image=BN6FastgaugeIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=48;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		timer.turncount = timer.turncount - 2;
		if(timer.turncount < 3){
			timer.turncount = 3;
		}
	};
}

function BN6Fullcust(){
	this.id="BN6Fullcust";
	this.name="Fullcust";
	this.image=BN6FullcustIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=50;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		timer.currentturn = timer.turncount;
	};
}

function BN6BusterUp(){
	this.id="BN6BusterUp";
	this.name="BusterUp";
	this.image=BN6BusterUpIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=11;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		attacker.busterType.damage = attacker.busterType.damage + 10;
	};
}

function BN6BugFix(){
	this.id="BN6BugFix";
	this.name="BugFix";
	this.image=BN6BugFixIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=62;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		attacker.bugs = [];
	};
}

function BN6Invis(){
	this.id="BN6Invis";
	this.name="Invis";
	this.image=BN6InvisIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=30;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		attacker.invis = 2;
	};
}

function BN6Barrier(){
	this.id="BN6Barrier";
	this.name="Barrier";
	this.image=BN6BarrierIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=7;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		attacker.barrier = new BasicBarrier(10);
	};
}

function BN6Barrier100(){
	this.id="BN6Barrier100";
	this.name="Barrier100";
	this.image=BN6Barrier100IMG;
	this.code=["H", "O", "Y"];
	this.mb=30;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		attacker.barrier = new BasicBarrier(100);
	};
}

function BN6Barrier200(){
	this.id="BN6Barrier200";
	this.name="Barrier200";
	this.image=BN6Barrier200IMG;
	this.code=["K", "U", "W"];
	this.mb=52;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		attacker.barrier = new BasicBarrier(200);
	};
}

function BN6BubbleWrap(){
	this.id="BN6BubbleWrap";
	this.name="BubbleWrap";
	this.image=BN6BubbleWrapIMG;
	this.code=["I", "Q", "Z"];
	this.mb=58;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new BN6Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		attacker.barrier = new BubbleBarrier();
	};
}

function BN6LifeAura(){
	this.id="BN6LifeAura";
	this.name="LifeAura";
	this.image=BN6LifeAuraIMG;
	this.code=["U"];
	this.mb=70;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		attacker.barrier = new AuraBarrier(200);
	};
}

function BN6MagneCoil(){
	this.id="BN6MagneCoil";
	this.name="MagneCoil";
	this.image=BN6MagneCoilIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=14;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=3;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === "one"){
			this.xDirection = 1;
		}
		this.inRange = false;
		for(var i = 1; i < 4; i++){
			if(attacker.x + i * this.xDirection === defender.x){
				this.inRange = true;
			}
		}
		if(this.inRange){
			defender.stunned = 1;
			while(defender.y !== attacker.y){
				this.yDirection = (attacker.y - defender.y) / Math.abs(attacker.y - defender.y);
				if(board.isCellThisPlayerValid(defender.x, defender.y+this.yDirection, defender)){
					defender.y = defender.y + this.yDirection;
				}
				else{
					break;
				}
			}
		}
	};
}

function BN6ColonelsArmy(){
	this.id="BN6ColonelsArmy";
	this.name="Colonel's Army";
	this.image=BN6ColonelsArmyIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=25;
	this.rank="standard";
	this.damage=40;
	this.boostDamage=0;
	this.hits=3;
	this.priority=2;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		this.hitbool = false;
		if(defender.invis < 1){
			this.targetPlayer = playerOne;
			if(attacker.name === "one"){
				this.targetPlayer = playerTwo;
			}
			this.hits = 0;
			for(var i = 0; i < cells.length; i++){
				for(var j = 0; j < cells[i].length; j++){
					if(board.cellHasSolidObject(i, j)){
						if(this.targetPlayer.x < i){
							if(defender.x < i && defender.y === j){
								this.hitbool = true;
								this.hits = this.hits + 3;
							}
						}
						else if(this.targetPlayer.x > i){
							if(defender.x > i && defender.y === j){
								this.hitbool = true;
								this.hits = this.hits + 3;
							}
						}
					}
				}
			}
		}
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){
		defender.stunned = 2;
		(new BN6ColonelsArmy()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		for(var i = 0; i < cells.length; i++){
			for(var j = 0; j < cells[i].length; j++){
				if(board.cellHasSolidObject(i, j)){
					cells[i][j].object = [];
				}
			}
		}
	};
}

function BN6ElementTrap(){
	this.id="BN6ElementTrap";
	this.name="ElementTrap";
	this.image=BN6ElementTrapIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=42;
	this.rank="standard";
	this.damage=240;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		attacker.trap = new BN6ElementTrapTrap();
	};
}

function BN6AntiNavi(){
	this.id="BN6AntiNavi";
	this.name="AntiNavi";
	this.image=BN6AntiNaviIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=50;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		attacker.trap = new BN6AntiNaviTrap();
	};
}

function BN6AntiDmg(){
	this.id="BN6AntiDmg";
	this.name="AntiDmg";
	this.image=BN6AntiDmgIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=30;
	this.rank="standard";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		attacker.trap = new BN6AntiDmgTrap();
	};
}

function BN6AntiSword(){
	this.id="BN6AntiSword";
	this.name="AntiSword";
	this.image=BN6AntiSwordIMG;
	this.code=["A", "R", "Z"];
	this.mb=30;
	this.rank="standard";
	this.damage=100;
	this.boostDamage=0;
	this.hits=3;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		attacker.trap = new BN6AntiDmgTrap();
	};
}

function BN6AntiRecover(){
	this.id="BN6AntiRecover";
	this.name="AntiRecover";
	this.image=BN6AntiRecoverIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=37;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		attacker.trap = new BN6AntiRecoverTrap();
	};
}

function BN6Whitepill(){
	this.id="BN6Whitepill";
	this.name="Whitepill";
	this.image=BN6WhitepillIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=30;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=1;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.addStun = true;
}

function BN6Uninstall(){
	this.id="BN6Uninstall";
	this.name="Uninstall";
	this.image=BN6UninstallIMG;
	this.code=["G", "L", "R"];
	this.mb=60;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=1;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.addUninstall = true;
}

function BN6CopyDamage(){
	this.id="BN6CopyDamage";
	this.name="CopyDamage";
	this.image=BN6CopyDamageIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=12;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Cannon()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6LifeSynchro(){
	this.id="BN6LifeSynchro";
	this.name="LifeSynchro";
	this.image=BN6LifeSynchroIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=12;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Cannon()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6Attack10(){
	this.id="BN6Attack10";
	this.name="Attack +10";
	this.image=BN6Attack10IMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=4;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.addboostDamage = 10;
}

function BN6Attack30(){
	this.id="BN6Attack30";
	this.name="Attack +30";
	this.image=BN6Attack30IMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=66;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.addboostDamage = 30;
}

function BN6Navi20(){
	this.id="BN6Navi20";
	this.name="Navi +20";
	this.image=BN6Navi20IMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=36;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.addNaviboostDamage = 20;
}

function BN6Colorpoint(){
	this.id="BN6Colorpoint";
	this.name="Colorpoint";
	this.image=BN6ColorpointIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=31;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.panelsGivenUp = (new BN6Colorpoint()).selfSteal(attacker, defender);
		if(attacker.name === player.name){
			if(HAND[1] && HAND[1].damage > 0){
				HAND[1].boostDamage = HAND[1].boostDamage + 10 * this.panelsGivenUp;
			}
		}
	};
	this.selfSteal = function(attacker, defender){
		this.panelsGivenUp = 0;
		this.xLength = cells.length;
		this.yLength = cells[0].length;

		this.targetSide = SIDE.RIGHT;
		this.otherSide = SIDE.LEFT;
		this.xDirection = -1;
		this.xStart = this.xLength;
		this.xEnd = 0;
		if(attacker.name == "one"){
			this.targetSide = SIDE.LEFT;
			this.otherSide = SIDE.RIGHT;
			this.xDirection = 1;
			this.xStart = 0;
			this.xEnd = this.xLength;
		}
		
		for(var y = 0; y < this.yLength; y++){
			for(var x = this.xStart; x < this.xEnd; x = x + this.xDirection){
				if(cells[x][y].side = this.targetSide){
					if(!board.cellHasSolidObject(x, y) && cells[x][y].player === null){
						cells[x][y].side = this.otherSide;
						cells[x][y].sideTimer = 12;
						this.panelsGivenUp++;
					}
					x = this.xEnd;
				}
			}
		}
		return this.panelsGivenUp;
	};
}

function BN6Doublepoint(){
	this.id="BN6Doublepoint";
	this.name="Doublepoint";
	this.image=BN6DoublepointIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=50;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.panelsGivenUp = (new BN6Colorpoint()).selfSteal(attacker, defender);
		if(attacker.name === player.name){
			if(HAND[1] && HAND[1].damage > 0){
				HAND[1].boostDamage = HAND[1].boostDamage + 20 * this.panelsGivenUp;
			}
		}
	};
}

// -------------- Mega --------------

function BN6Roll(){
	this.id="BN6Roll";
	this.name="Roll";
	this.image=BN6RollIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=20;
	this.rank="mega";
	this.damage=20;
	this.boostDamage=0;
	this.hits=3;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			this.targetPlayer = playerOne;
			this.xDirection = 1;
			if(attacker.name == "one"){
				this.targetPlayer = playerTwo;
				this.xDirection = -1;
			}
			if(!board.cellHasSolidObject(this.targetPlayer.x + this.xDirection, this.targetPlayer.y)){
				return defender.x === this.targetPlayer.x && defender.y === this.targetPlayer.y;
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){
		(new BN6Roll()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		attacker.hp = attacker.hp + (this.damage * this.hits)/2;
		if(attacker.hp > playerHP){
			attacker.hp = playerHP;
		}
	};
}

function BN6RollV2(){
	this.id="BN6RollV2";
	this.name="RollV2";
	this.image=BN6RollV2IMG;
	this.code=["R"];
	this.mb=40;
	this.rank="mega";
	this.damage=40;
	this.boostDamage=0;
	this.hits=3;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Roll()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new BN6RollV2()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		attacker.hp = attacker.hp + (this.damage * this.hits)/2;
		if(attacker.hp > playerHP){
			attacker.hp = playerHP;
		}
	};
}

function BN6RollV3(){
	this.id="BN6RollV3";
	this.name="RollV3";
	this.image=BN6RollV3IMG;
	this.code=["R"];
	this.mb=60;
	this.rank="mega";
	this.damage=60;
	this.boostDamage=0;
	this.hits=3;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Roll()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new BN6RollV3()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		attacker.hp = attacker.hp + (this.damage * this.hits)/2;
		if(attacker.hp > playerHP){
			attacker.hp = playerHP;
		}
	};
}

function BN6Blues(){
	this.id="BN6Blues";
	this.name="Blues";
	this.image=BN6BluesIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=41;
	this.rank="mega";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			this.x = playerTwo.x + 1;
			this.y = playerTwo.y;
			if(attacker.name == "one"){
				this.x = playerTwo.x - 1;
				this.y = playerTwo.y;
			}
			if(board.isCellPlayerValid(this.x, this.y)){
				return (new BN6MachineSword()).wideSwordJump(attacker, defender, this.x, this.y);
			}
			this.y = this.y-1;
			if(board.isCellPlayerValid(this.x, this.y)){
				return (new BN6MachineSword()).wideSwordJump(attacker, defender, this.x, this.y);
			}
			this.y = this.y+2;
			if(board.isCellPlayerValid(this.x, this.y)){
				return (new BN6MachineSword()).wideSwordJump(attacker, defender, this.x, this.y);
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6BluesEX(){
	this.id="BN6BluesEX";
	this.name="BluesEX";
	this.image=BN6BluesEXIMG;
	this.code=["B"];
	this.mb=53;
	this.rank="mega";
	this.damage=170;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new BN6Blues()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6BluesSP(){
	this.id="BN6BluesSP";
	this.name="BluesSP";
	this.image=BN6BluesSPIMG;
	this.code=["B"];
	this.mb=68;
	this.rank="mega";
	this.damage=190;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new BN6Blues()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6Aquaman(){
	this.id="BN6Aquaman";
	this.name="Aquaman";
	this.image=BN6AquamanIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=42;
	this.rank="mega";
	this.damage=50;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			this.backrow = cells.length;
			this.albackrow = cells.length - 1;
			this.xDirection = -1;
			this.targetPlayer = playerOne;
			if(attacker.name === playerOne.name){
				this.backrow = 0;
				this.albackrow = 1;
				this.xDirection = 1;
				this.targetPlayer = playerTwo;
			}

			if(attacker.x === this.backrow || attacker.x === this.albackrow){
				this.hits = 2;
				this.tempX = this.targetPlayer.x - this.xDirection;
				this.tempY = this.targetPlayer.y;
				this.widHit = (new BN6MachineSword()).wideSwordJump(attacker, defender, this.tempX, this.tempY);
				if(this.widHit){
					return true;
				}
				if(this.xDirection === 1){
					return attacker.x < defender.x && attacker.y === defender.y && defender.x < this.targetPlayer.x;
				}
				else{
					return attacker.x > defender.x && attacker.y === defender.y && defender.x > this.targetPlayer.x;
				}
			}
			else{
				this.hits = 1;
				return (attacker.x + 2 === defender.x || attacker.x + 3 === defender.x) && attacker.y === defender.y;
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){
		(new BN6Aquaman()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		this.backrow = cells.length;
		this.albackrow = cells.length - 1;
		this.xDirection = -1;
		if(attacker.name === playerOne.name){
			this.backrow = 0;
			this.albackrow = 1;
			this.xDirection = 1;
		}

		if(attacker.x !== this.backrow && attacker.x !== this.albackrow){
			board.convertPanel(attacker.x + 2, attacker.y, PANELTYPE.CRACKED);
		}
	};
}

function BN6AquamanEX(){
	this.id="BN6AquamanEX";
	this.name="AquamanEX";
	this.image=BN6AquamanEXIMG;
	this.code=["A"];
	this.mb=56;
	this.rank="mega";
	this.damage=60;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		this.localBN6Aquaman = new BN6Aquaman();
		this.hitbool = this.localBN6Aquaman.hithuh(attacker, defender);
		this.hits = this.localBN6Aquaman.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){
		(new BN6Aquaman()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new BN6Aquaman()).effectmiss(attacker, defender);
	};
}

function BN6AquamanSP(){
	this.id="BN6AquamanSP";
	this.name="AquamanSP";
	this.image=BN6AquamanSPIMG;
	this.code=["A"];
	this.mb=78;
	this.rank="mega";
	this.damage=120;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		this.localBN6Aquaman = new BN6Aquaman();
		this.hitbool = this.localBN6Aquaman.hithuh(attacker, defender);
		this.hits = this.localBN6Aquaman.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){
		(new BN6Aquaman()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new BN6Aquaman()).effectmiss(attacker, defender);
	};
}

function BN6Tomahawkman(){
	this.id="BN6Tomahawkman";
	this.name="Tomahawkman";
	this.image=BN6TomahawkmanIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=40;
	this.rank="mega";
	this.damage=140;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.wood, ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new BN6VarSword()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6TomahawkmanEX(){
	this.id="BN6TomahawkmanEX";
	this.name="TomahawkmanEX";
	this.image=BN6TomahawkmanEXIMG;
	this.code=["T"];
	this.mb=40;
	this.rank="mega";
	this.damage=160;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.wood, ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new BN6Tomahawkman()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6TomahawkmanSP(){
	this.id="BN6TomahawkmanSP";
	this.name="TomahawkmanSP";
	this.image=BN6TomahawkmanSPIMG;
	this.code=["T"];
	this.mb=40;
	this.rank="mega";
	this.damage=280;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.wood, ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new BN6Tomahawkman()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6Tenguman(){
	this.id="BN6Tenguman";
	this.name="Tenguman";
	this.image=BN6TengumanIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=43;
	this.rank="mega";
	this.damage=70;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		this.hits = 0;
		if(defender.invis < 1){
			if(defender.y > 0){
				this.hits++;
			}
			this.xArray = [4, 3, 2, 3, 2, 1, 2, 1, 0];
			if(attacker.name === playerOne.name){
				this.xArray = [1, 2, 3, 2, 3, 4, 3, 4, 5];
			}
			this.yArray = [0, 0, 0, 1, 1, 1, 2, 2, 2];
			for(var i = 0; i < this.xArray.length; i++){
				if(defender.x === this.xArray[i] && defender.y === this.yArray[i]){
					this.hits++;
					break;
				}
			}
			if(this.hits > 0){
				return true;
			}
		}
		this.hits = 1;
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6TengumanEX(){
	this.id="BN6TengumanEX";
	this.name="TengumanEX";
	this.image=BN6TengumanEXIMG;
	this.code=["T"];
	this.mb=61;
	this.rank="mega";
	this.damage=90;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		this.localBN6Tenguman = new BN6Tenguman();
		this.hitbool = this.localBN6Tenguman.hithuh(attacker, defender);
		this.hits = this.localBN6Tenguman.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6TengumanSP(){
	this.id="BN6TengumanSP";
	this.name="TengumanSP";
	this.image=BN6TengumanSPIMG;
	this.code=["T"];
	this.mb=74;
	this.rank="mega";
	this.damage=160;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		this.localBN6Tenguman = new BN6Tenguman();
		this.hitbool = this.localBN6Tenguman.hithuh(attacker, defender);
		this.hits = this.localBN6Tenguman.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6Groundman(){
	this.id="BN6Groundman";
	this.name="Groundman";
	this.image=BN6GroundmanIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=41;
	this.rank="mega";
	this.damage=60;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.hits = 1;
		if(attacker.y === defender.y){
			return (new BN6Cannon()).hithuh(attacker, defender);
		}
		this.fakeX = -1;
		this.targetPlayer = playerOne;
		if(attacker.name === playerOne.name){
			this.fakeX = 6;
			this.targetPlayer = playerTwo;
		}
		this.fakeDefender = {
			x: this.fakeX,
			y: attacker.y,
			invis: 0,
			guard: null
		};
		if((new BN6Cannon()).hithuh(attacker, this.fakeDefender)){
			this.hits = 3;
			if(defender.invis < 1){
				return this.targetPlayer.x === defender.x && this.targetPlayer.y === defender.y;
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6GroundmanEX(){
	this.id="BN6GroundmanEX";
	this.name="GroundmanEX";
	this.image=BN6GroundmanEXIMG;
	this.code=["G"];
	this.mb=66;
	this.rank="mega";
	this.damage=70;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.localBN6GroundMan = new BN6Groundman();
		this.hitbool = this.localBN6GroundMan.hithuh(attacker, defender);
		this.hits = this.localBN6GroundMan.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6GroundmanSP(){
	this.id="BN6GroundmanSP";
	this.name="GroundmanSP";
	this.image=BN6GroundmanSPIMG;
	this.code=["G"];
	this.mb=66;
	this.rank="mega";
	this.damage=130;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.localBN6GroundMan = new BN6Groundman();
		this.hitbool = this.localBN6GroundMan.hithuh(attacker, defender);
		this.hits = this.localBN6GroundMan.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6Dustman(){
	this.id="BN6Dustman";
	this.name="Dustman";
	this.image=BN6DustmanIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=39;
	this.rank="mega";
	this.damage=110;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.hits = 1;
		if(defender.invis < 1){
			for(var x = 0; x < cells.length; x++){
				for(var y = 0; y < cells[x].length; y++){
					if(board.cellHasSolidObject(x, y)){
						this.hits++;
					}
				}
			}
			if(attacker.name === playerOne.name){
				return attacker.x < defender.x && attacker.y === defender.y;
			}
			else{
				return attacker.x > defender.x && attacker.y === defender.y;
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){
		board.convertToPanel(defender.x, defender.y, PANELTYPE.CRACKED);
		for(var x = 0; x < cells.length; x++){
			for(var y = 0; y < cells[x].length; y++){
				if(board.cellHasSolidObject(x, y)){
					cells[x][y].object = [];
				}
			}
		}
	};
	this.effectmiss= function(attacker, defender){
		this.xEnd = 0;
		if(attacker.name === playerOne.name){
			this.xEnd = 5;
		}
		board.convertToPanel(this.xEnd, attacker.y, PANELTYPE.BROKEN);
		for(var x = 0; x < cells.length; x++){
			for(var y = 0; y < cells[x].length; y++){
				if(board.cellHasSolidObject(x, y)){
					cells[x][y].object = [];
				}
			}
		}
	};
}

function BN6DustmanEX(){
	this.id="BN6DustmanEX";
	this.name="DustmanEX";
	this.image=BN6DustmanEXIMG;
	this.code=["D"];
	this.mb=56;
	this.rank="mega";
	this.damage=130;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.localBN6Dustman = new BN6Dustman();
		this.hitbool = this.localBN6Dustman.hithuh(attacker, defender);
		this.hits = this.localBN6Dustman.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){
		(new BN6Dustman()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new BN6Dustman()).effectmiss(attacker, defender);
	};
}

function BN6DustmanSP(){
	this.id="BN6DustmanSP";
	this.name="DustmanSP";
	this.image=BN6DustmanSPIMG;
	this.code=["D"];
	this.mb=74;
	this.rank="mega";
	this.damage=200;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.localBN6Dustman = new BN6Dustman();
		this.hitbool = this.localBN6Dustman.hithuh(attacker, defender);
		this.hits = this.localBN6Dustman.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){
		(new BN6Dustman()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new BN6Dustman()).effectmiss(attacker, defender);
	};
}

function BN6Heatman(){
	this.id="BN6Heatman";
	this.name="Heatman";
	this.image=BN6HeatmanIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=32;
	this.rank="mega";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === playerOne.name){
			this.xDirection = 1;
		}
		if((new BN6Sword()).hithuh(attacker, defender)){
			return true;
		}
		attacker.x = attacker.x + this.xDirection;
		if((new BN6WideSword()).hithuh(attacker, defender)){
			attacker.x = attacker.x - this.xDirection;
			return true;
		}
		attacker.x = attacker.x + this.xDirection;
		if((new BN6WideSword()).hithuh(attacker, defender)){
			attacker.x = attacker.x - this.xDirection*2;
			return true;
		}
		attacker.x = attacker.x - this.xDirection*2;
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6HeatmanEX(){
	this.id="BN6HeatmanEX";
	this.name="HeatmanEX";
	this.image=BN6HeatmanEXIMG;
	this.code=["H"];
	this.mb=55;
	this.rank="mega";
	this.damage=130;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new BN6Heatman()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6HeatmanSP(){
	this.id="BN6HeatmanSP";
	this.name="HeatmanSP";
	this.image=BN6HeatmanSPIMG;
	this.code=["H"];
	this.mb=70;
	this.rank="mega";
	this.damage=260;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new BN6Heatman()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6Elecman(){
	this.id="BN6Elecman";
	this.name="Elecman";
	this.image=BN6ElecmanIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=38;
	this.rank="mega";
	this.damage=120;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			this.hits = 0;
			this.x1 = attacker.x - 1;
			this.x2 = attacker.x - 2;
			if(attacker.name === playerOne.name){
				this.x1 = attacker.x + 1;
				this.x2 = attacker.x + 2;
			}
			if(cells[this.x1]){
				for(var y = 0; y < cells[this.x1].length; y++){
					if(board.cellHasSolidObject(this.x1, y)){
						if(cards.around(this.x1, y, defender)){
							this.hits++;
						}
					}
					else if(this.x1 === defender.x && y === defender.y){
						this.hits++;
					}
				}
			}
			if(cells[this.x2]){
				for(var y = 0; y < cells[this.x2].length; y++){
					if(board.cellHasSolidObject(this.x2, y)){
						if(cards.around(this.x2, y, defender)){
							this.hits++;
						}
					}
					else if(this.x2 === defender.x && y === defender.y){
						this.hits++;
					}
				}
			}

			if(this.hits > 0){
				return true;
			}
			else{
				this.hits = 1;
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6ElecmanEX(){
	this.id="BN6ElecmanEX";
	this.name="ElecmanEX";
	this.image=BN6ElecmanEXIMG;
	this.code=["E"];
	this.mb=52;
	this.rank="mega";
	this.damage=140;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		this.localBN6Elecman = new BN6Elecman();
		this.hitbool = this.localBN6Elecman.hithuh(attacker, defender);
		this.hits = this.localBN6Elecman.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6ElecmanSP(){
	this.id="BN6ElecmanSP";
	this.name="ElecmanSP";
	this.image=BN6ElecmanSPIMG;
	this.code=["E"];
	this.mb=79;
	this.rank="mega";
	this.damage=210;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		this.localBN6Elecman = new BN6Elecman();
		this.hitbool = this.localBN6Elecman.hithuh(attacker, defender);
		this.hits = this.localBN6Elecman.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6Slashman(){
	this.id="BN6Slashman";
	this.name="Slashman";
	this.image=BN6SlashmanIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=42;
	this.rank="mega";
	this.damage=80;
	this.addDamage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		this.numhits = (new BN6Slashman()).kunaiHits(attacker, defender);
		this.addDamage = 10 * this.numhits;
		return (new BN6Blues()).hithuh(attacker, defender);
	};
	this.kunaiHits = function(attacker, defender){
		this.numhits = 0;
		for(var i = 0; i < cells.length; i++){
			for(var j = 0; j < cells[i].length; j++){
				if(attacker.name === playerOne.name){
					this.targetSide = SIDE.LEFT;
					if(i > attacker.x && cells[i][j].side === this.targetSide){
						this.numhits++;
					}
				}
				else{
					this.targetSide = SIDE.RIGHT;
					if(i < attacker.x && cells[i][j].side === this.targetSide){
						this.numhits++;
					}
				}
			}
		}
		return this.numhits;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6SlashmanEX(){
	this.id="BN6SlashmanEX";
	this.name="SlashmanEX";
	this.image=BN6SlashmanEXIMG;
	this.code=["S"];
	this.mb=42;
	this.rank="mega";
	this.damage=100;
	this.addDamage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		this.numhits = (new BN6Slashman()).kunaiHits(attacker, defender);
		this.addDamage = 20 * this.numhits;
		return (new BN6Blues()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6SlashmanSP(){
	this.id="BN6SlashmanSP";
	this.name="SlashmanSP";
	this.image=BN6SlashmanSPIMG;
	this.code=["S"];
	this.mb=42;
	this.rank="mega";
	this.damage=220;
	this.addDamage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		this.numhits = (new BN6Slashman()).kunaiHits(attacker, defender);
		this.addDamage = 20 * this.numhits;
		return (new BN6Blues()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6Killerman(){
	this.id="BN6Killerman";
	this.name="Killerman";
	this.image=BN6KillermanIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=51;
	this.rank="mega";
	this.damage=120;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.cursor, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.xDirection = -1;
		this.targetPlayer = playerOne;
		if(attacker.name === playerOne.name){
			this.xDirection = 1;
			this.targetPlayer = playerTwo;
		}
		if((this.targetPlayer.name === playerOne.name && attacker.x > defender.x) || (this.targetPlayer.name === playerTwo.name && attacker.x < defender.x)){
			if(Math.abs(this.targetPlayer.x - attacker.x) === this.targetPlayer.y - attacker.y){
				if(Math.abs(defender.x - attacker.x) === defender.y - attacker.y){
					return true;
				}
				return false;
			}
			else if(Math.abs(this.targetPlayer.x - attacker.x) === attacker.y - this.targetPlayer.y){
				if(Math.abs(defender.x - attacker.x) === attacker.y - defender.y){
					return true;
				}
				return false;
			}
			else{
				return attacker.y === defender.y;
			}
		}
	};
	this.effecthit= function(attacker, defender){
		defender.stunned = 2;
		defender.invis = 0;
	};
	this.effectmiss= function(attacker, defender){};
}

function BN6KillermanEX(){
	this.id="BN6KillermanEX";
	this.name="KillermanEX";
	this.image=BN6KillermanEXIMG;
	this.code=["K"];
	this.mb=65;
	this.rank="mega";
	this.damage=140;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.cursor, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new BN6Killerman()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new BN6Killerman()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){};
}

function BN6KillermanSP(){
	this.id="BN6KillermanSP";
	this.name="KillermanSP";
	this.image=BN6KillermanSPIMG;
	this.code=["K"];
	this.mb=79;
	this.rank="mega";
	this.damage=210;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.cursor, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new BN6Killerman()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new BN6Killerman()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){};
}

function BN6Chargeman(){
	this.id="BN6Chargeman";
	this.name="Chargeman";
	this.image=BN6ChargemanIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=42;
	this.rank="mega";
	this.damage=60;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.fire, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			this.xCarDirection = 1;
			this.xEnd = 6;
			if(attacker.name === playerOne.name){
				this.xCarDirection = -1;
				this.xEnd = -1;
			}
			
			this.hits = 1;
			this.xStart = attacker.x + this.xCarDirection;
			
			for(var x = this.xStart; x !== this.xEnd; x = x + this.xCarDirection){
				if(board.isCellPlayerValid(x, attacker.y)){
					this.hits++;
				}
				else{
					break;
				}
			}
			
			return (new BN6RollingLog1()).oneloghit(attacker, defender, attacker.y, attacker.y);
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6ChargemanEX(){
	this.id="BN6ChargemanEX";
	this.name="ChargemanEX";
	this.image=BN6ChargemanEXIMG;
	this.code=["C"];
	this.mb=63;
	this.rank="mega";
	this.damage=70;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.fire, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.localBN6Chargeman = new BN6Chargeman()
		this.hitbool = this.localBN6Chargeman.hithuh(attacker, defender);
		this.hits = this.localBN6Chargeman.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6ChargemanSP(){
	this.id="BN6ChargemanSP";
	this.name="ChargemanSP";
	this.image=BN6ChargemanSPIMG;
	this.code=["C"];
	this.mb=81;
	this.rank="mega";
	this.damage=130;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.fire, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.localBN6Chargeman = new BN6Chargeman()
		this.hitbool = this.localBN6Chargeman.hithuh(attacker, defender);
		this.hits = this.localBN6Chargeman.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6Blastman(){
	this.id="BN6Blastman";
	this.name="Blastman";
	this.image=BN6BlastmanIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=30;
	this.rank="mega";
	this.damage=120;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		this.tempX = attacker.x;
		attacker.x = 6;
		if(attacker.name === playerOne.name){
			attacker.x = -1;
		}
		if((new BN6Cannon()).hithuh(attacker, defender)){
			attacker.x = this.tempX;
			return true;
		}
		attacker.y = attacker.y + 1;
		if((new BN6Cannon()).hithuh(attacker, defender)){
			attacker.x = this.tempX;
			attacker.y = attacker.y - 1;
			return true;
		}
		attacker.y = attacker.y - 2;
		if((new BN6Cannon()).hithuh(attacker, defender)){
			attacker.x = this.tempX;
			attacker.y = attacker.y + 1;
			return true;
		}
		attacker.x = this.tempX;
		attacker.y = attacker.y + 1;
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6BlastmanEX(){
	this.id="BN6BlastmanEX";
	this.name="BlastmanEX";
	this.image=BN6BlastmanEXIMG;
	this.code=["B"];
	this.mb=49;
	this.rank="mega";
	this.damage=140;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new BN6Blastman()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6BlastmanSP(){
	this.id="BN6BlastmanSP";
	this.name="BlastmanSP";
	this.image=BN6BlastmanSPIMG;
	this.code=["B"];
	this.mb=68;
	this.rank="mega";
	this.damage=250;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new BN6Blastman()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6Diveman(){
	this.id="BN6Diveman";
	this.name="Diveman";
	this.image=BN6DivemanIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=45;
	this.rank="mega";
	this.damage=130;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === playerOne.name){
			this.xDirection = 1;
		}
		this.xCol = (new AREAGRAB()).affectedColumn(attacker, defender) - this.xDirection;
		this.tempX = attacker.x;
		attacker.x = this.xCol;
		this.hitbool = (new BN6VarSword()).hithuh(attacker, defender);
		attacker.x = this.tempX;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6DivemanEX(){
	this.id="BN6DivemanEX";
	this.name="DivemanEX";
	this.image=BN6DivemanEXIMG;
	this.code=["D"];
	this.mb=60;
	this.rank="mega";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new BN6Diveman()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6DivemanSP(){
	this.id="BN6DivemanSP";
	this.name="DivemanSP";
	this.image=BN6DivemanSPIMG;
	this.code=["D"];
	this.mb=75;
	this.rank="mega";
	this.damage=270;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new BN6Diveman()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6Circusman(){
	this.id="BN6Circusman";
	this.name="Circusman";
	this.image=BN6CircusmanIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=42;
	this.rank="mega";
	this.damage=20;
	this.boostDamage=0;
	this.hits=6;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6MiniBomb()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6CircusmanEX(){
	this.id="BN6CircusmanEX";
	this.name="CircusmanEX";
	this.image=BN6CircusmanEXIMG;
	this.code=["C"];
	this.mb=64;
	this.rank="mega";
	this.damage=25;
	this.boostDamage=0;
	this.hits=6;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Circusman()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6CircusmanSP(){
	this.id="BN6CircusmanSP";
	this.name="CircusmanSP";
	this.image=BN6CircusmanSPIMG;
	this.code=["C"];
	this.mb=64;
	this.rank="mega";
	this.damage=55;
	this.boostDamage=0;
	this.hits=6;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Circusman()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6Judgeman(){
	this.id="BN6Judgeman";
	this.name="Judgeman";
	this.image=BN6JudgemanIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=52;
	this.rank="mega";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		this.xDiff = [3, 2, 1];
		if(attacker.name === playerOne.name){
			this.xDiff = [-3, -2, -1];
		}
		if(attacker.y === defender.y){
			if(this.xDiff.includes(attacker.x - defender.x)){
				return true;
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){
		defender.stunned = 2;
		(new BN6Judgeman()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new BN6GrabBanish()).effectmiss(attacker, defender);
	};
}

function BN6JudgemanEX(){
	this.id="BN6JudgemanEX";
	this.name="JudgemanEX";
	this.image=BN6JudgemanEXIMG;
	this.code=["J"];
	this.mb=62;
	this.rank="mega";
	this.damage=120;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new BN6Judgeman()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new BN6Judgeman()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new BN6Judgeman()).effectmiss(attacker, defender);
	};
}

function BN6JudgemanSP(){
	this.id="BN6JudgemanSP";
	this.name="JudgemanSP";
	this.image=BN6JudgemanSPIMG;
	this.code=["J"];
	this.mb=72;
	this.rank="mega";
	this.damage=190;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new BN6Judgeman()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new BN6Judgeman()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new BN6Judgeman()).effectmiss(attacker, defender);
	};
}

var BN6CARDS = [new BN6Cannon(), new BN6HiCannon(), new BN6MegaCannon(), new BN6AirShot(), 
				new BN6Vulcan1(), new BN6Vulcan2(), new BN6Vulcan3(), new BN6SuperVulcan(), 
				new BN6Spreader1(), new BN6Spreader2(), new BN6Spreader3(), new BN6BigTank1(), 
				new BN6BigTank2(), new BN6BigTank3(), new BN6GunSol1(), new BN6GunSol2(), 
				new BN6GunSol3(), new BN6Yoyo(), new BN6HellBurner1(), new BN6HellBurner2(), 
				new BN6HellBurner3(), new BN6WideShot(), new BN6TrainArrow1(), new BN6TrainArrow2(), 
				new BN6TrainArrow3(), new BN6BubbleStar1(), new BN6BubbleStar2(), new BN6BubbleStar3(), 
				new BN6Thunder(), new BN6DollThunder1(), new BN6DollThunder2(), new BN6DollThunder3(), 
				new BN6ElecPulse1(), new BN6ElecPulse2(), new BN6ElecPulse3(), new BN6CornShot1(), 
				new BN6CornShot2(), new BN6CornShot3(), new BN6RiskyHoney1(), new BN6RiskyHoney2(), 
				new BN6RiskyHoney3(), new BN6RollingLog1(), new BN6RollingLog2(), new BN6RollingLog3(), 
				new BN6IronShell1(), new BN6IronShell2(), new BN6IronShell3(), new BN6AuraHead1(), 
				new BN6AuraHead2(), new BN6AuraHead3(), new BN6AirHock(), new BN6DrillArm(), 
				new BN6Tornado(), new BN6NoiseStorm(), new BN6MachineGun1(), new BN6MachineGun2(), 
				new BN6MachineGun3(), new BN6MiniBomb(), new BN6BigBomb(), new BN6EnergyBomb(), 
				new BN6MegEnBomb(), new BN6FlashBomb1(), new BN6FlashBomb2(), new BN6FlashBomb3(), 
				new BN6BlackBomb(), new BN6BugBomb(), new BN6GrassSeed(), new BN6IceSeed(), 
				new BN6PoisonSeed(), new BN6Sword(), new BN6WideSword(), new BN6LongSword(), 
				new BN6WideBlade(), new BN6LongBlade(), new BN6FireSword(), new BN6AquaSword(), 
				new BN6ElecSword(), new BN6WoodSword(), new BN6WindRacket(), new BN6Fumikomizan(), 
				new BN6VarSword(), new BN6NeoVarSword(), new BN6Kunai(), new BN6Muramasa(), 
				new BN6MachineSword(), new BN6ElementSword(), new BN6AssassinSword(), new BN6CrackShoot(), 
				new BN6DoubleShoot(), new BN6TripleShoot(), new BN6ReflectMet1(), new BN6ReflectMet2(), 
				new BN6ReflectMet3(), new BN6WaveArm1(), new BN6WaveArm2(), new BN6WaveArm3(), 
				new BN6SandWorm1(), new BN6SandWorm2(), new BN6SandWorm3(), new BN6SummonBlack1(), 
				new BN6SummonBlack2(), new BN6SummonBlack3(), new BN6Snake(), new BN6NumberBall(), 
				new BN6FirePunch1(), new BN6FirePunch2(), new BN6FirePunch3(), new BN6BurnScare1(),	
				new BN6BurnScare2(), new BN6BurnScare3(), new BN6Meteors(), new BN6AquaNeedle1(), 
				new BN6AquaNeedle2(), new BN6AquaNeedle3(), new BN6BlizzardBall(), new BN6KillerSensor1(), 
				new BN6KillerSensor2(), new BN6KillerSensor3(), new BN6Boomerang(), new BN6HiBoomerang(), 
				new BN6MegaBoomerang(), new BN6Lance(), new BN6HeatDragon(), new BN6ElecDragon(), 
				new BN6AquaDragon(), new BN6WoodDragon(), new BN6GolemPunch1(), new BN6GolemPunch2(), 
				new BN6GolemPunch3(), new BN6JusticeOne(), new BN6AirWheel1(), new BN6AirWheel2(), 
				new BN6AirWheel3(), new BN6Wind(), new BN6Fan(), new BN6Magnum(), 
				new BN6CircGun(), new BN6RockCube(), new BN6LittleBoiler1(), new BN6LittleBoiler2(), 
				new BN6LittleBoiler3(), new BN6AirRaid1(), new BN6AirRaid2(), new BN6AirRaid3(), 
				new BN6TimeBomb1(), new BN6TimeBomb2(), new BN6TimeBomb3(), new BN6Mine(), 
				new BN6Fanfare(), new BN6Discord(), new BN6Timpani(), new BN6Silence(), 
				new BN6VDoll(), new BN6Guardian(), new BN6Anubis(), new BN6Recover10(), 
				new BN6Recover30(), new BN6Recover50(), new BN6Recover80(), new BN6Recover120(), 
				new BN6Recover150(), new BN6Recover200(), new BN6Recover300(), new BN6PanelGrab(), 
				new BN6AreaGrab(), new BN6GrabBanish(), new BN6GrabRevenge(), new BN6PanelReturn(), 
				new BN6DeathMatch(), new BN6HolyPanel(), new BN6Sanctuary(), new BN6ComingRoad(), 
				new BN6GoingRoad(), new BN6Slowgauge(), new BN6Fastgauge(), new BN6Fullcust(), 
				new BN6BusterUp(), new BN6BugFix(), new BN6Invis(), new BN6Barrier(), 
				new BN6Barrier100(), new BN6Barrier200(), new BN6BubbleWrap(), new BN6LifeAura(), 
				new BN6MagneCoil(), new BN6ColonelsArmy(), new BN6ElementTrap(), new BN6AntiNavi(), 
				new BN6AntiDmg(), new BN6AntiSword(), new BN6AntiRecover(), new BN6Whitepill(), 
				new BN6Uninstall(), new BN6CopyDamage(), new BN6LifeSynchro(), new BN6Attack10(), 
				new BN6Attack30(), new BN6Navi20(), new BN6Colorpoint(), new BN6Doublepoint(),

				new BN6Roll(), new BN6RollV2(), new BN6RollV3(), 
				new BN6Blues(), new BN6BluesEX(), new BN6BluesSP(),
				new BN6Aquaman(), new BN6AquamanEX(), new BN6AquamanSP(), 
				new BN6Tomahawkman(), new BN6TomahawkmanEX(), new BN6TomahawkmanSP(),
				new BN6Tenguman(), new BN6TengumanEX(), new BN6TengumanSP(), 
				new BN6Groundman(), new BN6GroundmanEX(), new BN6GroundmanSP(),
				new BN6Dustman(), new BN6DustmanEX(), new BN6DustmanSP(), 
				new BN6Heatman(), new BN6HeatmanEX(), new BN6HeatmanSP(), 
				new BN6Elecman(), new BN6ElecmanEX(), new BN6ElecmanSP(), 
				new BN6Slashman(), new BN6SlashmanEX(), new BN6SlashmanSP(), 
				new BN6Killerman(), new BN6KillermanEX(), new BN6KillermanSP(), 
				new BN6Chargeman(), new BN6ChargemanEX(), new BN6ChargemanSP(), 
				new BN6Blastman(), new BN6BlastmanEX(), new BN6BlastmanSP(), 
				new BN6Diveman(), new BN6DivemanEX(), new BN6DivemanSP(), 
				new BN6Circusman(), new BN6CircusmanEX(), new BN6CircusmanSP(), 
				new BN6Judgeman(), new BN6JudgemanEX(), new BN6JudgemanSP()];

function Bn6Cards(){

}
