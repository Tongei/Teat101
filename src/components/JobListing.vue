<script setup>
    import { defineProps } from 'vue';
    defineProps({
        job :  Object
    });
    console
</script>


<template>
    <div class="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center justify-between mt-2">
        <!-- Left Section -->
        <div>
        <h2 class="text-lg font-bold text-gray-800">{{ job.title }}</h2>
        <p class="text-gray-600 mt-1">{{ job.company }}</p>
        <div class="flex items-center text-gray-500 text-sm mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13 12m0 0l4.657-4.657M13 12H3m10 0c0 4.418 3.582 8 8 8m-8-8c0-4.418-3.582-8-8-8" />
            </svg>
            {{ job.location }}
        </div>
        <div class="text-sm text-gray-500 mt-2">
            💵 <span class="font-medium"> {{ job.salary }}</span>
        </div>
        </div>
        <!-- Right Section -->
        <div class="mt-4 md:mt-0">
        <a href="#apply" class="px-6 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-500 transition">
            Apply Now
        </a>
        </div>
    </div>
</template>