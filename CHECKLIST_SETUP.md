# ✅ CHECKLIST SETUP AI BERKUALITAS TINGGI

## 📋 LANGKAH-LANGKAH WAJIB

### ☐ 1. Dapatkan API Key Google Gemini (GRATIS)

1. Buka browser, kunjungi: **https://makersuite.google.com/app/apikey**
2. Login dengan akun Google Anda
3. Klik tombol **"Create API Key"** atau **"Get API Key"**
4. Copy API key yang muncul (format: `AIzaSy...`)
5. Simpan API key di tempat aman

**Status:** ☐ Belum / ☑ Sudah

---

### ☐ 2. Isi API Key di config.js

1. Buka file **`config.js`** dengan text editor (Notepad++, VS Code, dll)
2. Cari baris ini (sekitar baris 5):
   ```javascript
   apiKey: '',
   ```
3. Paste API key Anda di antara tanda kutip:
   ```javascript
   apiKey: 'AIzaSy...PASTE_DI_SINI',
   ```
4. Pastikan tidak ada spasi di awal/akhir
5. Save file (Ctrl+S)

**Status:** ☐ Belum / ☑ Sudah

---

### ☐ 3. Verifikasi Konfigurasi

Buka file `config.js` dan pastikan:

```javascript
AI_API: {
    enabled: true,  // ✅ Harus true
    provider: 'gemini',  // ✅ Harus 'gemini'
    apiKey: 'AIzaSy...',  // ✅ Harus diisi dengan API key Anda
    ...
}
```

**Checklist:**
- ☐ `enabled: true` (bukan false)
- ☐ `provider: 'gemini'` (bukan yang lain)
- ☐ `apiKey` sudah diisi (bukan string kosong '')

**Status:** ☐ Belum / ☑ Sudah

---

### ☐ 4. Test Aplikasi

1. Buka aplikasi di browser (index.html)
2. Tekan **Ctrl+Shift+F5** untuk hard refresh
3. Tekan **F12** untuk buka Developer Tools
4. Klik tab **Console**
5. Isi form modul ajar dengan data test:
   - Mata Pelajaran: Kimia
   - Materi: Pereaksi Pembatas
   - Fase: Fase E (Kelas 10)
   - Model: PBL
6. Klik tombol **"Generate dengan AI"** (BUKAN "Generate Cepat")
7. Tunggu 10-30 detik

**Yang Harus Muncul di Console:**
```
🤖 Calling gemini API...
📤 Sending request to Gemini...
✅ Received response from Gemini
```

**Status:** ☐ Belum / ☑ Sudah

---

### ☐ 5. Verifikasi Kualitas Output

Setelah generate selesai, cek hasilnya:

**Soal Diagnostik - Harus:**
- ☐ Ada angka konkret (bukan variabel umum)
- ☐ Ada konteks nyata (industri, lab, kehidupan)
- ☐ Bukan soal "Jelaskan tentang..." yang umum
- ☐ Ada perhitungan atau analisis

**Kegiatan Pembelajaran - Harus:**
- ☐ Sangat detail dan spesifik
- ☐ Ada instruksi yang actionable
- ☐ Ada waktu, alat, bahan yang disebutkan
- ☐ Bukan "Guru menjelaskan, siswa mendengarkan"

**Program Pengayaan - Harus:**
- ☐ Berbasis proyek riil (bukan latihan soal)
- ☐ Ada tools/teknologi yang disebutkan
- ☐ Ada output konkret yang dihasilkan
- ☐ Ada durasi dan penilaian yang jelas

**Status:** ☐ Belum / ☑ Sudah

---

## 🔧 TROUBLESHOOTING

### ❌ Error: "API Key tidak ditemukan"

**Penyebab:** API key belum diisi di config.js

**Solusi:**
1. Buka config.js
2. Pastikan `apiKey: 'AIzaSy...'` sudah diisi
3. Save file
4. Refresh browser (Ctrl+F5)

---

### ❌ Error: "API Key tidak valid"

**Penyebab:** API key salah atau belum diaktifkan

**Solusi:**
1. Cek API key di https://makersuite.google.com/app/apikey
2. Pastikan API key sudah diaktifkan (status: Active)
3. Coba generate API key baru
4. Copy-paste dengan hati-hati (tidak ada spasi)

---

### ❌ Hasil Masih Template

**Penyebab:** Mungkin masih menggunakan fallback rule-based

**Solusi:**
1. Buka Console (F12)
2. Cek apakah ada pesan "Calling gemini API"
3. Jika tidak ada, berarti API tidak aktif
4. Pastikan `enabled: true` di config.js
5. Pastikan API key sudah benar

---

### ❌ Loading Terlalu Lama (>1 menit)

**Penyebab:** Rate limit API gratis atau koneksi lambat

**Solusi:**
1. Tunggu 1-2 menit
2. Coba lagi
3. Jika masih lambat, cek koneksi internet
4. API gratis memiliki limit, tunggu beberapa saat

---

### ❌ Console Menunjukkan Error 429

**Penyebab:** Terlalu banyak request dalam waktu singkat

**Solusi:**
1. Tunggu 1-2 menit
2. API gratis memiliki rate limit (15 request/menit)
3. Jangan spam tombol generate
4. Atau upgrade ke API berbayar untuk limit lebih tinggi

---

## 📊 HASIL YANG DIHARAPKAN

Jika semua setup benar, Anda akan mendapatkan:

### ✅ Soal Diagnostik Berkualitas
```
1. Seorang peneliti mengamati tablet effervescent larut dalam air dingin 
   (10°C) selama 5 menit, tetapi dalam air hangat (40°C) hanya 1 menit. 
   Jelaskan mengapa terjadi perbedaan dan kaitkan dengan teori tumbukan!
```

### ✅ Kegiatan Pembelajaran Detail
```
Fase: Orientasi Masalah (15 menit)

1. Guru mendemonstrasikan reaksi: 5 cm pita magnesium + 50 mL HCl 1M 
   dalam gelas kimia. Siswa mengamati gelembung gas H₂ dan mencatat 
   bahwa reaksi berhenti meskipun masih ada pita Mg tersisa (±0,5 cm)
```

### ✅ Program Pengayaan Berbasis Proyek
```
Judul: "ChemRate: Aplikasi Prediksi Laju Reaksi Berbasis Machine Learning"

Siswa mengembangkan aplikasi web yang dapat memprediksi laju reaksi...
Tools: Python, Streamlit, Google Colab, Git/GitHub
```

---

## 🎯 CHECKLIST AKHIR

Sebelum menggunakan aplikasi untuk produksi, pastikan:

- ☐ API key sudah diisi dan valid
- ☐ `enabled: true` di config.js
- ☐ Test generate berhasil tanpa error
- ☐ Hasil output berkualitas tinggi (bukan template)
- ☐ Console tidak menunjukkan error
- ☐ Aplikasi dapat diakses online (jika sudah deploy)

---

## 📞 BANTUAN LEBIH LANJUT

Jika masih ada masalah:

1. **Baca dokumentasi:**
   - CARA_MENGGUNAKAN_AI_BERKUALITAS.md
   - PENINGKATAN_KUALITAS_AI.md
   - PERBEDAAN_SEBELUM_SESUDAH.md

2. **Cek Console Browser:**
   - Tekan F12
   - Lihat tab Console
   - Screenshot error jika ada

3. **Verifikasi API Key:**
   - Kunjungi https://makersuite.google.com/app/apikey
   - Pastikan status Active
   - Coba generate key baru jika perlu

---

## 🎉 SELAMAT!

Jika semua checklist sudah ✅, aplikasi Anda siap menghasilkan 
**modul ajar berkualitas tinggi** dengan AI yang cerdas!

**Tidak ada lagi hasil template! Semua konten spesifik dan kontekstual! 🚀**
