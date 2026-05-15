<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import { computed, ref } from 'vue'
import { characters } from './Data'
import { useRouter } from 'vue-router'
import CharacterCarousel from '@/components/CarrusImaginum.vue';


const router = useRouter()
const inPagina = 6
const nuncPagina = ref(1)
const totalPaginae = computed(() => Math.ceil(characters.length / inPagina))

const listaShrek = computed(() => {
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
   
    <div class="flex flex-col items-center justify-center gap-8 w-full min-h-screen mx-auto pt-4 pb-12 px-4">

        <div class="w-full max-w-[1400px] flex flex-col items-center text-center">
            
            <h1 class="font-bold text-4xl lg:text-6xl mt-2 mb-4 bg-gradient-to-r from-[#9ed763] to-[#78b13f] bg-clip-text text-transparent font-medieval tracking-wide drop-shadow-[0_4px_12px_rgba(120,177,63,0.3)]">
                Descubre los personajes de la saga de Shrek
            </h1>

            <p class="mb-10 text-[#d4ccb6] font-medium tracking-wide text-base lg:text-lg opacity-95">
                Clica para conocer las capas
            </p>

          
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-center mx-auto max-w-[1000px]">
               
                <Card 
                    v-for="(character, index) in listaShrek" 
                    :key="character.id"
                    class="group cursor-pointer w-[240px] h-[330px] bg-transparent border border-transparent shadow-none overflow-hidden transition-all duration-500 rounded-3xl"
                    :class="[
                      index % 3 === 0 ? 'hover:bg-black/40 hover:backdrop-blur-md hover:border-[#9ed763]/60 hover:ring-2 hover:ring-[#78b13f]/30 hover:shadow-[0_0_35px_rgba(120,177,63,0.45)]' : '',
                      index % 3 === 1 ? 'hover:bg-black/40 hover:backdrop-blur-md hover:border-[#7eb5d6]/60 hover:ring-2 hover:ring-[#7eb5d6]/30 hover:shadow-[0_0_35px_rgba(126,181,214,0.45)]' : '',
                      index % 3 === 2 ? 'hover:bg-black/40 hover:backdrop-blur-md hover:border-[#e5b842]/60 hover:ring-2 hover:ring-[#e5b842]/30 hover:shadow-[0_0_35px_rgba(229,184,66,0.45)]' : ''
                    ]"
                >
                    <CardContent 
                        class="flex flex-col items-center gap-2 w-full px-4 h-full justify-between pt-4 pb-4"
                        @click="router.push(`/shrek/gallery/${character.id}`)"
                    >
                        
                        <div class="w-full h-48 overflow-hidden rounded-2xl border border-white/5 bg-black/10 shadow-md shrink-0">
                           
                            <CharacterCarousel 
                                :photos="character.galeria" 
                                basePath="/imagines/shrek" 
                            />
                        </div>
                        
                      
                        <h2 class="font-bold text-lg md:text-xl px-2 line-clamp-1 text-white font-medieval transition-colors duration-300"
                            :class="[
                              index % 3 === 0 ? 'group-hover:text-[#9ed763]' : '',
                              index % 3 === 1 ? 'group-hover:text-[#7eb5d6]' : '',
                              index % 3 === 2 ? 'group-hover:text-[#e5b842]' : ''
                            ]"
                        >
                            {{ character.nomen }}
                        </h2>
                    </CardContent>
                </Card>
            </div>
        </div>

        
        <div class="flex items-center justify-center gap-2 mt-8 backdrop-blur-md bg-black/40 p-3 rounded-2xl border border-white/5 shadow-xl">
            <button
                @click="ireAdPaginam(nuncPagina - 1)"
                :disabled="nuncPagina === 1"
                :class="['px-4 py-2 rounded-xl font-bold font-medieval transition-all duration-300 text-sm border',
                    nuncPagina === 1
                    ? 'bg-stone-900/40 text-stone-600 border-stone-800/50 cursor-not-allowed'
                    : 'bg-[#78b13f]/90 text-white border-[#9ed763]/30 hover:bg-[#5a862f] shadow-[0_0_10px_rgba(120,177,63,0.15)]'
                ]"
            >
                Anterior
            </button>

            <button
                v-for="pagina in paginaNumeri"
                :key="pagina"
                @click="ireAdPaginam(pagina)"
                :class="['w-9 h-9 rounded-xl font-bold font-medieval transition-all duration-300 text-sm border',
                    nuncPagina === pagina 
                    ? 'bg-amber-500/10 text-amber-400 border-amber-500/40 shadow-[0_0_10px_rgba(245,158,11,0.2)]'
                    : 'bg-stone-800/60 text-stone-300 border-white/5 hover:bg-[#78b13f] hover:text-white hover:border-[#9ed763]'
                ]"
            >
                {{ pagina }}
            </button>

            <button
                 @click="ireAdPaginam(nuncPagina + 1)"
                 :disabled="nuncPagina === totalPaginae"
                 :class="['px-4 py-2 rounded-xl font-bold font-medieval transition-all duration-300 text-sm border',
                    nuncPagina === totalPaginae
                    ? 'bg-stone-900/40 text-stone-600 border-stone-800/50 cursor-not-allowed'
                    : 'bg-[#78b13f]/90 text-white border-[#9ed763]/30 hover:bg-[#5a862f] shadow-[0_0_10px_rgba(120,177,63,0.15)]'
                ]"
            >
                Siguiente
            </button>
        </div>
    </div>
</template>
