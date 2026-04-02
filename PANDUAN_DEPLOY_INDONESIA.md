# 🚀 Panduan Deploy Aplikasi ke Internet (Bahasa Indonesia)

## 📱 Apa yang Akan Kita Lakukan?

Kita akan membuat aplikasi Generator Modul Ajar AI ini bisa diakses secara online melalui internet, sehingga:
- ✅ Bisa diakses dari mana saja
- ✅ Bisa dibagikan ke rekan guru lain
- ✅ Tidak perlu install di komputer
- ✅ Gratis selamanya!

---

## 🎯 Pilihan Platform (Pilih Salah Satu)

### 🥇 Rekomendasi #1: NETLIFY (Paling Mudah)
- ⭐⭐⭐⭐⭐ Sangat mudah
- ⚡ Sangat cepat
- 🆓 Gratis selamanya
- 🔒 HTTPS otomatis

### 🥈 Rekomendasi #2: VERCEL
- ⭐⭐⭐⭐⭐ Mudah
- ⚡ Sangat cepat
- 🆓 Gratis untuk personal
- 🔒 HTTPS otomatis

### 🥉 Alternatif: GITHUB PAGES
- ⭐⭐⭐⭐ Cukup mudah
- ⚡ Cepat
- 🆓 Gratis selamanya
- 🔒 HTTPS otomatis

---

## 📝 Persiapan (Hanya Sekali)

### 1️⃣ Install Git

**Windows:**
1. Download dari: https://git-scm.com/download/win
2. Jalankan installer
3. Klik "Next" terus sampai selesai
4. Restart komputer

**Mac:**
1. Buka Terminal
2. Ketik: `git --version`
3. Jika belum ada, akan muncul popup untuk install

**Linux:**
```bash
sudo apt-get install git
```

### 2️⃣ Buat Akun GitHub

1. Buka: https://github.com
2. Klik "Sign up"
3. Isi:
   - Email Anda
   - Password (minimal 8 karakter)
   - Username (contoh: `guru_ahmad`)
4. Verifikasi email
5. ✅ Selesai!

---

## 🚀 CARA 1: Deploy ke Netlify (TERMUDAH)

### Langkah A: Upload ke GitHub

1. **Buka Command Prompt / Terminal**
   - Windows: Tekan `Win + R`, ketik `cmd`, Enter
   - Mac: Tekan `Cmd + Space`, ketik `terminal`, Enter

2. **Masuk ke Folder Project**
   ```bash
   cd C:\path\ke\folder\generator-modul-ajar-ai
   ```
   
   Ganti `C:\path\ke\folder\` dengan lokasi folder project Anda.

3. **Jalankan Perintah Berikut Satu Per Satu:**

   ```bash
   git init
   ```
   ↳ Membuat repository Git baru
   
   ```bash
   git add .
   ```
   ↳ Menambahkan semua file
   
   ```bash
   git commit -m "Upload aplikasi modul ajar"
   ```
   ↳ Menyimpan perubahan
   
4. **Buat Repository di GitHub:**
   - Buka: https://github.com/new
   - Nama repository: `generator-modul-ajar-ai`
   - Pilih: "Public"
   - JANGAN centang apapun
   - Klik: "Create repository"

5. **Hubungkan dengan GitHub:**
   
   Ganti `USERNAME` dengan username GitHub Anda:
   
   ```bash
   git remote add origin https://github.com/USERNAME/generator-modul-ajar-ai.git
   git branch -M main
   git push -u origin main
   ```
   
   Jika diminta login:
   - Username: username GitHub Anda
   - Password: gunakan Personal Access Token (bukan password biasa)
   
   **Cara buat Token:**
   - Buka: https://github.com/settings/tokens
   - Klik: "Generate new token (classic)"
   - Nama: `netlify-deploy`
   - Centang: `repo`
   - Klik: "Generate token"
   - COPY token (hanya muncul sekali!)
   - Paste sebagai password

### Langkah B: Deploy di Netlify

1. **Buat Akun Netlify:**
   - Buka: https://app.netlify.com/signup
   - Klik: "Sign up with GitHub"
   - Klik: "Authorize Netlify"

2. **Import Project:**
   - Klik: "Add new site"
   - Klik: "Import an existing project"
   - Klik: "GitHub"
   - Cari: `generator-modul-ajar-ai`
   - Klik repository tersebut

3. **Konfigurasi Deploy:**
   - Build command: (kosongkan)
   - Publish directory: (kosongkan atau ketik `.`)
   - Klik: "Deploy site"

4. **Tunggu Proses Deploy:**
   - Akan muncul loading (1-2 menit)
   - Jika sudah selesai, akan muncul URL

5. **✅ SELESAI!**
   - URL aplikasi: `https://random-name-123456.netlify.app`
   - Klik URL untuk membuka aplikasi

### Langkah C: Ubah Nama Domain (Opsional)

1. Di dashboard Netlify, klik: "Site settings"
2. Klik: "Change site name"
3. Ketik nama baru: `modul-ajar-ai` (atau nama lain yang tersedia)
4. Klik: "Save"
5. URL baru: `https://modul-ajar-ai.netlify.app`

---

## 🚀 CARA 2: Deploy ke Vercel

### Langkah A: Upload ke GitHub
(Sama seperti Cara 1 - Langkah A di atas)

### Langkah B: Deploy di Vercel

1. **Buat Akun Vercel:**
   - Buka: https://vercel.com/signup
   - Klik: "Continue with GitHub"
   - Klik: "Authorize Vercel"

2. **Import Project:**
   - Klik: "Add New..."
   - Klik: "Project"
   - Cari: `generator-modul-ajar-ai`
   - Klik: "Import"

3. **Konfigurasi:**
   - Framework Preset: pilih "Other"
   - Klik: "Deploy"

4. **Tunggu Deploy:**
   - Loading 1-2 menit
   - Jika selesai, klik: "Visit"

5. **✅ SELESAI!**
   - URL: `https://generator-modul-ajar-ai.vercel.app`

---

## 🚀 CARA 3: Deploy ke GitHub Pages

### Langkah A: Upload ke GitHub
(Sama seperti Cara 1 - Langkah A di atas)

### Langkah B: Aktifkan GitHub Pages

1. **Buka Repository di GitHub:**
   - Buka: `https://github.com/USERNAME/generator-modul-ajar-ai`

2. **Aktifkan Pages:**
   - Klik tab: "Settings"
   - Scroll ke bawah, klik: "Pages" (di sidebar kiri)
   - Source: pilih "Deploy from a branch"
   - Branch: pilih "main"
   - Folder: pilih "/ (root)"
   - Klik: "Save"

3. **Tunggu Deploy:**
   - Refresh halaman setelah 2-3 menit
   - Akan muncul URL di bagian atas

4. **✅ SELESAI!**
   - URL: `https://USERNAME.github.io/generator-modul-ajar-ai`

---

## 🔄 Cara Update Aplikasi Setelah Deploy

Jika Anda edit kode dan ingin update aplikasi online:

1. **Buka Terminal di folder project**

2. **Jalankan perintah:**
   ```bash
   git add .
   git commit -m "Update aplikasi"
   git push origin main
   ```

3. **Tunggu 1-2 menit**
   - Aplikasi otomatis ter-update!
   - Refresh browser untuk lihat perubahan

---

## 🎨 Cara Pakai Domain Sendiri (Opsional)

Jika Anda punya domain sendiri (misal: `modulajar.com`):

### Di Netlify:
1. Klik: "Domain settings"
2. Klik: "Add custom domain"
3. Ketik domain Anda
4. Ikuti instruksi untuk setting DNS

### Di Vercel:
1. Klik: "Settings" → "Domains"
2. Ketik domain Anda
3. Ikuti instruksi untuk setting DNS

---

## 🆘 Troubleshooting (Jika Ada Masalah)

### ❌ Error: "git: command not found"
**Solusi:** Git belum terinstall. Install dari https://git-scm.com

### ❌ Error: "Permission denied"
**Solusi:** Gunakan Personal Access Token, bukan password biasa
- Cara buat: https://github.com/settings/tokens

### ❌ Error: "Repository not found"
**Solusi:** 
- Cek username GitHub sudah benar
- Pastikan repository sudah dibuat di GitHub

### ❌ Aplikasi tidak muncul setelah deploy
**Solusi:**
1. Tunggu 5 menit
2. Refresh browser (Ctrl + F5)
3. Cek di dashboard hosting apakah deploy berhasil

### ❌ Error saat buka aplikasi
**Solusi:**
1. Tekan F12 di browser
2. Lihat tab "Console" untuk error
3. Screenshot dan tanyakan ke forum

---

## 📞 Butuh Bantuan?

### Video Tutorial:
- YouTube: cari "cara deploy website ke netlify"
- YouTube: cari "cara upload project ke github"

### Dokumentasi:
- Netlify: https://docs.netlify.com
- Vercel: https://vercel.com/docs
- GitHub Pages: https://docs.github.com/pages

### Forum:
- Stack Overflow (bahasa Inggris)
- Grup Facebook: "Programmer Indonesia"
- Discord: "Indonesia Belajar"

---

## ✅ Checklist Deploy

Gunakan checklist ini untuk memastikan semua langkah sudah dilakukan:

- [ ] Git sudah terinstall
- [ ] Akun GitHub sudah dibuat
- [ ] Repository sudah dibuat di GitHub
- [ ] Code sudah di-push ke GitHub
- [ ] Akun hosting (Netlify/Vercel) sudah dibuat
- [ ] Project sudah di-import ke hosting
- [ ] Deploy berhasil
- [ ] Aplikasi bisa diakses via URL
- [ ] Aplikasi berfungsi dengan baik

---

## 🎉 Selamat!

Aplikasi Generator Modul Ajar AI Anda sudah online dan bisa diakses dari mana saja!

**Bagikan URL ke rekan guru:**
- Via WhatsApp
- Via Email
- Via Google Classroom
- Via media sosial

**Tips:**
- Bookmark URL agar mudah diakses
- Simpan URL di Google Drive
- Buat QR Code dari URL untuk dibagikan

---

**Semoga bermanfaat! 🙏**

Jika ada pertanyaan, jangan ragu untuk bertanya di forum atau komunitas developer Indonesia.
