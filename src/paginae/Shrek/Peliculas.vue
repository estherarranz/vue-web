<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import { movies } from './DataPeliculas';
</script>

<template>
   
    <div 
        class="w-full flex flex-col items-center pt-6 px-8 pb-8"
    >

        <h1 class="font-bold text-4xl lg:text-6xl mt-2 mb-4 bg-gradient-to-r from-[#9ed763] to-[#78b13f] bg-clip-text text-transparent font-medieval text-center drop-shadow-[0_4px_12px_rgba(120,177,63,0.3)]">
            Mejor fuera que dentro, siempre lo he dicho
        </h1>
        
        <p class="mb-12  text-amber-400 text-center max-w-xl text-base md:text-lg opacity-90">
            Descubre los detalles, sinopsis y directores de todas las entregas cinematográficas del ogro más famoso del cine.
        </p>

        <div class="flex flex-col gap-8 w-full max-w-[1000px]">
            <Card 
                v-for="movie in movies" 
                :key="movie.id"
                class="bg-transparent border border-transparent shadow-none overflow-hidden transition-all duration-500 rounded-3xl group hover:bg-black/40 hover:backdrop-blur-md hover:border-[#9ed763]/60 hover:ring-2 hover:ring-[#78b13f]/40 hover:shadow-[0_0_40px_rgba(120,177,63,0.4)]"
            >
            
                <CardContent class="p-4 flex flex-col md:flex-row items-center gap-">
                    
                    <div class="w-full md:w-48 h-72 overflow-hidden shrink-0 rounded-xl shadow-lg border border-white/5">
                        <img 
                            :src="`/imagines/shrek/${movie.imago}`" 
                            :alt="movie.titulum"
                            class="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-500"
                        >
                    </div>

                    <div class="p-2 flex flex-col justify-between h-full w-full">
                        <div>
                            <div class="flex justify-between items-baseline mb-3">
                            
                                <h2 class="text-2xl md:text-3xl font-bold text-[#9ed763] font-medieval group-hover:text-[#9ed763] transition-colors duration-300">
                                    {{ movie.titulum }}
                                </h2>
                            
                                <span class="px-4 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-sm rounded-full shadow-[0_0_10px_rgba(245,158,11,0.1)]">
                                    {{ movie.annus }}
                                </span>
                            </div>
                            
                            <p class="text-sm text-amber-100/70 mb-4">
                                <span class="font-semibold text-amber-400">Dirección:</span> {{ movie.director }}
                            </p>
                            
                            <p class="text-[#e4dfd3]/90 leading-relaxed text-sm md:text-base">
                                {{ movie.sinopsis }}
                            </p>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    </div>

</template>

