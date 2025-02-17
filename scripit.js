let bright = document.getElementById('bright')
let body =  document.querySelector('body')

bright.addEventListener('click', ()=>{
    bright.classList.toggle('dark')
    body.classList.toggle('dark')
})
