# 📚 API Documentation - Generator Modul Ajar AI

## 🏗️ Struktur Data

### FormData Object
```javascript
{
  namaPenyusun: string,
  instansi: string,
  mataPelajaran: string,
  faseKelas: string,
  semester: string,
  tahunPelajaran: string,
  materi: string,
  alokasiWaktu: number,
  pendekatan: string[],
  modelPembelajaran: string,
  kompetensiAwal: string,
  capaianPembelajaran: string,
  tujuanPembelajaran: string
}
```

### Generated Modul Object
```javascript
{
  identitas: {
    namaPenyusun: string,
    instansi: string,
    mataPelajaran: string,
    faseKelas: string,
    semester: string,
    tahunPelajaran: string,
    materi: string,
    alokasiWaktu: string
  },
  kompetensiAwal: string[],
  dimensiProfil: string[],
  capaianPembelajaran: string,
  tujuanPembelajaran: string[],
  modelPendekatan: {
    model: string,
    pendekatan: string[]
  },
  saranaPrasarana: string[],
  langkahPembelajaran: {
    pendahuluan: string[],
    kegiatan: Array<{
      fase: string,
      aktivitas: string[]
    }>,
    penutup: string[]
  },
  asesmen: {
    diagnostik: {
      petunjuk: string,
      soal: string[]
    },
    formatif: {
      deskripsi: string,
      instrumen: string
    },
    sumatif: {
      soal: string[]
    },
    rubrik: Array<{
      nama: string,
      kriteria: {
        4: string,
        3: string,
        2: string,
        1: string
      }
    }>
  },
  pengayaanRemedial: {
    pengayaan: {
      judul: string,
      aktivitas: string[]
    },
    remedial: {
      pertemuan1: {
        judul: string,
        tujuan: string,
        aktivitas: string[]
      },
      pertemuan2: {
        judul: string,
        tujuan: string,
        aktivitas: string[]
      }
    }
  }
}
```

## 🔧 Core Functions

### collectFormData()
**Description**: Mengumpulkan data dari form HTML dan mengembalikan object FormData.

**Parameters**: None

**Returns**: `FormData` - Object berisi semua data form

**Example**:
```javascript
const formData = collectFormData();
console.log(formData.mataPelajaran); // "Matematika"
```

### generateModulAjar(data)
**Description**: Fungsi utama AI untuk menghasilkan modul ajar lengkap.

**Parameters**:
- `data` (FormData): Data input dari form

**Returns**: `GeneratedModul` - Object modul ajar lengkap

**Example**:
```javascript
const modul = generateModulAjar(formData);
console.log(modul.identitas.mataPelajaran);
```

### generateKompetensiAwal(data)
**Description**: Menghasilkan daftar kompetensi awal berdasarkan mata pelajaran.

**Parameters**:
- `data` (FormData): Data input

**Returns**: `string[]` - Array kompetensi awal

**AI Logic**:
- Jika user mengisi manual → gunakan input user
- Jika kosong → generate berdasarkan mata pelajaran
- Fallback → kompetensi umum

### generateDimensiProfil(data)
**Description**: Menghasilkan dimensi profil lulusan sesuai Kurikulum Berbasis Cinta.

**Parameters**:
- `data` (FormData): Data input

**Returns**: `string[]` - Array dimensi profil

**AI Logic**:
- Base: Beriman & bertakwa, Bernalar kritis
- +Karakter → Berkebinekaan global
- +Moderasi → Gotong royong  
- +Inovatif/TIK → Kreatif

### generateTujuanPembelajaran(data)
**Description**: Menghasilkan tujuan pembelajaran spesifik.

**Parameters**:
- `data` (FormData): Data input

**Returns**: `string[]` - Array tujuan pembelajaran

### generateModelPendekatan(data)
**Description**: Menghasilkan model dan pendekatan pembelajaran.

**Parameters**:
- `data` (FormData): Data input

**Returns**: `Object` - Model dan array pendekatan

**AI Logic**:
- Base pendekatan: Pembelajaran mendalam, Saintifik, Berpusat siswa
- Tambahan berdasarkan checkbox yang dipilih

### generateSaranaPrasarana(data)
**Description**: Menghasilkan daftar sarana prasarana yang dibutuhkan.

**Parameters**:
- `data` (FormData): Data input

**Returns**: `string[]` - Array sarana prasarana

**AI Logic**:
- Base: Laptop, Proyektor, LKPD
- +TIK → Aplikasi digital, Internet, E-learning
- +Inovatif → Media simulasi, Alat peraga digital
- +Subject-specific tools

### generateLangkahPembelajaran(data)
**Description**: Menghasilkan langkah-langkah pembelajaran lengkap.

**Parameters**:
- `data` (FormData): Data input

**Returns**: `Object` - Struktur pembelajaran (pendahuluan, kegiatan, penutup)

**AI Logic**:
- Pendahuluan: Salam, presensi, apersepsi, tujuan
- Kegiatan: Konstruksi → Diskusi → Presentasi
- Penutup: Kesimpulan, refleksi, apresiasi
- Adaptasi berdasarkan pendekatan yang dipilih

### generateAsesmen(data)
**Description**: Menghasilkan instrumen asesmen lengkap.

**Parameters**:
- `data` (FormData): Data input

**Returns**: `Object` - Struktur asesmen (diagnostik, formatif, sumatif, rubrik)

**AI Logic**:
- Soal disesuaikan dengan mata pelajaran
- Rubrik adaptif berdasarkan pendekatan
- Instrumen formatif sesuai dengan TIK/konvensional

### generatePengayaanRemedial(data)
**Description**: Menghasilkan program pengayaan dan remedial.

**Parameters**:
- `data` (FormData): Data input

**Returns**: `Object` - Program pengayaan dan remedial

## 🎨 UI Functions

### displayResult(modul)
**Description**: Menampilkan hasil generasi modul dalam format HTML.

**Parameters**:
- `modul` (GeneratedModul): Object modul hasil AI

**Returns**: `void`

**Side Effects**: Mengupdate DOM dengan preview modul

### generateWordDocument(modul)
**Description**: Menghasilkan dan mendownload dokumen Word.

**Parameters**:
- `modul` (GeneratedModul): Object modul

**Returns**: `void`

**Dependencies**: docx.js, FileSaver.js

## 📊 Subject-Specific Logic

### Mata Pelajaran Umum
- Matematika: Fokus problem solving, logical thinking
- Sains: Eksperimen, observasi, analisis
- Bahasa: Komunikasi, literasi, kreativitas
- Sosial: Analisis kritis, empati, kolaborasi

### Mata Pelajaran Agama
- Al-Quran Hadits: Tilawah, tahfidz, tadabbur
- Akidah Akhlak: Karakter, spiritual, moral
- Fiqih: Praktik ibadah, hukum Islam
- SKI: Sejarah, teladan, ibrah
- Bahasa Arab: Komunikasi, mufrodat, qawaid

## 🔄 Pendekatan Integration Logic

### Pendidikan Karakter
- Tambah dimensi "Berkebinekaan global"
- Integrasikan nilai-nilai dalam pembelajaran
- Rubrik penilaian karakter

### Moderasi Beragama
- Nilai toleransi dan moderasi
- Perspektif multi-agama (jika relevan)
- Gotong royong antar umat

### Bilingual
- **Indonesia-Inggris**: Vocabulary, technical terms
- **Indonesia-Arab**: Mufrodat, istilah agama

### Berbasis TIK
- Aplikasi digital dalam pembelajaran
- Platform e-learning
- Media simulasi interaktif

### Pembelajaran Inovatif
- Metode kreatif dan modern
- Media pembelajaran inovatif
- Pendekatan student-centered

## 🧪 Testing Functions

### Browser Compatibility
```javascript
// Test ES6, LocalStorage, Fetch API, CSS Grid/Flex
testBrowserCompatibility()
```

### Performance Testing
```javascript
// Test computation speed, memory usage
testPerformance()
```

### Form Validation
```javascript
// Test required fields, data types
testFormValidation()
```

## 🔒 Security Considerations

### Data Privacy
- Semua processing client-side
- Tidak ada data dikirim ke server
- Local storage untuk preferences saja

### Input Sanitization
- HTML encoding untuk preview
- XSS prevention dalam generated content
- File name sanitization untuk download

### Content Security
- Generated content aman dari script injection
- Word document hanya berisi text/formatting
- No executable content dalam output

## 📈 Performance Optimization

### Lazy Loading
- Libraries dimuat on-demand
- Demo data optional loading

### Memory Management
- Clear unused variables
- Efficient DOM manipulation
- Garbage collection friendly

### Caching Strategy
- Browser cache untuk static assets
- LocalStorage untuk user preferences
- No server-side caching needed

---

**Note**: Dokumentasi ini menjelaskan struktur internal aplikasi untuk developer yang ingin berkontribusi atau mengembangkan fitur tambahan.