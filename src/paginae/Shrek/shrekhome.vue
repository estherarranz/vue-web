<script lang="ts" setup>
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { useMouseMotio } from '@/composables/useMouseMotio'
 import { Menu, X } from 'lucide-vue-next'

const { mousePositione, cumMouseMove } = useMouseMotio()


const isOpen = ref(false)
</script>

<template>
  <div
    class="relative h-screen w-screen overflow-hidden"
    @mousemove="cumMouseMove"
    >
    
    <img
      class="absolute inset-0 w-full h-full object-cover"
      src="/imagines/shrek/shrekinicio.png"
    />
    
      <div
        class="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent transition-opacity duration-300"
        :class="{ 'from-black/80 bg-black/40 backdrop-blur-sm z-10': isOpen }"
        @click="isOpen = false"
  />

    <nav class="absolute top-0 left-0 w-full h-20 flex items-center justify-end px-8 z-50 bg-transparent">
      <button 
        @click="isOpen = !isOpen"
        class="text-[#9ed763] hover:text-[#78b13f] transition-colors focus:outline-none p-2 rounded-lg hover:bg-black/20"
        aria-label="Abrir menú"
      >
        <Menu v-if="!isOpen" class="w-8 h-8" />
        <X v-else class="w-8 h-8" />
      </button>
    </nav>

    <aside
      class="absolute right-0 top-0 h-full w-[220px] 
             flex flex-col justify-start gap-4
             pt-24 px-4 bg-black/40 border-l border-white/10
             transition-transform duration-300 ease-in-out"
      :class="isOpen ? 'translate-x-0 z-40' : 'translate-x-full z-20'"
    >
      <Button
        as-child
        class="bg-[#78b13f]/90 text-[#cd5c5c] hover:bg-[#cd5c5c] hover:text-[#78b13f]
                font-bold font-medieval py-4 text-base rounded-xl 
                border border-[#cd5c5c] transition-colors duration-200"
        @click="isOpen = false"
      >
        <RouterLink to="/shrek/peliculas">
          Películas
        </RouterLink>
      </Button>

      <Button
        as-child
       class="bg-[#78b13f]/90 text-[#cd5c5c] hover:bg-[#cd5c5c] hover:text-[#78b13f]
                font-bold font-medieval py-4 text-base rounded-xl 
                border border-[#cd5c5c] transition-colors duration-200"
        @click="isOpen = false"
      >
        <RouterLink to="/shrek/personajes">
          Personajes
        </RouterLink>
      </Button>

    </aside>

    <div
      class="absolute bottom-16 left-16 z-20 max-w-3xl pointer-events-none"
    >
      <img
        src="/imagines/shrek/Shrek-Wordmark-Logo-Vector.svg-.png"
        :style="{
          transform: `translate(${mousePositione.x / 15}px, ${mousePositione.y / 15}px)`
        }"
        class="w-[320px] md:w-[500px]
               drop-shadow-[0_0_25px_rgba(120,177,63,0.45)]"
      />

    </div>
  </div>
</template>
