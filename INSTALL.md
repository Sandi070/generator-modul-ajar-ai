# 🚀 Panduan Instalasi Generator Modul Ajar AI

## 📋 Persyaratan Sistem

### Minimum Requirements
- **Browser**: Chrome 80+, Firefox 75+, Safari 13+, Edge 80+
- **JavaScript**: Harus diaktifkan
- **Koneksi Internet**: Untuk loading CDN libraries
- **Storage**: ~5MB ruang kosong untuk cache

### Recommended Requirements
- **RAM**: 4GB atau lebih
- **Processor**: Dual-core 2.0GHz atau lebih
- **Resolusi**: 1366x768 atau lebih tinggi

## 🛠️ Metode Instalasi

### Metode 1: Langsung dari Browser (Termudah)

1. **Download atau Clone Repository**
   ```bash
   git clone https://github.com/kemenag/generator-modul-ajar-ai.git
   cd generator-modul-ajar-ai
   ```

2. **Buka File HTML**
   - Double-click file `index.html`
   - Atau drag & drop ke browser
   - Aplikasi siap digunakan!

### Metode 2: Menggunakan Local Server (Recommended)

#### Dengan Python (Built-in)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Dengan Node.js
```bash
# Install http-server globally
npm install -g http-server

# Jalankan server
http-server -p 8000 -o
```

#### Dengan PHP
```bash
php -S localhost:8000
```

3. **Akses Aplikasi**
   - Buka browser
   - Kunjungi `http://localhost:8000`

### Metode 3: Deploy ke Web Server

#### Upload ke Hosting
1. Compress semua file ke ZIP
2. Upload ke hosting (cPanel, DirectAdmin, dll.)
3. Extract di folder public_html
4. Akses melalui domain Anda

#### Deploy ke GitHub Pages
1. Fork repository ini
2. Aktifkan GitHub Pages di Settings
3. Pilih branch main sebagai source
4. Akses di `https://username.github.io/generator-modul-ajar-ai`

#### Deploy ke Netlify
1. Drag & drop folder ke netlify.com
2. Atau connect dengan GitHub repository
3. Deploy otomatis setiap ada update

#### Deploy ke Vercel
```bash
npm install -g vercel
vercel --prod
```

## 🔧 Konfigurasi Lanjutan

### Offline Usage
Untuk penggunaan offline, download dependencies:

1. **Download docx.js**
   ```bash
   wget https://cdnjs.cloudflare.com/ajax/libs/docx/7.8.2/docx.min.js
   ```

2. **Download FileSaver.js**
   ```bash
   wget https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js
   ```

3. **Update index.html**
   ```html
   <!-- Ganti CDN links dengan local files -->
   <script src="./libs/docx.min.js"></script>
   <script src="./libs/FileSaver.min.js"></script>
   ```

### Custom Domain Setup
Untuk setup domain kustom:

1. **Update manifest.json**
   ```json
   {
     "start_url": "https://yourdomain.com/",
     "scope": "https://yourdomain.com/"
   }
   ```

2. **Add CNAME file** (untuk GitHub Pages)
   ```
   yourdomain.com
   ```

### SSL Certificate
Untuk HTTPS (recommended):
- Gunakan Let's Encrypt (gratis)
- Atau SSL dari hosting provider
- Cloudflare SSL (gratis)

## 🐛 Troubleshooting

### Masalah Umum

#### 1. File tidak bisa di-download
**Solusi:**
- Pastikan browser mendukung download
- Cek popup blocker
- Coba browser lain

#### 2. Form tidak berfungsi
**Solusi:**
- Pastikan JavaScript aktif
- Clear browser cache
- Disable ad blocker sementara

#### 3. Tampilan rusak
**Solusi:**
- Hard refresh (Ctrl+F5)
- Clear browser cache
- Cek koneksi internet untuk CSS

#### 4. Error saat generate
**Solusi:**
- Isi semua field required
- Cek console browser (F12)
- Reload halaman

### Browser Compatibility Issues

#### Internet Explorer
- **Tidak didukung** (gunakan Edge)
- Upgrade ke browser modern

#### Safari iOS
- Pastikan iOS 13+ untuk full support
- Beberapa fitur mungkin terbatas

#### Chrome Android
- Berfungsi normal
- Pastikan Chrome versi terbaru

## 📱 Mobile Installation

### Android
1. Buka di Chrome Android
2. Menu → "Add to Home Screen"
3. Aplikasi akan tersedia seperti app native

### iOS
1. Buka di Safari iOS
2. Share button → "Add to Home Screen"
3. Icon akan muncul di home screen

## 🔒 Security Considerations

### Data Privacy
- Semua data diproses di browser (client-side)
- Tidak ada data yang dikirim ke server
- Aman untuk data sensitif

### File Security
- Generated files aman dari malware
- Hanya berisi konten yang diinput user
- Scan dengan antivirus jika perlu

## 📞 Dukungan Teknis

### Self-Help Resources
- Baca dokumentasi lengkap di README.md
- Cek CHANGELOG.md untuk update terbaru
- Lihat demo-data.js untuk contoh penggunaan

### Contact Support
- **Email**: support@kemenag-generator.id
- **GitHub Issues**: [Report Bug](https://github.com/kemenag/generator-modul-ajar-ai/issues)
- **Telegram**: @ModulAjarAI_Support

### Community
- **Forum**: [Diskusi Pengguna](https://forum.kemenag-generator.id)
- **WhatsApp Group**: [Join Group](https://wa.me/group)
- **Facebook Group**: [Komunitas Guru](https://facebook.com/groups/modulajarai)

---

**Happy Teaching! 🎓**