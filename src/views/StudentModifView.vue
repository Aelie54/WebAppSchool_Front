<template>
  <div class="main_section">
    <!-- <template>
      <FormRegister @form-submit="add" />
    </template> -->

    <form @submit.prevent="$emit('form-submit', student)">
      <input
        type="text"
        name="email"
        id="email"
        placeholder="email"
        v-model="student.email"
      /><br />

      <input
        type="text"
        name="username"
        id="username"
        placeholder="username"
        v-model="student.username"
      /><br />

      <input
        type="text"
        name="name"
        id="name"
        placeholder="nom"
        v-model="student.name"
      /><br />

      <input
        type="text"
        name="firstname"
        id="firstname"
        placeholder="prénom"
        v-model="student.firstname"
      /><br />

      <input
        type="text"
        name="parent1"
        id="parent1"
        placeholder="email premeir parent"
        v-model="student.parent1"
      /><br />

      <input
        type="text"
        name="parent2"
        id="parent2"
        placeholder="email second parent"
        v-model="student.parent2"
      /><br />

      <!-- <input type="number" name="section" id="section" 
            placeholder="section" v-model="student.section" /><br /> -->

      <input
        type="text"
        name="password"
        id="password"
        placeholder="password"
        v-model="student.password"
      /><br />

      <input type="submit" value="Ajouter professeur" id="submit" /><br /><br />
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStudentsStore } from "../stores/students";
import * as mykey from "../function/EntityModif";

const storeStore = useStudentsStore();
const route = useRoute();

const student = ref([]);

onMounted(() => {
  if (route.params.id) {
    student.value = storeStore.all_students.find(
      (student) => student.id == route.params.id
    );
    console.log(student.value);
    
  }
});
</script>

<style>
.main_section {
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.flex_container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-top: 5vh;
  height: 30vh;
}

.flex_stuff {
  background-color: aquamarine;
  width: 50vw;
  padding: 2vw;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 1vh;
}

.button_section {
  display: flex;
  justify-content: space-around;
  padding-left: 20%;
  padding-right: 20%;
  flex-direction: row;
  align-items: center;
  margin-top: 1vh;
  background-color: aqua;
}
</style>
