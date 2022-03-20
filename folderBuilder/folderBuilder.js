let SELECTEDCARDS = [];
let SORTEDCARDS = [];
let fbFOLDERS = [];
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "*"];
let codeFilter = [];

function init() {
	SORTEDCARDS = BUILDABLECARDS.slice();
}

function getIndex(aCardId) {
	for(let i = 0; i < SORTEDCARDS.length; i++){
		if(SORTEDCARDS[i].id === aCardId){
			return i;
		}
	}
}

function swapCode(codeToSwap) {
	if(codeFilter.includes(codeToSwap)){
		const ind = codeFilter.indexOf(codeToSwap);
		codeFilter.splice(ind, 1);
	}
	else{
		codeFilter.push(codeToSwap);
	}
	buildTable();
}

function isOnCode(cardToCheck) {
	if(codeFilter.length < 1){
		return true;
	}
	if(codeFilter.includes("*") && cardToCheck.code.length === 26){
		return true;
	}
	if(cardToCheck.code.length === 26){
		return false;
	}
	for(var i = 0; i < cardToCheck.code.length; i++){
		if(codeFilter.includes(cardToCheck.code[i])){
			return true;
		}
	}
	return false;
}

function createListClickHandler(aCard) {
	return function() { 
		const currentCount = SELECTEDCARDS.filter(function(savedCard){
			return savedCard.id === aCard.id;
		}).length;

		if(currentCount < aCard.copies){
			if(SELECTEDCARDS.length < 30){
				if(aCard.rank !== "mega" || this.countMega() < 5){
					if(aCard.rank !== "giga" || this.countGiga() < 1){
						SELECTEDCARDS.push(aCard);
						buildFolderTable();
					}
				}
			}
		}
	};
}

function createFolderClickHandler(cardId) {
	return function() { 
		const ind = SELECTEDCARDS.lastIndexOf(cardId);
		SELECTEDCARDS.splice(ind, 1);
		buildFolderTable();
	};
}

function mostCommonCodes() {
	let codeCount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	for(let i = 0; i < SELECTEDCARDS.length; i++){
		if(SELECTEDCARDS[i].code.length !== 26){
			for(let j = 0; j < SELECTEDCARDS[i].code.length; j++){
				const ind = alphabet.indexOf(SELECTEDCARDS[i].code[j]);
				codeCount[ind]++;
			}
		}
	}
	let highestcount = codeCount[0];
	let highestSet = ["A"];
	for(let i = 1; i < codeCount.length; i++){
		if(codeCount[i] > highestcount){
			highestcount = codeCount[i];
			highestSet = [alphabet[i]];
		}
		else if(codeCount[i] === highestcount){
			highestSet.push(alphabet[i]);
		}
	}
	if(highestSet.length === 26){
		highestSet = ["*"];
	}
	return highestSet;
}

function sortSelectedCards() {
	SELECTEDCARDS.sort((a,b)=>{
		if(getIndex(a.id) > getIndex(b.id)){
			return 1;
		}
		else{
			return -1;
		}
	});
}

function addUserFolders() {
	const keys = Object.keys(localStorage);
	for(let i = 0; i < keys.length; i++){
		if(keys[i].includes("folderNamePrefix")){
			let option = document.createElement("option");
			const folderName = keys[i].substring(16);
			option.text = folderName;
			option.value = folderName;
			sel.add(option, 1);

			let newFolder = {
				id: folderName,
				name: folderName,
				contents: []
			};
			const folderContents = JSON.parse(localStorage.getItem(keys[i]));
			for(var j = 0; j < folderContents.length; j++){
				const aCard = cards.getCardById(folderContents[j].id);
				newFolder.contents.push(aCard);
			}
			fbFOLDERS.push(newFolder);
		}
	}
}

function importFolder(newDeckID) {
	let importedFolder = null;
	for(let i = 0; i < fbFOLDERS.length; i++){
		if(fbFOLDERS[i].id === newDeckID){
			importedFolder = fbFOLDERS[i];
		}
	}
	if(importedFolder){
		SELECTEDCARDS = importedFolder.contents.slice();
		folderNameInput.value = importedFolder.id;
		buildFolderTable();
	}
}

function buildFolderTable() {
	folderTable.innerHTML =	`<tr> 
								<th>Card</th> 
								<th>Code</th> 
								<th>Copies</th> 
							</tr>`;

	let alreadyIncludedCards = [];
	sortSelectedCards();
	for(let j = 0; j < SELECTEDCARDS.length; j++){
		if(alreadyIncludedCards.includes(SELECTEDCARDS[j].id)){
			const ind = alreadyIncludedCards.indexOf(SELECTEDCARDS[j].id) + 1;
			let count = parseInt(folderTable.rows[ind].cells[2].innerHTML);
			count = count + 1;
			folderTable.rows[ind].cells[2].innerHTML = count;
		}
		else{
			let row = folderTable.insertRow(-1);
			let cell0 = row.insertCell(0)
			let cell1 = row.insertCell(1);
			let cell2 = row.insertCell(2);
			cell2.innerHTML = 1;
			cell0.innerHTML = SELECTEDCARDS[j].name;
			if(SELECTEDCARDS[j].code.length === 26){
				cell1.innerHTML = "*";
			}
			else{
				cell1.innerHTML = SELECTEDCARDS[j].code;
			}
			
			row.onclick = createFolderClickHandler(SELECTEDCARDS[j]);
			if(SELECTEDCARDS[j].rank === "standard"){
				cell0.style.backgroundColor = "Yellow";
			}
			if(SELECTEDCARDS[j].rank === "mega"){
				cell0.style.backgroundColor = "LightBlue";
			}
			if(SELECTEDCARDS[j].rank === "giga"){
				cell0.style.backgroundColor = "Salmon";
			}
			
			alreadyIncludedCards.push(SELECTEDCARDS[j].id);
		}
	}

	let rowL = folderTable.insertRow(-1);
	let cell0L = rowL.insertCell(0);
	let cell1L = rowL.insertCell(1);
	let cell2L = rowL.insertCell(2);
	cell2L.innerHTML = "<b>" + SELECTEDCARDS.length + "</b>";
	cell0L.innerHTML = "<b>Totals</b>"
	cell1L.innerHTML = "<b>" + mostCommonCodes() + "</b>";
	rowL.style.backgroundColor = "#f2f2f2";
}

function buildTable() {
	selectionTable.innerHTML = 	`<thead> 
							<tr>
							<th id="headerImage" >Image</th> 
							<th id="headerCode" >Code</th>
							<th id="headerName" >Name</th> 
							<th id="headerDamage" >Damage</th>
							<th id="headerHits" >Hits</th>
							<th id="headerHits" >Max Hits</th>
							<th id="headerHits" >Potential</th>
							<th id="headerCopies" >Copies</th>
							<th id="headerRank" >Rank</th>
							<th id="headerGOO" >GOO</th>
							</tr>
						</thead>
						<tbody>
						</tbody>
						<tfoot> 
							<tr>
							<th id="headerImage" >Image</th> 
							<th id="headerCode" >Code</th>
							<th id="headerName" >Name</th> 
							<th id="headerDamage" >Damage</th>
							<th id="headerHits" >Hits</th>
							<th id="headerHits" >Max Hits</th>
							<th id="headerHits" >Potential</th>
							<th id="headerCopies" >Copies</th>
							<th id="headerRank" >Rank</th>
							<th id="headerGOO" >GOO</th>
							</tr>
						</tfoot>`;

	for(let i = 0; i < BUILDABLECARDS.length; i++){
		if(this.isOnCode(BUILDABLECARDS[i])){
			let row = selectionTable.getElementsByTagName('tbody')[0].insertRow(-1);
			let cell0 = row.insertCell(0);
			let cell1 = row.insertCell(1);
			let cell2 = row.insertCell(2);
			let cell3 = row.insertCell(3);
			let cell4 = row.insertCell(4);
			let cell5 = row.insertCell(5);
			let cell6 = row.insertCell(6);
			let cell7 = row.insertCell(7);
			let cell8 = row.insertCell(8);
			let cell9 = row.insertCell(9);

			cell0.innerHTML = "";
			cell0.appendChild(BUILDABLECARDS[i].image);
			if(BUILDABLECARDS[i].code.length === 26){
				cell1.innerHTML = "*";
			}
			else{
				cell1.innerHTML = BUILDABLECARDS[i].code;
			}
			cell2.innerHTML = BUILDABLECARDS[i].name;
			cell3.innerHTML = BUILDABLECARDS[i].damage;
			cell4.innerHTML = BUILDABLECARDS[i].hits;
			cell5.innerHTML = BUILDABLECARDS[i].hits;
			cell6.innerHTML = BUILDABLECARDS[i].hits * BUILDABLECARDS.damage;
			cell7.innerHTML = BUILDABLECARDS[i].copies;
			cell8.innerHTML = BUILDABLECARDS[i].rank;
			cell9.innerHTML = BUILDABLECARDS[i].goo;

			if(BUILDABLECARDS[i].rank === "standard"){
				cell0.style.backgroundColor = "Yellow";
			}
			if(BUILDABLECARDS[i].rank === "mega"){
				cell0.style.backgroundColor = "LightBlue";
			}
			if(BUILDABLECARDS[i].rank === "giga"){
				cell0.style.backgroundColor = "Salmon";
			}
			
			row.onclick = createListClickHandler(BUILDABLECARDS[i]);
		}
	}
	var table = $('#selectionTable').DataTable({
		destroy: true,
		"scrollY":        "80%",
		"scrollCollapse": true,
		"paging":         false,
		dom: 'Bfrtip',
		buttons: []
	});
	
	for (let i = 0; i < alphabet.length; i++) {
		table.button().add(i, {
			text: alphabet[i],
			action: function(e, dt, node, config) {
				$(node).toggleClass('toggleActive');
				console.log(this.text());
				swapCode(this.text());
			}
		});
	}
};

function countMega() {
	let count = 0;
	for(let i = 0; i < SELECTEDCARDS.length; i++){
		if(SELECTEDCARDS[i].rank === "mega"){
			count++;
		}
	}
	return count;
};

function countGiga() {
	count = 0;
	for(let i = 0; i < SELECTEDCARDS.length; i++){
		if(SELECTEDCARDS[i].rank === "giga"){
			count++;
		}
	}
	this.count;
};

function folderisValid() {
	if(SELECTEDCARDS.length !== 30){
		return false;
	}
	if(countMega() > 5){
		return false;
	}
	if(countGiga() > 1){
		return false;
	}
	return true;
}

function saveFolder(folderName) {
	if(folderisValid()){
		localStorage.setItem("folderNamePrefix" + folderName, JSON.stringify(SELECTEDCARDS));
	}
	else{
		console.log("Folder invalid");
	}
}

function deleteFolder(folderName) {
	localStorage.removeItem("folderNamePrefix" + folderName);
}
