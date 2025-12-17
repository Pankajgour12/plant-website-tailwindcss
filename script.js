const navMenu = document.getElementById('nav-menu')

const navlinks = document.querySelectorAll('.link')

const humburger = document.getElementById('humburger')

humburger.addEventListener('click', () => {
    navMenu.classList.toggle('left-[0]')
    humburger.classList.toggle('ri-close-large-line')

})

navlinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.toggle('left-[0]')
        humburger.classList.toggle('ri-close-large-line')
    })
})