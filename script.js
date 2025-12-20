
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














//? Swiper JS
const swiper = new Swiper('.swiper', {
  // Optional parameters
   speed:400,
   spaceBetween:30,
   autoplay:{
    delay:3000,
    disableOnInteraction:false
   },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true
  },
  grabCursor:true,
  breakpoints:{
    640:{
        slidesPerView:1},

    768:{
        slidesPerView:2},
    1024:{
        slidesPerView:3}
  ,
    }
 
});