const container = document.querySelector('.container');

function createGrid(n) {
    container.textContent = '';

    const size = 600;
    container.style.width = `${size}px`;

    for(let i=0;i<n*n;i++){

        const box = document.createElement('div');
        box.style.width = `${size/n}px`;
        box.style.height = `${size/n}px`;
        box.classList.add('box');
        box.addEventListener('mouseenter', () => {
            box.classList.add('hover');
        })
        container.appendChild(box);
    }
}

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.classList.remove('hover');
    })
})

const input = document.querySelector('#grid-size');
const setButton = document.querySelector('#grid-resize');
setButton.addEventListener('click', () => {
    const gridSize = parseInt(input.value);

    if(gridSize < 1 || gridSize > 100){
        alert("Please enter value between 1 and 100")
        return;
    }

    createGrid(gridSize);
})