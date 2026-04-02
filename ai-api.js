// AI API Integration Module - Smart Content Generation
const AIAPI = {
    
    /**
     * Generate content using AI with intelligent prompts
     */
    async generateWithAI(prompt, context = {}) {
        if (!CONFIG.AI_API.enabled) {
            console.log('❌ AI API not enabled in config.js');
            console.log('💡 Tip: Set CONFIG.AI_API.enabled = true untuk hasil berkualitas tinggi!');
            return null;
        }
        
        if (!CONFIG.AI_API.apiKey || CONFIG.AI_API.apiKey.trim() === '') {
            console.error('❌ API Key tidak ditemukan! Silakan isi CONFIG.AI_API.apiKey di config.js');
            console.log('📖 Panduan lengkap: Baca file CARA_MENGGUNAKAN_AI_BERKUALITAS.md');
            alert('⚠️ API Key belum diisi!\n\nSilakan:\n1. Buka file config.js\n2. Isi CONFIG.AI_API.apiKey dengan API key Google Gemini Anda\n3. Dapatkan API key gratis di: https://makersuite.google.com/app/apikey\n\n📖 Baca CARA_MENGGUNAKAN_AI_BERKUALITAS.md untuk panduan lengkap');
            return null;
        }
        
        try {
            const provider = CONFIG.AI_API.provider;
            console.log(`🤖 Calling ${provider} API...`);
            console.log('💡 Menggunakan prompt engineering berkualitas tinggi untuk hasil terbaik...');
            
            switch(provider) {
                case 'gemini':
                    return await this.callGemini(prompt, context);
                case 'openai':
                    return await this.callOpenAI(prompt, context);
                case 'groq':
                    return await this.callGroq(prompt, context);
                default:
                    console.error('❌ Provider tidak dikenal:', provider);
                    return null;
            }
        } catch (error) {
            console.error('❌ AI API Error:', error);
            if (error.message.includes('API key')) {
                alert('⚠️ API Key tidak valid!\n\nPastikan:\n1. API key sudah benar\n2. API key sudah diaktifkan\n3. Billing sudah diaktifkan (jika diperlukan)\n\n📖 Baca TROUBLESHOOTING di CARA_MENGGUNAKAN_AI_BERKUALITAS.md');
            }
            return null;
        }
    },
    
    /**
     * Call Google Gemini API with smart error handling
     */
    async callGemini(prompt, context) {
        const url = `${CONFIG.AI_API.endpoints.gemini}?key=${CONFIG.AI_API.apiKey}`;
        
        const requestBody = {
            contents: [{
                parts: [{
                    text: prompt
                }]
            }],
            generationConfig: {
                temperature: CONFIG.AI_API.temperature || 0.8,
                maxOutputTokens: CONFIG.AI_API.maxTokens || 4096,
                topP: 0.95,
                topK: 40
            }
        };
        
        console.log('📤 Sending request to Gemini...');
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            console.error('❌ Gemini API Error:', errorData);
            throw new Error(`Gemini API Error: ${errorData.error?.message || response.statusText}`);
        }
        
        const data = await response.json();
        console.log('✅ Received response from Gemini');
        
        if (!data.candidates || data.candidates.length === 0) {
            throw new Error('No response from Gemini API');
        }
        
        return data.candidates[0].content.parts[0].text;
    },
    
    /**
     * Call OpenAI API
     */
    async callOpenAI(prompt, context) {
        const url = CONFIG.AI_API.endpoints.openai;
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${CONFIG.AI_API.apiKey}`
            },
            body: JSON.stringify({
                model: CONFIG.AI_API.models.openai,
                messages: [{
                    role: 'system',
                    content: 'Anda adalah ahli pendidikan yang membuat modul ajar berkualitas tinggi sesuai Kurikulum Merdeka.'
                }, {
                    role: 'user',
                    content: prompt
                }],
                temperature: CONFIG.AI_API.temperature || 0.8,
                max_tokens: CONFIG.AI_API.maxTokens || 4096
            })
        });
        
        if (!response.ok) {
            throw new Error(`OpenAI API Error: ${response.statusText}`);
        }
        
        const data = await response.json();
        return data.choices[0].message.content;
    },
    
    /**
     * Call Groq API
     */
    async callGroq(prompt, context) {
        const url = CONFIG.AI_API.endpoints.groq;
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${CONFIG.AI_API.apiKey}`
            },
            body: JSON.stringify({
                model: CONFIG.AI_API.models.groq,
                messages: [{
                    role: 'system',
                    content: 'Anda adalah ahli pendidikan yang membuat modul ajar berkualitas tinggi sesuai Kurikulum Merdeka.'
                }, {
                    role: 'user',
                    content: prompt
                }],
                temperature: CONFIG.AI_API.temperature || 0.8,
                max_tokens: CONFIG.AI_API.maxTokens || 4096
            })
        });
        
        if (!response.ok) {
            throw new Error(`Groq API Error: ${response.statusText}`);
        }
        
        const data = await response.json();
        return data.choices[0].message.content;
    },
    
    /**
     * Generate diagnostic questions using AI with smart prompts
     */
    async generateDiagnosticQuestionsAI(mataPelajaran, materi, fase, capaianPembelajaran) {
        const prompt = `Anda adalah guru ${mataPelajaran} profesional dengan pengalaman 15 tahun. Tugas Anda adalah membuat 3 soal asesmen diagnostik yang SANGAT SPESIFIK dan KONTEKSTUAL untuk materi "${materi}" di ${fase}.

KONTEKS PEMBELAJARAN:
- Mata Pelajaran: ${mataPelajaran}
- Materi Spesifik: ${materi}
- Fase/Kelas: ${fase}
- Capaian Pembelajaran: ${capaianPembelajaran}

PRINSIP PENTING - BACA DENGAN TELITI:
1. JANGAN BUAT SOAL TEMPLATE! Setiap soal harus UNIK dan SPESIFIK untuk materi "${materi}"
2. Gunakan ANGKA KONKRET, NAMA SPESIFIK, SITUASI NYATA dalam setiap soal
3. Soal harus menguji PEMAHAMAN KONSEPTUAL, bukan hanya hafalan
4. Setiap soal harus berbeda aspek: konsep dasar, perhitungan/aplikasi, analisis kontekstual
5. Hindari kata-kata umum seperti "jelaskan tentang", "sebutkan", "apa itu"

PANDUAN BERDASARKAN MATA PELAJARAN:

${this.getDiagnosticGuidelines(mataPelajaran, materi)}

FORMAT OUTPUT WAJIB:
Berikan HANYA 3 soal tanpa penjelasan tambahan. Format:
1. [Soal spesifik dengan konteks nyata]
2. [Soal dengan data/angka konkret]
3. [Soal analisis situasi]

CONTOH SOAL BERKUALITAS TINGGI:

Contoh 1 (Kimia - Laju Reaksi):
1. Seorang peneliti mengamati bahwa tablet effervescent larut dalam air dingin (10°C) selama 5 menit, tetapi dalam air hangat (40°C) hanya 1 menit. Jelaskan mengapa terjadi perbedaan waktu pelarutan dan kaitkan dengan teori tumbukan!
2. Dalam percobaan, 5 gram serbuk CaCO₃ bereaksi dengan HCl lebih cepat dibanding 5 gram bongkahan CaCO₃. Hitung perkiraan luas permukaan jika serbuk memiliki ukuran partikel 0,1 mm dan bongkahan 1 cm! (ρ CaCO₃ = 2,7 g/cm³)
3. Industri pupuk menggunakan katalis besi (Fe) dalam pembuatan amonia. Jika tanpa katalis reaksi membutuhkan suhu 800°C, dengan katalis cukup 450°C. Analisis keuntungan ekonomi dan lingkungan dari penggunaan katalis ini!

Contoh 2 (Matematika - Fungsi Kuadrat):
1. Sebuah bola dilempar vertikal ke atas dengan ketinggian h(t) = -5t² + 20t + 2 meter, dengan t dalam detik. Kapan bola mencapai ketinggian maksimum dan berapa ketinggiannya?
2. Seorang petani memiliki 100 meter pagar untuk membuat kandang berbentuk persegi panjang. Jika lebar kandang x meter, tentukan fungsi luas L(x) dan lebar optimal untuk luas maksimum!
3. Harga tiket konser ditentukan oleh fungsi P(x) = -2x² + 80x + 1000, dengan x adalah jumlah hari sebelum konser. Analisis: kapan harga termurah dan termahal, serta berapa selisihnya?

SEKARANG BUATKAN 3 SOAL DIAGNOSTIK BERKUALITAS TINGGI UNTUK "${materi}":
(Ingat: HARUS spesifik, menggunakan angka/data konkret, dan kontekstual!)`;
        
        const result = await this.generateWithAI(prompt, { mataPelajaran, materi, fase });
        
        if (result) {
            // Parse result into array
            const lines = result.split('\n').filter(line => line.trim());
            const soal = [];
            
            for (const line of lines) {
                // Match numbered questions (1., 2., 3. or 1), 2), 3))
                const match = line.match(/^[1-3][\.\)]\s*(.+)/);
                if (match && match[1].trim()) {
                    soal.push(match[1].trim());
                }
            }
            
            // Return at least 3 questions
            if (soal.length >= 3) {
                return soal.slice(0, 3);
            }
        }
        
        return null;
    },
    
    /**
     * Get diagnostic guidelines based on subject
     */
    getDiagnosticGuidelines(mataPelajaran, materi) {
        const guidelines = {
            'Matematika': `- Buat soal cerita dengan data numerik spesifik (bukan variabel umum)
- Gunakan konteks nyata: ekonomi, fisika, arsitektur, dll
- Sertakan soal yang menguji pemahaman konsep, bukan hanya prosedur
- Contoh: "Pak Budi memiliki kebun 200 m² berbentuk persegi panjang..." (BAIK)
- Hindari: "Sebuah persegi panjang memiliki panjang x..." (BURUK - terlalu abstrak)`,
            
            'Fisika': `- Gunakan situasi nyata dengan data pengukuran spesifik
- Sertakan soal eksperimen atau fenomena sehari-hari
- Berikan nilai numerik untuk besaran fisika
- Contoh: "Sebuah mobil bergerak dari kota A ke B sejauh 120 km dalam 2 jam..." (BAIK)
- Hindari: "Jelaskan pengertian kecepatan" (BURUK - terlalu umum)`,
            
            'Kimia': `- Gunakan reaksi kimia dengan persamaan lengkap dan data massa/mol
- Sertakan konteks industri atau laboratorium
- Berikan nilai Ar/Mr yang spesifik
- Contoh: "10 gram CaCO₃ dipanaskan menghasilkan CaO dan CO₂..." (BAIK)
- Hindari: "Apa yang dimaksud dengan reaksi kimia?" (BURUK - terlalu dasar)`,
            
            'Biologi': `- Gunakan kasus medis, ekologi, atau fenomena biologis nyata
- Sertakan data penelitian atau observasi
- Hubungkan dengan kesehatan atau lingkungan
- Contoh: "Seorang pasien diabetes memiliki kadar gula darah 250 mg/dL..." (BAIK)
- Hindari: "Jelaskan fungsi insulin" (BURUK - terlalu umum)`,
            
            'IPA': `- Gunakan fenomena alam yang dapat diamati siswa
- Sertakan data pengukuran sederhana
- Hubungkan dengan kehidupan sehari-hari
- Contoh: "Air dalam gelas (200 mL) dipanaskan dari 25°C hingga mendidih..." (BAIK)`,
            
            'Bahasa Indonesia': `- Gunakan kutipan teks nyata (berita, cerpen, artikel)
- Sertakan analisis struktur atau kaidah kebahasaan spesifik
- Berikan konteks komunikasi yang jelas
- Contoh: "Bacalah paragraf berikut: [kutipan]. Identifikasi majas dan jelaskan maknanya..." (BAIK)`,
            
            'Bahasa Inggris': `- Gunakan teks autentik (dialog, artikel, email)
- Sertakan konteks komunikasi yang jelas
- Berikan situasi nyata untuk grammar/vocabulary
- Contoh: "Read this email: [text]. What is the sender's purpose?" (BAIK)`,
            
            'IPS': `- Gunakan kasus sejarah atau sosial spesifik dengan tahun/tempat
- Sertakan data statistik atau peta
- Hubungkan dengan isu kontemporer
- Contoh: "Pada tahun 1945, Indonesia memproklamasikan kemerdekaan..." (BAIK)`,
            
            'Ekonomi': `- Gunakan data ekonomi riil (harga, inflasi, dll)
- Sertakan kasus bisnis atau kebijakan
- Berikan angka untuk perhitungan
- Contoh: "Harga beras naik dari Rp 12.000/kg menjadi Rp 15.000/kg..." (BAIK)`
        };
        
        return guidelines[mataPelajaran] || `- Buat soal yang sangat spesifik untuk materi "${materi}"
- Gunakan data, angka, atau situasi konkret
- Hindari pertanyaan umum yang bisa dijawab dengan definisi
- Fokus pada pemahaman konseptual dan aplikasi`;
    },
    
    /**
     * Generate summative questions using AI with smart prompts
     */
    async generateSummativeQuestionsAI(mataPelajaran, materi, fase, tujuanPembelajaran) {
        const prompt = `Anda adalah guru ${mataPelajaran} profesional yang ahli dalam membuat soal HOTS (Higher Order Thinking Skills). Tugas Anda adalah membuat 3 soal asesmen sumatif yang SANGAT MENANTANG dan KONTEKSTUAL untuk materi "${materi}" di ${fase}.

KONTEKS PEMBELAJARAN:
- Mata Pelajaran: ${mataPelajaran}
- Materi Spesifik: ${materi}
- Fase/Kelas: ${fase}
- Tujuan Pembelajaran: ${tujuanPembelajaran}

PRINSIP KRITIS - WAJIB DIIKUTI:
1. SOAL HARUS TINGKAT TINGGI (C4-C6): Analisis, Evaluasi, Kreasi - BUKAN hafalan!
2. GUNAKAN DATA RIIL: angka spesifik, nama tempat/orang, situasi nyata
3. SOAL HARUS MULTI-LANGKAH: tidak bisa dijawab dalam 1 langkah sederhana
4. KONTEKS AUTENTIK: industri, penelitian, kehidupan nyata, bukan situasi artifisial
5. MENANTANG tapi FAIR: sesuai dengan ${fase}

STRUKTUR SOAL WAJIB:
- Soal 1: APLIKASI + PERHITUNGAN KOMPLEKS (C3-C4)
  * Berikan data numerik lengkap
  * Minta perhitungan multi-langkah
  * Sertakan interpretasi hasil
  
- Soal 2: ANALISIS + EVALUASI (C4-C5)
  * Berikan kasus/fenomena kompleks
  * Minta analisis mendalam dengan alasan
  * Sertakan perbandingan atau evaluasi
  
- Soal 3: KREASI + SINTESIS (C5-C6)
  * Minta desain/rancangan/strategi baru
  * Sertakan pertimbangan multiple faktor
  * Minta justifikasi keputusan

${this.getSummativeGuidelines(mataPelajaran, materi)}

FORMAT OUTPUT WAJIB:
Berikan HANYA 3 soal tanpa penjelasan. Format:
1. [Soal aplikasi dengan perhitungan multi-langkah]
2. [Soal analisis kasus kompleks]
3. [Soal kreasi/desain dengan justifikasi]

CONTOH SOAL BERKUALITAS TINGGI:

Contoh 1 (Kimia - Termokimia):
1. Dalam kalorimeter bom, 2,5 gram glukosa (C₆H₁₂O₆) dibakar sempurna menghasilkan kenaikan suhu dari 25°C menjadi 38,5°C. Kapasitas kalor kalorimeter adalah 8,5 kJ/°C. Tentukan: a) Kalor pembakaran per gram glukosa, b) Entalpi pembakaran molar glukosa (ΔHc), c) Bandingkan dengan nilai literatur (-2803 kJ/mol) dan analisis sumber kesalahan! (Mr C₆H₁₂O₆ = 180)

2. Sebuah pabrik menggunakan reaksi eksotermik A + B → C dengan ΔH = -500 kJ/mol untuk menghasilkan energi. Namun, reaksi membutuhkan suhu tinggi (400°C) untuk dimulai. Seorang insinyur mengusulkan dua strategi: (1) Menggunakan katalis untuk menurunkan energi aktivasi, atau (2) Memanfaatkan panas hasil reaksi untuk memanaskan reaktan baru. Evaluasi kedua strategi dari segi: efisiensi energi, biaya operasional, dan dampak lingkungan. Strategi mana yang lebih baik dan mengapa?

3. Anda ditugaskan merancang sistem pemanas portabel untuk pendaki gunung yang menggunakan reaksi kimia eksotermik. Kriteria: harus menghasilkan panas 500 kJ, aman dibawa (tidak mudah meledak), ramah lingkungan, dan murah. Pilih reaksi kimia yang tepat, hitung massa reaktan yang dibutuhkan, dan jelaskan desain kemasan yang aman! Pertimbangkan minimal 3 reaksi eksotermik yang berbeda sebelum memutuskan.

Contoh 2 (Matematika - Statistika):
1. Sebuah perusahaan e-commerce mencatat waktu pengiriman (dalam hari) untuk 50 pesanan: [data]. Hitung: a) Mean, median, modus, b) Kuartil dan jangkauan interkuartil, c) Standar deviasi, d) Identifikasi outlier menggunakan metode IQR, e) Jika perusahaan menjanjikan "90% pesanan tiba dalam X hari", tentukan nilai X yang realistis!

2. Dua kelas mengikuti ujian yang sama. Kelas A (30 siswa): mean=75, SD=10. Kelas B (25 siswa): mean=78, SD=15. Kepala sekolah menyimpulkan "Kelas B lebih baik karena mean lebih tinggi". Analisis pernyataan ini secara kritis! Pertimbangkan: a) Perbedaan variabilitas, b) Ukuran sampel, c) Distribusi nilai, d) Faktor lain yang mungkin mempengaruhi. Apakah kesimpulan kepala sekolah valid? Berikan rekomendasi analisis yang lebih tepat!

3. Anda adalah data analyst di rumah sakit yang ingin memprediksi jumlah pasien per hari untuk mengoptimalkan jadwal dokter. Data 30 hari terakhir menunjukkan: Senin (rata-rata 45, SD 8), Selasa (40, SD 6), Rabu (38, SD 5), Kamis (42, SD 7), Jumat (50, SD 10), Sabtu (35, SD 12), Minggu (25, SD 8). Rancang sistem penjadwalan dokter yang efisien dengan mempertimbangkan: variabilitas harian, biaya overtime, kepuasan pasien (waktu tunggu), dan kesejahteraan dokter. Berapa dokter yang harus dijadwalkan setiap hari?

SEKARANG BUATKAN 3 SOAL SUMATIF BERKUALITAS TINGGI UNTUK "${materi}":
(Ingat: HARUS tingkat tinggi C4-C6, multi-langkah, kontekstual, dan menantang!)`;
        
        const result = await this.generateWithAI(prompt, { mataPelajaran, materi, fase });
        
        if (result) {
            const lines = result.split('\n').filter(line => line.trim());
            const soal = [];
            
            for (const line of lines) {
                const match = line.match(/^[1-3][\.\)]\s*(.+)/);
                if (match && match[1].trim()) {
                    soal.push(match[1].trim());
                }
            }
            
            if (soal.length >= 3) {
                return soal.slice(0, 3);
            }
        }
        
        return null;
    },
    
    /**
     * Get summative guidelines based on subject
     */
    getSummativeGuidelines(mataPelajaran, materi) {
        const guidelines = {
            'Matematika': `PANDUAN SOAL MATEMATIKA TINGKAT TINGGI:
- Soal 1: Perhitungan kompleks dengan data riil (statistik, keuangan, fisika)
- Soal 2: Analisis pola, perbandingan metode, atau evaluasi solusi
- Soal 3: Pemodelan matematika untuk masalah nyata atau optimasi
- WAJIB: Gunakan angka spesifik, bukan variabel umum
- WAJIB: Multi-langkah (minimal 3-4 langkah perhitungan)`,
            
            'Fisika': `PANDUAN SOAL FISIKA TINGKAT TINGGI:
- Soal 1: Perhitungan dengan data eksperimen riil, interpretasi hasil
- Soal 2: Analisis fenomena fisika kompleks atau evaluasi desain
- Soal 3: Rancang eksperimen atau sistem fisika dengan justifikasi
- WAJIB: Data numerik lengkap dengan satuan
- WAJIB: Hubungkan dengan teknologi atau industri`,
            
            'Kimia': `PANDUAN SOAL KIMIA TINGKAT TINGGI:
- Soal 1: Perhitungan stoikiometri/termokimia dengan data lab riil
- Soal 2: Analisis reaksi kimia dalam konteks industri/lingkungan
- Soal 3: Rancang proses kimia atau strategi optimasi produksi
- WAJIB: Persamaan reaksi lengkap dengan data Ar/Mr
- WAJIB: Konteks industri, lingkungan, atau kesehatan`,
            
            'Biologi': `PANDUAN SOAL BIOLOGI TINGKAT TINGGI:
- Soal 1: Analisis data penelitian atau kasus medis dengan data
- Soal 2: Evaluasi hipotesis atau perbandingan mekanisme biologis
- Soal 3: Rancang eksperimen atau strategi kesehatan/konservasi
- WAJIB: Data kuantitatif (grafik, tabel, hasil lab)
- WAJIB: Konteks medis, ekologi, atau bioteknologi`,
            
            'IPA': `PANDUAN SOAL IPA TINGKAT TINGGI:
- Soal 1: Analisis fenomena alam dengan data pengukuran
- Soal 2: Evaluasi percobaan atau perbandingan metode
- Soal 3: Rancang solusi untuk masalah lingkungan/teknologi
- WAJIB: Data observasi atau eksperimen riil
- WAJIB: Hubungkan dengan isu lingkungan atau teknologi`,
            
            'Bahasa Indonesia': `PANDUAN SOAL BAHASA INDONESIA TINGKAT TINGGI:
- Soal 1: Analisis teks kompleks (struktur, gaya bahasa, argumentasi)
- Soal 2: Evaluasi efektivitas teks atau perbandingan dua teks
- Soal 3: Produksi teks dengan kriteria spesifik dan justifikasi
- WAJIB: Gunakan teks autentik (artikel, cerpen, pidato)
- WAJIB: Analisis mendalam, bukan sekadar identifikasi`,
            
            'Bahasa Inggris': `PANDUAN SOAL BAHASA INGGRIS TINGKAT TINGGI:
- Soal 1: Analisis teks kompleks (inference, author's purpose, tone)
- Soal 2: Evaluasi argumen atau perbandingan perspektif
- Soal 3: Produksi teks (essay, proposal) dengan kriteria jelas
- WAJIB: Teks autentik (artikel, story, speech)
- WAJIB: Critical thinking, bukan grammar drill`,
            
            'IPS': `PANDUAN SOAL IPS TINGKAT TINGGI:
- Soal 1: Analisis data sosial/sejarah (grafik, peta, statistik)
- Soal 2: Evaluasi kebijakan atau perbandingan sistem sosial
- Soal 3: Rancang solusi untuk masalah sosial dengan justifikasi
- WAJIB: Data riil (tahun, tempat, angka statistik)
- WAJIB: Hubungkan dengan isu kontemporer`,
            
            'Ekonomi': `PANDUAN SOAL EKONOMI TINGKAT TINGGI:
- Soal 1: Analisis data ekonomi (inflasi, supply-demand, profit)
- Soal 2: Evaluasi kebijakan ekonomi atau strategi bisnis
- Soal 3: Rancang model bisnis atau strategi investasi
- WAJIB: Data numerik riil (harga, kuantitas, persentase)
- WAJIB: Konteks bisnis atau kebijakan ekonomi`
        };
        
        return guidelines[mataPelajaran] || `PANDUAN UMUM:
- Soal 1: Aplikasi konsep dengan data riil dan perhitungan
- Soal 2: Analisis kasus kompleks dengan evaluasi
- Soal 3: Kreasi solusi atau rancangan dengan justifikasi
- WAJIB: Kontekstual, multi-langkah, tingkat tinggi (C4-C6)`;
    },
    
    /**
     * Get subject-specific instructions for better prompts
     */
    getSubjectSpecificInstructions(mataPelajaran, materi) {
        const instructions = {
            'Matematika': `- Sertakan soal perhitungan dengan angka spesifik dan langkah penyelesaian
- Buat soal pemecahan masalah kontekstual (word problems)
- Sertakan soal yang menguji pemahaman konsep, bukan hanya prosedur`,
            
            'Fisika': `- Sertakan soal perhitungan dengan data numerik lengkap
- Buat soal analisis fenomena fisika dalam kehidupan sehari-hari
- Sertakan soal eksperimen atau desain percobaan`,
            
            'Kimia': `- Sertakan soal perhitungan stoikiometri dengan data massa/mol spesifik
- Buat soal analisis reaksi kimia dengan persamaan lengkap
- Sertakan soal aplikasi dalam industri atau kehidupan sehari-hari`,
            
            'Biologi': `- Buat soal analisis kasus atau fenomena biologi
- Sertakan soal yang menghubungkan konsep dengan kesehatan/lingkungan
- Sertakan soal eksperimen atau observasi`,
            
            'IPA': `- Buat soal analisis fenomena alam
- Sertakan soal eksperimen sederhana
- Hubungkan dengan kehidupan sehari-hari`,
            
            'Bahasa Indonesia': `- Buat soal analisis teks dengan kutipan spesifik
- Sertakan soal produksi teks (menulis)
- Sertakan soal evaluasi struktur dan kaidah kebahasaan`,
            
            'Bahasa Inggris': `- Buat soal reading comprehension dengan teks
- Sertakan soal writing task
- Sertakan soal grammar dalam konteks`,
            
            'IPS': `- Buat soal analisis kasus sosial/sejarah
- Sertakan soal evaluasi kebijakan atau peristiwa
- Hubungkan dengan isu kontemporer`,
            
            'PKn': `- Buat soal analisis kasus kewarganegaraan
- Sertakan soal evaluasi nilai dan norma
- Hubungkan dengan kehidupan berbangsa dan bernegara`
        };
        
        return instructions[mataPelajaran] || `- Buat soal yang kontekstual dan aplikatif
- Sertakan soal analisis dan evaluasi
- Hubungkan dengan kehidupan nyata`;
    },
    
    /**
     * Generate learning activities using AI
     */
    async generateLearningActivitiesAI(mataPelajaran, materi, fase, model, tujuanPembelajaran) {
        const prompt = `Anda adalah ahli desain pembelajaran dengan spesialisasi model ${model}. Tugas Anda adalah membuat langkah-langkah kegiatan pembelajaran yang SANGAT DETAIL, SPESIFIK, dan INOVATIF untuk materi "${materi}".

KONTEKS PEMBELAJARAN:
- Mata Pelajaran: ${mataPelajaran}
- Materi Spesifik: ${materi}
- Fase/Kelas: ${fase}
- Model Pembelajaran: ${model}
- Tujuan: ${tujuanPembelajaran}

PRINSIP KRITIS - WAJIB DIIKUTI:
1. AKTIVITAS HARUS SANGAT SPESIFIK untuk materi "${materi}" - BUKAN template umum!
2. Setiap aktivitas harus ACTIONABLE: jelas apa yang dilakukan guru dan siswa
3. Sertakan DETAIL KONKRET: angka, waktu, alat, bahan, pertanyaan spesifik
4. STUDENT-CENTERED: siswa aktif, guru sebagai fasilitator
5. Mengembangkan HOTS (Higher Order Thinking Skills)
6. Gunakan teknologi atau media pembelajaran yang relevan

${this.getModelSyntax(model)}

PANDUAN AKTIVITAS BERKUALITAS:
✅ BAIK: "Guru mendemonstrasikan reaksi 5 cm pita Mg dengan 50 mL HCl 1M dalam gelas kimia, siswa mengamati gelembung gas dan mencatat waktu reaksi (±3 menit)"
❌ BURUK: "Guru menjelaskan materi dan siswa mendengarkan"

✅ BAIK: "Siswa dalam kelompok (4 orang) menghitung mol dari 10g CaCO₃ dan 20g HCl, kemudian membandingkan dengan koefisien reaksi untuk menentukan pereaksi pembatas"
❌ BURUK: "Siswa mengerjakan latihan soal"

✅ BAIK: "Guru mengajukan pertanyaan pemantik: 'Jika kita punya 100 roti dan 50 keju, berapa sandwich maksimal yang bisa dibuat? Apa yang tersisa?' untuk membangun analogi pereaksi pembatas"
❌ BURUK: "Guru memberikan pertanyaan"

STRUKTUR AKTIVITAS SETIAP FASE:
- Minimal 4-6 aktivitas per fase
- Setiap aktivitas: 1-2 kalimat yang sangat deskriptif
- Sertakan: alat/bahan, waktu estimasi, pertanyaan spesifik, atau instruksi detail
- Variasi metode: diskusi, eksperimen, analisis data, presentasi, game, teknologi

FORMAT OUTPUT (JSON):
[
  {
    "fase": "Nama Fase Sesuai Sintaks ${model}",
    "durasi": "Estimasi waktu dalam menit",
    "aktivitas": [
      "Aktivitas 1 dengan detail sangat spesifik untuk ${materi}",
      "Aktivitas 2 dengan instruksi yang actionable",
      "Aktivitas 3 dengan pertanyaan atau data konkret",
      "Aktivitas 4 yang melibatkan siswa aktif",
      "Aktivitas 5 dengan teknologi atau media spesifik"
    ]
  }
]

CONTOH BERKUALITAS TINGGI:

Contoh 1 (Kimia - Pereaksi Pembatas - PBL):
[
  {
    "fase": "Orientasi Masalah",
    "durasi": "15 menit",
    "aktivitas": [
      "Guru mendemonstrasikan reaksi: 5 cm pita magnesium + 50 mL HCl 1M dalam gelas kimia. Siswa mengamati gelembung gas H₂ dan mencatat bahwa reaksi berhenti meskipun masih ada pita Mg tersisa (±0,5 cm)",
      "Guru menunjukkan video industri pembuatan amonia (Proses Haber-Bosch) di mana nitrogen dan hidrogen direaksikan. Siswa mengamati bahwa tidak semua reaktan habis bereaksi",
      "Guru mengajukan pertanyaan pemantik: 'Mengapa reaksi berhenti padahal masih ada magnesium? Apa yang membatasi reaksi ini? Bagaimana industri menghitung jumlah reaktan yang tepat?'",
      "Siswa dalam kelompok (4 orang) mendiskusikan fenomena dan membuat analogi dengan situasi sehari-hari (misal: membuat sandwich dengan roti dan keju terbatas)",
      "Setiap kelompok merumuskan 2-3 hipotesis tentang faktor yang membatasi reaksi dan menuliskannya di kertas plano"
    ]
  },
  {
    "fase": "Organisasi Belajar",
    "durasi": "10 menit",
    "aktivitas": [
      "Guru membagi kelas menjadi 6 kelompok heterogen (4-5 siswa), setiap kelompok mendapat peran: ketua, pencatat, presenter, dan analis data",
      "Setiap kelompok menerima lembar kerja yang berisi 3 skenario reaksi dengan massa reaktan berbeda: Skenario A (10g Mg + 50g HCl), Skenario B (5g Mg + 100g HCl), Skenario C (20g Mg + 30g HCl)",
      "Guru menjelaskan tugas: menentukan pereaksi pembatas untuk setiap skenario, menghitung massa produk maksimum, dan menganalisis efisiensi reaksi",
      "Kelompok membuat rencana kerja: pembagian tugas perhitungan, strategi verifikasi hasil, dan format presentasi (poster/PPT/video)"
    ]
  },
  {
    "fase": "Penyelidikan",
    "durasi": "30 menit",
    "aktivitas": [
      "Siswa menghitung mol masing-masing reaktan untuk Skenario A: n(Mg) = 10g / 24 g/mol = 0,417 mol; n(HCl) = 50g / 36,5 g/mol = 1,37 mol",
      "Siswa menulis persamaan reaksi setara: Mg + 2HCl → MgCl₂ + H₂, kemudian menganalisis perbandingan koefisien (1:2)",
      "Siswa membandingkan rasio mol dengan koefisien: Mg perlu 0,417 mol, HCl tersedia 1,37 mol (cukup untuk 0,685 mol Mg). Kesimpulan: Mg adalah pereaksi pembatas",
      "Siswa menghitung massa produk maksimum: n(MgCl₂) = 0,417 mol, m(MgCl₂) = 0,417 × 95 = 39,6 gram",
      "Siswa mengulangi perhitungan untuk Skenario B dan C, kemudian membuat tabel perbandingan hasil",
      "Kelompok menggunakan simulasi PhET 'Reactants, Products and Leftovers' untuk memverifikasi hasil perhitungan secara visual",
      "Siswa menganalisis: Mengapa penting mengetahui pereaksi pembatas dalam industri? Bagaimana dampaknya terhadap biaya produksi dan limbah?"
    ]
  },
  {
    "fase": "Pengembangan dan Penyajian",
    "durasi": "20 menit",
    "aktivitas": [
      "Setiap kelompok membuat poster digital (Canva/PowerPoint) yang menampilkan: tabel hasil perhitungan, diagram batang perbandingan massa produk, dan analisis efisiensi",
      "Kelompok 1 dan 2 mempresentasikan hasil Skenario A dan B (masing-masing 5 menit), kelompok lain memberikan pertanyaan kritis",
      "Kelompok 3 dan 4 mempresentasikan Skenario C dan studi kasus industri amonia, menjelaskan strategi optimasi reaktan",
      "Guru memfasilitasi diskusi kelas: 'Jika harga Mg = Rp 50.000/kg dan HCl = Rp 30.000/kg, bagaimana menentukan komposisi paling ekonomis?'"
    ]
  },
  {
    "fase": "Analisis dan Evaluasi",
    "durasi": "15 menit",
    "aktivitas": [
      "Siswa melakukan refleksi tertulis (5 menit): Apa konsep paling penting yang dipelajari? Kesulitan apa yang dihadapi? Bagaimana mengatasinya?",
      "Guru memfasilitasi diskusi evaluasi: Membandingkan hasil perhitungan antar kelompok, mengidentifikasi kesalahan umum (lupa setarakan reaksi, salah hitung Mr)",
      "Siswa mengerjakan kuis formatif (Google Form) berisi 5 soal pilihan ganda dan 2 soal uraian tentang pereaksi pembatas",
      "Guru memberikan umpan balik: Menjelaskan strategi efektif menentukan pereaksi pembatas dan aplikasinya dalam industri kimia (farmasi, pupuk, plastik)",
      "Siswa membuat mind map digital (MindMeister) yang menghubungkan konsep: mol, koefisien reaksi, pereaksi pembatas, efisiensi, dan aplikasi industri"
    ]
  }
]

Contoh 2 (Matematika - Fungsi Kuadrat - Discovery Learning):
[
  {
    "fase": "Stimulation",
    "durasi": "10 menit",
    "aktivitas": [
      "Guru menampilkan video slow-motion bola basket yang dilempar membentuk lintasan parabola, siswa mengamati bentuk lintasan",
      "Guru menunjukkan grafik harga saham yang naik-turun membentuk kurva, siswa mengidentifikasi pola",
      "Guru mengajukan pertanyaan: 'Apa persamaan bentuk kurva ini? Bagaimana memprediksi titik tertinggi atau terendah?'",
      "Siswa mencoba menggambar kurva serupa di kertas dan mendiskusikan karakteristiknya"
    ]
  },
  {
    "fase": "Problem Statement",
    "durasi": "10 menit",
    "aktivitas": [
      "Siswa merumuskan pertanyaan penelitian: 'Bagaimana bentuk umum fungsi yang menghasilkan kurva parabola?', 'Apa hubungan koefisien dengan bentuk grafik?'",
      "Kelompok membuat hipotesis tentang persamaan fungsi kuadrat berdasarkan pengamatan grafik",
      "Guru memberikan 3 fungsi misteri: f(x) = x², g(x) = -x² + 4x, h(x) = 2x² - 3x + 1. Siswa diminta memprediksi bentuk grafiknya"
    ]
  },
  {
    "fase": "Data Collection",
    "durasi": "20 menit",
    "aktivitas": [
      "Siswa menggunakan GeoGebra untuk menggambar grafik f(x) = x², mencatat koordinat titik puncak (0,0) dan arah terbuka (ke atas)",
      "Siswa membuat tabel nilai untuk x = -3, -2, -1, 0, 1, 2, 3 dan menghitung f(x), kemudian plot di kertas grafik",
      "Siswa mengubah koefisien a dalam f(x) = ax² (a = 1, 2, 0.5, -1, -2) dan mengamati perubahan grafik: lebar parabola dan arah terbuka",
      "Siswa menambahkan konstanta c dalam f(x) = x² + c (c = 0, 2, -3) dan mengamati pergeseran vertikal",
      "Siswa mencatat data dalam tabel: koefisien a, b, c vs karakteristik grafik (titik puncak, sumbu simetri, nilai maksimum/minimum)"
    ]
  },
  {
    "fase": "Data Processing",
    "durasi": "20 menit",
    "aktivitas": [
      "Siswa menganalisis pola: Jika a > 0 maka parabola terbuka ke atas (minimum), jika a < 0 maka ke bawah (maksimum)",
      "Siswa menemukan rumus titik puncak: x = -b/(2a), kemudian substitusi untuk mendapat y",
      "Siswa menghitung diskriminan D = b² - 4ac dan menghubungkan dengan jumlah titik potong sumbu x",
      "Kelompok membuat infografis yang merangkum hubungan koefisien dengan karakteristik grafik"
    ]
  },
  {
    "fase": "Verification",
    "durasi": "15 menit",
    "aktivitas": [
      "Siswa memverifikasi temuan dengan menggambar grafik f(x) = -2x² + 8x - 3 dan menghitung titik puncak menggunakan rumus",
      "Siswa membandingkan hasil perhitungan dengan grafik GeoGebra, mengecek akurasi",
      "Kelompok mempresentasikan temuan dan rumus yang ditemukan, kelompok lain memvalidasi dengan contoh berbeda"
    ]
  },
  {
    "fase": "Generalization",
    "durasi": "15 menit",
    "aktivitas": [
      "Siswa merumuskan kesimpulan: Bentuk umum f(x) = ax² + bx + c, cara menentukan titik puncak, sumbu simetri, dan nilai ekstrem",
      "Guru memberikan soal aplikasi: 'Seorang petani punya 100m pagar untuk kandang. Tentukan ukuran untuk luas maksimum!' Siswa menyelesaikan dengan fungsi kuadrat",
      "Siswa membuat poster 'Cheat Sheet Fungsi Kuadrat' berisi rumus-rumus penting dan contoh aplikasi",
      "Refleksi: Siswa menulis 3 hal yang dipelajari, 2 pertanyaan yang masih ada, 1 aplikasi dalam kehidupan nyata"
    ]
  }
]

SEKARANG BUATKAN KEGIATAN PEMBELAJARAN BERKUALITAS TINGGI UNTUK "${materi}" DENGAN MODEL ${model}:
(Ingat: SANGAT SPESIFIK, DETAIL, ACTIONABLE, dan INOVATIF!)`;
        
        const result = await this.generateWithAI(prompt, { mataPelajaran, materi, model });
        
        if (result) {
            try {
                // Try to parse JSON
                const jsonMatch = result.match(/\[[\s\S]*\]/);
                if (jsonMatch) {
                    const parsed = JSON.parse(jsonMatch[0]);
                    if (Array.isArray(parsed) && parsed.length > 0) {
                        return parsed;
                    }
                }
            } catch (e) {
                console.warn('Failed to parse JSON, trying text parsing');
            }
        }
        
        return null;
    },
    
    /**
     * Get model syntax for prompts
     */
    getModelSyntax(model) {
        const syntax = {
            'PBL': `SINTAKS MODEL PBL:
1. Orientasi Masalah - Menyajikan masalah autentik
2. Organisasi Belajar - Membagi kelompok dan tugas
3. Penyelidikan - Mengumpulkan data dan informasi
4. Pengembangan dan Penyajian - Presentasi hasil
5. Analisis dan Evaluasi - Refleksi proses`,
            
            'Discovery': `SINTAKS MODEL DISCOVERY:
1. Stimulation - Pemberian stimulus/fenomena
2. Problem Statement - Identifikasi masalah
3. Data Collection - Pengumpulan data
4. Data Processing - Pengolahan data
5. Verification - Pembuktian
6. Generalization - Kesimpulan`,
            
            'Inquiry': `SINTAKS MODEL INQUIRY:
1. Orientasi - Pengenalan masalah
2. Merumuskan Masalah - Identifikasi pertanyaan
3. Merumuskan Hipotesis - Dugaan sementara
4. Mengumpulkan Data - Eksperimen/observasi
5. Menguji Hipotesis - Analisis data
6. Merumuskan Kesimpulan - Generalisasi`,
            
            'Cooperative': `SINTAKS MODEL COOPERATIVE LEARNING:
1. Penyampaian Tujuan dan Motivasi
2. Pembagian Kelompok
3. Presentasi Guru
4. Kegiatan Kelompok
5. Evaluasi
6. Penghargaan`
        };
        
        return syntax[model] || `Gunakan sintaks model ${model} yang sesuai.`;
    },
    
    /**
     * Generate enrichment activities using AI
     */
    async generateEnrichmentAI(mataPelajaran, materi, fase) {
        const prompt = `Anda adalah guru ${mataPelajaran} yang sangat kreatif dan inovatif. Tugas Anda adalah merancang program pengayaan yang SANGAT MENARIK, MENANTANG, dan BERBASIS PROYEK RIIL untuk siswa berbakat yang sudah menguasai materi "${materi}" di ${fase}.

KONTEKS:
- Mata Pelajaran: ${mataPelajaran}
- Materi: ${materi}
- Fase/Kelas: ${fase}
- Target: Siswa yang sudah menguasai materi reguler dan butuh tantangan lebih

PRINSIP PROGRAM PENGAYAAN BERKUALITAS:
1. PROYEK AUTENTIK: Bukan latihan soal tambahan, tapi proyek riil yang bermakna
2. TINGKAT TINGGI: Melibatkan riset, analisis, desain, atau kreasi produk
3. INTERDISIPLINER: Menghubungkan dengan mata pelajaran atau bidang lain
4. TEKNOLOGI: Memanfaatkan tools digital, software, atau platform online
5. DAMPAK NYATA: Hasil proyek bisa digunakan atau bermanfaat untuk orang lain
6. KETERAMPILAN ABAD 21: Kreativitas, critical thinking, kolaborasi, komunikasi

STRUKTUR PROYEK WAJIB:
- Judul: Menarik dan menggambarkan proyek dengan jelas
- Deskripsi: 2-3 kalimat yang menjelaskan esensi proyek dan output yang dihasilkan
- Aktivitas: 5-7 langkah yang SANGAT SPESIFIK dan ACTIONABLE
- Penilaian: Rubrik dengan kriteria terukur (bukan hanya "kreativitas")

PANDUAN BERDASARKAN MATA PELAJARAN:
${this.getEnrichmentGuidelines(mataPelajaran, materi)}

FORMAT OUTPUT (JSON):
{
  "judul": "Judul Proyek yang Menarik dan Spesifik",
  "deskripsi": "Deskripsi 2-3 kalimat yang menjelaskan proyek, output, dan manfaatnya",
  "durasi": "Estimasi waktu pengerjaan (misal: 2 minggu, 4 pertemuan)",
  "output": "Produk konkret yang dihasilkan (misal: aplikasi, video, laporan penelitian, model)",
  "aktivitas": [
    "Aktivitas 1: Riset literatur atau studi kasus dengan sumber spesifik",
    "Aktivitas 2: Analisis data atau eksperimen dengan metode jelas",
    "Aktivitas 3: Desain atau pengembangan produk dengan tools spesifik",
    "Aktivitas 4: Testing atau validasi dengan kriteria terukur",
    "Aktivitas 5: Presentasi atau publikasi dengan format jelas",
    "Aktivitas 6: Refleksi dan iterasi berdasarkan feedback",
    "Aktivitas 7: Dokumentasi dan sharing ke komunitas"
  ],
  "tools": "Software, platform, atau alat yang digunakan (misal: Python, Canva, Arduino, Google Sites)",
  "penilaian": "Rubrik: Riset (25%) - kedalaman dan sumber valid, Inovasi (25%) - originalitas solusi, Implementasi (30%) - kualitas produk, Presentasi (15%) - komunikasi efektif, Dampak (5%) - manfaat nyata"
}

CONTOH BERKUALITAS TINGGI:

Contoh 1 (Kimia - Laju Reaksi):
{
  "judul": "ChemRate: Aplikasi Prediksi Laju Reaksi Berbasis Machine Learning",
  "deskripsi": "Siswa mengembangkan aplikasi web sederhana yang dapat memprediksi laju reaksi kimia berdasarkan input suhu, konsentrasi, dan katalis menggunakan model regresi. Aplikasi ini akan diuji dengan data eksperimen riil dan dipublikasikan sebagai tool edukasi untuk siswa lain.",
  "durasi": "3 minggu (6 pertemuan @ 2 jam)",
  "output": "Web app interaktif yang dapat diakses online + laporan penelitian + video tutorial",
  "aktivitas": [
    "Minggu 1: Melakukan riset literatur tentang persamaan Arrhenius dan faktor-faktor yang mempengaruhi laju reaksi. Mengumpulkan dataset dari 50+ eksperimen laju reaksi dari jurnal ilmiah (misal: reaksi esterifikasi, hidrolisis, oksidasi)",
    "Minggu 1: Membersihkan dan menganalisis data menggunakan Python (pandas, matplotlib) untuk mengidentifikasi pola hubungan antara variabel (T, [C], katalis) dengan laju reaksi",
    "Minggu 2: Membangun model prediksi menggunakan regresi linear atau polynomial dengan scikit-learn. Melatih model dengan 80% data dan menguji akurasi dengan 20% data (target: R² > 0,85)",
    "Minggu 2: Mengembangkan interface web menggunakan Streamlit atau Flask yang memungkinkan user input nilai suhu, konsentrasi, dan jenis katalis, kemudian menampilkan prediksi laju reaksi dan grafik",
    "Minggu 3: Melakukan validasi eksperimental: Memilih 3 reaksi, melakukan percobaan di lab, dan membandingkan hasil eksperimen dengan prediksi aplikasi. Menghitung error dan menganalisis penyebab deviasi",
    "Minggu 3: Membuat dokumentasi lengkap (README, user guide) dan video tutorial 5 menit tentang cara menggunakan aplikasi. Deploy aplikasi ke Streamlit Cloud atau Heroku agar dapat diakses publik",
    "Minggu 3: Mempresentasikan proyek di kelas, mendapat feedback dari guru dan teman, kemudian melakukan iterasi perbaikan. Membagikan link aplikasi ke komunitas kimia online (misal: forum, social media)"
  ],
  "tools": "Python (pandas, scikit-learn, matplotlib), Streamlit/Flask, Google Colab, Git/GitHub, Streamlit Cloud",
  "penilaian": "Riset (25%): Kualitas dataset (>50 data, sumber valid), analisis mendalam. Inovasi (25%): Originalitas pendekatan ML, fitur tambahan (misal: visualisasi, perbandingan katalis). Implementasi (30%): Akurasi model (R²>0.85), UI user-friendly, bug-free. Presentasi (15%): Komunikasi jelas, demo efektif, dokumentasi lengkap. Dampak (5%): Aplikasi dapat diakses dan bermanfaat untuk siswa lain"
}

Contoh 2 (Matematika - Statistika):
{
  "judul": "DataViz: Dashboard Analisis Statistik Kasus COVID-19 di Indonesia",
  "deskripsi": "Siswa membuat dashboard interaktif yang menganalisis data COVID-19 Indonesia (kasus, vaksinasi, mobilitas) menggunakan statistika deskriptif dan inferensial. Dashboard menampilkan tren, korelasi, dan prediksi sederhana yang dapat membantu memahami pola penyebaran penyakit.",
  "durasi": "2 minggu (5 pertemuan @ 2 jam)",
  "output": "Dashboard interaktif (Tableau/Google Data Studio) + laporan analisis statistik + infografis",
  "aktivitas": [
    "Pertemuan 1-2: Mengumpulkan data COVID-19 dari sumber resmi (covid19.go.id, Our World in Data) untuk periode 2020-2023. Membersihkan data (handling missing values, outliers) menggunakan Excel atau Google Sheets",
    "Pertemuan 2-3: Menghitung statistika deskriptif: mean, median, modus, standar deviasi, kuartil untuk kasus harian per provinsi. Membuat visualisasi: histogram distribusi kasus, box plot perbandingan antar provinsi, time series tren kasus",
    "Pertemuan 3-4: Melakukan analisis korelasi: Apakah ada hubungan antara tingkat vaksinasi dengan penurunan kasus? Menghitung koefisien korelasi Pearson dan membuat scatter plot. Melakukan uji hipotesis sederhana (t-test) untuk membandingkan kasus sebelum dan sesudah vaksinasi massal",
    "Pertemuan 4: Membuat prediksi sederhana menggunakan moving average atau regresi linear untuk memproyeksikan kasus 2 minggu ke depan. Membandingkan prediksi dengan data aktual untuk mengevaluasi akurasi",
    "Pertemuan 5: Membangun dashboard interaktif di Tableau Public atau Google Data Studio yang menampilkan: peta heat map kasus per provinsi, grafik tren waktu, filter interaktif (provinsi, periode), dan insight statistik utama",
    "Pertemuan 5: Membuat infografis 1 halaman yang merangkum temuan utama (misal: 'Provinsi dengan kasus tertinggi', 'Dampak vaksinasi terhadap kasus', 'Prediksi tren'). Mempresentasikan dashboard dan analisis di kelas",
    "Post-project: Mempublikasikan dashboard online dan membagikan link ke media sosial atau blog sekolah. Menulis artikel populer tentang temuan untuk newsletter sekolah"
  ],
  "tools": "Excel/Google Sheets, Tableau Public/Google Data Studio, Canva (infografis), Google Sites (publikasi)",
  "penilaian": "Riset (25%): Kualitas data (sumber valid, periode lengkap), cleaning data tepat. Analisis (30%): Perhitungan statistik benar, interpretasi mendalam, uji hipotesis valid. Visualisasi (25%): Dashboard interaktif, grafik informatif, desain menarik. Komunikasi (15%): Infografis jelas, presentasi efektif, insight actionable. Publikasi (5%): Dashboard dapat diakses publik"
}

SEKARANG BUATKAN PROGRAM PENGAYAAN BERKUALITAS TINGGI UNTUK "${materi}":
(Ingat: Proyek AUTENTIK, MENANTANG, menggunakan TEKNOLOGI, dan menghasilkan PRODUK NYATA!)`;
        
        const result = await this.generateWithAI(prompt, { mataPelajaran, materi });
        
        if (result) {
            try {
                const jsonMatch = result.match(/\{[\s\S]*\}/);
                if (jsonMatch) {
                    return JSON.parse(jsonMatch[0]);
                }
            } catch (e) {
                console.warn('Failed to parse enrichment JSON');
            }
        }
        
        return null;
    },
    
    /**
     * Get enrichment guidelines based on subject
     */
    getEnrichmentGuidelines(mataPelajaran, materi) {
        const guidelines = {
            'Matematika': `- Proyek berbasis data riil: analisis statistik, pemodelan, optimasi
- Gunakan tools: Python, GeoGebra, Desmos, Tableau, Excel
- Output: Aplikasi kalkulator, dashboard, model matematika, video tutorial`,
            
            'Fisika': `- Proyek eksperimen atau simulasi: Arduino, PhET, Tracker Video Analysis
- Gunakan tools: Arduino, Python, Algodoo, Logger Pro
- Output: Prototipe alat, simulasi interaktif, video eksperimen, laporan penelitian`,
            
            'Kimia': `- Proyek riset atau aplikasi: analisis produk, optimasi reaksi, green chemistry
- Gunakan tools: ChemDraw, Python, simulasi molekul, lab virtual
- Output: Laporan penelitian, aplikasi prediksi, video eksperimen, infografis`,
            
            'Biologi': `- Proyek penelitian: ekologi, kesehatan, bioteknologi
- Gunakan tools: Microscope, iNaturalist, DNA analysis tools, survey tools
- Output: Laporan penelitian, database spesies, kampanye kesehatan, video dokumenter`,
            
            'IPA': `- Proyek STEM: Rancang alat sederhana, eksperimen, investigasi fenomena
- Gunakan tools: Arduino, sensor, aplikasi pengukuran, video analysis
- Output: Prototipe, laporan eksperimen, video tutorial, poster ilmiah`,
            
            'Bahasa Indonesia': `- Proyek kreatif: Menulis cerpen/novel, podcast, film pendek, blog
- Gunakan tools: Canva, Anchor (podcast), iMovie, WordPress
- Output: Buku digital, podcast series, film pendek, blog/website`,
            
            'Bahasa Inggris': `- Proyek komunikasi: Podcast, vlog, e-magazine, translation project
- Gunakan tools: Anchor, YouTube, Canva, Google Sites, Grammarly
- Output: Podcast series, video channel, digital magazine, translated content`,
            
            'IPS': `- Proyek riset sosial: Survey, wawancara, analisis kebijakan, dokumenter
- Gunakan tools: Google Forms, Tableau, Canva, video editing
- Output: Laporan penelitian, infografis, video dokumenter, policy brief`,
            
            'Ekonomi': `- Proyek bisnis: Business plan, market analysis, investment simulation
- Gunakan tools: Excel, Canva, Google Sites, stock simulator
- Output: Business plan, financial model, pitch deck, investment report`
        };
        
        return guidelines[mataPelajaran] || `- Proyek berbasis riset atau kreasi produk
- Gunakan teknologi digital yang relevan
- Output: Produk konkret yang bermanfaat`;
    },
    
    /**
     * Generate remedial activities using AI
     */
    async generateRemedialAI(mataPelajaran, materi, fase) {
        const prompt = `Anda adalah guru ${mataPelajaran} yang sangat berpengalaman dalam pembelajaran remedial dan memahami kesulitan belajar siswa. Tugas Anda adalah merancang program remedial 2 pertemuan yang SANGAT EFEKTIF dan TERSTRUKTUR untuk siswa yang belum menguasai materi "${materi}" di ${fase}.

KONTEKS:
- Mata Pelajaran: ${mataPelajaran}
- Materi: ${materi}
- Fase/Kelas: ${fase}
- Target: Siswa yang belum mencapai KKM atau mengalami kesulitan pemahaman

PRINSIP REMEDIAL EFEKTIF:
1. DIAGNOSIS SPESIFIK: Identifikasi kesulitan konkret (bukan hanya "tidak paham")
2. PENDEKATAN BERBEDA: Gunakan metode/media berbeda dari pembelajaran reguler
3. SCAFFOLDING: Pecah materi menjadi langkah-langkah kecil yang mudah dipahami
4. KONKRET KE ABSTRAK: Mulai dari contoh nyata, analogi, manipulatif, baru ke konsep
5. PRAKTIK TERBIMBING: Banyak latihan dengan bimbingan bertahap
6. FEEDBACK CEPAT: Koreksi kesalahan segera dengan penjelasan

STRUKTUR 2 PERTEMUAN:
Pertemuan 1: Fokus pada PEMAHAMAN KONSEP DASAR dengan pendekatan konkret
Pertemuan 2: Fokus pada APLIKASI dan LATIHAN INTENSIF dengan peningkatan kemandirian

PANDUAN BERDASARKAN MATA PELAJARAN:
${this.getRemedialGuidelines(mataPelajaran, materi)}

FORMAT OUTPUT (JSON):
{
  "diagnosis": "Identifikasi 3-4 kesulitan spesifik yang sering dialami siswa dalam materi ${materi}",
  "pertemuan1": {
    "judul": "Judul Pertemuan 1 yang Spesifik",
    "tujuan": "Tujuan pembelajaran yang terukur dan realistis",
    "durasi": "Estimasi waktu (misal: 90 menit)",
    "aktivitas": [
      "Aktivitas 1: Pre-test diagnostik (5-10 menit) - soal spesifik untuk identifikasi kesulitan",
      "Aktivitas 2: Review konsep prasyarat dengan analogi konkret (15 menit)",
      "Aktivitas 3: Pembelajaran konsep dasar dengan manipulatif/visual (20 menit)",
      "Aktivitas 4: Demonstrasi langkah-langkah dengan think-aloud (15 menit)",
      "Aktivitas 5: Praktik terbimbing dengan worksheet terstruktur (20 menit)",
      "Aktivitas 6: Tutor sebaya atau diskusi kelompok kecil (10 menit)",
      "Aktivitas 7: Kuis formatif dan feedback (10 menit)"
    ],
    "media": "Daftar media konkret: alat peraga, video, worksheet, software, dll",
    "strategi": "Strategi khusus: analogi, manipulatif, visual, step-by-step, dll",
    "indikator": "Indikator keberhasilan yang terukur (misal: 7 dari 10 soal benar)"
  },
  "pertemuan2": {
    "judul": "Judul Pertemuan 2 yang Spesifik",
    "tujuan": "Tujuan pembelajaran yang terukur dan realistis",
    "durasi": "Estimasi waktu (misal: 90 menit)",
    "aktivitas": [
      "Aktivitas 1: Review singkat pertemuan 1 dengan kuis cepat (10 menit)",
      "Aktivitas 2: Demonstrasi soal kompleks dengan template langkah-langkah (15 menit)",
      "Aktivitas 3: Praktik terbimbing dengan soal bertingkat (mudah-sedang) (25 menit)",
      "Aktivitas 4: Praktik mandiri dengan soal aplikasi (20 menit)",
      "Aktivitas 5: Pembahasan kesalahan umum dan strategi menghindarinya (10 menit)",
      "Aktivitas 6: Post-test untuk mengukur peningkatan (15 menit)",
      "Aktivitas 7: Refleksi dan rencana tindak lanjut (5 menit)"
    ],
    "media": "Daftar media konkret: worksheet bertingkat, template, kalkulator, dll",
    "strategi": "Strategi khusus: soal bertingkat, template, checklist, peer review, dll",
    "indikator": "Indikator keberhasilan yang terukur (misal: minimal 70% soal benar)"
  },
  "tindakLanjut": "Rekomendasi untuk siswa yang masih belum tuntas setelah 2 pertemuan"
}

CONTOH BERKUALITAS TINGGI:

Contoh (Kimia - Pereaksi Pembatas):
{
  "diagnosis": "Kesulitan umum siswa: 1) Tidak paham konsep mol dan cara menghitung dari massa, 2) Bingung membaca koefisien reaksi dan perbandingan mol, 3) Tidak tahu langkah sistematis menentukan pereaksi pembatas, 4) Salah menghitung massa produk karena menggunakan reaktan yang salah",
  "pertemuan1": {
    "judul": "Memahami Konsep Mol dan Perbandingan Koefisien Reaksi",
    "tujuan": "Siswa dapat menghitung mol dari massa dengan benar dan memahami makna koefisien reaksi sebagai perbandingan mol",
    "durasi": "90 menit",
    "aktivitas": [
      "Pre-test diagnostik (10 menit): 5 soal sederhana - (1) Hitung Mr dari CaCO₃, (2) Hitung mol dari 10g CaCO₃, (3) Baca koefisien dari reaksi 2H₂ + O₂ → 2H₂O, (4) Jika 2 mol H₂ bereaksi, berapa mol O₂ yang dibutuhkan?, (5) Definisi pereaksi pembatas",
      "Review konsep mol dengan analogi (15 menit): 'Mol seperti lusin. 1 lusin = 12 buah, 1 mol = 6,02×10²³ partikel. Jika 1 lusin telur = 12 telur, maka 2 lusin = 24 telur. Sama seperti 2 mol H₂O = 2 × 6,02×10²³ molekul'. Gunakan video animasi tentang konsep mol (3 menit)",
      "Latihan terbimbing menghitung mol (20 menit): Guru mendemonstrasikan langkah-langkah di papan tulis: (1) Tulis rumus n = m/Mr, (2) Hitung Mr dari tabel periodik, (3) Substitusi nilai, (4) Hitung. Siswa mengerjakan 10 soal dengan bimbingan: Hitung mol dari 12g C, 32g O₂, 18g H₂O, 40g NaOH, dll. Guru berkeliling membantu siswa yang kesulitan",
      "Pembelajaran koefisien reaksi dengan manipulatif (15 menit): Gunakan model molekul (bola dan stick) atau gambar untuk menunjukkan reaksi 2H₂ + O₂ → 2H₂O. Jelaskan: 'Koefisien 2 di depan H₂ artinya butuh 2 mol H₂, koefisien 1 di depan O₂ artinya butuh 1 mol O₂'. Siswa membuat model untuk reaksi lain: N₂ + 3H₂ → 2NH₃",
      "Praktik membaca dan menggunakan koefisien (20 menit): Worksheet dengan 8 reaksi kimia. Untuk setiap reaksi, siswa menjawab: (a) Berapa mol B dibutuhkan jika 2 mol A bereaksi? (b) Berapa mol C terbentuk? Contoh: Untuk 2Al + 3Cl₂ → 2AlCl₃, jika 4 mol Al bereaksi, berapa mol Cl₂ dibutuhkan? (Jawab: 6 mol)",
      "Tutor sebaya (10 menit): Siswa yang sudah paham (berdasarkan pre-test) membantu teman yang masih kesulitan. Guru menyediakan 5 soal tambahan untuk dipraktikkan bersama",
      "Kuis formatif (10 menit): 5 soal pilihan ganda + 2 uraian singkat tentang konversi massa-mol dan membaca koefisien. Guru memberikan feedback langsung dan menjelaskan kesalahan umum"
    ],
    "media": "Video animasi konsep mol (YouTube: 'What is a Mole?'), model molekul (bola dan stick), tabel periodik ukuran besar, worksheet terstruktur dengan template, kalkulator",
    "strategi": "Analogi konkret (mol = lusin), manipulatif (model molekul), step-by-step dengan template, tutor sebaya, feedback cepat",
    "indikator": "Siswa dapat menghitung mol dari massa dengan benar minimal 8 dari 10 soal, dan dapat membaca koefisien reaksi dengan benar minimal 7 dari 8 soal"
  },
  "pertemuan2": {
    "judul": "Menentukan Pereaksi Pembatas dengan Metode Langkah-Langkah",
    "tujuan": "Siswa dapat menentukan pereaksi pembatas menggunakan metode perbandingan mol/koefisien dan menghitung massa produk dengan benar",
    "durasi": "90 menit",
    "aktivitas": [
      "Review dan kuis cepat (10 menit): 3 soal lisan - (1) Hitung mol dari 24g Mg, (2) Untuk reaksi Mg + 2HCl → MgCl₂ + H₂, jika 1 mol Mg bereaksi, berapa mol HCl dibutuhkan?, (3) Apa yang dimaksud pereaksi pembatas? Siswa menjawab di mini whiteboard",
      "Demonstrasi metode langkah-langkah (15 menit): Guru menyelesaikan 1 contoh soal di papan tulis dengan sangat detail. Soal: 10g Mg + 50g HCl → MgCl₂ + H₂. Tentukan pereaksi pembatas! Langkah: (1) Tulis reaksi setara: Mg + 2HCl → MgCl₂ + H₂, (2) Hitung mol: n(Mg)=10/24=0,417 mol, n(HCl)=50/36,5=1,37 mol, (3) Bagi dengan koefisien: Mg: 0,417/1=0,417, HCl: 1,37/2=0,685, (4) Yang terkecil adalah pereaksi pembatas → Mg. Guru menjelaskan setiap langkah dengan think-aloud",
      "Praktik terbimbing dengan template (25 menit): Siswa mendapat worksheet dengan template 4 kolom: (1) Reaktan, (2) Massa (g), (3) Mol (n=m/Mr), (4) Mol/Koefisien. Siswa mengerjakan 5 soal dengan mengisi template. Guru berkeliling memberikan bimbingan individual. Soal bertingkat: Soal 1-2 (mudah, 2 reaktan), Soal 3-4 (sedang, 2 reaktan dengan angka desimal), Soal 5 (sedang, hitung juga massa produk)",
      "Praktik mandiri dengan soal aplikasi (20 menit): Siswa mengerjakan 3 soal tanpa template, tapi boleh menggunakan checklist langkah-langkah. Soal kontekstual: (1) Industri amonia: 28g N₂ + 9g H₂ → NH₃, (2) Pembakaran: 12g C + 32g O₂ → CO₂, (3) Reaksi asam-basa: 20g NaOH + 36,5g HCl → NaCl + H₂O. Untuk setiap soal, tentukan pereaksi pembatas dan massa produk",
      "Pembahasan kesalahan umum (10 menit): Guru membahas 3 kesalahan yang sering terjadi: (1) Lupa menyetarakan reaksi, (2) Salah menghitung Mr (misal: Ca(OH)₂ = 40+16+1 ❌, seharusnya 40+2(16+1)=74 ✅), (3) Menggunakan reaktan berlebih untuk menghitung produk (seharusnya pakai pereaksi pembatas). Guru memberikan tips: 'Selalu cek: Reaksi setara? Mr benar? Pakai pereaksi pembatas untuk hitung produk?'",
      "Post-test (15 menit): 5 soal uraian dengan tingkat kesulitan sama dengan pembelajaran. Soal mencakup: menentukan pereaksi pembatas (3 soal), menghitung massa produk (2 soal). Guru mengumpulkan dan memberikan feedback di pertemuan berikutnya",
      "Refleksi dan rencana tindak lanjut (5 menit): Siswa menulis refleksi: (1) Apa yang sudah saya pahami?, (2) Apa yang masih sulit?, (3) Strategi apa yang membantu saya?. Guru memberikan rekomendasi: Siswa yang sudah tuntas (≥70%) mendapat soal pengayaan, siswa yang belum tuntas mendapat jadwal bimbingan tambahan"
    ],
    "media": "Worksheet dengan template 4 kolom, checklist langkah-langkah (printable), tabel periodik, kalkulator, soal bertingkat (mudah-sedang-sulit)",
    "strategi": "Template terstruktur, soal bertingkat (scaffolding), checklist langkah-langkah, pembahasan kesalahan umum, feedback individual",
    "indikator": "Siswa dapat menentukan pereaksi pembatas dengan benar minimal 4 dari 5 soal (80%), dan dapat menghitung massa produk dengan benar minimal 3 dari 4 soal (75%)"
  },
  "tindakLanjut": "Untuk siswa yang masih belum tuntas setelah 2 pertemuan: (1) Bimbingan individual 30 menit dengan fokus pada kesulitan spesifik, (2) Video tutorial online yang dapat ditonton berulang (Khan Academy, YouTube), (3) Latihan tambahan dengan soal sangat sederhana dan kunci jawaban bertahap, (4) Peer tutoring dengan siswa yang sudah tuntas, (5) Tes ulang setelah 1 minggu dengan soal setara"
}

SEKARANG BUATKAN PROGRAM REMEDIAL BERKUALITAS TINGGI UNTUK "${materi}":
(Ingat: DIAGNOSIS spesifik, LANGKAH-LANGKAH detail, MEDIA konkret, dan TERUKUR!)`;
        
        const result = await this.generateWithAI(prompt, { mataPelajaran, materi });
        
        if (result) {
            try {
                const jsonMatch = result.match(/\{[\s\S]*\}/);
                if (jsonMatch) {
                    return JSON.parse(jsonMatch[0]);
                }
            } catch (e) {
                console.warn('Failed to parse remedial JSON');
            }
        }
        
        return null;
    },
    
    /**
     * Get remedial guidelines based on subject
     */
    getRemedialGuidelines(mataPelajaran, materi) {
        const guidelines = {
            'Matematika': `- Gunakan manipulatif konkret: blok, garis bilangan, diagram
- Pecah prosedur menjadi langkah-langkah kecil dengan template
- Banyak contoh dengan variasi bertahap (mudah → sedang)
- Gunakan analogi dari kehidupan sehari-hari`,
            
            'Fisika': `- Mulai dari demonstrasi atau eksperimen sederhana
- Gunakan simulasi PhET atau video slow-motion
- Pecah perhitungan menjadi langkah-langkah dengan template
- Hubungkan dengan fenomena sehari-hari yang familiar`,
            
            'Kimia': `- Gunakan model molekul atau visualisasi 3D
- Demonstrasi reaksi sederhana yang dapat diamati
- Template perhitungan dengan kolom terstruktur
- Analogi konkret untuk konsep abstrak (mol = lusin)`,
            
            'Biologi': `- Gunakan gambar, diagram, atau video untuk visualisasi
- Mulai dari contoh organisme/fenomena yang familiar
- Buat tabel perbandingan untuk konsep yang mirip
- Praktikum atau observasi sederhana`,
            
            'IPA': `- Demonstrasi atau eksperimen sederhana yang dapat diamati
- Gunakan alat peraga atau model konkret
- Hubungkan dengan pengalaman sehari-hari siswa
- Video atau animasi untuk konsep abstrak`,
            
            'Bahasa Indonesia': `- Gunakan teks pendek dan sederhana
- Analisis teks dengan panduan pertanyaan terstruktur
- Latihan menulis dengan template atau kerangka
- Contoh konkret dari berbagai jenis teks`,
            
            'Bahasa Inggris': `- Gunakan teks dengan vocabulary sederhana
- Drill grammar dengan pola kalimat berulang
- Latihan speaking/writing dengan sentence starters
- Flashcard untuk vocabulary`,
            
            'IPS': `- Gunakan peta, timeline, atau diagram untuk visualisasi
- Mulai dari contoh lokal/dekat dengan siswa
- Tabel perbandingan untuk konsep yang kompleks
- Video dokumenter pendek untuk konteks`,
            
            'Ekonomi': `- Gunakan contoh transaksi sederhana dari kehidupan siswa
- Diagram atau grafik untuk visualisasi konsep
- Perhitungan dengan template dan angka sederhana
- Simulasi atau role-play untuk konsep abstrak`
        };
        
        return guidelines[mataPelajaran] || `- Gunakan pendekatan konkret dan visual
- Pecah materi menjadi langkah-langkah kecil
- Banyak latihan terbimbing dengan feedback cepat
- Gunakan analogi dan contoh dari kehidupan sehari-hari`;
    }
};

// Export
if (typeof window !== 'undefined') {
    window.AIAPI = AIAPI;
}
