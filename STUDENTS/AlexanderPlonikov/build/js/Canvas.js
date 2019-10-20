



    contDinPage.className = 'canvas'

   // d.querySelector('.lessonConvas').classList.add('lessonConvasON')
    const canv = d.querySelector('.canv')
    ctx = canv.getContext('2d')

    let canvas = {
        flag: 0,
        startX: canv.addEventListener('mousemove', (evt) => { evt.offsetX }),
        startY: canv.addEventListener('mousemove', (evt) => { evt.offsetY }),
        thickness: () => d.querySelector('.range').value,
        color: () => d.querySelector('.color').value,
        workmove() {
            canv.addEventListener('mousemove', (evt) => {
                x = evt.offsetX
                y = evt.offsetY
                d.querySelector('#x').innerText = x
                d.querySelector('#y').innerText = y

            })
        },
        range: {
            val: d.querySelector('.range').value,
            createR: function () {
                d.querySelector('.range').value = 20

                d.querySelector('.range').oninput = () => {
                    let pole = d.querySelector('.minAndMax')
                    pole.innerText = d.querySelector('.range').value + ' px'
                }
            }
        },
        pancil() {
            canv.addEventListener('mousedown', (evt) => {
                canv.onmousemove = (evt) => {
                    if (this.flag === 1) {
                        ctx.beginPath()
                        ctx.strokeStyle = this.color()
                        ctx.moveTo(this.startX, this.startY)
                        ctx.lineCap = 'round';
                        x = evt.offsetX
                        y = evt.offsetY
                        ctx.lineTo(x, y)
                        ctx.lineWidth = this.thickness(),
                            ctx.stroke();
                        ctx.fillStyle = this.color()
                        ctx.arc(x, y, this.thickness() / 2, 0, Math.PI * 2, true)
                        ctx.fill()
                        ctx.closePath()
                        this.startX = x
                        this.startY = y
                    }
                }
            })
            canv.addEventListener('mouseup', () => {
                if (this.flag === 1) {
                    canv.onmousemove = null
                    this.startX = canv.addEventListener('mousemove', (evt) => { evt.offsetX })
                    this.startY = canv.addEventListener('mousemove', (evt) => { evt.offsetY })
                }
            })

        },
        line() {
            d.addEventListener("keydown", evt => {
                if (evt.key === 'Control') {
                    canv.onclick = (evt) => {
                        if (this.flag === 3) {
                            ctx.lineWidth = this.thickness()
                            ctx.beginPath()
                            ctx.moveTo(this.startX, this.startY)
                            ctx.lineCap = 'round';
                            x = evt.offsetX
                            y = evt.offsetY
                            ctx.lineTo(x, y)
                            ctx.strokeStyle = this.color()
                            ctx.stroke();
                            ctx.closePath()
                            this.startX = x
                            this.startY = y
                        }
                    }
                }
            })
            d.addEventListener("keyup", (evt) => {
                if (this.flag === 3) {
                    canv.onclick = null
                    this.startX = canv.addEventListener('mousemove', (evt) => { evt.offsetX })
                    this.startY = canv.addEventListener('mousemove', (evt) => { evt.offsetY })
                }
            })
        },
        lastik() {
            canv.addEventListener('mousedown', () => {
                canv.onmousemove = (evt) => {
                    if (this.flag === 2) {
                    x = evt.offsetX
                    y = evt.offsetY
                    ctx.fillStyle = '#fff'
                    ctx.beginPath()
                    ctx.arc(x, y, this.thickness(), 0, Math.PI * 2, true)
                    ctx.fill()
                    ctx.closePath()
                    }
                }
            })
            canv.addEventListener('mouseup', () => {
                canv.onmousemove = null
            })
        },
        text() {
            d.querySelector("#text").className = 'texttON'
            d.querySelector("#text").value = ''
            canv.addEventListener('click', (evt) => {
                if (this.flag === 4) {
                    d.querySelector("#text").className = 'textt'
                    ctx.font = `${this.thickness()}px serif`
                    ctx.fillStyle = this.color()
                    ctx.fillText(d.querySelector("#text").value, evt.offsetX, evt.offsetY);

                }
            })
        },
        clean() {
          
            ctx.clearRect(0, 0, 1200, 650);
            
        },
        save() {
            d.querySelector('.tools__save').href = canv.toDataURL("image/png")
        },
        workClick() {
            d.querySelector('.tools').addEventListener('click', (evt) => {
                if (evt.target.dataset['tools'] === 'pencil') {
                    this.pancil()
                    this.flag = 1
                }
                if (evt.target.dataset['tools'] === 'lastik') {
                    this.lastik()
                    this.flag = 2
                }
                if (evt.target.dataset['tools'] === 'line') {
                    this.line()
                    this.flag = 3
                }
                if (evt.target.dataset['tools'] === 'text') {
                    this.text()
                    this.flag = 4
                }
                if (evt.target.dataset['tools'] === 'clean') {
                    this.clean()
                    this.flag = 5
                }
                if (evt.target.dataset['tools'] === 'save') {
                    this.save()
                    this.flag = 6
                }
            })
        }


    }

    canvas.range.createR()
    canvas.workmove()
    canvas.workClick()




