const API_URL =
  'https://api-ig-ruddy.vercel.app/api/berita/sekolah/tamanmadyajetisyogya1956'

export const useBerita = () => {
  const {
    data: berita,
    pending,
    error,
    refresh
  } = useAsyncData(
    'berita-sekolah',
    async () => {
      const response = await $fetch(API_URL)

      if (!response) {
        throw new Error('API tidak memberikan response')
      }

      if (!Array.isArray(response.data)) {
        throw new Error('Format data API tidak valid')
      }

      return response.data.map((item) => {

        // =====================================
        // GAMBAR
        // =====================================

        const images = Array.isArray(item.images)
          ? item.images.filter(Boolean).map(url => prosesImageUrl(url))
          : []

        // Prioritas:
        // 1. images[0]
        // 2. thumbnail_url
        // 3. null

        const image =
          (images[0] ||
          prosesImageUrl(item.thumbnail_url) ||
          null)

        // =====================================
        // JUDUL
        // =====================================

        const title = buatJudul(
          item.caption
        )


        // =====================================
        // RETURN DATA
        // =====================================

        return {

          // ID
          id:
            item.id || null,

          shortCode:
            item.short_code || null,

          // JUDUL
          title,

          slug:
            `${buatSlug(title)}-${item.short_code || item.id}`,


          // TANGGAL
          date:
            formatTanggal(item.posted_at),

          postedAt:
            item.posted_at || null,


          // KONTEN
          caption:
            item.caption || '',

          excerpt:
            item.caption ||
            'Tidak ada deskripsi.',

          content:
            item.caption ||
            'Tidak ada deskripsi.',


          // =====================================
          // GAMBAR
          // =====================================

          image,

          images,

          thumbnailUrl:
            prosesImageUrl(item.thumbnail_url) || null,


          // =====================================
          // VIDEO
          // =====================================

          type:
            item.type || null,

          isVideo:
            item.is_video === true,

          videoUrl:
            item.video_url || null,


          // =====================================
          // INSTAGRAM
          // =====================================

          instagramUrl:
            item.post_url || null,

          username:
            item.username || '',


          // =====================================
          // LAINNYA
          // =====================================

          likes:
            Number(item.likes || 0),

          hashtags:
            Array.isArray(item.hashtags)
              ? item.hashtags
              : []
        }
      })
    },
    {
      server: true,
      lazy: false
    }
  )


  // =====================================
  // GET BY SLUG
  // =====================================

  const getBeritaBySlug = (slug) => {

    if (!slug || !berita.value) {
      return null
    }

    return berita.value.find(
      item =>
        item.slug === String(slug)
    ) || null
  }


  // =====================================
  // GET BY ID
  // =====================================

  const getBeritaById = (id) => {

    if (!id || !berita.value) {
      return null
    }

    return berita.value.find(
      item =>
        String(item.id) === String(id)
    ) || null
  }


  // =====================================
  // GET BY SHORT CODE
  // =====================================

  const getBeritaByShortCode = (shortCode) => {

    if (!shortCode || !berita.value) {
      return null
    }

    return berita.value.find(
      item =>
        String(item.shortCode) ===
        String(shortCode)
    ) || null
  }


  return {
    berita,
    pending,
    error,
    refresh,

    getBeritaBySlug,
    getBeritaById,
    getBeritaByShortCode
  }
}


// =====================================
// PROSES IMAGE URL (PROXY)
// =====================================

function prosesImageUrl(url) {

  if (!url) {
    return null
  }

  // Deteksi apakah Instagram CDN
  const isInstagramCdn = 
    url.includes('cdninstagram.com') ||
    url.includes('fbcdn.net') ||
    url.includes('scontent')

  // Jika Instagram CDN, pakai proxy
  if (isInstagramCdn) {
    return `https://images.weserv.nl/?url=${encodeURIComponent(url)}`
  }

  return url
}


// =====================================
// BUAT JUDUL
// =====================================

function buatJudul(caption) {

  if (!caption) {
    return 'Berita Sekolah'
  }

  const baris =
    String(caption)
      .split('\n')
      .map(item => item.trim())
      .filter(Boolean)

  let title =
    baris[0] ||
    'Berita Sekolah'

  title = title
    .replace(/\*\*/g, '')
    .replace(
      /[❤️🔥📢✨📣🎉👍🙏😊]/gu,
      ''
    )
    .trim()

  return title ||
    'Berita Sekolah'
}


// =====================================
// BUAT SLUG
// =====================================

function buatSlug(text) {

  return String(text)
    .normalize('NFD')
    .replace(
      /[\u0300-\u036f]/g,
      ''
    )
    .toLowerCase()
    .replace(
      /[^\p{L}\p{N}\s-]/gu,
      ''
    )
    .trim()
    .replace(
      /\s+/g,
      '-'
    )
    .replace(
      /-+/g,
      '-'
    )
}


// =====================================
// FORMAT TANGGAL
// =====================================

function formatTanggal(date) {

  if (!date) {
    return '-'
  }

  const tanggal =
    new Date(date)

  if (
    Number.isNaN(
      tanggal.getTime()
    )
  ) {
    return '-'
  }

  return tanggal.toLocaleDateString(
    'id-ID',
    {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }
  )
}