<script setup>
const {
  berita,
  pending,
  error,
  refresh
} = useBerita()

useHead({
  title: 'Berita & Kegiatan Sekolah - SMA Taman Madya Jetis',

  meta: [
    {
      name: 'description',
      content:
        'Berita, kegiatan, prestasi, dan informasi terbaru SMA Taman Madya Jetis.'
    }
  ]
})
</script>


<template>
  <main class="min-h-screen bg-slate-50">

    <!-- HEADER -->
    <section class="bg-white py-16">

      <div
        class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8"
      >

        <NuxtLink
          to="/"
          class="inline-flex items-center font-semibold text-blue-600 hover:text-blue-800"
        >
          ← Kembali ke Beranda
        </NuxtLink>

        <span
          class="mt-8 block font-semibold text-blue-600"
        >
          Informasi Terbaru
        </span>

        <h1
          class="mt-2 text-3xl font-bold text-slate-800 sm:text-4xl"
        >
          Berita & Kegiatan Sekolah
        </h1>

        <p
          class="mx-auto mt-4 max-w-2xl text-slate-500"
        >
          Temukan berbagai informasi, kegiatan,
          prestasi, dan berita terbaru dari
          SMA Taman Madya Jetis.
        </p>

      </div>

    </section>


    <!-- CONTENT -->
    <section class="py-16">

      <div
        class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >

        <!-- LOADING -->
        <div
          v-if="pending"
          class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >

          <div
            v-for="i in 6"
            :key="i"
            class="overflow-hidden rounded-2xl bg-white shadow-sm"
          >

            <div
              class="h-52 animate-pulse bg-slate-200"
            />

            <div class="p-6">

              <div
                class="h-4 w-32 animate-pulse rounded bg-slate-200"
              />

              <div
                class="mt-4 h-6 animate-pulse rounded bg-slate-200"
              />

              <div
                class="mt-3 h-4 animate-pulse rounded bg-slate-200"
              />

            </div>

          </div>

        </div>


        <!-- ERROR -->
        <div
          v-else-if="error"
          class="rounded-2xl bg-white p-10 text-center shadow-sm"
        >

          <div class="text-5xl">
            ⚠️
          </div>

          <h2
            class="mt-4 text-xl font-bold text-slate-800"
          >
            Gagal Memuat Berita
          </h2>

          <p
            class="mt-2 text-slate-500"
          >
            Terjadi masalah saat mengambil data dari server.
          </p>

          <button
            type="button"
            class="mt-6 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            @click="refresh()"
          >
            Coba Lagi
          </button>

        </div>


        <!-- EMPTY -->
        <div
          v-else-if="!berita?.length"
          class="rounded-2xl bg-white p-10 text-center shadow-sm"
        >

          <div class="text-5xl">
            📰
          </div>

          <h2
            class="mt-4 text-xl font-bold text-slate-800"
          >
            Data berita belum tersedia
          </h2>

          <p
            class="mt-2 text-slate-500"
          >
            Belum ada berita yang tersedia.
          </p>

          <NuxtLink
            to="/"
            class="mt-6 inline-flex rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Kembali ke Beranda
          </NuxtLink>

        </div>


        <!-- BERITA -->
        <div
          v-else
          class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >

          <article
            v-for="item in berita"
            :key="item.id"
            class="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >

            <!-- IMAGE -->
            <div
              class="relative h-52 overflow-hidden bg-slate-100"
            >

              <img
                v-if="item.image"
                :src="item.image"
                :alt="item.title"
                class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />

              <div
                v-else
                class="flex h-full w-full items-center justify-center"
              >

                <div class="text-center text-slate-400">

                  <div class="text-4xl">
                    📰
                  </div>

                  <p class="mt-2 text-sm">
                    Tidak ada gambar
                  </p>

                </div>

              </div>


              <!-- BADGE -->
              <span
                class="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-blue-600 shadow"
              >
                {{ item.isVideo ? 'Video' : 'Berita Sekolah' }}
              </span>

            </div>


            <!-- CONTENT -->
            <div class="p-6">

              <p
                class="text-sm font-medium text-green-600"
              >
                📅 {{ item.date }}
              </p>


              <h2
                class="mt-3 line-clamp-2 text-xl font-bold text-slate-800"
              >
                {{ item.title }}
              </h2>


              <p
                class="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-500"
              >
                {{ item.excerpt }}
              </p>


              <div
                class="mt-5 flex items-center justify-between"
              >

                <NuxtLink
                  :to="`/berita/${item.slug}`"
                  class="inline-flex items-center font-semibold text-blue-600 transition hover:text-blue-800"
                >
                  Baca Selengkapnya

                  <span
                    class="ml-2 transition group-hover:translate-x-1"
                  >
                    →
                  </span>
                </NuxtLink>

                <span
                  class="text-xs text-slate-400"
                >
                  ❤️ {{ item.likes }}
                </span>

              </div>

            </div>

          </article>

        </div>

      </div>

    </section>

  </main>
</template>