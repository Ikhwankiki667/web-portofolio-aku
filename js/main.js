// Main entry point
import UIController from './classes/UIController.js';
import FormHandler from './classes/FormHandler.js';
import ProjectHandler from './classes/ProjectHandler.js';
import AnimationController from './classes/AnimationController.js';
import NetworkAnimation from './classes/NetworkAnimation.js';

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
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
});
