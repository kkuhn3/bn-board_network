
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
	sortDirs = {'name':0,'damage':0,'hits':0}
	
	this.buildTable = function(){
		var table = document.getElementById("myTable");
		table.innerHTML = `<tr> 
				    		<th onclick="folderBuilder.sortFolderBuilder('name',${!sortDirs.name})">Image</th> 
				    		<th onclick="folderBuilder.sortFolderBuilder('name',${!sortDirs.name})">Name</th> 
				    		<th onclick="folderBuilder.sortFolderBuilder('damage',${!sortDirs.damage})">Damage</th>
				    		<th onclick="folderBuilder.sortFolderBuilder('hits',${!sortDirs.hits})">Hits</th>
				    		<th onclick="folderBuilder.sortFolderBuilder(4)">Copies</th>
				    		<th onclick="folderBuilder.sortFolderBuilder(5)">GOO</th>
				  		 </tr>`;

		for(var i = 0; i < BUILDABLECARDS.length; i++){
			var row = table.insertRow(-1);
			var cell0 = row.insertCell(0);
	  		var cell1 = row.insertCell(1);
	  		var cell2 = row.insertCell(2);
	  		var cell3 = row.insertCell(3);
	  		var cell4 = row.insertCell(4);
	  		var cell5 = row.insertCell(5);
	  		cell0.innerHTML = "Image Here";
	  		cell1.innerHTML = BUILDABLECARDS[i].name;
	  		cell2.innerHTML = BUILDABLECARDS[i].damage;
	  		cell3.innerHTML = BUILDABLECARDS[i].hits;
		}
	};
}

