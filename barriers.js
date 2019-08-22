
function BasicBarrier(hp){
	this.id = "BasicBarrier";
	this.hp = hp;
	this.calculateDamageAbsorbed = function(base, one, multi, hits){
		this.damageAbsorbed = 0;
		this.hitcount = 0;
		if(this.hp > 0){
			this.hp = this.hp - base * one * multi;
			this.damageAbsorbed = this.damageAbsorbed + base * one * multi;
			this.hitcount++;
			while(this.hp > 0 && this.hitcount < hits){
				this.hp = this.hp - base*multi;
				this.damageAbsorbed = this.damageAbsorbed + base*multi;
				this.hitcount++;
			}
		}
		return this.damageAbsorbed;
	};
	this.isBarrierDestroyed = function(){
		return this.hp < 1;
	};
}

function AuraBarrier(hp){
	this.id = "AuraBarrier";
	this.hp = hp;
	this.calculateDamageAbsorbed = function(base, one, multi, hits){
		this.damageAbsorbed = 0;
		this.hitcount = 0;
		if(this.hp > 0){
			if(base * one * multi >= this.hp){
				this.hp = 0;
			}
			this.damageAbsorbed = this.damageAbsorbed + base * one * multi;
			this.hitcount++;
			while(this.hp > 0 && this.hitcount < hits){
				if(base*multi >= this.hp){
					this.hp = 0;
				}
				this.damageAbsorbed = this.damageAbsorbed + base*multi;
				this.hitcount++;
			}
		}
		return this.damageAbsorbed;
	};
	this.isBarrierDestroyed = function(){
		return this.hp < 1;
	};
}

function BubbleBarrier(){
	this.id = "BubbleBarrier";
	this.hp = 1;
	this.calculateDamageAbsorbed = function(base, one, multi, hits){
		this.damageAbsorbed = 0;
		if(this.hp > 0){
			this.hp = this.hp - base * one * multi;
			this.damageAbsorbed = this.damageAbsorbed + base * one * multi;
		}
		return this.damageAbsorbed;
	};
	this.isBarrierDestroyed = function(){
		return false;
	};
}

function HitsBarrier(hp){
	this.id = "HitsBarrier";
	this.hp = hp;
	this.calculateDamageAbsorbed = function(base, one, multi, hits){
		this.damageAbsorbed = 0;
		this.hitcount = 0;
		if(this.hp > 0){
			this.hp = this.hp - 1;
			this.damageAbsorbed = this.damageAbsorbed + base * one * multi;
			this.hitcount++;
			while(this.hp > 0 && this.hitcount < hits){
				this.hp = this.hp - 1;
				this.damageAbsorbed = this.damageAbsorbed + base*multi;
				this.hitcount++;
			}
		}
		return this.damageAbsorbed;
	};
	this.isBarrierDestroyed = function(){
		return this.hp < 1;
	};
}

function Barriers(){
	this.resetBubbleBarrier = function(aPlayer){
		if(aPlayer.barrier){
			if(aPlayer.barrier.id === "BubbleBarrier"){
				aPlayer.barrier.hp = 1;
			}
		}
	};
}

