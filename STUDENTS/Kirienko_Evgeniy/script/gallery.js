//let mainImg = document.querySelector('#main')
let roulette = document.querySelector('#roulette')
let wrapper = document.querySelector('#canv')
let i1 = 4

function gallery() {
    let number = 5
    let nodeStr = ''

    for (let i = 0; i <= number; i++) {
        nodeStr += `<img onclick="somefunc(${i})" src="img/${i}.jpg">`
       // nodeStr += `<img (${i})" src="img/${i}.jpg">`
        // console.log(i)
    }
    roulette.innerHTML = nodeStr


}

function somefunc(a) {
     
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height); 
    wrapper.style.backgroundImage= `url(img/${a}.jpg)`;
    console.log(a)
    console.log(nodeString)

}


gallery()