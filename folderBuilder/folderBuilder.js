
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
	
	this.buildTable = function(){
		var table = document.getElementById("myTable");
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
			}
		}
	};
}

