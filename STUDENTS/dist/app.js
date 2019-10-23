class Board {
    constructor() {
        this.boardEl = document.getElementById('myCanvas');
    }

    /**
     * Метод получает другие объекты, которые нужны ему
     * для работы.
     * @param {Settings} settings объект настроек
     */
    init(settings, status) {
        this.settings = settings;
        this.status = status;
    }

    /**
     * Метод отрисовывает поле для рисования CANVAS
     */
    renderBoard() {
        this.boardEl.innerHTML = '';
        let width = this.settings.canvasWidth;
        let height = this.settings.canvasHeight;
        this.boardEl.innerHTML = `<canvas id="canvas" width="${width}" height="${height}"></canvas>`;
    }

}
class Instruments {
    constructor() {
        this.c = document.getElementById('canvas');
        this.ctx = this.c.getContext("2d");
    }

    init(settings, status) {
        this.settings = settings;
        this.status = status;
    }

    /**
     *  Метод рисования карандашем
     */
    pencilInstrument(event) {
        this.instruments.ctx.fillStyle = this.settings.currentColor;
        let x = +this.status.statusEl.querySelector('#xCoord').innerText;
        let y = +this.status.statusEl.querySelector('#yCoord').innerText;
        this.instruments.ctx.fillRect(x, y, this.settings.brushSize, this.settings.brushSize);
    }

    brushInstrument(event) {
        this.instruments.ctx.lineWidth = this.settings.brushSize;
        this.instruments.ctx.strokeStyle = this.settings.currentColor;
        this.instruments.ctx.fillStyle = this.settings.currentColor;
        let x = +this.status.statusEl.querySelector('#xCoord').innerText;
        let y = +this.status.statusEl.querySelector('#yCoord').innerText;
        this.instruments.ctx.arc(x, y, this.settings.brushSize, 0, Math.PI*4);
        this.instruments.ctx.stroke();
    }
// // Линия
    lineStart(event) {
        this.ctx.beginPath();
        let x = +this.status.statusEl.querySelector('#xCoord').innerText;
        let y = +this.status.statusEl.querySelector('#yCoord').innerText;
        this.ctx.moveTo(x, y);
    }

    lineStop(event) {
        this.ctx.fillStyle = this.settings.currentColor;
        let x = +this.status.statusEl.querySelector('#xCoord').innerText;
        let y = +this.status.statusEl.querySelector('#yCoord').innerText;
        this.ctx.lineTo(x, y);
        this.ctx.lineWidth = this.settings.brushSize;
        this.ctx.strokeStyle = this.settings.currentColor;
        this.ctx.stroke();
    }

//
// // круг
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.arc(95, 50, 40, 0, 2 * Math.PI);
// ctx.stroke();
//
// //текст
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.font = "30px Arial";
// ctx.fillText("Hello World", 10, 50);
//
// //текст 2
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.font = "30px Arial";
// ctx.strokeText("Hello World", 20, 55);
//
// // градиент
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
//
// // Create gradient
// var grd = ctx.createLinearGradient(0, 0, 200, 0);
// grd.addColorStop(0, "red");
// grd.addColorStop(1, "white");
//
// // Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(10, 10, 150, 80);
//
// // груглый градиент
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
//
// // Create gradient
// var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
// grd.addColorStop(0, "red");
// grd.addColorStop(1, "white");
//
// // Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(10, 10, 150, 80);
//
// // вставляем картинку
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// var img = document.getElementById("scream");
// ctx.drawImage(img, 10, 10);
//
// // прямоугольник с заливкой
// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");
// ctx.fillStyle = "#FF0000";
// ctx.fillRect(0, 0, 150, 75);
//
// // получение координат
// function cnvs_getCoordinates(e)
// {
//     x=e.clientX;
//     y=e.clientY;
//     document.getElementById("xycoordinates").innerHTML="Coordinates: (" + x + "," + y + ")";
// }
//
// // очистка координат
// function cnvs_clearCoordinates()
// {
//     document.getElementById("xycoordinates").innerHTML="";
// }
//
// //цветной текст
// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");
// ctx.font = "30px Comic Sans MS";
// ctx.fillStyle = "red";
// ctx.textAlign = "center";
// ctx.fillText("Hello World", canvas.width/2, canvas.height/2);
//
//
// Colors, Styles, and Shadows
// Property	Description
// fillStyle	Sets or returns the color, gradient, or pattern used to fill the drawing
// strokeStyle	Sets or returns the color, gradient, or pattern used for strokes
//     shadowColor	Sets or returns the color to use for shadows
//     shadowBlur	Sets or returns the blur level for shadows
//     shadowOffsetX	Sets or returns the horizontal distance of the shadow from the shape
// shadowOffsetY	Sets or returns the vertical distance of the shadow from the shape

// Method	Description
// createLinearGradient()	Creates a linear gradient (to use on canvas content)
// createPattern()	Repeats a specified element in the specified direction
// createRadialGradient()	Creates a radial/circular gradient (to use on canvas content)
// addColorStop()	Specifies the colors and stop positions in a gradient object

// Line Styles
// Property	Description
// lineCap	Sets or returns the style of the end caps for a line
// lineJoin	Sets or returns the type of corner created, when two lines meet
// lineWidth	Sets or returns the current line width
// miterLimit	Sets or returns the maximum miter length

// Rectangles
// Method	Description
// rect()	Creates a rectangle
// fillRect()	Draws a "filled" rectangle
// strokeRect()	Draws a rectangle (no fill)
// clearRect()	Clears the specified pixels within a given rectangle
// Paths
// Method	Description
// fill()	Fills the current drawing (path)
// stroke()	Actually draws the path you have defined
// beginPath()	Begins a path, or resets the current path
// moveTo()	Moves the path to the specified point in the canvas, without creating a line
// closePath()	Creates a path from the current point back to the starting point
// lineTo()	Adds a new point and creates a line to that point from the last specified point in the canvas
// clip()	Clips a region of any shape and size from the original canvas
// quadraticCurveTo()	Creates a quadratic Bézier curve
// bezierCurveTo()	Creates a cubic Bézier curve
// arc()	Creates an arc/curve (used to create circles, or parts of circles)
// arcTo()	Creates an arc/curve between two tangents
// isPointInPath()	Returns true if the specified point is in the current path, otherwise false
// Transformations
// Method	Description
// scale()	Scales the current drawing bigger or smaller
// rotate()	Rotates the current drawing
// translate()	Remaps the (0,0) position on the canvas
// transform()	Replaces the current transformation matrix for the drawing
// setTransform()	Resets the current transform to the identity matrix. Then runs transform()
// Text
// Property	Description
// font	Sets or returns the current font properties for text content
// textAlign	Sets or returns the current alignment for text content
// textBaseline	Sets or returns the current text baseline used when drawing text
//
// Method	Description
// fillText()	Draws "filled" text on the canvas
// strokeText()	Draws text on the canvas (no fill)
// measureText()	Returns an object that contains the width of the specified text
// Image Drawing
// Method	Description
// drawImage()	Draws an image, canvas, or video onto the canvas
// Pixel Manipulation
// Property	Description
// width	Returns the width of an ImageData object
// height	Returns the height of an ImageData object
// data	Returns an object that contains image data of a specified ImageData object
//
// Method	Description
// createImageData()	Creates a new, blank ImageData object
// getImageData()	Returns an ImageData object that copies the pixel data for the specified rectangle on a canvas
// putImageData()	Puts the image data (from a specified ImageData object) back onto the canvas
// Compositing
// Property	Description
// globalAlpha	Sets or returns the current alpha or transparency value of the drawing
// globalCompositeOperation	Sets or returns how a new image are drawn onto an existing image
// Other
// Method	Description
// save()	Saves the state of the current context
// restore()	Returns previously saved path state and attributes
// createEvent()
// getContext()
// toDataURL()
}
"use strict";

window.addEventListener('load', () => {
    const settings = new Settings();
    const board = new Board();
    const menu = new Menu();
    const paint = new Paint();
    const status = new Status();

    settings.init({canvasWidth: 800, canvasHeight: 500});
    board.init(settings, status);
    status.init(settings);

    board.renderBoard();
    status.renderCoord();

    const instruments = new Instruments();
    instruments.init(settings, status);

    paint.init(settings, menu, board, instruments, status);

    paint.run();
});
class Menu {
    constructor() {
        this.pencilBtnEl = document.querySelector('pencilBtn');
    }

    /**
     * Метод назначает переданные функции в качестве обработчиков
     * собитий клика на кнопки "Карандаш"
     * @param {Function} pencilBtnClickHandler
     */
//     addButtonsClickListeners(pencilBtnClickHandler) {
//         this.pencilBtnEl.addEventListener('click', pencilBtnClickHandler);
//     }
}
class Paint {
    constructor() {
        this.paintEl = document.getElementById('paint');
    }

    init(settings, menu, board, instruments, status) {
        this.settings = settings;
        this.menu = menu;
        this.board = board;
        this.instruments = instruments;
        this.status = status;
    }

    /**
     * Метод назначает обработчик на события клика на кнопки
     */
    run() {
       //this.menu.addButtonsClickListeners(this.pencil.bind(this));
        this.board.boardEl.querySelector('#canvas').addEventListener('mousemove', this.getCoordinates.bind(this));
        this.board.boardEl.querySelector('#canvas').addEventListener('mouseout', this.coordinatesClear.bind(this));
        this.board.boardEl.querySelector('#canvas').addEventListener('mousedown', this.startDraw.bind(this));
        this.board.boardEl.querySelector('#canvas').addEventListener('mouseup', this.endDraw.bind(this));
        this.paintEl.addEventListener('click', this.handleClick.bind(this));
        this.paintEl.addEventListener('input', this.handleInput.bind(this));
    }


    getCoordinates(event) {
        this.status.statusEl.querySelector('#xCoord').innerText = event.offsetX;
        this.status.statusEl.querySelector('#yCoord').innerText = event.offsetY;
    }

    coordinatesClear() {
        this.status.statusEl.querySelector('#xCoord').innerText = '';
        this.status.statusEl.querySelector('#yCoord').innerText = '';
    }

    renderSystem(elem, act) {
        this.settings[elem] = act;
    }

    handleClick(event) {
        if (event.target.classList.contains('toolBtns')) {
            this.renderSystem('currentTool', event.target.dataset.name);
        }
    }

    handleInput(event) {
        if (event.target.id === 'sizeSelect') {
            this.renderSystem('brushSize', event.target.value);
        }
        if (event.target.id === 'colorSelect') {
            this.renderSystem('currentColor', event.target.value);
        }
    }

    startDraw(event) {
        if (this.settings.currentTool === 'pencilBtn') {
            this.board.boardEl.querySelector('#canvas').onmousemove = this.instruments.pencilInstrument.bind(this);
        }
        if (this.settings.currentTool === 'brushBtn') {
            this.board.boardEl.querySelector('#canvas').onmousemove = this.instruments.brushInstrument.bind(this);
        }
        if (this.settings.currentTool === 'lineBtn') {
            this.instruments.lineStart(event);
        }
    }

    endDraw(event) {
        this.board.boardEl.querySelector('#canvas').onmousemove = null;
        if (this.settings.currentTool === 'lineBtn') {
            this.instruments.lineStop(event);
        }
    }

}
class Settings {

    /**
     *
     * @param {Object} params - Параметры рисовального поля canvas
     * @param {} params.canvasWidth - ширина поля
     * @param {} params.canvasHeight - высота поля
     * @param {} params.currentTool - текущий инструмент
     * @param {} params.currentColor - текущий цвет
     * @param {} params.brushSize - размер кисти
     * @throws {Error} если переданы не верные настройки выдается
     * соответствующая ошибка в консоль
     */
    init (params) {
        let defaultParams = {
            canvasWidth: 1000,
            canvasHeight: 800,
            currentTool: null,
            currentColor: '#000',
            brushSize: 5,
        };
        Object.assign(defaultParams, params);


    if (defaultParams.canvasWidth < 300 || defaultParams.canvasWidth > 1200) {
        throw new Error('Неверные настройки, значение canvasWidth должно быть в диапазоне [300, 1200]');
    }
    this.canvasWidth = defaultParams.canvasWidth;

    if (defaultParams.canvasHeight < 200 || defaultParams.canvasHeight > 1000) {
        throw new Error('Неверные настройки, значение canvasHeigth должно быть в диапазоне [200, 1000]');
    }
    this.canvasHeight = defaultParams.canvasHeight;
    this.currentTool = defaultParams.currentTool;
    this.currentColor = defaultParams.currentColor;
    this.brushSize = defaultParams.brushSize;

    }
}
class Status {
    constructor() {
        this.statusEl = document.getElementById('status');
    }

    init(settings) {
        this.settings = settings;
    }

    renderCoord() {
        let coordEl = document.createElement('div');
        coordEl.classList.add('coordEl');
        coordEl.innerHTML = "<p id='x'><b>x: </b><span id='xCoord'></span></p>";
        coordEl.innerHTML += "<p id='y'><b>y: </b><span id='yCoord'></span></p>";
        this.statusEl.appendChild(coordEl);
    }

    renderSelect() {

    }

    renderBoardSize() {

    }

    renderZoom() {

    }
}
//# sourceMappingURL=maps/app.js.map
