// Script

const grid = document.querySelector('.grid');
const resetbutton = document.querySelector("#reset-grid")
const newsquar = document.querySelector(".square")

window.addEventListener("load", createGrid())

function createGrid() {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div");
        div.setAttribute("id", "iddivtest")
        div.classList.add("square");
        div.addEventListener("mouseover", changeColor)
        grid.appendChild(div);
    }
};

function changeColor(e) {
    console.log(e)
    e.target.className = "square-color"
    // e.target.style.backgroundColor = "green"
}

// document.getElementById("square").addEventListener("mouseover", mouseoverfun)

// // newsquar.addEventListener("mouseover", mouseoverfun);

// function mouseoverfun(e) {
//     e.target.style.backgroundColor = "red";
// }



//Add event listener to div, change colour