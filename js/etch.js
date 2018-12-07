const gridBody = document.querySelector('.container');
const gridBtn = document.querySelector('#create-grid');
gridBtn.addEventListener('click', createGrid);

function createGrid() {
    for (let i = 0; i < 100; i++) {
        let box = document.createElement('div');
        box.classList.add('card');
        gridBody.appendChild(box);
    }
}