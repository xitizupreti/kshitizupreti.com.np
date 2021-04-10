<?php include '../../header.php'; ?>
<style>
    .li{
font-size: 20px;
color: orchid;
margin-left: 5%;
font-weight: bolder;
    }
    hr{
      border-top: 1px solid #8c8b8b;
      border-bottom: 1px solid #fff;
    }
    li:hover{
      color: blue;
    }
</style>
<hr style="border: 5px solid red; border-radius: 6px yellow; border-top: 4px dashed red;">

<h2 style="text-align: center; color: chartreuse;">Click the button to sort the list <em>ASCENDING</em> (A to Z):</h2>
<h2 style="text-align: center; color: chartreuse;">Click again to sort the list <em>DESCENDING</em> (Z to A):</h2>
<button onclick="sort()" style="margin:0 auto; font-size: 20px; background-color: rgb(11, 12, 1); color:mintcream; display:block; width: 150px; height: 50px;"><b>Sort</b></button>
<br><h1 style="text-align: center;">*** MESSAGE US FOR ANYTHING YOU NEED !! ***</h1>

<ul id="id1">
  <hr>
  <a href="" target="_blank"><li class="li">TEST (2001)</li></a>
  <a href="" target="_blank"><li class="li">TRY (2058)</li></a>
  <a href="" target="_blank"><li class="li">Text us (2031)</li></a>
  <hr>
</ul>

<script>
function sort() {
  var list, i, switching, b, shouldSwitch, dir, switchcount = 0;
  list = document.getElementById("id1");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc"; 
  // Make a loop that will continue until no switching has been done:
  while (switching) {
    // start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("LI");
    // Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /* check if the next item should switch place with the current item,
      based on the sorting direction (asc or desc): */
      if (dir == "asc") {
        if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
          /* if next item is alphabetically lower than current item,
          mark as a switch and break the loop: */
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
          /* if next item is alphabetically higher than current item,
          mark as a switch and break the loop: */
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
      // Each time a switch is done, increase switchcount by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
</script>
<?php include '../../footer.php'; ?>