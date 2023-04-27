let heading = document.querySelector('h2')
let res = document.querySelector('.res')
let inc = document.querySelector('.inc')
let dec = document.querySelector('.dec')
let determinant = 0


function decrease(){
    determinant--
    heading.innerText = determinant
    document.body.style.backgroundColor = 'red'
}

dec.addEventListener('click', decrease)

function increase(){
    determinant++
    heading.innerText = determinant
    document.body.style.backgroundColor = 'green'
}

inc.addEventListener('click', increase)

function reset(){
    determinant = 0
    heading.innerText = determinant
    document.body.style.backgroundColor = 'yellow'
}

res.addEventListener('click', reset)