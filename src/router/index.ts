

import { createRouter, createWebHashHistory } from "vue-router";
import Shrekhome from "@/paginae/Shrek/shrekhome.vue";
import Personajes from "@/paginae/Shrek/Personajes.vue";
import Peliculas from "@/paginae/Shrek/Peliculas.vue";


export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Shrekhome
    },

    {
      path: '/shrek/personajes',
      name: 'personajes',
      component: Personajes
    },

    {
      path: '/shrek/peliculas',
      name: 'películas',
      component: Peliculas
    }
   
  ]
  
})