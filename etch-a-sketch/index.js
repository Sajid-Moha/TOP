/*
*
*   CREATE CANVAS
*
*/

// Canvas size is 500px by default
const CANVAS_SIZE = 500;

function drawCanvas(containerSize, size) {
    const canvas = document.querySelector('.canvas');
    for (let i = 0; i < size; i++) {
        let pixelHeight = containerSize / size;
        const row = document.createElement('div');
        row.classList.add('row');
        row.style.height = `${pixelHeight}rem`

        for (let j = 0; j < size; j++) {
            const pixel = document.createElement('div');
            // provides hover effect for pixel
            pixel.classList.add('pixel');
            pixel.style.width = `${pixelHeight}px`;
            pixel.style.height = `${pixelHeight}px`;
           // pixel.setAttribute('draggable', 'false');
            row.appendChild(pixel);
        }
        canvas.appendChild(row);
    }
}

drawCanvas(CANVAS_SIZE, 50);


/*
*
*   SUPPORT COLOR PICKER
*
*/

// keep track of what the current color is, update when user selects color
//      from color wheel
const colorWheel = document.querySelector('#color-picker');
const root = document.querySelector(':root');
let curColor = colorWheel.value;
colorWheel.addEventListener('input', () => {
    curColor = colorWheel.value;
    root.style.setProperty('--paint-color', curColor);
})


/*
*
*   SUPPORTING DRAG N' CLICK DRAWING
*
*/

// WHEN SITE IS CLICKED, WE KNOW THAT USER IS DRAGGING MOUSE UNTIL
//      MOUSE IS LIFTED OR TAB IS EXITED

// mouse clicked indicates the start of a drag, mouse release ends drag
let dragStarted = false;

window.addEventListener('mousedown', () => {
    dragStarted = true;
});
window.addEventListener('mouseup', () => {
    dragStarted = false;
});

// Have to account for mouseenter and mousedown because I want user to be able
// to start their drawing from within the canvas and from outside the canvas
const nodes = document.querySelectorAll('.pixel');
nodes.forEach(node => node.addEventListener('mouseenter', () => {
    if (dragStarted) {
        node.style.backgroundColor = curColor;
    }
}));
nodes.forEach(node => node.addEventListener('mousedown', () => {
    node.style.backgroundColor = curColor;
}));

/*
*
*   IMPLEMENT RESET BUTTON : CANVAS ALL WHITE
*
*/
const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    nodes.forEach(node => node.style.backgroundColor = 'white');
});