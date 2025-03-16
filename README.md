# 🧠 FineIn - Website Pengecek Kondisi Mental

![FineIn Banner](https://i.imgur.com/placeholder-image.png)

## 📋 Deskripsi

**FineIn** adalah aplikasi web interaktif yang dirancang untuk membantu pengguna mengenali tanda-tanda awal masalah kesehatan mental. Aplikasi ini menyediakan tes komprehensif yang terdiri dari serangkaian pertanyaan yang disusun secara struktural untuk mengidentifikasi parameter masalah mental, mulai dari gejala umum hingga gangguan mental yang lebih spesifik seperti depresi, kecemasan, gangguan bipolar, skizofrenia, PTSD, dan gangguan makan.

## ✨ Fitur Utama

- **Landing Page** yang menarik dengan penjelasan singkat tentang tujuan aplikasi
- **Tes Interaktif** dengan 13 pertanyaan pilihan ganda yang disusun secara struktural
- **Progress Bar** yang menunjukkan kemajuan pengguna selama mengikuti tes
- **Hasil Analisis** yang komprehensif berdasarkan jawaban pengguna
- **Visualisasi Data** melalui grafik persentase untuk setiap kategori gangguan mental
- **Informasi Detail** tentang gangguan mental yang terdeteksi, termasuk fakta, contoh gejala, dan penanganan yang disarankan
- **Desain Responsif** yang optimal untuk berbagai perangkat (desktop, tablet, dan mobile)
- **Animasi Halus** untuk meningkatkan pengalaman pengguna

## 🛠️ Teknologi

- **React.js** - Library JavaScript untuk membangun antarmuka pengguna
- **CSS3** - Untuk styling dan animasi
- **HTML5** - Struktur dasar aplikasi web
- **JavaScript ES6+** - Logika aplikasi dan interaktivitas

## 🔍 Struktur Tes

Tes kondisi mental di FineIn terdiri dari 7 bagian utama:

1. **Gejala Umum Kesehatan Mental**
2. **Depresi dan Gangguan Mood**
3. **Gangguan Kecemasan dan Stres Berlebihan**
4. **Gangguan Bipolar (Perubahan Mood Ekstrem)**
5. **Gangguan Psikotik dan Skizofrenia**
6. **PTSD (Gangguan Stres Pascatrauma)**
7. **Gangguan Makan (Anoreksia, Bulimia, Binge Eating)**

## 📊 Algoritma Analisis

FineIn menggunakan algoritma sederhana namun efektif untuk menganalisis jawaban pengguna:

1. Setiap jawaban diberi bobot (A=0, B=1, C=2, D=3)
2. Skor dihitung untuk setiap kategori gangguan mental
3. Persentase dihitung berdasarkan skor maksimum yang mungkin untuk setiap kategori
4. Kategori dengan persentase tertinggi diidentifikasi sebagai kemungkinan masalah utama

## 🚀 Cara Menjalankan Proyek

### Prasyarat

- Node.js (versi 14.0.0 atau lebih tinggi)
- npm (versi 6.0.0 atau lebih tinggi)

### Langkah-langkah Instalasi

1. Clone repositori
   ```bash
   git clone https://github.com/yourusername/finein.git
   cd finein
   ```

2. Instal dependensi
   ```bash
   npm install
   ```

3. Jalankan aplikasi dalam mode pengembangan
   ```bash
   npm start
   ```

4. Buka [http://localhost:3000](http://localhost:3000) untuk melihat aplikasi di browser

### Build untuk Produksi

```bash
npm run build
```

## ⚠️ Disclaimer

FineIn dirancang sebagai alat skrining awal dan bukan pengganti diagnosis profesional. Hasil tes hanya bersifat indikatif dan tidak boleh digunakan untuk mendiagnosis diri sendiri. Jika Anda mengalami gejala yang mengganggu, segera konsultasikan dengan psikolog atau psikiater untuk mendapatkan bantuan yang tepat.

## 👨‍💻 Pengembang

Dikembangkan dengan ❤️ oleh [bagaspra16](https://bagaspra16.com)

## 📄 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE)

---

<p align="center">
  <a href="https://finein.vercel.app">Kunjungi Website</a> •
  <a href="https://github.com/yourusername/finein">GitHub</a> •
  <a href="https://bagaspra16.com">Portfolio</a>
</p>
