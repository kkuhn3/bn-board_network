let socket = null;
let startTime = "";
loPings = [];
if(localStorage.getItem('kpow2Pings') != null){
	loPings = JSON.parse(localStorage.getItem('kpow2Pings'));
}
let hasAlleyData = false;
let hasOpponentData = false;
let opponentData = null;

function socketStart() {
	socket.addEventListener('open', function (event) {
		socket.send('{"queue":"bnBoardNetwork"}');
	});

	socket.addEventListener('message', function (event) {
		if(event.data === "pong") {
			let endTime = Date.now();
			let delta = endTime - startTime;
			loPings.push(delta);
			localStorage.setItem("kpow2Pings", JSON.stringify(loPings));
		}
		else {
			if(event.data === "drafted") {
				hasOpponentData = true;
				if(hasAlleyData) {
					startRound();
				}
			}
			else {
				const playerData = JSON.parse(event.data);
				if(playerData.match === 1) {
					board.turnOffbuttons();
				}
				else if(playerData.match === 2) {
					board.switchPlayer();
					board.turnOffbuttons();
				}
				else {
					opponentData = playerData;
					hasOpponentData = true;
					if(hasAlleyData) {
						runTurn();
					}
				}
			}
		}
	});
}

function insertData(playerData, opposingPlayer) {
	opposingPlayer.hp = playerData.hp;
	cells[opposingPlayer.x][opposingPlayer.y].player = null;
	opposingPlayer.lastX = opposingPlayer.x;
	opposingPlayer.lastY = opposingPlayer.y;
	opposingPlayer.x = playerData.x;
	opposingPlayer.y = playerData.y;
	cells[opposingPlayer.x][opposingPlayer.y].player = opposingPlayer;
	opposingPlayer.action = playerData.action;
	if(opposingPlayer.action === ACTIONS.CARD || opposingPlayer.action === ACTIONS.SPECIAL){
		opposingPlayer.card = cards.getCardById(playerData.card.id);
		opposingPlayer.card.boostDamage = playerData.card.boostDamage;
		opposingPlayer.card.stunAdded = playerData.card.stunAdded;
		opposingPlayer.card.uninstallAdded = playerData.card.uninstallAdded;
	}
	opposingPlayer.bushidoCount = playerData.bushidoCount;
}

function queueUp() {
	socket = new WebSocket("ws://127.0.0.1:7979");
	socketStart();
	sel.style.display = "none";
	queue.style.display = "none";
}

function sendTurn() {
	let playerData = {
		hp: player.hp,
		x: player.x,
		y: player.y,
		action: player.action,
		card: null,
		bushidoCount: player.bushidoCount
	};
	if(player.action === ACTIONS.CARD || player.action === ACTIONS.SPECIAL){
		playerData.action = player.action;
		playerData.card = {
			id: player.card.id,
			boostDamage: player.card.boostDamage,
			stunAdded: player.card.stunAdded,
			uninstallAdded: player.card.uninstallAdded
		};
	}
	
	socket.send(JSON.stringify(playerData));
	hasAlleyData = true;
	if(hasOpponentData) {
		runTurn();
	}
	startTime = Date.now();
	socket.send('ping');
}

function sendDraft() {
	socket.send("drafted");
	hasAlleyData = true;
	if(hasOpponentData) {
		startRound();
	}
}

function runTurn() {
	if(player.name === "one"){
		insertData(opponentData, playerTwo);
	}
	else{
		insertData(opponentData, playerOne);
	}
	opponentData = null;
	hasAlleyData = false;
	hasOpponentData = false;
	custom.nextTurn();
	custom.drawHand();
	board.resolveTurn();
	timer.nextTurn();
	timer.draw();
	board.draw();
}

function startRound() {
	hasAlleyData = false;
	hasOpponentData = false;
	customPick.confirm();
	custom.drawHand();
	timer.draw();
}