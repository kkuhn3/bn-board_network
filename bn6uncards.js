
function BN6AntiSwordSlashes(){
	this.id="BN6AntiSwordSlashes";
	this.name="BN6AntiSwordSlashes";
	this.image=BN6AntiSwordIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=99;
	this.rank="standard";
	this.damage=100;
	this.hits=3;
	this.priority=0;
	this.elements=[ELEMENTS.SWORD];
	this.hithuh= function(attacker, defender){
		return (new BN6WideShot()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6Buster(){
	this.id="BN6Buster";
	this.name="BN6Buster";
	this.image=BN6BusterUpIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=99;
	this.rank="standard";
	this.damage=10;
	this.hits=1;
	this.priority=2;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Cannon()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

BN6UNCARDS = [new BN6AntiSwordSlashes(), new BN6Buster()];