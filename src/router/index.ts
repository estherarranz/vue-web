import { createRouter, createWebHashHistory } from "vue-router";

import Shrekhome from "@/paginae/Shrek/shrekhome.vue";



export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Shrekhome
    },
   
  ]
})