const gridBody  = document.querySelector('.container');
const gridBtn   = document.querySelector('#create-grid');
const gridBoxes = document.querySelectorAll('.box');
let box;

gridBtn.addEventListener('click', createGrid);

function createGrid() {
    for (let i = 0; i < 2916; i++) {
        box = document.createElement('div');
        box.classList.add('box');
        box.style.border = '1px solid darkgray';
        gridBody.appendChild(box);
    }
}

gridBody.addEventListener('mouseover', (e) => {
    e.target.classList.add('orange');
    console.log(e.target);
})