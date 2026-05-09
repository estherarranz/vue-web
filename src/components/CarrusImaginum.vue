<script setup lang="ts">

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import Autoplay from 'embla-carousel-autoplay'

interface Props {
    photos: string[]
    basePath: string
    autoplayDelay?:number
    loop?:boolean
    dragFree?:boolean
}

const props = withDefaults(defineProps<Props>(), {
    autoplayDelay:2000,
    loop:true,
    dragFree:true,
})

const plugin = Autoplay({
  delay: props.autoplayDelay,
})

</script>



<template>
    <Carousel class=" bg-gray-700 w-full max-w-md md:max-w-2xl lg:max-w-4xl"
        :opts="{
        loop:props.loop,
        dragFree:props.dragFree
        }"

        :plugins="[plugin]"
        >
                    <CarouselContent>
                        <CarouselItem v-for="(photo, index) in props.photos" :key="index">
                            <div class="p-1">
                            <Card class="bg-gray-700 border-none">
                                <CardContent class="flex aspect-6/4 items-center justify-center p-6 bg-gray-700">
                                  <img 
                                    :src="`${props.basePath}/${photo}.jpg`" 
                                    :alt="`Image ${photo} de Batman`"
                                    class="w-full h-full object-cover"
                                    >


                                </CardContent>
                            </Card>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious class="hidden md:flex justify-center items-center bg-gray-700 text-white"/>

                    <CarouselNext class="hidden md:flex justify-center items-center  bg-gray-700 text-white" />
    </Carousel>
</template>



<style scoped>

</style>