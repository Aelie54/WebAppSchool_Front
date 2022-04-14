<template>
  <div>
    <h1>Page liste my fake_grades</h1>
    Ici, un éléve pourra voir ses notes 
    <p>
    Moyenne générale : 
    </p>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStudentsStore } from "../stores/students";
const storeStore = useStudentsStore();

</script>

<style scoped>

</style>
