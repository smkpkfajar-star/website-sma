export const useSekolah = () => {
  const sekolah = {
    nama: 'SMA Taman Madya Jetis',
    tagline: 'Sekolah Berwawasan Lingkungan',
    visi: 'Menghasilkan lulusan yang beriman, cerdas, terampil, dan peduli lingkungan.',
    misi: 'Menyelenggarakan pendidikan berkualitas dengan fokus pada pengembangan karakter dan kepedulian terhadap kelestarian alam.',
    
    // Kontak & Lokasi (disesuaikan dengan data resmi)
    alamat: 'Jl. Pakuningratan 34A, Cokrodiningratan, Jetis, Yogyakarta 55233',
    telepon: '(0274) 517522', // Berdasarkan data referensi sekolah kemdikbud
    email: 'info@smatamadyajetis.sch.id',
    
    // NSS & NPSN (NPSN resmi: 20404178)
    nss: '302031205002',
    npsn: '20404178',
    status: 'Swasta',
    naungan: 'Yayasan Persatuan Perguruan Tamansiswa Cabang Jetis',
    
    // Sosial Media
    sosialMedia: [
      {
        nama: 'Facebook',
        url: 'https://facebook.com/smatamadyajetis',
        icon: 'f',
        color: 'bg-blue-600'
      },
      {
        nama: 'Instagram',
        url: 'https://instagram.com/smatamadyajetis',
        icon: '◎',
        color: 'bg-pink-600'
      },
      {
        nama: 'YouTube',
        url: 'https://youtube.com/@smatamadyajetis',
        icon: '▶',
        color: 'bg-red-600'
      }
    ]
  }

  return sekolah
}