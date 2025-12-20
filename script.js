
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



/* Scroll-Up */

const scrollup = ()=>{
    const scrollupbtn = document.getElementById('scroll-up');
    if(this.scrollY >=250) {
        scrollupbtn.classList.remove('-bottom-1/2');
        scrollupbtn.classList.add('bottom-4');
}else{
     scrollupbtn.classList.add('-bottom-1/2');
        scrollupbtn.classList.remove('bottom-4');
}
}
    



window.addEventListener('scroll', scrollup);













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