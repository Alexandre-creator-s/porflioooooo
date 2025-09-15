// Smooth scroll for menu links
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior

        const targetId = this.getAttribute('href'); // Get the href attribute
        const targetSection = document.querySelector(targetId); // Find the section by ID

        // Scroll to the target section smoothly
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Highlight active section in the menu
const sections = document.querySelectorAll('section');
const menuLinks = document.querySelectorAll('.menu-link');

window.addEventListener('scroll', () => {
    let currentSection = '';

    // Find the section currently in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });

    // Highlight the corresponding menu link
    menuLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });

});



// Carrousel infini + autoplay
document.querySelectorAll(".carousel").forEach(carousel => {
  const track = carousel.querySelector(".carousel-track");
  const prev = carousel.querySelector(".prev");
  const next = carousel.querySelector(".next");

  function nextSlide() {
    track.appendChild(track.firstElementChild);
  }

  function prevSlide() {
    track.prepend(track.lastElementChild);
  }

  next.addEventListener("click", nextSlide);
  prev.addEventListener("click", prevSlide);

  // autoplay toutes les 3 secondes
  setInterval(nextSlide, 3000);
});
