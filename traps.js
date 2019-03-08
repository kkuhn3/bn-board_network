
function BN6ElementTrapTrap(){
	this.id = "ElementTrapTrap";
	this.triggerOnCard = function(theCard){
		this.elementalElements = [ELEMENTS.fire, ELEMENTS.aqua, ELEMENTS.wood, ELEMENTS.elec];
		for(var i = 0; i < this.elementalElements.length; i++){
			if(theCard.elements.includes(this.elementalElements[i])){
				return true;
			}
		}
	};
	this.triggerOnHit = function(theCard){
		return false;
	};
	this.triggerOnDamage = function(theCard){
		return false;
	};
	this.trigger = function(attacker, defender, theCard){
		attacker.hp = attacker.hp - 240;
		defender.trap = null;
		return true;
	};
}

function BN6AntiNaviTrap(){
	this.id = "BN6AntiNaviTrap";
	this.triggerOnCard = function(theCard){
		return theCard.rank === "Mega";
	};
	this.triggerOnHit = function(theCard){
		return false;
	};
	this.triggerOnDamage = function(theCard){
		return false;
	};
	this.trigger = function(attacker, defender, theCard){
		board.attackWithCard(defender, attacker, theCard);
		defender.trap = null;
		return false;
	};
}

function BN6AntiDmgTrap(){
	this.id = "BN6AntiDmgTrap";
	this.triggerOnCard = function(theCard){
		return false;
	};
	this.triggerOnHit = function(theCard){
		return false;
	};
	this.triggerOnDamage = function(theCard){
		return true;
	};
	this.trigger = function(attacker, defender, theCard){
		attacker.hp = attacker.hp - 100;
		defender.trap = null;
	};
	this.dodgesDamage = function(attacker, theCard, one, all){
		this.baseDamage = theCard.damage + theCard.addDamage + attacker.bonusDamage;
		return this.baseDamage * one * all;
	};
}

function BN6AntiSwordTrap(){
	this.id = "BN6AntiSwordTrap";
	this.triggerOnCard = function(theCard){
		return false;
	};
	this.triggerOnHit = function(theCard){
		return theCard.elements.includes(ELEMENTS.sword);
	};
	this.triggerOnDamage = function(theCard){
		return false;
	};
	this.trigger = function(attacker, defender, theCard){
		defender.invincible = 1;
		board.attackWithCard(defender, attacker, BN6AntiSwordSlashes);
		defender.trap = null;
	};
	this.dodgesDamage = function(attacker, theCard, one, all){};
}

function BN6AntiRecoverTrap(){
	this.id = "BN6AntiRecoverTrap";
	this.triggerOnCard = function(theCard){
		return theCard.name.includes("Recover");
	};
	this.triggerOnHit = function(theCard){
		return false;
	};
	this.triggerOnDamage = function(theCard){
		return false;
	};
	this.trigger = function(attacker, defender, theCard){
		this.s = theCard.name.indexOf("Recover") + 7;
		this.e = theCard.name.length;
		this.val = parseInt(theCard.name.substring(this.s, this.e));
		attacker.hp = attacker.hp - this.val;
		return false;
	};
}

function Traps(){
	
}

