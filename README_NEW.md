# 🎓 Generator Modul Ajar AI - Kurikulum Berbasis Cinta

Generator modul ajar otomatis dengan AI untuk Kurikulum Berbasis Cinta Kementerian Agama RI.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy)

## ✨ Fitur Utama

- ✅ Generate modul ajar lengkap secara otomatis dengan AI
- ✅ Sesuai format Kurikulum Berbasis Cinta Kemenag RI
- ✅ Konten pembelajaran yang kontekstual dan spesifik per materi
- ✅ Export ke Word (.docx), PDF, dan HTML
- ✅ Mendukung berbagai mata pelajaran (Umum & Agama)
- ✅ Responsive dan mobile-friendly
- ✅ Offline-capable (PWA)
- ✅ 100% gratis dan open source

## 🚀 Akses Online

**Aplikasi sudah siap untuk di-deploy ke internet!**

### Deploy Cepat (5 Menit):
1. Upload ke GitHub
2. Deploy di Netlify/Vercel
3. Aplikasi langsung online!

📖 **Panduan Deploy:**
- [Cara Deploy Online](CARA_DEPLOY_ONLINE.md) - Panduan ringkas
- [Quick Deploy](QUICK_DEPLOY.md) - Panduan super cepat
- [Deployment Guide](DEPLOYMENT_GUIDE.md) - Panduan lengkap semua platform
- [Panduan Indonesia](PANDUAN_DEPLOY_INDONESIA.md) - Panduan detail bahasa Indonesia

## 💻 Instalasi Lokal

### Cara 1: Langsung Buka di Browser
```bash
# Cukup buka file index.html di browser
# Tidak perlu install apapun!
```

### Cara 2: Dengan Local Server
```bash
# Clone repository
git clone https://github.com/USERNAME/generator-modul-ajar-ai.git
cd generator-modul-ajar-ai

# Jalankan dengan Python
python -m http.server 8000

# Atau dengan Node.js
npx http-server -p 8000

# Buka browser: http://localhost:8000
```

## 📖 Cara Menggunakan

1. **Isi Identitas Modul**
   - Nama penyusun, instansi, mata pelajaran
   - Fase/kelas, semester, tahun pelajaran
   - Materi dan alokasi waktu

2. **Pilih Pendekatan Pembelajaran**
   - Pendidikan karakter
   - Moderasi beragama
   - Bilingual (Indonesia-Inggris/Arab)
   - Berbasis TIK
   - Pembelajaran inovatif

3. **Pilih Model Pembelajaran**
   - Problem Based Learning (PBL)
   - Project Based Learning (PjBL)
   - Discovery Learning
   - Inquiry Learning
   - Cooperative Learning
   - STEAM

4. **Isi Kompetensi & Tujuan**
   - Kompetensi awal (opsional, bisa auto-generate)
   - Capaian pembelajaran
   - Tujuan pembelajaran

5. **Generate & Download**
   - Klik "Generate Modul Ajar dengan AI"
   - Preview hasil
   - Download dalam format Word/PDF/HTML

## 🎯 Mata Pelajaran yang Didukung

### Mata Pelajaran Umum:
- Matematika
- Fisika
- Kimia
- Biologi
- Bahasa Indonesia
- Bahasa Inggris
- Sejarah, Geografi, Ekonomi, Sosiologi

### Mata Pelajaran Agama:
- Al-Quran Hadits
- Akidah Akhlak
- Fiqih
- Sejarah Kebudayaan Islam
- Bahasa Arab

## 🔧 Teknologi

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Libraries:** 
  - docx.js (Word generation)
  - FileSaver.js (File download)
  - jsPDF (PDF generation)
  - html-docx-js (HTML to Word conversion)
- **Architecture:** 100% client-side (no backend required)
- **PWA:** Service Worker untuk offline capability

## 📱 Browser Support

- ✅ Chrome/Edge (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (iOS & Android)

## 📚 Dokumentasi Lengkap

### Panduan Penggunaan:
- [Cara Penggunaan](CARA_PENGGUNAAN.md)
- [Panduan Singkat](PANDUAN_SINGKAT.md)
- [Quick Start](QUICK_START.md)

### Panduan Deployment:
- [Cara Deploy Online](CARA_DEPLOY_ONLINE.md)
- [Quick Deploy](QUICK_DEPLOY.md)
- [Deployment Guide](DEPLOYMENT_GUIDE.md)
- [Panduan Deploy Indonesia](PANDUAN_DEPLOY_INDONESIA.md)

### Dokumentasi Teknis:
- [API Documentation](API_DOCS.md)
- [AI Setup Guide](AI_SETUP_GUIDE.md)
- [Troubleshooting](TROUBLESHOOTING.md)
- [Project Summary](PROJECT_SUMMARY.md)

### Changelog:
- [Changelog](CHANGELOG.md)
- [Update Terbaru](UPDATE_TERBARU.md)
- [Ringkasan Perbaikan](RINGKASAN_PERBAIKAN.md)

## 🔒 Keamanan & Privacy

- ✅ Semua proses di client-side (browser)
- ✅ Tidak ada data yang dikirim ke server
- ✅ Privacy-friendly
- ✅ HTTPS enabled (saat di-deploy)
- ✅ No tracking, no analytics

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan:
1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 Lisensi

MIT License - Bebas digunakan untuk pendidikan dan non-komersial.

## 👨‍💻 Kontributor

Tim Pengembang Kurikulum Berbasis Cinta - Kementerian Agama RI

## 🆘 Support & Bantuan

Jika mengalami masalah:
1. Baca [Troubleshooting Guide](TROUBLESHOOTING.md)
2. Baca [Deployment Guide](DEPLOYMENT_GUIDE.md)
3. Buka issue di GitHub
4. Hubungi tim pengembang

## 🌟 Fitur Mendatang

- [ ] Integrasi dengan API AI (OpenAI, Gemini, Claude)
- [ ] Template modul ajar yang lebih bervariasi
- [ ] Export ke format PPTX
- [ ] Kolaborasi real-time
- [ ] Database modul ajar
- [ ] Sharing & community features

---

**Dibuat dengan ❤️ untuk pendidikan Indonesia**

Jika aplikasi ini bermanfaat, berikan ⭐ di GitHub!
