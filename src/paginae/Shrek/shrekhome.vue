<script lang="ts" setup>

import { Button } from '@/components/ui/button'
import { useMouseMotio } from '@/composables/useMouseMotio';


const { mousePositione, cumMouseMove, } = useMouseMotio();

</script>

<template>
 
  <div class="h-screen w-screen bg-black flex flex-col items-center justify-between py-12 fixed overflow-hidden" @mousemove="cumMouseMove">
    
    <img class="absolute inset-0 w-full h-full object-cover opacity-60" src="/imagines/shrek/asno_shrekestrellas.jpg">

    
    <div class="z-10 flex flex-col items-center"> 
      <img 
        src="/imagines/shrek/Shrek-Wordmark-Logo-Vector.svg-.png" 
        :style="{ transform: `translate(${mousePositione.x / 15}px, ${mousePositione.y / 15}px)` }"
        class="w-[280px] md:w-[450px] lg:w-[550px] drop-shadow-[0_0_15px_rgba(120,177,63,0.4)]"
      />
      <h2 class="text-3xl md:text-5xl font-bold text-[#78b13f] mt-4 font-medieval text-center">
        Mejor fuera que dentro, siempre lo he dicho
      </h2>
    </div>

    
    <div class="z-10 flex flex-col items-center gap-4 mb-10"> 
      
      <Button as-child class="bg-[#78b13f] hover:bg-[#5a862f] text-white font-bold font-medieval py-6 w-56 text-lg">
        <RouterLink to="/shrek/peliculas">Películas</RouterLink>
      </Button>

      <Button as-child class="bg-[#78b13f] hover:bg-[#5a862f] text-white font-bold font-medieval py-6 w-56 text-lg">
        <RouterLink to="/shrek/personajes">Personajes</RouterLink>
      </Button>

      <Button as-child class="bg-[#78b13f] hover:bg-[#5a862f] text-white font-bold font-medieval py-6 w-56 text-lg">
        <RouterLink to="/">Menú</RouterLink>
      </Button>


    </div>

  </div>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=MedievalSharp&display=swap');

h2 {
  
  font-family: 'MedievalSharp', serif;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.8);
  
  line-height: 1.1;
}
button {
  font-family: 'MedievalSharp', serif !important;

}


</style>
