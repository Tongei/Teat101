
<script setup>

  import Hero from '@/components/Hero.vue';

</script>


<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Hero title="Welcome to" subTitle="Hello everyone!" />
  </div>
</template>

<style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      align-items: center;
    }
  }
</style>