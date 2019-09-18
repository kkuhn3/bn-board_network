
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
		player.busterType.damage = board.generateRandomNum(51);
	}
}

function PathBug(){
	this.id = "PathBug";
	this.resolve = function(player){
		this.bugPanels = [PANELTYPE.NORMAL, PANELTYPE.GRASS, PANELTYPE.POISON, PANELTYPE.CRACKED, PANELTYPE.ICE, PANELTYPE.HOLY, PANELTYPE.UP, PANELTYPE.RIGHT, PANELTYPE.DOWN, PANELTYPE.LEFT];
		this.bugPanel = this.bugPanels[board.generateRandomNum(this.bugPanels.length)];
		board.convertPanel(player.x, player.y, this.bugPanel);
	}
}
