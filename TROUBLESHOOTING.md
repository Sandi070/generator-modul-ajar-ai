# 🔧 Troubleshooting Generator Modul Ajar AI

## 🚨 Masalah: "Terjadi kesalahan saat generate modul"

### Langkah Debugging:

#### 1. **Buka Browser Console**
- Tekan `F12` atau `Ctrl+Shift+I`
- Pilih tab "Console"
- Coba generate modul lagi
- Lihat error message yang muncul

#### 2. **Gunakan Debug Tool**
- Buka file `debug.html` di browser
- Jalankan semua test untuk mengidentifikasi masalah
- Periksa hasil test di log

#### 3. **Gunakan Simple Test**
- Buka file `test-simple.html` di browser
- Test akan berjalan otomatis
- Lihat bagian mana yang gagal

### Kemungkinan Penyebab & Solusi:

#### ❌ **JavaScript Error**
**Gejala:** Error di console browser
**Solusi:**
```javascript
// Pastikan semua fungsi terdefinisi
console.log(typeof generateModulAjar); // harus 'function'
console.log(typeof generatePBLSteps); // harus 'function'
```

#### ❌ **Library Tidak Terbaca**
**Gejala:** `docx is not defined` atau `saveAs is not defined`
**Solusi:**
- Pastikan koneksi internet stabil
- Coba reload halaman
- Atau download library secara lokal

#### ❌ **Form Data Tidak Valid**
**Gejala:** Error saat collect form data
**Solusi:**
- Pastikan semua field wajib terisi
- Periksa dropdown sudah dipilih
- Cek tidak ada karakter khusus yang bermasalah

#### ❌ **Model Pembelajaran Tidak Dikenali**
**Gejala:** Error pada langkah pembelajaran
**Solusi:**
```javascript
// Pastikan model pembelajaran valid
const validModels = ['PBL', 'PjBL', 'Discovery', 'Inquiry', 'Cooperative', 'STEAM'];
console.log(validModels.includes(selectedModel));
```

### Quick Fix Commands:

#### **Reset Form**
```javascript
document.getElementById('modulForm').reset();
```

#### **Clear Cache**
```javascript
localStorage.clear();
sessionStorage.clear();
```

#### **Force Reload Libraries**
```javascript
// Reload docx.js
const script1 = document.createElement('script');
script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/docx/7.8.2/docx.min.js';
document.head.appendChild(script1);

// Reload FileSaver.js
const script2 = document.createElement('script');
script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js';
document.head.appendChild(script2);
```

### Manual Test Data:

Jika form bermasalah, coba test dengan data manual:

```javascript
const testData = {
    namaPenyusun: 'Test User',
    instansi: 'Test School',
    mataPelajaran: 'Matematika',
    faseKelas: 'E/X',
    semester: 'Ganjil',
    tahunPelajaran: '2025/2026',
    materi: 'Test Materi',
    alokasiWaktu: '3',
    pendekatan: ['karakter'],
    modelPembelajaran: 'PBL',
    kompetensiAwal: 'Test kompetensi',
    capaianPembelajaran: 'Test capaian',
    tujuanPembelajaran: 'Test tujuan'
};

// Test generation
try {
    const modul = generateModulAjar(testData);
    console.log('Success:', modul);
} catch (error) {
    console.error('Error:', error);
}
```

### Browser Compatibility:

#### **Minimum Requirements:**
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

#### **Required Features:**
- ES6 (Arrow functions, template literals)
- Async/Await
- Fetch API
- CSS Grid & Flexbox

### Common Error Messages:

#### `"Cannot read property of undefined"`
**Penyebab:** Element form tidak ditemukan
**Solusi:** Periksa ID element di HTML

#### `"generatePBLSteps is not a function"`
**Penyebab:** Fungsi model pembelajaran tidak terdefinisi
**Solusi:** Pastikan semua fungsi model ada di app.js

#### `"docx is not defined"`
**Penyebab:** Library docx.js tidak terbaca
**Solusi:** Reload halaman atau cek koneksi internet

### Debug Console Commands:

```javascript
// Check all required functions
const functions = ['generateModulAjar', 'generatePBLSteps', 'generateDiscoverySteps', 'generateCooperativeSteps'];
functions.forEach(f => console.log(f, typeof window[f]));

// Check form elements
const fields = ['namaPenyusun', 'mataPelajaran', 'modelPembelajaran'];
fields.forEach(id => console.log(id, !!document.getElementById(id)));

// Check libraries
console.log('docx:', typeof docx);
console.log('saveAs:', typeof saveAs);

// Test simple generation
try {
    const result = generateModulAjar({
        namaPenyusun: 'Test',
        instansi: 'Test',
        mataPelajaran: 'Matematika',
        materi: 'Test',
        modelPembelajaran: 'PBL',
        pendekatan: [],
        capaianPembelajaran: 'Test',
        tujuanPembelajaran: 'Test',
        alokasiWaktu: '3',
        faseKelas: 'E/X',
        semester: 'Ganjil',
        tahunPelajaran: '2025/2026',
        kompetensiAwal: ''
    });
    console.log('Generation successful:', result);
} catch (e) {
    console.error('Generation failed:', e);
}
```

### File Structure Check:

Pastikan file-file berikut ada dan dapat diakses:
- ✅ `index.html` - Main application
- ✅ `app.js` - JavaScript logic
- ✅ `styles.css` - Styling
- ✅ `demo-data.js` - Demo data
- ✅ `debug.html` - Debug tool
- ✅ `test-simple.html` - Simple test

### Network Issues:

Jika CDN bermasalah, download library lokal:
1. Download `docx.min.js` dari CDN
2. Download `FileSaver.min.js` dari CDN
3. Simpan di folder `libs/`
4. Update path di HTML:
```html
<script src="libs/docx.min.js"></script>
<script src="libs/FileSaver.min.js"></script>
```

### Contact Support:

Jika masalah masih berlanjut:
1. Buka `debug.html` dan screenshot hasil test
2. Buka browser console dan screenshot error
3. Catat langkah-langkah yang menyebabkan error
4. Sertakan informasi browser dan OS

---

**💡 Tip:** Selalu buka browser console saat debugging untuk melihat error message yang detail!