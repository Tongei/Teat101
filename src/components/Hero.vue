<script setup>
    import { defineProps } from 'vue';
    defineProps ({
        title : {
            type : String,
            default : "Stay Updated with"
        },
        subTitle : {
            type : String,
            default : "Your daily source for the latest in technology, trends, and innovation."
        }
    });
</script>

<template>
    <div class="bg-blue-600 relative">
        <!-- Background Image (optional) -->
        <div class="absolute inset-0 bg-cover bg-center opacity-30" style="background-image: url('https://source.unsplash.com/1600x900/?technology');"></div>

        <!-- Hero Content -->
        <div class="relative container mx-auto px-4 py-20 text-center">
            <h1 class="text-white text-4xl md:text-6xl font-bold leading-tight"> {{ title }}
             <span class="text-yellow-400">YTN News</span>
            </h1>
            <p class="text-white text-lg md:text-xl mt-4">
            {{ subTitle }}
            </p>
            <div class="mt-8 space-x-4">
            <a href="#articles" class="px-6 py-3 bg-yellow-400 text-blue-600 font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition">
                Explore Articles
            </a>
            <a href="#subscribe" class="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
                Subscribe Now
            </a>
            </div>
        </div>
    </div>
</template>