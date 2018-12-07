const gridBody  = document.querySelector('.container');
const gridBtn   = document.querySelector('#create-grid');
let box;

gridBtn.addEventListener('click', createGrid);

function createGrid() {
    for (let i = 0; i < 100; i++) {
        box = document.createElement('div');
        box.classList.add('card');
        box.style.border = '2px solid black';
        gridBody.appendChild(box);
    }
}

const gridBoxes = document.querySelectorAll('.card');

Array.from(gridBoxes).forEach
    (el => el.addEventListener('mouseover', () => {
        console.log('test');
        el.style.backgroundColor = 'black';
    })
)