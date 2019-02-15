
function Reflector(damage){
	this.id = "Reflector";
	this.damage = damage;
	this.hitHuh = function(attacker, defender){
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
	}
	this.onHit = function(attacker, defender){
		if(this.hitHuh(attacker, defender)){
			attacker.hp = attacker.hp - this.damage;
		}
	}
}