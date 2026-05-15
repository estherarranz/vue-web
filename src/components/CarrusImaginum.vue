<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

interface Props {
    photos: string[]
    basePath: string
    autoplayDelay?: number
    loop?: boolean
    dragFree?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    autoplayDelay: 1200, 
    loop: true,
    dragFree: true,
})


const plugin = Autoplay({
  delay: props.autoplayDelay,
  stopOnInteraction: false,
  playOnInit: false
})


const arrancarGaleria = () => {
  plugin.play()
}

const pararGaleria = () => {
  plugin.stop()
}
</script>

<template>
    
    <Carousel 
        class="w-full h-full bg-transparent border-none overflow-hidden rounded-2xl"
        :opts="{
            loop: props.loop,
            dragFree: props.dragFree
        }"
        :plugins="[plugin]"
        @mouseenter="arrancarGaleria"
        @mouseleave="pararGaleria"
    >
        <CarouselContent class="-ml-0 h-full w-full">
           
            <CarouselItem 
                v-for="(photo, index) in props.photos" 
                :key="index"
                class="pl-0 h-48 w-full shrink-0"
            >
                <Card class="bg-transparent border-none p-0 h-full w-full shadow-none rounded-none">
                    <CardContent class="p-0 h-full w-full flex items-center justify-center bg-transparent rounded-none">
                         
                        <img 
                            :src="`${props.basePath}/${photo}`" 
                            :alt="`Imagen ${photo}`"
                            class="w-full h-48 object-cover object-top group-hover:scale-105 transition-all duration-500"
                        />
                    </CardContent>
                </Card>
            </CarouselItem>
        </CarouselContent>
    </Carousel>
</template>
