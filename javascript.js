const container = document.querySelector('.container');
const size = 600;
container.style.width = `${size}px`

for(let i=0;i<16*16;i++){

    const box = document.createElement('div');
    box.style.width = `${size/16}px`;
    box.style.height = `${size/16}px`;
    box.classList.add('box');
    container.appendChild(box);
}

const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.classList.add('hover');
    })
})

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    boxes.forEach(box => {
        box.classList.remove('hover');
    })
})