// ProjectHandler Class - Handles project button clicks
class ProjectHandler {
    constructor() {
        this.projects = [
            {
                name: 'Dashboard Analitik Marketing',
                github: null,
                demo: null
            },
            {
                name: 'FaultSense: Predictive Maintenance System',
                github: null,
                demo: null
            },
            {
                name: 'DIGI-SOV: Digital Green Sovereignty',
                github: null,
                demo: null
            },
            {
                name: 'Credit Risk Classifier',
                github: 'https://github.com/Ikhwankiki667/CREDIT-RISK-CLASSIFIER',
                demo: null
            },
            {
                name: 'DS Career Analytics Dashboard',
                github: 'https://github.com/Ikhwankiki667/DS-Career-Analytics-Dashboard',
                demo: null
            }
        ];

        this.init();
    }

    init() {
        this.setupProjectButtons();
    }

    setupProjectButtons() {
        const projectCards = document.querySelectorAll('.project-card');

        projectCards.forEach((card, index) => {
            const buttons = card.querySelectorAll('button');

            if (buttons.length > 0 && this.projects[index]) {
                // First button is always "Kode" (GitHub)
                buttons[0].addEventListener('click', () => {
                    this.openLink(this.projects[index].github, 'GitHub');
                });

                // Second button (if exists) is "Demo"
                if (buttons.length > 1) {
                    buttons[1].addEventListener('click', () => {
                        this.openLink(this.projects[index].demo, 'Demo');
                    });
                }
            }
        });
    }

    openLink(url, type) {
        // Check if URL exists
        if (!url) {
            this.showPlaceholderMessage(type);
        } else {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    }

    showPlaceholderMessage(type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'fixed top-20 right-4 bg-yellow-500 text-white px-6 py-4 rounded-lg shadow-lg z-50';
        messageDiv.setAttribute('role', 'alert');
        messageDiv.innerHTML = `
            <div class="flex items-center gap-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>${type} link belum tersedia. Admin masih belom bikin</span>
            </div>
        `;

        document.body.appendChild(messageDiv);

        setTimeout(() => {
            messageDiv.style.opacity = '0';
            messageDiv.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                messageDiv.remove();
            }, 500);
        }, 3000);
    }
}

export default ProjectHandler;
