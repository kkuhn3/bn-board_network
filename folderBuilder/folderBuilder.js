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
	
	this.createListClickHandler = function(cardId, copies) {
		return function() { 
			this.currentCount = SELECTEDCARDS.filter(function(id){
				return id === cardId;
			}).length;
			if(this.currentCount < copies){
				if(SELECTEDCARDS.length < 30){
					SELECTEDCARDS.push(cardId);
					this.buildFolderTable();
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
	
	this.buildFolderTable = function(){
		var table = document.getElementById("folderTable");
		table.innerHTML =	`<tr>
							</tr>`;
							
		this.alreadyIncludedCards = [];
		for(var j = 0; j < SELECTEDCARDS.length; j++){
			if(this.alreadyIncludedCards.includes(SELECTEDCARDS[j])){
				this.ind = this.alreadyIncludedCards.indexOf(SELECTEDCARDS[j]);
				this.count = parseInt(table.rows[this.ind+1].cells[0].innerHTML);
				this.count = this.count + 1;
				table.rows[this.ind+1].cells[0].innerHTML = this.count;
			}
			else{
				var row = table.insertRow(-1);
				var cell0 = row.insertCell(0)
				var cell1 = row.insertCell(1);
				cell0.innerHTML = 1;
				cell1.innerHTML = SELECTEDCARDS[j];
				
				row.onclick = this.createFolderClickHandler(SELECTEDCARDS[j]);
				
				this.alreadyIncludedCards.push(SELECTEDCARDS[j]);
			}
		}
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
					
					row.onclick = this.createListClickHandler(BUILDABLECARDS[i].id, BUILDABLECARDS[i].copies);
				}
			}
		}
	};
}

