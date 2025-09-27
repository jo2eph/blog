// Scroll to Top
const jumpToTopButton = document.getElementById('jump-to-top');

function scrollToTop() {
    window.scrollTo(
        { top: 0, 
          behavior: 'smooth' }
    );
}

jumpToTopButton.addEventListener('click', scrollToTop);
