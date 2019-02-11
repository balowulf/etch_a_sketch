/********** UI Variables **********/

const controller   = document.querySelector('.controller');
const gridBody     = document.querySelector('.container');
const gridBtn      = document.querySelector('.create-grid');
const border       = '1px solid darkgray';
const gridBodySize = 650;
let box;

/********** Event Listeners **********/

gridBtn.addEventListener('click', (e) => {
  if (controller.classList.contains('create-grid')) {
    createGrid();
  } else {
    clearGrid();
  }
});

gridBody.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('container')) {
    return;
  } else {
    e.target.classList.add('orange');
  }
})

/********** Functions **********/

function createGrid() {
  controller.classList.remove('create-grid');
  controller.textContent = 'Clear';
  let gridSize = prompt('What size grid would you like?');
  if (gridSize === '') {
    alert(`Please enter a value between 2 and 100`);
    return;
  } else if (gridSize > 100) {
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
  controller.textContent = 'Create Grid';
  controller.classList.add('create-grid');
}