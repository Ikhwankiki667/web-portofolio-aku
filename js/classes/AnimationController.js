// AnimationController Class - Handles scroll animations and micro-interactions
class AnimationController {
    constructor() {
        this.init();
    }

    init() {
        this.setupScrollAnimations();
        this.setupCursorEffects();
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all elements with animate-on-scroll class
        document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-right').forEach(el => {
            observer.observe(el);
        });

        // Add stagger animation to project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });

        // Add stagger animation to learning cards
        const learningCards = document.querySelectorAll('.learning-card');
        learningCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.15}s`;
        });
    }

    setupCursorEffects() {
        // Add ripple effect on button clicks
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', (e) => {
                const ripple = document.createElement('span');
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple-effect');

                button.appendChild(ripple);

                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }
}

export default AnimationController;
