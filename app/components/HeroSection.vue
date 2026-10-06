<script setup>
// Mengambil data dari composable useSekolah
const sekolah = useSekolah()
</script>

<template>
  <section
    class="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-teal-600 to-green-500"
  >
    <!-- Decorative circles -->
    <div class="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10"></div>
    <div class="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-emerald-300/20"></div>

    <div class="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 lg:px-8 lg:py-28">

      <!-- Text -->
      <div class="text-center md:text-left">
        <span
          class="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur"
        >
          🌿 {{ sekolah.tagline }}
        </span>

        <h2
          class="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          Selamat Datang di
          <span class="text-emerald-200 block mt-1">
            {{ sekolah.nama }}
          </span>
        </h2>

        <p class="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-emerald-50 md:mx-0">
          {{ sekolah.visi }}
        </p>

        <div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
          <NuxtLink
            to="#daftar"
            class="rounded-full bg-amber-400 px-7 py-3.5 font-bold text-slate-900 shadow-lg transition hover:-translate-y-1 hover:bg-amber-300 text-center"
          >
            PPDB Online →
          </NuxtLink>

          <NuxtLink
            to="#profil"
            class="rounded-full border-2 border-white px-7 py-3.5 font-bold text-white transition hover:bg-white hover:text-emerald-800 text-center"
          >
            Tentang Sekolah
          </NuxtLink>
        </div>
      </div>

      <!-- Illustration -->
      <div class="flex justify-center">
        <div class="relative">
          <div
            class="flex h-72 w-72 items-center justify-center rounded-[3rem] bg-white/20 text-9xl shadow-2xl backdrop-blur sm:h-80 sm:w-80"
          >
            🏫
          </div>

          <div
            class="absolute -right-4 -top-4 rounded-2xl bg-amber-400 px-4 py-3 font-bold text-slate-900 shadow-lg text-sm"
          >
            ⭐ Sekolah Berkarakter
          </div>

          <div
            class="absolute -bottom-4 -left-5 rounded-2xl bg-white px-4 py-3 font-bold text-emerald-700 shadow-lg text-sm"
          >
            🌱 Peduli Lingkungan
          </div>
        </div>
      </div>

    </div>
  </section>
</template>