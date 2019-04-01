
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
	this.name="Buster";
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
	this.name="Bug-Thunder";
	this.image=BN6BugThunderBuster;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=99;
	this.rank="giga";
	this.damage=200;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[];
	this.chargeBool = 1;
	this.hithuh= function(attacker, defender){
		if(this.chargeBool%3 === 0){
			return (new BN6Sword()).hithuh(attacker, defender);
		}
		return (new BN6Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		if(defender.guard === null){
			defender.stunned = 2;
		}
		this.chargeBool++;
	};
	this.effectmiss= function(attacker, defender){
		if(this.chargeBool%3 === 0){
			if(attacker.name === playerOne.name){
				if(!board.cellHasSolidObject(attacker.x+1, attacker.y) && cells[attacker.x+1][attacker.y].player === null){
					cells[attacker.x+1][attacker.y].object.push(new BN6ThunderBall(attacker.x+1, attacker.y, attacker, defender, 8, this.damage, "blue"));
				}
			}
			else{
				if(!board.cellHasSolidObject(attacker.x-1, attacker.y) && cells[attacker.x-1][attacker.y].player === null){
					cells[attacker.x-1][attacker.y].object.push(new BN6ThunderBall(attacker.x-1, attacker.y, attacker, defender, 8, this.damage, "blue"));
				}
			}
		}
		else if(this.chargeBool%3 === 1){
			console.log("Bug Thunder Buster Starting Charge!");
		}
		else{
			console.log("Bug Thunder Buster Fully Charge!");
		}
		this.chargeBool++;
	};
}

function BN6BugSwordBuster(){
	this.id="BN6BugSwordBuster";
	this.name="Bug-Sword";
	this.image=BN6BugSwordBuster;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=99;
	this.rank="giga";
	this.damage=200;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[ELEMENTS.sword];
	this.chargeBool = 1;
	this.hithuh= function(attacker, defender){
		if(this.chargeBool%2 === 0){
			this.chargeBool++;
			return (new BN6VarSword()).hithuh(attacker, defender);
		}
		this.chargeBool++;
		console.log("Bug Sword Buster Charged!");
		return (new BN6Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

function BN6AntiDamageShuriken(){
	this.id="BN6AntiDamageShuriken";
	this.name="BN6AntiDamageShuriken";
	this.image=BN6AntiDamageShuriken;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.mb=99;
	this.rank="standard";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.accurate=true;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			this.targetPlayer = playerOne;
			if(attacker.name === playerOne.name){
				this.targetPlayer = playerTwo;
			}
			if(this.accurate){
				return this.targetPlayer.x === defender.x && this.targetPlayer.y === defender.y;
			}
			else{
				return this.targetPlayer.lastX === defender.x && this.targetPlayer.lastY === defender.y;
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
}

BN6UNCARDS = [new BN6AntiSwordSlashes(), new BN6Buster(), new BN6BugThunderBuster(), new BN6BugSwordBuster()];