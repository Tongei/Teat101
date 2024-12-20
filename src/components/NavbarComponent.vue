<script setup>
import { RouterLink, useRoute } from "vue-router";
function isActiveLink(routePath) {
  const route = useRoute();
  return route.path === routePath;
}
</script>


<template>
  <div class="bg-blue-600">
    <nav class="container mx-auto px-4 py-4 flex items-center justify-between">
      <!-- Logo -->
      <div class="text-white text-2xl font-bold">
        <a href="#">YTN News</a>
      </div>

      <!-- Navigation Links -->
      <div class="hidden md:flex space-x-6">
        <RouterLink
          to="/"
          :class="[
            isActiveLink('/') ? 'bg-gray-700' : 'hover:bg-blue-500',
            'text-white',
            'rounded-lg',
            'p-2',
          ]"
          >Home</RouterLink
        >
        <RouterLink
          to="/about"
          :class="[
            isActiveLink('/about') ? 'bg-gray-700' : 'hover:bg-blue-500',
            'text-white',
            'rounded-lg',
            'p-2',
          ]"
          >About</RouterLink
        >
        <RouterLink
          to="/jobs"
          :class="[
            isActiveLink('/jobs') ? 'bg-gray-700' : 'hover:bg-blue-500',
            'text-white',
            'rounded-lg',
            'p-2',
          ]"
          >Jobs</RouterLink
        >
        <RouterLink
          to="/users"
          :class="[
            isActiveLink('/users') ? 'bg-gray-700' : 'hover:bg-blue-500',
            'text-white',
            'rounded-lg',
            'p-2',
          ]"
          >Users</RouterLink
        >
      </div>
    </nav>
  </div>
</template>