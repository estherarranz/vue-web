<script setup lang="ts">

</script>




<template>
    <div class="grid grid-rows[auto_1fr_auto] min-h-screen">

        <header class="bg-[#ffde00] w-full border-black">

       <RouterLink to="/simpsons/gallery">
        Characters
       </RouterLink>

       <RouterLink to="/simpsons/about">
        about
       </RouterLink>



        </header>
       

        <main>
            <RouterView />
        </main>

        <footer>

            <h1>Footer</h1>

        </footer>

    </div>
</template>


<style scoped>

</style>