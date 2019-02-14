
function HPBug(damage){
	this.id = "HPBug";
	this.damage = damage;
	this.resolve = function(player){
		player.hp = player.hp - this.damage;
	}
}