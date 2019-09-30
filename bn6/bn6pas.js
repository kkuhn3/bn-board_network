
function BN6GigaCan1(){
	this.id="BN6GigaCan1";
	this.name="GigaCan1";
	this.image=BN6CannonIMG;
	this.code=["A", "B", "C"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=300;
	this.boostDamage=0;
	this.hits=1;
	this.priority=7;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Spreader1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["BN6Cannon", "BN6Cannon", "BN6Cannon"];
}

function BN6GigaCan2(){
	this.id="BN6GigaCan2";
	this.name="GigaCan2";
	this.image=BN6HiCannonIMG;
	this.code=["L", "M", "N"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=400;
	this.boostDamage=0;
	this.hits=1;
	this.priority=7;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Spreader1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["BN6HiCannon", "BN6HiCannon", "BN6HiCannon"];
}

function BN6GigaCan3(){
	this.id="BN6GigaCan3";
	this.name="GigaCan3";
	this.image=BN6MegaCannonIMG;
	this.code=["R", "S", "T"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=400;
	this.boostDamage=0;
	this.hits=1;
	this.priority=7;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Spreader1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["BN6MegaCannon", "BN6MegaCannon", "BN6MegaCannon"];
}

function BN6WideBurner1(){
	this.id="BN6WideBurner1";
	this.name="WideBurner1";
	this.image=BN6HellBurner1IMG;
	this.code=["F", "G", "H"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=300;
	this.boostDamage=0;
	this.hits=1;
	this.priority=6;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === playerOne.name){
			this.xDirection = 1;
		}
		if((new BN6Sword()).hithuh(attacker, defender)){
			return true;
		}
		this.hitbool = false;
		attacker.x = attacker.x + this.xDirection;
		this.hitbool = (new BN6VarSword()).hithuh(attacker, defender);
		attacker.x = attacker.x - this.xDirection;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["BN6HellBurner1", "BN6HellBurner1", "BN6HellBurner1"];
}

function BN6WideBurner2(){
	this.id="BN6WideBurner2";
	this.name="WideBurner2";
	this.image=BN6HellBurner2IMG;
	this.code=["S", "T", "U"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=350;
	this.boostDamage=0;
	this.hits=1;
	this.priority=6;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new BN6WideBurner1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["BN6HellBurner2", "BN6HellBurner2", "BN6HellBurner2"];
}

function BN6WideBurner3(){
	this.id="BN6WideBurner3";
	this.name="WideBurner3";
	this.image=BN6HellBurner3IMG;
	this.code=["C", "D", "E"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=400;
	this.boostDamage=0;
	this.hits=1;
	this.priority=6;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new BN6WideBurner1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["BN6HellBurner3", "BN6HellBurner3", "BN6HellBurner3"];
}

function BN6FlameHook1(){
	this.id="BN6FlameHook1";
	this.name="FlameHook1";
	this.image=BN6FirePunch1IMG;
	this.code=["D", "E", "F"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=300;
	this.boostDamage=0;
	this.hits=1;
	this.priority=6;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === playerOne.name){
			this.xDirection = 1;
		}
		if((new BN6WideSword()).hithuh(attacker, defender)){
			return true;
		}
		this.hitbool = false;
		attacker.x = attacker.x + this.xDirection;
		this.hitbool = (new BN6VarSword()).hithuh(attacker, defender);
		attacker.x = attacker.x - this.xDirection;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["BN6FirePunch1", "BN6FirePunch1", "BN6FirePunch1"];
}

function BN6FlameHook2(){
	this.id="BN6FlameHook2";
	this.name="FlameHook2";
	this.image=BN6FirePunch2IMG;
	this.code=["R", "S", "T"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=350;
	this.boostDamage=0;
	this.hits=1;
	this.priority=6;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new BN6FlameHook1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["BN6FirePunch2", "BN6FirePunch2", "BN6FirePunch2"];
}

function BN6FlameHook3(){
	this.id="BN6FlameHook3";
	this.name="FlameHook3";
	this.image=BN6FirePunch3IMG;
	this.code=["A", "B", "C"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=400;
	this.boostDamage=0;
	this.hits=1;
	this.priority=6;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new BN6FlameHook1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["BN6FirePunch3", "BN6FirePunch3", "BN6FirePunch3"];
}

function BN6PowerWave1(){
	this.id="BN6PowerWave1";
	this.name="PowerWave1";
	this.image=BN6WaveArm1IMG;
	this.code=["E", "F", "G"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=400;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		if(defender.invis > 1){
			this.xDirection = -1;
			if(attacker.name === playerOne.name){
				this.xDirection = 1;
			}
			if((new BN6PowerWave1()).oneWave(attacker.y-1, attacker.x+this.xDirection, this.xDirection, defender)){
				return true;
			}
			if((new BN6PowerWave1()).oneWave(attacker.y, attacker.x+this.xDirection, this.xDirection, defender)){
				return true;
			}
			if((new BN6PowerWave1()).oneWave(attacker.y+1, attacker.x+this.xDirection, this.xDirection, defender)){
				return true;
			}
		}
		return false;
	};
	this.oneWave = function(row, xStart, xDirection, defender){
		for(var i = 0; i < 6; i++){
			this.tempX = xStart + i*xDirection;
			if(board.isHole(this.tempX, row)){
				return false;
			}
			if(this.tempX === defender.x && this.tempY === defender.y){
				return true;
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["BN6WaveArm1", "BN6WaveArm1", "BN6WaveArm1"];
}

function BN6PowerWave2(){
	this.id="BN6PowerWave2";
	this.name="PowerWave2";
	this.image=BN6WaveArm2IMG;
	this.code=["L", "M", "N"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=500;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6PowerWave1).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["BN6WaveArm2", "BN6WaveArm2", "BN6WaveArm2"];
}

function BN6PowerWave3(){
	this.id="BN6PowerWave3";
	this.name="PowerWave3";
	this.image=BN6WaveArm3IMG;
	this.code=["R", "S", "T"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=600;
	this.boostDamage=0;
	this.hits=1;
	this.priority=9;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6PowerWave1).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["BN6WaveArm3", "BN6WaveArm3", "BN6WaveArm3"];
}

function BN6CornPartyA(){
	this.id="BN6CornPartyA";
	this.name="CornParty";
	this.image=BN6CornShot1IMG;
	this.code=["J", "K", "L"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=100;
	this.boostDamage=0;
	this.hits=6;
	this.priority=9;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6FlameHook1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new BN6CornPartyA).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		var fakeDefender = {
			x: -1,
			y: -1,
			invis: 0,
			guard: null
		};
		for(var x=0;x<cells.length;x++){
			for(var y=0;y<cells[x].length;y++){
				fakeDefender.x = x;
				fakeDefender.y = y;
				if((new BN6CornPartyA()).hithuh(attacker, fakeDefender)){
					board.convertPanel(x, y, PANELTYPE.GRASS);
				}
			}
		}
	};
	this.cardList = ["BN6CornShot1", "BN6CornShot1", "BN6CornShot1"];
}

function BN6CornPartyB(){
	this.id="BN6CornPartyB";
	this.name="CornParty";
	this.image=BN6CornShot1IMG;
	this.code=["C", "D", "E"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=100;
	this.boostDamage=0;
	this.hits=6;
	this.priority=9;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6FlameHook1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new BN6CornPartyA).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new BN6CornPartyA).effectmiss(attacker, defender);
	};
	this.cardList = ["BN6CornShot2", "BN6CornShot2", "BN6CornShot2"];
}

function BN6CornPartyC(){
	this.id="BN6CornPartyC";
	this.name="CornParty";
	this.image=BN6CornShot1IMG;
	this.code=["P", "Q", "R"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=100;
	this.boostDamage=0;
	this.hits=6;
	this.priority=9;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6FlameHook1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new BN6CornPartyA).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new BN6CornPartyA).effectmiss(attacker, defender);
	};
	this.cardList = ["BN6CornShot3", "BN6CornShot3", "BN6CornShot3"];
}

function BN6ParallelShellA(){
	this.id="BN6ParallelShellA";
	this.name="ParallelShell";
	this.image=BN6IronShell1IMG;
	this.code=["J", "K", "L"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=350;
	this.boostDamage=0;
	this.hits=2;
	this.priority=8;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			this.xStart = 5;
			this.cantHitRow = 0;
			this.xDirection = -1;
			if(attacker.name === playerOne.name){
				this.xStart = 0;
				this.xDirection = 1;
				this.cantHitRow = 5;
			}
			if((new BN6ParallelShellA()).oneShell(attacker.y-1, this.xStart, this.xDirection, this.cantHitRow, defender)){
				return true;
			}
			if((new BN6ParallelShellA()).oneShell(attacker.y, this.xStart, this.xDirection, this.cantHitRow, defender)){
				return true;
			}
			if((new BN6ParallelShellA()).oneShell(attacker.y+1, this.xStart, this.xDirection, this.cantHitRow, defender)){
				return true;
			}
		}
		return false;
	};
	this.oneShell = function(row, xStart, xDirection, cantHitRow, defender){
		for(var i = 0; i < 6; i++){
			this.tempX = xStart + i*xDirection;
			if(this.tempX === cantHitRow){
				return false;
			}
			if(board.isHole(this.tempX, row)){
				return false;
			}
			if(this.tempX === defender.x && this.tempY === defender.y){
				return true;
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["BN6IronShell1", "BN6IronShell1", "BN6IronShell1"];
}

function BN6ParallelShellB(){
	this.id="BN6ParallelShellB";
	this.name="ParallelShell";
	this.image=BN6IronShell1IMG;
	this.code=["C", "D", "E"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=350;
	this.boostDamage=0;
	this.hits=2;
	this.priority=8;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new BN6ParallelShellA()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["BN6IronShell2", "BN6IronShell2", "BN6IronShell2"];
}

function BN6ParallelShellC(){
	this.id="BN6ParallelShellC";
	this.name="ParallelShell";
	this.image=BN6IronShell1IMG;
	this.code=["L", "M", "N"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=350;
	this.boostDamage=0;
	this.hits=2;
	this.priority82;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new BN6ParallelShellA()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["BN6IronShell3", "BN6IronShell3", "BN6IronShell3"];
}

function BN6StreamHeadA(){
	this.id="BN6StreamHeadA";
	this.name="StreamHead";
	this.image=BN6AuraHead1IMG;
	this.code=["B", "C", "D"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=150;
	this.boostDamage=0;
	this.hits=5;
	this.priority=8;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			if(attacker.y === defender.y){
				if(attacker.name === playerOne.name){
					return attacker.x < defender.x;
				}
				else{
					return attacker.x > defender.x;
				}
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["BN6AuraHead1", "BN6AuraHead1", "BN6AuraHead1"];
}

function BN6StreamHeadB(){
	this.id="BN6StreamHeadB";
	this.name="StreamHead";
	this.image=BN6AuraHead1IMG;
	this.code=["D", "E", "F"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=150;
	this.boostDamage=0;
	this.hits=5;
	this.priority=8;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new BN6StreamHeadA()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["BN6AuraHead2", "BN6AuraHead2", "BN6AuraHead2"];
}

function BN6StreamHeadC(){
	this.id="BN6StreamHeadC";
	this.name="StreamHead";
	this.image=BN6AuraHead1IMG;
	this.code=["F", "G", "H"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=150;
	this.boostDamage=0;
	this.hits=5;
	this.priority=8;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new BN6StreamHeadA()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["BN6AuraHead3", "BN6AuraHead3", "BN6AuraHead3"];
}

function BN6HyperBurstA(){
	this.id="BN6HyperBurstA";
	this.name="HyperBurst";
	this.image=BN6Spreader1IMG;
	this.code=["L", "M", "N"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=60;
	this.boostDamage=0;
	this.hits=10;
	this.priority=6;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Spreader1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["BN6Spreader1", "BN6Spreader1", "BN6Spreader1"];
}

function BN6HyperBurstB(){
	this.id="BN6HyperBurstB";
	this.name="HyperBurst";
	this.image=BN6Spreader1IMG;
	this.code=["A", "B", "C"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=60;
	this.boostDamage=0;
	this.hits=10;
	this.priority=6;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Spreader1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["BN6Spreader2", "BN6Spreader2", "BN6Spreader2"];
}

function BN6HyperBurstC(){
	this.id="BN6HyperBurstC";
	this.name="HyperBurst";
	this.image=BN6Spreader1IMG;
	this.code=["Q", "R", "S"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=60;
	this.boostDamage=0;
	this.hits=10;
	this.priority=6;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6Spreader1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["BN6Spreader3", "BN6Spreader3", "BN6Spreader3"];
}

function BN6GreatYo(){
	this.id="BN6GreatYo";
	this.name="GreatYo";
	this.image=BN6YoyoIMG;
	this.code=["D", "E", "F"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		this.localBN6Yoyo = new BN6Yoyo();
		if(this.localBN6Yoyo.hithuh(attacker, defender)){
			this.hits = this.localBN6Yoyo.hits;
			return true;
		}
		attacker.y = attacker.y + 1;
		if(this.localBN6Yoyo.hithuh(attacker, defender)){
			this.hits = this.localBN6Yoyo.hits;
			attacker.y = attacker.y - 1;
			return true;
		}
		attacker.y = attacker.y - 2;
		if(this.localBN6Yoyo.hithuh(attacker, defender)){
			this.hits = this.localBN6Yoyo.hits;
			attacker.y = attackery.y + 1;
			return true;
		}
		attacker.y = attacker.y + 1;
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["BN6Yoyo", "BN6Yoyo", "BN6Yoyo"];
}

function BN6PitHoky(){
	this.id="BN6PitHoky";
	this.name="PitHoky";
	this.image=BN6AirHockIMG;
	this.code=["L", "M", "N"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=100;
	this.boostDamage=0;
	this.hits=1;
	this.priority=8;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		this.localBN6AirHock = new BN6AirHock();
		if(this.localBN6AirHock.hithuh(attacker, defender)){
			this.hits = this.localBN6AirHock.hits;
			return true;
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["BN6AirHock", "BN6AirHock", "BN6AirHock"];
}

function BN6SuperWide(){
	this.id="BN6SuperWide";
	this.name="SuperWide";
	this.image=BN6WideShotIMG;
	this.code=["P", "Q", "R"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=150;
	this.boostDamage=0;
	this.hits=3;
	this.priority=8;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		if(defender.invis < 1){
			if(attacker.name === playerTwo.name){
				if(attacker.x > defender.x){
					return Math.abs(attacker.y - defender.y) < 2;
				}
			}
			else{
				if(attacker.x < defender.x){
					return Math.abs(attacker.y - defender.y) < 2;
				}
			}
		}
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["BN6WideShot", "BN6WideShot", "BN6WideShot"];
}

function BN6GigaCountBombA(){
	this.id="BN6GigaCountBombA";
	this.name="GigaCountBomb";
	this.image=BN6TimeBomb1IMG;
	this.code=["F", "G", "H"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=700;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -1;
		this.targetSide = SIDE.LEFT;
		if(attacker.name === "one"){
			this.xDirection = 1;
			this.targetSide = SIDE.RIGHT;
		}
		this.bombPlaced = false;
		this.tempX = attacker.x + this.xDirection;
		while(!this.bombPlaced){
			if(cells[this.tempX]){
				if(cells[this.tempX][attacker.y] && cells[this.tempX][attacker.y].side === this.targetSide){
					if(board.isCellPlayerValid(this.tempX, attacker.y)){
						cells[this.tempX][attacker.y].object = [new BN6TimeBomb(this.tempX, attacker.y, attacker, defender, this.damage + this.boostDamage)];
					}
				}
				this.tempX++;
			}
			this.bombPlaced = true;
		}
	};
	this.cardList = ["BN6TimeBomb1", "BN6TimeBomb1", "BN6TimeBomb1"];
}

function BN6GigaCountBombB(){
	this.id="BN6GigaCountBombB";
	this.name="GigaCountBomb";
	this.image=BN6TimeBomb1IMG;
	this.code=["C", "D", "E"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=700;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -1;
		this.targetSide = SIDE.LEFT;
		if(attacker.name === "one"){
			this.xDirection = 1;
			this.targetSide = SIDE.RIGHT;
		}
		this.bombPlaced = false;
		this.tempX = attacker.x + this.xDirection;
		while(!this.bombPlaced){
			if(cells[this.tempX]){
				if(cells[this.tempX][attacker.y] && cells[this.tempX][attacker.y].side === this.targetSide){
					if(board.isCellPlayerValid(this.tempX, attacker.y)){
						cells[this.tempX][attacker.y].object = [new BN6TimeBomb(this.tempX, attacker.y, attacker, defender, this.damage + this.boostDamage)];
					}
				}
				this.tempX++;
			}
			this.bombPlaced = true;
		}
	};
	this.cardList = ["BN6TimeBomb2", "BN6TimeBomb2", "BN6TimeBomb2"];
}

function BN6GigaCountBombC(){
	this.id="BN6GigaCountBombC";
	this.name="GigaCountBomb";
	this.image=BN6TimeBomb1IMG;
	this.code=["L", "M", "N"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=700;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -1;
		this.targetSide = SIDE.LEFT;
		if(attacker.name === "one"){
			this.xDirection = 1;
			this.targetSide = SIDE.RIGHT;
		}
		this.bombPlaced = false;
		this.tempX = attacker.x + this.xDirection;
		while(!this.bombPlaced){
			if(cells[this.tempX]){
				if(cells[this.tempX][attacker.y] && cells[this.tempX][attacker.y].side === this.targetSide){
					if(board.isCellPlayerValid(this.tempX, attacker.y)){
						cells[this.tempX][attacker.y].object = [new BN6TimeBomb(this.tempX, attacker.y, attacker, defender, this.damage + this.boostDamage)];
					}
				}
				this.tempX++;
			}
			this.bombPlaced = true;
		}
	};
	this.cardList = ["BN6TimeBomb3", "BN6TimeBomb3", "BN6TimeBomb3"];
}

function BN6DestroyPulse(){
	this.id="BN6DestroyPulse";
	this.name="DestroyPulse";
	this.image=BN6ElecPulse1IMG;
	this.code=["J"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=400;
	this.boostDamage=0;
	this.hits=1;
	this.priority=4;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new BN6ElecPulse1()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		if(defender.guard === null){
			defender.stunned = 2;
			defender.blinded = 2;
			defender.bugs.push(new HPBug(50));
		}
	};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["BN6ElecPulse1", "BN6ElecPulse2", "BN6ElecPulse3"];
}

function BN6LifeSwordA(){
	this.id="BN6LifeSwordA";
	this.name="LifeSword";
	this.image=BN6SwordIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=400;
	this.boostDamage=0;
	this.hits=1;
	this.priority=6;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new BN6VarSword()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["BN6Sword", "BN6WideSword", "BN6LongSword"];
}

function BN6LifeSwordB(){
	this.id="BN6LifeSwordB";
	this.name="LifeSword";
	this.image=BN6SwordIMG;
	this.code=["B"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=400;
	this.boostDamage=0;
	this.hits=1;
	this.priority=6;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new BN6VarSword()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["BN6Sword", "BN6WideBlade", "BN6LongBlade"];
}

function BN6PoisonPharoh(){
	this.id="BN6PoisonPharoh";
	this.name="PoisonPharoh";
	this.image=BN6AnubisIMG;
	this.code=["B"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=400;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		this.xDirection = -1;
		if(attacker.name === "one"){
			this.xDirection = 1;
		}
		if(board.isCellPlayerValid(attacker.x + this.xDirection, attacker.y)){
			cells[attacker.x + this.xDirection][attacker.y].object = [new BN6AnubisObj(attacker.x + this.xDirection, attacker.y, defender, attacker, 100)];
		}
	};
	this.cardList = ["BN6PoisonSeed", "BN6PoisonSeed", "BN6Anubis"];
}

function BN6BodyGuard(){
	this.id="BN6BodyGuard";
	this.name="BodyGuard";
	this.image=BN6AntiDmgIMG;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=100;
	this.boostDamage=0;
	this.hits=10;
	this.priority=1;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new BN6Recover10()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){
		attacker.trap = new BN6BodyGuardTrap();
	};
	this.cardList = ["BN6AntiNavi", "BN6AntiSword", "BN6AntiDmg"];
}

function BN6DoubleHero(){
	this.id="BN6DoubleHero";
	this.name="DoubleHero";
	this.image=BN6BluesSPIMG;
	this.code=["B"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=60;
	this.boostDamage=0;
	this.hits=10;
	this.priority=0;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new BN6MeteoKnucle()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["BN6WideBlade", "BN6LongBlade", "BN6BluesSP"];
}

function BN6DarkMessiahA(){
	this.id="BN6DarkMessiahA";
	this.name="DarkMessiah";
	this.image=BN6ForteIMG;
	this.code=["F"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=300;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		this.hits = 0;
		if((new BN6Heatman()).hithuh(attacker, defender)){
			this.elements=[ELEMENTS.fire];
			this.hits++;
		}
		if((new BN6VarSword()).hithuh(attacker, defender)){
			this.elements.push(ELEMENTS.sword);
			this.hits++;
		}
		if(this.hits > 0){
			return true;
		}
		this.hits = 1;
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["BN6VDoll", "BN6VDoll", "BN6Forte"];
}

function BN6DarkMessiahB(){
	this.id="BN6DarkMessiahB";
	this.name="DarkMessiah";
	this.image=BN6ForteAnotherIMG;
	this.code=["F"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=300;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		this.localBN6DarkMessiahA = new BN6DarkMessiahA();
		this.hitbool = this.localBN6DarkMessiahA.hithuh(attacker, defender);
		this.hits = this.localBN6DarkMessiahA.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["BN6VDoll", "BN6VDoll", "BN6ForteAnother"];
}

function BN6MasterCross(){
	this.id="BN6MasterCross";
	this.name="MasterCross";
	this.image=BN6FirePunch3IMG;
	this.code=["A"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=100;
	this.boostDamage=0;
	this.hits=6;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new BN6MeteoKnucle()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["BN6FirePunch3", "BN6AquaNeedle3", "BN6ElecPulse3", "BN6RiskyHoney3"];
}

function BN6SunAndMoon(){
	this.id="BN6SunAndMoon";
	this.name="SunAndMoon";
	this.image=BN6MeteorsIMG;
	this.code=["R"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=200;
	this.boostDamage=0;
	this.addDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		this.addDamage = null;
		if((new BN6MiniBomb()).hithuh(attacker, defender)){
			this.addDamage = 400;
		}
		return ((new BN6BigBomb()).hithuh(attacker, defender));
	};
	this.effecthit= function(attacker, defender){
		(new BN6SunAndMoon()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		var fakeDefender = {
			x: -1,
			y: -1,
			invis: 0,
			guard: null
		};
		for(var x=0; x < cells.length; x++){
			for(var y=0; y < cells[x].length; y++){
				fakeDefender.x = x;
				fakeDefender.y = y;
				if((new BN6SunAndMoon()).hithuh(attacker, fakeDefender)){
					board.convertPanel(x, y, PANELTYPE.CRACKED);
				}
			}
		}
	};
	this.cardList = ["BN6Meteors", "BN6Attack30", "BN6Uninstall"];
}

function BN6TwinLeadersA(){
	this.id="BN6TwinLeadersA";
	this.name="TwinLeaders";
	this.image=BN6ColonelSPIMG;
	this.code=["B"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=200;
	this.boostDamage=0;
	this.addDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		this.hits = 0;
		if((new BN6Blues()).hithuh(attacker, defender)){
			this.hits++;
		}
		if((new BN6CrossSlash()).hithuh(attacker, defender)){
			this.hits++
		}
		if(this.hits > 0){
			return true;
		}
		this.hits = 1;
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["BN6BluesSP", "BN6AntiNavi", "BN6Colonel"];
}

function BN6TwinLeadersB(){
	this.id="BN6TwinLeadersB";
	this.name="TwinLeaders";
	this.image=BN6ColonelSPIMG;
	this.code=["C"];
	this.goo="BN6";
	this.copies=1;
	this.rank="giga";
	this.damage=200;
	this.boostDamage=0;
	this.addDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		this.hits = 0;
		if((new BN6Blues()).hithuh(attacker, defender)){
			this.hits++;
		}
		if((new BN6CrossSlash()).hithuh(attacker, defender)){
			this.hits++
		}
		if(this.hits > 0){
			return true;
		}
		this.hits = 1;
		return false;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["BN6ColonelSP", "BN6AntiNavi", "BN6Blues"];
}

var BN6PAS = [new BN6GigaCan1(), new BN6GigaCan2(), new BN6GigaCan3(), 
			  new BN6WideBurner1(), new BN6WideBurner2(), new BN6WideBurner3(), 
			  new BN6FlameHook1(), new BN6FlameHook2(), new BN6FlameHook3(), 
			  new BN6PowerWave1(), new BN6PowerWave2(), new BN6PowerWave3(), 
			  new BN6CornPartyA(), new BN6CornPartyB(), new BN6CornPartyC(), 
			  new BN6ParallelShellA(), new BN6ParallelShellB(), new BN6ParallelShellC(), 
			  new BN6StreamHeadA(), new BN6StreamHeadB(), new BN6StreamHeadC(), 
			  new BN6HyperBurstA(), new BN6HyperBurstB(), new BN6HyperBurstC(), 
			  new BN6GreatYo(), new BN6PitHoky(), new BN6SuperWide(), 
			  new BN6GigaCountBombA(), new BN6GigaCountBombB(), new BN6GigaCountBombC(), 
			  new BN6DestroyPulse(), new BN6LifeSwordA(), new BN6LifeSwordB(), 
			  new BN6PoisonPharoh(), new BN6BodyGuard(), new BN6DoubleHero(), 
			  new BN6DarkMessiahA(), new BN6DarkMessiahB(), new BN6MasterCross(), 
			  new BN6SunAndMoon(), new BN6TwinLeadersA(), new BN6TwinLeadersB()];

