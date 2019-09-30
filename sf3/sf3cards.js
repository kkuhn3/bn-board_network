
// -------------- Standard --------------
function SF3Cannon(){
	this.id="SF3Cannon";
	this.name="Cannon";
	this.image=SF3001_cannon;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=40;
	this.boostDamage=0;
	this.hits=1;
	this.priority=7;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new CANNON1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3PlusCannon(){
	this.id="SF3PlusCannon";
	this.name="PlusCannon";
	this.image=SF3002_pluscannon;
	this.code=["B", "D", "J"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=7;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			if(attacker.name === playerOne.name){
				for(var i=1; i <= 5 - attacker.x; i++){
					if(attacker.y === defender.y && attacker.x + i === defender.x){
						return true;
					}
					if(board.cellHasSolidObject(attacker.x + i, attacker.y)){
						if(attacker.y === defender.y && (defender.x === attacker.x + i + 1)){
							return true;
						}
						return Math.abs(attacker.y - defender.y) === 1 && defender.x === attacker.x + i;
					}
				}
			}
			else{
				for(var i=1; i <= attacker.x; i++){
					if(attacker.y === defender.y && attacker.x - i === defender.x){
						return true;
					}
					if(board.cellHasSolidObject(attacker.x - i, attacker.y)){
						if(attacker.y === defender.y && (defender.x === attacker.x - i - 1)){
							return true;
						}
						return Math.abs(attacker.y - defender.y) === 1 && defender.x === attacker.x - i;
					}
				}
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3HeavyCannon(){
	this.id="SF3HeavyCannon";
	this.name="HeavyCannon";
	this.image=SF3003_heavycannon;
	this.code=["D", "G", "I"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=160;
	this.boostDamage=0;
	this.hits=1;
	this.priority=7;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			if(attacker.name === playerOne.name){
				for(var i=1; i <= 5 - attacker.x; i++){
					if(attacker.y === defender.y && attacker.x + i === defender.x){
						return true;
					}
					if(board.cellHasSolidObject(attacker.x + i, attacker.y)){
						if(Math.abs(attacker.y - defender.y) < 2 && (defender.x === attacker.x + i + 1)){
							return true;
						}
						return Math.abs(attacker.y - defender.y) < 2 && defender.x === attacker.x + i;
					}
				}
			}
			else{
				for(var i=1; i <= attacker.x; i++){
					if(attacker.y === defender.y && attacker.x - i === defender.x){
						return true;
					}
					if(board.cellHasSolidObject(attacker.x - i, attacker.y)){
						if(Math.abs(attacker.y - defender.y) < 2 && (defender.x === attacker.x - i - 1)){
							return true;
						}
						return Math.abs(attacker.y - defender.y) < 2 && defender.x === attacker.x - i;
					}
				}
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3PlasmaGun(){
	this.id="SF3PlasmaGun";
	this.name="PlasmaGun";
	this.image=SF3004_plasmagun;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=30;
	this.boostDamage=0;
	this.hits=1;
	this.priority=7;
	this.elements=[];
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

function SF3AirSpread1(){
	this.id="SF3AirSpread1";
	this.name="AirSpread1";
	this.image=SF3005_airspread1;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=10;
	this.boostDamage=0;
	this.hits=3;
	this.priority=6;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			if(attacker.name === playerOne.name){
				for(var i=1; i <= 5 - attacker.x; i++){
					if(attacker.y === defender.y && attacker.x + i === defender.x){
						return true;
					}
					if(board.cellHasSolidObject(attacker.x + i, attacker.y)){
						return Math.abs(attacker.y - defender.y) === 1 && (defender.x === attacker.x + i + 1);
					}
				}
			}
			else{
				for(var i=1; i <= attacker.x; i++){
					if(attacker.y === defender.y && attacker.x - i === defender.x){
						return true;
					}
					if(board.cellHasSolidObject(attacker.x - i, attacker.y)){
						return Math.abs(attacker.y - defender.y) === 1 && (defender.x === attacker.x - i - 1);
					}
				}
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3AirSpread2(){
	this.id="SF3AirSpread2";
	this.name="AirSpread2";
	this.image=SF3006_airspread2;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=20;
	this.boostDamage=0;
	this.hits=3;
	this.priority=6;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			if(attacker.name === playerOne.name){
				for(var i=1; i <= 5 - attacker.x; i++){
					if(attacker.y === defender.y && attacker.x + i === defender.x){
						return true;
					}
					if(board.cellHasSolidObject(attacker.x + i, attacker.y)){
						if(Math.abs(attacker.y - defender.y) === 1 && (defender.x === attacker.x + i + 1)){
							return true;
						}
						return Math.abs(attacker.y - defender.y) === 1 && (defender.x === attacker.x + i - 1)
					}
				}
			}
			else{
				for(var i=1; i <= attacker.x; i++){
					if(attacker.y === defender.y && attacker.x - i === defender.x){
						return true;
					}
					if(board.cellHasSolidObject(attacker.x - i, attacker.y)){
						if(Math.abs(attacker.y - defender.y) === 1 && (defender.x === attacker.x - i - 1)){
							return true;
						}
						return Math.abs(attacker.y - defender.y) === 1 && (defender.x === attacker.x - i + 1)
					}
				}
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3AirSpread3(){
	this.id="SF3AirSpread3";
	this.name="AirSpread3";
	this.image=SF3007_airspread3;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=30;
	this.boostDamage=0;
	this.hits=3;
	this.priority=6;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Spreader1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3MadVulcan1(){
	this.id="SF3MadVulcan1";
	this.name="MadVulcan1";
	this.image=SF3008_madvulcan1;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=10;
	this.boostDamage=0;
	this.hits=5;
	this.priority=8;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Vulcan1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3MadVulcan2(){
	this.id="SF3MadVulcan2";
	this.name="MadVulcan2";
	this.image=SF3009_madvulcan2;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=10;
	this.boostDamage=0;
	this.hits=8;
	this.priority=8;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3MadVulcan1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3MadVulcan3(){
	this.id="SF3MadVulcan3";
	this.name="MadVulcan3";
	this.image=SF3010_madvulcan3;
	this.code=["A", "D", "L"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=10;
	this.boostDamage=0;
	this.hits=12;
	this.priority=8;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3MadVulcan1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3BlackInk(){
	this.id="SF3BlackInk";
	this.name="BlackInk";
	this.image=SF3011_blackink;
	this.code=["D", "G", "H"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=90;
	this.boostDamage=0;
	this.hits=1;
	this.priority=7;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Spreader1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		if(defender.guard === null){
			defender.blinded = 2;
		}
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3MiniGrenade(){
	this.id="SF3MiniGrenade";
	this.name="MiniGrenade";
	this.image=SF3012_minigrenade;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=10;
	this.boostDamage=0;
	this.hits=6;
	this.priority=9;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6MiniBomb()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3Sword(){
	this.id="SF3Sword";
	this.name="Sword";
	this.image=SF3013_sword;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=80;
	this.boostDamage=0;
	this.hits=1;
	this.priority=6;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new SWORD()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3WideSword(){
	this.id="SF3WideSword";
	this.name="WideSword";
	this.image=SF3014_widesword;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=80;
	this.boostDamage=0;
	this.hits=1;
	this.priority=6;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new WIDESWORD()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3LongSword(){
	this.id="SF3LongSword";
	this.name="LongSword";
	this.image=SF3015_longsword;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=80;
	this.boostDamage=0;
	this.hits=1;
	this.priority=6;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new LONGSWORD()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3Bushido1(){
	this.id="SF3Bushido1";
	this.name="Bushido1";
	this.image=SF3016_edogiriblade1;
	this.code=["J", "R", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=110;
	this.boostDamage=0;
	this.hits=1;
	this.priority=6;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		if(attacker.bushidoCount < 2){
			this.addDamage = null;
			return (new SF3Sword()).hithuh(attacker, defender);
		}
		if(attacker.bushidoCount === 2){
			this.addDamage = 50;
			return (new SF3WideSword()).hithuh(attacker, defender);
		}
		else{
			this.elements = [ELEMENTS.sword, ELEMENTS.wind]
			this.addDamage = 100;
			this.direction = -1;
			if(attacker.name === playerOne.name){
				this.direction = 1;
			}
			if(Math.abs(attacker.y - defender.y) < 2 && defender.x === attacker.x + this.direction){
				return true;
			}
			return Math.abs(attacker.y - defender.y) < 2 && defender.x === attacker.x + this.direction * 2
		}
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3Bushido2(){
	this.id="SF3Bushido2";
	this.name="Bushido2";
	this.image=SF3017_edogiriblade2;
	this.code=["H", "I", "J"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=140;
	this.boostDamage=0;
	this.hits=1;
	this.priority=6;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		this.bushido1 = new SF3Bushido1();
		this.hitbool = this.bushido1.hithuh(attacker, defender);
		this.addDamage = this.bushido1.addDamage;
		this.elements = this.bushido1.elements;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3Bushido3(){
	this.id="SF3Bushido3";
	this.name="Bushido3";
	this.image=SF3018_edogiriblade3;
	this.code=["J", "G", "L"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=170;
	this.boostDamage=0;
	this.hits=1;
	this.priority=6;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		this.bushido1 = new SF3Bushido1();
		this.hitbool = this.bushido1.hithuh(attacker, defender);
		this.addDamage = this.bushido1.addDamage;
		this.elements = this.bushido1.elements;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3GreatAxe(){
	this.id="SF3GreatAxe";
	this.name="GreatAxe";
	this.image=SF3019_greataxe;
	this.code=["H", "O", "V"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=140;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.sword, ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		return (new BN6VarSword()).hithuh(attacker,  defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3FlameAxe(){
	this.id="SF3FlameAxe";
	this.name="FlameAxe";
	this.image=SF3020_flameaxe;
	this.code=["D", "F", "I"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=200;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.sword, ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new SF3GreatAxe()).hithuh(attacker,  defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3WindyAttack1(){
	this.id="SF3WindyAttack1";
	this.name="WindyAttack1";
	this.image=SF3021_windyattack1;
	this.code=["J", "Q", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=90;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		return (new SF3WideSword()).hithuh(attacker,  defender);
	};
	this.effecthit= function(attacker, defender){
		(new BN6WindRacket()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new BN6WindRacket()).effecthit(attacker, defender);
	};
}

function SF3WindyAttack2(){
	this.id="SF3WindyAttack2";
	this.name="WindyAttack2";
	this.image=SF3022_windyattack2;
	this.code=["K", "P", "Q"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=120;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		return (new SF3WindyAttack1()).hithuh(attacker,  defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3WindyAttack1()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3WindyAttack1()).effectmiss(attacker, defender);
	};
}

function SF3WindyAttack3(){
	this.id="SF3WindyAttack3";
	this.name="WindyAttack3";
	this.image=SF3023_windyattack3;
	this.code=["Q", "R", "T"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		return (new SF3WindyAttack1()).hithuh(attacker,  defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3WindyAttack1()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3WindyAttack1()).effectmiss(attacker, defender);
	};
}

function SF3SynchroHook1(){
	this.id="SF3SynchroHook1";
	this.name="SynchroHook1";
	this.image=SF3024_synchrohook1;
	this.code=["Q", "U", "W"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		if((new SF3Sword()).hithuh(attacker,  defender)){
			return true;
		}
		this.xDir = -1;
		this.targetPlayer = playerOne;
		if(attacker.name === playerOne.name){
			this.xDir = 1;
			this.targetPlayer = playerTwo;
		}
		if(board.cellHasSolidObject(attacker.x + this.xDir, attacker.y)){
			if(defender.invis < 1){
				return defender.x === this.targetPlayer.x && defender.y === this.targetPlayer.y;
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3SynchroHook2(){
	this.id="SF3SynchroHook2";
	this.name="SynchroHook2";
	this.image=SF3025_synchrohook2;
	this.code=["C", "S", "U"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=130;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3SynchroHook1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3SynchroHook3(){
	this.id="SF3SynchroHook3";
	this.name="SynchroHook3";
	this.image=SF3026_synchrohook3;
	this.code=["B", "U", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3SynchroHook1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3DrillArm1(){
	this.id="SF3DrillArm1";
	this.name="DrillArm1";
	this.image=SF3027_drillarm1;
	this.code=["D", "H", "U"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=40;
	this.boostDamage=0;
	this.hits="1-3";
	this.priority=4;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.localDrillArm = new BN6DrillArm();
		this.hitbool = this.localDrillArm.hithuh(attacker, defender);
		this.hits = this.localDrillArm.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){
		(new BN6DrillArm()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3DrillArm2(){
	this.id="SF3DrillArm2";
	this.name="DrillArm2";
	this.image=SF3028_drillarm2;
	this.code=["C", "D", "Q"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=50;
	this.boostDamage=0;
	this.hits="1-3";
	this.priority=4;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.localDrillArm = new BN6DrillArm();
		this.hitbool = this.localDrillArm.hithuh(attacker, defender);
		this.hits = this.localDrillArm.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){
		(new BN6DrillArm()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3DrillArm3(){
	this.id="SF3DrillArm3";
	this.name="DrillArm3";
	this.image=SF3029_drillarm3;
	this.code=["D", "I", "R"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=60;
	this.boostDamage=0;
	this.hits="1-3";
	this.priority=4;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.localDrillArm = new BN6DrillArm();
		this.hitbool = this.localDrillArm.hithuh(attacker, defender);
		this.hits = this.localDrillArm.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){
		(new BN6DrillArm()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3TyphoonDance(){
	this.id="SF3TyphoonDance";
	this.name="TyphoonDance";
	this.image=SF3030_typhoondance;
	this.code=["E", "K", "O"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=60;
	this.boostDamage=0;
	this.hits=2;
	this.priority=4;
	this.elements=[ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		return (new BN6Kunai()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3TornadoDance(){
	this.id="SF3TornadoDance";
	this.name="TornadoDance";
	this.image=SF3031_tornadodance;
	this.code=["L", "O", "U"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=60;
	this.boostDamage=0;
	this.hits=3;
	this.priority=4;
	this.elements=[ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		return (new BN6Kunai()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3WhiteMeteor(){
	this.id="SF3WhiteMeteor";
	this.name="WhiteMeteor";
	this.image=SF3032_whitemeteor;
	this.code=["A", "K", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=50;
	this.boostDamage=0;
	this.hits="1-9";
	this.priority=6;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		this.hits = 0;
		this.hitbool = false;
		if(defender.invis < 1){
			this.targetSide = SIDE.LEFT;
			this.xDirection = 1;
			this.xStart = 0;
			this.xEnd = 5;
			if(attacker.name === playerOne.name){
				this.targetSide = SIDE.RIGHT;
				this.xDirection = -1;
				this.xStart = 5;
				this.xEnd = 0;
			}
			this.x = this.xStart;
			var i = 0;
			this.y = 0;
			while(i < 9){
				if(cells[this.x][this.y].side === this.targetSide && cells[this.x][this.y].panelType === PANELTYPE.NORMAL){
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

function SF3SilverMeteor(){
	this.id="SF3SilverMeteor";
	this.name="SilverMeteor";
	this.image=SF3033_silvermeteor;
	this.code=["P", "W", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=70;
	this.boostDamage=0;
	this.hits="1-9";
	this.priority=6;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		this.localWhiteMeteor = new SF3WhiteMeteor();
		this.hitbool = this.localWhiteMeteor.hithuh(attacker, defender);
		this.hits = this.localWhiteMeteor.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3GrandWave1(){
	this.id="SF3GrandWave1";
	this.name="GrandWave1";
	this.image=SF3034_groundwave1;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=50;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6WaveArm1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3GrandWave2(){
	this.id="SF3GrandWave2";
	this.name="GrandWave2";
	this.image=SF3035_groundwave2;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=80;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3GrandWave1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3GrandWave3(){
	this.id="SF3GrandWave3";
	this.name="GrandWave3";
	this.image=SF3036_groundwave3;
	this.code=["L", "N", "V"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=120;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3GrandWave1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3JetAttack1(){
	this.id="SF3JetAttack1";
	this.name="JetAttack1";
	this.image=SF3037_jetattack1;
	this.code=["K", "O", "Y"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=90;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.wind, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			if(defender.y === attacker.y){
				if(attacker.name === playerOne.name){
					return defender.x > attacker.x;
				}
				else{
					return defender.x < attacker.x;
				}
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3JetAttack2(){
	this.id="SF3JetAttack2";
	this.name="JetAttack2";
	this.image=SF3038_jetattack2;
	this.code=["M", "S", "Y"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=120;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.wind, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3JetAttack1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3JetAttack3(){
	this.id="SF3JetAttack3";
	this.name="JetAttack3";
	this.image=SF3039_jetattack3;
	this.code=["N", "P", "Y"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.wind, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3JetAttack1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3Buki1(){
	this.id="SF3Buki1";
	this.name="Buki1";
	this.image=SF3040_hammerweapon1;
	this.code=["D", "F", "G"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=130;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			this.xDir = -1;
			if(attacker.name === playerOne.name){
				this.xDir = 1;
			}
			if(defender.x === attacker.x + this.xDir && defender.y === attacker.y){
				this.elements = [ELEMENTS.break];
				return true;
			}
			this.elements = [];
			return cards.around(attacker.x + this.xDir, attacker.y, defender);
		}
		return false;
	};
	this.effecthit= function(attacker, defender){
		(new SF3Buki1()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		this.xDir = -1;
		if(attacker.name === playerOne.name){
			this.xDir = 1;
		}
		board.convertPanel(attacker.x+this.xDir, attacker.y, PANELTYPE.BROKEN);
	};
}

function SF3Buki2(){
	this.id="SF3Buki2";
	this.name="Buki2";
	this.image=SF3041_hammerweapon2;
	this.code=["G", "O", "T"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		this.localBuki = new SF3Buki1();
		this.hitbool = this.localBuki.hithuh(attacker, defender);
		this.elements = this.localBuki.elements;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){
		(new SF3Buki1()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3Buki1()).effectmiss(attacker, defender);
	};
}

function SF3Buki3(){
	this.id="SF3Buki3";
	this.name="Buki3";
	this.image=SF3042_hammerweapon3;
	this.code=["G", "H", "Y"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=170;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		this.localBuki = new SF3Buki1();
		this.hitbool = this.localBuki.hithuh(attacker, defender);
		this.elements = this.localBuki.elements;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){
		(new SF3Buki1()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3Buki1()).effectmiss(attacker, defender);
	};
}

function SF3SmileCoin1(){
	this.id="SF3SmileCoin1";
	this.name="SmileCoin1";
	this.image=SF3043_smilecoin1;
	this.code=["H", "P", "U"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=30;
	this.boostDamage=0;
	this.hits=3;
	this.priority=9;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			this.xDir = -1;
			if(attacker.name === playerOne.name){
				this.xDir = 1;
			}
			this.startingX = (new AREAGRAB()).affectedColumn(defender, attacker);
			for(var y = 0; y < 3; y++){
				for(var x = 0; x < 3; x++){
					if(this.startingX + x*this.xDir === defender.x && y === defender.y){
						return true;
					}
					if(board.cellHasSolidObject(this.startingX + x*this.xDir, y)){
						break;
					}
					if(board.isHole(this.startingX + x*this.xDir, y)){
						break;
					}
					if(cells[this.startingX + x*this.xDir][y].panelType === PANELTYPE.MISS){
						break;
					}
				}
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3SmileCoin2(){
	this.id="SF3SmileCoin2";
	this.name="SmileCoin2";
	this.image=SF3044_smilecoin2;
	this.code=["G", "J", "P"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=40;
	this.boostDamage=0;
	this.hits=3;
	this.priority=9;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3SmileCoin1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3SmileCoin3(){
	this.id="SF3SmileCoin3";
	this.name="SmileCoin3";
	this.image=SF3045_smilecoin3;
	this.code=["P", "S", "T"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=50;
	this.boostDamage=0;
	this.hits=3;
	this.priority=9;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3SmileCoin1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3BigDrop1(){
	this.id="SF3BigDrop1";
	this.name="BigDrop1";
	this.image=SF3046_heavydawn1;
	this.code=["A", "C", "R"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=140;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3MiniGrenade()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new BN6JusticeOne()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new BN6JusticeOne()).effectmiss(attacker, defender);
	};
}

function SF3BigDrop2(){
	this.id="SF3BigDrop2";
	this.name="BigDrop2";
	this.image=SF3047_heavydawn2;
	this.code=["A", "L", "N"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=180;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3BigDrop1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3BigDrop1()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3BigDrop1()).effectmiss(attacker, defender);
	};
}

function SF3BigDrop3(){
	this.id="SF3BigDrop3";
	this.name="BigDrop3";
	this.image=SF3048_heavydawn3;
	this.code=["A", "G", "Q"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=220;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3BigDrop1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3BigDrop1()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3BigDrop1()).effectmiss(attacker, defender);
	};
}

function SF3Buzzsaw1(){
	this.id="SF3Buzzsaw1";
	this.name="Buzzsaw1";
	this.image=SF3049_gizawheel1;
	this.code=["K", "M", "V"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			this.targetPlayer = playerOne;
			if(attacker.name === playerOne.name){
				this.targetPlayer = playerTwo;
			}
			this.x = attacker.x;
			this.y = attacker.y;
			this.xSpun = true;
			while(this.y < 3 && this.y > 0){
				if(this.x = this.targetPlayer.x){
					this.xSpun = false;
				}
				if(this.xSpun){
					this.x = this.x + (this.targetPlayer.x - this.x)/Math.abs(this.targetPlayer.x - this.x);
				}
				else{
					this.y = this.y + (this.targetPlayer.y - this.y)/Math.abs(this.targetPlayer.y - this.y);
				}
				if(this.x === defender.x && this.y === defender.y){
					return true;
				}
				if(board.cellHasSolidObject(this.x, this.y)){
					return false;
				}
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3Buzzsaw2(){
	this.id="SF3Buzzsaw2";
	this.name="Buzzsaw2";
	this.image=SF3050_gizawheel2;
	this.code=["H", "F", "M"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=120;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new SF3Buzzsaw1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3Buzzsaw3(){
	this.id="SF3Buzzsaw3";
	this.name="Buzzsaw3";
	this.image=SF3051_gizawheel3;
	this.code=["L", "M", "Y"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new SF3Buzzsaw1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3SkullArrow1(){
	this.id="SF3SkullArrow1";
	this.name="SkullArrow1";
	this.image=SF3052_skullarrow1;
	this.code=["B", "D", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=130;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			this.targetCol = board.farthestEndOfRow(false);
			if(attacker.name === playerOne.name){
				this.targetCol = board.farthestEndOfRow(true);;
			}
			if(defender.x === this.targetCol){
				for(var ydiff = -1; ydiff < 2; ydiff++){
					if(attacker.y + ydiff === defender.y){
						return true;
					}
				}
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){
		defender.timpanid = 2;
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3SkullArrow2(){
	this.id="SF3SkullArrow2";
	this.name="SkullArrow2";
	this.image=SF3053_skullarrow2;
	this.code=["B", "G", "Q"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3SkullArrow1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3SkullArrow1()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3SkullArrow3(){
	this.id="SF3SkullArrow3";
	this.name="SkullArrow3";
	this.image=SF3054_skullarrow3;
	this.code=["A", "B", "U"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=170;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3SkullArrow1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3SkullArrow1()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3MuTechnology1(){
	this.id="SF3MuTechnology1";
	this.name="MuTechnology1";
	this.image=SF3055_mutechnology1;
	this.code=["M", "R", "Y"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=50;
	this.boostDamage=0;
	this.hits=3;
	this.priority=9;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.addDamage = null;
		if(cells[attacker.x][attacker.y].panelType === PANELTYPE.holy){
			this.addDamage = 50;
		}
		return (new SF3JetAttack1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3MuTechnology2(){
	this.id="SF3MuTechnology2";
	this.name="MuTechnology2";
	this.image=SF3056_mutechnology2;
	this.code=["P", "R", "U"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=60;
	this.boostDamage=0;
	this.hits=3;
	this.priority=9;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.addDamage = null;
		if(cells[attacker.x][attacker.y].panelType === PANELTYPE.holy){
			this.addDamage = 60;
		}
		return (new SF3JetAttack1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3MuTechnology3(){
	this.id="SF3MuTechnology3";
	this.name="MuTechnology3";
	this.image=SF3057_mutechnology3;
	this.code=["E", "G", "R"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=70;
	this.boostDamage=0;
	this.hits=3;
	this.priority=9;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.addDamage = null;
		if(cells[attacker.x][attacker.y].panelType === PANELTYPE.holy){
			this.addDamage = 70;
		}
		return (new SF3JetAttack1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3TimeBomb1(){
	this.id="SF3TimeBomb1";
	this.name="TimeBomb1";
	this.image=SF3058_countbomb1;
	this.code=["C", "E", "J"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=130;
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
				this.tempX++;
			}
			this.bombPlaced = true;
		}
	};
}

function SF3TimeBomb2(){
	this.id="SF3TimeBomb2";
	this.name="TimeBomb2";
	this.image=SF3059_countbomb2;
	this.code=["C", "O", "P"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=160;
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
				this.tempX++;
			}
			this.bombPlaced = true;
		}
	};
}

function SF3TimeBomb3(){
	this.id="SF3TimeBomb3";
	this.name="TimeBomb3";
	this.image=SF3060_countbomb3;
	this.code=["A", "B", "C"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=200;
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
				this.tempX++;
			}
			this.bombPlaced = true;
		}
	};
}

function SF3HeatUpper1(){
	this.id="SF3HeatUpper1";
	this.name="HeatUpper1";
	this.image=SF3061_heatupper1;
	this.code=["E", "K", "O"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=120;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.fire, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3Sword()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3HeatUpper2(){
	this.id="SF3HeatUpper2";
	this.name="HeatUpper2";
	this.image=SF3062_heatupper2;
	this.code=["E", "I", "W"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.fire, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3HeatUpper1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3HeatUpper3(){
	this.id="SF3HeatUpper3";
	this.name="HeatUpper3";
	this.image=SF3063_heatupper3;
	this.code=["B", "E", "G"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=200;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.fire, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3HeatUpper1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3MechFlame1(){
	this.id="SF3MechFlame1";
	this.name="MechFlame1";
	this.image=SF3064_machineflame1;
	this.code=["F", "T", "W"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=110;
	this.boostDamage=0;
	this.hits=1;
	this.priority=6;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new BN6HellBurner1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3MechFlame1()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === playerOne.name){
			this.xDirection = 1;
		}
		for(var i = 1; i < 4; i++){
			board.convertPanel(attacker.x + this.xDirection * i, attacker.y, PANELTYPE.BROKEN);
		}
	};
}

function SF3MechFlame2(){
	this.id="SF3MechFlame2";
	this.name="MechFlame2";
	this.image=SF3065_machineflame2;
	this.code=["B", "F", "O"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=140;
	this.boostDamage=0;
	this.hits=1;
	this.priority=6;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new SF3MechFlame1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3MechFlame1()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3MechFlame1()).effectmiss(attacker, defender);
	};
}

function SF3MechFlame3(){
	this.id="SF3MechFlame3";
	this.name="MechFlame3";
	this.image=SF3066_machineflame3;
	this.code=["F", "S", "Y"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=170;
	this.boostDamage=0;
	this.hits=1;
	this.priority=6;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new SF3MechFlame1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3MechFlame1()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3MechFlame1()).effectmiss(attacker, defender);
	};
}

function SF3MadFire1(){
	this.id="SF3MadFire1";
	this.name="MadFire1";
	this.image=SF3067_angerfire1;
	this.code=["F", "J", "T"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=100;
	this.boostDamage=0;
	this.hits="1,3";
	this.priority=7;
	this.elements=[ELEMENTS.fire, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.hits = 3;
		if(defender.guard === null){
			this.hits = 1;
		}
		return (new SF3Cannon()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3MadFire2(){
	this.id="SF3MadFire2";
	this.name="MadFire2";
	this.image=SF3068_angerfire2;
	this.code=["L", "T", "U"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=140;
	this.boostDamage=0;
	this.hits="1,3";
	this.priority=7;
	this.elements=[ELEMENTS.fire, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.localMadFire = new SF3MadFire1();
		this.hitbool = this.localMadFire.hithuh(attacker, defender);
		this.hits = this.localMadFire.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3MadFire3(){
	this.id="SF3MadFire3";
	this.name="MadFire3";
	this.image=SF3069_angerfire3;
	this.code=["A", "H", "T"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=180;
	this.boostDamage=0;
	this.hits="1,3";
	this.priority=7;
	this.elements=[ELEMENTS.fire, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.localMadFire = new SF3MadFire1();
		this.hitbool = this.localMadFire.hithuh(attacker, defender);
		this.hits = this.localMadFire.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3WideWave1(){
	this.id="SF3WideWave1";
	this.name="WideWave1";
	this.image=SF3070_widewave1;
	this.code=["B", "C", "V"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=70;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new BN6WideShot()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3WideWave2(){
	this.id="SF3WideWave2";
	this.name="WideWave2";
	this.image=SF3071_widewave2;
	this.code=["E", "L", "V"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=90;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new SF3WideWave1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3WideWave3(){
	this.id="SF3WideWave3";
	this.name="WideWave3";
	this.image=SF3072_widewave3;
	this.code=["V", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=120;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new SF3WideWave1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3BubbleHook1(){
	this.id="SF3BubbleHook1";
	this.name="BubbleHook1";
	this.image=SF3073_bubblehook1;
	this.code=["B", "C", "K"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=60;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new SF3GreatAxe()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		if(defender.guard === null){
			defender.bubbled = 1;
		}
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3BubbleHook2(){
	this.id="SF3BubbleHook2";
	this.name="BubbleHook2";
	this.image=SF3074_bubblehook2;
	this.code=["D", "K", "V"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=80;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new SF3BubbleHook1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3BubbleHook1()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3BubbleHook3(){
	this.id="SF3BubbleHook3";
	this.name="BubbleHook3";
	this.image=SF3075_bubblehook3;
	this.code=["K", "L", "N"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new SF3BubbleHook1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3BubbleHook1()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3SharkAttack1(){
	this.id="SF3SharkAttack1";
	this.name="SharkAttack1";
	this.image=SF3076_sharkcutter1;
	this.code=["E", "L", "P"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=70;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			if(attacker.name === playerOne.name){
				return attacker.x+1 === defender.x && attacker.y === defender.y;
			}
			else{
				return attacker.x-1 === defender.x && attacker.y === defender.y;
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		if(attacker.name === playerOne.name){
			if(board.isCellPlayerValid(attacker.x+1, attacker.y)){
				cells[attacker.x+1][attacker.y].object.push(new SF3SharkAttackObj(attacker.x+1, attacker.y, attacker, defender, this.damage));
			}
		}
		else{
			if(board.isCellPlayerValid(attacker.x-1, attacker.y)){
				cells[attacker.x-1][attacker.y].object.push(new SF3SharkAttackObj(attacker.x-1, attacker.y, attacker, defender, this.damage));
			}
		}
	};
}

function SF3SharkAttack2(){
	this.id="SF3SharkAttack2";
	this.name="SharkAttack2";
	this.image=SF3077_sharkcutter2;
	this.code=["C", "K", "L"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=80;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new SF3SharkAttack1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		if(attacker.name === playerOne.name){
			if(board.isCellPlayerValid(attacker.x+1, attacker.y)){
				cells[attacker.x+1][attacker.y].object.push(new SF3SharkAttackObj(attacker.x+1, attacker.y, attacker, defender, this.damage));
			}
		}
		else{
			if(board.isCellPlayerValid(attacker.x-1, attacker.y)){
				cells[attacker.x-1][attacker.y].object.push(new SF3SharkAttackObj(attacker.x-1, attacker.y, attacker, defender, this.damage));
			}
		}
	};
}

function SF3SharkAttack3(){
	this.id="SF3SharkAttack3";
	this.name="SharkAttack3";
	this.image=SF3078_sharkcutter3;
	this.code=["I", "L", "M"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=90;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new SF3SharkAttack1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		if(attacker.name === playerOne.name){
			if(board.isCellPlayerValid(attacker.x+1, attacker.y)){
				cells[attacker.x+1][attacker.y].object.push(new SF3SharkAttackObj(attacker.x+1, attacker.y, attacker, defender, this.damage));
			}
		}
		else{
			if(board.isCellPlayerValid(attacker.x-1, attacker.y)){
				cells[attacker.x-1][attacker.y].object.push(new SF3SharkAttackObj(attacker.x-1, attacker.y, attacker, defender, this.damage));
			}
		}
	};
}

function SF3IceSpin1(){
	this.id="SF3IceSpin1";
	this.name="IceSpin1";
	this.image=SF3079_icespinning1;
	this.code=["I", "P", "Q"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=70;
	this.boostDamage=0;
	this.hits="1-4";
	this.priority=8;
	this.elements=[ELEMENTS.aqua, ELEMENTS.break];
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
			
			for(var i = 0; i < 7; i++){
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

				if(cells[this.puckX][this.puckY].panelType === PANELTYPE.MISS){
					if(cells[this.puckX - this.xDirection*2]){
						if(cells[this.puckX - this.xDirection*2][this.puckY].panelType !== PANELTYPE.MISS){
							this.xDirection = this.xDirection * -1;
							this.puckX = this.puckX + this.xDirection * 2;
						}
					}
					else if(cells[this.puckX][this.puckY - this.yDirection*2]){
						if(cells[this.puckX][this.puckY - this.yDirection*2].panelType !== PANELTYPE.MISS){
							this.yDirection = this.yDirection * -1;
							this.puckY = this.puckY + this.xDirection * 2;
						}
					}
				}
				
				if(this.switchedSides){
					if(cells[this.puckX][this.puckY].side === this.side){
						this.xDirection = this.xDirection * -1;
						this.puckX = this.puckX + this.xDirection * 2;
					}
					if(!cells[this.puckX]){
						return this.hitbool;
					}
					if(cells[this.puckX][this.puckY].side === this.side || cells[this.puckX][this.puckY].panelType === PANELTYPE.MISS){
						this.yDirection = this.yDirection * -1;
						this.puckY = this.puckY + this.xDirection * 2;
					}
					if(!cells[this.puckX][this.puckY] || cells[this.puckX][this.puckY].panelType === PANELTYPE.MISS){
						return this.hitbool;
					}
				}
			}
		}
		if(this.hits < 1){
			this.hits = 1
		}
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3IceSpin2(){
	this.id="SF3IceSpin2";
	this.name="IceSpin2";
	this.image=SF3080_icespinning2;
	this.code=["I", "R", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=90;
	this.boostDamage=0;
	this.hits="1-4";
	this.priority=8;
	this.elements=[ELEMENTS.aqua, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.localIceSpin = new SF3IceSpin1();
		this.hitbool = this.localIceSpin.hithuh(attacker, defender);
		this.hits = this.localIceSpin.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3IceSpin3(){
	this.id="SF3IceSpin3";
	this.name="IceSpin3";
	this.image=SF3081_icespinning3;
	this.code=["I", "J", "K"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=110;
	this.boostDamage=0;
	this.hits="1-4";
	this.priority=8;
	this.elements=[ELEMENTS.aqua, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.localIceSpin = new SF3IceSpin1();
		this.hitbool = this.localIceSpin.hithuh(attacker, defender);
		this.hits = this.localIceSpin.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3StealthLaser1(){
	this.id="SF3StealthLaser1";
	this.name="StealthLaser1";
	this.image=SF3082_stealthlaser1;
	this.code=["A", "N", "O"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=40;
	this.boostDamage=0;
	this.hits=3;
	this.priority=9;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		this.xDir = -1;
		this.targetPlayer = playerOne;
		if(attacker.name === playerOne.name){
			this.xDir = 1;
			this.targetPlayer = playerTwo;
		}
		this.startX = this.targetPlayer.x - this.xDir*3;
		while(cells[this.startX] && !board.cellHasSolidObject(this.startX, this.targetPlayer.y)){
			this.startX = this.startX + this.xDir;
			if(defender.x === this.startX && defender.y === this.targetPlayer.y){
				return true;
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3StealthLaser2(){
	this.id="SF3StealthLaser2";
	this.name="StealthLaser2";
	this.image=SF3083_stealthlaser2;
	this.code=["N", "P", "Y"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=50;
	this.boostDamage=0;
	this.hits=3;
	this.priority=9;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new SF3StealthLaser1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3StealthLaser3(){
	this.id="SF3StealthLaser3";
	this.name="StealthLaser3";
	this.image=SF3084_stealthlaser3;
	this.code=["M", "N", "T"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=60;
	this.boostDamage=0;
	this.hits=3;
	this.priority=9;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new SF3StealthLaser1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3MummyHand1(){
	this.id="SF3MummyHand1";
	this.name="MummyHand1";
	this.image=SF3085_mummyhand1;
	this.code=["D", "I", "N"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=120;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new SF3GreatAxe()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		if(defender.guard === null){
			defender.stunned = 1;
		}
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3MummyHand2(){
	this.id="SF3MummyHand2";
	this.name="MummyHand2";
	this.image=SF3086_mummyhand2;
	this.code=["F", "I", "S"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new SF3MummyHand1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3MummyHand1()).hithuh(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3MummyHand3(){
	this.id="SF3MummyHand3";
	this.name="MummyHand3";
	this.image=SF3087_mummyhand3;
	this.code=["I", "T", "V"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=170;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new SF3MummyHand1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3MummyHand1()).hithuh(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3ThunderHead1(){
	this.id="SF3ThunderHead1";
	this.name="ThunderHead1";
	this.image=SF3088_inazumahead1;
	this.code=["R", "V", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=7;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		this.targetPanel = board.generateRandomPanel();
		if(defender.x === this.targetPanel[0] && defender.y === this.targetPanel[1]){
			return true;
		}
		if(defender.invis < 1){
			return cards.around(this.targetPanel[0], this.targetPanel[1], defender);
		}
		return false;
	};
	this.effecthit= function(attacker, defender){
		this.effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		this.targetPanel = board.generateRandomPanel();
		board.convertPanel(this.targetPanel[0], this.targetPanel[1], PANELTYPE.BROKEN);
	};
}

function SF3ThunderHead2(){
	this.id="SF3ThunderHead2";
	this.name="ThunderHead2";
	this.image=SF3089_inazumahead2;
	this.code=["H", "I", "R"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=180;
	this.boostDamage=0;
	this.hits=1;
	this.priority=7;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new SF3ThunderHead1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3ThunderHead1()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3ThunderHead1()).effectmiss(attacker, defender);
	};
}

function SF3ThunderHead3(){
	this.id="SF3ThunderHead3";
	this.name="ThunderHead3";
	this.image=SF3090_inazumahead3;
	this.code=["E", "R", "W"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=230;
	this.boostDamage=0;
	this.hits=1;
	this.priority=7;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new SF3ThunderHead1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3ThunderHead1()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3ThunderHead1()).effectmiss(attacker, defender);
	};
}

function SF3FlashStrike1(){
	this.id="SF3FlashStrike1";
	this.name="FlashStrike1";
	this.image=SF3091_flashspear1;
	this.code=["B", "C", "M"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=10;
	this.boostDamage=0;
	this.hits=5;
	this.priority=8;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new BN6ElecPulse1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3FlashStrike2(){
	this.id="SF3FlashStrike2";
	this.name="FlashStrike2";
	this.image=SF3092_flashspear2;
	this.code=["G", "M", "Q"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=20;
	this.boostDamage=0;
	this.hits=5;
	this.priority=8;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new SF3FlashStrike1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3FlashStrike3(){
	this.id="SF3FlashStrike3";
	this.name="FlashStrike3";
	this.image=SF3093_flashspear3;
	this.code=["L", "M", "R"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=30;
	this.boostDamage=0;
	this.hits=5;
	this.priority=8;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new SF3FlashStrike1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3ArachAttack1(){
	this.id="SF3ArachAttack1";
	this.name="ArachAttack1";
	this.image=SF3094_dummyspider1;
	this.code=["O", "U", "Y"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=40;
	this.boostDamage=0;
	this.hits=3;
	this.priority=9;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			this.targetPlayer = playerOne;
			if(attacker.name === playerOne.name){
				this.targetPlayer = playerTwo;
			}
			return defender.x === this.targetPlayer.x && defender.y === this.targetPlayer.y;
		}
	};
	this.effecthit= function(attacker, defender){
		if(defender.guard < 1){
			defender.confused = 1;
		}
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3ArachAttack2(){
	this.id="SF3ArachAttack2";
	this.name="ArachAttack2";
	this.image=SF3095_dummyspider2;
	this.code=["B", "H", "O"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=50;
	this.boostDamage=0;
	this.hits=3;
	this.priority=9;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		return (new SF3ArachAttack1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3ArachAttack1()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3ArachAttack3(){
	this.id="SF3ArachAttack3";
	this.name="ArachAttack3";
	this.image=SF3096_dummyspider3;
	this.code=["K", "O", "Q"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=60;
	this.boostDamage=0;
	this.hits=3;
	this.priority=9;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		return (new SF3ArachAttack1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3ArachAttack1()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3Shuriken1(){
	this.id="SF3Shuriken1";
	this.name="Shuriken1";
	this.image=SF3097_shurishuriken1;
	this.code=["I", "K", "W"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		return (new BN6Boomerang()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3Shuriken2(){
	this.id="SF3Shuriken2";
	this.name="Shuriken2";
	this.image=SF3098_shurishuriken2;
	this.code=["D", "T", "W"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=120;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		return (new SF3Shuriken1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3Shuriken3(){
	this.id="SF3Shuriken3";
	this.name="Shuriken3";
	this.image=SF3099_shurishuriken3;
	this.code=["N", "S", "W"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=140;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		return (new SF3Shuriken1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3PollenShot1(){
	this.id="SF3PollenShot1";
	this.name="PollenShot1";
	this.image=SF3100_powdershoot1;
	this.code=["F", "S", "U"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=120;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		if(cells[playerOne.x][playerOne.y].panelType === PANELTYPE.GRASS){
			return true;
		}
		if(defender.invis < 1){
			this.targetPlayer = playerOne;
			if(defender.name === playerOne.name){
				this.targetPlayer = playerTwo;
			}
			if(defender.x === this.targetPlayer.x){
				return defender.y === attacker.y;
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){
		board.convertPanel(defender.x, defender.y, PANELTYPE.GRASS);
	};
	this.effectmiss= function(attacker, defender){
		board.convertPanel(defender.x, attacker.y, PANELTYPE.GRASS);
	};
}

function SF3PollenShot2(){
	this.id="SF3PollenShot2";
	this.name="PollenShot2";
	this.image=SF3101_powdershoot2;
	this.code=["E", "K", "S"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=140;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		return (new SF3PollenShot1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3PollenShot1()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3PollenShot1()).effectmiss(attacker, defender);
	};
}

function SF3PollenShot3(){
	this.id="SF3PollenShot3";
	this.name="PollenShot3";
	this.image=SF3102_powdershoot3;
	this.code=["A", "Q", "S"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=160;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		return (new SF3PollenShot1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3PollenShot1()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3PollenShot1()).effectmiss(attacker, defender);
	};
}

function SF3AcornBomb1(){
	this.id="SF3AcornBomb1";
	this.name="AcornBomb1";
	this.image=SF3103_rollingnuts1;
	this.code=["O", "P", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			this.dir = -1;
			if(attacker.name === playerOne.name){
				this.dir = 1;
			}
			this.loc = attacker.x + this.dir;
			while(true){
				if(cells[this.loc]){
					if(board.isHole(this.loc, attacker.y)){
						return false;
					}
					if(this.loc === defender.x && attacker.y === defender.y){
						return true;
					}
					if(board.cellHasSolidObject(this.loc, attacker.y)){
						return cards.around(this.loc, attacker.y, defender)
					}
					this.loc = this.loc + this.dir;
				}
				else{
					return false;
				}
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3AcornBomb2(){
	this.id="SF3AcornBomb2";
	this.name="AcornBomb2";
	this.image=SF3104_rollingnuts2;
	this.code=["S", "W", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=120;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		return (new SF3AcornBomb1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3AcornBomb3(){
	this.id="SF3AcornBomb3";
	this.name="AcornBomb3";
	this.image=SF3105_rollingnuts3;
	this.code=["J", "L", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=140;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		return (new SF3AcornBomb1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3BeastSlap1(){
	this.id="SF3BeastSlap1";
	this.name="BeastSlap1";
	this.image=SF3106_beastswing1;
	this.code=["H", "W", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new SF3GreatAxe()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3BeastSlap1()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		attacker.invincible = 1;
	};
}

function SF3BeastSlap2(){
	this.id="SF3BeastSlap2";
	this.name="BeastSlap2";
	this.image=SF3107_beastswing2;
	this.code=["C", "H", "V"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=120;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new SF3BeastSlap1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3BeastSlap1()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3BeastSlap1()).effectmiss(attacker, defender);
	};
}

function SF3BeastSlap3(){
	this.id="SF3BeastSlap3";
	this.name="BeastSlap3";
	this.image=SF3108_beastswing3;
	this.code=["G", "H", "R"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=140;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new SF3BeastSlap1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3BeastSlap1()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3BeastSlap1()).effectmiss(attacker, defender);
	};
}

function SF3NoisedWizard1(){
	this.id="SF3NoisedWizard1";
	this.name="NoisedWizard1";
	this.image=SF3109_noisedwizard1;
	this.code=["E", "P", "R"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=120;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new BN6Lance()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3NoisedWizard2(){
	this.id="SF3NoisedWizard2";
	this.name="NoisedWizard2";
	this.image=SF3110_noisedwizard2;
	this.code=["F", "K", "P"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new SF3NoisedWizard1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3NoisedWizard3(){
	this.id="SF3NoisedWizard3";
	this.name="NoisedWizard3";
	this.image=SF3111_noisedwizard3;
	this.code=["N", "P", "W"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=180;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new SF3NoisedWizard1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3MalWizard1(){
	this.id="SF3MalWizard1";
	this.name="MalWizard1";
	this.image=SF3112_heelwizard1;
	this.code=["H", "V", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=180;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		this.dir = -1;
		if(attacker.name === playerOne.name){
			this.dir = 1;
		}
		if(cells[attacker.x + this.dir][attacker.y].player === null && !board.cellHasSolidObject(attacker.x + this.dir, attacker.y)){
			attacker.x = attacker.x + this.dir;
			this.hitbool = (new SF3LongSword()).hithuh(attacker, defender);
			attacker.x = attacker.x - this.dir;
			return this.hitbool;
		}
		return false
	};
	this.effecthit= function(attacker, defender){
		if(defender.guard < 1){
			defender.stunned = 1;
		}
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3MalWizard2(){
	this.id="SF3MalWizard2";
	this.name="MalWizard2";
	this.image=SF3113_heelwizard2;
	this.code=["J", "O", "V"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=210;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new SF3MalWizard1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3MalWizard1()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3MalWizard3(){
	this.id="SF3MalWizard3";
	this.name="MalWizard3";
	this.image=SF3114_heelwizard3;
	this.code=["D", "I", "V"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=250;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new SF3MalWizard1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3MalWizard1()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3BlackHole1(){
	this.id="SF3BlackHole1";
	this.name="BlackHole1";
	this.image=SF3115_blackhole1;
	this.code=["D", "H", "T"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return defender.hp <= this.damage;
	};
	this.effecthit= function(attacker, defender){
		defender.hp = 0;
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3BlackHole2(){
	this.id="SF3BlackHole2";
	this.name="BlackHole2";
	this.image=SF3116_blackhole2;
	this.code=["Q", "T", "V"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=130;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return defender.hp <= this.damage;
	};
	this.effecthit= function(attacker, defender){
		defender.hp = 0;
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3BlackHole3(){
	this.id="SF3BlackHole3";
	this.name="BlackHole3";
	this.image=SF3117_blackhole3;
	this.code=["B", "E", "T"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=160;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return defender.hp <= this.damage;
	};
	this.effecthit= function(attacker, defender){
		defender.hp = 0;
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3DoubleStone(){
	this.id="SF3DoubleStone";
	this.name="DoubleStone";
	this.image=SF3118_doublestone;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
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
		if(board.isCellPlayerValid(1, 1)){
			cells[1][1].object = [(new SF3DoubleStoneObj(1, 1))];
		}
		if(board.isCellPlayerValid(4, 1)){
			cells[4][1].object = [(new SF3DoubleStoneObj(4, 1))];
		}
	};
}

function SF3Bombalizer(){
	this.id="SF3Bombalizer";
	this.name="Bombalizer";
	this.image=SF3119_bombriser;
	this.code=["L", "M", "S"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=200;
	this.boostDamage=0;
	this.hits=1;
	this.priority=4;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			for(var x = 0; x < cells.length; x++){
				for(var y = 0; y < cells[x].length; y++){
					if(board.cellHasSolidObject(x, y)){
						if(cards.around(x, y, defender)){
							return true;
						}
					}
				}
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){
		(new SF3Bombalizer()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		for(var x = 0; x < cells.length; x++){
			for(var y = 0; y < cells[x].length; y++){
				if(board.cellHasSolidObject(x, y)){
					cells[x][y].object = [];
				}
			}
		}
	};
}

function SF3DivideLine(){
	this.id="SF3DivideLine";
	this.name="DivideLine";
	this.image=SF3120_divideline;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
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
		this.xDir = -1;
		if(attacker.name === playerOne.name){
			this.xDir = 1;
		}
		for(var y = 0; y < 3; y++){
			board.convertPanel(attacker.x + this.xDir, y, PANELTYPE.BROKEN);
		}
	};
}

function SF3DoubleEater(){
	this.id="SF3DoubleEater";
	this.name="DoubleEater";
	this.image=SF3121_doubleeater;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
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
		this.col1 = board.farthestEndOfRow(true);
		this.col2 = board.farthestEndOfRow(false);
		for(var y = 0; y < 1; y++){
			board.convertPanel(this.col1, y, PANELTYPE.MISS);
			board.convertPanel(this.col2, y, PANELTYPE.MISS);
		}
		if(attacker.x === this.col1){
			if(!board.isCellThisPlayerValid(this.col1-1, attacker.y, attacker)){
				board.convertPanel(attacker.x, attacker.y, PANELTYPE.NORMAL);
			}
			else{
				board.movePlayer(attacker.x - 1, attacker.y, attacker);
			}
		}
		if(attacker.x === this.col2){
			if(!board.isCellThisPlayerValid(this.col2+1, attacker.y, attacker)){
				board.convertPanel(attacker.x, attacker.y, PANELTYPE.NORMAL);
			}
			else{
				board.movePlayer(attacker.x + 1, attacker.y, attacker);
			}
		}
		if(defender.x === this.col1){
			if(!board.isCellThisPlayerValid(this.col1-1, defender.y, defender)){
				board.convertPanel(defender.x, defender.y, PANELTYPE.NORMAL);
			}
			else{
				board.movePlayer(defender.x - 1, defender.y, defender);
			}
		}
		if(defender.x === this.col2){
			if(!board.isCellThisPlayerValid(this.col2+1, defender.y, defender)){
				board.convertPanel(defender.x, defender.y, PANELTYPE.NORMAL);
			}
			else{
				board.movePlayer(defender.x + 1, defender.y, defender);
			}
		}
	};
}

function SF3PanelFormat(){
	this.id="SF3PanelFormat";
	this.name="PanelFormat";
	this.image=SF3122_panelformat;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
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
		for(var x = 0; x < cells.length; x++){
			for(var y = 0; y < cells[x].length; y++){
				board.convertPanel(x, y, PANELTYPE.NORMAL);
			}
		}
	};
}

function SF3PanicCloud(){
	this.id="SF3PanicCloud";
	this.name="PanicCloud";
	this.image=SF3123_paniccloud;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
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
		if(cells[defender.x][defender.y].panelType === PANELTYPE.NORML){
			defender.confused = 3;
		}
	};
}

function SF3Recover10(){
	this.id="SF3Recover10";
	this.name="Recover10";
	this.image=SF3124_recovery10;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=3;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		cards.recoverHealth(attacker, 10);
	};
}

function SF3Recover30(){
	this.id="SF3Recover30";
	this.name="Recover30";
	this.image=SF3125_recovery30;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=3;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		cards.recoverHealth(attacker, 30);
	};
}

function SF3Recover50(){
	this.id="SF3Recover50";
	this.name="Recover50";
	this.image=SF3126_recovery50;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=3;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		cards.recoverHealth(attacker, 50);
	};
}

function SF3Recover80(){
	this.id="SF3Recover80";
	this.name="Recover80";
	this.image=SF3127_recovery80;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=3;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		cards.recoverHealth(attacker, 80);
	};
}

function SF3Recover120(){
	this.id="SF3Recover120";
	this.name="Recover120";
	this.image=SF3128_recovery120;
	this.code=["A", "G", "M"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=3;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		cards.recoverHealth(attacker, 120);
	};
}

function SF3Recover150(){
	this.id="SF3Recover150";
	this.name="Recover150";
	this.image=SF3129_recovery150;
	this.code=["C", "S", "T"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=3;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		cards.recoverHealth(attacker, 150);
	};
}

function SF3Recover200(){
	this.id="SF3Recover200";
	this.name="Recover200";
	this.image=SF3130_recovery200;
	this.code=["J", "W", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=3;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		cards.recoverHealth(attacker, 200);
	};
}

function SF3Recover300(){
	this.id="SF3Recover300";
	this.name="Recover300";
	this.image=SF3131_recovery300;
	this.code=["C", "F", "M"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=3;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		cards.recoverHealth(attacker, 300);
	};
}

function SF3Barrier(){
	this.id="SF3Barrier";
	this.name="Barrier";
	this.image=SF3132_barrier;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		attacker.barrier = new HitsBarrier(1);
	};
}

function SF3SuperBarrier(){
	this.id="SF3SuperBarrier";
	this.name="SuperBarrier";
	this.image=SF3133_superbarrier;
	this.code=["A", "L", "T"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		attacker.barrier = new HitsBarrier(5);
	};
}

function SF3Aura(){
	this.id="SF3Aura";
	this.name="Aura";
	this.image=SF3134_aura;
	this.code=["E", "S", "V"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		attacker.barrier = new AuraBarrier(100);
	};
}

function SF3Invisible(){
	this.id="SF3Invisible";
	this.name="Invisible";
	this.image=SF3135_invisible;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		(new BN6Invis()).effectmiss(attacker, defender);
	};
}

function SF3Whistle(){
	this.id="SF3Whistle";
	this.name="Whistle";
	this.image=SF3136_whistle;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=5;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		defender.barrier = null;
		this.xDirection = 1;
		if(attacker.name === playerOne.name){
			this.xDirection = -1;
		}
		if(defender.guard === null){
			for(var i = 0; i < 4; i++){
				this.xTile = defender.x + this.xDirection;
				this.yTile = defender.y;
				board.movePlayer(this.xTile, this.yTile, defender);
			}
			defender.stunned = 1;
		}
	};
}

function SF3MegaCrusher(){
	this.id="SF3MegaCrusher";
	this.name="MegaCrusher";
	this.image=SF3137_megacrasher;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3Sword()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === playerOne.name){
			this.xDirection = 1;
		}
		if(board.isCellPlayerValid(attacker.x + this.xDirection, attacker.y)){
			cells[attacker.x + this.xDirection][attacker.y].object = [new SF3MegaCrusherObj(attacker.x + this.xDirection, attacker.y, attacker)];
		}
	};
}

function SF3SpiritFury(){
	this.id="SF3SpiritFury";
	this.name="SpiritFury";
	this.image=SF3138_seireinoikari;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=220;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.col1 = board.farthestEndOfRow(false);
		this.col2 = this.col1 + 1;
		if(attacker.name === playerOne.name){
			this.col1 = board.farthestEndOfRow(true);
			this.col2 = this.col1 - 1;
		}
		for(var y = 0; y < 3; y++){
			board.convertPanel(this.col1, y, PANELTYPE.SPIRITFURY);
			board.convertPanel(this.col2, y, PANELTYPE.SPIRITFURY);
		}
	};
}

function SF3AntiSword(){
	this.id="SF3AntiSword";
	this.name="AntiSword";
	this.image=SF3139_shirahadori;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=240;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.col1 = board.farthestEndOfRow(false);
		this.col2 = this.col1 + 1;
		if(attacker.name === playerOne.name){
			this.col1 = board.farthestEndOfRow(true);
			this.col2 = this.col1 - 1;
		}
		for(var y = 0; y < 3; y++){
			board.convertPanel(this.col1, y, PANELTYPE.ANTISWORD);
			board.convertPanel(this.col2, y, PANELTYPE.ANTISWORD);
		}
	};
}

function SF3PoisonApple(){
	this.id="SF3PoisonApple";
	this.name="PoisonApple";
	this.image=SF3140_dokuringo;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
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
		this.col1 = board.farthestEndOfRow(false);
		this.col2 = this.col1 + 1;
		if(attacker.name === playerOne.name){
			this.col1 = board.farthestEndOfRow(true);
			this.col2 = this.col1 - 1;
		}
		for(var y = 0; y < 3; y++){
			board.convertPanel(this.col1, y, PANELTYPE.POISONAPPLE);
			board.convertPanel(this.col2, y, PANELTYPE.POISONAPPLE);
		}
	};
}

function SF3DoubleCross(){
	this.id="SF3DoubleCross";
	this.name="DoubleCross";
	this.image=SF3141_uragirinosusume;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
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
		this.col1 = board.farthestEndOfRow(false);
		this.col2 = this.col1 + 1;
		if(attacker.name === playerOne.name){
			this.col1 = board.farthestEndOfRow(true);
			this.col2 = this.col1 - 1;
		}
		for(var y = 0; y < 3; y++){
			board.convertPanel(this.col1, y, PANELTYPE.DOUBLECROSS);
			board.convertPanel(this.col2, y, PANELTYPE.DOUBLECROSS);
		}
	};
}

function SF3GigaMine(){
	this.id="SF3GigaMine";
	this.name="GigaMine";
	this.image=SF3142_gigamine;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=300;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.col1 = board.farthestEndOfRow(false);
		this.col2 = this.col1 + 1;
		if(attacker.name === playerOne.name){
			this.col1 = board.farthestEndOfRow(true);
			this.col2 = this.col1 - 1;
		}
		for(var y = 0; y < 3; y++){
			board.convertPanel(this.col1, y, PANELTYPE.GIGAMINE);
			board.convertPanel(this.col2, y, PANELTYPE.GIGAMINE);
		}
	};
}

function SF3GrassStage(){
	this.id="SF3GrassStage";
	this.name="GrassStage";
	this.image=SF3143_kusamurastage;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
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
		this.thSide = SIDE.LEFT;
		if(attacker.name === playerOne.name){
			this.mySide = SIDE.LEFT;
			this.thSide = SIDE.RIGHT;
		}
		for(var x = 0; x < cells.length; x++){
			for(var y = 0; y < cells[x].length; y++){
				if(cells[x][y].side === this.thSide){
					board.convertPanel(x, y, PANELTYPE.GRASS);
				}
			}
		}
	};
}

function SF3IceStage(){
	this.id="SF3IceStage";
	this.name="IceStage";
	this.image=SF3144_icestage;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
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
		this.thSide = SIDE.LEFT;
		if(attacker.name === playerOne.name){
			this.mySide = SIDE.LEFT;
			this.thSide = SIDE.RIGHT;
		}
		for(var x = 0; x < cells.length; x++){
			for(var y = 0; y < cells[x].length; y++){
				if(cells[x][y].side === this.thSide){
					board.convertPanel(x, y, PANELTYPE.ICE);
				}
			}
		}
	};
}

function SF3ParalyzeStage(){
	this.id="SF3ParalyzeStage";
	this.name="ParalyzeStage";
	this.image=SF3145_paralyzestage;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
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
		this.thSide = SIDE.LEFT;
		if(attacker.name === playerOne.name){
			this.mySide = SIDE.LEFT;
			this.thSide = SIDE.RIGHT;
		}
		for(var x = 0; x < cells.length; x++){
			for(var y = 0; y < cells[x].length; y++){
				if(cells[x][y].side === this.thSide){
					board.convertPanel(x, y, PANELTYPE.PARALYZE);
				}
			}
		}
	};
}

function SF3HolyPanel(){
	this.id="SF3HolyPanel";
	this.name="HolyPanel";
	this.image=SF3146_holypanel;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
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
		board.convertPanel(attacker.x, attacker.y, PANELTYPE.HOLY);
	};
}

function SF3AttackPanel(){
	this.id="SF3AttackPanel";
	this.name="AttackPanel";
	this.image=SF3147_attackpanel;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
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
		for(var y = 0; y < cells[attacker.x].length; y++){
			board.convertPanel(attacker.x, attacker.y, PANELTYPE.ATTACK);
		}
	};
}

function SF3GravityPlus(){
	this.id="SF3GravityPlus";
	this.name="GravityPlus";
	this.image=SF3148_gravityplus;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
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
	this.effectmiss= function(attacker, defender){};
	this.addGravity = true;
}

function SF3ParalyzePlus(){
	this.id="SF3ParalyzePlus";
	this.name="ParalyzePlus";
	this.image=SF3149_mahiplus;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
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
	this.effectmiss= function(attacker, defender){};
	this.addStun = true;
}

function SF3Attack10(){
	this.id="SF3Attack10";
	this.name="Attack +10";
	this.image=SF3150_attack10;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
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
	this.effectmiss= function(attacker, defender){};
	this.addboostDamage = 10;
}

// -------------- Secret Standard --------------
function SF3ImpactCannon(){
	this.id="SF3ImpactCannon";
	this.name="ImpactCannon";
	this.image=SF3xxx_impactcannon;
	this.code=["D"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=240;
	this.boostDamage=0;
	this.hits=1;
	this.priority=7;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3AirSpread3()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3PlasmaGunX(){
	this.id="SF3PlasmaGunX";
	this.name="PlasmaGunX";
	this.image=SF3xxx_plasmagunx;
	this.code=["D"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=120;
	this.boostDamage=0;
	this.hits=1;
	this.priority=7;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new SF3PlasmaGun()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		if(defender.guard === null){
			defender.stunned = 2;
		}
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3AirSpreadX(){
	this.id="SF3AirSpreadX";
	this.name="AirSpreadX";
	this.image=SF3xxx_airspreadx;
	this.code=["K"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=50;
	this.boostDamage=0;
	this.hits=3;
	this.priority=6;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3AirSpread3()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3MadVulcanX(){
	this.id="SF3MadVulcanX";
	this.name="MadVulcanX";
	this.image=SF3xxx_madvulcanx;
	this.code=["A"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=10;
	this.boostDamage=0;
	this.hits=15;
	this.priority=8;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3MadVulcan1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3GreenInk(){
	this.id="SF3GreenInk";
	this.name="GreenInk";
	this.image=SF3xxx_greenink;
	this.code=["D", "H", "N"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=90;
	this.boostDamage=0;
	this.hits=1;
	this.priority=7;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3AirSpread3()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3GreenInk()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		var fakeDefender = {
			x: -1,
			y: -1,
			invis: 0,
			guard: null
		};
		this.tempInk = new SF3GreenInk();
		for(var x = 0; x < cells.length; x++){
			for(var y = 0; y < cells[x].length; y++){
				fakeDefender.x = x;
				fakeDefender.y = y;
				if(this.tempInk.hithuh(attacker, fakeDefender)){
					board.convertPanel(x, y, PANELTYPE.GRASS);
				}
			}
		}
	};
}

function SF3BlueInk(){
	this.id="SF3BlueInk";
	this.name="BlueInk";
	this.image=SF3xxx_blueink;
	this.code=["I", "K", "O"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=110;
	this.boostDamage=0;
	this.hits=1;
	this.priority=7;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3AirSpread3()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3BlueInk()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		var fakeDefender = {
			x: -1,
			y: -1,
			invis: 0,
			guard: null
		};
		this.tempInk = new SF3BlueInk();
		for(var x = 0; x < cells.length; x++){
			for(var y = 0; y < cells[x].length; y++){
				fakeDefender.x = x;
				fakeDefender.y = y;
				if(this.tempInk.hithuh(attacker, fakeDefender)){
					board.convertPanel(x, y, PANELTYPE.ICE);
				}
			}
		}
	};
}

function SF3PurpleInk(){
	this.id="SF3PurpleInk";
	this.name="PurpleInk";
	this.image=SF3xxx_purpleink;
	this.code=["P", "Q", "R"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=130;
	this.boostDamage=0;
	this.hits=1;
	this.priority=7;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3AirSpread3()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3PurpleInk()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		var fakeDefender = {
			x: -1,
			y: -1,
			invis: 0,
			guard: null
		};
		this.tempInk = new SF3PurpleInk();
		for(var x = 0; x < cells.length; x++){
			for(var y = 0; y < cells[x].length; y++){
				fakeDefender.x = x;
				fakeDefender.y = y;
				if(this.tempInk.hithuh(attacker, fakeDefender)){
					board.convertPanel(x, y, PANELTYPE.POISON);
				}
			}
		}
	};
}

function SF3HeatGrenade(){
	this.id="SF3HeatGrenade";
	this.name="HeatGrenade";
	this.image=SF3xxx_heatgrenade;
	this.code=["B", "U", "Y"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=120;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new BN6BigBomb()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3WoodGrenade(){
	this.id="SF3WoodGrenade";
	this.name="WoodGrenade";
	this.image=SF3xxx_greengrenade;
	this.code=["B", "G", "M"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		return (new BN6GrassSeed()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new BN6GrassSeed()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new BN6GrassSeed()).effectmiss(attacker, defender);
	};
}

function SF3IceGrenade(){
	this.id="SF3IceGrenade";
	this.name="IceGrenade";
	this.image=SF3xxx_icegrenade;
	this.code=["L", "P", "Y"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.ice];
	this.hithuh= function(attacker, defender){
		return (new BN6IceSeed()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new BN6IceSeed()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new BN6IceSeed()).effectmiss(attacker, defender);
	};
}

function SF3BigGrenade(){
	this.id="SF3BigGrenade";
	this.name="BigGrenade";
	this.image=SF3xxx_biggrenade;
	this.code=["O", "Q", "W"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=60;
	this.boostDamage=0;
	this.hits=3;
	this.priority=9;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3HeatGrenade()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3BigGrenade()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -3;
		if(attacker.name === playerOne.name){
			this.xDirection = 3;
		}
		this.x = attacker.x + this.xDirection;
		this.y = attacker.y
		if(!board.isHole(this.x, this.y) && cells[this.x][this.y].panelType !== PANELTYPE.MISS){
			if(board.cellHasSolidObject(this.x, this.y)){
				board.convertPanel(this.x, this.y, PANELTYPE.NORMAL);
			}
			else{
				for(var i = -1; i < 2; i++){
					for(var j = -1; j < 2; j++){
						board.convertPanel(this.x+i, this.y+j, PANELTYPE.NORMAL);
					}
				}
			}
		}
	};
}

function SF3BushidoX(){
	this.id="SF3BushidoX";
	this.name="BushidoX";
	this.image=SF3xxx_edogiribladex;
	this.code=["J"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=200;
	this.boostDamage=0;
	this.hits=1;
	this.priority=6;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		this.bushido1 = new SF3Bushido1();
		this.hitbool = this.bushido1.hithuh(attacker, defender);
		this.addDamage = this.bushido1.addDamage;
		this.elements = this.bushido1.elements;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3ElecSlash(){
	this.id="SF3ElecSlash";
	this.name="ElecSlash";
	this.image=SF3xxx_elecslash;
	this.code=["F", "G", "R"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=6;
	this.elements=[ELEMENTS.elec, ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new SF3WideSword()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		if(defender.guard === null){
			defender.stunned = 1;
		}
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3WoodSlash(){
	this.id="SF3WoodSlash";
	this.name="WoodSlash";
	this.image=SF3xxx_woodslash;
	this.code=["A", "S", "W"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=180;
	this.boostDamage=0;
	this.hits=1;
	this.priority=6;
	this.elements=[ELEMENTS.wood, ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new SF3WideSword()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3FireSlash(){
	this.id="SF3FireSlash";
	this.name="FireSlash";
	this.image=SF3xxx_fireslash;
	this.code=["K", "T", "U"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=200;
	this.boostDamage=0;
	this.hits=1;
	this.priority=6;
	this.elements=[ELEMENTS.fire, ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new SF3WideSword()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3BreakSabre(){
	this.id="SF3BreakSabre";
	this.name="BreakSabre";
	this.image=SF3xxx_breaksabre;
	this.code=["A", "D", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=200;
	this.boostDamage=0;
	this.hits=1;
	this.priority=6;
	this.elements=[ELEMENTS.break, ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		if(defender.invis > 1){
			if(attacker.name === playerOne.name){
				if(attacker.x === defender.x && attacker.y + 1 === defender.y){
					return true;
				}
				if(attacker.x + 1 === defender.x && attacker.y === defender.y){
					return true;
				}
				if(attacker.x + 1 === defender.x && attacker.y - 1=== defender.y){
					return true;
				}
			}
			else{
				if(attacker.x === defender.x && attacker.y - 1 === defender.y){
					return true;
				}
				if(attacker.x - 1 === defender.x && attacker.y === defender.y){
					return true;
				}
				if(attacker.x - 1 === defender.x && attacker.y + 1=== defender.y){
					return true;
				}
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3BreakSabreX(){
	this.id="SF3BreakSabreX";
	this.name="BreakSabreX";
	this.image=SF3xxx_breaksabrex;
	this.code=["Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=250;
	this.boostDamage=0;
	this.hits=1;
	this.priority=6;
	this.elements=[ELEMENTS.break, ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new SF3BreakSabre()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3GiantAxe(){
	this.id="SF3GiantAxe";
	this.name="GiantAxe";
	this.image=SF3xxx_giantaxe;
	this.code=["G", "S", "V"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=320;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.break, ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new SF3GreatAxe()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3Muramasa(){
	this.id="SF3Muramasa";
	this.name="Muramasa";
	this.image=SF3xxx_muramasablade;
	this.code=["E", "H", "J"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=1;
	this.boostDamage=0;
	this.hits=1;
	this.priority=6;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		this.damage = playerHP - attacker.hp;
		if(this.damage < 1){
			this.damage = 1;
		}
		if(this.damage > 500){
			this.damage = 500;
		}
		return (new SF3LongSword()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3SwordFighter1(){
	this.id="SF3SwordFighter1";
	this.name="SwordFighter1";
	this.image=SF3xxx_swordfighter1;
	this.code=["I", "J", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=50;
	this.boostDamage=0;
	this.hits="1-3";
	this.priority=7;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		this.hits = 0;
		if((new SF3SwordFighter1()).slash1(attacker, defender)){
			this.hits++;
		}
		if((new SF3SwordFighter1()).slash2(attacker, defender)){
			this.hits++;
		}
		if((new SF3SwordFighter1()).slash3(attacker, defender)){
			this.hits++;
		}
		if(this.hits < 1){
			this.hits = 1;
			return false;
		}
		return true;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.slash1 = function(attacker, defender){
		return (new SF3Sword()).hithuh(attacker, defender);
	}
	this.slash2 = function(attacker, defender){
		return (new SF3WideSword()).hithuh(attacker, defender);
	}
	this.slash3 = function(attacker, defender){
		return (new SF3LongSword()).hithuh(attacker, defender);
	}
}

function SF3SwordFighter2(){
	this.id="SF3SwordFighter2";
	this.name="SwordFighter2";
	this.image=SF3xxx_swordfighter2;
	this.code=["F", "J", "N"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=50;
	this.boostDamage=0;
	this.hits="1-4";
	this.priority=7;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		this.hits = 0;
		if((new SF3SwordFighter1()).slash1(attacker, defender)){
			this.hits++;
		}
		if((new SF3SwordFighter1()).slash2(attacker, defender)){
			this.hits++;
		}
		if((new SF3SwordFighter1()).slash3(attacker, defender)){
			this.hits++;
		}
		if((new SF3SwordFighter2()).slash4(attacker, defender)){
			this.hits++;
		}
		if(this.hits < 1){
			this.hits = 1;
			return false;
		}
		return true;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.slash4 = function(attacker, defender){
		return (new SF3BreakSabre()).hithuh(attacker, defender);
	}
}

function SF3SwordFighter3(){
	this.id="SF3SwordFighter3";
	this.name="SwordFighter3";
	this.image=SF3xxx_swordfighter3;
	this.code=["C", "H", "J"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=50;
	this.boostDamage=0;
	this.hits="1-5";
	this.priority=7;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		this.hits = 0;
		if((new SF3SwordFighter1()).slash1(attacker, defender)){
			this.hits++;
		}
		if((new SF3SwordFighter1()).slash2(attacker, defender)){
			this.hits++;
		}
		if((new SF3SwordFighter1()).slash3(attacker, defender)){
			this.hits++;
		}
		if((new SF3SwordFighter2()).slash4(attacker, defender)){
			this.hits++;
		}
		if((new SF3SwordFighter3()).slash5(attacker, defender)){
			this.hits++;
		}
		if(this.hits < 1){
			this.hits = 1;
			return false;
		}
		return true;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.slash5 = function(attacker, defender){
		return (new SF3GreatAxe()).hithuh(attacker, defender);
	}
}

function SF3SwordFighterX(){
	this.id="SF3SwordFighterX";
	this.name="SwordFighterX";
	this.image=SF3xxx_swordfighterx;
	this.code=["J"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=60;
	this.boostDamage=0;
	this.hits="1-5";
	this.priority=7;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		this.hits = 0;
		if((new SF3SwordFighter1()).slash1(attacker, defender)){
			this.hits++;
		}
		if((new SF3SwordFighter1()).slash2(attacker, defender)){
			this.hits++;
		}
		if((new SF3SwordFighter1()).slash3(attacker, defender)){
			this.hits++;
		}
		if((new SF3SwordFighter2()).slash4(attacker, defender)){
			this.hits++;
		}
		if((new SF3SwordFighter3()).slash5(attacker, defender)){
			this.hits++;
		}
		if(this.hits < 1){
			this.hits = 1;
			return false;
		}
		return true;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3WindyAttackX(){
	this.id="SF3WindyAttackX";
	this.name="WindyAttackX";
	this.image=SF3xxx_windyattackx;
	this.code=["Q"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=180;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		return (new SF3WindyAttack1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3WindyAttack1()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3WindyAttack1()).effectmiss(attacker, defender);
	};
}

function SF3SynchroHookX(){
	this.id="SF3SynchroHookX";
	this.name="SynchroHookX";
	this.image=SF3xxx_synchrohookx;
	this.code=["U"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=180;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3SynchroHook1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3StunKnuckle(){
	this.id="SF3StunKnuckle";
	this.name="StunKnuckle";
	this.image=SF3xxx_stunknuckle;
	this.code=["F", "G", "Q"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=130;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new SF3Sword()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		if(defender.guard === null){
			defender.stunned = 1;
		}
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3PoisonKnuckle(){
	this.id="SF3PoisonKnuckle";
	this.name="PoisonKnuckle";
	this.image=SF3xxx_poisonknuckle;
	this.code=["C", "J", "N"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3Sword()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		if(defender.guard === null){
			defender.bugs = defender.bugs.concat([new HPBug(10)]);
		}
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3FreezeKnuckle(){
	this.id="SF3FreezeKnuckle";
	this.name="FreezeKnuckle";
	this.image=SF3xxx_freezeknuckle;
	this.code=["A", "K", "O"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=180;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.ice];
	this.hithuh= function(attacker, defender){
		return (new SF3Sword()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		if(defender.guard === null){
			defender.frozen = 1;
		}
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3DestroyUpper(){
	this.id="SF3DestroyUpper";
	this.name="DestroyUpper";
	this.image=SF3xxx_destroyupper;
	this.code=["M", "P", "W"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=140;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3Sword()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		//TODO: Navicust doesn't really exist so do nothing?
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3DrillArmX(){
	this.id="SF3DrillArmX";
	this.name="DrillArmX";
	this.image=SF3xxx_drillarmx;
	this.code=["D"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=80;
	this.boostDamage=0;
	this.hits="1-3";
	this.priority=4;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.localDrillArm = new BN6DrillArm();
		this.hitbool = this.localDrillArm.hithuh(attacker, defender);
		this.hits = this.localDrillArm.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){
		(new BN6DrillArm()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3HurricaneDance(){
	this.id="SF3HurricaneDance";
	this.name="HurricaneDance";
	this.image=SF3xxx_hurricanedance;
	this.code=["O"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=60;
	this.boostDamage=0;
	this.hits=4;
	this.priority=4;
	this.elements=[ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		return (new BN6Kunai()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3PlatinumMeteor(){
	this.id="SF3PlatinumMeteor";
	this.name="PlatinumMeteor";
	this.image=SF3xxx_platinummeteor;
	this.code=["Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=90;
	this.boostDamage=0;
	this.hits="1-9";
	this.priority=6;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		this.localWhiteMeteor = new SF3WhiteMeteor();
		this.hitbool = this.localWhiteMeteor.hithuh(attacker, defender);
		this.hits = this.localWhiteMeteor.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3ExtinctionMeteor(){
	this.id="SF3ExtinctionMeteor";
	this.name="ExtinctionMeteor";
	this.image=SF3xxx_zetsumetsumeteor;
	this.code=["B", "I", "T"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=70;
	this.boostDamage=0;
	this.hits="1-9";
	this.priority=0;
	this.elements=[ELEMENTS.fire, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.hits = 0;
		this.hitbool = false;
		if(defender.invis < 1){
			this.targetSide = SIDE.LEFT;
			this.xDirection = 1;
			this.xStart = 0;
			this.xEnd = 5;
			if(attacker.name === playerOne.name){
				this.targetSide = SIDE.RIGHT;
				this.xDirection = -1;
				this.xStart = 5;
				this.xEnd = 0;
			}
			this.x = this.xStart;
			var i = 0;
			this.y = 0;
			while(i < 9){
				if(cells[this.x][this.y].side === this.targetSide && cells[this.x][this.y].panelType !== PANELTYPE.MISS){
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
	this.effecthit= function(attacker, defender){
		(new SF3ExtinctionMeteor()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		var fakeDefender = {
			x: -1,
			y: -1,
			invis: 0,
			guard: null
		};
		this.tempmeteor = new SF3ExtinctionMeteor();
		for(var x = 0; x < cells.length; x++){
			for(var y = 0; y < cells[x].length; y++){
				fakeDefender.x = x;
				fakeDefender.y = y;
				if(this.tempmeteor.hithuh(attacker, fakeDefender)){
					board.convertPanel(x, y, PANELTYPE.CRACKED);
				}
			}
		}
	};
}

function SF3RadarMissile(){
	this.id="SF3RadarMissile";
	this.name="RadarMissile";
	this.image=SF3xxx_radarmissile;
	this.code=["F", "S", "U"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=200;
	this.boostDamage=0;
	this.hits=1;
	this.priority=7;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		this.targetPlayer = playerOne;
		if(attacker.name === playerOne.name){
			this.targetPlayer = playerTwo;
		}
		if(this.targetPlayer.type === ELEMENTS.normal){
			return defender.x === this.targetPlayer.x && defender.y === this.targetPlayer.y;
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3GrandWaveX(){
	this.id="SF3GrandWaveX";
	this.name="GrandWaveX";
	this.image=SF3xxx_groundwavex;
	this.code=["N"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3GrandWave1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3JetAttackX(){
	this.id="SF3JetAttackX";
	this.name="JetAttackX";
	this.image=SF3xxx_jetattackx;
	this.code=["Y"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=180;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.wind, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3JetAttack1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3BukiX(){
	this.id="SF3BukiX";
	this.name="BukiX";
	this.image=SF3xxx_hammerweaponx;
	this.code=["G"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=190;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		this.localBuki = new SF3Buki1();
		this.hitbool = this.localBuki.hithuh(attacker, defender);
		this.elements = this.localBuki.elements;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){
		(new SF3Buki1()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3Buki1()).effectmiss(attacker, defender);
	};
}

function SF3SmileCoinX(){
	this.id="SF3SmileCoinX";
	this.name="SmileCoinX";
	this.image=SF3xxx_smilecoinx;
	this.code=["P"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=60;
	this.boostDamage=0;
	this.hits=3;
	this.priority=9;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3SmileCoin1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3BigDropX(){
	this.id="SF3BigDropX";
	this.name="BigDropX";
	this.image=SF3xxx_heavydawnx;
	this.code=["A"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=280;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3BigDrop1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3BigDrop1()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3BigDrop1()).effectmiss(attacker, defender);
	};
}

function SF3BuzzsawX(){
	this.id="SF3BuzzsawX";
	this.name="BuzzsawX";
	this.image=SF3xxx_gizawheelx;
	this.code=["M"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=180;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new SF3Buzzsaw1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3SkullArrowX(){
	this.id="SF3SkullArrowX";
	this.name="SkullArrowX";
	this.image=SF3xxx_skullarrowx;
	this.code=["B"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=190;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3SkullArrow1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3SkullArrow1()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3MuTechnologyX(){
	this.id="SF3MuTechnologyX";
	this.name="MuTechnologyX";
	this.image=SF3xxx_mutechnologyx;
	this.code=["R"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=80;
	this.boostDamage=0;
	this.hits=3;
	this.priority=9;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.addDamage = null;
		if(cells[attacker.x][attacker.y].panelType === PANELTYPE.holy){
			this.addDamage = 80;
		}
		return (new SF3JetAttack1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3Scythe1(){
	this.id="SF3Scythe1";
	this.name="Scythe1";
	this.image=SF3xxx_deathscythe1;
	this.code=["E", "Q", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=20;
	this.boostDamage=0;
	this.hits="1,3";
	this.priority=9;
	this.elements=[ELEMENTS.sword, ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		if((new SF3Sword()).hithuh(attacker, defender)){
			this.hits = 1;
			return true;
		}
		if((new SF3LongSword()).hithuh(attacker, defender)){
			this.hits = 1;
			return true;
		}
		if(defender.invis < 1){
			this.xDir = -1;
			if(attacker.name === playerOne.name){
				this.xDir = 1;
			}
			if(!board.cellHasSolidObject(attacker.x + this.xDir, attacker.y)){
				if(!board.cellHasSolidObject(attacker.x + this.xDir*2, attacker.y)){
					return cards.around(attacker.x + this.xDir*2, attacker.y, defender);
				}
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3Scythe2(){
	this.id="SF3Scythe2";
	this.name="Scythe2";
	this.image=SF3xxx_deathscythe2;
	this.code=["J", "Q", "R"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=30;
	this.boostDamage=0;
	this.hits="1,3";
	this.priority=9;
	this.elements=[ELEMENTS.sword, ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		this.scythe = new SF3Scythe1();
		this.hitbool = this.scythe.hithuh(attacker, defender);
		this.hits = this.scythe.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3Scythe3(){
	this.id="SF3Scythe3";
	this.name="Scythe3";
	this.image=SF3xxx_deathscythe3;
	this.code=["D", "Q", "Y"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=40;
	this.boostDamage=0;
	this.hits="1,3";
	this.priority=9;
	this.elements=[ELEMENTS.sword, ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		this.scythe = new SF3Scythe1();
		this.hitbool = this.scythe.hithuh(attacker, defender);
		this.hits = this.scythe.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3ScytheX(){
	this.id="SF3ScytheX";
	this.name="ScytheX";
	this.image=SF3xxx_deathscythex;
	this.code=["Q"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=60;
	this.boostDamage=0;
	this.hits="1,3";
	this.priority=9;
	this.elements=[ELEMENTS.sword, ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		this.scythe = new SF3Scythe1();
		this.hitbool = this.scythe.hithuh(attacker, defender);
		this.hits = this.scythe.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3PuffBlast1(){
	this.id="SF3PuffBlast1";
	this.name="PuffBlast1";
	this.image=SF3xxx_kesranposran1;
	this.code=["F", "R", "V"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=80;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			this.xDir = -2;
			if(attacker.name === playerOne.name){
				this.xDir = 2;
			}
			return attacker.x + this.xDir === defender.x;
		}
		return false;
	};
	this.effecthit= function(attacker, defender){
		(new SF3PuffBlast1()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		if(attacker.invis < 1){
			attacker.invis = 1;
		}
	};
}

function SF3PuffBlast2(){
	this.id="SF3PuffBlast2";
	this.name="PuffBlast2";
	this.image=SF3xxx_kesranposran2;
	this.code=["F", "G", "S"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3PuffBlast1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3PuffBlast1()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3PuffBlast1()).effectmiss(attacker, defender);
	};
}

function SF3PuffBlast3(){
	this.id="SF3PuffBlast3";
	this.name="PuffBlast3";
	this.image=SF3xxx_kesranposran3;
	this.code=["F", "L", "U"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=130;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3PuffBlast1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3PuffBlast1()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3PuffBlast1()).effectmiss(attacker, defender);
	};
}

function SF3PuffBlastX(){
	this.id="SF3PuffBlastX";
	this.name="PuffBlastX";
	this.image=SF3xxx_kesranposranx;
	this.code=["F"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=160;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3PuffBlast1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3PuffBlast1()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3PuffBlast1()).effectmiss(attacker, defender);
	};
}

function SF3TimeBombX(){
	this.id="SF3TimeBombX";
	this.name="TimeBombX";
	this.image=SF3xxx_countbombx;
	this.code=["C"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=240;
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
				this.tempX++;
			}
			this.bombPlaced = true;
		}
	};
}

function SF3HeatUpperX(){
	this.id="SF3HeatUpperX";
	this.name="HeatUpperX";
	this.image=SF3xxx_heatupperx;
	this.code=["E"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=250;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.fire, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3HeatUpper1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3MechFlameX(){
	this.id="SF3MechFlameX";
	this.name="MechFlameX";
	this.image=SF3xxx_machineflamex;
	this.code=["F"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=200;
	this.boostDamage=0;
	this.hits=1;
	this.priority=6;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new SF3MechFlame1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3MechFlame1()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3MechFlame1()).effectmiss(attacker, defender);
	};
}

function SF3MadFireX(){
	this.id="SF3MadFireX";
	this.name="MadFireX";
	this.image=SF3xxx_angerfirex;
	this.code=["T"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=220;
	this.boostDamage=0;
	this.hits="1,3";
	this.priority=7;
	this.elements=[ELEMENTS.fire, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.localMadFire = new SF3MadFire1();
		this.hitbool = this.localMadFire.hithuh(attacker, defender);
		this.hits = this.localMadFire.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3DanceFire1(){
	this.id="SF3DanceFire1";
	this.name="DanceFire1";
	this.image=SF3xxx_dabaflame1;
	this.code=["L", "U", "W"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=140;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new SF3MechFlame1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3DanceFire2(){
	this.id="SF3DanceFire2";
	this.name="DanceFire2";
	this.image=SF3xxx_dabaflame2;
	this.code=["G", "I", "W"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=160;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			if((new SF3DanceFire1()).hithuh(attacker, defender)){
				return true;
			}
			this.xDir = -3;
			if(attacker.name === playerOne.name){
				this.xDir = 3;
			}
			attacker.x = attacker.x + this.xDir;
			this.hitbool = (new SF3WideSword()).hithuh(attacker, defender);
			attacker.x = attacker.x - this.xDir;
			return this.hitbool;
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3DanceFire3(){
	this.id="SF3DanceFire3";
	this.name="DanceFire3";
	this.image=SF3xxx_dabaflame3;
	this.code=["J", "V", "W"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=190;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			if((new SF3DanceFire1()).hithuh(attacker, defender)){
				return true;
			}
			attacker.y = attacker.y + 1;
			this.hitbool1 = (new SF3LongSword()).hithuh(attacker, defender);
			attacker.y = attacker.y - 2;
			this.hitbool2 = (new SF3LongSword()).hithuh(attacker, defender);
			attacker.y = attacker.y + 1;
			return this.hitbool1 || this.hitbool2;
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3DanceFireX(){
	this.id="SF3DanceFireX";
	this.name="DanceFireX";
	this.image=SF3xxx_dabaflamex;
	this.code=["W"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=230;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new SF3DanceFire3()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3KiloBomb1(){
	this.id="SF3KiloBomb1";
	this.name="KiloBomb1";
	this.image=SF3xxx_bobobonbomb1;
	this.code=["C", "L", "O"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.fire, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3MiniGrenade()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -3;
		if(attacker.name === playerOne.name){
			this.xDirection = 3;
		}
		if(board.isCellPlayerValid(attacker.x + this.xDirection, attacker.y)){
			cells[attacker.x+this.xDirection][attacker.y].object.push(new BN6BlackBombObj(attacker.x+this.xDirection, attacker.y, 150));
		}
	};
}

function SF3KiloBomb2(){
	this.id="SF3KiloBomb2";
	this.name="KiloBomb2";
	this.image=SF3xxx_bobobonbomb2;
	this.code=["C", "T", "W"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=200;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.fire, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3KiloBomb1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -3;
		if(attacker.name === playerOne.name){
			this.xDirection = 3;
		}
		if(board.isCellPlayerValid(attacker.x + this.xDirection, attacker.y)){
			cells[attacker.x+this.xDirection][attacker.y].object.push(new BN6BlackBombObj(attacker.x+this.xDirection, attacker.y, 200));
		}
	};
}

function SF3KiloBomb3(){
	this.id="SF3KiloBomb3";
	this.name="KiloBomb3";
	this.image=SF3xxx_bobobonbomb3;
	this.code=["B", "C", "Y"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=250;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.fire, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3KiloBomb1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -3;
		if(attacker.name === playerOne.name){
			this.xDirection = 3;
		}
		if(board.isCellPlayerValid(attacker.x + this.xDirection, attacker.y)){
			cells[attacker.x+this.xDirection][attacker.y].object.push(new BN6BlackBombObj(attacker.x+this.xDirection, attacker.y, 250));
		}
	};
}

function SF3KiloBombX(){
	this.id="SF3KiloBombX";
	this.name="KiloBombX";
	this.image=SF3xxx_bobobonbombx;
	this.code=["C"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=300;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.fire, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3KiloBomb1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -3;
		if(attacker.name === playerOne.name){
			this.xDirection = 3;
		}
		if(board.isCellPlayerValid(attacker.x + this.xDirection, attacker.y)){
			cells[attacker.x+this.xDirection][attacker.y].object.push(new BN6BlackBombObj(attacker.x+this.xDirection, attacker.y, 300));
		}
	};
}

function SF3WideWaveX(){
	this.id="SF3WideWaveX";
	this.name="WideWaveX";
	this.image=SF3xxx_widewavex;
	this.code=["V"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new SF3WideWave1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3BubbleHookX(){
	this.id="SF3BubbleHookX";
	this.name="BubbleHookX";
	this.image=SF3xxx_bubblehookx;
	this.code=["K"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=120;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new SF3BubbleHook1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3BubbleHook1()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3SharkAttackX(){
	this.id="SF3SharkAttackX";
	this.name="SharkAttackX";
	this.image=SF3xxx_sharkcutterx;
	this.code=["L"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new SF3SharkAttack1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		if(attacker.name === playerOne.name){
			if(board.isCellPlayerValid(attacker.x+1, attacker.y)){
				cells[attacker.x+1][attacker.y].object.push(new SF3SharkAttackObj(attacker.x+1, attacker.y, attacker, defender, this.damage));
			}
		}
		else{
			if(board.isCellPlayerValid(attacker.x-1, attacker.y)){
				cells[attacker.x-1][attacker.y].object.push(new SF3SharkAttackObj(attacker.x-1, attacker.y, attacker, defender, this.damage));
			}
		}
	};
}

function SF3IceSpinX(){
	this.id="SF3IceSpinX";
	this.name="IceSpinX";
	this.image=SF3xxx_icespinningx;
	this.code=["I"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=130;
	this.boostDamage=0;
	this.hits="1-4";
	this.priority=8;
	this.elements=[ELEMENTS.aqua, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.localIceSpin = new SF3IceSpin1();
		this.hitbool = this.localIceSpin.hithuh(attacker, defender);
		this.hits = this.localIceSpin.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3Snowball1(){
	this.id="SF3Snowball1";
	this.name="Snowball1";
	this.image=SF3xxx_snowball1;
	this.code=["B", "K", "P"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		this.localBizzardBall = new BN6BlizzardBall();
		this.hitbool = this.localBizzardBall.hithuh(attacker, defender);
		this.addDamage = this.localBizzardBall.addDamage;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){
		(new BN6BlizzardBall()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new BN6BlizzardBall()).effectmiss(attacker, defender);
	};
}

function SF3Snowball2(){
	this.id="SF3Snowball2";
	this.name="Snowball2";
	this.image=SF3xxx_snowball2;
	this.code=["A", "B", "R"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=120;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		this.localBizzardBall = new BN6BlizzardBall();
		this.hitbool = this.localBizzardBall.hithuh(attacker, defender);
		this.addDamage = this.localBizzardBall.addDamage;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){
		(new BN6BlizzardBall()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new BN6BlizzardBall()).effectmiss(attacker, defender);
	};
}

function SF3Snowball3(){
	this.id="SF3Snowball3";
	this.name="Snowball3";
	this.image=SF3xxx_snowball3;
	this.code=["B", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		this.localBizzardBall = new BN6BlizzardBall();
		this.hitbool = this.localBizzardBall.hithuh(attacker, defender);
		this.addDamage = this.localBizzardBall.addDamage;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){
		(new BN6BlizzardBall()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new BN6BlizzardBall()).effectmiss(attacker, defender);
	};
}

function SF3SnowballX(){
	this.id="SF3SnowballX";
	this.name="SnowballX";
	this.image=SF3xxx_snowballx;
	this.code=["B"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=180;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		this.localBizzardBall = new BN6BlizzardBall();
		this.hitbool = this.localBizzardBall.hithuh(attacker, defender);
		this.addDamage = this.localBizzardBall.addDamage;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){
		(new BN6BlizzardBall()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new BN6BlizzardBall()).effectmiss(attacker, defender);
	};
}

function SF3PiranhaKiss1(){
	this.id="SF3PiranhaKiss1";
	this.name="PiranhaKiss1";
	this.image=SF3xxx_pirahnakiss1;
	this.code=["N", "V", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=10;
	this.boostDamage=0;
	this.hits="1-8";
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		this.hits = 0;
		if(defender.invis < 1){
			this.targetPlayer = playerOne;
			if(attacker.name == playerOne.name){
				this.targetPlayer = playerTwo;
			}
			for(var xoff = -1; xoff < 2; xoff++){
				for(var yoff = -1; yoff < 2; yoff++){
					if(board.isCellPlayerValid(this.targetPlayer.x + xoff, this.targetPlayer.y + yoff)){
						this.hits++;
					}
				}
			}
			if(defender.x === this.targetPlayer.x && defender.y === this.targetPlayer.y){
				if(this.hits > 0){
					return true;
				}
			}
		}
		this.hits = 1;
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3PiranhaKiss2(){
	this.id="SF3PiranhaKiss2";
	this.name="PiranhaKiss2";
	this.image=SF3xxx_pirahnakiss2;
	this.code=["N", "O", "T"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=20;
	this.boostDamage=0;
	this.hits="1-8";
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		this.localPiranha = new SF3PiranhaKiss1();
		this.hitbool = this.localPiranha.hithuh(attacker, defender);
		this.hits = this.localPiranha.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3PiranhaKiss3(){
	this.id="SF3PiranhaKiss3";
	this.name="PiranhaKiss3";
	this.image=SF3xxx_pirahnakiss3;
	this.code=["C", "J", "N"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=30;
	this.boostDamage=0;
	this.hits="1-8";
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		this.localPiranha = new SF3PiranhaKiss1();
		this.hitbool = this.localPiranha.hithuh(attacker, defender);
		this.hits = this.localPiranha.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3PiranhaKissX(){
	this.id="SF3PiranhaKissX";
	this.name="PiranhaKissX";
	this.image=SF3xxx_pirahnakissx;
	this.code=["N"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=40;
	this.boostDamage=0;
	this.hits="1-8";
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		this.localPiranha = new SF3PiranhaKiss1();
		this.hitbool = this.localPiranha.hithuh(attacker, defender);
		this.hits = this.localPiranha.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3StealthLaserX(){
	this.id="SF3StealthLaserX";
	this.name="StealthLaserX";
	this.image=SF3xxx_stealthlaserx;
	this.code=["N"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=70;
	this.boostDamage=0;
	this.hits=3;
	this.priority=9;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new SF3StealthLaser1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3MummyHandX(){
	this.id="SF3MummyHandX";
	this.name="MummyHandX";
	this.image=SF3xxx_mummyhandx;
	this.code=["I"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=200;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new SF3MummyHand1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3MummyHand1()).hithuh(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3ThunderHeadX(){
	this.id="SF3ThunderHeadX";
	this.name="ThunderHeadX";
	this.image=SF3xxx_inazumaheadx;
	this.code=["R"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=260;
	this.boostDamage=0;
	this.hits=1;
	this.priority=7;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new SF3ThunderHead1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3ThunderHead1()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3ThunderHead1()).effectmiss(attacker, defender);
	};
}

function SF3FlashStrikeX(){
	this.id="SF3FlashStrikeX";
	this.name="FlashStrikeX";
	this.image=SF3xxx_flashspearx;
	this.code=["M"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=40;
	this.boostDamage=0;
	this.hits=5;
	this.priority=8;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new SF3FlashStrike1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3EarthThunder1(){
	this.id="SF3EarthThunder1";
	this.name="EarthThunder1";
	this.image=SF3xxx_thunderofearth1;
	this.code=["M", "N", "U"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=30;
	this.boostDamage=0;
	this.hits="1-9";
	this.priority=4;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		this.hits = 0;
		if(attacker.name === playerOne.name){
			for(var x = 0; x < cells.length; x++){
				for(var y = 0; y < cells[x].length; y++){
					if(cells[x][y].panelType === PANELTYPE.BROKEN){
						if(x < defender.x && x > attacker.x){
							this.hits++;
						}
					}
				}
			}
		}
		else{
			for(var x = cells.length - 1; x >= 0; x--){
				for(var y = cells[x].length - 1; y >= 0; y--){
					if(cells[x][y].panelType === PANELTYPE.BROKEN){
						if(x > defender.x && x < attacker.x){
							this.hits++;
						}
					}
				}
			}
		}
		if(this.hits < 1){
			this.hits = 1;
		}
		if(this.hits > 9){
			this.hits = 9;
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.summond = 0;
		if(attacker.name === playerOne.name){
			for(var x = 0; x < cells.length; x++){
				for(var y = 0; y < cells[x].length; y++){
					if(cells[x][y].panelType === PANELTYPE.BROKEN){
						if(x < defender.x && x > attacker.x && this.summond < 9){
							cells[x][y].object.push(new BN6ThunderBall(x, y, attacker, defender, 4, this.damage, "yellow"));
							this.summond++;
						}
					}
				}
			}
		}
		else{
			for(var x = cells.length - 1; x >= 0; x--){
				for(var y = cells[x].length - 1; y >= 0; y--){
					if(cells[x][y].panelType === PANELTYPE.BROKEN){
						if(x > defender.x && x < attacker.x && this.summond < 9){
							cells[x][y].object.push(new BN6ThunderBall(x, y, attacker, defender, 4, this.damage, "yellow"));
							this.summond++;
						}
					}
				}
			}
		}
	};
}

function SF3EarthThunder2(){
	this.id="SF3EarthThunder2";
	this.name="EarthThunder2";
	this.image=SF3xxx_thunderofearth2;
	this.code=["E", "Q", "U"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=40;
	this.boostDamage=0;
	this.hits="1-9";
	this.priority=4;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new SF3EarthThunder1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.summond = 0;
		if(attacker.name === playerOne.name){
			for(var x = 0; x < cells.length; x++){
				for(var y = 0; y < cells[x].length; y++){
					if(cells[x][y].panelType === PANELTYPE.BROKEN){
						if(x < defender.x && x > attacker.x && this.summond < 9){
							cells[x][y].object.push(new BN6ThunderBall(x, y, attacker, defender, 4, this.damage, "yellow"));
							this.summond++;
						}
					}
				}
			}
		}
		else{
			for(var x = cells.length - 1; x >= 0; x--){
				for(var y = cells[x].length - 1; y >= 0; y--){
					if(cells[x][y].panelType === PANELTYPE.BROKEN){
						if(x > defender.x && x < attacker.x && this.summond < 9){
							cells[x][y].object.push(new BN6ThunderBall(x, y, attacker, defender, 4, this.damage, "yellow"));
							this.summond++;
						}
					}
				}
			}
		}
	};
}

function SF3EarthThunder3(){
	this.id="SF3EarthThunder3";
	this.name="EarthThunder3";
	this.image=SF3xxx_thunderofearth3;
	this.code=["D", "F", "U"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=50;
	this.boostDamage=0;
	this.hits="1-9";
	this.priority=4;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new SF3EarthThunder1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.summond = 0;
		if(attacker.name === playerOne.name){
			for(var x = 0; x < cells.length; x++){
				for(var y = 0; y < cells[x].length; y++){
					if(cells[x][y].panelType === PANELTYPE.BROKEN){
						if(x < defender.x && x > attacker.x && this.summond < 9){
							cells[x][y].object.push(new BN6ThunderBall(x, y, attacker, defender, 4, this.damage, "yellow"));
							this.summond++;
						}
					}
				}
			}
		}
		else{
			for(var x = cells.length - 1; x >= 0; x--){
				for(var y = cells[x].length - 1; y >= 0; y--){
					if(cells[x][y].panelType === PANELTYPE.BROKEN){
						if(x > defender.x && x < attacker.x && this.summond < 9){
							cells[x][y].object.push(new BN6ThunderBall(x, y, attacker, defender, 4, this.damage, "yellow"));
							this.summond++;
						}
					}
				}
			}
		}
	};
}

function SF3EarthThunderX(){
	this.id="SF3EarthThunderX";
	this.name="EarthThunderX";
	this.image=SF3xxx_thunderofearthx;
	this.code=["U"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=60;
	this.boostDamage=0;
	this.hits="1-9";
	this.priority=4;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new SF3EarthThunder1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.summond = 0;
		if(attacker.name === playerOne.name){
			for(var x = 0; x < cells.length; x++){
				for(var y = 0; y < cells[x].length; y++){
					if(cells[x][y].panelType === PANELTYPE.BROKEN){
						if(x < defender.x && x > attacker.x && this.summond < 9){
							cells[x][y].object.push(new BN6ThunderBall(x, y, attacker, defender, 4, this.damage, "yellow"));
							this.summond++;
						}
					}
				}
			}
		}
		else{
			for(var x = cells.length - 1; x >= 0; x--){
				for(var y = cells[x].length - 1; y >= 0; y--){
					if(cells[x][y].panelType === PANELTYPE.BROKEN){
						if(x > defender.x && x < attacker.x && this.summond < 9){
							cells[x][y].object.push(new BN6ThunderBall(x, y, attacker, defender, 4, this.damage, "yellow"));
							this.summond++;
						}
					}
				}
			}
		}
	};
}

function SF3ArachAttackX(){
	this.id="SF3ArachAttackX";
	this.name="ArachAttackX";
	this.image=SF3xxx_dummyspiderx;
	this.code=["O"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=70;
	this.boostDamage=0;
	this.hits=3;
	this.priority=9;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		return (new SF3ArachAttack1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3ArachAttack1()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3ShurikenX(){
	this.id="SF3ShurikenX";
	this.name="ShurikenX";
	this.image=SF3xxx_shurishurikenx;
	this.code=["W"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=160;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		return (new SF3Shuriken1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3PollenShotX(){
	this.id="SF3PollenShotX";
	this.name="PollenShotX";
	this.image=SF3xxx_powdershootx;
	this.code=["S"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=180;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		return (new SF3PollenShot1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3PollenShot1()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3PollenShot1()).effectmiss(attacker, defender);
	};
}

function SF3AcornBombX(){
	this.id="SF3AcornBombX";
	this.name="AcornBombX";
	this.image=SF3xxx_rollingnutsx;
	this.code=["Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=160;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		return (new SF3AcornBomb1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3Squall1(){
	this.id="SF3Squall1";
	this.name="Squall1";
	this.image=SF3xxx_kogarashi1;
	this.code=["A", "H", "M"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=10;
	this.boostDamage=0;
	this.hits=8;
	this.priority=6;
	this.elements=[ELEMENTS.wood, ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		if((new SF3Sword()).hithuh(attacker, defender)){
			return false;
		}
		return (new SF3LongSword()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3Squall2(){
	this.id="SF3Squall2";
	this.name="Squall2";
	this.image=SF3xxx_kogarashi2;
	this.code=["A", "O", "T"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=20;
	this.boostDamage=0;
	this.hits=8;
	this.priority=6;
	this.elements=[ELEMENTS.wood, ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		return (new SF3Squall1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3Squall3(){
	this.id="SF3Squall3";
	this.name="Squall3";
	this.image=SF3xxx_kogarashi3;
	this.code=["A", "G", "R"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=30;
	this.boostDamage=0;
	this.hits=8;
	this.priority=6;
	this.elements=[ELEMENTS.wood, ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		return (new SF3Squall1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3SquallX(){
	this.id="SF3SquallX";
	this.name="SquallX";
	this.image=SF3xxx_kogarashix;
	this.code=["A"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=40;
	this.boostDamage=0;
	this.hits=8;
	this.priority=6;
	this.elements=[ELEMENTS.wood, ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		return (new SF3Squall1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3VulcanSeed1(){
	this.id="SF3VulcanSeed1";
	this.name="VulcanSeed1";
	this.image=SF3xxx_vulcanseed1;
	this.code=["H", "P", "Y"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=20;
	this.boostDamage=0;
	this.hits="3,9";
	this.priority=8;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			if((new SF3Sword()).hithuh(attacker, defender)){
				this.hits = 9;
				return true;
			}
			this.hits = 3;
			this.xDir = -1;
			if(attacker.name === playerOne.name){
				this.xDir = 1;
			}
			if(board.cellHasSolidObject(attacker.x+this.xDir, attacker.y)){
				return false;
			}
			for(var y = -1; y < 2; y++){
				if((new SF3VulcanSeed1()).checkRow(attacker.x + this.xDir*2, attacker.y + y, defender)){
					return true;
				}
			}
		}
		return false;
	};
	this.checkRow = function(x, y, defender){
		if(defender.y === y){
			for(var xInt = 0; xInt < 3; xInt++){
				if(board.cellHasSolidObject(x+xInt, y)){
					return false;
				}
				if(defender.x === x && defender.y === y){
					return true;
				}
			}
		}
		return false;
	}
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3VulcanSeed2(){
	this.id="SF3VulcanSeed2";
	this.name="VulcanSeed2";
	this.image=SF3xxx_vulcanseed2;
	this.code=["F", "I", "Y"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=30;
	this.boostDamage=0;
	this.hits="3,9";
	this.priority=8;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		this.localVulcan = new SF3VulcanSeed1();
		this.hitbool = this.localVulcan.hithuh(attacker, defender);
		this.hits = this.localVulcan.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3VulcanSeed3(){
	this.id="SF3VulcanSeed3";
	this.name="VulcanSeed3";
	this.image=SF3xxx_vulcanseed3;
	this.code=["J", "W", "Y"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=40;
	this.boostDamage=0;
	this.hits="3,9";
	this.priority=8;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		this.localVulcan = new SF3VulcanSeed1();
		this.hitbool = this.localVulcan.hithuh(attacker, defender);
		this.hits = this.localVulcan.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3VulcanSeedX(){
	this.id="SF3VulcanSeedX";
	this.name="VulcanSeedX";
	this.image=SF3xxx_vulcanseedx;
	this.code=["Y"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=50;
	this.boostDamage=0;
	this.hits="3,9";
	this.priority=8;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		this.localVulcan = new SF3VulcanSeed1();
		this.hitbool = this.localVulcan.hithuh(attacker, defender);
		this.hits = this.localVulcan.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3BeastSlapX(){
	this.id="SF3BeastSlapX";
	this.name="BeastSlapX";
	this.image=SF3xxx_beastswingx;
	this.code=["H"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=240;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new SF3BeastSlap1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3BeastSlap1()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3BeastSlap1()).effectmiss(attacker, defender);
	};
}

function SF3NoisedWizardX(){
	this.id="SF3NoisedWizardX";
	this.name="NoisedWizardX";
	this.image=SF3xxx_noisedwizardx;
	this.code=["P"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=210;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new SF3NoisedWizard1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3MalWizardX(){
	this.id="SF3MalWizardX";
	this.name="MalWizardX";
	this.image=SF3xxx_heelwizardx;
	this.code=["V"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=290;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new SF3MalWizard1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3MalWizard1()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3SpinBlade1(){
	this.id="SF3SpinBlade1";
	this.name="SpinBlade1";
	this.image=SF3xxx_dancingblade1;
	this.code=["E", "L", "Y"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=120;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			this.xArray = [2, 1, 1, 0, 0, 0];
			this.yArray = [0, 0, 1, 0, 1, 2];
			if(attacker.name === playerOne.name){
				this.xArray = [3, 4, 4, 5, 5, 5];
				this.yArray = [2, 2, 1, 2, 1, 0];
			}
			for(var i = 0; i < this.xArray.length; i++){
				if(defender.x === this.xArray[i]){
					if(defender.y === this.yArray[i]){
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

function SF3SpinBlade2(){
	this.id="SF3SpinBlade2";
	this.name="SpinBlade2";
	this.image=SF3xxx_dancingblade2;
	this.code=["E", "K", "Q"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new SF3SpinBlade1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3SpinBlade3(){
	this.id="SF3SpinBlade3";
	this.name="SpinBlade3";
	this.image=SF3xxx_dancingblade3;
	this.code=["A", "E", "N"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=180;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new SF3SpinBlade1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3SpinBladeX(){
	this.id="SF3SpinBladeX";
	this.name="SpinBladeX";
	this.image=SF3xxx_dancingbladex;
	this.code=["E"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=210;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new SF3SpinBlade1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3BlackHoleX(){
	this.id="SF3BlackHoleX";
	this.name="BlackHoleX";
	this.image=SF3xxx_blackholex;
	this.code=["T"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=190;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return defender.hp <= this.damage;
	};
	this.effecthit= function(attacker, defender){
		defender.hp = 0;
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3JungleStorm(){
	this.id="SF3JungleStorm";
	this.name="JungleStorm";
	this.image=SF3xxx_junglestorm;
	this.code=["B", "N", "P"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=30;
	this.boostDamage=0;
	this.hits="1-18";
	this.priority=0;
	this.elements=[ELEMENTS.wood, ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			this.tempX = attacker.x;
			attacker.x = defender.x;
			this.hitbool = (new SF3Cannon()).hithuh(attacker, defender);
			attacker.x = this.tempX;

			this.hits = 0;
			for(var x = 0; x < cells.length; x++){
				for(var y = 0; y < cells[x].length; y++){
					if(cells[x][y].panelType === PANELTYPE.GRASS){
						this.hits++;
					}
				}
			}
			if(this.hits < 1){
				this.hits = 1;
				return false;
			}
			return true;
		}
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		for(var x = 0; x < cells.length; x++){
			for(var y = 0; y < cells[x].length; y++){
				if(cells[x][y].panelType === PANELTYPE.POISON){
					board.convertPanel(x, y, PANELTYPE.GRASS);
				}
			}
		}
	};
}

function SF3SnowStorm(){
	this.id="SF3SnowStorm";
	this.name="SnowStorm";
	this.image=SF3xxx_snowstorm;
	this.code=["H", "U", "Y"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=35;
	this.boostDamage=0;
	this.hits="1-18";
	this.priority=0;
	this.elements=[ELEMENTS.aqua, ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			this.tempX = attacker.x;
			attacker.x = defender.x;
			this.hitbool = (new SF3Cannon()).hithuh(attacker, defender);
			attacker.x = this.tempX;

			this.hits = 0;
			for(var x = 0; x < cells.length; x++){
				for(var y = 0; y < cells[x].length; y++){
					if(cells[x][y].panelType === PANELTYPE.ICE){
						this.hits++;
					}
				}
			}
			if(this.hits < 1){
				this.hits = 1;
				return false;
			}
			return true;
		}
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		for(var x = 0; x < cells.length; x++){
			for(var y = 0; y < cells[x].length; y++){
				if(cells[x][y].panelType === PANELTYPE.ICE){
					board.convertPanel(x, y, PANELTYPE.NORMAL);
				}
			}
		}
	};
}

function SF3PoisonStorm(){
	this.id="SF3PoisonStorm";
	this.name="PoisonStorm";
	this.image=SF3xxx_poisonstorm;
	this.code=["E", "V", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=40;
	this.boostDamage=0;
	this.hits="1-18";
	this.priority=0;
	this.elements=[ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			this.tempX = attacker.x;
			attacker.x = defender.x;
			this.hitbool = (new SF3Cannon()).hithuh(attacker, defender);
			attacker.x = this.tempX;

			this.hits = 0;
			for(var x = 0; x < cells.length; x++){
				for(var y = 0; y < cells[x].length; y++){
					if(cells[x][y].panelType === PANELTYPE.POISON){
						this.hits++;
					}
				}
			}
			if(this.hits < 1){
				this.hits = 1;
				return false;
			}
			return true;
		}
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		for(var x = 0; x < cells.length; x++){
			for(var y = 0; y < cells[x].length; y++){
				if(cells[x][y].panelType === PANELTYPE.POISON){
					board.convertPanel(x, y, PANELTYPE.NORMAL);
				}
			}
		}
	};
}

function SF3MegaBoost(){
	this.id="SF3MegaBoost";
	this.name="MegaBoost";
	this.image=SF3xxx_warrockboost;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		//TODO: Megaboost?
	};
}

function SF3QuickGauge(){
	this.id="SF3QuickGauge";
	this.name="QuickGauge";
	this.image=SF3xxx_quickgauge;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
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

function SF3NormalGauge(){
	this.id="SF3NormalGauge";
	this.name="NormalGauge";
	this.image=SF3xxx_normalgauge;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
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
		timer.turncount = 5;
	};
}

function SF3Slowgauge(){
	this.id="SF3Slowgauge";
	this.name="Slowgauge";
	this.image=SF3xxx_heavygauge;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
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

function SF3WarriorSoul(){
	this.id="SF3WarriorSoul";
	this.name="WarriorSoul";
	this.image=SF3xxx_warriorblood;
	this.code=["C", "D", "S"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		attacker.busterDamage = 50;
		attacker.bugs = attacker.bugs.concat([new HPBug(10)]);
	};
}

function SF3CardRevive(){
	this.id="SF3CardRevive";
	this.name="CardRevive";
	this.image=SF3xxx_undeadrebirth;
	this.code=["P", "R", "V"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		//TODO: Card Revive?
	};
}

function SF3AllPoison(){
	this.id="SF3AllPoison";
	this.name="AllPoison";
	this.image=SF3xxx_allpoison;
	this.code=["C", "E", "N"];
	this.goo="SF3";
	this.copies=5;
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
		for(var x = 0; x < cells.length; x++){
			for(var y = 0; y < cells[x].length; y++){
				board.convertPanel(x, y, PANELTYPE.POISON);
			}
		}
	};
}

function SF3Fire30(){
	this.id="SF3Fire30";
	this.name="Fire +30";
	this.image=SF3xxx_fire30;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
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
	this.effectmiss= function(attacker, defender){};
	this.addFireboostDamage = 30;
}

function SF3Aqua30(){
	this.id="SF3Aqua30";
	this.name="Aqua +30";
	this.image=SF3xxx_aqua30;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
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
	this.effectmiss= function(attacker, defender){};
	this.addAquaboostDamage = 30;
}

function SF3Elec30(){
	this.id="SF3Elec30";
	this.name="Elec +30";
	this.image=SF3xxx_elec30;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
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
	this.effectmiss= function(attacker, defender){};
	this.addElecboostDamage = 30;
}

function SF3Wood30(){
	this.id="SF3Wood30";
	this.name="Wood +30";
	this.image=SF3xxx_wood30;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
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
	this.effectmiss= function(attacker, defender){};
	this.addWoodboostDamage = 30;
}

// -------------- Mega --------------
function SF3SpadeMagnes(){
	this.id="SF3SpadeMagnes";
	this.name="SpadeMagnes";
	this.image=SF3m01_spademagnets;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=60;
	this.boostDamage=0;
	this.hits="1,2";
	this.priority=0;
	this.elements=[ELEMENTS.elec, ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		this.hits = 1;
		if(defender.invis < 1){
			this.xDir = -1;
			this.targetPlayer = playerOne;
			if(attacker.name === playerOne.name){
				this.xDir = 1;
				this.targetPlayer = playerTwo;
			}
			if(board.isCellPlayerValid(this.targetPlayer.x - this.xDir, attacker.y)){
				this.tempX = attacker.x;
				attacker.x = this.targetPlayer.x - this.xDir;
				this.hitbool = false;
				if((new SF3Sword()).hithuh(attacker, defender)){
					this.hits = 2;
					this.hitbool = true;
				}
				else if((new SF3WideSword()).hithuh(attacker, defender)){
					this.hitbool = true;
				}
				attacker.x = this.tempX;
				return this.hitbool;
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3SpadeMagnesV2(){
	this.id="SF3SpadeMagnesV2";
	this.name="SpadeMagnesV2";
	this.image=SF3m02_spademagnetsv2;
	this.code=["M"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=90;
	this.boostDamage=0;
	this.hits="1,2";
	this.priority=0;
	this.elements=[ELEMENTS.elec, ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		this.localMagnes = new SF3SpadeMagnes();
		this.hitbool = this.localMagnes.hithuh(attacker, defender);
		this.hits = this.localMagnes.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3SpadeMagnesV3(){
	this.id="SF3SpadeMagnesV3";
	this.name="SpadeMagnesV3";
	this.image=SF3m03_spademagnetsV3;
	this.code=["M"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=130;
	this.boostDamage=0;
	this.hits="1,2";
	this.priority=0;
	this.elements=[ELEMENTS.elec, ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		this.localMagnes = new SF3SpadeMagnes();
		this.hitbool = this.localMagnes.hithuh(attacker, defender);
		this.hits = this.localMagnes.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3DiamondIce(){
	this.id="SF3DiamondIce";
	this.name="DiamondIce";
	this.image=SF3m04_diaiceburn;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=40;
	this.boostDamage=0;
	this.hits=3;
	this.priority=0;
	this.elements=[ELEMENTS.aqua, ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			this.xArray = [0, 0, 1, 1, 1, 2, 2];
			this.yArray = [1, 2, 0, 1, 2, 0, 1];
			if(attacker.name === playerOne.name){
				this.xArray = [3, 3, 4, 4, 4, 5, 5];
			}
			for(var i = 0; i < this.xArray.length; i++){
				if(defender.x === this.xArray[i]){
					if(defender.y === this.yArray[i]){
						return true;
					}
				}
			}
		}
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3DiamondIceV2(){
	this.id="SF3DiamondIceV2";
	this.name="DiamondIceV2";
	this.image=SF3m05_diaiceburnv2;
	this.code=["I"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=50;
	this.boostDamage=0;
	this.hits=3;
	this.priority=0;
	this.elements=[ELEMENTS.aqua, ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		return (new SF3DiamondIce()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3DiamondIceV3(){
	this.id="SF3DiamondIceV3";
	this.name="DiamondIceV3";
	this.image=SF3m06_diaiceburnv3;
	this.code=["I"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=80;
	this.boostDamage=0;
	this.hits=3;
	this.priority=0;
	this.elements=[ELEMENTS.aqua, ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		return (new SF3DiamondIce()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3ClubStrong(){
	this.id="SF3ClubStrong";
	this.name="ClubStrong";
	this.image=SF3m07_clubstrong;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=20;
	this.boostDamage=0;
	this.hits="5,10";
	this.priority=0;
	this.elements=[ELEMENTS.wood, ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		this.hits = 5;
		if(cells[attacker.x][attacker.y].panelType === PANELTYPE.GRASS){
			this.hits = 10;
		}
		return (new BN6Magnum()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3ClubStrongV2(){
	this.id="SF3ClubStrongV2";
	this.name="ClubStrongV2";
	this.image=SF3m08_clubstrongv2;
	this.code=["S"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=25;
	this.boostDamage=0;
	this.hits="5,10";
	this.priority=0;
	this.elements=[ELEMENTS.wood, ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		this.localClub = new SF3ClubStrong();
		this.hitbool = this.localClub.hithuh(attacker, defender);
		this.hits = this.localClub.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3ClubStrongV3(){
	this.id="SF3ClubStrongV3";
	this.name="ClubStrongV3";
	this.image=SF3m09_clubstrongv3;
	this.code=["S"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=40;
	this.boostDamage=0;
	this.hits="5,10";
	this.priority=0;
	this.elements=[ELEMENTS.wood, ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		this.localClub = new SF3ClubStrong();
		this.hitbool = this.localClub.hithuh(attacker, defender);
		this.hits = this.localClub.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3QueenVirgo(){
	this.id="SF3QueenVirgo";
	this.name="QueenVirgo";
	this.image=SF3m10_queenvirgo;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=60;
	this.boostDamage=0;
	this.hits="1-4";
	this.priority=0;
	this.elements=[ELEMENTS.aqua, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.hits = 6 - Math.abs(attacker.x - defender.x);
		this.hitbool = (new SF3JetAttack1()).hithuh(attacker, defender);
		if(this.hits < 1){
			this.hits = 1;
			this.hitbool = false;
		}
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3QueenVirgoV2(){
	this.id="SF3QueenVirgoV2";
	this.name="QueenVirgoV2";
	this.image=SF3m11_queenvirgov2;
	this.code=["V"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=80;
	this.boostDamage=0;
	this.hits="1-4";
	this.priority=0;
	this.elements=[ELEMENTS.aqua, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.localVirgo = new SF3QueenVirgo();
		this.hitbool = this.localVirgo.hithuh(attacker, defender);
		this.hits = this.localVirgo.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3QueenVirgoV3(){
	this.id="SF3QueenVirgoV3";
	this.name="QueenVirgoV3";
	this.image=SF3m12_queenvirgov3;
	this.code=["V"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=100;
	this.boostDamage=0;
	this.hits="1-4";
	this.priority=0;
	this.elements=[ELEMENTS.aqua, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.localVirgo = new SF3QueenVirgo();
		this.hitbool = this.localVirgo.hithuh(attacker, defender);
		this.hits = this.localVirgo.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3JackCorvus(){
	this.id="SF3JackCorvus";
	this.name="JackCorvus";
	this.image=SF3m13_jackcorvus;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			if(defender.x === 5 || defender.x === 0){
				return false;
			}
			this.hitbool1 = (new SF3Cannon()).hithuh(attacker, defender);
			attacker.y = attacker.y + 1;
			this.hitbool2 = (new SF3Cannon()).hithuh(attacker, defender);
			attacker.y = attacker.y - 2;
			this.hitbool3 = (new SF3Cannon()).hithuh(attacker, defender);
			attacker.y = attacker.y + 1;
			return this.hitbool1 || this.hitbool2 || this.hitbool3;
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3JackCorvusV2(){
	this.id="SF3JackCorvusV2";
	this.name="JackCorvusV2";
	this.image=SF3m14_jackcorvusv2;
	this.code=["C"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=180;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new SF3JackCorvus()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3JackCorvusV3(){
	this.id="SF3JackCorvusV3";
	this.name="JackCorvusV3";
	this.image=SF3m15_jackcorvusv3;
	this.code=["C"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=300;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new SF3JackCorvus()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3DreadJoker(){
	this.id="SF3DreadJoker";
	this.name="DreadJoker";
	this.image=SF3m16_gravejoker;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=160;
	this.boostDamage=0;
	this.hits="1,2";
	this.priority=0;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.hits = 1;
		if(defender.invis < 1){
			if((new SF3Sword()).hithuh(attacker, defender)){
				this.hits = 2;
				return true;
			}
			this.targetPlayer = playerOne;
			if(attacker.name === playerOne.name){
				this.targetPlayer = playerTwo;
			}
			return defender.x === this.targetPlayer.x && defender.y === this.targetPlayer.y;
		}
		return false;
	};
	this.effecthit= function(attacker, defender){
		(new SF3DreadJoker()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		this.xs = [];
		this.ys = [];
		for(var y = 0; y < cells[defender.x].length; y++){
			if(y !== defender.y){
				this.ys = this.ys.push(y);
			}
		}
		for(var x = 0; x < cells.length; x++){
			if(attacker.name === playerOne.name){
				if(x > attacker.x && x < defender.x){
					this.xs = this.xs.push(x);
				}
			}
			else{
				if(x < attacker.x && x > defender.x){
					this.xs = this.xs.push(x);
				}
			}
		}
		if(this.xs.length > 0){
			if(board.isCellPlayerValid(this.xs[0], this.ys[0])){
				cells[this.xs[0]][this.ys[0]].object = [(new SF3DoubleStoneObj(this.xs[0], this.ys[0]))];
			}
			if(board.isCellPlayerValid(this.xs[this.xs.length-1], this.ys[1])){
				cells[this.xs[this.xs.length-1]][this.ys[1]].object = [(new SF3DoubleStoneObj(this.xs[this.xs.length-1], this.ys[1]))];
			}
		}
	};
}

function SF3DreadJokerV2(){
	this.id="SF3DreadJokerV2";
	this.name="DreadJokerV2";
	this.image=SF3m17_gravejokerv2;
	this.code=["J"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=190;
	this.boostDamage=0;
	this.hits="1,2";
	this.priority=0;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.localJoker = new SF3DreadJoker();
		this.hitbool = this.localJoker.hithuh(attacker, defender);
		this.hits = this.localJoker.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){
		(new SF3DreadJoker()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3DreadJoker()).effectmiss(attacker, defender);
	};
}

function SF3DreadJokerV3(){
	this.id="SF3DreadJokerV3";
	this.name="DreadJokerV3";
	this.image=SF3m18_gravejokerv3;
	this.code=["J"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=270;
	this.boostDamage=0;
	this.hits="1,2";
	this.priority=0;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.localJoker = new SF3DreadJoker();
		this.hitbool = this.localJoker.hithuh(attacker, defender);
		this.hits = this.localJoker.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){
		(new SF3DreadJoker()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3DreadJoker()).effectmiss(attacker, defender);
	};
}

function SF3AcidAce(){
	this.id="SF3AcidAce";
	this.name="AcidAce";
	this.image=SF3m19_acidace;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=105;
	this.boostDamage=0;
	this.hits=2;
	this.priority=0;
	this.elements=[ELEMENTS.break, ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new BN6Roll()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		board.convertPanel(defender.x, defender.y, PANELTYPE.CRACKED);
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3AcidAceV2(){
	this.id="SF3AcidAceV2";
	this.name="AcidAceV2";
	this.image=SF3m20_acidacev2;
	this.code=["A"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=125;
	this.boostDamage=0;
	this.hits=2;
	this.priority=0;
	this.elements=[ELEMENTS.break, ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new SF3AcidAce()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3AcidAce()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3AcidAceV3(){
	this.id="SF3AcidAceV3";
	this.name="AcidAceV3";
	this.image=SF3m21_acidacev3;
	this.code=["A"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=165;
	this.boostDamage=0;
	this.hits=2;
	this.priority=0;
	this.elements=[ELEMENTS.break, ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new SF3AcidAce()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3AcidAce()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3TaurusFire(){
	this.id="SF3TaurusFire";
	this.name="TaurusFire";
	this.image=SF3m22_oxfire;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			this.xDir = -1;
			if(attacker.name === playerOne.name){
				this.xDir = 1;
			}
			this.yArray = [[2], [2,1], [2,1,0], [2,1,0], [2, 1, 0]]
			if(attacker.y === 0){
				this.yArray = [[0], [0,1], [2,1,0], [2,1,0], [2, 1, 0]]
			}
			if(attacker.y === 1){
				this.yArray = [[1], [0,1,2], [2,1,0], [2,1,0], [2, 1, 0]]
			}
			if(board.isCellPlayerValid(attacker.x + this.xDir, attacker.y)){
				for(var i = 0; i < 5; i++){
					this.x = attacker.x + this.xDir + this.xDir * (i+1);
					for(var j = 0; j < this.yArray[i].length; j++){
						this.y = this.yArray[i][j];
						if(cells[this.x] && !board.isHole(this.x, this.y) && cells[this.x][this.y].panelType !== PANELTYPE.MISS){
							if(this.x === defender.x && this.y === defender.y){
								return true;
							}
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

function SF3TaurusFireV2(){
	this.id="SF3TaurusFireV2";
	this.name="TaurusFireV2";
	this.image=SF3m23_oxfirev2;
	this.code=["T"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new SF3TaurusFire()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3TaurusFireV3(){
	this.id="SF3TaurusFireV3";
	this.name="TaurusFireV3";
	this.image=SF3m24_oxfirev3;
	this.code=["T"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=220;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new SF3TaurusFire()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3CygnusWing(){
	this.id="SF3CygnusWing";
	this.name="CygnusWing";
	this.image=SF3m25_cygnuswing;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=130;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.wind, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3Shuriken1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3CygnusWingV2(){
	this.id="SF3CygnusWingV2";
	this.name="CygnusWingV2";
	this.image=SF3m26_cygnuswingv2;
	this.code=["N"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=170;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.wind, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3CygnusWing()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3CygnusWingV3(){
	this.id="SF3CygnusWingV3";
	this.name="CygnusWingV3";
	this.image=SF3m27_cygnuswingv3;
	this.code=["N"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=240;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.wind, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3CygnusWing()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3WolfWoods(){
	this.id="SF3WolfWoods";
	this.name="WolfWoods";
	this.image=SF3m28_wolfforest;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=80;
	this.boostDamage=0;
	this.hits="1,2";
	this.priority=0;
	this.elements=[ELEMENTS.wood, ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		this.hits = 2;
		if(defender.invis < 1){
			this.hits = 1;
			this.x = playerOne.x + 1;
			this.y = playerOne.y;
			if(attacker.name === playerOne.name){
				this.x = playerTwo.x - 1;
				this.y = playerTwo.y;
			}
			if(board.isCellPlayerValid(this.x, this.y)){
				this.hits = 2;
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

function SF3WolfWoodsV2(){
	this.id="SF3WolfWoodsV2";
	this.name="WolfWoodsV2";
	this.image=SF3m29_wolfforestv2;
	this.code=["W"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=100;
	this.boostDamage=0;
	this.hits="1,2";
	this.priority=0;
	this.elements=[ELEMENTS.wood, ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		this.localWolf = new SF3WolfWoods();
		this.hitbool = this.localWolf.hithuh(attacker, defender);
		this.hits = this.localWolf.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3WolfWoodsV3(){
	this.id="SF3WolfWoodsV3";
	this.name="WolfWoodsV3";
	this.image=SF3m30_wolfforestv3;
	this.code=["W"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=140;
	this.boostDamage=0;
	this.hits="1,2";
	this.priority=0;
	this.elements=[ELEMENTS.wood, ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		this.localWolf = new SF3WolfWoods();
		this.hitbool = this.localWolf.hithuh(attacker, defender);
		this.hits = this.localWolf.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3DarkPhantom(){
	this.id="SF3DarkPhantom";
	this.name="DarkPhantom";
	this.image=SF3m31_phantomblack;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=130;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Judgeman()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3DarkPhantomV2(){
	this.id="SF3DarkPhantomV2";
	this.name="DarkPhantomV2";
	this.image=SF3m32_phantomblackv2;
	this.code=["P"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=200;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3DarkPhantom()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3DarkPhantomV3(){
	this.id="SF3DarkPhantomV3";
	this.name="DarkPhantomV3";
	this.image=SF3m33_phantomblackv3;
	this.code=["P"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=300;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3DarkPhantom()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3Rogue(){
	this.id="SF3Rogue";
	this.name="Rogue";
	this.image=SF3m34_burai;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=40;
	this.boostDamage=0;
	this.hits=4;
	this.priority=0;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		if(attacker.y === defender.y){
			if(attacker.name === playerOne.name){
				if(board.isCellPlayerValid(playerTwo.x-1, playerOne.y)){
					this.tempX = attacker.x;
					attacker.x = playerTwo.x-1;
					this.hitbool = (new SF3Sword()).hithuh(attacker, defender);
					attacker.x = this.tempX;
					return this.hitbool;
				}
			}
			else{
				if(board.isCellPlayerValid(playerOne.x+1, playerTwo.y)){
					this.tempX = attacker.x;
					attacker.x = playerOne.x+1;
					this.hitbool = (new SF3Sword()).hithuh(attacker, defender);
					attacker.x = this.tempX;
					return this.hitbool;
				}
			}
		}
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3RogueV2(){
	this.id="SF3RogueV2";
	this.name="RogueV2";
	this.image=SF3m35_buraiv2;
	this.code=["R"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=50;
	this.boostDamage=0;
	this.hits=4;
	this.priority=0;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3Rogue()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3RogueV3(){
	this.id="SF3RogueV3";
	this.name="RogueV3";
	this.image=SF3m36_buraiv3;
	this.code=["R"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=70;
	this.boostDamage=0;
	this.hits=4;
	this.priority=0;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3Rogue()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3MoonDestroyer(){
	this.id="SF3MoonDestroyer";
	this.name="MoonDestroyer";
	this.image=SF3m37_moondisaster;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=100;
	this.boostDamage=0;
	this.hits=2;
	this.priority=0;
	this.elements=[ELEMENTS.break, ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		if(attacker.y === defender.y){
			return (new SF3Rogue()).hithuh(attacker, defender);
		}
		return (new BN6Blues()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3MoonDestroyer()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		if(attacker.y === defender.y){
			board.convertPanel(defender.x, defender.y, PANELTYPE.CRACKED);
		}
	};
}

function SF3MoonDestroyerV2(){
	this.id="SF3MoonDestroyerV2";
	this.name="MoonDestroyerV2";
	this.image=SF3m38_moondisasterv2;
	this.code=["M"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=120;
	this.boostDamage=0;
	this.hits=2;
	this.priority=0;
	this.elements=[ELEMENTS.break, ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new SF3MoonDestroyer()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3MoonDestroyer()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3MoonDestroyer()).effectmiss(attacker, defender);
	};
}

function SF3MoonDestroyerV3(){
	this.id="SF3MoonDestroyerV3";
	this.name="MoonDestroyerV3";
	this.image=SF3m39_moondisasterv3;
	this.code=["M"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=140;
	this.boostDamage=0;
	this.hits=2;
	this.priority=0;
	this.elements=[ELEMENTS.break, ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new SF3MoonDestroyer()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3MoonDestroyer()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3MoonDestroyer()).effectmiss(attacker, defender);
	};
}

function SF3ApolloFlame(){
	this.id="SF3ApolloFlame";
	this.name="ApolloFlame";
	this.image=SF3m40_apolloflame;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=170;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new BN6Forte()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3ApolloFlameV2(){
	this.id="SF3ApolloFlameV2";
	this.name="ApolloFlameV2";
	this.image=SF3m41_apolloflamev2;
	this.code=["F"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=200;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new SF3ApolloFlame()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3ApolloFlameV3(){
	this.id="SF3ApolloFlameV3";
	this.name="ApolloFlameV3";
	this.image=SF3m42_apolloflamev3;
	this.code=["F"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=250;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new SF3ApolloFlame()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3Sirius(){
	this.id="SF3Sirius";
	this.name="Sirius";
	this.image=SF3m43_sirius;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=120;
	this.boostDamage=0;
	this.hits="1,2";
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		this.hits = 1;
		if(defender.invis < 1){
			if(attacker.y === defender.y){
				this.hits = 2;
			}
			if(attacker.name === playerOne.name){
				this.xStart = attacker.x + 1;
				this.xEnd = board.farthestEndOfRow(true);
				this.yStart = attacker.y - 1;
				this.yEnd = attacker.y + 1;
				for(var x = this.xStart; x <= this.xEnd; x++){
					for(var y = this.yStart; y <= this.yEnd; y++){
						if(defender.x === x && defender.y === y){
							return true;
						}
					}
				}
			}
			else{
				this.xStart = attacker.x - 1;
				this.xEnd = board.farthestEndOfRow(false);
				this.yStart = attacker.y - 1;
				this.yEnd = attacker.y + 1;
				for(var x = this.xStart; x >= this.xEnd; x--){
					for(var y = this.yStart; y <= this.yEnd; y++){
						if(defender.x === x && defender.y === y){
							return true;
						}
					}
				}
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){
		(new SF3Sirius()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		if(attacker.name === playerOne.name){
			this.xStart = attacker.x + 1;
			this.xEnd = board.farthestEndOfRow(true);
			this.yStart = attacker.y - 1;
			this.yEnd = attacker.y + 1;
			for(var x = this.xStart; x <= this.xEnd; x++){
				for(var y = this.yStart; y <= this.yEnd; y++){
					board.convertPanel(x, y, PANELTYPE.BROKEN);
				}
			}
		}
		else{
			this.xStart = attacker.x - 1;
			this.xEnd = board.farthestEndOfRow(false);
			this.yStart = attacker.y - 1;
			this.yEnd = attacker.y + 1;
			for(var x = this.xStart; x >= this.xEnd; x--){
				for(var y = this.yStart; y <= this.yEnd; y++){
					board.convertPanel(x, y, PANELTYPE.BROKEN);
				}
			}
		}
	};
}

function SF3SiriusV2(){
	this.id="SF3SiriusV2";
	this.name="SiriusV2";
	this.image=SF3m44_siriusv2;
	this.code=["Z"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=160;
	this.boostDamage=0;
	this.hits="1,2";
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		this.localSirius = new SF3Sirius();
		this.hitbool = this.localSirius.hithuh(attacker, defender);
		this.hits = this.localSirius.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){
		(new SF3Sirius()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3Sirius()).effectmiss(attacker, defender);
	};
}

function SF3SiriusV3(){
	this.id="SF3SiriusV3";
	this.name="SiriusV3";
	this.image=SF3m45_siriusv3;
	this.code=["Z"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=200;
	this.boostDamage=0;
	this.hits="1,2";
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		this.localSirius = new SF3Sirius();
		this.hitbool = this.localSirius.hithuh(attacker, defender);
		this.hits = this.localSirius.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){
		(new SF3Sirius()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3Sirius()).effectmiss(attacker, defender);
	};
}

// -------------- Secret Mega --------------
function SF3SpadeMagnesX(){
	this.id="SF3SpadeMagnesX";
	this.name="SpadeMagnesX";
	this.image=SF3xxx_spade_magnetsX;
	this.code=["M"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=170;
	this.boostDamage=0;
	this.hits="1,2";
	this.priority=0;
	this.elements=[ELEMENTS.elec, ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		this.localMagnes = new SF3SpadeMagnes();
		this.hitbool = this.localMagnes.hithuh(attacker, defender);
		this.hits = this.localMagnes.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3DiamondIceX(){
	this.id="SF3DiamondIceX";
	this.name="DiamondIceX";
	this.image=SF3xxx_diamond_iceX;
	this.code=["I"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=100;
	this.boostDamage=0;
	this.hits=3;
	this.priority=0;
	this.elements=[ELEMENTS.aqua, ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		return (new SF3DiamondIce()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3ClubStrongX(){
	this.id="SF3ClubStrongX";
	this.name="ClubStrongX";
	this.image=SF3xxx_club_strongX;
	this.code=["S"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=50;
	this.boostDamage=0;
	this.hits="5,10";
	this.priority=0;
	this.elements=[ELEMENTS.wood, ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		this.localClub = new SF3ClubStrong();
		this.hitbool = this.localClub.hithuh(attacker, defender);
		this.hits = this.localClub.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3QueenVirgoX(){
	this.id="SF3QueenVirgoX";
	this.name="QueenVirgoX";
	this.image=SF3xxx_queen_virgoX;
	this.code=["V"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=120;
	this.boostDamage=0;
	this.hits="1-4";
	this.priority=0;
	this.elements=[ELEMENTS.aqua, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.localVirgo = new SF3QueenVirgo();
		this.hitbool = this.localVirgo.hithuh(attacker, defender);
		this.hits = this.localVirgo.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3JackCorvusX(){
	this.id="SF3JackCorvusX";
	this.name="JackCorvusX";
	this.image=SF3xxx_jack_corvus_X;
	this.code=["C"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=380;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new SF3JackCorvus()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3DreadJokerX(){
	this.id="SF3DreadJokerX";
	this.name="DreadJokerX";
	this.image=SF3xxx_dread_jokerX;
	this.code=["J"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=350;
	this.boostDamage=0;
	this.hits="1,2";
	this.priority=0;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.localJoker = new SF3DreadJoker();
		this.hitbool = this.localJoker.hithuh(attacker, defender);
		this.hits = this.localJoker.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){
		(new SF3DreadJoker()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3DreadJoker()).effectmiss(attacker, defender);
	};
}

function SF3AcidAceX(){
	this.id="SF3AcidAceX";
	this.name="AcidAceX";
	this.image=SF3xxx_acid_aceX;
	this.code=["A"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=210;
	this.boostDamage=0;
	this.hits=2;
	this.priority=0;
	this.elements=[ELEMENTS.break, ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new SF3AcidAce()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3AcidAce()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3TaurusFireX(){
	this.id="SF3TaurusFireX";
	this.name="TaurusFireX";
	this.image=SF3xxx_taurus_fireX;
	this.code=["T"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=280;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new SF3TaurusFire()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3CygnusWingX(){
	this.id="SF3CygnusWingX";
	this.name="CygnusWingX";
	this.image=SF3xxx_cygnus_wingX;
	this.code=["N"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=300;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.wind, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3CygnusWing()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3WolfWoodsX(){
	this.id="SF3WolfWoodsX";
	this.name="WolfWoodsX";
	this.image=SF3xxx_wolf_woodsX;
	this.code=["W"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=180;
	this.boostDamage=0;
	this.hits="1,2";
	this.priority=0;
	this.elements=[ELEMENTS.wood, ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		this.localWolf = new SF3WolfWoods();
		this.hitbool = this.localWolf.hithuh(attacker, defender);
		this.hits = this.localWolf.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3DarkPhantomX(){
	this.id="SF3DarkPhantomX";
	this.name="DarkPhantomX";
	this.image=SF3xxx_dark_phantomX;
	this.code=["P"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=350;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3DarkPhantom()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3RogueX(){
	this.id="SF3RogueX";
	this.name="RogueX";
	this.image=SF3xxx_rogueX;
	this.code=["R"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=90;
	this.boostDamage=0;
	this.hits=4;
	this.priority=0;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3Rogue()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3MoonDestroyerX(){
	this.id="SF3MoonDestroyerX";
	this.name="MoonDestroyerX";
	this.image=SF3xxx_moon_destroyerX;
	this.code=["M"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=180;
	this.boostDamage=0;
	this.hits=2;
	this.priority=0;
	this.elements=[ELEMENTS.break, ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new SF3MoonDestroyer()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3MoonDestroyer()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3MoonDestroyer()).effectmiss(attacker, defender);
	};
}

function SF3ApolloFlameX(){
	this.id="SF3ApolloFlameX";
	this.name="ApolloFlameX";
	this.image=SF3xxx_apollo_flameX;
	this.code=["F"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=330;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new SF3ApolloFlame()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3SiriusX(){
	this.id="SF3SiriusX";
	this.name="SiriusX";
	this.image=SF3xxx_sirusX;
	this.code=["Z"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=250;
	this.boostDamage=0;
	this.hits="1,2";
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		this.localSirius = new SF3Sirius();
		this.hitbool = this.localSirius.hithuh(attacker, defender);
		this.hits = this.localSirius.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){
		(new SF3Sirius()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3Sirius()).effectmiss(attacker, defender);
	};
}

function SF3LibraScales(){
	this.id="SF3LibraScales";
	this.name="LibraScales";
	this.image=SF3xxx_libra_scales;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=70;
	this.boostDamage=0;
	this.hits=2;
	this.priority=0;
	this.elements=[ELEMENTS.fire, ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			return defender.x === 0 || defender.x === 5;
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3LibraScalesV2(){
	this.id="SF3LibraScalesV2";
	this.name="LibraScalesV2";
	this.image=SF3xxx_libra_scalesv2;
	this.code=["L"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=90;
	this.boostDamage=0;
	this.hits=2;
	this.priority=0;
	this.elements=[ELEMENTS.fire, ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new SF3LibraScales()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3LibraScalesV3(){
	this.id="SF3LibraScalesV3";
	this.name="LibraScalesV3";
	this.image=SF3xxx_libra_scalesv3;
	this.code=["L"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=120;
	this.boostDamage=0;
	this.hits=2;
	this.priority=0;
	this.elements=[ELEMENTS.fire, ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new SF3LibraScales()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3LibraScalesX(){
	this.id="SF3LibraScalesX";
	this.name="LibraScalesX";
	this.image=SF3xxx_libra_scalesX;
	this.code=["L"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=160;
	this.boostDamage=0;
	this.hits=2;
	this.priority=0;
	this.elements=[ELEMENTS.fire, ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new SF3LibraScales()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3QueenOphiuca(){
	this.id="SF3QueenOphiuca";
	this.name="QueenOphiuca";
	this.image=SF3xxx_queen_ophiuca;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=140;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.wood, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			if(attacker.name === playerOne.name){
				this.row1 = 1;
				this.row2 = attacker.y;
				if(attacker.y === 1){
					this.row2 = 0;
				}
				for(var x = attacker.x+1; x < 6; x++){
					if(board.isHole(x, this.row1) || board.isHole(x, this.row2)){
						return false;
					}
					if(defender.x === x){
						if(defender.y === this.row1 || defender.y === this.row2){
							return true;
						}
					}
				}
			}
			else{
				this.row1 = 1;
				this.row2 = attacker.y;
				if(attacker.y === 1){
					this.row2 = 2;
				}
				for(var x = attacker.x-1; x > -1; x--){
					if(board.isHole(x, this.row1) || board.isHole(x, this.row2)){
						return false;
					}
					if(defender.x === x){
						if(defender.y === this.row1 || defender.y === this.row2){
							return true;
						}
					}
				}
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){
		(new SF3QueenOphiuca()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		var fakeDefender = {
			x: -1,
			y: -1,
			invis: 0,
			guard: null
		};
		this.tempQueen = new SF3QueenOphiuca();
		for(var x = 0; x < cells.length; x++){
			for(var y = 0; y < cells[x].length; y++){
				fakeDefender.x = x;
				fakeDefender.y = y;
				if(this.tempQueen.hithuh(attacker, fakeDefender)){
					board.convertPanel(x, y, PANELTYPE.POISON);
				}
			}
		}
	};
}

function SF3QueenOphiucaV2(){
	this.id="SF3QueenOphiucaV2";
	this.name="QueenOphiucaV2";
	this.image=SF3xxx_queen_ophiucav2;
	this.code=["O"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=180;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.wood, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3QueenOphiuca()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3QueenOphiuca()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3QueenOphiuca()).effectmiss(attacker, defender);
	};
}

function SF3QueenOphiucaV3(){
	this.id="SF3QueenOphiucaV3";
	this.name="QueenOphiucaV3";
	this.image=SF3xxx_queen_ophiucav3;
	this.code=["O"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=230;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.wood, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3QueenOphiuca()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3QueenOphiuca()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3QueenOphiuca()).effectmiss(attacker, defender);
	};
}

function SF3QueenOphiucaX(){
	this.id="SF3QueenOphiucaX";
	this.name="QueenOphiucaX";
	this.image=SF3xxx_queen_ophiucaX;
	this.code=["O"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=300;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.wood, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3QueenOphiuca()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3QueenOphiuca()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3QueenOphiuca()).effectmiss(attacker, defender);
	};
}

function SF3GeminiSpark(){
	this.id="SF3GeminiSpark";
	this.name="GeminiSpark";
	this.image=SF3xxx_gemini_spark;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=70;
	this.boostDamage=0;
	this.hits="1,2";
	this.priority=0;
	this.elements=[ELEMENTS.elec, ELEMENTS.break, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.hits = 0;
		if((new SF3Cannon()).hithuh(attacker, defender)){
			this.hits++;
		}
		if((new BN6Blues()).hithuh(attacker, defender)){
			this.hits++;
		}
		if(this.hits === 0){
			this.hits = 1;
			return false;
		}
	};
	this.effecthit= function(attacker, defender){
		if(defender.guard === null){
			defender.stunned = 1;
		}
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3GeminiSparkV2(){
	this.id="SF3GeminiSparkV2";
	this.name="GeminiSparkV2";
	this.image=SF3xxx_gemini_sparkv2;
	this.code=["G"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=80;
	this.boostDamage=0;
	this.hits="1,2";
	this.priority=0;
	this.elements=[ELEMENTS.elec, ELEMENTS.break, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.localSpark = new SF3GeminiSpark();
		this.hitbool = this.localSpark.hithuh(attacker, defender);
		this.hits = this.localSpark.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3GeminiSparkV3(){
	this.id="SF3GeminiSparkV3";
	this.name="GeminiSparkV3";
	this.image=SF3xxx_gemini_sparkv3;
	this.code=["G"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=100;
	this.boostDamage=0;
	this.hits="1,2";
	this.priority=0;
	this.elements=[ELEMENTS.elec, ELEMENTS.break, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.localSpark = new SF3GeminiSpark();
		this.hitbool = this.localSpark.hithuh(attacker, defender);
		this.hits = this.localSpark.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3GeminiSparkX(){
	this.id="SF3GeminiSparkX";
	this.name="GeminiSparkX";
	this.image=SF3xxx_gemini_sparkX;
	this.code=["G"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=150;
	this.boostDamage=0;
	this.hits="1,2";
	this.priority=0;
	this.elements=[ELEMENTS.elec, ELEMENTS.break, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.localSpark = new SF3GeminiSpark();
		this.hitbool = this.localSpark.hithuh(attacker, defender);
		this.hits = this.localSpark.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3CancerBubble(){
	this.id="SF3CancerBubble";
	this.name="CancerBubble";
	this.image=SF3xxx_cancer_bubble;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=130;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		this.tempX = attacker.x;
		this.tempY = attacker.y;
		if(attacker.name === playerOne.name){
			for(var x = 0; x < cells.length; x++){
				for(var y = 0; y < cells[0].length; y++){
					if(cells[x][y].object.length > 0 || (cells[x][y].player && cells[x][y].player !== attacker)){
						attacker.x = x-1;
						attacker.y = 1;
					}
				}
			}
			this.hitbool = (new SF3GreatAxe()).hithuh(attacker, defender);
			attacker.x = this.tempX;
			attacker.y = this.tempY;
			return this.hitbool;
		}
		else{
			for(var x = 0; x < cells.length; x++){
				for(var y = 0; y < cells[0].length; y++){
					if(cells[x][y].object.length > 0 || (cells[x][y].player && cells[x][y].player !== attacker)){
						attacker.x = x+1;
						attacker.y = 1;
					}
				}
			}
			this.hitbool = (new SF3GreatAxe()).hithuh(attacker, defender);
			attacker.x = this.tempX;
			attacker.y = this.tempY;
			return this.hitbool;
		}
	};
	this.effecthit= function(attacker, defender){
		if(defender.guard === null){
			defender.bubbled = 1;
		}
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3CancerBubbleV2(){
	this.id="SF3CancerBubbleV2";
	this.name="CancerBubbleV2";
	this.image=SF3xxx_cancer_bubblev2;
	this.code=["B"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=170;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new SF3CancerBubble()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3CancerBubble()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3CancerBubbleV3(){
	this.id="SF3CancerBubbleV3";
	this.name="CancerBubbleV3";
	this.image=SF3xxx_cancer_bubblev3;
	this.code=["B"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=220;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new SF3CancerBubble()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3CancerBubble()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3CancerBubbleX(){
	this.id="SF3CancerBubbleX";
	this.name="CancerBubbleX";
	this.image=SF3xxx_cancer_bubbleX;
	this.code=["B"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=280;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new SF3CancerBubble()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3CancerBubble()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3CrownThunder(){
	this.id="SF3CrownThunder";
	this.name="CrownThunder";
	this.image=SF3xxx_crown_thunder;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new BN6CrossSlash()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3CrownThunderV2(){
	this.id="SF3CrownThunderV2";
	this.name="CrownThunderV2";
	this.image=SF3xxx_crown_thunderv2;
	this.code=["U"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=200;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new SF3CrownThunder()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3CrownThunderV3(){
	this.id="SF3CrownThunderV3";
	this.name="CrownThunderV3";
	this.image=SF3xxx_crown_thunderv3;
	this.code=["U"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=300;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new SF3CrownThunder()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3CrownThunderX(){
	this.id="SF3CrownThunderX";
	this.name="CrownThunderX";
	this.image=SF3xxx_crown_thunderX;
	this.code=["U"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=400;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new SF3CrownThunder()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3YetiBlizzard(){
	this.id="SF3YetiBlizzard";
	this.name="YetiBlizzard";
	this.image=SF3xxx_yeti_blizzard;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=120;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new BN6Forte()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3YetiBlizzardV2(){
	this.id="SF3YetiBlizzardV2";
	this.name="YetiBlizzardV2";
	this.image=SF3xxx_yeti_blizzardv2;
	this.code=["Y"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new SF3YetiBlizzard()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3YetiBlizzardV3(){
	this.id="SF3YetiBlizzardV3";
	this.name="YetiBlizzardV3";
	this.image=SF3xxx_yeti_blizzardv3;
	this.code=["Y"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=200;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new SF3YetiBlizzard()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3YetiBlizzardX(){
	this.id="SF3YetiBlizzardX";
	this.name="YetiBlizzardX";
	this.image=SF3xxx_yeti_blizzardX;
	this.code=["Y"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=250;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new SF3YetiBlizzard()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3PlesioSurf(){
	this.id="SF3PlesioSurf";
	this.name="PlesioSurf";
	this.image=SF3xxx_plesio_surf;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=150;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new BN6Magnum()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3PlesioSurfV2(){
	this.id="SF3PlesioSurfV2";
	this.name="PlesioSurfV2";
	this.image=SF3xxx_plesio_surfv2;
	this.code=["E"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=200;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new SF3PlesioSurf()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3PlesioSurfV3(){
	this.id="SF3PlesioSurfV3";
	this.name="PlesioSurfV3";
	this.image=SF3xxx_plesio_surfv3;
	this.code=["E"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=250;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new SF3PlesioSurf()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3PlesioSurfX(){
	this.id="SF3PlesioSurfX";
	this.name="PlesioSurfX";
	this.image=SF3xxx_plesio_surfX;
	this.code=["E"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=320;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new SF3PlesioSurf()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3TerraCondor(){
	this.id="SF3TerraCondor";
	this.name="TerraCondor";
	this.image=SF3xxx_terra_condor;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=40;
	this.boostDamage=0;
	this.hits=3;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		this.hitbool = false;
		this.localCannon = new SF3Cannon();
		if(this.localCannon.hithuh(attacker, defender)){
			this.hitbool = true;
		}
		attacker.y = attacker.y + 1;
		if(this.localCannon.hithuh(attacker, defender)){
			this.hitbool = true;
		}
		attacker.y = attacker.y - 2;
		if(this.localCannon.hithuh(attacker, defender)){
			this.hitbool = true;
		}
		attacker.y = attacker.y + 1;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3TerraCondorV2(){
	this.id="SF3TerraCondorV2";
	this.name="TerraCondorV2";
	this.image=SF3xxx_terra_condorv2;
	this.code=["K"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=60;
	this.boostDamage=0;
	this.hits=3;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3TerraCondor()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3TerraCondorV3(){
	this.id="SF3TerraCondorV3";
	this.name="TerraCondorV3";
	this.image=SF3xxx_terra_condorv3;
	this.code=["K"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=80;
	this.boostDamage=0;
	this.hits=3;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3TerraCondor()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3TerraCondorX(){
	this.id="SF3TerraCondorX";
	this.name="TerraCondorX";
	this.image=SF3xxx_terra_condorX;
	this.code=["K"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=100;
	this.boostDamage=0;
	this.hits=3;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3TerraCondor()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3GeneralAuriga(){
	this.id="SF3GeneralAuriga";
	this.name="GeneralAuriga";
	this.image=SF3xxx_general_auriga;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=140;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.hitbool = false;
		this.localJet = new SF3JetAttack1();
		if(this.localJet.hithuh(attacker, defender)){
			this.hitbool = true;
		}
		attacker.y = attacker.y + 1;
		if(this.localJet.hithuh(attacker, defender)){
			this.hitbool = true;
		}
		attacker.y = attacker.y - 2;
		if(this.localJet.hithuh(attacker, defender)){
			this.hitbool = true;
		}
		attacker.y = attacker.y + 1;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3GeneralAurigaV2(){
	this.id="SF3GeneralAurigaV2";
	this.name="GeneralAurigaV2";
	this.image=SF3xxx_general_aurigav2;
	this.code=["Q"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=180;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3GeneralAuriga()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3GeneralAurigaV3(){
	this.id="SF3GeneralAurigaV3";
	this.name="GeneralAurigaV3";
	this.image=SF3xxx_general_aurigav3;
	this.code=["Q"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=220;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3GeneralAuriga()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3GeneralAurigaX(){
	this.id="SF3GeneralAurigaX";
	this.name="GeneralAurigaX";
	this.image=SF3xxx_general_aurigaX;
	this.code=["Q"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=300;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3GeneralAuriga()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3RocketLaunch(){
	this.id="SF3RocketLaunch";
	this.name="RocketLaunch";
	this.image=SF3xxx_rocket_launch;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=160;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.break, ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new SF3JetAttack1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		defender.timpanid = 2;
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3RocketLaunchV2(){
	this.id="SF3RocketLaunchV2";
	this.name="RocketLaunchV2";
	this.image=SF3xxx_rocket_launchv2;
	this.code=["D"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=210;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.break, ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new SF3RocketLaunch()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3RocketLaunch()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3RocketLaunchV3(){
	this.id="SF3RocketLaunchV3";
	this.name="RocketLaunchV3";
	this.image=SF3xxx_rocket_launchv3;
	this.code=["D"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=260;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.break, ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new SF3RocketLaunch()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3RocketLaunch()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3RocketLaunchX(){
	this.id="SF3RocketLaunchX";
	this.name="RocketLaunchX";
	this.image=SF3xxx_rocket_launchX;
	this.code=["D"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=340;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.break, ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new SF3RocketLaunch()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3RocketLaunch()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3IceHammerBreak(){
	this.id="SF3IceHammerBreak";
	this.name="IceHammerBreak";
	this.image=SF3xxx_ice_hammer;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=200;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		if(attacker.name === playerOne.name){
			this.tempX = attacker.x;
			this.tempY = attacker.y;
			attacker.x = playerTwo.x-1;
			attacker.y = playerTwo.y;
			this.hitbool = (new SF3Sword()).hithuh(attacker, defender);
			attacker.x = this.tempX;
			attacker.y = this.tempY;
			return this.hitbool;
		}
		else{
			this.tempX = attacker.x;
			this.tempY = attacker.y;
			attacker.x = playerOne.x+1;
			attacker.y = playerOne.y;
			this.hitbool = (new SF3Sword()).hithuh(attacker, defender);
			attacker.x = this.tempX;
			attacker.y = this.tempY;
			return this.hitbool;
		}
	};
	this.effecthit= function(attacker, defender){
		(new SF3IceHammerBreak()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		board.convertPanel(defender.x, defender.y, PANELTYPE.CRACKED);
	};
}

function SF3IceHammerBreakV2(){
	this.id="SF3IceHammerBreakV2";
	this.name="IceHammerBreakV2";
	this.image=SF3xxx_ice_hammerv2;
	this.code=["H"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=250;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3IceHammerBreak()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3IceHammerBreak()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3IceHammerBreak()).effectmiss(attacker, defender);
	};
}

function SF3IceHammerBreakV3(){
	this.id="SF3IceHammerBreakV3";
	this.name="IceHammerBreakV3";
	this.image=SF3xxx_ice_hammerv3;
	this.code=["H"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=300;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3IceHammerBreak()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3IceHammerBreak()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3IceHammerBreak()).effectmiss(attacker, defender);
	};
}

function SF3IceHammerBreakX(){
	this.id="SF3IceHammerBreakX";
	this.name="IceHammerBreakX";
	this.image=SF3xxx_ice_hammerX;
	this.code=["H"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=370;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3IceHammerBreak()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3IceHammerBreak()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3IceHammerBreak()).effectmiss(attacker, defender);
	};
}

function SF3StrongSwing(){
	this.id="SF3StrongSwing";
	this.name="StrongSwing";
	this.image=SF3xxx_strong_swing;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=50;
	this.boostDamage=0;
	this.hits="3,5";
	this.priority=0;
	this.elements=[ELEMENTS.break, ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		this.hits = 5;
		if(attacker.y === 1){
			this.hits = 3;
		}
		if(defender.invis < 1){
			if(attacker.name === playerOne.name){
				this.tempX = attacker.x;
				attacker.x = playerTwo.x - 1;
				this.hitbool = (new SF3WideSword()).hithuh(attacker, defender);
				attacker.x = this.tempX;
				return this.hitbool;
			}
			else{
				this.tempX = attacker.x;
				attacker.x = playerOne.x - 1;
				this.hitbool = (new SF3WideSword()).hithuh(attacker, defender);
				attacker.x = this.tempX;
				return this.hitbool;
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3StrongSwingV2(){
	this.id="SF3StrongSwingV2";
	this.name="StrongSwingV2";
	this.image=SF3xxx_strong_swingv2;
	this.code=["S"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=60;
	this.boostDamage=0;
	this.hits="3,5";
	this.priority=0;
	this.elements=[ELEMENTS.break, ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		this.localSwing = new SF3StrongSwing();
		this.hitbool = this.localSwing.hithuh(attacker, defender);
		this.hits = this.localSwing.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3StrongSwingV3(){
	this.id="SF3StrongSwingV3";
	this.name="StrongSwingV3";
	this.image=SF3xxx_strong_swingv3;
	this.code=["S"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=70;
	this.boostDamage=0;
	this.hits="3,5";
	this.priority=0;
	this.elements=[ELEMENTS.break, ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		this.localSwing = new SF3StrongSwing();
		this.hitbool = this.localSwing.hithuh(attacker, defender);
		this.hits = this.localSwing.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3StrongSwingX(){
	this.id="SF3StrongSwingX";
	this.name="StrongSwingX";
	this.image=SF3xxx_strong_swingX;
	this.code=["S"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=90;
	this.boostDamage=0;
	this.hits="3,5";
	this.priority=0;
	this.elements=[ELEMENTS.break, ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		this.localSwing = new SF3StrongSwing();
		this.hitbool = this.localSwing.hithuh(attacker, defender);
		this.hits = this.localSwing.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

// -------------- Giga --------------
function SF3WingBlade(){
	this.id="SF3WingBlade";
	this.name="WingBlade";
	this.image=SF3g1a_wingblade;
	this.code=["X"];
	this.goo="SF3";
	this.copies=1;
	this.rank="giga";
	this.damage=450;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.break, ELEMENTS.wind, ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		this.tempY = attacker.y;
		attacker.y = defender.y;
		if((new SF3Cannon()).hithuh(attacker, defender)){
			this.addDamage = 160;
		}
		attacker.y = this.tempY;
		return (new SF3GeneralAuriga()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3DarknessHole(){
	this.id="SF3DarknessHole";
	this.name="DarknessHole";
	this.image=SF3g2a_darknesshole;
	this.code=["X"];
	this.goo="SF3";
	this.copies=1;
	this.rank="giga";
	this.damage=500;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return defender.hp <= this.damage;
	};
	this.effecthit= function(attacker, defender){
		defender.hp = 0;
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3MilliKick(){
	this.id="SF3MilliKick";
	this.name="MilliKick";
	this.image=SF3g3a_thousandkick;
	this.code=["X"];
	this.goo="SF3";
	this.copies=1;
	this.rank="giga";
	this.damage=20;
	this.boostDamage=0;
	this.hits=24;
	this.priority=4;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3Sword()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3BreakTimeBomb(){
	this.id="SF3BreakTimeBomb";
	this.name="BreakTimeBomb";
	this.image=SF3g4a_breakcountbomb;
	this.code=["X"];
	this.goo="SF3";
	this.copies=1;
	this.rank="giga";
	this.damage=600;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.fire, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.xDir = -2;
		if(attacker.name === playerOne.name){
			this.xDir = 2;
		}
		if(board.isCellPlayerValid(attacker.x + this.xDir, attacker.y)){
			return defender.x === attacker.x + this.xDir && defender.y === attacker.y;
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -2;
		if(attacker.name === playerOne.name){
			this.xDirection = 2;
		}
		if(board.isCellPlayerValid(attacker.x + this.xDir, attacker.y)){
			cells[attacker.x + this.xDir][attacker.y].object = [new SF3BreakBombObj(attacker.x + this.xDir, attacker.y, attacker, defender, this.damage + this.boostDamage)];
		}
	};
}

function SF3MuBarrier(){
	this.id="SF3MuBarrier";
	this.name="MuBarrier";
	this.image=SF3g5a_murejection;
	this.code=["X"];
	this.goo="SF3";
	this.copies=1;
	this.rank="giga";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		attacker.barrier = new MuBarrier();
	};
}

function SF3DreadLaser(){
	this.id="SF3DreadLaser";
	this.name="DreadLaser";
	this.image=SF3g1j_gmeteorlaser;
	this.code=["X"];
	this.goo="SF3";
	this.copies=1;
	this.rank="giga";
	this.damage=30;
	this.boostDamage=0;
	this.hits=14;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		if(attacker.name === playerOne.name){
			if(defender.x > attacker.x){
				return (Math.abs(attacker.y - defender.y) < 2)
			}
		}
		else {
			if(defender.x < attacker.x){
				return (Math.abs(attacker.y - defender.y) < 2)
			}
		}
	};
	this.effecthit= function(attacker, defender){
		(new SF3DreadLaser()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		for(var x = 0; x < cells.length; x++){
			for(var y = 0; y < cells[x].length; y++){
				if(attacker.name === playerOne.name){
					if(x > attacker.x){
						if(Math.abs(y - defender.y) < 2){
							board.convertPanel(x, y, PANELTYPE.CRACKED);
						}
					}
				}
				else{
					if(x < attacker.x){
						if(Math.abs(y - defender.y) < 2){
							board.convertPanel(x, y, PANELTYPE.CRACKED);
						}
					}
				}
			}
		}
	};
}

function SF3DestroyMissile(){
	this.id="SF3DestroyMissile";
	this.name="DestroyMissile";
	this.image=SF3g2j_destroymissile;
	this.code=["X"];
	this.goo="SF3";
	this.copies=1;
	this.rank="giga";
	this.damage=50;
	this.boostDamage=0;
	this.hits=10;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return cells[defender.x][defender.y].panelType === PANELTYPE.NORMAL;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3BusterMAX(){
	this.id="SF3BusterMAX";
	this.name="BusterMAX";
	this.image=SF3g3j_bustermax;
	this.code=["X"];
	this.goo="SF3";
	this.copies=1;
	this.rank="giga";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		attacker.busterDamage = 50;
	};
}

function SF3OxTackle(){
	this.id="SF3OxTackle";
	this.name="OxTackle";
	this.image=SF3g4j_oxtackle;
	this.code=["X"];
	this.goo="SF3";
	this.copies=1;
	this.rank="giga";
	this.damage=520;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.fire, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3JetAttack1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3MirrorsEdge(){
	this.id="SF3MirrorsEdge";
	this.name="MirrorsEdge";
	this.image=SF3g5j_dopplemirror;
	this.code=["X"];
	this.goo="SF3";
	this.copies=1;
	this.rank="giga";
	this.damage=0;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		attacker.barrier = new MirrorsEdgeBarrier();
	};
}

// -------------- Secret Giga --------------
function SF3PegasusMagicGX(){
	this.id="SF3PegasusMagicGX";
	this.name="PegasusMagicGX";
	this.image=SF3xxx_pegasus_magicGX;
	this.code=["X"];
	this.goo="SF3";
	this.copies=1;
	this.rank="giga";
	this.damage=450;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new SF3ApolloFlame()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		if(defender.guard === null){
			defender.frozen = 1;
		}
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3LeoKingdomGX(){
	this.id="SF3LeoKingdomGX";
	this.name="LeoKingdomGX";
	this.image=SF3xxx_leo_kingdomGX;
	this.code=["X"];
	this.goo="SF3";
	this.copies=1;
	this.rank="giga";
	this.damage=40;
	this.boostDamage=0;
	this.hits=12;
	this.priority=0;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new SF3ApolloFlame()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3DragonSkyGX(){
	this.id="SF3DragonSkyGX";
	this.name="DragonSkyGX";
	this.image=SF3xxx_dragon_skyGX;
	this.code=["X"];
	this.goo="SF3";
	this.copies=1;
	this.rank="giga";
	this.damage=50;
	this.boostDamage=0;
	this.hits=10;
	this.priority=0;
	this.elements=[ELEMENTS.wood, ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		return (new SF3ApolloFlame()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3GorgonEye(){
	this.id="SF3GorgonEye";
	this.name="GorgonEye";
	this.image=SF3xxx_gorgon_eye;
	this.code=["X"];
	this.goo="SF3";
	this.copies=1;
	this.rank="giga";
	this.damage=550;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.wood];
	this.hithuh= function(attacker, defender){
		if(attacker.name === playerOne.name){
			if(attacker.y === defender.y){
				if(attacker.x < defender.x){
					return true;
				}
			}
		}
		else{
			if(attacker.y === defender.y){
				if(attacker.x > defender.x){
					return true;
				}
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3GeminiThunder(){
	this.id="SF3GeminiThunder";
	this.name="GeminiThunder";
	this.image=SF3xxx_gemini_thunder;
	this.code=["X"];
	this.goo="SF3";
	this.copies=1;
	this.rank="giga";
	this.damage=400;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		if(defender.y === 1){
			if(defender.x > -1 || defender.x < 6){
				return true;
			}
		}
		this.endX = board.endOfRow(1, attacker.name === playerOne.name);
		return defender.x === this.endX;
	};
	this.effecthit= function(attacker, defender){
		if(defender.guard === null){
			defender.stunned = 1;
		}
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3RogueBreak(){
	this.id="SF3RogueBreak";
	this.name="RogueBreak";
	this.image=SF3xxx_rogue_break;
	this.code=["X"];
	this.goo="SF3";
	this.copies=1;
	this.rank="giga";
	this.damage=450;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.sword, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3ApolloFlame()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3Avalanche(){
	this.id="SF3Avalanche";
	this.name="Avalanche";
	this.image=SF3xxx_avalanche;
	this.code=["X"];
	this.goo="SF3";
	this.copies=1;
	this.rank="giga";
	this.damage=80;
	this.boostDamage=0;
	this.hits=6;
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		this.hitbool1 = (new BN6RollingLog1()).oneloghit(attacker, defender, attacker.y, attacker.y);
		attacker.y = attacker.y + 1;
		this.hitbool2 = (new BN6RollingLog1()).oneloghit(attacker, defender, attacker.y, attacker.y);
		attacker.y = attacker.y - 2;
		this.hitbool3 = (new BN6RollingLog1()).oneloghit(attacker, defender, attacker.y, attacker.y);
		attacker.y = attacker.y + 1;

		return (this.hitbool1 || this.hitbool2 || this.hitbool3);
	};
	this.effecthit= function(attacker, defender){
		if(defender.guard === null){
			defender.frozen = 1;
		}
	};
	this.effectmiss= function(attacker, defender){};
}

function SF3FlyingImpact(){
	this.id="SF3FlyingImpact";
	this.name="FlyingImpact";
	this.image=SF3xxx_flying_impact;
	this.code=["X"];
	this.goo="SF3";
	this.copies=1;
	this.rank="giga";
	this.damage=500;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.wood, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		if(attacker.name === playerOne.name){
			if(attacker.y === 2){
				this.hitbool1 = (new SF3JetAttack1()).hithuh(attacker, defender);
				attacker.y = 1;
				this.hitbool2 = (new SF3JetAttack1()).hithuh(attacker, defender);
				attacker.y = 2;
				return this.hitbool1 || this.hitbool2;
			}
			else{
				this.tempY = attacker.y;
				this.hitbool1 = (new SF3JetAttack1()).hithuh(attacker, defender);
				if(attacker.y === 0){
					attacker.y = 1;
				}
				else{
					attacker.y = 0;
				}
				this.hitbool2 = (new SF3JetAttack1()).hithuh(attacker, defender);
				attacker.y = this.tempY;
				return this.hitbool1 || this.hitbool2;
			}
		}
		else{
			if(attacker.y === 0){
				this.hitbool1 = (new SF3JetAttack1()).hithuh(attacker, defender);
				attacker.y = 1;
				this.hitbool2 = (new SF3JetAttack1()).hithuh(attacker, defender);
				attacker.y = 0;
				return this.hitbool1 || this.hitbool2;
			}
			else{
				this.tempY = attacker.y;
				this.hitbool1 = (new SF3JetAttack1()).hithuh(attacker, defender);
				if(attacker.y === 2){
					attacker.y = 1;
				}
				else{
					attacker.y = 2;
				}
				this.hitbool2 = (new SF3JetAttack1()).hithuh(attacker, defender);
				attacker.y = this.tempY;
				return this.hitbool1 || this.hitbool2;
			}
		}
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3TorrentWave(){
	this.id="SF3TorrentWave";
	this.name="TorrentWave";
	this.image=SF3xxx_turrent_wave;
	this.code=["X"];
	this.goo="SF3";
	this.copies=1;
	this.rank="giga";
	this.damage=400;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			this.hitbool1 = (new SF3Cannon()).hithuh(attacker, defender);
			attacker.y = attacker.y + 1;
			this.hitbool2 = (new SF3Cannon()).hithuh(attacker, defender);
			attacker.y = attacker.y - 2;
			this.hitbool3 = (new SF3Cannon()).hithuh(attacker, defender);
			attacker.y = attacker.y + 1;
			if(!this.hitbool1 && !this.hitbool2 && !this.hitbool3){
				this.addDamage = 400;
			}
			return (new SF3GeneralAuriga()).hithuh(attacker, defender);
		}
	};
	this.effecthit= function(attacker, defender){
		(new SF3TorrentWave()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		for(var x = 0; x < cells.length; x++){
			for(var y = 0; y < cells[x].length; y++){
				if(board.cellHasSolidObject(x, y)){
					cells[x][y].object = [];
				}
			}
		}
	};
}

function SF3HolyLight(){
	this.id="SF3HolyLight";
	this.name="HolyLight";
	this.image=SF3xxx_holy_light;
	this.code=["X"];
	this.goo="SF3";
	this.copies=1;
	this.rank="giga";
	this.damage=90;
	this.boostDamage=0;
	this.hits=5;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			this.xDir = -3;
			if(attacker.name === playerOne.name){
				this.xDir = 3;
			}
			if(board.isCellPlayerValid(attacker.x + this.xDir, attacker.y)){
				return cards.around(attacker.x + this.xDir, attacker.y, defender);
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3WickedFlame(){
	this.id="SF3WickedFlame";
	this.name="WickedFlame";
	this.image=SF3xxx_wicked_flame;
	this.code=["X"];
	this.goo="SF3";
	this.copies=1;
	this.rank="giga";
	this.damage=100;
	this.boostDamage=0;
	this.hits=4;
	this.priority=0;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new SF3ApolloFlame()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

var SF3CARDS = [//Standard
				new SF3Cannon(), new SF3PlusCannon(), new SF3HeavyCannon(), new SF3PlasmaGun(), 
				new SF3AirSpread1(), new SF3AirSpread2(), new SF3AirSpread3(), new SF3MadVulcan1(), 
				new SF3MadVulcan2(), new SF3MadVulcan3(), new SF3BlackInk(), new SF3MiniGrenade(), 
				new SF3Sword(), new SF3WideSword(), new SF3LongSword(), new SF3Bushido1(), 
				new SF3Bushido2(), new SF3Bushido3(), new SF3GreatAxe(), new SF3FlameAxe(), 
				new SF3WindyAttack1(), new SF3WindyAttack2(), new SF3WindyAttack3(), new SF3SynchroHook1(), 
				new SF3SynchroHook2(), new SF3SynchroHook3(), new SF3DrillArm1(), new SF3DrillArm2(), 
				new SF3DrillArm3(), new SF3TyphoonDance(), new SF3TornadoDance(), new SF3WhiteMeteor(), 
				new SF3SilverMeteor(), new SF3GrandWave1(), new SF3GrandWave2(), new SF3GrandWave3(), 
				new SF3JetAttack1(), new SF3JetAttack2(), new SF3JetAttack3(), new SF3Buki1(), 
				new SF3Buki2(), new SF3Buki3(), new SF3SmileCoin1(), new SF3SmileCoin2(), 
				new SF3SmileCoin3(), new SF3BigDrop1(), new SF3BigDrop2(), new SF3BigDrop3(), 
				new SF3Buzzsaw1(), new SF3Buzzsaw2(), new SF3Buzzsaw3(), new SF3SkullArrow1(), 
				new SF3SkullArrow2(), new SF3SkullArrow3(), new SF3MuTechnology1(), new SF3MuTechnology2(), 
				new SF3MuTechnology3(), new SF3TimeBomb1(), new SF3TimeBomb2(), new SF3TimeBomb3(), 
				new SF3HeatUpper1(), new SF3HeatUpper2(), new SF3HeatUpper3(), new SF3MechFlame1(), 
				new SF3MechFlame2(), new SF3MechFlame3(), new SF3MadFire1(), new SF3MadFire2(), 
				new SF3MadFire3(), new SF3WideWave1(), new SF3WideWave2(), new SF3WideWave3(), 
				new SF3BubbleHook1(), new SF3BubbleHook2(), new SF3BubbleHook3(), new SF3SharkAttack1(), 
				new SF3SharkAttack2(), new SF3SharkAttack3(), new SF3IceSpin1(), new SF3IceSpin2(), 
				new SF3IceSpin3(), new SF3StealthLaser1(), new SF3StealthLaser2(), new SF3StealthLaser3(), 
				new SF3MummyHand1(), new SF3MummyHand2(), new SF3MummyHand3(), new SF3ThunderHead1(), 
				new SF3ThunderHead2(), new SF3ThunderHead3(), new SF3FlashStrike1(), new SF3FlashStrike2(), 
				new SF3FlashStrike3(), new SF3ArachAttack1(), new SF3ArachAttack2(), new SF3ArachAttack3(), 
				new SF3Shuriken1(), new SF3Shuriken2(), new SF3Shuriken3(), new SF3PollenShot1(), 
				new SF3PollenShot2(), new SF3PollenShot3(), new SF3AcornBomb1(), new SF3AcornBomb2(), 
				new SF3AcornBomb3(), new SF3BeastSlap1(), new SF3BeastSlap2(), new SF3BeastSlap3(), 
				new SF3NoisedWizard1(), new SF3NoisedWizard2(), new SF3NoisedWizard3(), new SF3MalWizard1(), 
				new SF3MalWizard2(), new SF3MalWizard3(), new SF3BlackHole1(), new SF3BlackHole2(), 
				new SF3BlackHole3(), new SF3DoubleStone(), new SF3Bombalizer(), new SF3DivideLine(), 
				new SF3DoubleEater(), new SF3PanelFormat(), new SF3PanicCloud(), new SF3Recover10(), 
				new SF3Recover30(), new SF3Recover50(), new SF3Recover80(), new SF3Recover120(), 
				new SF3Recover150(), new SF3Recover200(), new SF3Recover300(), new SF3Barrier(), 
				new SF3SuperBarrier(), new SF3Aura(), new SF3Invisible(), new SF3Whistle(), 
				new SF3MegaCrusher(), new SF3SpiritFury(), new SF3AntiSword(), new SF3PoisonApple(), 
				new SF3DoubleCross(), new SF3GigaMine(), new SF3GrassStage(), new SF3IceStage(), 
				new SF3ParalyzeStage(), new SF3HolyPanel(), new SF3AttackPanel(), new SF3GravityPlus(), 
				new SF3ParalyzePlus(), new SF3Attack10(), 

				//Secret Standard
				new SF3ImpactCannon(), new SF3PlasmaGunX(), new SF3AirSpreadX(), new SF3MadVulcanX(), 
				new SF3GreenInk(), new SF3BlueInk(), new SF3PurpleInk(), new SF3HeatGrenade(), 
				new SF3WoodGrenade(), new SF3IceGrenade(), new SF3BigGrenade(), new SF3BushidoX(), 
				new SF3ElecSlash(), new SF3WoodSlash(), new SF3FireSlash(), new SF3BreakSabre(), 
				new SF3BreakSabreX(), new SF3GiantAxe(), new SF3Muramasa(), new SF3SwordFighter1(), 
				new SF3SwordFighter2(), new SF3SwordFighter3(), new SF3SwordFighterX(), new SF3WindyAttackX(), 
				new SF3SynchroHookX(), new SF3StunKnuckle(), new SF3PoisonKnuckle(), new SF3FreezeKnuckle(), 
				new SF3DestroyUpper(), new SF3DrillArmX(), new SF3HurricaneDance(), new SF3PlatinumMeteor(), 
				new SF3ExtinctionMeteor(), new SF3RadarMissile(), new SF3GrandWaveX(), new SF3JetAttackX(), 
				new SF3BukiX(), new SF3SmileCoinX(), new SF3BigDropX(), new SF3BuzzsawX(), 
				new SF3SkullArrowX(), new SF3MuTechnologyX(), new SF3Scythe1(), new SF3Scythe2(), 
				new SF3Scythe3(), new SF3ScytheX(), new SF3PuffBlast1(), new SF3PuffBlast2(), 
				new SF3PuffBlast3(), new SF3PuffBlastX(), new SF3TimeBombX(), new SF3HeatUpperX(), 
				new SF3MechFlameX(), new SF3MadFireX(), new SF3DanceFire1(), new SF3DanceFire2(), 
				new SF3DanceFire3(), new SF3DanceFireX(), new SF3KiloBomb1(), new SF3KiloBomb2(), 
				new SF3KiloBomb3(), new SF3KiloBombX(), new SF3WideWaveX(), new SF3BubbleHookX(), 
				new SF3SharkAttackX(), new SF3IceSpinX(), new SF3Snowball1(), new SF3Snowball2(), 
				new SF3Snowball3(), new SF3SnowballX(), new SF3PiranhaKiss1(), new SF3PiranhaKiss2(), 
				new SF3PiranhaKiss3(), new SF3PiranhaKissX(), new SF3StealthLaserX(), new SF3MummyHandX(), 
				new SF3ThunderHeadX(), new SF3FlashStrikeX(), new SF3EarthThunder1(), new SF3EarthThunder2(), 
				new SF3EarthThunder3(), new SF3EarthThunderX(), new SF3ArachAttackX(), new SF3ShurikenX(), 
				new SF3PollenShotX(), new SF3AcornBombX(), new SF3Squall1(), new SF3Squall2(), 
				new SF3Squall3(), new SF3SquallX(), new SF3VulcanSeed1(), new SF3VulcanSeed2(), 
				new SF3VulcanSeed3(), new SF3VulcanSeedX(), new SF3BeastSlapX(), new SF3NoisedWizardX(), 
				new SF3MalWizardX(), new SF3SpinBlade1(), new SF3SpinBlade2(), new SF3SpinBlade3(), 
				new SF3SpinBladeX(), new SF3BlackHoleX(), new SF3JungleStorm(), new SF3SnowStorm(), 
				new SF3PoisonStorm(), new SF3MegaBoost(), new SF3QuickGauge(), new SF3NormalGauge(), 
				new SF3Slowgauge(), new SF3WarriorSoul(), new SF3AllPoison(), new SF3Fire30(), 
				new SF3Aqua30(), new SF3Elec30(), new SF3Wood30(), 

				//Mega
				new SF3SpadeMagnes(), new SF3SpadeMagnesV2(), new SF3SpadeMagnesV3(), 
				new SF3DiamondIce(), new SF3DiamondIceV2(), new SF3DiamondIceV3(), 
				new SF3ClubStrong(), new SF3ClubStrongV2(), new SF3ClubStrongV3(), 
				new SF3QueenVirgo(), new SF3QueenVirgoV2(), new SF3QueenVirgoV3(), 
				new SF3JackCorvus(), new SF3JackCorvusV2(), new SF3JackCorvusV3(), 
				new SF3DreadJoker(), new SF3DreadJokerV2(), new SF3DreadJokerV3(), 
				new SF3AcidAce(), new SF3AcidAceV2(), new SF3AcidAceV3(), 
				new SF3TaurusFire(), new SF3TaurusFireV2(), new SF3TaurusFireV3(), 
				new SF3CygnusWing(), new SF3CygnusWingV2(), new SF3CygnusWingV3(), 
				new SF3WolfWoods(), new SF3WolfWoodsV2(), new SF3WolfWoodsV3(), 
				new SF3DarkPhantom(), new SF3DarkPhantomV2(), new SF3DarkPhantomV3(), 
				new SF3Rogue(), new SF3RogueV2(), new SF3RogueV3(), 
				new SF3MoonDestroyer(), new SF3MoonDestroyerV2(), new SF3MoonDestroyerV3(), 
				new SF3ApolloFlame(), new SF3ApolloFlameV2(), new SF3ApolloFlameV3(), 
				new SF3Sirius(), new SF3SiriusV2(), new SF3SiriusV3(), 

				//Secret Mega
				new SF3SpadeMagnesX(), new SF3DiamondIceX(), new SF3ClubStrongX(), 
				new SF3QueenVirgoX(), new SF3JackCorvusX(), new SF3DreadJokerX(), 
				new SF3AcidAceX(), new SF3TaurusFireX(), new SF3CygnusWingX(), 
				new SF3WolfWoodsX(), new SF3DarkPhantomX(), new SF3RogueX(), 
				new SF3MoonDestroyerX(), new SF3ApolloFlameX(), new SF3SiriusX(), 
				new SF3LibraScales(), new SF3LibraScalesV2(), new SF3LibraScalesV3(), new SF3LibraScalesX(), 
				new SF3QueenOphiuca(), new SF3QueenOphiucaV2(), new SF3QueenOphiucaV3(), new SF3QueenOphiucaX(), 
				new SF3GeminiSpark(), new SF3GeminiSparkV2(), new SF3GeminiSparkV3(), new SF3GeminiSparkX(), 
				new SF3CancerBubble(), new SF3CancerBubbleV2(), new SF3CancerBubbleV3(), new SF3CancerBubbleX(), 
				new SF3CrownThunder(), new SF3CrownThunderV2(), new SF3CrownThunderV3(), new SF3CrownThunderX(), 
				new SF3YetiBlizzard(), new SF3YetiBlizzardV2(), new SF3YetiBlizzardV3(), new SF3YetiBlizzardX(), 
				new SF3PlesioSurf(), new SF3PlesioSurfV2(), new SF3PlesioSurfV3(), new SF3PlesioSurfX(), 
				new SF3TerraCondor(), new SF3TerraCondorV2(), new SF3TerraCondorV3(), new SF3TerraCondorX(), 
				new SF3GeneralAuriga(), new SF3GeneralAurigaV2(), new SF3GeneralAurigaV3(), new SF3GeneralAurigaX(), 
				new SF3RocketLaunch(), new SF3RocketLaunchV2(), new SF3RocketLaunchV3(), new SF3RocketLaunchX(), 
				new SF3IceHammerBreak(), new SF3IceHammerBreakV2(), new SF3IceHammerBreakV3(), new SF3IceHammerBreakX(), 
				new SF3StrongSwing(), new SF3StrongSwingV2(), new SF3StrongSwingV3(), new SF3StrongSwingX(), 

				//Giga
				new SF3WingBlade(), new SF3DarknessHole(), new SF3MilliKick(), new SF3BreakTimeBomb(), new SF3MuBarrier(), 
				new SF3DreadLaser(), new SF3DestroyMissile(), new SF3BusterMAX(), new SF3OxTackle(), new SF3MirrorsEdge(), 

				//Secret Giga
				new SF3PegasusMagicGX(), new SF3LeoKingdomGX(), new SF3DragonSkyGX(), 
				new SF3GorgonEye(), new SF3GeminiThunder(), new SF3Avalanche(), new SF3RogueBreak(), 
				new SF3FlyingImpact(), new SF3TorrentWave(), new SF3HolyLight(), new SF3WickedFlame()];

function SF3Cards(){

}
