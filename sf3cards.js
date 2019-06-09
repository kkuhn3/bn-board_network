
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
				new SF3Buki2(), new SF3Buki3()];

function SF3Cards(){

}
