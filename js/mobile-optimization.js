// Mobile Optimization Script

// Detect device type
const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Detect if device prefers reduced motion
const prefersReducedMotion = () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Optimize animations based on device capabilities
if (prefersReducedMotion()) {
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
}

// Improve touch responsiveness
document.addEventListener('touchstart', function() {
    // Trigger active state immediately on touch
}, { passive: true });

// Prevent double-tap zoom on buttons and links
document.addEventListener('touchend', function(e) {
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
        e.preventDefault();
    }
}, { passive: false });

// Optimize image loading for mobile
if (isMobile()) {
    // Add loading="lazy" to all images if not already present
    document.querySelectorAll('img:not([loading])').forEach(img => {
        img.loading = 'lazy';
    });

    // Preload critical images
    const criticalImages = document.querySelectorAll('img[data-critical]');
    criticalImages.forEach(img => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = img.src;
        document.head.appendChild(link);
    });
}

// Improve scrolling performance
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // Scroll optimization logic here
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });

// Handle viewport changes
let lastWidth = window.innerWidth;
window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    if (Math.abs(newWidth - lastWidth) > 50) {
        lastWidth = newWidth;
        // Trigger layout recalculation if needed
    }
}, { passive: true });

// Optimize font loading
if ('fonts' in document) {
    document.fonts.ready.then(() => {
        document.documentElement.classList.add('fonts-loaded');
    });
}

// Detect connection speed and optimize accordingly
if ('connection' in navigator) {
    const connection = navigator.connection;
    const effectiveType = connection.effectiveType;

    if (effectiveType === '4g') {
        // Load high-quality assets
        document.documentElement.classList.add('high-speed');
    } else if (effectiveType === '3g' || effectiveType === '2g') {
        // Reduce animations and optimize for slow connection
        document.documentElement.classList.add('low-speed');
        document.querySelectorAll('[data-animation]').forEach(el => {
            el.style.animation = 'none';
        });
    }
}

// Improve form input experience on mobile
document.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('focus', function() {
        // Scroll input into view with some padding
        setTimeout(() => {
            this.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
    });
});

// Handle orientation change
window.addEventListener('orientationchange', () => {
    // Recalculate layout on orientation change
    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
    }, 100);
});

// Optimize touch feedback
document.addEventListener('touchstart', function(e) {
    if (e.target.closest('button, a, .tech-stack-item, .project-card')) {
        e.target.closest('button, a, .tech-stack-item, .project-card').classList.add('touch-active');
    }
}, { passive: true });

document.addEventListener('touchend', function(e) {
    if (e.target.closest('button, a, .tech-stack-item, .project-card')) {
        e.target.closest('button, a, .tech-stack-item, .project-card').classList.remove('touch-active');
    }
}, { passive: true });

// Prevent layout shift from scrollbar
const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
if (scrollbarWidth > 0) {
    document.documentElement.style.setProperty('--scrollbar-width', scrollbarWidth + 'px');
}

// Optimize for notched devices (iPhone X+)
if (CSS.supports('padding', 'max(0px)')) {
    const safeAreaInsetLeft = getComputedStyle(document.documentElement).getPropertyValue('env(safe-area-inset-left)');
    const safeAreaInsetRight = getComputedStyle(document.documentElement).getPropertyValue('env(safe-area-inset-right)');

    if (safeAreaInsetLeft || safeAreaInsetRight) {
        document.documentElement.classList.add('has-notch');
    }
}

// Log performance metrics on mobile
if (isMobile() && 'PerformanceObserver' in window) {
    try {
        const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
                console.log(`${entry.name}: ${entry.duration}ms`);
            }
        });
        observer.observe({ entryTypes: ['measure', 'navigation'] });
    } catch (e) {
        // Performance observer not supported
    }
}

console.log('Mobile optimization script loaded');
