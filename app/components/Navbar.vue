<script setup>
const isOpen = ref(false)
const sekolah = useSekolah() // Auto-imported oleh Nuxt!

const menuItems = [
  { name: 'Beranda', href: '/' },
  { name: 'Profil', href: '#profil' },
  { name: 'Berita', href: '#berita' },
  { name: 'Galeri', href: '#galeri' },
  { name: 'Kontak', href: '#kontak' }
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

      <!-- Logo & Identitas Sekolah -->
      <NuxtLink to="/" class="flex items-center gap-3">
        <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-xl text-white shadow-md">
          🌿
        </div>

        <div>
          <h1 class="font-bold text-slate-800 leading-tight">
            {{ sekolah.nama }}
          </h1>
          <p class="text-xs text-slate-500">
            {{ sekolah.tagline }}
          </p>
        </div>
      </NuxtLink>

      <!-- Desktop Menu -->
      <div class="hidden items-center gap-8 md:flex">
        <a
          v-for="item in menuItems"
          :key="item.name"
          :href="item.href"
          class="font-medium text-slate-600 transition hover:text-emerald-600"
        >
          {{ item.name }}
        </a>

        <NuxtLink
          to="#daftar"
          class="rounded-full bg-emerald-600 px-5 py-2.5 font-semibold text-white transition hover:bg-emerald-700 shadow-sm"
        >
          PPDB Online
        </NuxtLink>
      </div>

      <!-- Mobile Button -->
      <button
        class="rounded-lg p-2 text-2xl md:hidden text-slate-700 focus:outline-none"
        @click="isOpen = !isOpen"
        aria-label="Toggle menu"
      >
        ☰
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div
      v-if="isOpen"
      class="border-t border-slate-100 bg-white px-4 pb-5 md:hidden shadow-lg"
    >
      <div class="flex flex-col gap-1 pt-3">
        <a
          v-for="item in menuItems"
          :key="item.name"
          :href="item.href"
          class="rounded-lg px-4 py-3 font-medium text-slate-600 hover:bg-emerald-50 hover:text-emerald-600"
          @click="isOpen = false"
        >
          {{ item.name }}
        </a>

        <NuxtLink
          to="#daftar"
          class="mt-2 rounded-lg bg-emerald-600 px-4 py-3 text-center font-semibold text-white shadow-sm hover:bg-emerald-700"
          @click="isOpen = false"
        >
          PPDB Online
        </NuxtLink>
      </div>
    </div>
  </header>
</template>