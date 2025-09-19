

// loader js
const loader = document.querySelector('.loader')

window.addEventListener('load', () => {
  loader.style.display = "none"
})


// navbar js
const dropdownItemElm = document.querySelectorAll('.main-nav .nav-item.dropdown');
const dropdownMenuElm = document.querySelectorAll('.main-nav .dropdown-menu');


for (let i = 0; i < dropdownItemElm.length; i++) {

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

document.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    mainNav.style.background = 'rgba(0, 0, 0, 0.7)'
    for (let i = 0; i < navLink.length; i++) {
      navLink[i].style.color = '#fff'
    }
  } else {
    mainNav.style.background = 'rgba(255, 255, 255, 0.3)'
  }
})



// testimonial swiper slider
new Swiper('.all-testimonial', {
  slidesPerView: 1,
  autoplay: {
    delay: 3000
  },
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
})



// Intersection Observer for animations
// const observerOptions = {
//   threshold: 0.1,
//   rootMargin: '0px 0px -50px 0px'
// };

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('visible');
//     }
//   });
// }, observerOptions);

// Observe all section cards
// document.querySelectorAll('.section-card').forEach(card => {
//   observer.observe(card);
// });

// Counter animation
// function animateCounter(element) {
//   const target = parseInt(element.getAttribute('data-target'));
//   const duration = 2000; // 2 seconds
//   const step = target / (duration / 16); // 60fps
//   let current = 0;

//   const updateCounter = () => {
//     current += step;
//     if (current < target) {
//       element.textContent = Math.floor(current);
//       requestAnimationFrame(updateCounter);
//     } else {
//       element.textContent = target;
//     }
//   };

//   updateCounter();
// }

// Counter observer
// const counterObserver = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       animateCounter(entry.target);
//       counterObserver.unobserve(entry.target);
//     }
//   });
// }, {
//   threshold: 0.5
// });

// document.querySelectorAll('.counter').forEach(counter => {
//   counterObserver.observe(counter);
// });

// Smooth scrolling for scroll indicator
// document.querySelector('.scroll-indicator').addEventListener('click', () => {
//   document.querySelector('.section-container').scrollIntoView({
//     behavior: 'smooth'
//   });
// });

// Add parallax effect to hero background
// window.addEventListener('scroll', () => {
//   const scrolled = window.pageYOffset;
//   const heroSection = document.querySelector('.hero-section');
//   const rate = scrolled * -0.5;

//   if (heroSection && scrolled < heroSection.offsetHeight) {
//     heroSection.style.transform = `translateY(${rate}px)`;
//   }
// });

// Add random floating animation to shapes
// document.querySelectorAll('.shape').forEach((shape, index) => {
//   setInterval(() => {
//     const randomX = Math.random() * 20 - 10;
//     const randomY = Math.random() * 20 - 10;
//     shape.style.transform = `translate(${randomX}px, ${randomY}px)`;
//   }, 3000 + index * 1000);
// });

// Add interactive hover effects for cards
// document.querySelectorAll('.section-card').forEach(card => {
//   card.addEventListener('mouseenter', function () {
//     this.style.transform = 'translateY(-15px) scale(1.02)';
//   });

//   card.addEventListener('mouseleave', function () {
//     this.style.transform = 'translateY(0) scale(1)';
//   });
// });

// venobox
new VenoBox({
  selector: ".my-image-link"
});
