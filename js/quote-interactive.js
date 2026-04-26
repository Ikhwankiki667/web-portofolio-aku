// Quote Card Interactive Script
document.addEventListener('DOMContentLoaded', function() {
    const quoteCard = document.getElementById('quote-card');

    if (quoteCard) {
        quoteCard.addEventListener('click', function() {
            showQuoteNotification();
        });
    }

    function showQuoteNotification() {
        // Remove existing toast if any
        const existingToast = document.querySelector('.toast-notification');
        if (existingToast) {
            existingToast.remove();
        }

        // Create toast notification
        const toast = document.createElement('div');
        toast.className = 'toast-notification show';
        toast.innerHTML = `
            <div class="toast-title">
                <span class="toast-emoji">💕</span>Crush aku yang bilang gitu sih
            </div>
            <div class="toast-message">
                Dia orang yang bijak dan selalu kasih motivasi. Quotes-nya selalu bikin aku semangat lagi! 🥰
            </div>
        `;

        document.body.appendChild(toast);

        // Auto remove after 5 seconds
        setTimeout(function() {
            toast.classList.remove('show');
            toast.classList.add('hide');
            setTimeout(function() {
                toast.remove();
            }, 400);
        }, 5000);

        // Add click to close
        toast.addEventListener('click', function() {
            toast.classList.remove('show');
            toast.classList.add('hide');
            setTimeout(function() {
                toast.remove();
            }, 400);
        });
    }
});

console.log('Quote interactive script loaded');
