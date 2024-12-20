
<!-- <script>

  export default {
    data () {
      return {
        id:  "001", 
        name : "Dara Roth", 
        age : "18", 
        status : "active",
        tasks : ["Task one", "Task two", "Task three"],
        link : "https://www.google.com/"
      }
    },
    methods: {
      toggleStatus () {
        if(status.value == "active"){
          status.value = "pending";
        }else if(status.value == 'pending'){
          status.value = 'inactive';
        }else{
          status.value = "active";
        }
      }
    }
  
</script> -->

<!-- <script setup>
import { ref, onMounted } from 'vue';
  const id = ref("001");
  const name = ref("Johnathan");
  const age = ref('19');
  let status = ref("active");
  let tasks = ref(["Task one", "Task two", "Task three"]);

  const toggleStatus = () => {
        if(status.value == "active"){
          status.value = "pending";
        }else if(status.value == 'pending'){
          status.value = 'inactive';
        }else{
          status.value = "active";
        }
  }
  const addTask = () => {
    if(newTask.value.trim() != ''){
      tasks.value.push(newTask.value);
      newTask.value = '';
    }
  }

  onMounted ( async () => {
    try{
      const respone = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await respone.json();
      tasks.value = data.map((task) => task.title);
    }catch(error){
      console.log("Error fetching data api!")
    }
  });
</script>


<template>
  <h1>{{ id }} - {{ name }} - {{ age }}</h1>
  <h1 v-if="status === 'active'">User is active</h1>
  <h1 v-else-if="status === 'pending'">User is pending</h1>
  <h1 v-else>User is inactive</h1>
  <form @submit.prevent="addTask">
      <label for="newTask">Task: </label>
      <input type="text" name="newTask" id="newTask">
      <br>
      <button type="submit">Add</button>
  </form>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <a :href="link">Go to google</a><br>

  <button v-on:click="toggleStatus">Change Status</button>
</template> -->

<script setup>
import NavbarComponent from "./components/NavbarComponent.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <NavbarComponent />
  <RouterView />
</template>