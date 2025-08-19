// navbar js
const dropdownItemElm = document.querySelectorAll('.main-nav .nav-item.dropdown');
const dropdownMenuElm = document.querySelectorAll('.main-nav .dropdown-menu');


for(let i = 0; i < dropdownItemElm.length; i++){

  // Show dropdown on mouse enter
  dropdownItemElm[i].addEventListener('mouseenter', () => {
    dropdownMenuElm[i].classList.add('show');
  });
  
  // Keep dropdown open when mouse is over the menu
  dropdownMenuElm[i].addEventListener('mouseenter', () => {
    dropdownMenuElm[i].classList.add('show');
  });
  
  // Hide dropdown when mouse leaves both button and menu
  dropdownItemElm[i].addEventListener('mouseleave', () => {
    dropdownMenuElm[i].classList.remove('show');
  });
  dropdownMenuElm[i].addEventListener('mouseleave', () => {
    dropdownMenuElm[i].classList.remove('show');
  });

}


// hero slider on homepage
const slider = document.querySelector('.hero-slider-list');

function activate(e) {
  const items = document.querySelectorAll('.hero-slide');

  if (e.target.matches('.hero-slider-nav .next')) {
    slider.append(items[0]); // move first slide to the end
  }

  if (e.target.matches('.hero-slider-nav .prev')) {
    slider.prepend(items[items.length - 1]); // move last slide to the start
  }
}

document.addEventListener('click', activate, false);


// gsap start

// nav js start
const mainNav = document.querySelector('.main-nav')
const navLink = document.querySelectorAll('.main-nav .nav-link')

document.addEventListener('scroll', ()=>{
  if(window.scrollY > 400){
    mainNav.style.background = 'rgba(0, 0, 0, 0.7)'
    for(let i = 0; i < navLink.length; i++){
      navLink[i].style.color = '#fff'
    }
  }else{
    mainNav.style.background = 'rgba(255, 255, 255, 0.3)'
  }
})



// testimonial swiper slider
new Swiper('.all-testimonial', {
  slidesPerView: 1,
  autoplay: {
    delay: 3000
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})