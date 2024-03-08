const $ = document
const menu = $.querySelector('.navBar-menu ul')
const menuBtn = $.querySelector('.menu-icon')
const menuBtnIcon = $.querySelector('.menu-icon i')


menuBtn.addEventListener('click' , () => {
    if (menuBtnIcon.classList.contains('fa-bars') ) {
        menuBtnIcon.classList = 'fa fa-times'
        menu.style.left = '0'
    } else {
        menuBtnIcon.classList = 'fa fa-bars'
        menu.style.left = '-18rem'
    }
})