
function FolderBuilder(){
	this.sortFolderBuilder = function(n){
		  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
		  table = document.getElementById("myTable");
		  switching = true;
		  //Set the sorting direction to ascending:
		  dir = "asc"; 
		  /*Make a loop that will continue until
		  no switching has been done:*/
		  while (switching) {
		    //start by saying: no switching is done:
		    switching = false;
		    rows = table.rows;
		    /*Loop through all table rows (except the
		    first, which contains table headers):*/
		    for (i = 1; i < (rows.length - 1); i++) {
		      //start by saying there should be no switching:
		      shouldSwitch = false;
		      /*Get the two elements you want to compare,
		      one from current row and one from the next:*/
		      x = rows[i].getElementsByTagName("TD")[n];
		      y = rows[i + 1].getElementsByTagName("TD")[n];
		      /*check if the two rows should switch place,
		      based on the direction, asc or desc:*/
		      if (dir == "asc") {
		        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
		          //if so, mark as a switch and break the loop:
		          shouldSwitch= true;
		          break;
		        }
		      } else if (dir == "desc") {
		        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
		          //if so, mark as a switch and break the loop:
		          shouldSwitch = true;
		          break;
		        }
		      }
		    }
		    if (shouldSwitch) {
		      /*If a switch has been marked, make the switch
		      and mark that a switch has been done:*/
		      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
		      switching = true;
		      //Each time a switch is done, increase this count by 1:
		      switchcount ++;      
		    } else {
		      /*If no switching has been done AND the direction is "asc",
		      set the direction to "desc" and run the while loop again.*/
		      if (switchcount == 0 && dir == "asc") {
		        dir = "desc";
		        switching = true;
		      }
		    }
		  }
		
	};
	this.buildTable = function(){
		var table = document.getElementById("myTable");
		table.innerHTML = `<tr> 
				    		<th onclick="folderBuilder.sortFolderBuilder(1)">Image</th> 
				    		<th onclick="folderBuilder.sortFolderBuilder(1)">Name</th> 
				    		<th onclick="folderBuilder.sortFolderBuilder(2)">Damage</th>
				    		<th onclick="folderBuilder.sortFolderBuilder(3)">Hits</th>
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

