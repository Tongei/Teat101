
<script setup>

    import { defineProps } from 'vue';

    defineProps ({
        bg : {
            type : String,
            default : "bg-white"
        }
    });
</script>

<template>
     <div :class="`${bg} shadow-md rounded-lg overflow-hidden`">
        <slot></slot>
     </div>
</template>