<script setup>
const route = useRoute()

const {
  berita,
  pending,
  error,
  refresh
} = useBerita()


// ======================================================
// CARI BERITA BERDASARKAN SLUG
// ======================================================

const dataBerita = computed(() => {

  if (!berita.value?.length) {
    return null
  }

  const slug = String(route.params.slug)

  return berita.value.find(
    (item) => item.slug === slug
  ) || null
})


// ======================================================
// SEO
// ======================================================

useHead(() => {

  if (!dataBerita.value) {

    return {
      title: 'Berita - SMA Taman Madya Jetis'
    }

  }

  return {

    title:
      `${dataBerita.value.title} - SMA Taman Madya Jetis`,

    meta: [
      {
        name: 'description',
        content:
          dataBerita.value.excerpt
      }
    ]

  }

})


// ======================================================
// IMAGE ERROR
// ======================================================

const imageError = ref(false)

watch(
  () => dataBerita.value?.image,
  () => {
    imageError.value = false
  }
)
</script>


<template>
  <main class="min-h-screen bg-slate-50">


    <!-- ==================================================
         LOADING
    =================================================== -->

    <section
      v-if="pending"
      class="flex min-h-[70vh] items-center justify-center px-4"
    >

      <div class="text-center">

        <div class="text-6xl">
          📰
        </div>

        <h1
          class="mt-6 text-2xl font-bold text-slate-800"
        >
          Memuat Berita...
        </h1>

        <p
          class="mt-3 text-slate-500"
        >
          Mohon tunggu sebentar.
        </p>

      </div>

    </section>


    <!-- ==================================================
         ERROR API
    =================================================== -->

    <section
      v-else-if="error"
      class="flex min-h-[70vh] items-center justify-center px-4"
    >

      <div class="text-center">

        <div class="text-6xl">
          ⚠️
        </div>

        <h1
          class="mt-6 text-2xl font-bold text-slate-800"
        >
          Gagal Memuat Berita
        </h1>

        <p
          class="mt-3 text-slate-500"
        >
          Terjadi masalah saat mengambil data berita.
        </p>

        <button
          type="button"
          class="mt-6 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          @click="refresh()"
        >
          Coba Lagi
        </button>

      </div>

    </section>


    <!-- ==================================================
         BERITA DITEMUKAN
    =================================================== -->

    <article
      v-else-if="dataBerita"
      class="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8"
    >


      <!-- BACK -->
      <NuxtLink
        to="/berita"
        class="inline-flex items-center font-semibold text-blue-600 transition hover:text-blue-800"
      >

        <span class="mr-2">
          ←
        </span>

        Kembali ke Semua Berita

      </NuxtLink>


      <!-- BADGE -->
      <div class="mt-8">

        <span
          class="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600"
        >
          {{ dataBerita.isVideo
            ? 'Video'
            : 'Berita Sekolah'
          }}
        </span>

      </div>


      <!-- TITLE -->
      <h1
        class="mt-6 text-3xl font-bold leading-tight text-slate-800 sm:text-4xl lg:text-5xl"
      >
        {{ dataBerita.title }}
      </h1>


      <!-- META -->
      <div
        class="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-500"
      >

        <span>
          📅 {{ dataBerita.date }}
        </span>

        <span>
          👤 @{{ dataBerita.username }}
        </span>

        <span>
          ❤️ {{ dataBerita.likes }}
        </span>

      </div>


      <!-- ==================================================
           VIDEO
      =================================================== -->

      <div
        v-if="
          dataBerita.isVideo &&
          dataBerita.videoUrl
        "
        class="mt-8 overflow-hidden rounded-2xl bg-black shadow-lg"
      >

        <video
          :src="dataBerita.videoUrl"
          :poster="dataBerita.image || undefined"
          controls
          playsinline
          class="max-h-[600px] w-full"
        />

      </div>


      <!-- ==================================================
           IMAGE
      =================================================== -->

      <div
        v-else-if="dataBerita.image && !imageError"
        class="mt-8 overflow-hidden rounded-2xl bg-slate-100 shadow-lg"
      >

        <img
          :src="dataBerita.image"
          :alt="dataBerita.title"
          class="max-h-[600px] w-full object-cover"
          @error="imageError = true"
        />

      </div>


      <!-- NO IMAGE -->
      <div
        v-else
        class="mt-8 flex h-80 items-center justify-center rounded-2xl bg-slate-100"
      >

        <div class="text-center text-slate-400">

          <div class="text-5xl">
            📰
          </div>

          <p class="mt-3">
            Gambar tidak tersedia
          </p>

        </div>

      </div>


      <!-- ==================================================
           CONTENT
      =================================================== -->

      <div
        class="mt-10 rounded-2xl bg-white p-6 shadow-sm sm:p-10"
      >

        <div
          class="whitespace-pre-line text-lg leading-8 text-slate-600"
        >
          {{ dataBerita.caption }}
        </div>


        <!-- HASHTAGS -->
        <div
          v-if="dataBerita.hashtags?.length"
          class="mt-8 flex flex-wrap gap-2"
        >

          <span
            v-for="tag in dataBerita.hashtags"
            :key="tag"
            class="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600"
          >
            #{{ tag }}
          </span>

        </div>


        <!-- INSTAGRAM -->
        <div
          v-if="dataBerita.instagramUrl"
          class="mt-8 border-t border-slate-200 pt-6"
        >

          <a
            :href="dataBerita.instagramUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex font-semibold text-pink-600 hover:text-pink-700"
          >
            Lihat postingan di Instagram →
          </a>

        </div>

      </div>


      <!-- ==================================================
           NAVIGATION
      =================================================== -->

      <div
        class="mt-10 flex flex-col justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:items-center"
      >

        <NuxtLink
          to="/berita"
          class="font-semibold text-blue-600 hover:text-blue-800"
        >
          ← Lihat Semua Berita
        </NuxtLink>

        <NuxtLink
          to="/"
          class="font-semibold text-slate-600 hover:text-blue-600"
        >
          Kembali ke Beranda
        </NuxtLink>

      </div>

    </article>


    <!-- ==================================================
         BERITA TIDAK DITEMUKAN
    =================================================== -->

    <section
      v-else
      class="flex min-h-[70vh] items-center justify-center px-4"
    >

      <div class="text-center">

        <div class="text-6xl">
          📰
        </div>

        <h1
          class="mt-6 text-2xl font-bold text-slate-800"
        >
          Berita Tidak Ditemukan
        </h1>

        <p
          class="mt-3 text-slate-500"
        >
          Data berita tidak ditemukan atau URL tidak valid.
        </p>

        <NuxtLink
          to="/berita"
          class="mt-6 inline-flex rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Kembali ke Semua Berita
        </NuxtLink>

      </div>

    </section>

  </main>
</template>