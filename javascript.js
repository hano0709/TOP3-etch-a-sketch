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

        box.dataset.opacity = 0;
        box.dataset.colorSet = 0;

        box.addEventListener('mouseenter', () => {
            if(box.dataset.colorSet == 0){
                const r = Math.floor(Math.random() *256);
                const g = Math.floor(Math.random() *256);
                const b = Math.floor(Math.random() *256);
                box.style.backgroundColor = `rgb(${r},${g},${b})`;
                box.dataset.colorSet = 1;
            }

            let opacity = parseFloat(box.dataset.opacity);
            console.log(opacity);
            if(opacity < 1){
                opacity = opacity + 0.1;
                box.dataset.opacity = opacity;
                box.style.opacity = opacity;
            }
        })
        container.appendChild(box);
    }
}

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.backgroundColor = '';
        box.style.opacity = '';
        box.dataset.colorSet = 0
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