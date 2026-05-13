<script setup lang="ts">
import { RouterView, RouterLink, useRoute } from 'vue-router';
import { Toaster as SonnerToaster } from '@/components/ui/sonner'
import 'vue-sonner/style.css'


const route = useRoute();
</script>

<template>
  <main>
    
    
    <nav 
      v-if="route.path !== '/'" 
      class="flex justify-center gap-8 p-4 bg-[#1f2937] text-white font-semibold border-b-2 border-[#7aa93c]"
    >
      <RouterLink to="/" class="hover:text-[#7aa93c] transition-colors">
        Inicio
      </RouterLink>
      
      <RouterLink to="/shrek/peliculas" class="hover:text-[#7aa93c] transition-colors">
        Películas
      </RouterLink>
      
      <RouterLink to="/shrek/personajes" class="hover:text-[#7aa93c] transition-colors">
        Personajes
      </RouterLink>
    </nav>

   
    <RouterView />
    <SonnerToaster />

  </main>
</template>

<style scoped>

.router-link-active {
  color: #7aa93c;
  text-decoration: underline;
}
</style>
