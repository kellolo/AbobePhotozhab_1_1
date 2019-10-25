var canvas = document.querySelector("#canv");
var ctx = canvas.getContext("2d");
ctx.lineCap = "round";
ctx.lineWidth = 8;
let system = {
    currentTool: null,
    currentColor: '#000',
    brushSize: 5
}
function getCoordinates (evt) {
    document.querySelector ('#x-coord').innerText = evt.offsetX;
    document.querySelector ('#y-coord').innerText = evt.offsetY;
}
function renderSystem (elem, act) {
    system [elem] = act;
}
function handleClick (evt) {
    if (evt.target.classList.contains ('tool-button')) {
        renderSystem ('currentTool', evt.target.dataset.name);
    }
}
document.querySelector(".clear").onclick = function allClear(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
}
document.querySelector(".save").onclick = function save(){
    var imageName = prompt('Please enter image name');
    if (imageName){
        var canvasDataURL = canvas.toDataURL();
        var a = document.createElement('a');
        a.href = canvasDataURL;
        a.download = imageName || 'drawing';
        a.click();
    } else if (imageName == false) return save()
}
function handleInput (evt) {
    if (evt.target.id === 'select-size') {
        renderSystem ('brushSize', evt.target.value);
    }
    if (evt.target.id === 'select-color') {
        renderSystem ('currentColor', evt.target.value);
    }
}
function startDraw (evt) {
    if (system.currentTool === 'brush') {
        brush (evt);
    } else if(system.currentTool === 'spray'){
        spray(evt);
    } else if(system.currentTool === 'text'){
        textInput(evt);
    }
}
function endDraw () {
    canvas.onmousemove = null;
}
function brush (){
    canvas.onmousemove = function (e) {
        var x = e.offsetX;
        var y = e.offsetY;
        var dx = e.movementX;
        var dy = e.movementY;
        ctx.strokeStyle = system.currentColor;
        ctx.lineWidth = system.brushSize;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - dx, y - dy);
        ctx.stroke();
        ctx.closePath();
    }
}
function getRandomOffset() {
    var radius = system.brushSize / 2;
    var random_angle = Math.random() * (2*Math.PI);
    var random_radius = Math.random() * radius;
    return {
        x: Math.cos(random_angle) * random_radius,
        y: Math.sin(random_angle) * random_radius
    };
}
function spray(){
    canvas.onmousemove = function (evt) {
        ctx.fillStyle = system.currentColor;
        var density = 50;
        var x = evt.offsetX;
        var y = evt.offsetY;
        var dx = evt.movementX;
        var dy = evt.movementY;
        for (var i = 0; i < density; i++) {
            var offset = getRandomOffset(10);
            var x = x + offset.x;
            var y = y + offset.y;
            ctx.fillRect(x, y, 1, 1);
        }
    }
}
function textInput (evt) {
    var text = prompt("Text:", "");
    var x = evt.offsetX;
    var y = evt.offsetY;
    if (text) {
        ctx.font = Math.max(7, system.brushSize) + "px sans-serif";
        ctx.fillText(text, x, y);
    }
}
canvas.addEventListener ('mousemove', getCoordinates);
canvas.addEventListener ('mousedown', startDraw);
canvas.addEventListener ('mouseup', endDraw);
document.addEventListener ('click', handleClick);
document.addEventListener ('input', handleInput);
