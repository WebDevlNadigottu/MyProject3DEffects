// alert('Helo')
const container = document.querySelector('.container')
const card = document.querySelector('.card')
const img = document.querySelector('.imgbox img')
const title = document.querySelector('.desc h1')
const descTxt = document.querySelector('.desc h2')


container.addEventListener('mousemove', (mc) => {
    // console.log(mc.pageX, mc.pageY)  // means here it will show the x and y movement of cursor positon when we moove cursor on container
    let xAxis = (window.innerWidth/2 - mc.pageX) / 15
    let yAxis = (window.innerHeight/2 - mc.pageY) / 15

    // console.log(xAxis, yAxis);
    card.style.transform = `rotateX(${yAxis * (-1)}deg) rotateY(${xAxis}deg)`
    img.style.transform = `translateZ(180px) rotateX(${yAxis}deg)`
    title.style.transform = `translateZ(100px) rotateX(${yAxis}deg)`
    descTxt.style.transform = `translateZ(50px) rotateX(${yAxis}deg)`
})

//Mouse In
container.addEventListener('mouseenter', () => {
    card.style.transition = 'none'
})

//Mouse Out
container.addEventListener('mouseleave', () => {
    card.style.transition = 'all 0.5s ease'
    card.style.transform = 'rotateX(0deg) rotateY(0deg)'
    img.style.transform = 'translateZ(0px) rotateX(0deg)'
    title.style.transform = 'translateZ(0px) rotateX(0deg)'
    descTxt.style.transform = 'translateZ(0px) rotateX(0deg)'
})

// processor Bttons

const proButtons = document.querySelectorAll('.processor button')

proButtons.forEach((pro) => {
    
    pro.addEventListener('click', () => {
        removeActive()
        pro.classList.add('active')
    })
})

function removeActive(){
    proButtons.forEach((btn) => {
        btn.classList.remove('active')
    })
}
