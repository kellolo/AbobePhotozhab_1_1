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
    doc.querySelector ('x-coord').innerText = evt.offsetX;
    doc.querySelector ('y-coord').innerText = evt.offsetY;
}

canvas.addEventListener ('mousemove', getCoordinat);