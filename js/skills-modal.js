// Skills Modal Data - Penjelasan untuk orang awam
const skillsData = {
    'data-analysis': {
        title: 'Data Analysis & Visualization',
        description: 'Bayangin kamu punya tumpukan data yang banyak banget, kayak ribuan angka di Excel. Nah, aku bisa ngolah data itu jadi informasi yang gampang dipahami, kayak grafik atau chart yang keren. Jadi dari data yang ribet, bisa jadi insight yang berguna buat ambil keputusan.',
        sections: [
            {
                title: 'Apa yang aku bisa lakuin?',
                content: [
                    'Ngolah data dari Excel, database, atau file CSV jadi informasi yang berguna',
                    'Bikin grafik dan visualisasi yang gampang dipahami (chart, diagram, dashboard)',
                    'Nemuin pola atau trend dari data yang ada',
                    'Kasih rekomendasi berdasarkan analisis data'
                ]
            },
            {
                title: 'Tools yang aku pakai:',
                content: [
                    'Python - Bahasa pemrograman buat ngolah data',
                    'Pandas - Library buat manipulasi data (kayak Excel tapi lebih powerful)',
                    'Matplotlib & Seaborn - Buat bikin grafik yang keren',
                    'Tableau - Software buat bikin dashboard interaktif'
                ]
            },
            {
                title: 'Contoh kasusnya:',
                content: [
                    'Analisis penjualan toko: produk mana yang paling laku, kapan waktu ramai',
                    'Analisis customer: siapa target market yang tepat',
                    'Prediksi trend: bakal naik atau turun di bulan depan'
                ]
            }
        ]
    },
    'machine-learning': {
        title: 'Machine Learning',
        description: 'Machine Learning itu kayak ngajarin komputer buat belajar sendiri dari data. Jadi komputer bisa prediksi atau ambil keputusan tanpa harus dikasih tau step by step. Contohnya kayak Netflix yang bisa rekomendasiin film yang kamu suka, atau spam filter di email.',
        sections: [
            {
                title: 'Apa yang aku bisa lakuin?',
                content: [
                    'Bikin model prediksi (misalnya prediksi harga, prediksi customer churn)',
                    'Sistem rekomendasi (kayak "kamu mungkin suka ini")',
                    'Klasifikasi data (misalnya deteksi spam, deteksi fraud)',
                    'Pattern recognition (nemuin pola dari data)'
                ]
            },
            {
                title: 'Tools yang aku pakai:',
                content: [
                    'TensorFlow & PyTorch - Framework buat bikin model AI',
                    'Scikit-learn - Library ML yang user-friendly',
                    'Keras - Bikin neural network jadi lebih gampang',
                    'PyCaret - AutoML buat eksperimen cepat'
                ]
            },
            {
                title: 'Contoh kasusnya:',
                content: [
                    'Prediksi customer bakal beli lagi atau nggak',
                    'Deteksi gambar (misalnya deteksi produk cacat)',
                    'Chatbot yang bisa jawab pertanyaan otomatis',
                    'Sistem rekomendasi produk'
                ]
            }
        ]
    },
    'digital-marketing': {
        title: 'Digital Marketing',
        description: 'Digital Marketing itu cara promosi atau jualan lewat internet. Tapi bukan asal posting aja, ada strategi dan data di baliknya. Aku bisa bantu analisis campaign, optimasi ads, sampe bikin konten yang engaging buat target audience yang tepat.',
        sections: [
            {
                title: 'Apa yang aku bisa lakuin?',
                content: [
                    'Analisis performa campaign (Instagram, Facebook, Google Ads)',
                    'Optimasi budget iklan biar ROI maksimal',
                    'Riset target audience yang tepat',
                    'Bikin strategi konten yang engaging',
                    'A/B testing buat tau mana yang lebih efektif'
                ]
            },
            {
                title: 'Platform yang aku kuasai:',
                content: [
                    'Meta Ads (Instagram & Facebook Ads)',
                    'Google Ads & Google Analytics',
                    'SEO (Search Engine Optimization)',
                    'Social Media Marketing',
                    'Email Marketing'
                ]
            },
            {
                title: 'Contoh kasusnya:',
                content: [
                    'Optimasi iklan Instagram biar cost per click lebih murah',
                    'Analisis konten mana yang paling banyak engagement',
                    'Riset keyword buat SEO website',
                    'Campaign strategy buat launching produk baru'
                ]
            }
        ]
    },
    'ui-ux': {
        title: 'UI/UX Design',
        description: 'UI/UX itu tentang bikin aplikasi atau website yang gampang dipakai dan enak dilihat. UI (User Interface) itu tampilan visualnya, UX (User Experience) itu pengalaman pakainya. Jadi bukan cuma cantik, tapi juga harus user-friendly dan intuitif.',
        sections: [
            {
                title: 'Apa yang aku bisa lakuin?',
                content: [
                    'Design interface aplikasi/website yang modern dan clean',
                    'Bikin prototype interaktif (bisa diklik-klik kayak app beneran)',
                    'User research buat tau kebutuhan user',
                    'Wireframing & mockup design',
                    'Design system & component library'
                ]
            },
            {
                title: 'Tools yang aku pakai:',
                content: [
                    'Figma - Tool design yang paling populer sekarang',
                    'Adobe XD - Alternative buat prototyping',
                    'Miro - Buat brainstorming dan user flow',
                    'Notion - Dokumentasi design'
                ]
            },
            {
                title: 'Contoh kasusnya:',
                content: [
                    'Design aplikasi mobile dari nol',
                    'Redesign website biar lebih modern',
                    'Bikin design system buat konsistensi brand',
                    'Prototype interaktif buat presentasi ke client'
                ]
            }
        ]
    },
    'ai-prompting': {
        title: 'AI Prompting',
        description: 'AI Prompting itu skill buat "ngobrol" sama AI kayak ChatGPT, Claude, atau Midjourney biar dapet hasil yang maksimal. Bukan cuma ngetik pertanyaan biasa, tapi tau cara ngasih instruksi yang tepat biar AI ngerti maunya kita dan kasih output yang sesuai.',
        sections: [
            {
                title: 'Apa yang aku bisa lakuin?',
                content: [
                    'Bikin prompt yang efektif buat berbagai kebutuhan',
                    'Optimasi prompt buat dapet hasil terbaik',
                    'Chain of thought prompting buat problem solving',
                    'Prompt engineering buat automation',
                    'Fine-tuning prompt buat use case spesifik'
                ]
            },
            {
                title: 'AI Tools yang aku kuasai:',
                content: [
                    'ChatGPT & GPT-4 - Buat text generation',
                    'Claude - AI assistant yang powerful',
                    'Midjourney & DALL-E - AI image generation',
                    'GitHub Copilot - AI coding assistant',
                    'Perplexity - AI search engine'
                ]
            },
            {
                title: 'Contoh kasusnya:',
                content: [
                    'Generate konten marketing yang engaging',
                    'Bikin code dengan bantuan AI',
                    'Research dan summarize informasi cepat',
                    'Generate gambar untuk design mockup',
                    'Automation task dengan AI'
                ]
            }
        ]
    },
    'web-dev': {
        title: 'Web Development',
        description: 'Web Development itu skill buat bikin website atau aplikasi web. Mulai dari tampilan depan (frontend) yang user lihat, sampe backend yang ngatur data dan logic di belakang layar. Aku fokus di frontend tapi juga ngerti backend basics.',
        sections: [
            {
                title: 'Apa yang aku bisa lakuin?',
                content: [
                    'Bikin website responsive (tampil bagus di HP & laptop)',
                    'Develop web app interaktif',
                    'Integrasi API (koneksi ke database atau service lain)',
                    'Optimasi performa website',
                    'Deploy website ke internet'
                ]
            },
            {
                title: 'Tech Stack yang aku pakai:',
                content: [
                    'HTML, CSS, JavaScript - Basic web development',
                    'React & Next.js - Framework modern buat bikin web app',
                    'Tailwind CSS - Framework CSS yang cepat',
                    'Git & GitHub - Version control',
                    'Vercel/Netlify - Platform buat deploy website'
                ]
            },
            {
                title: 'Contoh kasusnya:',
                content: [
                    'Bikin landing page company profile',
                    'Develop dashboard analytics',
                    'Portfolio website kayak yang kamu liat ini',
                    'E-commerce website sederhana',
                    'Web app dengan fitur login & database'
                ]
            }
        ]
    }
};

// Initialize modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('skills-modal');
    const modalClose = document.getElementById('skills-modal-close');
    const skillCards = document.querySelectorAll('.skill-card[data-skill]');

    // Open modal when skill card is clicked
    skillCards.forEach(card => {
        card.addEventListener('click', function() {
            const skillKey = this.getAttribute('data-skill');
            const skillData = skillsData[skillKey];

            if (skillData) {
                // Set modal content
                document.getElementById('skills-modal-title').textContent = skillData.title;
                document.getElementById('skills-modal-description').textContent = skillData.description;

                // Build sections
                const detailsContainer = document.getElementById('skills-modal-details');
                detailsContainer.innerHTML = '';

                skillData.sections.forEach(section => {
                    const sectionDiv = document.createElement('div');
                    sectionDiv.className = 'skills-modal-section';

                    const sectionTitle = document.createElement('h3');
                    sectionTitle.className = 'skills-modal-section-title';
                    sectionTitle.textContent = section.title;
                    sectionDiv.appendChild(sectionTitle);

                    const ul = document.createElement('ul');
                    ul.className = 'skills-modal-list';

                    section.content.forEach(item => {
                        const li = document.createElement('li');
                        li.textContent = item;
                        ul.appendChild(li);
                    });

                    sectionDiv.appendChild(ul);
                    detailsContainer.appendChild(sectionDiv);
                });

                // Show modal
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Close with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});

console.log('Skills modal script loaded');
