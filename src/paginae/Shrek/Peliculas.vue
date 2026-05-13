<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import { movies } from './DataPeliculas';
</script>

<template>
    <div class="min-h-screen bg-stone-950 text-white p-8 flex flex-col items-center">
        
        <h1 class="font-bold text-3xl lg:text-5xl my-8 text-[#78b13f] font-medieval text-center">
            La Saga de Shrek
        </h1>
        
        <p class="mb-12 text-gray-400 text-center max-w-xl">
            Descubre los detalles, sinopsis y directores de todas las entregas cinematográficas del ogro más famoso del cine.
        </p>

        <div class="flex flex-col gap-8 w-full max-w-[1000px]">
            <Card 
                v-for="movie in movies" 
                :key="movie.id"
                class="bg-stone-900 border border-stone-800 overflow-hidden hover:border-[#78b13f] transition-all duration-300"
            >
                <CardContent class="p-0 flex flex-col md:flex-row items-center gap-6">
                    
                    <img 
                        :src="`/imagines/shrek/${movie.imago}`" 
                        :alt="movie.titulum"
                        class="w-full md:w-48 h-72 object-cover"
                    >

                    <div class="p-6 flex flex-col justify-between h-full w-full">
                        <div>
                            <div class="flex justify-between items-baseline mb-2">
                                <h2 class="text-2xl font-bold text-white">{{ movie.titulum }}</h2>
                                <span class="px-3 py-1 bg-[#78b13f] text-black font-bold text-sm rounded-full">
                                    {{ movie.annus }}
                                </span>
                            </div>
                            
                            <p class="text-sm text-gray-400 mb-1">
                                <span class="font-semibold text-gray-300">Dirección:</span> {{ movie.director }}
                            </p>
                            
                            <p class="text-gray-300 mt-4 leading-relaxed">
                                {{ movie.sinopsis }}
                            </p>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    </div>
</template>
