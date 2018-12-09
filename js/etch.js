const gridBody  = document.querySelector('.container');
const gridBtn   = document.querySelector('#create-grid');
// const gridBoxes = document.querySelectorAll('div.box');
// const gridBoxes = document.getElementsByClassName('box');
const gridBoxes = document.getElementsByClassName('box');
const clearBtn  = document.querySelector('#clear');
let box;

gridBtn.addEventListener('click', createGrid);
clearBtn.addEventListener('click', clearGrid);

function createGrid() {
    for (let i = 0; i < 2916; i++) {
        box = document.createElement('div');
        box.classList.add('box');
        box.style.border = '1px solid darkgray';
        gridBody.appendChild(box);
    }
}

gridBody.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('container')) {
        return;
    } else {
        e.target.classList.add('orange');
        console.log(e.target);
    }
})

function clearGrid() {
    while (gridBody.firstChild) {
        gridBody.removeChild(gridBody.firstChild);
    }
}