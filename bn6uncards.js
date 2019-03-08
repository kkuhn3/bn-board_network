var BN6AntiSwordSlashes = {
	id:"BN6AntiSwordSlashes",
	name:"BN6AntiSwordSlashes",
	image:BN6AntiSwordIMG,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	mb:99,
	rank:"standard",
	damage:100,
	hits:3,
	priority:0,
	elements:[ELEMENTS.SWORD],
	hithuh: function(attacker, defender){
		return BN6WideShot.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

var BN6Buster = {
	id:"BN6Buster",
	name:"BN6Buster",
	image:BN6BusterUpIMG,
	code:["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
	mb:99,
	rank:"standard",
	damage:10,
	hits:1,
	priority:2,
	elements:[],
	hithuh: function(attacker, defender){
		this.damage = attacker.busterDamage;
		return BN6Cannon.hithuh(attacker, defender);
	},
	effecthit: function(attacker, defender){},
	effectmiss: function(attacker, defender){}
}

BN6UNCARDS = [BN6AntiSwordSlashes];