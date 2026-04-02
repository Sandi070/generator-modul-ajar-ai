# 🚀 Panduan Deployment Generator Modul Ajar AI

Aplikasi ini dapat di-deploy ke berbagai platform hosting gratis. Berikut panduan lengkapnya.

---

## 📋 Persiapan Sebelum Deploy

### 1. Install Git (jika belum)
- Download dari: https://git-scm.com/downloads
- Install dengan pengaturan default

### 2. Buat Akun GitHub (jika belum)
- Kunjungi: https://github.com
- Klik "Sign up" dan ikuti instruksinya

---

## 🌐 Opsi 1: Deploy ke Netlify (PALING MUDAH - DIREKOMENDASIKAN)

### Langkah-langkah:

#### A. Upload ke GitHub

1. **Buka Terminal/Command Prompt** di folder project ini

2. **Inisialisasi Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Generator Modul Ajar AI"
   ```

3. **Buat Repository Baru di GitHub**
   - Buka https://github.com/new
   - Nama repository: `generator-modul-ajar-ai`
   - Pilih "Public"
   - JANGAN centang "Initialize with README"
   - Klik "Create repository"

4. **Push ke GitHub**
   ```bash
   git remote add origin https://github.com/USERNAME/generator-modul-ajar-ai.git
   git branch -M main
   git push -u origin main
   ```
   
   Ganti `USERNAME` dengan username GitHub Anda.

#### B. Deploy di Netlify

1. **Buat Akun Netlify**
   - Kunjungi: https://app.netlify.com/signup
   - Pilih "Sign up with GitHub"

2. **Deploy Site**
   - Klik "Add new site" → "Import an existing project"
   - Pilih "GitHub"
   - Cari dan pilih repository `generator-modul-ajar-ai`
   - Build settings (biarkan default):
     - Build command: (kosongkan)
     - Publish directory: `.` atau kosongkan
   - Klik "Deploy site"

3. **Tunggu Deploy Selesai** (1-2 menit)

4. **Akses Aplikasi**
   - URL akan seperti: `https://random-name-123456.netlify.app`
   - Anda bisa ubah nama di: Site settings → Change site name

### ✅ Selesai! Aplikasi sudah online di Netlify

**Keuntungan Netlify:**
- ✅ Gratis selamanya untuk static site
- ✅ HTTPS otomatis
- ✅ Auto-deploy saat push ke GitHub
- ✅ Custom domain gratis
- ✅ Sangat cepat dan reliable

---

## 🌐 Opsi 2: Deploy ke Vercel

### Langkah-langkah:

1. **Upload ke GitHub** (ikuti langkah A di atas jika belum)

2. **Buat Akun Vercel**
   - Kunjungi: https://vercel.com/signup
   - Pilih "Continue with GitHub"

3. **Import Project**
   - Klik "Add New..." → "Project"
   - Pilih repository `generator-modul-ajar-ai`
   - Klik "Import"
   - Framework Preset: pilih "Other"
   - Klik "Deploy"

4. **Tunggu Deploy Selesai** (1-2 menit)

5. **Akses Aplikasi**
   - URL akan seperti: `https://generator-modul-ajar-ai.vercel.app`

### ✅ Selesai! Aplikasi sudah online di Vercel

**Keuntungan Vercel:**
- ✅ Gratis untuk personal projects
- ✅ HTTPS otomatis
- ✅ Auto-deploy saat push ke GitHub
- ✅ Performance sangat baik

---

## 🌐 Opsi 3: Deploy ke GitHub Pages

### Langkah-langkah:

1. **Upload ke GitHub** (ikuti langkah A di atas jika belum)

2. **Aktifkan GitHub Pages**
   - Buka repository di GitHub
   - Klik "Settings" → "Pages"
   - Source: pilih "Deploy from a branch"
   - Branch: pilih "main" dan folder "/ (root)"
   - Klik "Save"

3. **Tunggu Deploy Selesai** (2-5 menit)

4. **Akses Aplikasi**
   - URL akan seperti: `https://USERNAME.github.io/generator-modul-ajar-ai`

### ✅ Selesai! Aplikasi sudah online di GitHub Pages

**Keuntungan GitHub Pages:**
- ✅ Gratis selamanya
- ✅ Terintegrasi dengan GitHub
- ✅ Mudah dikelola

---

## 🌐 Opsi 4: Deploy ke Render

### Langkah-langkah:

1. **Upload ke GitHub** (ikuti langkah A di atas jika belum)

2. **Buat Akun Render**
   - Kunjungi: https://render.com/
   - Klik "Get Started" → "Sign up with GitHub"

3. **Deploy Static Site**
   - Klik "New +" → "Static Site"
   - Connect repository `generator-modul-ajar-ai`
   - Name: `generator-modul-ajar-ai`
   - Build Command: (kosongkan)
   - Publish Directory: `.`
   - Klik "Create Static Site"

4. **Tunggu Deploy Selesai** (2-3 menit)

5. **Akses Aplikasi**
   - URL akan seperti: `https://generator-modul-ajar-ai.onrender.com`

### ✅ Selesai! Aplikasi sudah online di Render

---

## 🔄 Update Aplikasi Setelah Deploy

Setelah aplikasi online, untuk update:

```bash
# 1. Edit file yang ingin diubah
# 2. Commit perubahan
git add .
git commit -m "Deskripsi perubahan"

# 3. Push ke GitHub
git push origin main
```

Aplikasi akan otomatis ter-update di hosting (Netlify/Vercel/Render) dalam 1-2 menit!

---

## 🎨 Custom Domain (Opsional)

Jika Anda punya domain sendiri (misal: `modulajar.com`):

### Di Netlify:
1. Site settings → Domain management
2. Add custom domain
3. Ikuti instruksi DNS

### Di Vercel:
1. Project settings → Domains
2. Add domain
3. Ikuti instruksi DNS

### Di GitHub Pages:
1. Settings → Pages → Custom domain
2. Masukkan domain Anda
3. Ikuti instruksi DNS

---

## 🆘 Troubleshooting

### Masalah: Git command not found
**Solusi:** Install Git dari https://git-scm.com/downloads

### Masalah: Permission denied (GitHub)
**Solusi:** Setup SSH key atau gunakan Personal Access Token
- Guide: https://docs.github.com/en/authentication

### Masalah: Deploy gagal
**Solusi:** 
1. Cek build logs di dashboard hosting
2. Pastikan semua file sudah ter-commit
3. Cek file `.gitignore` tidak memblokir file penting

### Masalah: Aplikasi tidak berfungsi setelah deploy
**Solusi:**
1. Buka browser console (F12) untuk cek error
2. Pastikan semua library CDN ter-load
3. Cek apakah ada file yang missing

---

## 📞 Bantuan Lebih Lanjut

Jika mengalami kesulitan:

1. **Dokumentasi Platform:**
   - Netlify: https://docs.netlify.com
   - Vercel: https://vercel.com/docs
   - GitHub Pages: https://docs.github.com/pages
   - Render: https://render.com/docs

2. **Video Tutorial:**
   - Cari di YouTube: "deploy static site to netlify"
   - Atau: "deploy html to vercel"

3. **Community Support:**
   - Stack Overflow
   - GitHub Discussions
   - Discord communities

---

## ✨ Tips Tambahan

1. **Gunakan Netlify atau Vercel** untuk pengalaman terbaik
2. **Enable HTTPS** (otomatis di semua platform)
3. **Monitor usage** di dashboard hosting
4. **Backup code** secara berkala
5. **Test aplikasi** setelah setiap deploy

---

## 📊 Perbandingan Platform

| Fitur | Netlify | Vercel | GitHub Pages | Render |
|-------|---------|--------|--------------|--------|
| Gratis | ✅ | ✅ | ✅ | ✅ |
| HTTPS | ✅ | ✅ | ✅ | ✅ |
| Auto Deploy | ✅ | ✅ | ✅ | ✅ |
| Custom Domain | ✅ | ✅ | ✅ | ✅ |
| Kemudahan | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Kecepatan | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

**Rekomendasi:** Netlify atau Vercel untuk hasil terbaik!

---

Selamat mencoba! 🎉
