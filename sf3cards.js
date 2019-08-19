
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
	this.priority=2;
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
	this.priority=2;
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
	this.priority=2;
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
	this.priority=2;
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
	this.priority=2;
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
	this.priority=2;
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
	this.priority=2;
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
	this.priority=2;
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
	this.priority=2;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3MadVulcan1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function SF3MadVulcan3(){
	this.id="SF3MadVulcan1";
	this.name="MadVulcan1";
	this.image=SF3010_madvulcan3;
	this.code=["A", "D", "L"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=10;
	this.boostDamage=0;
	this.hits=12;
	this.priority=2;
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
	this.priority=2;
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
	this.priority=3;
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
	this.priority=1;
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
	this.priority=1;
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
	this.priority=1;
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
	this.priority=1;
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
	this.priority=1;
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
	this.priority=1;
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
	this.priority=3;
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
	this.priority=3;
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
	this.priority=2;
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
	this.priority=2;
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
	this.priority=2;
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
	this.priority=3;
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
	this.priority=3;
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
	this.priority=3;
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
	this.priority=1;
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
	this.priority=1;
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
	this.priority=1;
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
	this.priority=1;
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
	this.priority=1;
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
	this.priority=2;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		this.hits = 0;
		this.xArray = [0, 0, 0, 1, 1, 1, 2, 2, 2];
		this.yArray = [2, 1, 0, 2, 1, 0, 2, 1, 0];
		if(attacker.name === playerOne.name){
			this.xArray = [5, 5, 5, 4, 4, 4, 3, 3, 3];
			this.yArray = [0, 1, 2, 0, 1, 2, 0, 1, 2];
		}
		this.arrInd = 0;
		this.dropped = 0;
		this.hitbool = false;
		while(this.dropped < 9){
			if(cells[this.xArray[this.arrInd]][this.yArray[this.arrInd]].panelType === PANELTYPE.NORMAL){
				if(defender.x === this.xArray[this.arrInd] && defender.y === this.yArray[this.arrInd]){
					this.hits++;
				}
				this.dropped++;
			}
			this.arrInd++;
			if(this.arrInd === 9){
				this.arrInd = 0;
			}
		}
		if(this.hits === 0){
			this.hits = 1;
			return false;
		}
		if(defender.invis > 0){
			return false;
		}
		return true;
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
	this.priority=2;
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
	this.priority=2;
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
	this.priority=2;
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
	this.priority=2;
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
	this.priority=2;
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
	this.priority=2;
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
	this.priority=2;
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
	this.priority=3;
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
	this.priority=3;
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
	this.priority=3;
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
	this.priority=2;
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
	this.priority=2;
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
	this.priority=2;
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
	this.priority=3;
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
	this.priority=3;
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
	this.priority=3;
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
	this.priority=2;
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
	this.priority=2;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new SF3Buzzsaw1()).hithuh(attakcer, defender);
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
	this.priority=2;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new SF3Buzzsaw1()).hithuh(attakcer, defender);
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
	this.priority=2;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			this.targetCol = 0;
			if(attacker.name === playerOne.name){
				this.targetCol = 5;
			}
			if(defender.x = this.targetCol){
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
	this.priority=2;
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
	this.priority=2;
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
	this.priority=3;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.addDamage = null;
		if(cells[attacker.x][attacker.y].panelType = PANELTYPE.holy){
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
	this.priority=3;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.addDamage = null;
		if(cells[attacker.x][attacker.y].panelType = PANELTYPE.holy){
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
	this.priority=3;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.addDamage = null;
		if(cells[attacker.x][attacker.y].panelType = PANELTYPE.holy){
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
	this.priority=2;
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
	this.priority=2;
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
	this.priority=2;
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
	this.priority=2;
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
	this.priority=2;
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
	this.priority=2;
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
	this.priority=2;
	this.elements=[ELEMENTS.fire, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.hits = 1;
		if(defender.guard === null){
			this.hits = 3;
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
	this.priority=2;
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
	this.priority=2;
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
	this.priority=2;
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
	this.priority=2;
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
	this.priority=2;
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
	this.priority=2;
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
	this.priority=2;
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
	this.priority=2;
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
	this.hits="1-5";
	this.priority=2;
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
	this.hits="1-5";
	this.priority=2;
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
	this.hits="1-5";
	this.priority=2;
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
	this.priority=2;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		this.xDir = -1;
		this.targetPlayer = playerOne;
		if(attacker.name === playerOne.name){
			this.xDir = 1;
			this.targetPlayer = playerTwo;
		}
		this.startX = this.targetPlayer.x - this.xDir*3;
		while(cells[this.startX] && !cellHasSolidObject(this.startX, this.targetPlayer.y)){
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
	this.priority=2;
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
	this.priority=2;
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
	this.priority=3;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new SF3GreatAxe()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		if(defender.guard === null){
			defender.stunned = 2;
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
	this.priority=3;
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
	this.priority=3;
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
	this.priority=2;
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
	this.priority=2;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new SF3ThunderHead1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		SF3ThunderHead1().effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		SF3ThunderHead1().effectmiss(attacker, defender);
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
	this.priority=2;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new SF3ThunderHead1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		SF3ThunderHead1().effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		SF3ThunderHead1().effectmiss(attacker, defender);
	};
}

var SF3CARDS = [new SF3Cannon(), new SF3PlusCannon(), new SF3HeavyCannon(), new SF3PlasmaGun(), 
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
				new SF3IceSpin3(), new SF3StealthLaser1(), new SF3StealthLaser1, new SF3StealthLaser3(), 
				new SF3MummyHand1(), new SF3MummyHand2(), new SF3MummyHand3(), new SF3ThunderHead1(), 
				new SF3ThunderHead2(), new SF3ThunderHead3()];

function SF3Cards(){

}
