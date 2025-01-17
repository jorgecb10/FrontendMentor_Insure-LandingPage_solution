document.addEventListener("DOMContentLoaded", () => {
    console.log('documento listo');

    const menu = document.querySelector('.header__menu')
    const iconoMenu = document.querySelector('.header__icono-menu')
    const body = document.querySelector('body')

    iconoMenu.addEventListener('click', () => {
        const img = iconoMenu

        if(img.src.includes('icon-hamburger.svg')) {
            img.src = './img/icon-close.svg'
        } else {
            img.src ='./img/icon-hamburger.svg'
        }

        menu.classList.toggle('header__menu-visible')  
        body.classList.toggle('body')
    }) 
})