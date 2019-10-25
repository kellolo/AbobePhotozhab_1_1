const doc = document

var canvas = document.getElementById('canv');
var ctx = canvas.getContext('2d'); //Метод HTMLCanvasElement.getContext() возвращает контекст рисования на холсте



let system = {
    currentTool: null,
    currentColor: '#000',
    brushSize: 1
}




/*function resize_canvas(){
   
    if (canv.width  < window.innerWidth)
    {
        canv.width  = window.innerWidth;
    }

    if (canv.height < window.innerHeight)
    {
        canv.height = window.innerHeight;
    }
} */




function getCoordinates(evt) {
    doc.querySelector('#x-coord').innerText = evt.offsetX
    doc.querySelector('#y-coord').innerText = evt.offsetY
} ////Свойство MouseEvent.offsetX, доступное только для чтения, показывает отступ курсора мыши по оси X от края целевого DOM узла.

function renderSystem(elem, act) {
    system[elem] = act
}

function handleClick(evt) {
    if (evt.target.classList.contains('tool-button')) {
        renderSystem('currentTool', evt.target.dataset.name)
        //console.log (evt.target.dataset.name)
        doc.querySelector('#car-tool').innerText = evt.target.dataset.name
    }
  

    
}






function handleInput(evt) {
    if (evt.target.id === 'select-size') {
        renderSystem('brushSize', evt.target.value)
        // console.log ('size ' + evt.target.value)
    }
    if (evt.target.id === 'select-color') {
        renderSystem('currentColor', evt.target.value)
        // console.log ('color ' + evt.target.value)
    }
}

function startDraw(evt) {


    if (system.currentTool === 'notebrush') {
        notebrush(evt)
    }

    if (system.currentTool === 'erase') {
        erase(evt)
    }


    if (system.currentTool === 'pencil') {
        pencil(evt)
    }




    console.log(system.currentTool)
}

function endDraw() {
    canvas.onmousemove = null
}

//add Tool

function pencil() {
    canvas.onmousemove = function () {
        let x = +doc.querySelector('#x-coord').innerText
        let y = +doc.querySelector('#y-coord').innerText
        ctx.fillStyle = system.currentColor
        ctx.fillRect(x, y, system.brushSize, system.brushSize)
    }
}


function erase() {
   
   // context.canvas.width = context.canvas.width;
   // context.clearRect(0, 0, canvas.width, canvas.height);
   
     canvas.onmousemove = function () {
        let x = +doc.querySelector('#x-coord').innerText
        let y = +doc.querySelector('#y-coord').innerText
        ctx.fillStyle = 'white';
        ctx.fillRect(x, y, system.brushSize, system.brushSize)
        
    
    
    
    
    }
}

function notebrush() {
    canvas.onmousemove = function () {
        let x = +doc.querySelector('#x-coord').innerText
        let y = +doc.querySelector('#y-coord').innerText

        ctx.fillStyle = system.currentColor
        ctx.beginPath();
        ctx.ellipse(x, y, system.brushSize, system.brushSize, Math.PI / 4, 0, 2 * Math.PI);
        ctx.fill();
        ctx.strokeStyle = "#FF0000";
        //ctx.stroke();

        // moveTo(x,y);
    }
    /*  ctx.ellipse(x, y, system.brushSize, system.brushSize, Math.PI / 4, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = system.currentColor
        //ctx.fillRect (x, y, system.brushSize, system.brushSize)
         
    }*/
}

function download(){
    var download = document.getElementById("download");
    var image = document.getElementById("canv").toDataURL("image/png")
                .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);

}



canvas.addEventListener('mousemove', getCoordinates)
canvas.addEventListener('mousedown', startDraw)
canvas.addEventListener('mouseup', endDraw)
doc.addEventListener('click', handleClick)
doc.addEventListener('input', handleInput);








//document.body.appendChild(link);

/*function save(evt) {
    if (evt.target.classList.contains('save')) {
        renderSystem('currentTool', evt.target.dataset.name)
        //console.log (evt.target.dataset.name)
        doc.querySelector('#car-tool').innerText = evt.target.dataset.name
    }
}*/


//курсор 
/*canvas.addEventListener('mouseover',function(e){
    doc.querySelector('#cursor').style.display = 'block';

    canvas.addEventListener('mousemove',cMove,false);
    function cMove(e){
        doc.querySelector('#cursor').style.width = system.brushSize*3+'px';
        doc.querySelector('#cursor').style.height = system.brushSize*3+'px';        
       doc.querySelector('#cursor').style.left = e.pageX;
        doc.querySelector('#cursor').style.top = e.pageY;
      // doc.querySelector ('#x-coord').innerText = evt.offsetX  
   // doc.querySelector ('#y-coord').innerText = evt.offsetY
   // let x = +doc.querySelector ('#x-coord').innerText
   //     let y = +doc.querySelector ('#y-coord').innerText
    }    
},false);*/







//https://developer.mozilla.org/ru/docs/Web/API/Canvas_API/Tutorial/%D0%A0%D0%B8%D1%81%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5_%D1%84%D0%B8%D0%B3%D1%83%D1%80

//https://developer.mozilla.org/ru/docs/Web/API/CanvasRenderingContext2D/fill

//https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/ellipse

//http://jsfiddle.net/Symphony/zercsv0h/embedded


//https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event
// https://filosophy.org/code/using-html5-canvas-to-make-a-generative-background/
// https://jsfiddle.net/codepo8/V6ufG/2/



