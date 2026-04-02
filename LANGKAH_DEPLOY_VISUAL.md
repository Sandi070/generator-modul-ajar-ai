# 🎯 Panduan Deploy Visual (Step-by-Step)

## 📌 Persiapan (Hanya Sekali)

### ✅ Checklist Persiapan:
```
[ ] Komputer/Laptop dengan internet
[ ] Browser (Chrome/Firefox/Edge)
[ ] Email aktif
```

---

## 🔧 TAHAP 1: Install Git (5 Menit)

### Windows:
```
1. Buka: https://git-scm.com/download/win
2. Download installer
3. Jalankan installer
4. Klik "Next" sampai selesai
5. Restart komputer
```

### Mac:
```
1. Buka Terminal
2. Ketik: git --version
3. Ikuti instruksi jika muncul popup
```

### Cek Instalasi:
```bash
# Buka Terminal/CMD, ketik:
git --version

# Jika muncul versi Git, berarti berhasil!
# Contoh output: git version 2.40.0
```

---

## 👤 TAHAP 2: Buat Akun GitHub (5 Menit)

### Langkah-langkah:
```
1. Buka: https://github.com/signup
2. Isi form:
   - Email: [email Anda]
   - Password: [minimal 8 karakter]
   - Username: [contoh: guru_ahmad]
3. Verifikasi email
4. Login ke GitHub
```

---

## 📤 TAHAP 3: Upload ke GitHub (10 Menit)

### A. Buka Terminal/CMD di Folder Project

**Windows:**
```
1. Buka folder project
2. Klik kanan di area kosong
3. Pilih "Open in Terminal" atau "Git Bash Here"
```

**Mac:**
```
1. Buka folder project di Finder
2. Klik kanan folder
3. Pilih "New Terminal at Folder"
```

### B. Jalankan Perintah Git

**Perintah 1: Inisialisasi**
```bash
git init
```
↳ Membuat repository Git baru
↳ Output: "Initialized empty Git repository..."

**Perintah 2: Tambahkan File**
```bash
git add .
```
↳ Menambahkan semua file ke staging
↳ Tidak ada output (normal)

**Perintah 3: Commit**
```bash
git commit -m "Upload aplikasi modul ajar"
```
↳ Menyimpan perubahan
↳ Output: "X files changed, Y insertions..."

### C. Buat Repository di GitHub

```
1. Buka: https://github.com/new
2. Isi form:
   - Repository name: generator-modul-ajar-ai
   - Description: (opsional)
   - Public/Private: pilih "Public"
   - JANGAN centang "Initialize with README"
3. Klik: "Create repository"
```

### D. Hubungkan dengan GitHub

**PENTING: Ganti USERNAME dengan username GitHub Anda!**

```bash
git remote add origin https://github.com/USERNAME/generator-modul-ajar-ai.git
git branch -M main
git push -u origin main
```

**Jika diminta login:**
```
Username: [username GitHub Anda]
Password: [gunakan Personal Access Token, bukan password]
```

**Cara buat Personal Access Token:**
```
1. Buka: https://github.com/settings/tokens
2. Klik: "Generate new token (classic)"
3. Note: "Deploy token"
4. Expiration: pilih "No expiration"
5. Centang: "repo"
6. Klik: "Generate token"
7. COPY token (hanya muncul sekali!)
8. Paste sebagai password saat git push
```

---

## 🌐 TAHAP 4: Deploy di Netlify (10 Menit)

### A. Buat Akun Netlify

```
1. Buka: https://app.netlify.com/signup
2. Klik: "Sign up with GitHub"
3. Klik: "Authorize Netlify"
4. Tunggu redirect ke dashboard
```

### B. Import Project

```
1. Di dashboard Netlify, klik: "Add new site"
2. Klik: "Import an existing project"
3. Klik: "GitHub"
4. Cari repository: "generator-modul-ajar-ai"
5. Klik repository tersebut
```

### C. Konfigurasi Deploy

```
Build settings:
- Build command: (kosongkan)
- Publish directory: (kosongkan atau ketik ".")
- Klik: "Deploy site"
```

### D. Tunggu Deploy

```
Status deploy:
[●●●●●●●●●●] Building...
[●●●●●●●●●●] Deploying...
[✓✓✓✓✓✓✓✓✓✓] Published!

Waktu: ±2 menit
```

### E. Akses Aplikasi

```
URL akan muncul di dashboard:
https://random-name-123456.netlify.app

Klik URL untuk membuka aplikasi!
```

---

## 🎨 TAHAP 5: Ubah Nama Domain (Opsional)

### Langkah-langkah:

```
1. Di dashboard Netlify, klik: "Site settings"
2. Klik: "Change site name"
3. Ketik nama baru: modul-ajar-ai
   (atau nama lain yang tersedia)
4. Klik: "Save"
5. URL baru: https://modul-ajar-ai.netlify.app
```

---

## 🔄 CARA UPDATE APLIKASI

### Setelah Edit File:

```bash
# 1. Tambahkan perubahan
git add .

# 2. Commit dengan pesan
git commit -m "Update aplikasi"

# 3. Push ke GitHub
git push origin main
```

**Hasil:**
- Aplikasi otomatis ter-update di Netlify
- Tunggu 1-2 menit
- Refresh browser untuk lihat perubahan

---

## ✅ CHECKLIST DEPLOY

### Persiapan:
- [ ] Git terinstall
- [ ] Akun GitHub dibuat
- [ ] Akun Netlify dibuat

### Upload ke GitHub:
- [ ] Repository Git dibuat (git init)
- [ ] File ditambahkan (git add .)
- [ ] Commit dibuat (git commit)
- [ ] Repository GitHub dibuat
- [ ] Code di-push ke GitHub

### Deploy di Netlify:
- [ ] Project di-import dari GitHub
- [ ] Deploy berhasil
- [ ] Aplikasi bisa diakses via URL
- [ ] Aplikasi berfungsi dengan baik

---

## 🆘 TROUBLESHOOTING

### ❌ "git: command not found"
```
Solusi:
1. Install Git dari https://git-scm.com
2. Restart Terminal/CMD
3. Coba lagi
```

### ❌ "Permission denied" saat git push
```
Solusi:
1. Gunakan Personal Access Token
2. Buat di: https://github.com/settings/tokens
3. Copy token
4. Paste sebagai password
```

### ❌ "Repository not found"
```
Solusi:
1. Cek username GitHub sudah benar
2. Cek nama repository sudah benar
3. Pastikan repository sudah dibuat di GitHub
```

### ❌ Deploy gagal di Netlify
```
Solusi:
1. Cek build logs di dashboard Netlify
2. Pastikan semua file sudah di-push ke GitHub
3. Coba deploy ulang
```

### ❌ Aplikasi tidak muncul setelah deploy
```
Solusi:
1. Tunggu 5 menit
2. Refresh browser (Ctrl + F5)
3. Clear cache browser
4. Coba buka di browser lain
```

---

## 🎉 SELAMAT!

Aplikasi Anda sudah online dan bisa diakses dari mana saja!

### Langkah Selanjutnya:

1. **Bagikan URL:**
   - Via WhatsApp
   - Via Email
   - Via Google Classroom

2. **Bookmark URL:**
   - Simpan di browser
   - Simpan di Google Drive
   - Buat QR Code

3. **Update Berkala:**
   - Edit file sesuai kebutuhan
   - Push ke GitHub
   - Aplikasi otomatis ter-update

---

## 📱 Akses dari HP

```
1. Buka browser di HP
2. Ketik URL aplikasi
3. Bookmark untuk akses cepat
4. Bisa digunakan offline (PWA)
```

---

## 🌟 Tips & Trik

### Tip 1: Simpan Token GitHub
```
Simpan Personal Access Token di:
- Password manager
- File terenkripsi
- Catatan aman
```

### Tip 2: Monitoring
```
Cek dashboard Netlify untuk:
- Jumlah visitor
- Deploy history
- Error logs
```

### Tip 3: Custom Domain
```
Jika punya domain sendiri:
1. Beli domain (Niagahoster, Rumahweb, dll)
2. Setting DNS di Netlify
3. Tunggu propagasi (24 jam)
```

---

**Semoga berhasil! 🚀**

Jika ada pertanyaan, lihat file:
- `TROUBLESHOOTING.md`
- `DEPLOYMENT_GUIDE.md`
- `PANDUAN_DEPLOY_INDONESIA.md`
