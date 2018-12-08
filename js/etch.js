const gridBody  = document.querySelector('.container');
const gridBtn   = document.querySelector('#create-grid');
const gridBoxes = document.querySelectorAll('div');
let box;

gridBtn.addEventListener('click', createGrid);

function createGrid() {
    for (let i = 0; i < 1482; i++) {
        box = document.createElement('div');
        box.classList.add('card');
        box.style.border = '1px solid black';
        gridBody.appendChild(box);
    }
}

Array.from(gridBoxes).forEach
    (el => el.addEventListener('click', () => {
        console.log(el);
        el.style.backgroundColor = 'black';
    })
)