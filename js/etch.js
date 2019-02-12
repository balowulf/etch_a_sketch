/********** UI Variables **********/

const controllerContainer = document.querySelector('.controller-container');
const controller          = document.querySelector('.controller');
const gridBody            = document.querySelector('.container');
const gridBtn             = document.querySelector('.create-grid');
const button              = document.querySelector('button');
const border              = '1px solid darkgray';
const gridBodySize        = 650;
let box;

button.style.display = 'none';

/********** Event Listeners **********/

controller.addEventListener('click', (e) => {
  if (controller.classList.contains('create-grid')) {
    gridPrompt();
  } else {
    clearGrid();
  }
});

button.addEventListener('click', createGrid);

gridBody.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('container')) {
    return;
  } else {
    e.target.classList.add('orange');
  }
});

/********** Functions **********/

function createGrid() {
  let gridSize = parseInt(controller.value);
  if (isNaN(gridSize) || gridSize > 100 || gridSize < 2) {
    clearGrid();
    return;
  }
  controller.placeholder = 'Clear';
  button.style.display = 'none';
  // create grid based on gridsize input
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
  controller.value = null;
};

function gridPrompt() {
  controller.classList.remove('create-grid');
  controller.placeholder = 'Enter a number (2 - 100)';
  button.style.display = 'block';
}

function clearGrid() {
  controller.value = null;
  controller.placeholder = 'Start';
  controller.classList.add('create-grid');
  button.style.display = 'none';
  while (gridBody.firstChild) {
    gridBody.removeChild(gridBody.firstChild);
  }
}