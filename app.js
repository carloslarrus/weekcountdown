let body = document.querySelector('body')
let h1 = document.createElement('h1')
body.appendChild(h1)
h1.innerText = 'Welcome to Weekend Countdown!'
h1.style.display ='flex'
h1.style.justifyContent ='center'
h1.style.fontSize ='3rem'

let div1 = document.createElement('div')
body.appendChild(div1)
div1.innerText ='Please enter your name :)'
div1.style.display ='flex'
div1.style.justifyContent ='center'
div1.style.fontSize ='2rem'
div1.style.marginBottom ='100px'

let div3 = document.createElement('div')
body.appendChild(div3)
div3.style.display ='flex'
div3.style.justifyContent ='center'
div3.style.width ='500px'
div3.style.height ='200px'
div3.style.margin ='auto'
div3.innerHTML = ` <input type='text' id= 'input' /> <input type='button' id = 'button' value ='click me ' /> `

let input = document.getElementById('input')
input.style.border ='1px solid blue'
input.style.width ='50%'
input.style.height ='25%'

let button = document.getElementById('button')
button.style.border ='1px solid green'
button.style.width ='25%'
button.style.height ='27%'

button.addEventListener('click', () =>{ 
    let currentDate = new Date ()
   // Sunday - Saturday : 0 - 6
   let dayWeek = currentDate.getDay() 
   if(dayWeek === 0){
     dayWeek ='Sunday'
     div1.innerText = `Hi ${input.value}, today is ${dayWeek}. Happy Weekend!!!`
   }
    else if(dayWeek ===1){
        dayWeek = 'Monday'
        div1.innerText = `Hi ${input.value}, today is ${dayWeek}. You have to wait still ${5 - currentDate.getDay()} days for the weekend`

   }
    else if(dayWeek ===2){
       dayWeek ='Tuesday'
       div1.innerText = `Hi ${input.value}, today is ${dayWeek}. You have to wait still ${5 - currentDate.getDay() } days for the weekend`
   }
})



