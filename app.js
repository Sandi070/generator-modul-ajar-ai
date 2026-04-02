// Generator Modul Ajar AI - Complete Working Version
let generatedModul = null;

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, app initializing...');
    initializeApp();
});

function initializeApp() {
    // Setup form submission
    const form = document.getElementById('modulForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
        console.log('✅ Form event listener added');
    } else {
        console.error('❌ Form not found');
    }
    
    // Setup download button
    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', handleDownload);
        console.log('✅ Download button event listener added');
    }
    
    console.log('✅ App initialized successfully');
}

async function handleFormSubmit(e) {
    e.preventDefault();
    console.log('Form submitted');
    
    const generateBtn = document.getElementById('generateBtn');
    const btnText = generateBtn.querySelector('.btn-text');
    const loader = generateBtn.querySelector('.loader');
    
    try {
        // Show loading
        generateBtn.disabled = true;
        if (btnText) btnText.textContent = 'Generating with AI...';
        if (loader) loader.style.display = 'inline-block';
        
        // Collect form data
        const formData = collectFormData();
        console.log('✅ Form data collected');
        
        // Generate modul (now async because of AI)
        generatedModul = await generateModulAjar(formData);
        console.log('✅ Modul generated');
        
        // Display result
        displayResult(generatedModul);
        console.log('✅ Result displayed');
        
        // Show and scroll to result
        const resultContainer = document.getElementById('resultContainer');
        if (resultContainer) {
            resultContainer.style.display = 'block';
            setTimeout(() => {
                resultContainer.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
        
    } catch (error) {
        console.error('❌ Error:', error);
        alert(`Terjadi kesalahan: ${error.message}`);
    } finally {
        // Reset button
        generateBtn.disabled = false;
        if (btnText) btnText.textContent = '🤖 Generate Modul Ajar dengan AI';
        if (loader) loader.style.display = 'none';
    }
}

function collectFormData() {
    const pendekatan = Array.from(document.querySelectorAll('input[name="pendekatan"]:checked'))
        .map(cb => cb.value);
    
    return {
        namaPenyusun: document.getElementById('namaPenyusun').value,
        instansi: document.getElementById('instansi').value,
        mataPelajaran: document.getElementById('mataPelajaran').value,
        faseKelas: document.getElementById('faseKelas').value,
        semester: document.getElementById('semester').value,
        tahunPelajaran: document.getElementById('tahunPelajaran').value,
        materi: document.getElementById('materi').value,
        alokasiWaktu: document.getElementById('alokasiWaktu').value,
        pendekatan: pendekatan,
        modelPembelajaran: document.getElementById('modelPembelajaran').value,
        kompetensiAwal: document.getElementById('kompetensiAwal').value,
        capaianPembelajaran: document.getElementById('capaianPembelajaran').value,
        tujuanPembelajaran: document.getElementById('tujuanPembelajaran').value
    };
}

async function generateModulAjar(data) {
    console.log('Generating modul ajar with AI...');
    
    return {
        identitas: {
            namaPenyusun: data.namaPenyusun,
            instansi: data.instansi,
            mataPelajaran: data.mataPelajaran,
            faseKelas: data.faseKelas,
            semester: data.semester,
            tahunPelajaran: data.tahunPelajaran,
            materi: data.materi,
            alokasiWaktu: `${data.alokasiWaktu} JP (${data.alokasiWaktu} x 45 menit)`
        },
        kompetensiAwal: generateKompetensiAwal(data),
        dimensiProfil: generateDimensiProfil(data),
        capaianPembelajaran: data.capaianPembelajaran,
        tujuanPembelajaran: generateTujuanPembelajaran(data),
        modelPendekatan: generateModelPendekatan(data),
        saranaPrasarana: generateSaranaPrasarana(data),
        langkahPembelajaran: await generateLangkahPembelajaran(data),
        asesmen: await generateAsesmen(data),
        pengayaanRemedial: await generatePengayaanRemedial(data)
    };
}

function generateKompetensiAwal(data) {
    const kompetensiList = data.kompetensiAwal.split('\n').filter(k => k.trim());
    if (kompetensiList.length > 0) {
        return kompetensiList.map(k => k.replace(/^[-•]\s*/, '').trim());
    }
    
    const defaults = {
        'Matematika': ['Operasi bilangan dasar', 'Pemahaman konsep aljabar'],
        'Fisika': ['Konsep besaran dan satuan', 'Pemahaman gerak'],
        'Kimia': ['Struktur atom', 'Tabel periodik unsur'],
        'Biologi': ['Karakteristik makhluk hidup', 'Organisasi kehidupan'],
        'Al-Quran Hadits': ['Membaca Al-Quran', 'Pemahaman hadits'],
        'Akidah Akhlak': ['Rukun iman', 'Akhlak terpuji']
    };
    
    return defaults[data.mataPelajaran] || ['Pemahaman konsep dasar'];
}

function generateDimensiProfil(data) {
    let dimensi = [
        'Beriman, bertakwa kepada Tuhan YME dan berakhlak mulia',
        'Bernalar kritis'
    ];
    
    if (data.pendekatan.includes('karakter')) dimensi.push('Berkebinekaan global');
    if (data.pendekatan.includes('moderasi')) dimensi.push('Gotong royong');
    if (data.pendekatan.includes('inovatif') || data.pendekatan.includes('tik')) dimensi.push('Kreatif');
    
    return [...new Set(dimensi)];
}

function generateTujuanPembelajaran(data) {
    const tujuanList = data.tujuanPembelajaran.split('\n').filter(t => t.trim());
    if (tujuanList.length > 0) {
        return tujuanList.map(t => t.replace(/^[-•]\s*/, '').trim());
    }
    return [`Memahami konsep ${data.materi}`, `Mengaplikasikan ${data.materi}`];
}

function generateModelPendekatan(data) {
    let pendekatan = ['Pembelajaran mendalam', 'Saintifik', 'Berpusat pada siswa'];
    
    if (data.pendekatan.includes('karakter')) pendekatan.push('Pendidikan karakter');
    if (data.pendekatan.includes('moderasi')) pendekatan.push('Moderasi beragama');
    if (data.pendekatan.includes('tik')) pendekatan.push('Berbasis TIK');
    
    return {
        model: data.modelPembelajaran,
        pendekatan: pendekatan
    };
}

function generateSaranaPrasarana(data) {
    let sarana = ['Laptop/Komputer', 'Proyektor/Smart TV', 'LKPD'];
    
    if (data.pendekatan.includes('tik')) {
        sarana.push('Aplikasi digital', 'Internet/WiFi');
    }
    
    const tools = {
        'Fisika': ['Alat praktikum', 'Software simulasi'],
        'Kimia': ['Alat laboratorium', 'Model molekul'],
        'Matematika': ['Kalkulator', 'Software GeoGebra'],
        'Al-Quran Hadits': ['Mushaf Al-Quran', 'Audio tilawah']
    };
    
    if (tools[data.mataPelajaran]) {
        sarana.push(...tools[data.mataPelajaran]);
    }
    
    return sarana;
}

async function generateLangkahPembelajaran(data) {
    const pendahuluan = [
        'Guru membuka pembelajaran dengan salam dan berdoa bersama.',
        'Guru memeriksa kesiapan dan kehadiran peserta didik.',
        `Guru memberikan pertanyaan pemantik tentang ${data.materi}.`,
        'Guru menyampaikan tujuan pembelajaran.'
    ];
    
    const kegiatan = await generateKegiatanInti(data);
    
    const penutup = [
        'Guru dan peserta didik menyimpulkan materi bersama.',
        'Peserta didik menulis refleksi pembelajaran.',
        'Guru memberikan umpan balik dan apresiasi.'
    ];
    
    return { pendahuluan, kegiatan, penutup };
}

async function generateKegiatanInti(data) {
    const materiLower = data.materi.toLowerCase();
    
    // Try AI API first for best quality
    if (typeof AIAPI !== 'undefined' && CONFIG.AI_API.enabled) {
        console.log('🤖 Using AI API for learning activities...');
        
        try {
            const aiResult = await AIAPI.generateLearningActivitiesAI(
                data.mataPelajaran,
                data.materi,
                data.faseKelas,
                data.modelPembelajaran,
                data.tujuanPembelajaran
            );
            
            if (aiResult && Array.isArray(aiResult) && aiResult.length > 0) {
                console.log('✅ AI-generated learning activities');
                return aiResult;
            }
        } catch (error) {
            console.error('❌ AI generation failed:', error);
        }
    }
    
    // Check for specific topics that need customized steps
    if (data.mataPelajaran === 'Kimia' && (materiLower.includes('pereaksi pembatas') || materiLower.includes('reaktan pembatas'))) {
        console.log('✅ Using specific steps for Pereaksi Pembatas');
        return [
            {
                fase: 'Orientasi Masalah',
                aktivitas: [
                    'Guru mendemonstrasikan reaksi antara pita magnesium dengan larutan HCl dalam jumlah terbatas.',
                    'Siswa mengamati bahwa reaksi berhenti meskipun masih ada pita magnesium yang tersisa.',
                    'Guru mengajukan pertanyaan: "Mengapa reaksi berhenti padahal masih ada magnesium? Apa yang membatasi reaksi ini?"',
                    'Siswa mendiskusikan fenomena dan merumuskan masalah tentang pereaksi pembatas.'
                ]
            },
            {
                fase: 'Organisasi Belajar',
                aktivitas: [
                    'Siswa dibagi ke dalam kelompok heterogen (4-5 orang).',
                    'Setiap kelompok menerima LKPD tentang perhitungan pereaksi pembatas.',
                    'Guru menjelaskan tugas: menentukan pereaksi pembatas dari berbagai reaksi kimia.',
                    'Siswa merencanakan strategi penyelesaian masalah.'
                ]
            },
            {
                fase: 'Penyelidikan dan Pengumpulan Data',
                aktivitas: [
                    'Siswa mempelajari konsep mol dan perbandingan koefisien reaksi.',
                    'Siswa menghitung mol masing-masing reaktan dari massa yang diberikan.',
                    'Siswa membandingkan rasio mol reaktan dengan koefisien reaksi.',
                    'Siswa menentukan reaktan mana yang habis terlebih dahulu (pereaksi pembatas).',
                    'Siswa menghitung massa produk maksimum berdasarkan pereaksi pembatas.',
                    'Siswa menghitung massa reaktan berlebih yang tersisa.'
                ]
            },
            {
                fase: 'Pengembangan dan Penyajian Hasil',
                aktivitas: [
                    'Setiap kelompok menyelesaikan soal perhitungan pereaksi pembatas.',
                    'Kelompok mempresentasikan langkah-langkah penyelesaian di depan kelas.',
                    'Kelompok lain memberikan tanggapan dan pertanyaan.',
                    'Guru memfasilitasi diskusi tentang strategi penentuan pereaksi pembatas.'
                ]
            },
            {
                fase: 'Analisis dan Evaluasi',
                aktivitas: [
                    'Siswa merefleksi proses pemecahan masalah yang telah dilakukan.',
                    'Guru memberikan penguatan konsep pereaksi pembatas.',
                    'Siswa menganalisis pentingnya konsep ini dalam industri kimia.',
                    'Siswa mengevaluasi efisiensi reaksi berdasarkan pereaksi pembatas.'
                ]
            }
        ];
    }
    
    // Default steps based on model
    const steps = {
        'PBL': [
            {
                fase: 'Orientasi Masalah',
                aktivitas: [
                    `Guru menyajikan masalah autentik terkait ${data.materi}.`,
                    'Siswa mengamati dan mengidentifikasi masalah.',
                    'Guru memfasilitasi diskusi pemahaman masalah.'
                ]
            },
            {
                fase: 'Organisasi Belajar',
                aktivitas: [
                    'Siswa dibagi ke dalam kelompok heterogen (4-5 orang).',
                    'Setiap kelompok mendefinisikan tugas belajar.',
                    'Guru membagikan LKPD untuk memandu penyelidikan.'
                ]
            },
            {
                fase: 'Penyelidikan',
                aktivitas: [
                    `Siswa mengumpulkan informasi tentang ${data.materi}.`,
                    'Siswa melakukan eksperimen atau observasi.',
                    'Guru memberikan bimbingan sesuai kebutuhan.'
                ]
            },
            {
                fase: 'Penyajian Hasil',
                aktivitas: [
                    'Setiap kelompok mempresentasikan hasil penyelidikan.',
                    'Kelompok lain memberikan tanggapan konstruktif.',
                    'Guru memfasilitasi diskusi kelas.'
                ]
            },
            {
                fase: 'Evaluasi',
                aktivitas: [
                    'Siswa merefleksi proses pemecahan masalah.',
                    'Guru memberikan penguatan konsep.',
                    'Siswa mengevaluasi efektivitas strategi yang digunakan.'
                ]
            }
        ],
        'Discovery': [
            {
                fase: 'Stimulation',
                aktivitas: [
                    `Guru menyajikan fenomena terkait ${data.materi}.`,
                    'Siswa mengamati dan mengidentifikasi hal menarik.',
                    'Guru mendorong siswa mengajukan pertanyaan.'
                ]
            },
            {
                fase: 'Problem Statement',
                aktivitas: [
                    'Siswa merumuskan masalah dari observasi.',
                    'Guru memfasilitasi fokus masalah.',
                    'Siswa menyusun hipotesis awal.'
                ]
            },
            {
                fase: 'Data Collection',
                aktivitas: [
                    'Siswa mengumpulkan informasi dan data.',
                    'Siswa melakukan eksperimen atau observasi.',
                    'Guru membimbing teknik pengumpulan data.'
                ]
            },
            {
                fase: 'Verification',
                aktivitas: [
                    'Siswa memverifikasi hasil dengan teori.',
                    'Siswa melakukan cross-check dengan referensi.',
                    'Guru memfasilitasi diskusi validasi.'
                ]
            }
        ],
        'Cooperative': [
            {
                fase: 'Pembentukan Kelompok',
                aktivitas: [
                    'Guru membentuk kelompok heterogen.',
                    'Setiap kelompok memiliki peran jelas.',
                    'Guru menjelaskan aturan kerja kelompok.'
                ]
            },
            {
                fase: 'Kegiatan Kelompok',
                aktivitas: [
                    'Kelompok mengerjakan tugas bersama.',
                    'Anggota saling membantu dan berbagi.',
                    'Guru memastikan semua berpartisipasi.'
                ]
            },
            {
                fase: 'Presentasi',
                aktivitas: [
                    'Setiap kelompok mempresentasikan hasil.',
                    'Kelompok lain memberikan tanggapan.',
                    'Guru memfasilitasi diskusi kelas.'
                ]
            }
        ]
    };
    
    return steps[data.modelPembelajaran] || [
        {
            fase: 'Eksplorasi',
            aktivitas: [
                `Siswa mempelajari ${data.materi} melalui diskusi.`,
                'Guru memfasilitasi tanya jawab.',
                'Siswa mengerjakan latihan.'
            ]
        }
    ];
}

async function generateAsesmen(data) {
    let diagnostikSoal, sumatifSoal;
    
    console.log('🎯 Generating Asesmen with AI...');
    console.log('📚 Mata Pelajaran:', data.mataPelajaran);
    console.log('📖 Materi:', data.materi);
    
    // Try AI API first for best quality
    if (typeof AIAPI !== 'undefined' && CONFIG.AI_API.enabled) {
        console.log('🤖 Using AI API for intelligent generation...');
        
        try {
            // Generate diagnostic questions with AI
            const diagnostikResult = await AIAPI.generateDiagnosticQuestionsAI(
                data.mataPelajaran, 
                data.materi, 
                data.faseKelas,
                data.capaianPembelajaran
            );
            
            if (diagnostikResult && diagnostikResult.length >= 3) {
                diagnostikSoal = diagnostikResult;
                console.log('✅ AI-generated diagnostic questions:', diagnostikSoal);
            }
            
            // Generate summative questions with AI
            const sumatifResult = await AIAPI.generateSummativeQuestionsAI(
                data.mataPelajaran,
                data.materi,
                data.faseKelas,
                data.tujuanPembelajaran
            );
            
            if (sumatifResult && sumatifResult.length >= 3) {
                sumatifSoal = sumatifResult;
                console.log('✅ AI-generated summative questions:', sumatifSoal);
            }
        } catch (error) {
            console.error('❌ AI generation failed:', error);
        }
    }
    
    // Fallback to AIGenerator if AI API failed
    if (!diagnostikSoal || !sumatifSoal) {
        if (typeof AIGenerator !== 'undefined') {
            console.log('⚠️ Using AIGenerator fallback...');
            if (!diagnostikSoal) {
                diagnostikSoal = AIGenerator.generateDiagnosticQuestions(data.mataPelajaran, data.materi);
            }
            if (!sumatifSoal) {
                sumatifSoal = AIGenerator.generateSummativeQuestions(data.mataPelajaran, data.materi);
            }
        } else {
            console.warn('⚠️ Using basic template fallback');
            if (!diagnostikSoal) {
                diagnostikSoal = [
                    `Apa yang Anda ketahui tentang ${data.materi}?`,
                    `Sebutkan manfaat mempelajari ${data.materi}!`,
                    `Bagaimana cara menerapkan ${data.materi}?`
                ];
            }
            if (!sumatifSoal) {
                sumatifSoal = [
                    `Jelaskan konsep ${data.materi} secara komprehensif!`,
                    `Analisis penerapan ${data.materi} dalam konteks nyata!`,
                    `Evaluasi dampak ${data.materi} terhadap kehidupan!`
                ];
            }
        }
    }
    
    return {
        diagnostik: {
            petunjuk: `Kerjakan soal berikut untuk mengetahui pemahaman awal tentang ${data.materi}.`,
            soal: diagnostikSoal
        },
        formatif: {
            deskripsi: 'Observasi selama proses pembelajaran dan diskusi kelompok',
            instrumen: 'Lembar observasi dan rubrik penilaian'
        },
        sumatif: {
            soal: sumatifSoal
        },
        rubrik: [
            {
                nama: 'Pemahaman Konsep',
                kriteria: {
                    4: 'Memahami konsep dengan sempurna dan dapat menjelaskan dengan detail',
                    3: 'Memahami konsep dengan baik dengan sedikit kekurangan',
                    2: 'Memahami sebagian konsep dengan banyak kekurangan',
                    1: 'Tidak memahami konsep atau penjelasan salah'
                }
            },
            {
                nama: 'Keterampilan Aplikasi',
                kriteria: {
                    4: 'Dapat mengaplikasikan dengan tepat dalam berbagai konteks',
                    3: 'Dapat mengaplikasikan dengan baik dalam konteks tertentu',
                    2: 'Dapat mengaplikasikan dengan bimbingan intensif',
                    1: 'Tidak dapat mengaplikasikan konsep'
                }
            },
            {
                nama: 'Kerja Sama Tim',
                kriteria: {
                    4: 'Seluruh anggota terlibat aktif dan saling mendukung',
                    3: 'Sebagian besar anggota terlibat dengan baik',
                    2: 'Hanya beberapa anggota yang aktif berpartisipasi',
                    1: 'Tim tidak terkoordinasi dengan baik'
                }
            }
        ]
    };
}

async function generatePengayaanRemedial(data) {
    console.log('🎓 Generating Pengayaan & Remedial with AI...');
    
    let pengayaan, remedial;
    
    // Try AI API first for best quality
    if (typeof AIAPI !== 'undefined' && CONFIG.AI_API.enabled) {
        console.log('🤖 Using AI API for enrichment and remedial...');
        
        try {
            // Generate enrichment with AI
            const pengayaanResult = await AIAPI.generateEnrichmentAI(
                data.mataPelajaran,
                data.materi,
                data.faseKelas
            );
            
            if (pengayaanResult) {
                pengayaan = pengayaanResult;
                console.log('✅ AI-generated enrichment');
            }
            
            // Generate remedial with AI
            const remedialResult = await AIAPI.generateRemedialAI(
                data.mataPelajaran,
                data.materi,
                data.faseKelas
            );
            
            if (remedialResult) {
                remedial = remedialResult;
                console.log('✅ AI-generated remedial');
            }
        } catch (error) {
            console.error('❌ AI generation failed:', error);
        }
    }
    
    // Fallback to AIGenerator if AI API failed
    if (!pengayaan || !remedial) {
        if (typeof AIGenerator !== 'undefined') {
            console.log('⚠️ Using AIGenerator fallback');
            if (!pengayaan) {
                pengayaan = AIGenerator.generateEnrichment(data.mataPelajaran, data.materi);
            }
            if (!remedial) {
                remedial = AIGenerator.generateRemedial(data.mataPelajaran, data.materi);
            }
        } else {
            console.warn('⚠️ Using basic template fallback');
            if (!pengayaan) {
                pengayaan = {
                    judul: `Proyek Eksplorasi: "${data.materi} dalam Kehidupan Modern"`,
                    deskripsi: `Siswa melakukan penelitian mendalam tentang ${data.materi}`,
                    aktivitas: [
                        `Lakukan penelitian mendalam tentang ${data.materi}`,
                        'Buat presentasi multimedia hasil penelitian',
                        'Analisis dampak positif dan negatif',
                        'Buat proposal solusi kreatif'
                    ],
                    penilaian: 'Laporan (40%), Presentasi (30%), Kreativitas (30%)'
                };
            }
            
            if (!remedial) {
                remedial = {
                    pertemuan1: {
                        judul: 'Pemahaman Konsep Dasar',
                        tujuan: `Memastikan pemahaman fundamental tentang ${data.materi}`,
                        aktivitas: [
                            'Diagnosis ulang dengan soal sederhana',
                            'Pembelajaran dengan tutor sebaya',
                            'Latihan terbimbing dengan worksheet',
                            'Diskusi kelas untuk membahas kesulitan'
                        ],
                        media: 'Worksheet, video pembelajaran',
                        indikator: 'Siswa dapat menjelaskan konsep dasar'
                    },
                    pertemuan2: {
                        judul: 'Penerapan dan Latihan',
                        tujuan: `Menguasai aplikasi ${data.materi}`,
                        aktivitas: [
                            'Review konsep dengan analogi sederhana',
                            'Praktik terbimbing dengan contoh konkret',
                            'Latihan soal bertingkat',
                            'Evaluasi pemahaman dengan tes'
                        ],
                        media: 'Lembar latihan, contoh soal',
                        indikator: 'Siswa dapat menyelesaikan soal dengan benar'
                    }
                };
            }
        }
    }
    
    return { pengayaan, remedial };
}

function displayResult(modul) {
    const preview = document.getElementById('previewContainer');
    if (!preview) {
        console.error('Preview container not found');
        return;
    }
    
    const html = `
        <div class="modul-preview">
            <h3>A. INFORMASI UMUM</h3>
            
            <h4>Identitas Modul</h4>
            <table class="identitas-table">
                <tr><td><strong>Nama Penyusun</strong></td><td>: ${modul.identitas.namaPenyusun}</td></tr>
                <tr><td><strong>Instansi</strong></td><td>: ${modul.identitas.instansi}</td></tr>
                <tr><td><strong>Mata Pelajaran</strong></td><td>: ${modul.identitas.mataPelajaran}</td></tr>
                <tr><td><strong>Fase/Kelas</strong></td><td>: ${modul.identitas.faseKelas}</td></tr>
                <tr><td><strong>Semester</strong></td><td>: ${modul.identitas.semester}</td></tr>
                <tr><td><strong>Tahun Pelajaran</strong></td><td>: ${modul.identitas.tahunPelajaran}</td></tr>
                <tr><td><strong>Materi</strong></td><td>: ${modul.identitas.materi}</td></tr>
                <tr><td><strong>Alokasi Waktu</strong></td><td>: ${modul.identitas.alokasiWaktu}</td></tr>
            </table>
            
            <h4>Kompetensi Awal</h4>
            <ul>${modul.kompetensiAwal.map(k => `<li>${k}</li>`).join('')}</ul>
            
            <h4>Dimensi Profil Lulusan</h4>
            <ul>${modul.dimensiProfil.map(d => `<li>${d}</li>`).join('')}</ul>
            
            <h4>Capaian Pembelajaran</h4>
            <p>${modul.capaianPembelajaran}</p>
            
            <h4>Tujuan Pembelajaran</h4>
            <ul>${modul.tujuanPembelajaran.map(t => `<li>${t}</li>`).join('')}</ul>
            
            <h4>Model dan Pendekatan Pembelajaran</h4>
            <ul>
                <li><strong>Model:</strong> ${modul.modelPendekatan.model}</li>
                <li><strong>Pendekatan:</strong> ${modul.modelPendekatan.pendekatan.join(', ')}</li>
            </ul>
            
            <h4>Sarana dan Prasarana</h4>
            <ul>${modul.saranaPrasarana.map(s => `<li>${s}</li>`).join('')}</ul>
            
            <h3>B. KOMPONEN INTI</h3>
            
            <h4>Langkah-langkah Pembelajaran</h4>
            
            <h5>Kegiatan Pendahuluan</h5>
            <ol>${modul.langkahPembelajaran.pendahuluan.map(p => `<li>${p}</li>`).join('')}</ol>
            
            <h5>Kegiatan Inti</h5>
            ${modul.langkahPembelajaran.kegiatan.map(k => `
                <div class="fase-title">${k.fase}</div>
                <div class="aktivitas-list">
                    <ul>${k.aktivitas.map(a => `<li>${a}</li>`).join('')}</ul>
                </div>
            `).join('')}
            
            <h5>Kegiatan Penutup</h5>
            <ul>${modul.langkahPembelajaran.penutup.map(p => `<li>${p}</li>`).join('')}</ul>
            
            <h4>Asesmen/Penilaian</h4>
            
            <h5>Asesmen Diagnostik</h5>
            <p><strong>Petunjuk:</strong> ${modul.asesmen.diagnostik.petunjuk}</p>
            <ol>${modul.asesmen.diagnostik.soal.map(s => `<li>${s}</li>`).join('')}</ol>
            
            <h5>Asesmen Formatif</h5>
            <p>${modul.asesmen.formatif.deskripsi}</p>
            <p><strong>Instrumen:</strong> ${modul.asesmen.formatif.instrumen}</p>
            
            <h5>Asesmen Sumatif</h5>
            <ol>${modul.asesmen.sumatif.soal.map(s => `<li>${s}</li>`).join('')}</ol>
            
            <h5>Rubrik Penilaian</h5>
            <table class="rubrik-table">
                <thead>
                    <tr>
                        <th>Aspek</th>
                        <th>Skor 4</th>
                        <th>Skor 3</th>
                        <th>Skor 2</th>
                        <th>Skor 1</th>
                    </tr>
                </thead>
                <tbody>
                    ${modul.asesmen.rubrik.map(r => `
                        <tr>
                            <td><strong>${r.nama}</strong></td>
                            <td>${r.kriteria[4]}</td>
                            <td>${r.kriteria[3]}</td>
                            <td>${r.kriteria[2]}</td>
                            <td>${r.kriteria[1]}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            
            <h3>C. KEGIATAN PENGAYAAN DAN REMEDIAL</h3>
            
            <h4>Kegiatan Pengayaan</h4>
            <h5>${modul.pengayaanRemedial.pengayaan.judul}</h5>
            <p><em>${modul.pengayaanRemedial.pengayaan.deskripsi || ''}</em></p>
            <p><strong>Aktivitas:</strong></p>
            <ul>${modul.pengayaanRemedial.pengayaan.aktivitas.map(a => `<li>${a}</li>`).join('')}</ul>
            ${modul.pengayaanRemedial.pengayaan.penilaian ? `<p><strong>Penilaian:</strong> ${modul.pengayaanRemedial.pengayaan.penilaian}</p>` : ''}
            
            <h4>Kegiatan Remedial</h4>
            <h5>Pertemuan 1: ${modul.pengayaanRemedial.remedial.pertemuan1.judul}</h5>
            <p><strong>Tujuan:</strong> ${modul.pengayaanRemedial.remedial.pertemuan1.tujuan}</p>
            <p><strong>Aktivitas:</strong></p>
            <ul>${modul.pengayaanRemedial.remedial.pertemuan1.aktivitas.map(a => `<li>${a}</li>`).join('')}</ul>
            ${modul.pengayaanRemedial.remedial.pertemuan1.media ? `<p><strong>Media:</strong> ${modul.pengayaanRemedial.remedial.pertemuan1.media}</p>` : ''}
            ${modul.pengayaanRemedial.remedial.pertemuan1.indikator ? `<p><strong>Indikator Keberhasilan:</strong> ${modul.pengayaanRemedial.remedial.pertemuan1.indikator}</p>` : ''}
            
            <h5>Pertemuan 2: ${modul.pengayaanRemedial.remedial.pertemuan2.judul}</h5>
            <p><strong>Tujuan:</strong> ${modul.pengayaanRemedial.remedial.pertemuan2.tujuan}</p>
            <p><strong>Aktivitas:</strong></p>
            <ul>${modul.pengayaanRemedial.remedial.pertemuan2.aktivitas.map(a => `<li>${a}</li>`).join('')}</ul>
            ${modul.pengayaanRemedial.remedial.pertemuan2.media ? `<p><strong>Media:</strong> ${modul.pengayaanRemedial.remedial.pertemuan2.media}</p>` : ''}
            ${modul.pengayaanRemedial.remedial.pertemuan2.indikator ? `<p><strong>Indikator Keberhasilan:</strong> ${modul.pengayaanRemedial.remedial.pertemuan2.indikator}</p>` : ''}
        </div>
    `;
    
    preview.innerHTML = html;
    console.log('✅ Result displayed successfully');
}

function handleDownload() {
    if (!generatedModul) {
        alert('Belum ada modul yang di-generate. Silakan generate modul terlebih dahulu.');
        return;
    }
    
    // Show download options
    const format = prompt('Pilih format download:\n1. Word (.docx/.doc)\n2. PDF (.pdf)\n3. HTML (.html)\n\nKetik: word, pdf, atau html', 'word');
    
    if (!format) return; // User cancelled
    
    const formatLower = format.toLowerCase();
    const downloadBtn = document.getElementById('downloadBtn');
    const originalText = downloadBtn.textContent;
    
    try {
        downloadBtn.textContent = '⏳ Generating Document...';
        downloadBtn.disabled = true;
        
        if (formatLower === 'pdf' || formatLower === '2') {
            downloadAsPDF(generatedModul);
        } else if (formatLower === 'html' || formatLower === '3') {
            downloadAsHTML(generatedModul);
        } else {
            // Default to Word - use the simpler HTML-based method
            generateWordFromHTML(generatedModul);
        }
        
        setTimeout(() => {
            downloadBtn.textContent = originalText;
            downloadBtn.disabled = false;
        }, 2000);
        
    } catch (error) {
        console.error('Download error:', error);
        alert('Terjadi kesalahan saat membuat dokumen. Mencoba download sebagai HTML...');
        downloadAsHTML(generatedModul);
        downloadBtn.textContent = originalText;
        downloadBtn.disabled = false;
    }
}

function downloadAsHTML(modul) {
    const htmlContent = document.getElementById('previewContainer').innerHTML;
    const fullHTML = `
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modul Ajar - ${modul.identitas.mataPelajaran} - ${modul.identitas.materi}</title>
    <style>
        body { font-family: 'Times New Roman', serif; padding: 40px; line-height: 1.6; }
        h3 { color: #2E74B5; font-size: 18px; margin-top: 25px; }
        h4 { color: #365F91; font-size: 16px; margin-top: 20px; }
        h5 { color: #4472C4; font-size: 14px; margin-top: 15px; }
        table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        table td, table th { border: 1px solid #ddd; padding: 12px; text-align: left; }
        table th { background: #2E74B5; color: white; }
        .fase-title { background: #4472C4; color: white; padding: 8px; margin: 10px 0; border-radius: 5px; }
        .aktivitas-list { background: #f8f9fa; padding: 15px; margin: 10px 0; border-left: 4px solid #4472C4; }
        @media print { body { padding: 20px; } }
    </style>
</head>
<body>
    ${htmlContent}
</body>
</html>`;
    
    const blob = new Blob([fullHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Modul_Ajar_${modul.identitas.mataPelajaran}_${modul.identitas.materi.replace(/\s+/g, '_')}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert('✅ Modul berhasil didownload sebagai file HTML.\n\nAnda dapat:\n1. Buka di browser dan Print to PDF\n2. Buka di Microsoft Word (File > Open)\n3. Convert online ke Word/PDF');
}

function generateWordFromHTML(modul) {
    try {
        console.log('📄 Generating Word from clean HTML...');
        
        // Generate clean, well-formatted HTML specifically for Word
        const cleanHTML = generateCleanHTMLForWord(modul);
        
        // Create a proper Word document blob
        const blob = new Blob(
            ['\ufeff', cleanHTML], 
            { type: 'application/msword' }
        );
        
        const fileName = `Modul_Ajar_${modul.identitas.mataPelajaran}_${modul.identitas.materi.replace(/\s+/g, '_')}.doc`;
        
        // Download the file
        if (typeof saveAs !== 'undefined') {
            saveAs(blob, fileName);
        } else {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }
        
        console.log('✅ Word document downloaded successfully');
        alert('✅ Modul berhasil didownload sebagai file Word (.doc)\n\nCatatan:\n- Buka dengan Microsoft Word\n- Format sudah rapi dan terstruktur\n- Bisa diedit sesuai kebutuhan');
        
    } catch (error) {
        console.error('Word generation error:', error);
        alert('Gagal membuat Word document. Mencoba download sebagai HTML...');
        downloadAsHTML(modul);
    }
}

function generateCleanHTMLForWord(modul) {
    // Generate clean, well-formatted HTML specifically for Word
    return `
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
    <meta charset='utf-8'>
    <title>Modul Ajar</title>
    <!--[if gte mso 9]>
    <xml>
        <w:WordDocument>
            <w:View>Print</w:View>
            <w:Zoom>100</w:Zoom>
            <w:DoNotOptimizeForBrowser/>
        </w:WordDocument>
    </xml>
    <![endif]-->
    <style>
        @page {
            size: A4;
            margin: 2.54cm;
        }
        body {
            font-family: 'Calibri', 'Arial', sans-serif;
            font-size: 11pt;
            line-height: 1.5;
            color: #000000;
        }
        h1 {
            font-size: 18pt;
            font-weight: bold;
            color: #2E74B5;
            text-align: center;
            margin-top: 0pt;
            margin-bottom: 12pt;
            page-break-after: avoid;
        }
        h2 {
            font-size: 16pt;
            font-weight: bold;
            color: #2E74B5;
            margin-top: 18pt;
            margin-bottom: 10pt;
            page-break-after: avoid;
        }
        h3 {
            font-size: 14pt;
            font-weight: bold;
            color: #365F91;
            margin-top: 14pt;
            margin-bottom: 8pt;
            page-break-after: avoid;
        }
        h4 {
            font-size: 12pt;
            font-weight: bold;
            color: #4472C4;
            margin-top: 12pt;
            margin-bottom: 6pt;
            page-break-after: avoid;
        }
        p {
            margin-top: 0pt;
            margin-bottom: 8pt;
            text-align: justify;
        }
        table {
            border-collapse: collapse;
            width: 100%;
            margin-top: 10pt;
            margin-bottom: 10pt;
        }
        table td, table th {
            border: 1pt solid #000000;
            padding: 6pt;
            vertical-align: top;
        }
        table th {
            background-color: #2E74B5;
            color: #FFFFFF;
            font-weight: bold;
            text-align: left;
        }
        ul, ol {
            margin-top: 6pt;
            margin-bottom: 6pt;
            padding-left: 30pt;
        }
        li {
            margin-bottom: 4pt;
        }
        .section-title {
            background-color: #4472C4;
            color: #FFFFFF;
            padding: 8pt;
            font-weight: bold;
            margin-top: 10pt;
            margin-bottom: 6pt;
        }
        .subsection {
            background-color: #F0F0F0;
            padding: 10pt;
            margin-top: 8pt;
            margin-bottom: 8pt;
            border-left: 4pt solid #4472C4;
        }
        strong {
            font-weight: bold;
        }
        em {
            font-style: italic;
        }
    </style>
</head>
<body>

<h1>MODUL AJAR</h1>
<h1 style="font-size: 16pt;">${modul.identitas.mataPelajaran}</h1>
<h1 style="font-size: 14pt; margin-bottom: 24pt;">${modul.identitas.materi}</h1>

<h2>A. INFORMASI UMUM</h2>

<h3>Identitas Modul</h3>
<table>
    <tr>
        <td style="width: 30%; font-weight: bold;">Nama Penyusun</td>
        <td style="width: 70%;">: ${modul.identitas.namaPenyusun}</td>
    </tr>
    <tr>
        <td style="font-weight: bold;">Instansi</td>
        <td>: ${modul.identitas.instansi}</td>
    </tr>
    <tr>
        <td style="font-weight: bold;">Mata Pelajaran</td>
        <td>: ${modul.identitas.mataPelajaran}</td>
    </tr>
    <tr>
        <td style="font-weight: bold;">Fase/Kelas</td>
        <td>: ${modul.identitas.faseKelas}</td>
    </tr>
    <tr>
        <td style="font-weight: bold;">Semester</td>
        <td>: ${modul.identitas.semester}</td>
    </tr>
    <tr>
        <td style="font-weight: bold;">Tahun Pelajaran</td>
        <td>: ${modul.identitas.tahunPelajaran}</td>
    </tr>
    <tr>
        <td style="font-weight: bold;">Materi</td>
        <td>: ${modul.identitas.materi}</td>
    </tr>
    <tr>
        <td style="font-weight: bold;">Alokasi Waktu</td>
        <td>: ${modul.identitas.alokasiWaktu}</td>
    </tr>
</table>

<h3>Kompetensi Awal</h3>
<ul>
${modul.kompetensiAwal.map(k => `    <li>${k}</li>`).join('\n')}
</ul>

<h3>Dimensi Profil Pelajar Pancasila</h3>
<ul>
${modul.dimensiProfil.map(d => `    <li>${d}</li>`).join('\n')}
</ul>

<h3>Capaian Pembelajaran</h3>
<p>${modul.capaianPembelajaran}</p>

<h3>Tujuan Pembelajaran</h3>
<ul>
${modul.tujuanPembelajaran.map(t => `    <li>${t}</li>`).join('\n')}
</ul>

<h3>Model dan Pendekatan Pembelajaran</h3>
<p><strong>Model Pembelajaran:</strong> ${modul.modelPendekatan.model}</p>
<p><strong>Pendekatan:</strong> ${modul.modelPendekatan.pendekatan.join(', ')}</p>

<h3>Sarana dan Prasarana</h3>
<ul>
${modul.saranaPrasarana.map(s => `    <li>${s}</li>`).join('\n')}
</ul>

<div style="page-break-before: always;"></div>

<h2>B. KOMPONEN INTI</h2>

<h3>Langkah-langkah Pembelajaran</h3>

<h4>Kegiatan Pendahuluan</h4>
<ol>
${modul.langkahPembelajaran.pendahuluan.map(p => `    <li>${p}</li>`).join('\n')}
</ol>

<h4>Kegiatan Inti</h4>
${modul.langkahPembelajaran.kegiatan.map(k => `
<div class="section-title">${k.fase}</div>
<ul>
${k.aktivitas.map(a => `    <li>${a}</li>`).join('\n')}
</ul>
`).join('\n')}

<h4>Kegiatan Penutup</h4>
<ul>
${modul.langkahPembelajaran.penutup.map(p => `    <li>${p}</li>`).join('\n')}
</ul>

<h3>Asesmen/Penilaian</h3>

<h4>Asesmen Diagnostik</h4>
<p><strong>Petunjuk:</strong> ${modul.asesmen.diagnostik.petunjuk}</p>
<ol>
${modul.asesmen.diagnostik.soal.map(s => `    <li>${s}</li>`).join('\n')}
</ol>

<h4>Asesmen Formatif</h4>
<p>${modul.asesmen.formatif.deskripsi}</p>
<p><strong>Instrumen:</strong> ${modul.asesmen.formatif.instrumen}</p>

<h4>Asesmen Sumatif</h4>
<ol>
${modul.asesmen.sumatif.soal.map(s => `    <li>${s}</li>`).join('\n')}
</ol>

<h4>Rubrik Penilaian</h4>
<table>
    <thead>
        <tr>
            <th style="width: 20%;">Aspek</th>
            <th style="width: 20%;">Skor 4 (Sangat Baik)</th>
            <th style="width: 20%;">Skor 3 (Baik)</th>
            <th style="width: 20%;">Skor 2 (Cukup)</th>
            <th style="width: 20%;">Skor 1 (Kurang)</th>
        </tr>
    </thead>
    <tbody>
${modul.asesmen.rubrik.map(r => `
        <tr>
            <td><strong>${r.nama}</strong></td>
            <td>${r.kriteria[4]}</td>
            <td>${r.kriteria[3]}</td>
            <td>${r.kriteria[2]}</td>
            <td>${r.kriteria[1]}</td>
        </tr>
`).join('')}
    </tbody>
</table>

<div style="page-break-before: always;"></div>

<h2>C. KEGIATAN PENGAYAAN DAN REMEDIAL</h2>

<h3>Kegiatan Pengayaan</h3>
<h4>${modul.pengayaanRemedial.pengayaan.judul}</h4>
${modul.pengayaanRemedial.pengayaan.deskripsi ? `<p><em>${modul.pengayaanRemedial.pengayaan.deskripsi}</em></p>` : ''}
<p><strong>Aktivitas:</strong></p>
<ol>
${modul.pengayaanRemedial.pengayaan.aktivitas.map(a => `    <li>${a}</li>`).join('\n')}
</ol>
${modul.pengayaanRemedial.pengayaan.penilaian ? `<p><strong>Penilaian:</strong> ${modul.pengayaanRemedial.pengayaan.penilaian}</p>` : ''}

<h3>Kegiatan Remedial</h3>

<div class="subsection">
<h4>Pertemuan 1: ${modul.pengayaanRemedial.remedial.pertemuan1.judul}</h4>
<p><strong>Tujuan:</strong> ${modul.pengayaanRemedial.remedial.pertemuan1.tujuan}</p>
<p><strong>Aktivitas:</strong></p>
<ol>
${modul.pengayaanRemedial.remedial.pertemuan1.aktivitas.map(a => `    <li>${a}</li>`).join('\n')}
</ol>
${modul.pengayaanRemedial.remedial.pertemuan1.media ? `<p><strong>Media Pembelajaran:</strong> ${modul.pengayaanRemedial.remedial.pertemuan1.media}</p>` : ''}
${modul.pengayaanRemedial.remedial.pertemuan1.indikator ? `<p><strong>Indikator Keberhasilan:</strong> ${modul.pengayaanRemedial.remedial.pertemuan1.indikator}</p>` : ''}
</div>

<div class="subsection">
<h4>Pertemuan 2: ${modul.pengayaanRemedial.remedial.pertemuan2.judul}</h4>
<p><strong>Tujuan:</strong> ${modul.pengayaanRemedial.remedial.pertemuan2.tujuan}</p>
<p><strong>Aktivitas:</strong></p>
<ol>
${modul.pengayaanRemedial.remedial.pertemuan2.aktivitas.map(a => `    <li>${a}</li>`).join('\n')}
</ol>
${modul.pengayaanRemedial.remedial.pertemuan2.media ? `<p><strong>Media Pembelajaran:</strong> ${modul.pengayaanRemedial.remedial.pertemuan2.media}</p>` : ''}
${modul.pengayaanRemedial.remedial.pertemuan2.indikator ? `<p><strong>Indikator Keberhasilan:</strong> ${modul.pengayaanRemedial.remedial.pertemuan2.indikator}</p>` : ''}
</div>

</body>
</html>`;
}

function downloadAsPDF(modul) {
    // Check if jsPDF is available
    if (typeof window.jspdf === 'undefined') {
        alert('Library jsPDF tidak tersedia.\n\nSolusi Alternatif:\n1. Download sebagai Word, lalu Save as PDF di Word\n2. Download sebagai HTML, lalu Print to PDF di browser (Ctrl+P)\n\nMencoba download sebagai HTML...');
        downloadAsHTML(modul);
        return;
    }
    
    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('p', 'mm', 'a4');
        
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const margin = 20;
        const maxWidth = pageWidth - (margin * 2);
        let yPos = margin;
        const lineHeight = 7;
        
        // Helper function to check page break
        const checkPageBreak = (spaceNeeded = 10) => {
            if (yPos + spaceNeeded > pageHeight - margin) {
                doc.addPage();
                yPos = margin;
                return true;
            }
            return false;
        };
        
        // Helper function to add text with word wrap
        const addText = (text, fontSize = 11, style = 'normal', align = 'left', color = [0, 0, 0]) => {
            checkPageBreak();
            doc.setFontSize(fontSize);
            doc.setFont('helvetica', style);
            doc.setTextColor(...color);
            
            const lines = doc.splitTextToSize(text, maxWidth);
            lines.forEach(line => {
                checkPageBreak();
                if (align === 'center') {
                    doc.text(line, pageWidth / 2, yPos, { align: 'center' });
                } else {
                    doc.text(line, margin, yPos);
                }
                yPos += lineHeight;
            });
        };
        
        // Title Page
        yPos = 60;
        addText('MODUL AJAR', 20, 'bold', 'center', [46, 116, 181]);
        yPos += 5;
        addText(modul.identitas.mataPelajaran, 16, 'bold', 'center', [54, 95, 145]);
        yPos += 3;
        addText(modul.identitas.materi, 14, 'bold', 'center', [68, 114, 196]);
        yPos += 20;
        
        // A. INFORMASI UMUM
        addText('A. INFORMASI UMUM', 16, 'bold', 'left', [46, 116, 181]);
        yPos += 3;
        
        addText('Identitas Modul', 13, 'bold');
        yPos += 2;
        
        // Identitas table
        const identitasData = [
            ['Nama Penyusun', modul.identitas.namaPenyusun],
            ['Instansi', modul.identitas.instansi],
            ['Mata Pelajaran', modul.identitas.mataPelajaran],
            ['Fase/Kelas', modul.identitas.faseKelas],
            ['Semester', modul.identitas.semester],
            ['Tahun Pelajaran', modul.identitas.tahunPelajaran],
            ['Materi', modul.identitas.materi],
            ['Alokasi Waktu', modul.identitas.alokasiWaktu]
        ];
        
        identitasData.forEach(([label, value]) => {
            checkPageBreak();
            doc.setFont('helvetica', 'bold');
            doc.text(`${label}:`, margin, yPos);
            doc.setFont('helvetica', 'normal');
            doc.text(value, margin + 50, yPos);
            yPos += 6;
        });
        
        yPos += 5;
        addText('Kompetensi Awal', 13, 'bold');
        modul.kompetensiAwal.forEach(k => {
            addText(`• ${k}`, 11);
        });
        
        yPos += 5;
        addText('Capaian Pembelajaran', 13, 'bold');
        addText(modul.capaianPembelajaran, 11);
        
        yPos += 5;
        addText('Tujuan Pembelajaran', 13, 'bold');
        modul.tujuanPembelajaran.forEach(t => {
            addText(`• ${t}`, 11);
        });
        
        // B. KOMPONEN INTI
        doc.addPage();
        yPos = margin;
        addText('B. KOMPONEN INTI', 16, 'bold', 'left', [46, 116, 181]);
        yPos += 3;
        
        addText('Langkah-langkah Pembelajaran', 13, 'bold');
        yPos += 2;
        
        addText('Kegiatan Pendahuluan', 12, 'bold', 'left', [68, 114, 196]);
        modul.langkahPembelajaran.pendahuluan.forEach((p, i) => {
            addText(`${i+1}. ${p}`, 11);
        });
        
        yPos += 3;
        addText('Kegiatan Inti', 12, 'bold', 'left', [68, 114, 196]);
        modul.langkahPembelajaran.kegiatan.forEach(k => {
            checkPageBreak(15);
            doc.setFillColor(68, 114, 196);
            doc.rect(margin, yPos - 5, maxWidth, 8, 'F');
            doc.setTextColor(255, 255, 255);
            doc.setFont('helvetica', 'bold');
            doc.text(k.fase, margin + 2, yPos);
            yPos += 8;
            doc.setTextColor(0, 0, 0);
            doc.setFont('helvetica', 'normal');
            
            k.aktivitas.forEach(a => {
                addText(`• ${a}`, 11);
            });
            yPos += 2;
        });
        
        yPos += 3;
        addText('Kegiatan Penutup', 12, 'bold', 'left', [68, 114, 196]);
        modul.langkahPembelajaran.penutup.forEach(p => {
            addText(`• ${p}`, 11);
        });
        
        // Asesmen
        yPos += 5;
        addText('Asesmen/Penilaian', 13, 'bold');
        yPos += 2;
        
        addText('Asesmen Diagnostik', 12, 'bold', 'left', [68, 114, 196]);
        modul.asesmen.diagnostik.soal.forEach((s, i) => {
            addText(`${i+1}. ${s}`, 11);
        });
        
        yPos += 3;
        addText('Asesmen Sumatif', 12, 'bold', 'left', [68, 114, 196]);
        modul.asesmen.sumatif.soal.forEach((s, i) => {
            addText(`${i+1}. ${s}`, 11);
        });
        
        // C. PENGAYAAN DAN REMEDIAL
        doc.addPage();
        yPos = margin;
        addText('C. KEGIATAN PENGAYAAN DAN REMEDIAL', 16, 'bold', 'left', [46, 116, 181]);
        yPos += 3;
        
        addText('Kegiatan Pengayaan', 13, 'bold');
        addText(modul.pengayaanRemedial.pengayaan.judul, 12, 'bold', 'left', [68, 114, 196]);
        if (modul.pengayaanRemedial.pengayaan.deskripsi) {
            addText(modul.pengayaanRemedial.pengayaan.deskripsi, 11, 'italic');
        }
        modul.pengayaanRemedial.pengayaan.aktivitas.forEach((a, i) => {
            addText(`${i+1}. ${a}`, 11);
        });
        
        yPos += 5;
        addText('Kegiatan Remedial', 13, 'bold');
        yPos += 2;
        
        addText(`Pertemuan 1: ${modul.pengayaanRemedial.remedial.pertemuan1.judul}`, 12, 'bold', 'left', [68, 114, 196]);
        addText(`Tujuan: ${modul.pengayaanRemedial.remedial.pertemuan1.tujuan}`, 11);
        modul.pengayaanRemedial.remedial.pertemuan1.aktivitas.forEach((a, i) => {
            addText(`${i+1}. ${a}`, 11);
        });
        
        yPos += 3;
        addText(`Pertemuan 2: ${modul.pengayaanRemedial.remedial.pertemuan2.judul}`, 12, 'bold', 'left', [68, 114, 196]);
        addText(`Tujuan: ${modul.pengayaanRemedial.remedial.pertemuan2.tujuan}`, 11);
        modul.pengayaanRemedial.remedial.pertemuan2.aktivitas.forEach((a, i) => {
            addText(`${i+1}. ${a}`, 11);
        });
        
        // Save PDF
        const fileName = `Modul_Ajar_${modul.identitas.mataPelajaran}_${modul.identitas.materi.replace(/\s+/g, '_')}.pdf`;
        doc.save(fileName);
        
        console.log('✅ PDF downloaded successfully');
        alert('✅ Modul berhasil didownload sebagai file PDF\n\nCatatan:\n- File siap untuk dicetak\n- Format rapi dan terstruktur');
        
    } catch (error) {
        console.error('PDF generation error:', error);
        alert('Gagal membuat PDF.\n\nSolusi Alternatif:\n1. Download sebagai Word, lalu Save as PDF\n2. Download sebagai HTML, lalu Print to PDF\n\nMencoba download sebagai HTML...');
        downloadAsHTML(modul);
    }
}

function generateWordDocument(modul) {
    try {
        console.log('📄 Generating Word document...');
        
        // Method 1: Try html-docx-js (simpler and more reliable)
        if (typeof htmlDocx !== 'undefined') {
            console.log('Using html-docx-js method');
            generateWordFromHTML(modul);
            return;
        }
        
        // Method 2: Try docx library (more complex but better formatting)
        if (typeof docx === 'undefined') {
            console.warn('docx library not available, trying alternative method...');
            generateWordFromHTML(modul);
            return;
        }
        
        console.log('Using docx library method');
        
        // Create document sections
        const children = [];
        
        // Title
        children.push(
            new docx.Paragraph({
                children: [new docx.TextRun({
                    text: "MODUL AJAR",
                    bold: true,
                    size: 32,
                    color: "2E74B5"
                })],
                alignment: docx.AlignmentType.CENTER,
                spacing: { after: 400 }
            }),
            new docx.Paragraph({
                children: [new docx.TextRun({
                    text: `${modul.identitas.mataPelajaran}`,
                    bold: true,
                    size: 28
                })],
                alignment: docx.AlignmentType.CENTER,
                spacing: { after: 200 }
            }),
            new docx.Paragraph({
                children: [new docx.TextRun({
                    text: `${modul.identitas.materi}`,
                    bold: true,
                    size: 24
                })],
                alignment: docx.AlignmentType.CENTER,
                spacing: { after: 600 }
            })
        );
        
        // A. INFORMASI UMUM
        children.push(
            new docx.Paragraph({
                children: [new docx.TextRun({
                    text: "A. INFORMASI UMUM",
                    bold: true,
                    size: 24,
                    color: "2E74B5"
                })],
                spacing: { before: 400, after: 200 }
            }),
            new docx.Paragraph({
                children: [new docx.TextRun({
                    text: "Identitas Modul",
                    bold: true,
                    size: 22
                })],
                spacing: { before: 200, after: 100 }
            })
        );
        
        // Identitas table
        const identitasData = [
            ['Nama Penyusun', modul.identitas.namaPenyusun],
            ['Instansi', modul.identitas.instansi],
            ['Mata Pelajaran', modul.identitas.mataPelajaran],
            ['Fase/Kelas', modul.identitas.faseKelas],
            ['Semester', modul.identitas.semester],
            ['Tahun Pelajaran', modul.identitas.tahunPelajaran],
            ['Materi', modul.identitas.materi],
            ['Alokasi Waktu', modul.identitas.alokasiWaktu]
        ];
        
        children.push(
            new docx.Table({
                width: { size: 100, type: docx.WidthType.PERCENTAGE },
                rows: identitasData.map(([label, value]) => 
                    new docx.TableRow({
                        children: [
                            new docx.TableCell({
                                children: [new docx.Paragraph({ text: label, style: 'strong' })],
                                width: { size: 30, type: docx.WidthType.PERCENTAGE }
                            }),
                            new docx.TableCell({
                                children: [new docx.Paragraph({ text: `: ${value}` })],
                                width: { size: 70, type: docx.WidthType.PERCENTAGE }
                            })
                        ]
                    })
                )
            })
        );
        
        // Kompetensi Awal
        children.push(
            new docx.Paragraph({
                children: [new docx.TextRun({
                    text: "Kompetensi Awal",
                    bold: true,
                    size: 22
                })],
                spacing: { before: 300, after: 100 }
            })
        );
        modul.kompetensiAwal.forEach(k => {
            children.push(new docx.Paragraph({
                text: `• ${k}`,
                spacing: { after: 50 }
            }));
        });
        
        // Dimensi Profil
        children.push(
            new docx.Paragraph({
                children: [new docx.TextRun({
                    text: "Dimensi Profil Pelajar Pancasila",
                    bold: true,
                    size: 22
                })],
                spacing: { before: 300, after: 100 }
            })
        );
        modul.dimensiProfil.forEach(d => {
            children.push(new docx.Paragraph({
                text: `• ${d}`,
                spacing: { after: 50 }
            }));
        });
        
        // Capaian Pembelajaran
        children.push(
            new docx.Paragraph({
                children: [new docx.TextRun({
                    text: "Capaian Pembelajaran",
                    bold: true,
                    size: 22
                })],
                spacing: { before: 300, after: 100 }
            }),
            new docx.Paragraph({
                text: modul.capaianPembelajaran,
                spacing: { after: 200 }
            })
        );
        
        // Tujuan Pembelajaran
        children.push(
            new docx.Paragraph({
                children: [new docx.TextRun({
                    text: "Tujuan Pembelajaran",
                    bold: true,
                    size: 22
                })],
                spacing: { before: 300, after: 100 }
            })
        );
        modul.tujuanPembelajaran.forEach(t => {
            children.push(new docx.Paragraph({
                text: `• ${t}`,
                spacing: { after: 50 }
            }));
        });
        
        // Model dan Pendekatan
        children.push(
            new docx.Paragraph({
                children: [new docx.TextRun({
                    text: "Model dan Pendekatan Pembelajaran",
                    bold: true,
                    size: 22
                })],
                spacing: { before: 300, after: 100 }
            }),
            new docx.Paragraph({
                text: `Model: ${modul.modelPendekatan.model}`,
                spacing: { after: 100 }
            }),
            new docx.Paragraph({
                text: `Pendekatan: ${modul.modelPendekatan.pendekatan.join(', ')}`,
                spacing: { after: 200 }
            })
        );
        
        // Sarana Prasarana
        children.push(
            new docx.Paragraph({
                children: [new docx.TextRun({
                    text: "Sarana dan Prasarana",
                    bold: true,
                    size: 22
                })],
                spacing: { before: 300, after: 100 }
            })
        );
        modul.saranaPrasarana.forEach(s => {
            children.push(new docx.Paragraph({
                text: `• ${s}`,
                spacing: { after: 50 }
            }));
        });
        
        // B. KOMPONEN INTI
        children.push(
            new docx.Paragraph({
                children: [new docx.TextRun({
                    text: "B. KOMPONEN INTI",
                    bold: true,
                    size: 24,
                    color: "2E74B5"
                })],
                spacing: { before: 600, after: 200 }
            }),
            new docx.Paragraph({
                children: [new docx.TextRun({
                    text: "Langkah-langkah Pembelajaran",
                    bold: true,
                    size: 22
                })],
                spacing: { before: 200, after: 100 }
            })
        );
        
        // Pendahuluan
        children.push(
            new docx.Paragraph({
                children: [new docx.TextRun({
                    text: "Kegiatan Pendahuluan",
                    bold: true,
                    size: 20
                })],
                spacing: { before: 200, after: 100 }
            })
        );
        modul.langkahPembelajaran.pendahuluan.forEach((p, i) => {
            children.push(new docx.Paragraph({
                text: `${i+1}. ${p}`,
                spacing: { after: 50 }
            }));
        });
        
        // Kegiatan Inti
        children.push(
            new docx.Paragraph({
                children: [new docx.TextRun({
                    text: "Kegiatan Inti",
                    bold: true,
                    size: 20
                })],
                spacing: { before: 300, after: 100 }
            })
        );
        modul.langkahPembelajaran.kegiatan.forEach(k => {
            children.push(
                new docx.Paragraph({
                    children: [new docx.TextRun({
                        text: k.fase,
                        bold: true,
                        size: 20,
                        color: "4472C4"
                    })],
                    spacing: { before: 200, after: 100 }
                })
            );
            k.aktivitas.forEach(a => {
                children.push(new docx.Paragraph({
                    text: `• ${a}`,
                    spacing: { after: 50 }
                }));
            });
        });
        
        // Penutup
        children.push(
            new docx.Paragraph({
                children: [new docx.TextRun({
                    text: "Kegiatan Penutup",
                    bold: true,
                    size: 20
                })],
                spacing: { before: 300, after: 100 }
            })
        );
        modul.langkahPembelajaran.penutup.forEach(p => {
            children.push(new docx.Paragraph({
                text: `• ${p}`,
                spacing: { after: 50 }
            }));
        });
        
        // Asesmen
        children.push(
            new docx.Paragraph({
                children: [new docx.TextRun({
                    text: "Asesmen/Penilaian",
                    bold: true,
                    size: 22
                })],
                spacing: { before: 400, after: 200 }
            }),
            new docx.Paragraph({
                children: [new docx.TextRun({
                    text: "Asesmen Diagnostik",
                    bold: true,
                    size: 20
                })],
                spacing: { before: 200, after: 100 }
            }),
            new docx.Paragraph({
                text: modul.asesmen.diagnostik.petunjuk,
                spacing: { after: 100 }
            })
        );
        modul.asesmen.diagnostik.soal.forEach((s, i) => {
            children.push(new docx.Paragraph({
                text: `${i+1}. ${s}`,
                spacing: { after: 100 }
            }));
        });
        
        // Asesmen Formatif
        children.push(
            new docx.Paragraph({
                children: [new docx.TextRun({
                    text: "Asesmen Formatif",
                    bold: true,
                    size: 20
                })],
                spacing: { before: 300, after: 100 }
            }),
            new docx.Paragraph({
                text: modul.asesmen.formatif.deskripsi,
                spacing: { after: 50 }
            }),
            new docx.Paragraph({
                text: `Instrumen: ${modul.asesmen.formatif.instrumen}`,
                spacing: { after: 200 }
            })
        );
        
        // Asesmen Sumatif
        children.push(
            new docx.Paragraph({
                children: [new docx.TextRun({
                    text: "Asesmen Sumatif",
                    bold: true,
                    size: 20
                })],
                spacing: { before: 300, after: 100 }
            })
        );
        modul.asesmen.sumatif.soal.forEach((s, i) => {
            children.push(new docx.Paragraph({
                text: `${i+1}. ${s}`,
                spacing: { after: 100 }
            }));
        });
        
        // C. PENGAYAAN DAN REMEDIAL
        children.push(
            new docx.Paragraph({
                children: [new docx.TextRun({
                    text: "C. KEGIATAN PENGAYAAN DAN REMEDIAL",
                    bold: true,
                    size: 24,
                    color: "2E74B5"
                })],
                spacing: { before: 600, after: 200 }
            }),
            new docx.Paragraph({
                children: [new docx.TextRun({
                    text: "Kegiatan Pengayaan",
                    bold: true,
                    size: 22
                })],
                spacing: { before: 200, after: 100 }
            }),
            new docx.Paragraph({
                children: [new docx.TextRun({
                    text: modul.pengayaanRemedial.pengayaan.judul,
                    bold: true,
                    size: 20
                })],
                spacing: { after: 100 }
            })
        );
        
        if (modul.pengayaanRemedial.pengayaan.deskripsi) {
            children.push(new docx.Paragraph({
                children: [new docx.TextRun({
                    text: modul.pengayaanRemedial.pengayaan.deskripsi,
                    italics: true
                })],
                spacing: { after: 100 }
            }));
        }
        
        children.push(new docx.Paragraph({
            children: [new docx.TextRun({
                text: "Aktivitas:",
                bold: true
            })],
            spacing: { before: 100, after: 50 }
        }));
        
        modul.pengayaanRemedial.pengayaan.aktivitas.forEach(a => {
            children.push(new docx.Paragraph({
                text: `• ${a}`,
                spacing: { after: 50 }
            }));
        });
        
        if (modul.pengayaanRemedial.pengayaan.penilaian) {
            children.push(new docx.Paragraph({
                children: [new docx.TextRun({
                    text: `Penilaian: ${modul.pengayaanRemedial.pengayaan.penilaian}`,
                    bold: true
                })],
                spacing: { before: 100, after: 200 }
            }));
        }
        
        // Remedial
        children.push(
            new docx.Paragraph({
                children: [new docx.TextRun({
                    text: "Kegiatan Remedial",
                    bold: true,
                    size: 22
                })],
                spacing: { before: 300, after: 100 }
            }),
            new docx.Paragraph({
                children: [new docx.TextRun({
                    text: `Pertemuan 1: ${modul.pengayaanRemedial.remedial.pertemuan1.judul}`,
                    bold: true,
                    size: 20
                })],
                spacing: { after: 50 }
            }),
            new docx.Paragraph({
                text: `Tujuan: ${modul.pengayaanRemedial.remedial.pertemuan1.tujuan}`,
                spacing: { after: 100 }
            }),
            new docx.Paragraph({
                children: [new docx.TextRun({
                    text: "Aktivitas:",
                    bold: true
                })],
                spacing: { after: 50 }
            })
        );
        
        modul.pengayaanRemedial.remedial.pertemuan1.aktivitas.forEach(a => {
            children.push(new docx.Paragraph({
                text: `• ${a}`,
                spacing: { after: 50 }
            }));
        });
        
        if (modul.pengayaanRemedial.remedial.pertemuan1.media) {
            children.push(new docx.Paragraph({
                text: `Media: ${modul.pengayaanRemedial.remedial.pertemuan1.media}`,
                spacing: { before: 100, after: 50 }
            }));
        }
        
        if (modul.pengayaanRemedial.remedial.pertemuan1.indikator) {
            children.push(new docx.Paragraph({
                text: `Indikator Keberhasilan: ${modul.pengayaanRemedial.remedial.pertemuan1.indikator}`,
                spacing: { after: 200 }
            }));
        }
        
        children.push(
            new docx.Paragraph({
                children: [new docx.TextRun({
                    text: `Pertemuan 2: ${modul.pengayaanRemedial.remedial.pertemuan2.judul}`,
                    bold: true,
                    size: 20
                })],
                spacing: { before: 200, after: 50 }
            }),
            new docx.Paragraph({
                text: `Tujuan: ${modul.pengayaanRemedial.remedial.pertemuan2.tujuan}`,
                spacing: { after: 100 }
            }),
            new docx.Paragraph({
                children: [new docx.TextRun({
                    text: "Aktivitas:",
                    bold: true
                })],
                spacing: { after: 50 }
            })
        );
        
        modul.pengayaanRemedial.remedial.pertemuan2.aktivitas.forEach(a => {
            children.push(new docx.Paragraph({
                text: `• ${a}`,
                spacing: { after: 50 }
            }));
        });
        
        if (modul.pengayaanRemedial.remedial.pertemuan2.media) {
            children.push(new docx.Paragraph({
                text: `Media: ${modul.pengayaanRemedial.remedial.pertemuan2.media}`,
                spacing: { before: 100, after: 50 }
            }));
        }
        
        if (modul.pengayaanRemedial.remedial.pertemuan2.indikator) {
            children.push(new docx.Paragraph({
                text: `Indikator Keberhasilan: ${modul.pengayaanRemedial.remedial.pertemuan2.indikator}`,
                spacing: { after: 200 }
            }));
        }
        
        // Create document
        const doc = new docx.Document({
            sections: [{
                properties: {
                    page: {
                        margin: {
                            top: 1440,
                            right: 1440,
                            bottom: 1440,
                            left: 1440
                        }
                    }
                },
                children: children
            }]
        });
        
        // Generate and download
        docx.Packer.toBlob(doc).then(blob => {
            const fileName = `Modul_Ajar_${modul.identitas.mataPelajaran}_${modul.identitas.materi.replace(/\s+/g, '_')}.docx`;
            if (typeof saveAs !== 'undefined') {
                saveAs(blob, fileName);
                console.log('✅ Word document downloaded successfully');
                alert('✅ Modul berhasil didownload sebagai file Word (.docx)');
            } else {
                throw new Error('FileSaver not available');
            }
        }).catch(error => {
            console.error('Word generation error:', error);
            alert('Gagal membuat Word document. Mencoba download sebagai HTML...');
            downloadAsHTML(modul);
        });
        
    } catch (error) {
        console.error('Word document error:', error);
        alert('Gagal membuat Word document. Mencoba download sebagai HTML...');
        downloadAsHTML(modul);
    }
}

// Export functions for debugging
window.generateModulAjar = generateModulAjar;
window.collectFormData = collectFormData;
window.displayResult = displayResult;

console.log('✅ App.js loaded successfully - All functions defined');