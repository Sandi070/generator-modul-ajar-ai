// Demo data for testing the application
const demoData = {
    kimia: {
        namaPenyusun: "Sandi Saputra, S.Pd.",
        instansi: "MAN Insan Cendekia Kota Kendari",
        mataPelajaran: "Kimia",
        faseKelas: "E/X",
        semester: "Ganjil",
        tahunPelajaran: "2025/2026",
        materi: "Ikatan Kovalen",
        alokasiWaktu: "3",
        pendekatan: ["karakter", "tik", "inovatif"],
        modelPembelajaran: "PBL",
        kompetensiAwal: "Konfigurasi elektron dan elektron valensi\nAturan kestabilan (duplet dan oktet)\nIkatan ion",
        capaianPembelajaran: "Peserta didik memiliki kemampuan memahami prinsip pembentukan ikatan kovalen.",
        tujuanPembelajaran: "Memahami prinsip pembentukan ikatan kovalen\nMenggambarkan struktur Lewis senyawa kovalen"
    },
    
    matematika: {
        namaPenyusun: "Dr. Ahmad Hidayat, M.Pd.",
        instansi: "MAN 1 Jakarta",
        mataPelajaran: "Matematika",
        faseKelas: "F/XI",
        semester: "Genap",
        tahunPelajaran: "2025/2026",
        materi: "Fungsi Trigonometri",
        alokasiWaktu: "4",
        pendekatan: ["karakter", "bilingual-en", "tik"],
        modelPembelajaran: "Discovery",
        kompetensiAwal: "Konsep sudut dan pengukurannya\nOperasi aljabar dasar\nSistem koordinat Cartesius",
        capaianPembelajaran: "Peserta didik mampu memahami dan mengaplikasikan fungsi trigonometri dalam pemecahan masalah.",
        tujuanPembelajaran: "Memahami definisi fungsi trigonometri\nMenggambar grafik fungsi trigonometri\nMenyelesaikan masalah kontekstual menggunakan trigonometri"
    },
    
    alquranHadits: {
        namaPenyusun: "Ustadz Muhammad Yusuf, Lc., M.A.",
        instansi: "MAN 2 Yogyakarta",
        mataPelajaran: "Al-Quran Hadits",
        faseKelas: "E/X",
        semester: "Ganjil",
        tahunPelajaran: "2025/2026",
        materi: "Adab Membaca Al-Quran",
        alokasiWaktu: "2",
        pendekatan: ["karakter", "moderasi", "bilingual-ar"],
        modelPembelajaran: "Cooperative",
        kompetensiAwal: "Kemampuan membaca huruf hijaiyah\nPemahaman dasar tajwid\nKecintaan terhadap Al-Quran",
        capaianPembelajaran: "Peserta didik mampu memahami dan mengamalkan adab membaca Al-Quran dengan benar.",
        tujuanPembelajaran: "Memahami adab-adab membaca Al-Quran\nMempraktikkan adab membaca Al-Quran\nMenghayati nilai-nilai spiritual dalam membaca Al-Quran"
    },
    
    bahasaArab: {
        namaPenyusun: "Ustadzah Fatimah Az-Zahra, S.Pd.I., M.A.",
        instansi: "MAN 3 Surabaya",
        mataPelajaran: "Bahasa Arab",
        faseKelas: "F/XI",
        semester: "Genap",
        tahunPelajaran: "2025/2026",
        materi: "Fi al-Madrasah (Di Sekolah)",
        alokasiWaktu: "3",
        pendekatan: ["moderasi", "bilingual-ar", "tik", "inovatif"],
        modelPembelajaran: "PjBL",
        kompetensiAwal: "Penguasaan huruf hijaiyah\nKosakata dasar bahasa Arab\nStruktur kalimat sederhana",
        capaianPembelajaran: "Peserta didik mampu berkomunikasi dalam bahasa Arab tentang aktivitas sekolah.",
        tujuanPembelajaran: "Menguasai kosakata tentang sekolah\nMembuat kalimat sederhana tentang aktivitas sekolah\nBerkomunikasi lisan tentang kehidupan sekolah"
    },
    
    akidahAkhlak: {
        namaPenyusun: "Dr. Hj. Siti Aisyah, M.Ag.",
        instansi: "MAN 1 Bandung",
        mataPelajaran: "Akidah Akhlak",
        faseKelas: "E/X",
        semester: "Ganjil",
        tahunPelajaran: "2025/2026",
        materi: "Akhlak Terpuji dalam Pergaulan",
        alokasiWaktu: "2",
        pendekatan: ["karakter", "moderasi", "inovatif"],
        modelPembelajaran: "PBL",
        kompetensiAwal: "Pemahaman dasar akhlak Islam\nKonsep pergaulan dalam Islam\nNilai-nilai moral universal",
        capaianPembelajaran: "Peserta didik mampu mengamalkan akhlak terpuji dalam pergaulan sehari-hari.",
        tujuanPembelajaran: "Memahami konsep akhlak terpuji\nMengidentifikasi bentuk-bentuk akhlak terpuji\nMenerapkan akhlak terpuji dalam pergaulan"
    }
};

// Function to load demo data
function loadDemoData(subject) {
    const data = demoData[subject];
    if (!data) return;
    
    // Fill form with demo data
    Object.keys(data).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            if (element.type === 'checkbox') {
                element.checked = data[key].includes(element.value);
            } else {
                element.value = data[key];
            }
        }
    });
    
    // Handle checkboxes for pendekatan
    const pendekatanCheckboxes = document.querySelectorAll('input[name="pendekatan"]');
    pendekatanCheckboxes.forEach(cb => {
        cb.checked = data.pendekatan.includes(cb.value);
    });
}

// Add demo buttons to the interface
function addDemoButtons() {
    const formContainer = document.querySelector('.form-container');
    const demoSection = document.createElement('div');
    demoSection.className = 'demo-section';
    demoSection.innerHTML = `
        <h3>🎯 Coba Demo Data</h3>
        <div class="demo-buttons">
            <button type="button" onclick="loadDemoData('kimia')" class="demo-btn">Demo Kimia</button>
            <button type="button" onclick="loadDemoData('matematika')" class="demo-btn">Demo Matematika</button>
            <button type="button" onclick="loadDemoData('alquranHadits')" class="demo-btn">Demo Al-Quran Hadits</button>
            <button type="button" onclick="loadDemoData('bahasaArab')" class="demo-btn">Demo Bahasa Arab</button>
            <button type="button" onclick="loadDemoData('akidahAkhlak')" class="demo-btn">Demo Akidah Akhlak</button>
        </div>
    `;
    
    formContainer.insertBefore(demoSection, formContainer.firstChild);
}

// Initialize demo functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    addDemoButtons();
});