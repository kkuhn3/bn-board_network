function BN6RockCubeObj(x, y){
	this.id = "BN6RockCube";
	this.hp = 200;
	this.image = RockCubeCube;
	this.solid = true;
	this.effecthit = function(attacker){
		var cardHitBy = attacker.card;
		if(cardHitBy.id === "BN6AirShot" || cardHitBy.id === "BN6WindRacket"){
			if(attacker.name === playerOne.name){
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
		if(this.hp < 1){
			cells[this.x][this.y].object = [];
			this.x = -1;
			this.y = -1;
		}
	};
	this.passiveTriggered = false;
	this.passive = function(){};
	this.x = x;
	this.y = y;
}

function BN6ThunderBall(x, y, attacker, defender, hp, damage, color){
	this.attacker = attacker;
	this.id = "BN6Thunder";
	this.hp = hp;
	this.damage = damage;
	this.image = ThunderBall;
	if(color === "blue"){
		this.image = ThunderBall_blue;
	}
	this.solid = false;
	this.effecthit = function(cardHitBy, direction){};
	this.hitByBuster = function(player){};
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
				defender.hp = defender.hp - this.damage;
				(new BN6Thunder()).effecthit(attacker, defender);
			}
		}
	};
	this.x = x;
	this.y = y;
}

function BN6HoneyBall(x, y, attacker, defender, damage){
	this.attacker = attacker;
	this.id = "BN6HoneyBall";
	this.damage = damage;
	this.image = HoneyBall;
	this.solid = false;
	this.hp = 2;
	this.directionX = -1;
	this.directionY = 0;
	if(attacker.name === playerOne.name){
		this.directionX = 1;
	}
	this.effecthit = function(cardHitBy, direction){};
	this.hitByBuster = function(player){};
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
	};
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
	this.attacker = attacker;
	this.id = "BN6FlashBomb";
	this.hp = 1;
	this.image = FlashBang;
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
	};
	this.x = x;
	this.y = y;
}

function BN6BlackBombObj(x, y, damage){
	this.id = "BN6BlackBombObj";
	this.damage = damage;
	this.image = BlackBombObj;
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
								if(cells[i+this.x][j+this.y].player){
									cells[i+this.x][j+this.y].player.hp = cells[i+this.x][j+this.y].player.hp - this.damage;
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
	this.hitByBuster = function(player){};
	this.passiveTriggered = false;
	this.passive = function(){}
	this.x = x;
	this.y = y;
}

function BN6KillerSensor(x, y, attacker, defender, damage){
	this.attacker = attacker;
	this.id = "BN6KillerSensor";
	this.image = killereye;
	this.solid = true;
	this.hp = 1;
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
		this.xDirection = -1;
		if(attacker.name === playerOne.name){
			this.xDirection = 1;
		}
		this.xLoc = this.x + this.xDirection;
		this.yLoc = this.y;
		while(this.xLoc > -1 && this.xLoc < 6 && this.yLoc < 3){
			if(defender.x === this.xLoc && defender.y === this.yLoc){
				this.fire();
			}
			this.xLoc = this.xLoc + this.xDirection;
			this.yLoc = this.yLoc + 1;
		}

		this.xLoc = this.x + this.xDirection;
		this.yLoc = this.y;
		while(this.xLoc > -1 && this.xLoc < 6 && this.yLoc > -1){
			if(defender.x === this.xLoc && defender.y === this.yLoc){
				this.fire();
			}
			this.xLoc = this.xLoc + this.xDirection;
			this.yLoc = this.yLoc - 1;
		}

		if(defender.y === this.y){
			this.fire();
		}
	};
	this.fire = function(){
		defender.hp = defender.hp - damage;
		defender.guard = null;
		defender.invis = 0;
		defender.stunned = 1;
		if(defender.frozen > 0 || defender.bubbled > 0){
			defender.hp = defender.hp - damage;
		}
		cells[this.x][this.y].object = [];
		this.x = -1;
		this.y = -1;
	}
	this.x = x;
	this.y = y;
}

function BN6AirWheel(x, y, attacker, defender, damage, hits){
	this.attacker = attacker;
	this.id = "BN6AirWheel";
	this.image = Airspin;
	this.solid = true;
	this.turns = 2;
	this.effecthit = function(hitBy){
		if(hitBy.name === attacker.name){
			if(hitBy.card.id === BN6Tornado.id){
				this.hits += 8;
			}
		}
	};
	this.hitByBuster = function(hitBy){};
	this.passiveTriggered = false;
	this.passive = function(){
		this.turns--;
		if(this.turns < 1){
			if(defender.invis < 1){
				if(cards.around(this.x, this.y, defender)){
					defender.hp = defender.hp - damage*hits;
				}
			}
			cells[this.x][this.y].object = [];
			this.x = -1;
			this.y = -1;
		}
	};
	this.x = x;
	this.y = y;
}

function BN6WindBox(x, y, attacker, defender, direction){
	this.attacker = attacker;
	this.id = "BN6WindBox";
	this.image = Windbox_blow;
	if(direction === 1){
		this.image = Windbox_suck;
	}
	this.solid = true;
	this.effecthit = function(hitBy){
		if(hitBy.name === defender.name){
			cells[this.x][this.y].object = [];
			this.x = -1;
			this.y = -1;
		}
	};
	this.hitByBuster = function(hitBy){
		if(hitBy.name === defender.name){
			cells[this.x][this.y].object = [];
			this.x = -1;
			this.y = -1;
		}
	};
	this.passiveTriggered = false;
	this.passive = function(){
		defender.barrier = null;
		this.xDirection = direction;
		if(attacker.name === playerOne.name){
			this.xDirection = -1*direction;
		}
		this.tempX = defender.x + this.xDirection;
		if(board.isCellThisPlayerValid(this.tempX, defender.y, defender)){
			this.locReached = false;
			while(!this.locReached){
				if(!board.isCellThisPlayerValid(this.tempX, defender.y, defender)){
					this.tempX = this.tempX - this.xDirection;
					this.locReached = true;
				}
				else{
					this.tempX = this.tempX + this.xDirection;
				}
			}
			board.movePlayer(this.tempX, defender.y, defender);
		}
	};
	this.x = x;
	this.y = y;
}

function BN6LittleBoiler(x, y, damage, attacker){
	this.attacker = attacker;
	this.id = "BN6LittleBoiler";
	this.image = kettle;
	this.solid = true;
	this.turns = 4;
	this.hp = 3;
	this.immune = true;
	this.effecthit = function(hitBy){
		if(!this.immune){
			if(this.hp > 0){
				damage = damage + hitBy.card.damage;
				this.hp--;
			}
		}
		this.immune = false;
	};
	this.hitByBuster = function(hitBy){
		if(this.hp > 0){
			damage = damage + hitBy.busterDamage;
			this.hp--;
		}
	};
	this.passiveTriggered = false;
	this.passive = function(){
		this.turns--;
		if(this.turns < 1){
			if(playerOne.invis < 1){
				if(cards.around(this.x, this.y, playerOne)){
					playerOne.hp = playerOne.hp - damage;
				}
			}
			if(playerTwo.invis < 1){
				if(cards.around(this.x, this.y, playerTwo)){
					playerTwo.hp = playerTwo.hp - damage;
				}
			}
			cells[this.x][this.y].object = [];
			this.x = -1;
			this.y = -1;
		}
	};
	this.x = x;
	this.y = y;
}

function BN6AirRaid(x, y, attacker, defender, hits){
	this.attacker = attacker;
	this.id = "BN6AirRaid";
	this.damage = 10;
	this.image = FighterPlane;
	this.solid = true;
	this.hp = 3;
	this.effecthit = function(hitBy){
		if(hitBy.name === defender.name){
			this.hp = 0;
			this.remove();
		}
	};
	this.hitByBuster = function(hitBy){
		if(hitBy.name === defender.name){
			this.hp = 0;
			this.remove();
		}
	};
	this.passiveTriggered = false;
	this.passive = function(){
		if(defender.invis < 1){
			defender.hp = defender.hp - this.damage*hits/3;
		}
		this.hp--;
		if(this.hp === 0){
			this.remove();
		}
	};
	this.remove = function(){
		cells[this.x][this.y].object = [];
		this.x = -1;
		this.y = -1;
	}
	this.x = x;
	this.y = y;
}

function BN6TimeBomb(x, y, attacker, defender, damage){
	this.attacker = attacker;
	this.id = "BN6TimeBomb";
	this.image = BlackBombObj;
	this.solid = true;
	this.turns = 3;
	this.hp = 20;
	this.immune = true;
	this.effecthit = function(hitBy){
		if(!this.immune){
			hp = hp - hitBy.card.damage;
			if(hp < 1){
				this.remove();
			}
		}
		this.immune = false;
	};
	this.hitByBuster = function(hitBy){
		hp = hp - hitBy.busterDamage;
		if(hp < 1){
			this.remove();
		}
	};
	this.passiveTriggered = false;
	this.passive = function(){
		this.turns--;
		if(this.turns < 1){
			if(defender.invis < 1){
				if(cards.around(this.x, this.y, defender)){
					defender.hp = defender.hp - damage;
				}
			}
			this.remove();
		}
	};
	this.remove = function(){
		cells[this.x][this.y].object = [];
		this.x = -1;
		this.y = -1;
	};
	this.x = x;
	this.y = y;
}

function BN6MineObj(x, y, attacker, defender, damage){
	this.attacker = attacker;
	this.id = "BN6TimeBomb";
	this.image = noObj;
	this.solid = false;
	this.effecthit = function(hitBy){};
	this.hitByBuster = function(hitBy){};
	this.passiveTriggered = false;
	this.passive = function(){
		if(defender.invis < 1){
			if(defender.x === this.x && defender.y === this.y){
				defender.hp = defender.hp - damage;
				this.remove();
			}
		}
	};
	this.remove = function(){
		cells[this.x][this.y].object = [];
		this.x = -1;
		this.y = -1;
	};
	this.x = x;
	this.y = y;
}

function BN6FanfareObj(x, y, attacker){
	this.attacker = attacker;
	this.id = "BN6FanfareObj";
	this.image = Trumpy_gold;
	this.solid = true;
	this.playing = false;
	this.effecthit = function(hitBy){
		if(hitBy.name !== attacker.name){
			this.remove();
		}
	};
	this.hitByBuster = function(hitBy){
		this.effecthit(hitBy);
	};
	this.passiveTriggered = false;
	this.passive = function(){
		if(this.playing){
			attacker.invincible = 1;
		}
		this.playing = !this.playing;
	};
	this.remove = function(){
		cells[this.x][this.y].object = [];
		this.x = -1;
		this.y = -1;
	};
	this.x = x;
	this.y = y;
}

function BN6DiscordObj(x, y, attacker, defender){
	this.attacker = attacker;
	this.id = "BN6DiscordObj";
	this.image = Trumpy_blue;
	this.solid = true;
	this.playing = false;
	this.effecthit = function(hitBy){
		if(hitBy.name !== attacker.name){
			this.remove();
		}
	};
	this.hitByBuster = function(hitBy){
		this.effecthit(hitBy);
	};
	this.passiveTriggered = false;
	this.passive = function(){
		if(this.playing){
			defender.confused = 1;
		}
		this.playing = !this.playing;
	};
	this.remove = function(){
		cells[this.x][this.y].object = [];
		this.x = -1;
		this.y = -1;
	};
	this.x = x;
	this.y = y;
}

function BN6TimpaniObj(x, y, attacker, defender){
	this.attacker = attacker;
	this.id = "BN6TimpaniObj";
	this.image = Trumpy_pink;
	this.solid = true;
	this.playing = false;
	this.effecthit = function(hitBy){
		if(hitBy.name !== attacker.name){
			this.remove();
		}
	};
	this.hitByBuster = function(hitBy){
		this.effecthit(hitBy);
	};
	this.passiveTriggered = false;
	this.passive = function(){
		if(this.playing){
			defender.timpanid = 2;
		}
		this.playing = !this.playing;
	};
	this.remove = function(){
		cells[this.x][this.y].object = [];
		this.x = -1;
		this.y = -1;
	};
	this.x = x;
	this.y = y;
}

function BN6SilenceObj(x, y, attacker, defender){
	this.attacker = attacker;
	this.id = "BN6SilenceObj";
	this.image = Trumpy_silver;
	this.solid = true;
	this.playing = false;
	this.effecthit = function(hitBy){
		if(hitBy.name !== attacker.name){
			this.remove();
		}
	};
	this.hitByBuster = function(hitBy){
		this.effecthit(hitBy);
	};
	this.passiveTriggered = false;
	this.passive = function(){
		if(this.playing){
			defender.blinded = 2;
		}
		this.playing = !this.playing;
	};
	this.remove = function(){
		cells[this.x][this.y].object = [];
		this.x = -1;
		this.y = -1;
	};
	this.x = x;
	this.y = y;
}

function BN6VDollObj(x, y, defender, attacker){
	this.attacker = attacker;
	this.id = "BN6VDollObj";
	this.image = VooDooDollObj;
	this.solid = true;
	this.immune = true;
	this.effecthit = function(hitBy){
		if(!this.immune){
			defender.hp = defender.hp - hitBy.card.damage;
			this.remove();
		}
		this.immune = false;
	};
	this.hitByBuster = function(hitBy){
		this.effecthit(hitBy);
	};
	this.passiveTriggered = false;
	this.passive = function(){};
	this.remove = function(){
		cells[this.x][this.y].object = [];
		this.x = -1;
		this.y = -1;
	};
	this.x = x;
	this.y = y;
}

function BN6GuardianObj(x, y, attacker){
	this.attacker = attacker;
	this.id = "BN6GuardianObj";
	this.image = BN6GuardianIMG;
	this.solid = true;
	this.immune = true;
	this.effecthit = function(hitBy){
		if(!this.immune){
			hitBy.hp = hitBy.hp - 200;
			this.remove();
		}
		this.immune = false;
	};
	this.hitByBuster = function(hitBy){
		this.effecthit(hitBy);
	};
	this.passiveTriggered = false;
	this.passive = function(){};
	this.remove = function(){
		cells[this.x][this.y].object = [];
		this.x = -1;
		this.y = -1;
	};
	this.x = x;
	this.y = y;
}

function BN6AnubisObj(x, y, defender, attacker, damage){
	this.attacker = attacker;
	this.id = "BN6AnubisObj";
	this.image = BN6AnubisIMG;
	this.solid = true;
	this.hp = 100;
	this.effecthit = function(hitBy){
		if(hitBy.name === defender.name){
			this.hp = this.hp - hitBy.card.damage;
		}
		if(this.hp < 1){
			this.remove();
		}
	};
	this.hitByBuster = function(hitBy){
		if(hitBy.name === defender.name){
			this.hp = this.hp - hitBy.busterDamage;
		}
		if(this.hp < 1){
			this.remove();
		}
	};
	this.passiveTriggered = false;
	this.passive = function(){
		defender.hp = defender.hp - damage;
	};
	this.remove = function(){
		cells[this.x][this.y].object = [];
		this.x = -1;
		this.y = -1;
	};
	this.x = x;
	this.y = y;
}

function BN6BodyGuardObj(attacker, defender){
	this.attacker = attacker;
	this.defender = defender;
	this.id = "BN6BodyGuardObj";
	this.image = noObj;
	this.solid = false;
	this.hp = 10;
	this.targetedTurn = true;
	this.effecthit = function(hitBy){};
	this.hitByBuster = function(hitBy){};
	this.passiveTriggered = false;
	this.passive = function(){
		if(this.hp = 0){
			this.index = cells[this.x][this.y].object.indexOf(this);
			cells[this.x][this.y].object.splice(this.index, 1);
		}
		else{
			this.localBN6AntiDamageShuriken = new BN6AntiDamageShuriken();
			this.localBN6AntiDamageShuriken.accurate = this.targetedTurn;
			board.attackWithCard(attacker, defender, this.localBN6AntiDamageShuriken);
			this.hp = this.hp - 1;
			this.targetedTurn = !this.targetedTurn;
		}
	};
	this.x = 0;
	this.y = 0;
}

function SF3SharkAttackObj(x, y, attacker, defender, damage){
	this.attacker = attacker;
	this.defender = defender;
	this.id = "SF3SharkAttackObj";
	this.image = SharkAttack;
	this.solid = false;
	this.effecthit = function(hitBy){};
	this.hitByBuster = function(hitBy){};
	this.passiveTriggered = false;
	this.yDir = -1;
	this.xDir = null;
	this.agroed = false;
	this.passive = function(){
		this.index = cells[this.x][this.y].object.indexOf(this);
		cells[this.x][this.y].object.splice(this.index, 1);
		if(this.agroed){
			this.x = this.x+this.xDir;
			if(board.isCellPlayerValid(this.x, this.y)){
				cells[this.x][this.y].object.push(this);
			}
		}
		else{
			if(board.isCellPlayerValid(this.x, this.y+this.yDir)){
				this.y = this.y + this.yDir;
				cells[this.x][this.y].object.push(this);
			}
			else {
				this.yDir = this.yDir * -1;
				if(board.isCellPlayerValid(this.x, this.y+this.yDir)){
					this.y = this.y + this.yDir;
					cells[this.x][this.y].object.push(this);
				}
				else{
					if(board.isCellPlayerValid(this.x, this.y)){
						cells[this.x][this.y].object.push(this);
					}
				}
			}
			if(this.y === defender.y){
				this.agroed = true;
				this.xDir = -1;
				if(attacker.name === playerOne.name){
					this.xDir = 1;
				}
			}
		}
		if(this.x === defender.x && this.y === defender.y){
			console.log("Player " + attacker.name + "'s SharkAttack hit!");
			defender.hp = defender.hp - this.damage;
		}
	};
	this.x = x;
	this.y = y;
}

function SF3DoubleStoneObj(x, y){
	this.id = "SF3DoubleStone";
	this.hp = 200;
	this.image = DoubleStone;
	this.solid = true;
	this.effecthit = function(attacker){
		var cardHitBy = attacker.card;
		if(cardHitBy.elements.indexOf(ELEMENTS.break)){
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
		if(this.hp < 1){
			cells[this.x][this.y].object = [];
			this.x = -1;
			this.y = -1;
		}
	};
	this.passiveTriggered = false;
	this.passive = function(){};
	this.x = x;
	this.y = y;
}

function SF3MegaCrusherObj(x, y, attacker){
	this.id = "SF3MegaCrusherObj";
	this.hp = 1;
	this.image = MegaCrusherObj;
	this.solid = true;
	this.attacker = attacker;
	this.effecthit = function(player){
		if(player.name !== this.attacker.name){
			cells[this.x][this.y].object = [];
			this.x = -1;
			this.y = -1;
		}
	};
	this.hitByBuster = function(player){
		if(player.name !== this.attacker.name){
			cells[this.x][this.y].object = [];
			this.x = -1;
			this.y = -1;
		}
	};
	this.passiveTriggered = false;
	this.passive = function(){};
	this.x = x;
	this.y = y;
}

function SF3BreakBombObj(x, y, attacker, defender, damage){
	this.attacker = attacker;
	this.id = "SF3BreakBombObj";
	this.image = BlackBombObj;
	this.solid = true;
	this.turns = 3;
	this.hp = 100;
	this.effecthit = function(hitBy){
		hp = hp - hitBy.card.damage;
		if(hp < 1){
			this.remove();
		}
	};
	this.hitByBuster = function(hitBy){
		hp = hp - hitBy.busterDamage;
		if(hp < 1){
			this.remove();
		}
	};
	this.passiveTriggered = false;
	this.passive = function(){
		this.turns--;
		if(this.turns < 1){
			if(defender.invis < 1){
				defender.hp = defender.hp - damage;
			}
			this.remove();
		}
	};
	this.remove = function(){
		cells[this.x][this.y].object = [];
		this.x = -1;
		this.y = -1;
	};
	this.x = x;
	this.y = y;
}
