
function Reflector(damage){
	this.id = "Reflector";
	this.damage = damage;
	this.hithuh = function(attacker, defender){
		if(attacker.invis < 1){
			if(defender.name === "one"){
				for(var i=1; i <= 5 - defender.x; i++){
					if(cells[defender.x+i][defender.y].panelType === PANELTYPE.HOLE){
						return false;
					}
				}
				return attacker.y === defender.y && defender.x < attacker.x;
			}
			else{
				for(var i=1; i <= defender.x; i++){
					if(cells[defender.x-i][defender.y].panelType === PANELTYPE.HOLE){
						return false;
					}
				}
				return attacker.y === defender.y && defender.x > attacker.x;
			}
		}
		return false;
	}
	this.onHit = function(attacker, defender){
		if(this.hithuh(attacker, defender)){
			attacker.hp = attacker.hp - this.damage;
		}
	}
}

function HoneyGuard(damage){
	this.id = "HoneyGuard";
	this.damage = damage;
	this.hithuh = function(attacker, defender){
		return BN6RiskyHoney1.hithuh(defender, attacker);
	}
	this.onHit = function(attacker, defender){
		for(var i=0; i < attacker.card.hits; i++){
			if(this.hithuh(attacker, defender)){
				attacker.hp = attacker.hp - this.damage*5;
			}
			else{
				if(defender.name === "one"){
					if(!board.cellHasSolidObject(defender.x+1, defender.y)){
						cells[defender.x+1][defender.y].object.push(new BN6HoneyBall(defender.x+1, defender.y, defender, attacker, this.damage));
					}
				}
				else{	
					if(!board.cellHasSolidObject(defender.x-1, defender.y)){
						cells[defender.x-1][defender.y].object.push(new BN6HoneyBall(defender.x-1, defender.y, defender, attacker, this.damage));
					}
				}
			}
		}
	}
}
