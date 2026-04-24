// Main entry point
import UIController from './classes/UIController.js';
import FormHandler from './classes/FormHandler.js';
import ProjectHandler from './classes/ProjectHandler.js';
import AnimationController from './classes/AnimationController.js';
import NetworkAnimation from './classes/NetworkAnimation.js';
import FooterController from './classes/FooterController.js';

// Preload pages on hover
function preloadPage(url) {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
}

// Smooth page transitions with preloading
function initPageTransitions() {
    const pages = ['home.html', 'about.html', 'projects.html', 'skills.html', 'certificates.html', 'contact.html'];

    // Add smooth transition to all internal links
    document.querySelectorAll('a[href^="home.html"], a[href^="about.html"], a[href^="projects.html"], a[href^="skills.html"], a[href^="certificates.html"], a[href^="contact.html"]').forEach(link => {
        // Preload on hover
        link.addEventListener('mouseenter', () => {
            const href = link.getAttribute('href');
            preloadPage(href);
        });

        // Instant navigation without animation
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            window.location.href = href;
        });
    });

    // Preload all pages on idle
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            pages.forEach(page => preloadPage(page));
        });
    } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
            pages.forEach(page => preloadPage(page));
        }, 2000);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize smooth page transitions
    initPageTransitions();

    // Easter Egg - Console Message
    console.log('%cEASTER EGG FOUND!', 'color: #10b981; font-size: 20px; font-weight: bold;');
    console.log('%cAslinya aku mau masuk ITS, cuman gak keterima aaokwokoakwok 😂', 'color: #84cc16; font-size: 16px;');
    console.log('%cTapi Alhamdulillah sekarang di PENS', 'color: #10b981; font-size: 14px;');

    // Easter Egg - Logo Click Counter
    let clickCount = 0;
    const logo = document.querySelector('nav .text-2xl');
    if (logo) {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', () => {
            clickCount++;
            if (clickCount === 5) {
                alert('EASTER EGG!\n\nAslinya aku mau masuk ITS, cuman gak keterima aaokwokoakwok 😂\n\nTapi Alhamdulillah sekarang di PENS');
                clickCount = 0;
            }
        });
    }

    // Instantiate UI Controller
    const uiController = new UIController();

    // Instantiate Form Handler
    const formHandler = new FormHandler('contact-form');

    // Instantiate Project Handler
    const projectHandler = new ProjectHandler();

    // Instantiate Animation Controller
    const animationController = new AnimationController();

    // Instantiate Network Animation
    const networkAnimation = new NetworkAnimation();

    // Instantiate Footer Controller
    const footerController = new FooterController();
});
