# 🚀 Cara Deploy Aplikasi ke Internet (Ringkas)

## 🎯 Tujuan
Membuat aplikasi Generator Modul Ajar AI bisa diakses online dari mana saja, gratis selamanya!

---

## ⚡ Cara Tercepat (10 Menit)

### Langkah 1: Persiapan (Sekali Saja)

1. **Install Git**
   - Download: https://git-scm.com/downloads
   - Install dengan klik Next terus

2. **Buat Akun GitHub**
   - Daftar di: https://github.com/signup
   - Verifikasi email

### Langkah 2: Upload ke GitHub (5 menit)

Buka Terminal/CMD di folder project, lalu jalankan:

```bash
# Inisialisasi
git init
git add .
git commit -m "Upload aplikasi"

# Buat repo di GitHub: https://github.com/new
# Nama: generator-modul-ajar-ai
# Klik: Create repository

# Upload (ganti USERNAME dengan username GitHub Anda)
git remote add origin https://github.com/USERNAME/generator-modul-ajar-ai.git
git branch -M main
git push -u origin main
```

### Langkah 3: Deploy di Netlify (5 menit)

1. Buka: https://app.netlify.com/signup
2. Klik: "Sign up with GitHub"
3. Klik: "Add new site" → "Import an existing project"
4. Pilih: "GitHub"
5. Pilih repository: `generator-modul-ajar-ai`
6. Klik: "Deploy site"
7. Tunggu 2 menit
8. ✅ Selesai! Aplikasi sudah online

**URL Anda:** `https://[nama-random].netlify.app`

---

## 🔄 Cara Update Aplikasi

Setelah edit file:

```bash
git add .
git commit -m "Update"
git push origin main
```

Aplikasi otomatis ter-update dalam 1-2 menit!

---

## 🎨 Ubah Nama Domain

Di Netlify:
1. Site settings → Change site name
2. Ketik nama baru: `modul-ajar-saya`
3. URL baru: `https://modul-ajar-saya.netlify.app`

---

## 🆘 Troubleshooting

**Git not found?**
→ Install Git dari https://git-scm.com

**Permission denied?**
→ Gunakan Personal Access Token dari https://github.com/settings/tokens

**Deploy gagal?**
→ Cek dashboard Netlify untuk error log

---

## 📚 Panduan Lengkap

Lihat file-file berikut untuk panduan detail:
- `QUICK_DEPLOY.md` - Panduan cepat
- `DEPLOYMENT_GUIDE.md` - Panduan lengkap semua platform
- `PANDUAN_DEPLOY_INDONESIA.md` - Panduan detail bahasa Indonesia

---

## ✅ Checklist

- [ ] Git terinstall
- [ ] Akun GitHub dibuat
- [ ] Code di-push ke GitHub
- [ ] Akun Netlify dibuat
- [ ] Aplikasi berhasil di-deploy
- [ ] Aplikasi bisa diakses online

---

**Selamat! Aplikasi Anda sudah online! 🎉**

Bagikan URL ke rekan-rekan guru Anda!
