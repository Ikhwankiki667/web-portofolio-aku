// TechStackController Class - Handles tech stack interactions
class TechStackController {
    constructor() {
        this.techStackItems = document.querySelectorAll('.tech-stack-item');
        this.modal = null;
        this.techDescriptions = {
            'Python': {
                title: 'Python',
                description: 'Bahasa pemrograman yang mudah dipelajari dan serbaguna. Bayangkan Python seperti bahasa Inggris-nya komputer - mudah dibaca dan dipahami. Dipakai untuk analisis data, AI, web development, dan hampir semua hal di dunia teknologi.',
                usedFor: ['Analisis Data', 'Machine Learning', 'Automation', 'Web Development'],
                icon: '🐍'
            },
            'TensorFlow': {
                title: 'TensorFlow',
                description: 'Library untuk bikin AI dan machine learning. Ini kayak toolkit lengkap buat ngajarin komputer belajar dari data. Misalnya buat bikin sistem yang bisa mengenali wajah atau memprediksi harga saham.',
                usedFor: ['Deep Learning', 'Neural Networks', 'Image Recognition', 'AI Models'],
                icon: '🧠'
            },
            'Pandas': {
                title: 'Pandas',
                description: 'Tools Python buat ngolah data dalam bentuk tabel (kayak Excel tapi lebih powerful). Bayangin kamu punya data ribuan baris, Pandas bisa bantu kamu filter, sort, dan analisis dengan cepat.',
                usedFor: ['Data Cleaning', 'Data Analysis', 'Data Manipulation', 'CSV/Excel Processing'],
                icon: '📊'
            },
            'Figma': {
                title: 'Figma',
                description: 'Aplikasi desain untuk bikin tampilan website dan aplikasi. Kayak Photoshop tapi khusus buat desain UI/UX. Bisa kolaborasi real-time sama tim, jadi semua orang bisa liat dan edit desain bareng-bareng.',
                usedFor: ['UI Design', 'Prototyping', 'Wireframing', 'Design Collaboration'],
                icon: '🎨'
            },
            'Scikit-learn': {
                title: 'Scikit-learn',
                description: 'Library Python buat machine learning yang user-friendly. Ini kayak kumpulan resep siap pakai buat bikin model prediksi - dari prediksi harga rumah sampai klasifikasi email spam.',
                usedFor: ['Classification', 'Regression', 'Clustering', 'Data Mining'],
                icon: '🤖'
            },
            'Git': {
                title: 'Git',
                description: 'Sistem kontrol versi - kayak "time machine" buat kode. Bisa nyimpen history semua perubahan kode, jadi kalau ada yang salah bisa balik ke versi sebelumnya. Wajib banget buat programmer!',
                usedFor: ['Version Control', 'Code Collaboration', 'Project Management', 'Backup'],
                icon: '📝'
            },
            'Jupyter': {
                title: 'Jupyter Notebook',
                description: 'Aplikasi buat nulis dan jalanin kode Python secara interaktif. Cocok banget buat eksperimen data science karena bisa liat hasil kode langsung, plus bisa tambahin catatan dan visualisasi.',
                usedFor: ['Data Analysis', 'Experimentation', 'Documentation', 'Teaching'],
                icon: '📓'
            },
            'VS Code': {
                title: 'Visual Studio Code',
                description: 'Text editor favorit programmer di seluruh dunia. Ringan, cepat, dan punya ribuan extension. Kayak Microsoft Word-nya programmer, tapi jauh lebih canggih dan bisa untuk semua bahasa pemrograman.',
                usedFor: ['Code Editing', 'Debugging', 'Git Integration', 'Multi-language Support'],
                icon: '💻'
            },
            'Tableau': {
                title: 'Tableau',
                description: 'Software visualisasi data yang powerful. Bisa bikin dashboard dan grafik interaktif yang keren dari data mentah. Cocok buat presentasi data ke orang non-teknis karena visualnya mudah dipahami.',
                usedFor: ['Data Visualization', 'Dashboard Creation', 'Business Intelligence', 'Reporting'],
                icon: '📈'
            },
            'Colab': {
                title: 'Google Colab',
                description: 'Jupyter Notebook versi online dari Google. Gratis dan bisa pakai GPU/TPU buat training model AI. Gak perlu install apa-apa, tinggal buka browser langsung bisa coding Python.',
                usedFor: ['Machine Learning', 'Data Science', 'GPU Computing', 'Collaboration'],
                icon: '☁️'
            },
            'NumPy': {
                title: 'NumPy',
                description: 'Library Python buat komputasi numerik dan operasi matematika. Ini fondasi dari hampir semua library data science. Bisa handle array dan matrix dengan super cepat - ribuan kali lebih cepat dari Python biasa.',
                usedFor: ['Mathematical Operations', 'Array Processing', 'Linear Algebra', 'Scientific Computing'],
                icon: '🔢'
            },
            'Matplotlib': {
                title: 'Matplotlib',
                description: 'Library Python buat bikin grafik dan visualisasi data. Dari line chart sederhana sampai visualisasi kompleks, semua bisa. Kayak Excel chart tapi lebih fleksibel dan bisa dikustomisasi sesuai keinginan.',
                usedFor: ['Data Visualization', 'Plotting', 'Charts & Graphs', 'Scientific Visualization'],
                icon: '📉'
            }
        };

        this.init();
    }

    init() {
        this.createModal();
        this.setupEventListeners();
    }

    createModal() {
        // Create modal element
        const modalHTML = `
            <div id="tech-stack-modal" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 hidden flex items-center justify-center p-4">
                <div class="bg-[#111827] border-2 border-blue-500/40 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
                    <button id="close-modal" class="absolute top-4 right-4 text-gray-400 hover:text-blue-500 transition">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <div id="modal-content" class="p-8">
                        <!-- Content will be injected here -->
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
        this.modal = document.getElementById('tech-stack-modal');

        // Close modal on button click
        document.getElementById('close-modal').addEventListener('click', () => {
            this.closeModal();
        });

        // Close modal on backdrop click
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });

        // Close modal on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !this.modal.classList.contains('hidden')) {
                this.closeModal();
            }
        });
    }

    setupEventListeners() {
        this.techStackItems.forEach(item => {
            item.style.cursor = 'pointer';
            item.addEventListener('click', () => {
                const techName = item.querySelector('span').textContent.trim();
                this.showModal(techName);
            });
        });
    }

    showModal(techName) {
        const techData = this.techDescriptions[techName];

        if (!techData) {
            console.warn(`No description found for ${techName}`);
            return;
        }

        const modalContent = document.getElementById('modal-content');
        modalContent.innerHTML = `
            <div class="text-center mb-6">
                <div class="text-6xl mb-4">${techData.icon}</div>
                <h2 class="text-3xl font-bold text-blue-500">${techData.title}</h2>
            </div>

            <div class="space-y-6">
                <div>
                    <h3 class="text-xl font-semibold text-blue-400 mb-3">Apa itu ${techData.title}?</h3>
                    <p class="text-gray-300 leading-relaxed">${techData.description}</p>
                </div>

                <div>
                    <h3 class="text-xl font-semibold text-blue-400 mb-3">Dipakai untuk:</h3>
                    <div class="grid grid-cols-2 gap-3">
                        ${techData.usedFor.map(use => `
                            <div class="bg-[#0B0F19] border border-blue-500/30 rounded-lg p-3 text-center">
                                <span class="text-gray-300 text-sm">${use}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-6">
                    <p class="text-sm text-blue-400 text-center">
                        💡 Klik di luar kotak ini atau tekan ESC untuk menutup
                    </p>
                </div>
            </div>
        `;

        this.modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.modal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

export default TechStackController;
