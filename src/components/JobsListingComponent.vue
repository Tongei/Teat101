<script setup>
    import JobsData from '@/jobs.json'
    import JobListing from './JobListing.vue';
    
    import { ref, defineProps } from 'vue';
    const respone = ref(JobsData);
    const jobs = respone.value.jobs;

    defineProps({
        limited : Number,
    })

</script>

<template>
     <div class="container mx-auto px-4 py-8" >
        <JobListing v-for="job in (jobs.slice(0, limited || jobs.length))" :key="job.id" :job="job"/>
    </div>
    <section class="m-auto max-w-lg my-10 px-6">
        <a 
            href="jobs.html" 
            class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
            View All Jobs
        </a>
    </section>

</template>