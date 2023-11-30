const navSlide = () => {
    
    const burger = document.querySelector('.mobile');
    const navItem = document.querySelector('.navlinks');
    const navLinks = document.querySelectorAll('.navlinks div')
burger.addEventListener('click' , () => {
    navItem.classList.toggle('nav-active')
     navLinks.forEach((link, index) => {
       if (link.style.animation) {
         link.style.animation = "";
       } else {
         link.style.animation = `navLinkFade 0.5s ease forwards ${
           index / 7 + 1.7
         }s`;
       }
     });
});

}
navSlide();