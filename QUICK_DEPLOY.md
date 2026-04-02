# ⚡ Panduan Deploy Cepat (5 Menit)

## 🎯 Cara Tercepat: Deploy ke Netlify

### Langkah 1: Upload ke GitHub (2 menit)

Buka Terminal/Command Prompt di folder project, lalu jalankan:

```bash
# Inisialisasi Git
git init
git add .
git commit -m "Initial commit"

# Buat repository di GitHub
# Buka: https://github.com/new
# Nama: generator-modul-ajar-ai
# Klik: Create repository

# Push ke GitHub (ganti USERNAME dengan username GitHub Anda)
git remote add origin https://github.com/USERNAME/generator-modul-ajar-ai.git
git branch -M main
git push -u origin main
```

### Langkah 2: Deploy di Netlify (3 menit)

1. Buka: https://app.netlify.com/signup
2. Klik: "Sign up with GitHub"
3. Klik: "Add new site" → "Import an existing project"
4. Pilih: "GitHub"
5. Pilih repository: `generator-modul-ajar-ai`
6. Klik: "Deploy site"
7. Tunggu 1-2 menit
8. ✅ Selesai! Aplikasi sudah online

URL aplikasi: `https://[random-name].netlify.app`

### Ubah Nama Domain (Opsional)

1. Klik: "Site settings"
2. Klik: "Change site name"
3. Masukkan nama: `modul-ajar-ai` (atau nama lain)
4. URL baru: `https://modul-ajar-ai.netlify.app`

---

## 🔄 Update Aplikasi

Setelah edit file, jalankan:

```bash
git add .
git commit -m "Update aplikasi"
git push origin main
```

Aplikasi otomatis ter-update dalam 1-2 menit!

---

## 🆘 Butuh Bantuan?

Lihat panduan lengkap di: `DEPLOYMENT_GUIDE.md`

---

Selamat! Aplikasi Anda sudah online! 🎉
