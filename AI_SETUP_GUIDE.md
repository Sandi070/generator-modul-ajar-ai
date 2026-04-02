# 🤖 Panduan Setup AI Generator

## 📋 Overview

Aplikasi ini mendukung 2 mode:

### 1. **Rule-Based AI (Default - Offline)** ✅
- Tidak perlu API key
- Bekerja offline
- Konten spesifik untuk materi tertentu (Kimia, Matematika, Fisika)
- Sudah cukup bagus untuk kebanyakan kasus

### 2. **AI API Integration (Advanced - Online)** 🚀
- Memerlukan API key
- Hasil lebih dinamis dan kontekstual
- Bisa generate konten untuk semua materi
- Lebih "cerdas" dan adaptif

---

## 🎯 Mode 1: Rule-Based AI (Sudah Aktif)

### Fitur yang Sudah Tersedia:

#### ✅ Soal Spesifik untuk Kimia:
- **Pereaksi Pembatas**: Soal perhitungan mol, massa, dan pereaksi pembatas
- **Stoikiometri**: Soal konversi mol-massa-partikel
- **Ikatan Kimia**: Soal struktur Lewis dan jenis ikatan

#### ✅ Soal Spesifik untuk Matematika:
- Fungsi, Aljabar, Geometri, dll.

#### ✅ Soal Spesifik untuk Fisika:
- Gerak, Gaya, Energi, dll.

### Contoh Output untuk "Pereaksi Pembatas":

**Asesmen Diagnostik:**
1. Jelaskan apa yang dimaksud dengan pereaksi pembatas dalam suatu reaksi kimia!
2. Jika 10 gram H₂ bereaksi dengan 80 gram O₂ membentuk H₂O, tentukan pereaksi pembatas! (Ar H=1, O=16)
3. Mengapa penting mengetahui pereaksi pembatas dalam industri kimia?

**Asesmen Sumatif:**
1. Sebanyak 6 gram karbon (C) dibakar dengan 16 gram oksigen (O₂)... [soal lengkap dengan perhitungan]
2. Dalam industri pembuatan amonia (NH₃)... [soal aplikasi industri]
3. Jelaskan mengapa konsep pereaksi pembatas penting dalam efisiensi produksi...

---

## 🚀 Mode 2: AI API Integration (Opsional)

### Keuntungan Menggunakan AI API:

1. **Lebih Dinamis**: Generate soal untuk SEMUA materi, tidak hanya yang sudah di-program
2. **Lebih Kontekstual**: Soal disesuaikan dengan konteks terkini
3. **Lebih Variatif**: Setiap generate menghasilkan soal berbeda
4. **Lebih Cerdas**: Bisa memahami nuansa materi yang kompleks

### Pilihan AI Provider:

#### 1. **Google Gemini** (Recommended - GRATIS!)
- ✅ Gratis dengan quota harian
- ✅ Mudah setup
- ✅ Kualitas bagus
- ✅ Bahasa Indonesia support

**Cara Mendapatkan API Key:**
1. Kunjungi: https://makersuite.google.com/app/apikey
2. Login dengan Google Account
3. Klik "Create API Key"
4. Copy API key

#### 2. **Groq** (Cepat & Gratis)
- ✅ Gratis
- ✅ Sangat cepat
- ✅ Kualitas bagus

**Cara Mendapatkan API Key:**
1. Kunjungi: https://console.groq.com
2. Sign up / Login
3. Buat API key di dashboard

#### 3. **OpenAI GPT-4** (Paling Canggih - Berbayar)
- ⚠️ Berbayar ($0.01 per request)
- ✅ Kualitas terbaik
- ✅ Paling cerdas

**Cara Mendapatkan API Key:**
1. Kunjungi: https://platform.openai.com/api-keys
2. Sign up / Login
3. Add payment method
4. Create API key

---

## ⚙️ Cara Mengaktifkan AI API:

### Langkah 1: Buka file `config.js`

### Langkah 2: Edit konfigurasi:

```javascript
const CONFIG = {
    AI_API: {
        enabled: true,  // ← Ubah dari false ke true
        provider: 'gemini',  // ← Pilih: 'gemini', 'groq', atau 'openai'
        apiKey: 'YOUR_API_KEY_HERE',  // ← Paste API key Anda di sini
        
        // ... (sisanya biarkan default)
    }
};
```

### Langkah 3: Save dan Refresh Browser

### Langkah 4: Test

Generate modul dengan materi apapun, dan lihat hasilnya lebih spesifik!

---

## 📊 Perbandingan Mode:

| Fitur | Rule-Based | AI API |
|-------|------------|--------|
| **Biaya** | Gratis | Gratis (Gemini/Groq) atau Berbayar (OpenAI) |
| **Internet** | Tidak perlu | Perlu |
| **Kecepatan** | Sangat cepat | Agak lambat (2-5 detik) |
| **Kualitas** | Bagus untuk materi umum | Sangat bagus untuk semua materi |
| **Variasi** | Terbatas | Tidak terbatas |
| **Materi Spesifik** | Hanya yang di-program | Semua materi |

---

## 🎯 Rekomendasi:

### Gunakan Rule-Based AI jika:
- ✅ Mengajar materi yang sudah di-support (Kimia, Matematika, Fisika)
- ✅ Tidak ada koneksi internet
- ✅ Butuh hasil cepat
- ✅ Tidak mau repot setup API

### Gunakan AI API jika:
- ✅ Mengajar materi yang belum di-support
- ✅ Ingin hasil lebih variatif
- ✅ Ingin soal lebih kontekstual
- ✅ Tidak masalah dengan sedikit delay

---

## 🔧 Troubleshooting:

### Error: "AI API not configured"
**Solusi:** Pastikan `enabled: true` dan API key sudah diisi di `config.js`

### Error: "Invalid API key"
**Solusi:** Cek kembali API key, pastikan tidak ada spasi atau karakter tambahan

### Error: "Quota exceeded"
**Solusi:** Untuk Gemini/Groq gratis, tunggu beberapa jam atau ganti provider

### Hasil masih template
**Solusi:** 
1. Cek console browser (F12) untuk error
2. Pastikan file `ai-generator.js` dan `ai-api.js` ter-load
3. Hard refresh browser (Ctrl+F5)

---

## 💡 Tips:

1. **Untuk Penggunaan Sehari-hari**: Rule-Based AI sudah cukup bagus
2. **Untuk Materi Baru**: Gunakan AI API
3. **Untuk Presentasi/Demo**: Gunakan AI API untuk impress audience
4. **Untuk Offline**: Rule-Based AI adalah pilihan terbaik

---

## 📞 Support:

Jika ada pertanyaan atau masalah:
1. Cek console browser (F12) untuk error message
2. Baca dokumentasi provider AI yang digunakan
3. Test dengan `test-working.html` untuk memastikan fungsi dasar bekerja

---

**Happy Teaching! 🎓**