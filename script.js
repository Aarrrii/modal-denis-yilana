let text = document.querySelector('#text')
let number = document.querySelector('#number')
let p = document.querySelector('p')
let img = document.querySelector('img')

document.querySelector('button').addEventListener('click', ()=>{
    if(number.value<30){
        p.innerHTML = `${text.value}, вы очень молоды`
        img.src = 'https://i.pinimg.com/236x/01/20/37/012037896d561cea5b8199c43b337fae.jpg'
    }
    else{
        p.innerHTML = `${text.value}, вы молоды`
        img.src = 'https://i.pinimg.com/236x/a3/07/6f/a3076f870a74c709d794ad478e8ada05.jpg'
    }
})