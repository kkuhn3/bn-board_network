var SELECTEDCARDS = [];

function FolderBuilder(){
	this.sortFolderBuilder = function(column, dir){
		if(typeof dir == "undefined"){dir=1;}
		sortDirs[column]=dir;
		if(dir>0){
			BUILDABLECARDS.sort((a,b)=>{
				if(a[column]>b[column]){return 1;}
				else{return -1;}
			});
		}else{
			BUILDABLECARDS.sort((a,b)=>{
				if(a[column]>b[column]){return -1;}
				else{return 1;}
			});
		}
		this.buildTable();
	}
	sortDirs = {'name':0,'code':0,'damage':0,'hits':0,'copies':0,'rank':0,'goo':0};

	this.searchString = "";
	this.adjustFilter = function(searchString){
		this.searchString = searchString.toLowerCase();
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
	
	this.rankFilter = [];
	this.swapRank = function(rankToSwap){
		if(this.rankFilter.includes(rankToSwap)){
			this.ind = this.rankFilter.indexOf(rankToSwap);
			this.rankFilter.splice(this.ind, 1);
		}
		else{
			this.rankFilter.push(rankToSwap);
		}
		this.buildTable();
	}
	this.isOnRank = function(cardToCheck){
		if(this.rankFilter < 1){
			return true;
		}
		return this.rankFilter.includes(cardToCheck.rank)
	}
	
	this.gooFilter = [];
	this.swapGoo = function(gooToSwap){
		if(this.gooFilter.includes(gooToSwap)){
			this.ind = this.gooFilter.indexOf(gooToSwap);
			this.gooFilter.splice(this.ind, 1);
		}
		else{
			this.gooFilter.push(gooToSwap);
		}
		this.buildTable();
	}
	this.isOnGoo = function(cardToCheck){
		if(this.gooFilter < 1){
			return true;
		}
		return this.gooFilter.includes(cardToCheck.goo)
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
		this.highestcount = 0;
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
	
	this.buildFolderTable = function(){
		var table = document.getElementById("folderTable");
		table.innerHTML =	`<tr> 
								<th>Copies</th> 
								<th>Card</th> 
								<th>Code</th> 
							</tr>`;
							
		this.alreadyIncludedCards = [];
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
		var table = document.getElementById("selectionTable");
		table.innerHTML = 	`<tr> 
								<th onclick="folderBuilder.sortFolderBuilder('name',${!sortDirs.name})">Image</th> 
								<th onclick="folderBuilder.sortFolderBuilder('code',${!sortDirs.code})">Code</th>
								<th onclick="folderBuilder.sortFolderBuilder('name',${!sortDirs.name})">Name</th> 
								<th onclick="folderBuilder.sortFolderBuilder('damage',${!sortDirs.damage})">Damage</th>
								<th onclick="folderBuilder.sortFolderBuilder('hits',${!sortDirs.hits})">Hits</th>
								<th onclick="folderBuilder.sortFolderBuilder('copies',${!sortDirs.copies})">Copies</th>
								<th onclick="folderBuilder.sortFolderBuilder('rank',${!sortDirs.rank})">Rank</th>
								<th onclick="folderBuilder.sortFolderBuilder('goo',${!sortDirs.goo})">GOO</th>
							</tr>`;

		for(var i = 0; i < BUILDABLECARDS.length; i++){
			if(this.searchString === "" || BUILDABLECARDS[i].name.toLowerCase().includes(this.searchString)){
				if(this.isOnCode(BUILDABLECARDS[i]) && this.isOnRank(BUILDABLECARDS[i]) && this.isOnGoo(BUILDABLECARDS[i])){
					var row = table.insertRow(-1);
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
					
					row.onclick = this.createListClickHandler(BUILDABLECARDS[i]);
				}
			}
		}
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
}

