// variáveis
const openModalBtn = document.querySelector('#card-btn')
const cardContainer = document.querySelector('.card-container')
const closeBtn = document.querySelector('#close-btn')
const bodyContainer = document.querySelector('#body-container')
// eventos
openModalBtn.addEventListener('click', () =>{
    cardContainer.classList.remove('hide')
    bodyContainer.classList.add('true-hidden')
})
closeBtn.addEventListener('click', () =>{
    cardContainer.classList.add('hide')
    bodyContainer.classList.remove('true-hidden')
})