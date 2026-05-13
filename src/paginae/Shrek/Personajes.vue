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
    <div class="flex flex-col items-center justify-center gap-8 w-full max-w-[1400px] my-8 mx-auto">

        <div>
            <h1 class="font-bold text-xl lg:text-5xl mb-5 text-[#78b13f] font-medieval">
                Descubre los personajes de la saga de Shrek
            </h1>

            <p class="mb-4 text-gray-300">Clica para conocer las capas</p>

            <div class="grid grid-cols-2 md:grid-cols-3 gap-8 mx-auto">
                <!-- CORRECCIÓN: Añadido :key obligatorio y actualizado el bucle a listaShrek -->
                <Card 
                    v-for="character in listaShrek" 
                    :key="character.id"
                    class="cursor-pointer w-[220px] h-[248px] border-stone-800 bg-stone-900 text-white hover:bg-[#78b13f] hover:text-black transition-all"
                >
                    <!-- RUTA: Modificada la redirección para apuntar a la galería de Shrek -->
                    <CardContent 
                        class="flex flex-col items-center gap-1 w-full px-0"
                        @click="router.push(`/shrek/gallery/${character.id}`)"
                    >
                        <!-- RUTA: Apunta ahora a la carpeta correcta de imágenes de Shrek -->
                        <img 
                            :src="`/imagines/shrek/${character.imago}`" 
                            :alt="character.nomen"
                            class="w-48 h-42 object-cover object-top mt-2 bg-stone-800 rounded-t-md border border-black"
                        >

                        <h2 class="font-medium text-lg mt-1">{{ character.nomen }}</h2>
                    </CardContent>
                </Card>
            </div>
        </div>

       
        <div class="flex items-center justify-center gap-2 mt-4">
            <button
                @click="ireAdPaginam(nuncPagina - 1)"
                :disabled="nuncPagina === 1"
                :class="['px-4 py-2 rounded-md font-medium transition-colors',
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
                :class="['w-10 h-10 rounded-md font-medium transition-colors',
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
                 :class="['px-4 py-2 rounded-md font-medium transition-colors',
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
