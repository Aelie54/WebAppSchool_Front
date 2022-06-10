<template>
  <div>
    <center>
      <img src="./note_49598.jpg" alt="" width="400" />
    </center>
    <br />
    <form @submit.prevent="$emit('form-submit', user)">
      <br />
      <label for="username">username</label>
      <br />
      <input type="text" v-model="user.username" id="username" />
      <br />
      <br />

      <label for="password">password</label>
      <br />
      <input type="password" v-model="user.password" id="password" />
      <br />
      <br />

      <input type="submit" value="Se connecter" />
    </form>
  </div>
</template>

<!--{"username": "ak@gmail.com", "password": "123"}-->

<script setup>
import { ref } from "@vue/reactivity";
const user = ref({
  username: "",
  password: "",
});
</script>
