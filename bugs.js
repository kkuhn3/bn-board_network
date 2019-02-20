
function HPBug(damage){
	this.id = "HPBug";
	this.damage = damage;
	this.resolve = function(player){
		player.hp = player.hp - this.damage;
	}
}

function BusterBug(){
	this.id = "BusterBug";
	this.resolve = function(player){
		player.busterDamage = Math.floor(Math.random() * 50);
	}
}

function PathBug(){
	this.id = "PathBug";
	this.resolve = function(player){
		cells[player.x][player.y].panelType = paneltypes[Math.floor(Math.random() * paneltypes.length)];
	}
}
