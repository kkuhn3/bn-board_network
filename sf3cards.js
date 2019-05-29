
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
			if(attacker.name === "one"){
				for(var i=1; i <= 5 - attacker.x; i++){
					if(attacker.y === defender.y && attacker.x + i === defender.x){
						return true;
					}
					if(board.cellHasSolidObject(attacker.x + i, attacker.y)){
						if(attacker.y === defender.y && (defender.x === attacker.x + i + 1)){
							return true;
						}
						return Math.abs(attacker.y - attacker.x) === 1 && defender.x === attacker.x + i;
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
						return Math.abs(attacker.y - attacker.x) === 1 && defender.x === attacker.x - i;
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
			if(attacker.name === "one"){
				for(var i=1; i <= 5 - attacker.x; i++){
					if(attacker.y === defender.y && attacker.x + i === defender.x){
						return true;
					}
					if(board.cellHasSolidObject(attacker.x + i, attacker.y)){
						if(Math.abs(attacker.y - attacker.x) < 2 && (defender.x === attacker.x + i + 1)){
							return true;
						}
						return Math.abs(attacker.y - attacker.x) < 2 && defender.x === attacker.x + i;
					}
				}
			}
			else{
				for(var i=1; i <= attacker.x; i++){
					if(attacker.y === defender.y && attacker.x - i === defender.x){
						return true;
					}
					if(board.cellHasSolidObject(attacker.x - i, attacker.y)){
						if(Math.abs(attacker.y - attacker.x) < 2 && (defender.x === attacker.x - i - 1)){
							return true;
						}
						return Math.abs(attacker.y - attacker.x) < 2 && defender.x === attacker.x - i;
					}
				}
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

var SF3CARDS = [new SF3Cannon(), new SF3PlusCannon(), new SF3HeavyCannon()];

function SF3Cards(){

}
