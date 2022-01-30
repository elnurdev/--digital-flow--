const open = document.querySelector('#open')
const popup = document.querySelector('.popup')
const close = document.querySelector('.close')

open.addEventListener('click', () => {
    popup.classList.add('show')
})

close.addEventListener('click', () => {
    popup.classList.remove('show')
})