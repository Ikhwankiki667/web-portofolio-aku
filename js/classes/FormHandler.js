// FormHandler Class - Handles contact form validation and submission
import RateLimiter from './RateLimiter.js';

class FormHandler {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.rateLimiter = new RateLimiter();
        this.init();
    }

    init() {
        if (this.form) {
            this.setupFormSubmission();
            this.setupValidation();
            this.setupCaptcha();
            this.setupSubmitDelay();
        }
    }

    setupCaptcha() {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        this.captchaAnswer = num1 + num2;

        const captchaQuestion = document.getElementById('captcha-question');
        if (captchaQuestion) {
            captchaQuestion.textContent = `${num1} + ${num2}`;
        }
    }

    setupSubmitDelay() {
        const submitBtn = document.getElementById('submit-btn');
        const countdownSpan = document.getElementById('countdown');

        if (!submitBtn || !countdownSpan) return;

        let countdown = 3;
        const interval = setInterval(() => {
            countdown--;
            countdownSpan.textContent = countdown;

            if (countdown === 0) {
                clearInterval(interval);
                submitBtn.disabled = false;
                submitBtn.textContent = 'Kirim Pesan';
            }
        }, 1000);
    }

    setupFormSubmission() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();

            if (this.validateForm()) {
                this.submitForm();
            }
        });
    }

    setupValidation() {
        const inputs = this.form.querySelectorAll('input, textarea');

        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });

            input.addEventListener('input', () => {
                this.clearError(input);
            });
        });
    }

    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.getAttribute('name');
        let isValid = true;
        let errorMessage = '';

        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        }

        // Email validation
        if (fieldName === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }

        // Phone validation (optional but if filled, must be valid)
        if (fieldName === 'phone' && value) {
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            if (!phoneRegex.test(value) || value.length < 10) {
                isValid = false;
                errorMessage = 'Please enter a valid phone number';
            }
        }

        // Name validation
        if ((fieldName === 'firstName' || fieldName === 'lastName') && value) {
            if (value.length < 2) {
                isValid = false;
                errorMessage = 'Name must be at least 2 characters';
            }
        }

        if (!isValid) {
            this.showError(field, errorMessage);
        } else {
            this.clearError(field);
        }

        return isValid;
    }

    validateForm() {
        const inputs = this.form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });

        return isValid;
    }

    showError(field, message) {
        this.clearError(field);

        field.classList.add('border-2', 'border-red-500');
        field.setAttribute('aria-invalid', 'true');

        const errorDiv = document.createElement('div');
        errorDiv.className = 'text-red-500 text-sm mt-1 error-message';
        errorDiv.id = `${field.id}-error`;
        errorDiv.setAttribute('role', 'alert');
        errorDiv.textContent = message;

        field.setAttribute('aria-describedby', errorDiv.id);
        field.parentNode.insertBefore(errorDiv, field.nextSibling);
    }

    clearError(field) {
        field.classList.remove('border-2', 'border-red-500');
        field.removeAttribute('aria-invalid');
        field.removeAttribute('aria-describedby');

        const errorMessage = field.parentNode.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }

    submitForm() {
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData.entries());

        // Check honeypot field
        if (data.website) {
            // Bot detected - silently fail
            this.showErrorMessage('Terjadi kesalahan. Silakan coba lagi.');
            return;
        }

        // Check captcha
        const captchaInput = parseInt(data.captcha);
        if (captchaInput !== this.captchaAnswer) {
            this.showErrorMessage('Salah, ayok ngitung lagi semangat :P');
            // Reset captcha
            this.setupCaptcha();
            document.getElementById('captcha').value = '';
            return;
        }

        // Check rate limit
        const rateLimitCheck = this.rateLimiter.canSubmit();
        if (!rateLimitCheck.allowed) {
            this.showErrorMessage(`Kamu sudah mengirim terlalu banyak pesan. Coba lagi dalam ${rateLimitCheck.minutesLeft} menit.`);
            return;
        }

        // Basic spam detection
        const message = data.message.toLowerCase();
        const spamKeywords = ['viagra', 'casino', 'lottery', 'prize', 'click here', 'buy now', 'limited offer'];
        const hasSpam = spamKeywords.some(keyword => message.includes(keyword));

        if (hasSpam) {
            this.showErrorMessage('Pesan terdeteksi sebagai spam. Silakan kirim pesan yang valid.');
            return;
        }

        // Check message length (min 10 chars)
        if (data.message.trim().length < 10) {
            this.showErrorMessage('Pesan terlalu pendek. Minimal 10 karakter.');
            return;
        }

        // Check if EmailJS is loaded
        if (typeof emailjs === 'undefined') {
            this.showErrorMessage('EmailJS belum ter-load. Refresh halaman dan coba lagi.');
            return;
        }

        // Show loading state
        const submitButton = this.form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Mengirim...';

        // Send email using EmailJS
        const templateParams = {
            from_name: data.name || 'Anonymous',
            from_email: data.email,
            phone: data.phone || 'Tidak ada',
            message: data.message
        };

        // Send email using EmailJS
        emailjs.send('service_fhsoxcj', 'template_glxzpxu', templateParams)
            .then(() => {
                // Record successful submission
                this.rateLimiter.recordSubmission();

                // Show success message
                this.showSuccessMessage();
                // Reset form
                this.form.reset();
                // Reset captcha
                this.setupCaptcha();
                // Reset submit button delay
                this.setupSubmitDelay();
            })
            .catch((error) => {
                this.showErrorMessage('Gagal mengirim pesan. Silakan coba lagi.');
            })
            .finally(() => {
                // Reset button state
                submitButton.disabled = false;
                submitButton.textContent = originalText;
            });
    }

    showSuccessMessage() {
        const successDiv = document.createElement('div');
        successDiv.className = 'fixed top-20 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg z-50 animate-fade-in';
        successDiv.setAttribute('role', 'status');
        successDiv.setAttribute('aria-live', 'polite');
        successDiv.innerHTML = `
            <div class="flex items-center gap-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Pesan berhasil dikirim!</span>
            </div>
        `;

        document.body.appendChild(successDiv);

        // Remove after 3 seconds
        setTimeout(() => {
            successDiv.style.opacity = '0';
            successDiv.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                successDiv.remove();
            }, 500);
        }, 3000);
    }

    showErrorMessage(customMessage) {
        const message = customMessage || 'Gagal mengirim pesan. Silakan coba lagi.';
        const errorDiv = document.createElement('div');
        errorDiv.className = 'fixed top-20 right-4 bg-red-500 text-white px-6 py-4 rounded-lg shadow-lg z-50';
        errorDiv.setAttribute('role', 'alert');
        errorDiv.setAttribute('aria-live', 'assertive');
        errorDiv.innerHTML = `
            <div class="flex items-center gap-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <span>${message}</span>
            </div>
        `;

        document.body.appendChild(errorDiv);

        setTimeout(() => {
            errorDiv.style.opacity = '0';
            errorDiv.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                errorDiv.remove();
            }, 500);
        }, 3000);
    }
}

export default FormHandler;
