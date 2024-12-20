<script setup>

import { RouterLink } from 'vue-router';

</script>

<template>
    
    <section>
        <div class="container m-auto h-screen flex items-center">
            <div class="w-full">
                <h1 class="text-6xl font-bold text-center">
                    <span class="text-yellow-500">404 Not Found</span>  in MY WEBSITE
                </h1>
                <p class="text-4xl font-bold text-center">Can you move back to homepage?</p>
                <div class="flex content-center mt-5">
                    <RouterLink to="/" class="bg-blue-500 text-white px-3 py-2 text-xl m-auto"> Back </RouterLink>
                </div>
            </div>
        </div>
    </section>

</template>






