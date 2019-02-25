
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
	this.flipbool = true;
	this.resolve = function(player){
		if(this.flipbool){
			board.convertPanel(player.x, player.y, PANELTYPE.POISON);
		}
		else{
			board.convertPanel(player.x, player.y, PANELTYPE.HOLY);
		}
	}
}
