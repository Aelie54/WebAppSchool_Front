<template><br>
  <h1>Inscrire un élève</h1>

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
  <!-- <h1>Inscrire un élève</h1>
        Ici, le directeur peut inscrire un nouvel élève et créer ses identitfiants.
        <br />
        <form>
            <input type="text" name="email" id="email" placeholder="email" v-model="student.email" /><br />
            <input type="number" name="username" id="size" placeholder="pseudo" v-model="student.username" /><br />
            <input type="text" name="name" id="name" placeholder="nom" v-model="student.name" /><br />
            <input type="number" name="firstname" id="firstname" placeholder="prénom"
                v-model="student.firstname" /><br />
            <input type="number" name="section" id="section" placeholder="section" v-model="student.section" /><br />
            <input type="number" name="parent1" id="parent1" placeholder="email parent 1"
                v-model="student.parent1" /><br />
            <input type="number" name="parent2" id="parent2" placeholder="email parent 2"
                v-model="student.parent2" /><br />

            <input type="submit" value="Ajouter élève" id="submit" /><br /><br />
        </form> -->
</template>

<script setup>
import { ref } from "@vue/reactivity";
const student = ref({
  email: "",
  username: "",
  name: "",
  firstname: "",
  Roles: ["ROLE_STUDENT"],
  password: "",
  parent1: "",
  parent2: "",
  gender: true,
});
</script>
