// Script

const grid = document.querySelector('.grid');
const resetbutton = document.querySelector("#reset-grid")
const newsquar = document.querySelector(".square")
const changesize = document.querySelector('#change-size');
const btncrl = document.querySelectorAll("#btn-clr")

window.addEventListener("load", defaultGrid)
changesize.addEventListener("click", changesizefunc)
const reset = resetbutton.addEventListener('click', reload)
const btncrllisten = btncrl.forEach(btncrllisten => btncrllisten.addEventListener("click", btncrlfunc))
let color = 'rainbow'
console.log(color)

function btncrlfunc(e) {
  console.log("triggers clrfunc")
  // console.log(e)
  console.log(e.target.innerHTML)
  if (e.target.innerHTML == "Black") {
    console.log("Black Selected")
    color = 'black'
    console.log(color)
  } else if (e.target.innerHTML == "Gray") {
    console.log("Gray Selected")
    color = 'gray'
  } else if (e.target.innerHTML == "Rainbow") {
    console.log("Rainbow Selected")
    color = 'rainbow'
  } else if (e.target.innerHTML == "Eraser") {
    console.log("Eraser Selected")
    color = 'eraser'

  }
}

function changeColor(e) {
  // if (e == "Black") {
  //   e.target.style.backgroundColor = rgb(0, 0, 0)
  // }
  const Blackcol = `rgba(${0}, ${0}, ${0}, ${0.9})`
  const Gray = `rgb(${192}, ${192}, ${192})`
  const Eraser = `rgb(${235}, ${235}, ${235})`
  const Red = `rgb(${33}, ${44}, ${235})`
  let r = Math.floor(Math.random() * 256)
  let g = Math.floor(Math.random() * 256)
  let b = Math.floor(Math.random() * 256)
  const Rainbow = `rgb(${r}, ${g}, ${b})`
  console.log(r, g, b)

  if (color == 'black') {
    e.target.style.backgroundColor = Blackcol
    grid.appendChild(Blackcol)
    console.log("BlackCOL")
  } else if (color == "rainbow") {
    e.target.style.backgroundColor = Rainbow
    console.log("Rainbowwww")
    grid.appendChild(Rainbow)
  } else if (color == "gray") {
    e.target.style.backgroundColor = Gray
    console.log("Rainbowwww")
    grid.appendChild(Gray)
  } else if (color == "eraser") {
    e.target.style.backgroundColor = Eraser
    console.log("Rainbowwww")
    grid.appendChild(Eraser)
  }
  e.target.style.backgroundColor = Rainbow
}



function defaultGrid() {
    gridSize(16)
    createGrid(16)

}

//gridSize
//creategrid

function gridSize(size) {
    // grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.setProperty("grid-template-columns",`repeat(${size}, 2fr)`)
    grid.style.setProperty("grid-template-rows",`repeat(${size}, 2fr)`)
}

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.setAttribute("id", "iddivtest")
        div.classList.add("square");
        div.addEventListener("mouseover", changeColor)
        grid.appendChild(div);
    }
};


function reload(e) {
    window.location.reload()
}



function changesizefunc() {
  let newSize = prompt("Enter new size");

  if (newSize !== null) {
    newSize = parseInt(newSize);
    if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
      alert("Enter a number from 1-64 range");
      changesizefunc();
    } else {
      clearGrid();
      gridSize(newSize);
      createGrid(newSize);
    }
  }
}

function clearGrid() {
    const gridarr = Array.from(grid.childNodes);
    gridarr.forEach((e) => {
        grid.removeChild(e);
    });
}

// document.getElementById("square").addEventListener("mouseover", mouseoverfun)

// // newsquar.addEventListener("mouseover", mouseoverfun);

// function mouseoverfun(e) {
//     e.target.style.backgroundColor = "red";
// }



//Add event listener to div, change colour

/*
console.log("colorgrid")
  switch(color) {
    case 'rainbow':
      this.style.backgroundColor = 'red';
      break;
    case 'eraser':
      this.style.backgroundColor = '#ffffff'
      break;
    case 'black':
      this.style.backgroundColor = '#000000'
      break;
    case 'gray':
      this.style.backgroundColor = 'gray';
      break
  }

*/