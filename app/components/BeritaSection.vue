<script setup>
const {
  berita,
  pending,
  error,
  refresh
} = useBerita()

const gambarGagal = (event) => {
  event.target.style.display = 'none'
}

console.log();

</script>

<template>
  <section class="bg-slate-50 py-16">

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <!-- ================================= -->
      <!-- HEADER -->
      <!-- ================================= -->

      <div
        class="mb-10 flex items-end justify-between gap-4"
      >

        <div>

          <span
            class="font-semibold text-blue-600"
          >
            Informasi Terbaru
          </span>

          <h2
            class="mt-2 text-3xl font-bold text-slate-800 sm:text-4xl"
          >
            Berita & Kegiatan
          </h2>

          <p
            class="mt-3 max-w-2xl text-slate-500"
          >
            Informasi terbaru mengenai kegiatan,
            prestasi, dan aktivitas
            SMA Taman Madya Jetis.
          </p>

        </div>


        <NuxtLink
          v-if="berita?.length"
          to="/berita"
          class="hidden font-semibold text-blue-600 hover:text-blue-800 sm:block"
        >
          Lihat Semua →
        </NuxtLink>

      </div>


      <!-- ================================= -->
      <!-- LOADING -->
      <!-- ================================= -->

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
          ></div>

          <div class="p-6">

            <div
              class="h-4 w-32 animate-pulse rounded bg-slate-200"
            ></div>

            <div
              class="mt-4 h-6 animate-pulse rounded bg-slate-200"
            ></div>

            <div
              class="mt-3 h-4 animate-pulse rounded bg-slate-200"
            ></div>

            <div
              class="mt-2 h-4 w-3/4 animate-pulse rounded bg-slate-200"
            ></div>

          </div>

        </div>

      </div>


      <!-- ================================= -->
      <!-- ERROR -->
      <!-- ================================= -->

      <div
        v-else-if="error"
        class="rounded-2xl bg-white p-10 text-center shadow-sm"
      >

        <div class="text-5xl">
          ⚠️
        </div>

        <h3
          class="mt-4 text-xl font-bold text-slate-800"
        >
          Gagal Memuat Berita
        </h3>

        <p
          class="mt-2 text-slate-500"
        >
          Terjadi masalah saat mengambil
          data berita.
        </p>

        <!-- ERROR DETAIL -->
        <details
          class="mx-auto mt-4 max-w-2xl text-left"
        >

          <summary
            class="cursor-pointer text-sm font-semibold text-red-600"
          >
            Lihat detail error
          </summary>

          <pre
            class="mt-3 overflow-auto rounded-lg bg-slate-100 p-4 text-xs text-red-600"
          >{{ error }}</pre>

        </details>

        <button
          type="button"
          class="mt-6 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          @click="refresh()"
        >
          Coba Lagi
        </button>

      </div>


      <!-- ================================= -->
      <!-- DATA KOSONG -->
      <!-- ================================= -->

      <div
        v-else-if="!berita?.length"
        class="rounded-2xl bg-white p-10 text-center shadow-sm"
      >

        <div class="text-5xl">
          📰
        </div>

        <h3
          class="mt-4 text-xl font-bold text-slate-800"
        >
          Belum Ada Berita
        </h3>

        <p
          class="mt-2 text-slate-500"
        >
          Belum ada berita atau kegiatan
          yang tersedia.
        </p>

      </div>


      <!-- ================================= -->
      <!-- BERITA -->
      <!-- ================================= -->

      <div
        v-else
        class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >

        <article
          v-for="item in berita.slice(0, 6)"
          :key="item.id"
          class="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >

          <!-- ================================= -->
          <!-- GAMBAR -->
          <!-- ================================= -->

          <div
            class="relative h-52 overflow-hidden bg-slate-100"
          >

          <img
              v-if="item.image"
              :src="item.image"
              :alt="item.title"
              class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              loading="lazy"
              @error="gambarGagal"
            />

            <!-- FALLBACK -->
            <div
              v-else
              class="flex h-full w-full items-center justify-center bg-slate-100"
            >

              <div
                class="text-center text-slate-400"
              >

                <div class="text-4xl">
                  📰
                </div>

                <p class="mt-2 text-sm">
                  Gambar tidak tersedia
                </p>

              </div>

            </div>


            <!-- BADGE -->

            <span
              class="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-blue-600 shadow"
            >
              {{
                item.isVideo
                  ? 'Video'
                  : 'Berita Sekolah'
              }}
            </span>

          </div>


          <!-- ================================= -->
          <!-- CONTENT -->
          <!-- ================================= -->

          <div class="p-6">

            <!-- TANGGAL -->

            <p
              class="text-sm font-medium text-green-600"
            >
              📅 {{ item.date }}
            </p>


            <!-- JUDUL -->

            <h3
              class="mt-3 line-clamp-2 text-xl font-bold text-slate-800"
            >
              {{ item.title }}
            </h3>


            <!-- DESKRIPSI -->

            <p
              class="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-500"
            >
              {{ item.excerpt }}
            </p>


            <!-- FOOTER -->

            <div
              class="mt-5 flex items-center justify-between gap-3"
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


      <!-- ================================= -->
      <!-- MOBILE -->
      <!-- ================================= -->

      <div
        v-if="berita?.length"
        class="mt-8 text-center sm:hidden"
      >

        <NuxtLink
          to="/berita"
          class="inline-flex rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Lihat Semua Berita
        </NuxtLink>

      </div>

    </div>

  </section>
</template>