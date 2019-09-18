
function SF3ImpactCannonGA(){
	this.id="SF3ImpactCannonGA";
	this.name="ImpactCannon";
	this.image=SF3xxx_impactcannon;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=240;
	this.boostDamage=0;
	this.hits=1;
	this.priority=2;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3AirSpread3()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["SF3Cannon", "SF3Cannon", "SF3Cannon"];
}

function SF3BigGrenadeGA(){
	this.id="SF3BigGrenadeGA";
	this.name="BigGrenade";
	this.image=SF3xxx_biggrenade;
	this.code=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=60;
	this.boostDamage=0;
	this.hits=3;
	this.priority=3;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3BigGrenade()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3BigGrenade()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3BigGrenade()).effectmiss(attacker, defender);
	};
	this.cardList = ["SF3MiniGrenade", "SF3MiniGrenade", "SF3MiniGrenade"];
}

function SF3GiantAxeGA(){
	this.id="SF3GiantAxeGA";
	this.name="GiantAxe";
	this.image=SF3xxx_giantaxe;
	this.code=["G", "S", "V"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=320;
	this.boostDamage=0;
	this.hits=1;
	this.priority=3;
	this.elements=[ELEMENTS.break, ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new SF3GiantAxe()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["SF3Sword", "SF3WideSword", "SF3LongSword"];
}

function SF3HurricaneDanceGA(){
	this.id="SF3HurricaneDanceGA";
	this.name="HurricaneDance";
	this.image=SF3xxx_hurricanedance;
	this.code=["O"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=60;
	this.boostDamage=0;
	this.hits=4;
	this.priority=1;
	this.elements=[ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		return (new SF3HurricaneDance()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["SF3Sword", "SF3Sword", "SF3JetAttack1"];
}

function SF3PlatinumMeteorGA(){
	this.id="SF3PlatinumMeteorGA";
	this.name="PlatinumMeteor";
	this.image=SF3xxx_platinummeteor;
	this.code=["J", "Y", "Z"];
	this.goo="SF3";
	this.copies=5;
	this.rank="standard";
	this.damage=90;
	this.boostDamage=0;
	this.hits="1-9";
	this.priority=2;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		this.localWhiteMeteor = new SF3WhiteMeteor();
		this.hitbool = this.localWhiteMeteor.hithuh(attacker, defender);
		this.hits = this.localWhiteMeteor.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["SF3MadVulcan1", "SF3Attack10", "SF3WhiteMeteor"];
}

function SF3SpadeMagnesGA(){
	this.id="SF3SpadeMagnesGA";
	this.name="SpadeMagnesGA";
	this.image=SF3xxx_spade_magnes_ga;
	this.code=["M"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=190;
	this.boostDamage=0;
	this.hits="1,2";
	this.priority=0;
	this.elements=[ELEMENTS.elec, ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		this.localMagnes = new SF3SpadeMagnes();
		this.hitbool = this.localMagnes.hithuh(attacker, defender);
		this.hits = this.localMagnes.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["SF3FlashStrike1", "SF3FlashStrike2", "SF3FlashStrike3"];
}

function SF3DiamondIceGA(){
	this.id="SF3DiamondIceGA";
	this.name="DiamondIceGA";
	this.image=SF3xxx_diamond_ice_ga;
	this.code=["I"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=110;
	this.boostDamage=0;
	this.hits=3;
	this.priority=0;
	this.elements=[ELEMENTS.aqua, ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		return (new SF3DiamondIce()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["SF3IceSpin1", "SF3IceSpin2", "SF3IceSpin3"];
}

function SF3ClubStrongGA(){
	this.id="SF3ClubStrongGA";
	this.name="ClubStrongGA";
	this.image=SF3xxx_club_strong_ga;
	this.code=["S"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=60;
	this.boostDamage=0;
	this.hits="5,10";
	this.priority=0;
	this.elements=[ELEMENTS.wood, ELEMENTS.wind];
	this.hithuh= function(attacker, defender){
		this.localClub = new SF3ClubStrong();
		this.hitbool = this.localClub.hithuh(attacker, defender);
		this.hits = this.localClub.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["SF3PollenShot1", "SF3PollenShot2", "SF3PollenShot3"];
}

function SF3QueenVirgoGA(){
	this.id="SF3QueenVirgoGA";
	this.name="QueenVirgoGA";
	this.image=SF3xxx_queen_virgo_ga;
	this.code=["V"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=130;
	this.boostDamage=0;
	this.hits="1-4";
	this.priority=0;
	this.elements=[ELEMENTS.aqua, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.localVirgo = new SF3QueenVirgo();
		this.hitbool = this.localVirgo.hithuh(attacker, defender);
		this.hits = this.localVirgo.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["SF3WideWave1", "SF3WideWave2", "SF3WideWave3"];
}

function SF3JackCorvusGA(){
	this.id="SF3JackCorvusGA";
	this.name="JackCorvusGA";
	this.image=SF3xxx_jack_corvus_ga;
	this.code=["C"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=420;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new SF3JackCorvus()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["SF3KiloBomb1", "SF3KiloBomb2", "SF3KiloBomb3"];
}

function SF3DreadJokerGA(){
	this.id="SF3DreadJokerGA";
	this.name="DreadJokerGA";
	this.image=SF3xxx_dread_joker_ga;
	this.code=["J"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=390;
	this.boostDamage=0;
	this.hits="1,2";
	this.priority=0;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.localJoker = new SF3DreadJoker();
		this.hitbool = this.localJoker.hithuh(attacker, defender);
		this.hits = this.localJoker.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){
		(new SF3DreadJoker()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3DreadJoker()).effectmiss(attacker, defender);
	};
	this.cardList = ["SF3Bushido1", "SF3Bushido2", "SF3Bushido3"];
}

function SF3AcidAceGA(){
	this.id="SF3AcidAceGA";
	this.name="AcidAceGA";
	this.image=SF3xxx_acid_ace_ga;
	this.code=["A"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=235;
	this.boostDamage=0;
	this.hits=2;
	this.priority=0;
	this.elements=[ELEMENTS.break, ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new SF3AcidAce()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3AcidAce()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["SF3MadVulcan1", "SF3MadVulcan2", "SF3MadVulcan3"];
}

function SF3TaurusFireGA(){
	this.id="SF3TaurusFireGA";
	this.name="TaurusFireGA";
	this.image=SF3xxx_taurus_fire_ga;
	this.code=["T"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=300;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.fire];
	this.hithuh= function(attacker, defender){
		return (new SF3TaurusFire()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["SF3MadFire1", "SF3MadFire2", "SF3MadFire3"];
}

function SF3CygnusWingGA(){
	this.id="SF3CygnusWingGA";
	this.name="CygnusWingGA";
	this.image=SF3xxx_cygnus_wing_ga;
	this.code=["N"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=320;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.wind, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3CygnusWing()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["SF3GrandWave1", "SF3GrandWave2", "SF3GrandWave3"];
}

function SF3WolfWoodsGA(){
	this.id="SF3WolfWoodsGA";
	this.name="WolfWoodsGA";
	this.image=SF3xxx_wolf_woods_ga;
	this.code=["W"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=200;
	this.boostDamage=0;
	this.hits="1,2";
	this.priority=0;
	this.elements=[ELEMENTS.wood, ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		this.localWolf = new SF3WolfWoods();
		this.hitbool = this.localWolf.hithuh(attacker, defender);
		this.hits = this.localWolf.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["SF3Shuriken1", "SF3Shuriken2", "SF3Shuriken3"];
}

function SF3DarkPhantomGA(){
	this.id="SF3DarkPhantomGA";
	this.name="DarkPhantomGA";
	this.image=SF3xxx_dark_phantom_ga;
	this.code=["P"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=370;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[];
	this.hithuh= function(attacker, defender){
		return (new SF3DarkPhantom()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["SF3SmileCoin1", "SF3SmileCoin2", "SF3SmileCoin3"];
}

function SF3RogueGA(){
	this.id="SF3RogueGA";
	this.name="RogueGA";
	this.image=SF3xxx_rogue_ga;
	this.code=["R"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=100;
	this.boostDamage=0;
	this.hits=4;
	this.priority=0;
	this.elements=[ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3Rogue()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["SF3MuTechnology1", "SF3MuTechnology2", "SF3MuTechnology3"];
}

function SF3MoonDestroyerGA(){
	this.id="SF3MoonDestroyerGA";
	this.name="MoonDestroyerGA";
	this.image=SF3xxx_moon_destroyer_ga;
	this.code=["M"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=200;
	this.boostDamage=0;
	this.hits=2;
	this.priority=0;
	this.elements=[ELEMENTS.break, ELEMENTS.sword];
	this.hithuh= function(attacker, defender){
		return (new SF3MoonDestroyer()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3MoonDestroyer()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3MoonDestroyer()).effectmiss(attacker, defender);
	};
	this.cardList = ["SF3Buzzsaw1", "SF3Buzzsaw2", "SF3Buzzsaw3"];
}

function SF3LibraScalesGA(){
	this.id="SF3LibraScalesGA";
	this.name="LibraScalesGA";
	this.image=SF3xxx_libra_scales_ga;
	this.code=["L"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=180;
	this.boostDamage=0;
	this.hits=2;
	this.priority=0;
	this.elements=[ELEMENTS.fire, ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new SF3LibraScales()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["SF3MadFire2", "SF3WideWave2", "SF3BigDrop2"];
}

function SF3QueenOphiucaGA(){
	this.id="SF3QueenOphiucaGA";
	this.name="QueenOphiucaGA";
	this.image=SF3xxx_queen_ophiuca_ga;
	this.code=["K", "O", "Q"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=330;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.wood, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		return (new SF3QueenOphiuca()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3QueenOphiuca()).effectmiss(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){
		(new SF3QueenOphiuca()).effectmiss(attacker, defender);
	};
	this.cardList = ["SF3ArachAttack3", "SF3ArachAttack3", "SF3ArachAttack3"];
}

function SF3GeminiSparkGA(){
	this.id="SF3GeminiSparkGA";
	this.name="GeminiSparkGA";
	this.image=SF3xxx_gemini_spark_ga;
	this.code=["F", "G"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=170;
	this.boostDamage=0;
	this.hits="1,2";
	this.priority=0;
	this.elements=[ELEMENTS.elec, ELEMENTS.break, ELEMENTS.break];
	this.hithuh= function(attacker, defender){
		this.localSpark = new SF3GeminiSpark();
		this.hitbool = this.localSpark.hithuh(attacker, defender);
		this.hits = this.localSpark.hits;
		return this.hitbool;
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["SF3DoubleStone", "SF3StunKnuckle", "SF3ElecSlash"];
}

function SF3CancerBubbleGA(){
	this.id="SF3CancerBubbleGA";
	this.name="CancerBubbleGA";
	this.image=SF3xxx_cancer_bubble_ga;
	this.code=["B", "C"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=320;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new SF3CancerBubble()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){
		(new SF3CancerBubble()).effecthit(attacker, defender);
	};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["SF3WideWave1", "SF3WideWave1", "SF3BubbleHook1"];
}

function SF3CrownThunderGA(){
	this.id="SF3CrownThunderGA";
	this.name="CrownThunderGA";
	this.image=SF3xxx_crown_thunder_ga;
	this.code=["D", "H", "U"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=420;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.elec];
	this.hithuh= function(attacker, defender){
		return (new SF3CrownThunder()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["SF3PlasmaGun", "SF3PlasmaGun", "SF3DrillArm1"];
}

function SF3YetiBlizzardGA(){
	this.id="SF3YetiBlizzardGA";
	this.name="YetiBlizzardGA";
	this.image=SF3xxx_yeti_blizzard_ga;
	this.code=["B", "Y", "Z"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=270;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new SF3YetiBlizzard()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["SF3Snowball3", "SF3Snowball3", "SF3DoubleStone"];
}

function SF3PlesioSurfGA(){
	this.id="SF3PlesioSurfGA";
	this.name="PlesioSurfGA";
	this.image=SF3xxx_plesio_surf_ga;
	this.code=["E", "L", "P"];
	this.goo="SF3";
	this.copies=1;
	this.rank="mega";
	this.damage=350;
	this.boostDamage=0;
	this.hits=1;
	this.priority=0;
	this.elements=[ELEMENTS.aqua];
	this.hithuh= function(attacker, defender){
		return (new SF3PlesioSurf()).hithuh(attacker, defender);
	};
	this.effecthit= function(attacker, defender){};
	this.effectmiss= function(attacker, defender){};
	this.cardList = ["SF3SharkAttack1", "SF3SharkAttack1", "SF3SharkAttack1"];
}

var SF3GAS = [new SF3ImpactCannonGA(), new SF3BigGrenadeGA(), new SF3GiantAxeGA(), new SF3HurricaneDanceGA(), new SF3PlatinumMeteorGA(), 
			  new SF3SpadeMagnesGA(), new SF3DiamondIceGA(), new SF3ClubStrongGA(), 
			  new SF3QueenVirgoGA(), new SF3JackCorvusGA(), new SF3DreadJokerGA(), 
			  new SF3AcidAceGA(), new SF3TaurusFireGA(), new SF3CygnusWingGA(), 
			  new SF3WolfWoodsGA(), new SF3DarkPhantomGA(), new SF3RogueGA(), 
			  new SF3MoonDestroyerGA(), new SF3LibraScalesGA(), new SF3QueenOphiucaGA(), 
			  new SF3GeminiSparkGA(), new SF3CancerBubbleGA(), new SF3CrownThunderGA(), 
			  new SF3YetiBlizzardGA(), new SF3PlesioSurfGA()];

