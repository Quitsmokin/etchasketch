window.onload = function () {
    makeCol(8,4);
   hoverColor();
   
}

function resizer() {
    //check to make sure resources aren't being killed 
    let col = window.prompt("How many columns?", 0);
    if(col > 100) {
         col = window.prompt("Too many columns pick a smaller number", 0);
    }
    let row = window.prompt("How many rows?", 0);
    if(row > 100) {
        row = window.prompt("Too many rows pick a smaller number", 0);
   }
    //you need to reset the grid or else every remake will just grid items
    reset();
    makeCol(col,row);
    hoverColor();
   }

//clearing all grid items
function reset() {
    document
      .querySelectorAll(".grid-item")
      .forEach((e) => e.parentNode.removeChild(e));
  }

function makeCol(collen,rowsize){
    const elem = document.getElementById("wrapper");
    //setting the rows and columns according to the passed arguments 
    elem.style.setProperty('--grid-rows',rowsize); 
    elem.style.setProperty('--grid-cols',collen); 
    //creating the total amount of cells needed and labeling them 
    for(let i = 0; i<(collen*rowsize); i++){
        const column = document.createElement("div");
        column.className = "grid"; 
        column.classList.add('grid-item');
        elem.appendChild(column); 
    }
}
function hoverColor() {
    let c = 0; 
     
    //select each grid item 
    let items = document.querySelectorAll('.grid-item');
    //iterate through each element
    items.forEach(item => {
        //opacity must be reset for each item 
        let startopa = 0;
        //for each element add an eventlistener 
      item.addEventListener('mouseover', () => {
        //on event change the background
        c++; 
        let i = window.getComputedStyle(item);
    if(i.backgroundColor == "rgb(255, 255, 255)") {
        //marks an item as having been given a background
        item.classList.add("active"); 
        //calls randomCol() function to give a random hex#
        item.style.backgroundColor = randomCol();
        
    } 

    //once an item is marked as active and given a random color 
    if(item.classList.contains("active")) {

            if (startopa <= .9) startopa += 0.1;
                item.style.opacity = startopa;
    }
        });
    });

    //resizing event method
    //attach the event listener down here so that it is not called on window load
    let resize = document.getElementById("regen"); 
   resize.addEventListener('click', () => resizer()); 
  }

  function randomCol(){
    //creates a string representation of hex color and returns it to mouseHover()
    return '#' + Math.random().toString(16).substr(-6);
  }
