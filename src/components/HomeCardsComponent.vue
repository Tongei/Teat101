
<script setup>
    import Card from './Card.vue';
</script>

<template>
    <div class="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card bg="bg-red-100">
            <img class="w-full h-[200px]" src="https://www.researchgate.net/publication/349963773/figure/fig1/AS:1000021801586688@1615435185528/300-pixel-input-image-and-corresponding-label-image-with-a-white-mask-on-the-potholes-and.jpg" alt="Card 1 Image">
            <div class="p-6">
            <h2 class="text-lg font-bold text-gray-800">Latest Tech Trends</h2>
            <p class="text-gray-600 mt-2">
                Stay ahead of the curve with insights into the latest advancements in technology and innovation.
            </p>
            <a href="#" class="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition">
                Read More
            </a>
            </div>
        </Card>
        <Card>
            <img class="w-full h-[200px]" src="https://www.researchgate.net/publication/349963773/figure/fig1/AS:1000021801586688@1615435185528/300-pixel-input-image-and-corresponding-label-image-with-a-white-mask-on-the-potholes-and.jpg" alt="Card 1 Image">
            <div class="p-6">
            <h2 class="text-lg font-bold text-gray-800">Latest Tech Trends</h2>
            <p class="text-gray-600 mt-2">
                Stay ahead of the curve with insights into the latest advancements in technology and innovation.
            </p>
            <a href="#" class="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition">
                Read More
            </a>
            </div>
        </Card>  
        <Card bg="bg-red-100">
            <img class="w-full h-[200px]" src="https://www.researchgate.net/publication/349963773/figure/fig1/AS:1000021801586688@1615435185528/300-pixel-input-image-and-corresponding-label-image-with-a-white-mask-on-the-potholes-and.jpg" alt="Card 1 Image">
            <div class="p-6">
            <h2 class="text-lg font-bold text-gray-800">Latest Tech Trends</h2>
            <p class="text-gray-600 mt-2">
                Stay ahead of the curve with insights into the latest advancements in technology and innovation.
            </p>
            <a href="#" class="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition">
                Read More
            </a>
            </div>
        </Card>  
    </div>
</template>