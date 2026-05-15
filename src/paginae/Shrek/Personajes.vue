<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import { computed, ref } from 'vue';
import { characters } from './Data';
import { useRouter } from 'vue-router';

const router = useRouter()

const inPagina = 5
const nuncPagina = ref(1)
const totalPaginae = computed(() => Math.ceil(characters.length / inPagina))


const listaShrek = computed(()  => {
    const inicio = (nuncPagina.value - 1) * inPagina
    const fin = inicio + inPagina
    return characters.slice(inicio, fin)
}) 

const ireAdPaginam = (pagina: number) => {
    if(pagina >= 1 && pagina <= totalPaginae.value) {
        nuncPagina.value = pagina
    }
}


const paginaNumeri = computed(() => {
    return [...Array(totalPaginae.value)].map((_, i) => i + 1)
})
</script>

<template>
    
    <div class="flex flex-col items-center justify-center gap-8 w-full min-h-screen bg-gradient-to-b from-neutral-950 via-slate-950 to-stone-900 mx-auto py-12 px-4">

    
        <div class="w-full max-w-[1400px] flex flex-col items-center text-center">
            
            <h1 class="font-bold text-3xl lg:text-5xl mb-3 text-[#78b13f] font-medieval tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Descubre los personajes de la saga de Shrek
            </h1>

          
<p class="mb-8 text-white font-medium tracking-wide text-sm lg:text-base drop-shadow-md">
    Clica para conocer las capas
</p>

<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 justify-center mx-auto">
   
    
    <Card 
        v-for="character in listaShrek" 
        :key="character.id"
        class="group cursor-pointer w-[200px] h-[300px] border-stone-800 bg-stone-900/90 text-white hover:bg-[#78b13f] transition-all duration-300 hover:-translate-y-1 shadow-xl"
    >
        <CardContent 
            class="flex flex-col items-center gap-1 w-full px-0 h-full justify-between pb-3"
            @click="router.push(`/shrek/gallery/${character.id}`)"
        >
            <img 
                :src="`/imagines/shrek/${character.imago}`" 
                :alt="character.nomen"
                class="w-44 h-40 object-cover object-top mt-2 bg-stone-800 rounded-t-md border border-black"
            >
            
           
            <h2 class="font-bold text-base px-2 line-clamp-1 text-white group-hover:text-stone-950 transition-colors duration-200">
                {{ character.nomen }}
            </h2>
        </CardContent>
    </Card>
</div>

        </div>

        <!-- Paginación centradita al fondo -->
        <div class="flex items-center justify-center gap-2 mt-4 backdrop-blur-sm bg-black/20 p-2 rounded-lg">
            <button
                @click="ireAdPaginam(nuncPagina - 1)"
                :disabled="nuncPagina === 1"
                :class="['px-4 py-2 rounded-md font-medium transition-colors text-sm',
                    nuncPagina === 1
                    ? 'bg-stone-800 text-gray-500 cursor-not-allowed border border-stone-700'
                    : 'bg-[#78b13f] text-black hover:bg-[#5a862f] hover:text-white'
                ]"
            >
                Anterior
            </button>

            <button
                v-for="pagina in paginaNumeri"
                :key="pagina"
                @click="ireAdPaginam(pagina)"
                :class="['w-9 h-9 rounded-md font-medium transition-colors text-sm',
                    nuncPagina === pagina 
                    ? 'bg-stone-700 text-[#78b13f] border border-[#78b13f]'
                    : 'bg-[#78b13f] text-black hover:bg-[#5a862f] hover:text-white'
                ]"
            >
                {{ pagina }}
            </button>

            <button
                 @click="ireAdPaginam(nuncPagina + 1)"
                 :disabled="nuncPagina === totalPaginae"
                 :class="['px-4 py-2 rounded-md font-medium transition-colors text-sm',
                    nuncPagina === totalPaginae
                    ? 'bg-stone-800 text-gray-500 cursor-not-allowed border border-stone-700'
                    : 'bg-[#78b13f] text-black hover:bg-[#5a862f] hover:text-white'
                ]"
            >
                Siguiente
            </button>
        </div>

    </div>
</template>

