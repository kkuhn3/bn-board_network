
function BasicBarrier(hp){
	this.id = "BasicBarrier";
	this.hp = hp;

	this.onHit = function(card){
		this.hp = this.hp - card.damage * card.hits;
	}
}

