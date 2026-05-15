<script setup lang="ts">
import { RouterView, RouterLink, useRoute } from 'vue-router';
import { Toaster as SonnerToaster } from '@/components/ui/sonner'
import 'vue-sonner/style.css'

const route = useRoute();
</script>
<template>
  <!-- Ponemos el fondo de Muy Muy Lejano aquí para que cubra el menú y las páginas por igual -->
  <main 
    class="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed text-white flex flex-col"
    style="background-image: linear-gradient(to bottom, rgba(12, 10, 9, 0.75), rgba(5, 5, 5, 0.9)), url('/imagines/shrek/muy_muy_lejano.png') !important;"
  >
    
    <!-- El menú ahora es 100% transparente y se sienta directamente sobre la imagen -->
    <nav 
      v-if="route.path !== '/'" 
      class="w-full h-20 bg-transparent border-none flex items-center justify-between px-12 text-white font-semibold relative z-50 font-medieval"
    >
      <RouterLink to="/" class="flex items-center hover:scale-105 transition-transform duration-300">
        <img 
          src="/imagines/shrek/Shrek-Wordmark-Logo-Vector.svg-.png" 
          alt="Shrek Logo" 
          class="h-10 w-auto object-contain drop-shadow-[0_0_15px_rgba(120,177,63,0.5)]"
        />
      </RouterLink>

      <div class="flex items-center gap-10 text-base md:text-lg">
        <RouterLink 
          to="/shrek/peliculas" 
          class="transition-colors duration-300"
          :class="route.path === '/shrek/peliculas' ? 'text-[#9ed763] drop-shadow-[0_0_8px_rgba(158,215,99,0.4)]' : 'text-white hover:text-[#9ed763]'"
        >
          Películas
        </RouterLink>
        
        <RouterLink 
          to="/shrek/personajes" 
          class="transition-colors duration-300"
          :class="route.path === '/shrek/personajes' ? 'text-[#9ed763] drop-shadow-[0_0_8px_rgba(158,215,99,0.4)]' : 'text-white hover:text-[#9ed763]'"
        >
          Personajes
        </RouterLink>
      </div>
    </nav>

    <!-- Las vistas interiores se renderizan aquí abajo compartiendo el mismo fondo -->
    <RouterView />
    <SonnerToaster />

  </main>
</template>

<style scoped>
/* Estilo limpio para la pestaña activa del universo Shrek */
.router-link-active {
  color: #9ed763;
  text-shadow: 0 0 8px rgba(158, 215, 99, 0.4);
}
</style>
