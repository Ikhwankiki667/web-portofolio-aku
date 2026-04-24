// FooterController Class - Handles dynamic footer content
class FooterController {
    constructor() {
        this.init();
    }

    init() {
        this.updateCopyrightYear();
    }

    updateCopyrightYear() {
        const currentYear = new Date().getFullYear();
        const copyrightElements = document.querySelectorAll('footer p');

        copyrightElements.forEach(element => {
            if (element.textContent.includes('©')) {
                element.innerHTML = `&copy; ${currentYear} Muhammad Ikhwan. Made with &lt;3.`;
            }
        });
    }
}

export default FooterController;
