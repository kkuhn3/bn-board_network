
function BN6AntiSwordSlashes(){
	this.id="BN6AntiSwordSlashes";
	this.name="BN6AntiSwordSlashes";
	this.image=BN6AntiSwordIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=99;
	this.rank="standard";
	this.damage=100;
	this.boostDamage=0;
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

function BN6BugThunderBuster(){
	this.id="BN6BugThunderBuster";
	this.name="BN6BugThunderBuster";
	this.image=BN6BugThunderBuster;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=99;
	this.rank="giga";
	this.damage=200;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[];
	this.chargeBool = false;
	this.hithuh= function(attacker, defender){
		return (new BN6Sword()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		if(this.chargeBool){
			if(defender.guard === null){
				defender.stunned = 2;
			}
		}
		this.chargeBool = !this.chargeBool;
	};
	this.effectmiss= function(attacker, defender){
		if(this.chargeBool){
			if(attacker.name === "one"){
				if(!board.cellHasSolidObject(attacker.x+1, attacker.y) && cells[attacker.x+1][attacker.y].player === null){
					this.localBN6ThunderBall = new BN6ThunderBall(attacker.x+1, attacker.y, attacker, defender, 8, this.damage);
					this.localBN6ThunderBall.image = ThunderBall_blue;
					cells[attacker.x+1][attacker.y].object.push(this.localBN6ThunderBall);
				}
			}
			else{
				if(!board.cellHasSolidObject(attacker.x-1, attacker.y) && cells[attacker.x-1][attacker.y].player === null){
					this.localBN6ThunderBall = new BN6ThunderBall(attacker.x-1, attacker.y, attacker, defender, 8, this.damage);
					this.localBN6ThunderBall.image = ThunderBall_blue;
					cells[attacker.x-1][attacker.y].object.push(this.localBN6ThunderBall);
				}
			}
		}
		else{
			console.log("Bug Thunder Buster Charged!");
		}
		this.chargeBool = !this.chargeBool;
	};
}

BN6UNCARDS = [new BN6AntiSwordSlashes(), new BN6Buster(), new BN6BugThunderBuster()];