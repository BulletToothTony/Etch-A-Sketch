// Script

const grid = document.querySelector('.grid');
const resetbutton = document.querySelector("#reset-grid")
const newsquar = document.querySelector(".square")
const changesize = document.querySelector('#change-size');

window.addEventListener("load", defaultGrid)
changesize.addEventListener("click", changesizefunc)

function defaultGrid() {
    gridSize(16)
    createGrid(16)

}

//gridSize
//creategrid

function gridSize(size) {
    // grid.innerHTML = "";
    grid.style.setProperty("grid-template-columns",'repeat(${size}, 2fr)')
    grid.style.setProperty("grid-template-rows",'repeat(${size}, 2fr)')
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

function changeColor(e) {
    // console.log(e)
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    console.log(r, g, b)
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

reset = resetbutton.addEventListener('click', reload)

function reload(e) {
    window.location.reload()
}

function changesizefunc() {
    let newSize = prompt("Enter new size");

  if (newSize !== null) {
    newSize = parseInt(newSize);
    if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
      alert("Enter a number from 1-64 range");
      changeSize();
    } else {
      clearGrid();
      setGridSize(newSize);
      fillGrid(newSize);
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