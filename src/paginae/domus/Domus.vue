<script lang="ts" setup>
import Button from '@/components/ui/button/Button.vue';


</script>

<template>

<div class="cappa">
  <h1>Home page</h1>
  <Button variant="destructive">Cick me</Button>
  <Button class="viridis" size="lg" variant="tertiarius">Cick me</Button>
</div>

</template>

<style scoped>
.cappa {
  margin: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 12px;
}

Button {
  margin-right: 12px;
}

.viridis {
  padding: 0 100px;
}
</style>