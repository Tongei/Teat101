<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();
const jobId = route.params.id; // Get route parameter
const isLoading = ref(false);
const error = ref(null);
const item = ref({}); // Initialize as an object for user data

async function fetchData() {
  try {
    isLoading.value = true;
    const response = await axios.get(`https://dummyjson.com/users/${jobId}`);
    item.value = response.data; // Assign the fetched user data
  } catch (err) {
    error.value = "Failed to fetch data. Please try again later.";
    console.error("Error fetching data:", err);
  } finally {
    isLoading.value = false;
  }
}

onMounted(fetchData);
</script>

<template>
  <div class="container m-auto">
    <div class="card w-full">
      <div class="img-avatar">
        <img :src="item.image" alt="" />
      </div>
      <div class="card-text">
        <div class="portada"></div>
        <div class="title-total">
          <div class="title">{{ item.fullname }}</div>
          <h2></h2>

          <div class="desc">
            <p>Username: {{ item.email }}</p>
            <p>Phone: {{ item.phone }}</p>
            {{ item.company.department }}
          </div>

          <div class="actions">
            <button><i class="far fa-heart"></i></button>
            <button><i class="far fa-envelope"></i></button>
            <button><i class="fas fa-user-friends"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,400i,700");

.card {
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.5);
  display: flex;
  flex-direction: row;
  border-radius: 25px;
  height: calc(100vh - 97px);

  position: relative;
}
.card h2 {
  margin: 0;
  padding: 0 1rem;
}
.card .title {
  padding: 1rem;
  text-align: right;
  color: green;
  font-weight: bold;
  font-size: 12px;
}
.card .desc {
  padding: 0.5rem 1rem;
  font-size: 12px;
}
.card .actions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 0.5rem 1rem;
}
.card svg {
  width: 85px;
  height: 85px;
  margin: 0 auto;
}

.img-avatar {
  width: 80px;
  height: 80px;
  position: absolute;
  border-radius: 50%;
  border: 6px solid white;
  background-image: linear-gradient(-60deg, #16a085 0%, #f4d03f 100%);
  top: 15px;
  left: 85px;
}

.card-text {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.title-total {
  padding: 2.5em 1.5em 1.5em 1.5em;
}

path {
  fill: white;
}

.img-portada {
  width: 100%;
}

.portada {
  width: 100%;
  height: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-image: url("https://m.media-amazon.com/images/S/aplus-media/vc/cab6b08a-dd8f-4534-b845-e33489e91240._CR75,0,300,300_PT0_SX300__.jpg");
  background-position: bottom center;
  background-size: cover;
}

button {
  border: none;
  background: none;
  font-size: 24px;
  color: #8bc34a;
  cursor: pointer;
  transition: 0.5s;
}
</style>