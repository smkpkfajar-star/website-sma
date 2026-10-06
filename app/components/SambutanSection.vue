<script setup>
// Mengambil data dari composable useSekolah
const sekolah = useSekolah()
</script>

<template>
  <section id="profil" class="bg-white py-20">
    <div class="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8">

      <!-- Foto Kepala Sekolah -->
      <div class="relative">
        <div class="absolute -left-4 -top-4 h-full w-full rounded-3xl bg-emerald-100"></div>

        <div class="relative overflow-hidden rounded-3xl bg-slate-100 shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
            alt="Kepala Sekolah"
            class="h-[420px] w-full object-cover"
          />
        </div>

        <div class="absolute -bottom-5 right-5 rounded-2xl bg-white px-5 py-4 shadow-lg border border-slate-100">
          <p class="text-sm text-slate-500">
            Kepala Sekolah
          </p>

          <p class="font-bold text-emerald-700">
            Sriyana, S.Pd.
          </p>
        </div>
      </div>

      <!-- Sambutan -->
      <div>
        <span class="font-semibold text-emerald-600">
          Sambutan Kepala Sekolah
        </span>

        <h2 class="mt-2 text-3xl font-bold text-slate-800 sm:text-4xl">
          Bersama Membangun Generasi Berwawasan Lingkungan
        </h2>

        <div class="mt-6 space-y-4 leading-relaxed text-slate-600">
          <p>
            Assalamu'alaikum warahmatullahi wabarakatuh.
          </p>

          <p>
            Selamat datang di website resmi <span class="font-semibold text-slate-700">{{ sekolah.nama }}</span>. 
            {{ sekolah.tagline }}. Kami berkomitmen menyelenggarakan pendidikan berkualitas dengan fokus pada pengembangan karakter dan kepedulian terhadap kelestarian alam.
          </p>

          <p>
            {{ sekolah.visi }} Melalui lingkungan belajar yang kondusif, kreatif, dan berbudaya Tamansiswa, 
            mari kita bersama-sama mengantar peserta didik menjadi generasi yang cerdas, terampil, dan berakhlak mulia.
          </p>

          <p>
            Wassalamu'alaikum warahmatullahi wabarakatuh.
          </p>
        </div>

        <div class="mt-7 flex gap-8">
          <div>
            <p class="text-3xl font-bold text-emerald-600">30+</p>
            <p class="text-sm text-slate-500">Tahun Berdiri</p>
          </div>

          <div>
            <p class="text-3xl font-bold text-teal-600">1000+</p>
            <p class="text-sm text-slate-500">Alumni</p>
          </div>

          <div>
            <p class="text-3xl font-bold text-amber-500">25+</p>
            <p class="text-sm text-slate-500">Guru & Staff</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>