var SELECTEDCARDS = [];
var SORTEDCARDS = [];
var FOLDERS = [];

function FolderBuilder(){
	this.init = function(){
		SORTEDCARDS = BUILDABLECARDS.slice();
	}
	this.getIndex = function(aCardId){
		for(var i = 0; i < SORTEDCARDS.length; i++){
			if(SORTEDCARDS[i].id === aCardId){
				return i;
			}
		}
	}
	
	this.codeFilter = [];
	this.swapCode = function(codeToSwap){
		if(this.codeFilter.includes(codeToSwap)){
			this.ind = this.codeFilter.indexOf(codeToSwap);
			this.codeFilter.splice(this.ind, 1);
		}
		else{
			this.codeFilter.push(codeToSwap);
		}
		this.buildTable();
	}
	this.isOnCode = function(cardToCheck){
		if(this.codeFilter.length < 1){
			return true;
		}
		if(this.codeFilter.includes("*") && cardToCheck.code.length === 26){
			return true;
		}
		if(cardToCheck.code.length === 26){
			return false;
		}
		for(var i = 0; i < cardToCheck.code.length; i++){
			if(this.codeFilter.includes(cardToCheck.code[i])){
				return true;
			}
		}
		return false;
	}

	this.createListClickHandler = function(aCard) {
		return function() { 
			this.currentCount = SELECTEDCARDS.filter(function(savedCard){
				return savedCard.id === aCard.id;
			}).length;

			if(this.currentCount < aCard.copies){
				if(SELECTEDCARDS.length < 30){
					if(aCard.rank !== "mega" || this.countMega() < 5){
						if(aCard.rank !== "giga" || this.countGiga() < 1){
							SELECTEDCARDS.push(aCard);
							this.buildFolderTable();
						}
					}
				}
			}
		}.bind(this);
	}
	
	this.createFolderClickHandler = function(cardId) {
		return function() { 
			this.ind = SELECTEDCARDS.lastIndexOf(cardId);
			SELECTEDCARDS.splice(this.ind, 1);
			this.buildFolderTable();
		}.bind(this);
	}
	
	this.mostCommonCodes = function(){
		this.codeCount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
		this.alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
		for(var i = 0; i < SELECTEDCARDS.length; i++){
			if(SELECTEDCARDS[i].code.length !== 26){
				for(var j = 0; j < SELECTEDCARDS[i].code.length; j++){
					this.ind = this.alphabet.indexOf(SELECTEDCARDS[i].code[j]);
					this.codeCount[this.ind]++;
				}
			}
		}
		this.highestcount = this.codeCount[0];
		this.highestSet = ["A"];
		for(var i = 1; i < this.codeCount.length; i++){
			if(this.codeCount[i] > this.highestcount){
				this.highestcount = this.codeCount[i];
				this.highestSet = [this.alphabet[i]];
			}
			else if(this.codeCount[i] === this.highestcount){
				this.highestSet.push(this.alphabet[i]);
			}
		}
		if(this.highestSet.length === 26){
			this.highestSet = ["*"];
		}
		return this.highestSet;
	}

	this.sortSelectedCards = function(){
		SELECTEDCARDS.sort((a,b)=>{
			if(this.getIndex(a.id) > this.getIndex(b.id)){
				return 1;
			}
			else{
				return -1;
			}
		});
	}
	
	this.addUserFolders = function(){
		var keys = Object.keys(localStorage);
		for(var i = 0; i < keys.length; i++){
			if(keys[i].includes("folderNamePrefix")){
				var selectDrop = document.getElementById("sel");
				var option = document.createElement("option");
				var folderName = keys[i].substring(16);
				option.text = folderName;
				option.value = folderName;
				selectDrop.add(option, 1);

				this.newFolder = new function(){
					this.id = folderName;
					this.name = folderName;
					this.contents = [];
				};
				this.folderContents = JSON.parse(localStorage.getItem(keys[i]));
				for(var j = 0; j < this.folderContents.length; j++){
					this.aCard = cards.getCardById(this.folderContents[j].id);
					this.newFolder.contents.push(this.aCard);
				}
				FOLDERS.push(this.newFolder);
			}
		}
	}
	
	this.importFolder = function(newDeckID){
		this.importedFolder = null;
		for(var i = 0; i < FOLDERS.length; i++){
			if(FOLDERS[i].id === newDeckID){
				this.importedFolder = FOLDERS[i];
			}
		}
		if(this.importedFolder){
			SELECTEDCARDS = this.importedFolder.contents.slice();
			document.getElementById("folderNameInput").value = this.importedFolder.id;
			this.buildFolderTable();
		}
	}
	
	this.buildFolderTable = function(){
		var table = document.getElementById("folderTable");
		table.innerHTML =	`<tr> 
								<th>Copies</th> 
								<th>Card</th> 
								<th>Code</th> 
							</tr>`;
							
		this.alreadyIncludedCards = [];
		this.sortSelectedCards();
		for(var j = 0; j < SELECTEDCARDS.length; j++){
			if(this.alreadyIncludedCards.includes(SELECTEDCARDS[j].id)){
				this.ind = this.alreadyIncludedCards.indexOf(SELECTEDCARDS[j].id) + 1;
				this.count = parseInt(table.rows[this.ind].cells[0].innerHTML);
				this.count = this.count + 1;
				table.rows[this.ind].cells[0].innerHTML = this.count;
			}
			else{
				var row = table.insertRow(-1);
				var cell0 = row.insertCell(0)
				var cell1 = row.insertCell(1);
				var cell2 = row.insertCell(2);
				cell0.innerHTML = 1;
				cell1.innerHTML = SELECTEDCARDS[j].name;
				if(SELECTEDCARDS[j].code.length === 26){
					cell2.innerHTML = "*";
				}
				else{
					cell2.innerHTML = SELECTEDCARDS[j].code;
				}
				
				row.onclick = this.createFolderClickHandler(SELECTEDCARDS[j]);
				if(SELECTEDCARDS[j].rank === "standard"){
					row.style.backgroundColor = "Yellow";
				}
				if(SELECTEDCARDS[j].rank === "mega"){
					row.style.backgroundColor = "LightBlue";
				}
				if(SELECTEDCARDS[j].rank === "giga"){
					row.style.backgroundColor = "Salmon";
				}
				
				this.alreadyIncludedCards.push(SELECTEDCARDS[j].id);
			}
		}
		
		
		var rowL = table.insertRow(-1);
		var cell0L = rowL.insertCell(0);
		var cell1L = rowL.insertCell(1);
		var cell2L = rowL.insertCell(2);
		cell0L.innerHTML = "<b>" + SELECTEDCARDS.length + "</b>";
		cell1L.innerHTML = "<b>Totals</b>"
		cell2L.innerHTML = "<b>" + this.mostCommonCodes() + "</b>";
	}
	
	this.buildTable = function(){
		var datatable = document.getElementById('selectionTable_wrapper');
		if(datatable){
			datatable.parentNode.removeChild(datatable);
		}
		var tableWrapper = document.getElementById("tableWrapper");
		tableWrapper.innerHTML = '<table id="selectionTable" class="table"> </table>';
		var table = document.getElementById("selectionTable");
		table.innerHTML = 	`<thead> 
								<tr>
								<th id="headerImage" >Image</th> 
								<th id="headerCode" >Code</th>
								<th id="headerName" >Name</th> 
								<th id="headerDamage" >Damage</th>
								<th id="headerHits" >Hits</th>
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
								<th id="headerCopies" >Copies</th>
								<th id="headerRank" >Rank</th>
								<th id="headerGOO" >GOO</th>
								</tr>
							</tfoot>`;

		for(var i = 0; i < BUILDABLECARDS.length; i++){
			if(this.isOnCode(BUILDABLECARDS[i])){
				var row = table.getElementsByTagName('tbody')[0].insertRow(-1);
				var cell0 = row.insertCell(0);
				var cell1 = row.insertCell(1);
				var cell2 = row.insertCell(2);
				var cell3 = row.insertCell(3);
				var cell4 = row.insertCell(4);
				var cell5 = row.insertCell(5);
				var cell6 = row.insertCell(6);
				var cell7 = row.insertCell(7);
				var img = document.createElement('img');
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
				cell5.innerHTML = BUILDABLECARDS[i].copies;
				cell6.innerHTML = BUILDABLECARDS[i].rank;
				cell7.innerHTML = BUILDABLECARDS[i].goo;

				if(BUILDABLECARDS[i].rank === "standard"){
					row.style.backgroundColor = "Yellow";
				}
				if(BUILDABLECARDS[i].rank === "mega"){
					row.style.backgroundColor = "LightBlue";
				}
				if(BUILDABLECARDS[i].rank === "giga"){
					row.style.backgroundColor = "Salmon";
				}
				
				row.onclick = this.createListClickHandler(BUILDABLECARDS[i]);
			}
		}
		$('#selectionTable').DataTable();
	};

	this.countMega = function(){
		this.count = 0;
		for(var i = 0; i < SELECTEDCARDS.length; i++){
			if(SELECTEDCARDS[i].rank === "mega"){
				this.count++;
			}
		}
		return this.count;
	};

	this.countGiga = function(){
		this.count = 0;
		for(var i = 0; i < SELECTEDCARDS.length; i++){
			if(SELECTEDCARDS[i].rank === "giga"){
				this.count++;
			}
		}
		return this.count;
	};

	this.folderisValid = function(){
		if(SELECTEDCARDS.length !== 30){
			return false;
		}
		if(this.countMega() > 5){
			return false;
		}
		if(this.countGiga() > 1){
			return false;
		}
		return true;
	}

	this.saveFolder = function(folderName){
		if(this.folderisValid()){
			localStorage.setItem("folderNamePrefix" + folderName, JSON.stringify(SELECTEDCARDS));
		}
		else{
			console.log("Folder invalid");
		}
	};
	
	this.deleteFolder = function(folderName){
		localStorage.removeItem("folderNamePrefix" + folderName);
	};
}
