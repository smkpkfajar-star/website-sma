<template>
  <footer id="kontak" class="bg-slate-900 text-white">
    <div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

      <div class="grid gap-10 md:grid-cols-3">

        <!-- Sekolah -->
        <div>
          <div class="flex items-center gap-3">
            <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl">
              🎓
            </div>

            <div>
              <h3 class="font-bold text-lg">
                {{ sekolah.nama }}
              </h3>

              <p class="text-xs text-slate-400">
                {{ sekolah.tagline }}
              </p>
            </div>
          </div>

          <p class="mt-5 leading-relaxed text-slate-400 text-sm">
            {{ sekolah.visi }}
          </p>

          <p class="mt-3 text-xs text-slate-500">
            NPSN: {{ sekolah.npsn }} | NSS: {{ sekolah.nss }}
          </p>
        </div>

        <!-- Kontak -->
        <div>
          <h3 class="text-lg font-bold">
            Kontak Kami
          </h3>

          <div class="mt-5 space-y-4 text-slate-400">
            <div>
              <p class="text-xs text-slate-500 mb-1">Alamat</p>
              <p class="text-sm">
                📍 {{ sekolah.alamat }}
              </p>
            </div>

            <div>
              <p class="text-xs text-slate-500 mb-1">Telepon</p>
              <a 
                :href="`tel:${sekolah.telepon.replace(/\s/g, '')}`"
                class="text-sm hover:text-white transition"
              >
                ☎️ {{ sekolah.telepon }}
              </a>
            </div>

            <div>
              <p class="text-xs text-slate-500 mb-1">Email</p>
              <a 
                :href="`mailto:${sekolah.email}`"
                class="text-sm hover:text-white transition break-all"
              >
                ✉️ {{ sekolah.email }}
              </a>
            </div>
          </div>
        </div>

        <!-- Sosial Media -->
        <div>
          <h3 class="text-lg font-bold">
            Ikuti Kami
          </h3>

          <div class="mt-5 flex gap-3 flex-wrap">
            <a
              v-for="media in sekolah.sosialMedia"
              :key="media.nama"
              :href="media.url"
              :aria-label="media.nama"
              :title="media.nama"
              :class="`flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:${media.color} font-bold`"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ media.icon }}
            </a>
          </div>

          <p class="mt-4 text-xs text-slate-500">
            Hubungi kami untuk informasi lebih lanjut
          </p>
        </div>

      </div>

      <!-- Copyright -->
      <div
        class="mt-12 border-t border-white/10 pt-6 text-center text-sm text-slate-500"
      >
        © {{ new Date().getFullYear() }} {{ sekolah.nama }}.
        Semua hak dilindungi.
      </div>

    </div>
  </footer>
</template>

<script setup>
import { useSekolah } from '~/composables/useSekolah'

const sekolah = useSekolah()
</script>