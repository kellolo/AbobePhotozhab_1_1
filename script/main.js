let doc = document;
const canvas = doc.querySelector ('#canv');
ctx = canvas.getContext ('2d');
console.dir(ctx);

let system = {
    currentTool: null,
    currentColor: '#000',
    brushSize: 5
}

function getCoordinat (evt) {
    doc.querySelector ('#x-coord').innerText = evt.offsetX;
    doc.querySelector ('#y-coord').innerText = evt.offsetY;
}

function renderSystem (el, act) {
    system [el] = act;
}

function handleClick (evt) {
    if (evt.target.classList.contains ('tool-button')) {
        renderSystem ('currentTool', evt.target.dataset.name);
        //console.log (evt.target.dataset.name)
    }
}

function handleInput (evt) {
    if (evt.target.id === 'siliect-size') {
        renderSystem ('brushSize', evt.target.value);
        //console.log ('select size ' + evt.target.value)
    }
    if (evt.target.id === 'select-color') {
        renderSystem ('currentColor', evt.target.value);
        //console.log ('select color ' + evt.target.value)
    }
}

function startDrow (evt) {
    if (system.currentTool === 'pencil') {
        pencil(evt);
    }
    if (system.currentTool === 'brush') {
        brush(evt);
    }
    if (system.currentTool === 'fill') {
        fill(evt);
    }
}

function endDrow () {
    canvas.onmousemove = null;
}

// add Tool

function pencil (evt) {
    canvas.onmousemove = function (evt) {
        let x = +doc.querySelector ('#x-coord').innerText;
        let y = +doc.querySelector ('#y-coord').innerText;
        ctx.fillStyle = system.currentColor;
        ctx.fillRect (x, y, system.brushSize, system.brushSize);
    }
}

function brush (evt) {
    canvas.onmousemove = function (evt) {
        let x = +doc.querySelector ('#x-coord').innerText;
        let y = +doc.querySelector ('#y-coord').innerText;
        ctx.fillStyle = system.currentColor;
        ctx.beginPath();
        ctx.arc (x, y, system.brushSize, 0, Math.PI*2, false);
        ctx.fill();
    }
}

function fill (evt) {
    canvas.onmousemove = function (evt) {
        ctx.beginPath();
        ctx.rect(0, 0, 1000, 800);
        ctx.fillStyle = system.currentColor;
        ctx.fill();
    }
}

canvas.addEventListener ('mousemove', getCoordinat);
canvas.addEventListener ('mousedown', startDrow);
canvas.addEventListener ('mouseup', endDrow);
doc.addEventListener ('click', handleClick);
doc.addEventListener ('input', handleInput);

// canvas.addEventListener ('click', function () {
//     ctx.fillStyle = system.currentColor;
//     if (system.currentTool === 'pencil') {
//         ctx.fillRect (+doc.querySelector ('#x-coord').innerText, +doc.querySelector ('#y-coord').innerText, system.brushSize, system.brushSize)
//     }
// })