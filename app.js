const board = document.querySelector('#board');
const SQUARES_NUMBER = 400;
const colors = ['#0FA87C', '#0F91A8', '#3B4AE7', '#F761F4', '#AB2D6E'];

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setRandomColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));

    board.append(square);
}

function setRandomColor(element) {
    const color = getRandomColor();
    element.style.background = `${color}`;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.background = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}