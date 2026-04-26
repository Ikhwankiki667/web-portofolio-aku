// UIController Class - Handles all UI interactions
class UIController {
    constructor() {
        this.mobileMenuBtn = document.getElementById('mobile-menu-btn');
        this.mobileMenu = document.getElementById('mobile-menu');
        this.navLinks = document.querySelectorAll('nav a[href^="#"]');
        this.ctaButtons = document.querySelectorAll('button:not([type="submit"])');

        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupSmoothScroll();
        this.setupScrollEffects();
        this.setupCTAButtons();
        this.setupMobileOptimizations();
    }

    setupMobileOptimizations() {
        // Detect mobile device
        this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        if (this.isMobile) {
            // Add mobile class to body
            document.body.classList.add('is-mobile');

            // Setup lazy loading for images
            this.setupLazyLoading();

            // Optimize touch events
            this.setupTouchOptimizations();

            // Prevent zoom on double tap
            this.preventDoubleTabZoom();
        }
    }

    setupLazyLoading() {
        const images = document.querySelectorAll('img[loading="lazy"]');

        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        observer.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        }
    }

    setupTouchOptimizations() {
        // Add touch feedback to interactive elements
        const interactiveElements = document.querySelectorAll('button, a, .project-card, .skill-card, .tech-stack-item');

        interactiveElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.style.opacity = '0.7';
            }, { passive: true });

            element.addEventListener('touchend', function() {
                this.style.opacity = '1';
            }, { passive: true });

            element.addEventListener('touchcancel', function() {
                this.style.opacity = '1';
            }, { passive: true });
        });
    }

    preventDoubleTabZoom() {
        let lastTouchEnd = 0;
        document.addEventListener('touchend', (event) => {
            const now = Date.now();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        }, { passive: false });
    }

    setupThemeToggle() {
        // Check for saved theme preference or default to dark mode
        const currentTheme = localStorage.getItem('theme') || 'dark';

        if (currentTheme === 'light') {
            document.body.classList.add('light-mode');
            this.updateThemeIcons(true);
        }

        // Desktop theme toggle
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleTheme();
            });
        }

        // Mobile theme toggle
        if (this.themeToggleMobile) {
            this.themeToggleMobile.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleTheme();
            });
        }
    }

    toggleTheme() {
        document.body.classList.toggle('light-mode');
        const isLightMode = document.body.classList.contains('light-mode');

        // Save preference
        localStorage.setItem('theme', isLightMode ? 'light' : 'dark');

        // Update icons
        this.updateThemeIcons(isLightMode);
    }

    updateThemeIcons(isLightMode) {
        const sunIcon = document.getElementById('theme-icon-sun');
        const moonIcon = document.getElementById('theme-icon-moon');
        const sunIconMobile = document.getElementById('theme-icon-sun-mobile');
        const moonIconMobile = document.getElementById('theme-icon-moon-mobile');

        if (isLightMode) {
            sunIcon?.classList.remove('hidden');
            moonIcon?.classList.add('hidden');
            sunIconMobile?.classList.remove('hidden');
            moonIconMobile?.classList.add('hidden');
        } else {
            sunIcon?.classList.add('hidden');
            moonIcon?.classList.remove('hidden');
            sunIconMobile?.classList.add('hidden');
            moonIconMobile?.classList.remove('hidden');
        }
    }

    setupCTAButtons() {
        // Get only CTA buttons, not theme toggle or mobile menu buttons
        const ctaButtons = document.querySelectorAll('button:not([type="submit"]):not(#theme-toggle):not(#theme-toggle-mobile):not(#mobile-menu-btn)');

        ctaButtons.forEach(button => {
            const buttonText = button.textContent.trim();

            // Tombol "Hubungi Saya" atau "Hire Me"
            if (buttonText.includes('Hubungi') || buttonText.includes('Hire')) {
                button.addEventListener('click', () => {
                    this.scrollToContact();
                });
            }

            // Tombol "Mulai Sekarang" atau "Get Started"
            if (buttonText.includes('Mulai') || buttonText.includes('Get Started')) {
                button.addEventListener('click', () => {
                    this.scrollToAbout();
                });
            }
        });
    }

    scrollToContact() {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            const offsetTop = contactSection.offsetTop - 64;
            this.smoothScrollTo(offsetTop, 750);
        }
    }

    scrollToAbout() {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            const offsetTop = aboutSection.offsetTop - 64;
            this.smoothScrollTo(offsetTop, 750);
        }
    }

    smoothScrollTo(targetPosition, duration) {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    setupMobileMenu() {
        if (this.mobileMenuBtn && this.mobileMenu) {
            this.mobileMenuBtn.addEventListener('click', () => {
                this.toggleMobileMenu();
            });

            // Close mobile menu when clicking on a link
            const mobileLinks = this.mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    this.closeMobileMenu();
                });
            });
        }
    }

    toggleMobileMenu() {
        const isExpanded = this.mobileMenu.classList.toggle('hidden');
        this.mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
    }

    closeMobileMenu() {
        this.mobileMenu.classList.add('hidden');
        this.mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }

    setupSmoothScroll() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 64;
                    this.smoothScrollTo(offsetTop, 750);
                }
            });
        });
    }

    setupScrollEffects() {
        // Add scroll event listener for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observe all sections
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            observer.observe(section);
        });

        // Active nav link on scroll
        window.addEventListener('scroll', () => {
            this.updateActiveNavLink();
        });
    }

    updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`nav a[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                this.navLinks.forEach(link => link.classList.remove('text-orange-500'));
                if (navLink) {
                    navLink.classList.add('text-orange-500');
                }
            }
        });
    }
}

export default UIController;
