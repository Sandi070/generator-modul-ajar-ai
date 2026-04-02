// Advanced AI Generator for Modul Ajar
// This provides intelligent content generation based on subject and topic

const AIGenerator = {
    
    // Generate subject-specific diagnostic questions
    generateDiagnosticQuestions(mataPelajaran, materi) {
        const materiLower = materi.toLowerCase();
        
        console.log(`🔍 AIGenerator: Generating diagnostic for ${mataPelajaran} - ${materi}`);
        
        // Kimia - Pereaksi Pembatas
        if (mataPelajaran === 'Kimia' && (materiLower.includes('pereaksi pembatas') || materiLower.includes('reaktan pembatas') || materiLower.includes('limiting reagent'))) {
            console.log('✅ Matched: Pereaksi Pembatas');
            return [
                'Jelaskan apa yang dimaksud dengan pereaksi pembatas dalam suatu reaksi kimia!',
                'Jika 10 gram H₂ bereaksi dengan 80 gram O₂ membentuk H₂O, tentukan pereaksi pembatas! (Ar H=1, O=16)',
                'Mengapa penting mengetahui pereaksi pembatas dalam industri kimia?'
            ];
        }
        
        // Kimia - Stoikiometri
        if (mataPelajaran === 'Kimia' && materiLower.includes('stoikiometri')) {
            return [
                'Jelaskan konsep mol dan hubungannya dengan massa atom relatif!',
                'Hitunglah massa 2 mol NaCl! (Ar Na=23, Cl=35,5)',
                'Apa perbedaan antara rumus empiris dan rumus molekul?'
            ];
        }
        
        // Kimia - Ikatan Kimia
        if (mataPelajaran === 'Kimia' && (materiLower.includes('ikatan') || materiLower.includes('kovalen') || materiLower.includes('ion'))) {
            return [
                'Tuliskan konfigurasi elektron dari atom O (Z=8) dan tentukan elektron valensinya!',
                'Jelaskan perbedaan antara ikatan ion dan ikatan kovalen!',
                'Gambarkan struktur Lewis dari molekul H₂O!'
            ];
        }
        
        // Matematika - Fungsi
        if (mataPelajaran === 'Matematika' && materiLower.includes('fungsi')) {
            return [
                `Jelaskan pengertian ${materi} dengan kata-kata Anda sendiri!`,
                `Berikan contoh ${materi} dalam kehidupan sehari-hari!`,
                `Apa perbedaan antara relasi dan fungsi?`
            ];
        }
        
        // Fisika - Gerak
        if (mataPelajaran === 'Fisika' && materiLower.includes('gerak')) {
            return [
                'Jelaskan perbedaan antara jarak dan perpindahan!',
                'Sebutkan besaran-besaran dalam gerak dan satuannya!',
                `Berikan contoh ${materi} dalam kehidupan sehari-hari!`
            ];
        }
        
        // Default
        return [
            `Apa yang Anda ketahui tentang ${materi}?`,
            `Sebutkan konsep-konsep dasar yang berkaitan dengan ${materi}!`,
            `Mengapa penting mempelajari ${materi}?`
        ];
    },
    
    // Generate subject-specific summative questions
    generateSummativeQuestions(mataPelajaran, materi) {
        const materiLower = materi.toLowerCase();
        
        console.log(`🔍 AIGenerator: Generating summative for ${mataPelajaran} - ${materi}`);
        
        // Kimia - Pereaksi Pembatas
        if (mataPelajaran === 'Kimia' && (materiLower.includes('pereaksi pembatas') || materiLower.includes('reaktan pembatas') || materiLower.includes('limiting reagent'))) {
            console.log('✅ Matched: Pereaksi Pembatas');
            return [
                'Sebanyak 6 gram karbon (C) dibakar dengan 16 gram oksigen (O₂) menghasilkan karbon dioksida (CO₂). Reaksi: C + O₂ → CO₂. Tentukan: a) Pereaksi pembatas, b) Massa CO₂ yang terbentuk, c) Massa pereaksi yang tersisa! (Ar C=12, O=16)',
                'Dalam industri pembuatan amonia (NH₃), nitrogen (N₂) direaksikan dengan hidrogen (H₂) menurut reaksi: N₂ + 3H₂ → 2NH₃. Jika tersedia 28 gram N₂ dan 9 gram H₂, tentukan pereaksi pembatas dan massa NH₃ maksimum yang dapat dihasilkan! (Ar N=14, H=1)',
                'Jelaskan mengapa konsep pereaksi pembatas penting dalam: a) Efisiensi produksi industri, b) Perhitungan biaya produksi, c) Minimalisasi limbah kimia!'
            ];
        }
        
        // Kimia - Stoikiometri
        if (mataPelajaran === 'Kimia' && materiLower.includes('stoikiometri')) {
            return [
                'Hitunglah massa 0,5 mol Ca(OH)₂! (Ar Ca=40, O=16, H=1)',
                'Berapa mol yang terkandung dalam 98 gram H₂SO₄? (Ar H=1, S=32, O=16)',
                'Dalam reaksi 2Al + 3Cl₂ → 2AlCl₃, jika 5,4 gram Al bereaksi sempurna, hitunglah massa AlCl₃ yang terbentuk! (Ar Al=27, Cl=35,5)'
            ];
        }
        
        // Kimia - Ikatan Kimia
        if (mataPelajaran === 'Kimia' && materiLower.includes('ikatan')) {
            return [
                'Gambarkan struktur Lewis dari senyawa: a) CO₂, b) NH₃, c) CH₄. Jelaskan jenis ikatan yang terbentuk!',
                'Bandingkan sifat-sifat senyawa ion (NaCl) dengan senyawa kovalen (H₂O) ditinjau dari: titik leleh, daya hantar listrik, dan kelarutan!',
                'Jelaskan proses pembentukan ikatan ion antara Na (Z=11) dan Cl (Z=17) dengan diagram elektron!'
            ];
        }
        
        // Matematika
        if (mataPelajaran === 'Matematika') {
            return [
                `Selesaikan soal berikut yang berkaitan dengan ${materi} dan jelaskan langkah-langkahnya!`,
                `Buatlah model matematika dari situasi nyata yang melibatkan konsep ${materi}!`,
                `Analisis dan evaluasi solusi dari masalah ${materi} dengan menggunakan berbagai metode!`
            ];
        }
        
        // Fisika
        if (mataPelajaran === 'Fisika') {
            return [
                `Selesaikan soal perhitungan berikut yang berkaitan dengan ${materi}!`,
                `Rancang eksperimen sederhana untuk membuktikan konsep ${materi}!`,
                `Analisis penerapan ${materi} dalam teknologi modern!`
            ];
        }
        
        // Default
        return [
            `Jelaskan konsep ${materi} secara komprehensif dengan contoh konkret!`,
            `Analisis penerapan ${materi} dalam konteks kehidupan nyata!`,
            `Evaluasi dampak pemahaman ${materi} terhadap perkembangan ilmu pengetahuan!`
        ];
    },
    
    // Generate specific learning activities based on topic
    generateSpecificActivities(mataPelajaran, materi, fase) {
        const materiLower = materi.toLowerCase();
        
        // Kimia - Pereaksi Pembatas
        if (mataPelajaran === 'Kimia' && materiLower.includes('pereaksi pembatas')) {
            if (fase === 'orientasi') {
                return [
                    'Guru mendemonstrasikan reaksi antara pita magnesium dengan larutan HCl dalam jumlah terbatas.',
                    'Siswa mengamati bahwa reaksi berhenti meskipun masih ada pita magnesium yang tersisa.',
                    'Guru mengajukan pertanyaan: "Mengapa reaksi berhenti padahal masih ada magnesium? Apa yang membatasi reaksi ini?"'
                ];
            } else if (fase === 'penyelidikan') {
                return [
                    'Siswa melakukan percobaan dengan variasi mol reaktan untuk menentukan pereaksi pembatas.',
                    'Siswa menghitung mol masing-masing reaktan dan membandingkan dengan koefisien reaksi.',
                    'Siswa menggunakan konsep perbandingan mol untuk menentukan reaktan mana yang habis terlebih dahulu.',
                    'Siswa menghitung massa produk maksimum yang dapat terbentuk berdasarkan pereaksi pembatas.'
                ];
            }
        }
        
        // Kimia - Stoikiometri
        if (mataPelajaran === 'Kimia' && materiLower.includes('stoikiometri')) {
            if (fase === 'penyelidikan') {
                return [
                    'Siswa menghitung massa molar berbagai senyawa menggunakan tabel periodik.',
                    'Siswa melakukan konversi antara massa, mol, dan jumlah partikel.',
                    'Siswa menyelesaikan soal perhitungan stoikiometri dengan langkah sistematis.',
                    'Siswa memverifikasi hasil perhitungan dengan hukum kekekalan massa.'
                ];
            }
        }
        
        return null; // Return null if no specific activities
    },
    
    // Generate specific enrichment activities
    generateEnrichment(mataPelajaran, materi) {
        const materiLower = materi.toLowerCase();
        
        console.log(`🎯 AIGenerator: Generating enrichment for ${mataPelajaran} - ${materi}`);
        
        // Kimia - Pereaksi Pembatas
        if (mataPelajaran === 'Kimia' && (materiLower.includes('pereaksi pembatas') || materiLower.includes('reaktan pembatas'))) {
            console.log('✅ Matched: Pereaksi Pembatas Enrichment');
            return {
                judul: 'Proyek Riset: "Optimalisasi Efisiensi Reaksi dalam Industri Kimia"',
                deskripsi: 'Siswa melakukan penelitian mendalam tentang penerapan konsep pereaksi pembatas dalam industri kimia untuk meningkatkan efisiensi produksi dan mengurangi limbah.',
                aktivitas: [
                    'Melakukan studi kasus tentang industri pembuatan amonia (Proses Haber-Bosch) dan menganalisis bagaimana penentuan pereaksi pembatas mempengaruhi efisiensi produksi',
                    'Menghitung biaya produksi berdasarkan harga reaktan dan menentukan komposisi optimal untuk meminimalkan biaya dengan mempertimbangkan pereaksi pembatas',
                    'Merancang eksperimen virtual menggunakan software simulasi kimia untuk menguji berbagai rasio reaktan dan mengidentifikasi kondisi optimal',
                    'Membuat presentasi multimedia yang menjelaskan dampak ekonomi dan lingkungan dari pemahaman konsep pereaksi pembatas dalam industri',
                    'Menulis laporan ilmiah tentang strategi minimalisasi limbah kimia melalui perhitungan pereaksi pembatas yang akurat'
                ],
                penilaian: 'Laporan penelitian (40%), Presentasi (30%), Kreativitas solusi (20%), Kerja sama tim (10%)'
            };
        }
        
        // Kimia - Stoikiometri
        if (mataPelajaran === 'Kimia' && materiLower.includes('stoikiometri')) {
            return {
                judul: 'Proyek Aplikasi: "Kalkulator Stoikiometri Digital"',
                deskripsi: 'Siswa membuat aplikasi sederhana untuk menghitung stoikiometri reaksi kimia.',
                aktivitas: [
                    'Merancang algoritma perhitungan stoikiometri untuk berbagai jenis reaksi',
                    'Membuat interface user-friendly menggunakan tools seperti Excel, Google Sheets, atau aplikasi web sederhana',
                    'Menguji aplikasi dengan berbagai contoh soal stoikiometri',
                    'Mempresentasikan aplikasi dan mendemonstrasikan cara penggunaannya',
                    'Membuat tutorial video tentang penggunaan aplikasi'
                ],
                penilaian: 'Fungsionalitas aplikasi (40%), Kreativitas (25%), Presentasi (20%), Dokumentasi (15%)'
            };
        }
        
        // Kimia - Ikatan Kimia
        if (mataPelajaran === 'Kimia' && materiLower.includes('ikatan')) {
            return {
                judul: 'Proyek Kreatif: "Model 3D Struktur Molekul"',
                deskripsi: 'Siswa membuat model tiga dimensi dari berbagai molekul untuk memahami struktur dan jenis ikatan.',
                aktivitas: [
                    'Memilih 5 molekul dengan jenis ikatan berbeda (ion, kovalen polar, kovalen non-polar)',
                    'Membuat model 3D menggunakan bahan seperti styrofoam, kawat, atau software modeling 3D',
                    'Menganalisis hubungan antara struktur molekul dengan sifat fisika dan kimia senyawa',
                    'Membuat poster ilmiah yang menjelaskan karakteristik setiap molekul',
                    'Mempresentasikan model dan analisis di depan kelas'
                ],
                penilaian: 'Akurasi model (35%), Analisis (30%), Kreativitas (20%), Presentasi (15%)'
            };
        }
        
        // Default untuk mata pelajaran lain
        return {
            judul: `Proyek Eksplorasi: "${materi} dalam Kehidupan Modern"`,
            deskripsi: `Siswa melakukan penelitian mendalam tentang penerapan ${materi} dalam kehidupan sehari-hari dan perkembangan teknologi.`,
            aktivitas: [
                `Melakukan riset literatur tentang aplikasi ${materi} dalam berbagai bidang`,
                'Membuat studi kasus dari fenomena nyata yang relevan',
                'Menganalisis dampak positif dan negatif dari penerapan konsep tersebut',
                'Merancang solusi inovatif untuk masalah yang ditemukan',
                'Membuat presentasi multimedia dan laporan tertulis'
            ],
            penilaian: 'Laporan penelitian (40%), Presentasi (30%), Kreativitas (20%), Analisis kritis (10%)'
        };
    },
    
    // Generate specific remedial activities
    generateRemedial(mataPelajaran, materi) {
        const materiLower = materi.toLowerCase();
        
        console.log(`🔧 AIGenerator: Generating remedial for ${mataPelajaran} - ${materi}`);
        
        // Kimia - Pereaksi Pembatas
        if (mataPelajaran === 'Kimia' && (materiLower.includes('pereaksi pembatas') || materiLower.includes('reaktan pembatas'))) {
            console.log('✅ Matched: Pereaksi Pembatas Remedial');
            return {
                pertemuan1: {
                    judul: 'Pemahaman Konsep Dasar: Mol dan Perbandingan Koefisien',
                    tujuan: 'Memastikan siswa memahami konsep mol dan cara membaca koefisien reaksi sebelum mempelajari pereaksi pembatas',
                    aktivitas: [
                        'Diagnosis ulang: Siswa mengerjakan 5 soal sederhana tentang konversi massa ke mol (contoh: Berapa mol dalam 12 gram C? Ar C=12)',
                        'Review konsep mol dengan analogi sederhana: "Mol seperti lusin, 1 mol = 6,02 × 10²³ partikel"',
                        'Latihan terbimbing: Menghitung mol dari massa menggunakan rumus n = m/Mr dengan 10 contoh soal',
                        'Pembelajaran koefisien reaksi: Memahami bahwa koefisien menunjukkan perbandingan mol (2H₂ + O₂ → 2H₂O berarti 2 mol H₂ bereaksi dengan 1 mol O₂)',
                        'Tutor sebaya: Siswa yang sudah paham membantu teman yang masih kesulitan',
                        'Evaluasi: Kuis 10 soal tentang konversi massa-mol dan membaca koefisien reaksi'
                    ],
                    media: 'Video animasi tentang konsep mol, worksheet perhitungan, tabel periodik',
                    indikator: 'Siswa dapat menghitung mol dari massa dengan benar minimal 8 dari 10 soal'
                },
                pertemuan2: {
                    judul: 'Penerapan: Menentukan Pereaksi Pembatas Langkah demi Langkah',
                    tujuan: 'Siswa mampu menentukan pereaksi pembatas menggunakan metode perbandingan mol dengan koefisien',
                    aktivitas: [
                        'Review singkat: Mengulang konsep mol dan koefisien reaksi (10 menit)',
                        'Demonstrasi langkah-langkah: Guru menyelesaikan 1 contoh soal di papan tulis dengan langkah sangat detail',
                        'Langkah 1: Tulis persamaan reaksi setara',
                        'Langkah 2: Hitung mol masing-masing reaktan dari massa yang diketahui',
                        'Langkah 3: Bagi mol dengan koefisien masing-masing reaktan',
                        'Langkah 4: Reaktan dengan hasil bagi terkecil adalah pereaksi pembatas',
                        'Latihan terbimbing: Siswa mengerjakan 5 soal dengan bimbingan guru, menggunakan template langkah-langkah',
                        'Latihan mandiri: Siswa mengerjakan 5 soal tambahan secara mandiri',
                        'Diskusi kesalahan umum: Membahas kesalahan yang sering terjadi dan cara menghindarinya',
                        'Evaluasi akhir: Tes 5 soal untuk mengukur pemahaman'
                    ],
                    media: 'Lembar kerja dengan template langkah-langkah, contoh soal bertingkat (mudah-sedang-sulit), kalkulator',
                    indikator: 'Siswa dapat menentukan pereaksi pembatas dengan benar minimal 4 dari 5 soal'
                }
            };
        }
        
        // Kimia - Stoikiometri
        if (mataPelajaran === 'Kimia' && materiLower.includes('stoikiometri')) {
            return {
                pertemuan1: {
                    judul: 'Penguatan Konsep: Massa Molar dan Konversi',
                    tujuan: 'Memastikan siswa dapat menghitung massa molar dan melakukan konversi massa-mol',
                    aktivitas: [
                        'Pre-test: Mengidentifikasi kesulitan spesifik siswa dalam stoikiometri',
                        'Review tabel periodik: Cara membaca dan menggunakan massa atom relatif (Ar)',
                        'Latihan menghitung Mr: 15 contoh senyawa dari yang sederhana (H₂O) hingga kompleks (Ca(OH)₂)',
                        'Drill konversi: Latihan intensif konversi massa ke mol dan sebaliknya',
                        'Pembelajaran dengan video: Menonton video tutorial tentang perhitungan stoikiometri',
                        'Evaluasi: Kuis 10 soal konversi massa-mol'
                    ],
                    media: 'Tabel periodik, kalkulator, video tutorial, worksheet',
                    indikator: 'Siswa dapat menghitung Mr dan konversi massa-mol dengan benar minimal 8 dari 10 soal'
                },
                pertemuan2: {
                    judul: 'Aplikasi: Perhitungan Stoikiometri dalam Reaksi',
                    tujuan: 'Siswa mampu menyelesaikan soal stoikiometri reaksi kimia',
                    aktivitas: [
                        'Review persamaan reaksi setara',
                        'Latihan terbimbing: 5 soal stoikiometri dengan panduan langkah demi langkah',
                        'Metode RICE (Reaction, Initial, Change, Equilibrium) untuk soal kompleks',
                        'Praktik mandiri dengan soal bertingkat',
                        'Tes evaluasi akhir'
                    ],
                    media: 'Lembar kerja bertingkat, contoh soal dengan pembahasan detail',
                    indikator: 'Siswa dapat menyelesaikan soal stoikiometri dengan benar minimal 7 dari 10 soal'
                }
            };
        }
        
        // Default
        return {
            pertemuan1: {
                judul: 'Pemahaman Konsep Dasar',
                tujuan: `Memastikan pemahaman fundamental tentang ${materi}`,
                aktivitas: [
                    'Diagnosis ulang dengan soal sederhana untuk mengidentifikasi kesulitan spesifik',
                    'Review konsep dasar dengan menggunakan analogi dan contoh konkret dari kehidupan sehari-hari',
                    'Pembelajaran dengan tutor sebaya: Siswa yang sudah paham membantu teman yang kesulitan',
                    'Latihan terbimbing menggunakan worksheet dengan panduan langkah demi langkah',
                    'Diskusi kelompok kecil untuk membahas kesulitan dan berbagi strategi pemahaman',
                    'Evaluasi pemahaman dengan kuis singkat'
                ],
                media: 'Video pembelajaran, worksheet terstruktur, alat peraga visual',
                indikator: 'Siswa dapat menjelaskan konsep dasar dengan benar'
            },
            pertemuan2: {
                judul: 'Penerapan dan Latihan Intensif',
                tujuan: `Menguasai aplikasi ${materi} melalui latihan terstruktur`,
                aktivitas: [
                    'Review singkat konsep yang telah dipelajari di pertemuan sebelumnya',
                    'Demonstrasi penyelesaian soal oleh guru dengan penjelasan detail setiap langkah',
                    'Praktik terbimbing: Siswa mengerjakan soal dengan bimbingan guru',
                    'Latihan mandiri dengan soal bertingkat dari mudah ke sulit',
                    'Pembahasan kesalahan umum dan cara menghindarinya',
                    'Evaluasi akhir untuk mengukur peningkatan pemahaman'
                ],
                media: 'Lembar latihan bertingkat, contoh soal dengan pembahasan, kalkulator (jika diperlukan)',
                indikator: 'Siswa dapat menyelesaikan soal aplikasi dengan benar minimal 70%'
            }
        };
    }
};

// Export for use in main app
if (typeof window !== 'undefined') {
    window.AIGenerator = AIGenerator;
}