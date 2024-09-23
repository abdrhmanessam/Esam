// Toggle Navigation Menu
const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelector('.nav-items');

hamburger.addEventListener('click', () => {
    navItems.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        
        // Scroll smoothly to the target section
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
        
        // Add 'active' class to the clicked link
        setActiveLink(this);
    });
});

// Highlight the active section in the navbar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-items a');

// Function to highlight active section
function highlightSection() {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
            currentSection = section.getAttribute('id');
        }
    });

    // Remove 'active' class from all nav links and add it to the current section link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
}

// Function to set the active link manually (for smooth scroll or hamburger clicks)
function setActiveLink(link) {
    navLinks.forEach(navLink => {
        navLink.classList.remove('active');
    });
    link.classList.add('active');
}

// Add scroll event listener to highlight the section as you scroll
window.addEventListener('scroll', highlightSection);

// On page load, check the active section
window.addEventListener('load', highlightSection);
