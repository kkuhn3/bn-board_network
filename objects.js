
function BN6RockCube(x, y){
	this.id = "BN6RockCube";
	this.hp = 200;
	this.image = rock;
	this.solid = true;
	this.effecthit = function(attacker){
		var cardHitBy = attacker.card;
		if(cardHitBy.id === "BN6AirShot" || cardHitBy.id === "BN6WindRacket"){
			if(attacker.name === "one"){
				for(var i=this.x; i < 6; i++){
					if(board.cellHasSolidObject(i, this.y)){
						this.hp = 0;
					}
					else if(playerTwo.x === i && playerTwo.y === this.y){
						playerTwo.hp = playerTwo.hp - this.hp;
						this.hp = 0;
					}
				}
			}
			else{
				for(var i=this.x; i > -1 ; i--){
					if(board.cellHasSolidObject(i, this.y)){
						this.hp = 0;
					}
					else if(playerOne.x === i && playerOne.y === this.y){
						playerOne.hp = playerOne.hp - this.hp;
						this.hp = 0;
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
			cells[this.x][this.y].object = [];
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
	this.image = thunderball;
	this.solid = false;
	this.effecthit = function(cardHitBy, direction){};
	this.hitByBuster = function(player){}
	this.passiveTriggered = false;
	this.passive = function(){
		this.index = cells[this.x][this.y].object.indexOf(this);
		this.hp--;
		if(this.hp < 1){
			cells[this.x][this.y].object.splice(this.index, 1);
		}
		else{
			cells[this.x][this.y].object.splice(this.index, 1);
			if(this.x < defender.x){
				if(!board.cellHasSolidObject(this.x+1, this.y)){
					cells[this.x+1][this.y].object.push(this);
					this.x++;
				}
			}
			else if(this.x > defender.x){
				if(!board.cellHasSolidObject(this.x-1, this.y)){
					cells[this.x-1][this.y].object.push(this);
					this.x--;
				}
			}
			else if(this.y < defender.y){
				if(!board.cellHasSolidObject(this.x, this.y+1)){
					cells[this.x][this.y+1].object.push(this);
					this.y++;
				}
			}
			else if(this.y > defender.y){
				if(!board.cellHasSolidObject(this.x, this.y-1)){
					cells[this.x][this.y-1].object.push(this);
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

function BN6HoneyBall(x, y, attacker, defender, damage){
	this.id = "BN6HoneyBall";
	this.damage = damage;
	this.image = honeyball;
	this.solid = false;
	this.hp = 2;
	this.directionX = -1;
	this.directionY = 0;
	if(attacker.name === "one"){
		this.directionX = 1;
	}
	this.directionX
	this.effecthit = function(cardHitBy, direction){};
	this.hitByBuster = function(player){}
	this.passiveTriggered = false;
	this.passive = function(){
		this.index = cells[this.x][this.y].object.indexOf(this);
		cells[this.x][this.y].object.splice(this.index, 1);
		if(this.x === defender.x && this.y === defender.y){
			console.log("Player " + attacker.name + "'s HoneyBall hit!");
			defender.hp = defender.hp - this.damage * 5;
		}
		else{
			if(this.hp < 1){
				cells[this.x][this.y].object.splice(this.index, 1);
				if(cells[this.x+this.directionX] && cells[this.x+this.directionX][this.y+this.directionY]){
					this.x = this.x + this.directionX;
					this.y = this.y + this.directionY;
					cells[this.x][this.y].object.push(this);
				}
			}
			else{
				var towardsX = 0;
				var towardsY = 0;
				if(this.x < defender.x){
					towardsX = 1;
				}
				if(this.x > defender.x){
					towardsX = -1
				}
				if(this.y < defender.y){
					towardsY = 1;
				}
				if(this.y > defender.y){
					towardsY = -1
				}

				if(towardsX === this.directionX && towardsX !== 0){}
				else if(towardsY === this.directionY && towardsY !== 0){}
				else if(this.directionX === 0 && towardsX !== 0){
					this.directionY = 0;
					this.directionX = towardsX;
					this.hp--;
				}
				else if(this.directionY === 0 && towardsY !== 0){
					this.directionY = towardsY;
					this.directionX = 0;
					this.hp--;
				}
				this.x = this.x + this.directionX;
				this.y = this.y + this.directionY;
				if(!board.cellHasSolidObject(this.x, this.y)){
					cells[this.x][this.y].object.push(this);
				}
			}
			if(this.x === defender.x && this.y === defender.y){
				console.log("Player " + attacker.name + "'s HoneyBall hit!");
				defender.hp = defender.hp - this.damage * 5;
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


function BN6FlashBomb(x, y, attacker, defender, damage){
	this.id = "BN6FlashBomb";
	this.hp = 1;
	this.image = rock;
	this.solid = true;
	this.countDown = 2;
	this.effecthit = function(hitBy){
		if(hitBy.name === defender.name){
			this.hp = this.hp - hitBy.card.damage;
		}
		if(this.hp < 1){
			cells[this.x][this.y].object = [];
			this.x = -1;
			this.y = -1;
		}
	};
	this.hitByBuster = function(hitBy){
		if(hitBy.name === defender.name){
			this.hp = this.hp - hitBy.busterDamage;
		}
		if(this.hp < 1){
			cells[this.x][this.y].object = [];
			this.x = -1;
			this.y = -1;
		}
	};
	this.passiveTriggered = false;
	this.passive = function(){
		this.countDown--;
		if(this.countDown < 1){
			defender.invis = 0;
			defender.stunned = 1;
			defender.hp = defender.hp - damage;
			cells[this.x][this.y].object = [];
			this.x = -1;
			this.y = -1;
		}
	}
	this.x = x;
	this.y = y;
}


function BN6BlackBombObj(x, y){
	this.id = "BN6BlackBombObj";
	this.damage = 250;
	this.image = rock;
	this.solid = true;
	this.immune = true;
	this.effecthit = function(attacker){
		if(!this.immune){
			var cardHitBy = attacker.card;
			if(cardHitBy.elements.includes(ELEMENTS.fire)){
				for(var i = -1; i < 2; i++){
					for(var j = -1; j < 2; j++){
						if(cells[i+this.x]){
							if(cells[i+this.x][j+this.y]){
								console.log(i+this.x);
								console.log(j+this.y);
								if(cells[i+this.x][j+this.y].player){
									console.log(cells[i+this.x][j+this.y].player);
									cells[i+this.x][j+this.y].player.hp = cells[i+this.x][j+this.y].player.hp - 250;
								}
								if(board.cellHasSolidObject(i, j)){
									cells[i+this.x][j+this.y].object = [];
								}
							}
						}
					}
				}
				cells[this.x][this.y].object = [];
				this.x = -1;
				this.y = -1;
			}
			else if(cardHitBy.elements.includes(ELEMENTS.break)){
				cells[this.x][this.y].object = [];
				this.x = -1;
				this.y = -1;
			}
		}
		this.immune = false;
	};
	this.hitByBuster = function(player){}
	this.passiveTriggered = false;
	this.passive = function(){}
	this.x = x;
	this.y = y;
}