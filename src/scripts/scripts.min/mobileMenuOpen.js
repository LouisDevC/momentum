const mobileMenu = document.querySelector("#mobile-menu")
const options = document.querySelector(".navigation")
const socialMedias = document.querySelector(".social-medias")

mobileMenu.addEventListener('click', () =>{
    mobileMenu.classList.toggle('fa-bars')
    mobileMenu.classList.toggle('fa-xmark')
    if(mobileMenu.classList.contains('fa-xmark')){
        options.style.display = 'flex'
        socialMedias.style.display = 'flex'
    }else if(mobileMenu.classList.contains("fa-bars")){
        options.style.display = 'none'
        socialMedias.style.display = 'none'
    }
})