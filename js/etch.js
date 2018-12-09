const gridBody     = document.querySelector('.container');
const gridBtn      = document.querySelector('#create-grid');
const clearBtn     = document.querySelector('#clear');
const border       = '1px solid darkgray';
const gridBodySize = 650;
let box;

gridBtn.addEventListener('click', createGrid);
clearBtn.addEventListener('click', clearGrid);
gridBody.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('container')) {
        return;
    } else {
        e.target.classList.add('orange');
    }
})

function createGrid() {
    let gridSize = prompt('What size grid would you like?');
    if (gridSize > 100) {
        alert(`That's too big!`);
        return;
    } else if (gridSize < 2) {
        alert(`That's too small!`);
        return;
    }
    let boxSize = gridBodySize / gridSize;
    for (let i = 0; i < gridSize * gridSize; i++) {
        box = document.createElement('div');
        box.classList.add('box');
        box.setAttribute('style', 
            `border: ${border};
             height: ${boxSize}px;
             width : ${boxSize}px;`
        )
        gridBody.appendChild(box);
    }
}

function clearGrid() {
    while (gridBody.firstChild) {
        gridBody.removeChild(gridBody.firstChild);
    }
}