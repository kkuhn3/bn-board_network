
function BN6RockCube(x, y){
	this.id = "BN6RockCube";
	this.hp = 200;
	this.image = grey_man;
	this.solid = true;
	this.effecthit = function(cardHitBy, direction){
		if(cardHitBy.elements.indexOf(ELEMENTS.wind) !== -1){
			if(direction = "east"){
				for(var i=this.x; i < 6; i++){
					if(playerOne.x === i && playerOne.y === this.y){
						playerOne.hp = playerOne.hp - this.hp;
						this.hp = 0;
						return true;
					}
					if(playerTwo.x === i && playerTwo.y === this.y){
						playerTwo.hp = playerTwo.hp - this.hp;
						this.hp = 0;
						return true;
					}
				}
			}
			else{
				for(var i=this.x; i > -1 ; i--){
					if(playerOne.x === i && playerOne.y === this.y){
						playerOne.hp = playerOne.hp - this.hp;
						this.hp = 0;
						return true;
					}
					if(playerTwo.x === i && playerTwo.y === this.y){
						playerTwo.hp = playerTwo.hp - this.hp;
						this.hp = 0;
						return true;
					}
				}
			}
		}
		else if(cardHitBy.elements.indexOf(ELEMENTS.break)){
			this.hp = 0;
		}
		else{
			this.hp = this.hp - cardHitBy.damage * cardHitBy.hits;
		}
		if(this.hp < 1){
			cells[this.x][this.y].object = null;
			this.x = -1;
			this.y = -1;
		}
	};
	this.hitByBuster = function(player){
		this.hp = this.hp - player.busterDamage;
	}
	this.passiveTriggered = false;
	this.passive = function(){}
	this.x = x;
	this.y = y;
}

function BN6ThunderBall(x, y, attacker, defender, hp){
	this.id = "BN6Thunder";
	this.hp = hp;
	this.image = grey_man;
	this.solid = false;
	this.effecthit = function(cardHitBy, direction){};
	this.hitByBuster = function(player){}
	this.passiveTriggered = false;
	this.passive = function(){
		this.hp--;
		if(this.hp < 1){
			cells[this.x][this.y].object = null;
		}
		else{
			cells[this.x][this.y].object = null;
			if(this.x < defender.x){
				if(!board.cellHasSolidObject(this.x+1, this.y)){
					cells[this.x+1][this.y].object = this;
					this.x++;
				}
			}
			else if(this.x > defender.x){
				if(!board.cellHasSolidObject(this.x-1, this.y)){
					cells[this.x-1][this.y].object = this;
					this.x--;
				}
			}
			else if(this.y < defender.y){
				if(!board.cellHasSolidObject(this.x, this.y+1)){
					cells[this.x][this.y+1].object = this;
					this.y++;
				}
			}
			else if(this.y > defender.y){
				if(!board.cellHasSolidObject(this.x, this.y-1)){
					cells[this.x][this.y-1].object = this;
					this.y--;
				}
			}
			if(this.x === defender.x && this.y === defender.y){
				console.log("Player " + attacker.name + "'s thunder hit!");
				defender.hp = defender.hp - BN6Thunder.damage;
				BN6Thunder.effecthit(attacker, defender);
			}
		}
	}
	this.x = x;
	this.y = y;
}

function PlayerObject(){
	this.id = "playerObject";
	this.image = grey_man;
	this.solid = true;
	this.effecthit = function(cardHitBy, direction){};
	this.hitByBuster = function(player){}
	this.passive = function(){}
}