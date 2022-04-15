<template>
  <div class="main_section">
    <h1>Page display unique sections</h1>
    <div class="flex_container">
      <div class="flex_stuff">
        <p>Section name : {{ item.name }}</p>
        <p @click="send('professor', item.instit)">
          Section Professor : {{ item.instit }}
        </p>
        <p>Section id : {{ item.id }}</p>
        <p
          @click="send('student', element)"
          v-for="element in item.eleve"
          :key="element"
        >
          Section students : {{ element }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStudentsStore } from "../stores/students";
const storeStore = useStudentsStore();
const router = useRouter();
const route = useRoute();

const item = ref([]);

onMounted(() => {
  display_sections();
});

function send(direction, stuff) {
  console.log("send");
  console.log(direction);
  console.log(stuff);
  // stuff = stuff.replace("/api/students/", "");
  stuff = stuff.split("/");
  console.log(stuff);
  router.push({ name: direction, params: { id: stuff[3] } });
}

function display_sections() {
  console.log("display_sections");
  console.log(route.params);
  console.log(route.params.id);

  let all_sections = storeStore.all_sections;
  let found = false;

  for (let index = 0; index < all_sections.length; index++) {
    if (all_sections[index].id == route.params.id) {
      console.log("Success");
      console.log(all_sections[index]);
      item.value = all_sections[index];
      console.log(item.value.name);
      console.log(item.value);
      found = true;
      return;
    }
  }
  if (found == false) {
    console.log("Not found, searching by name");
    for (let index = 0; index < all_sections.length; index++) {
      if (all_sections[index].name == route.params.id) {
        console.log("Success");
        console.log(all_sections[index]);
        item.value = all_sections[index];
        console.log(item.value.name);
        console.log(item.value);
        found = true;
        return;
      }
    }
  }
}
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
</style>
