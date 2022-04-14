<template>
  <div>
    <h1>Page liste teachers</h1>
    Ici, le directeur peut voir les éléves.
    <br />

    <div class="main_section">
      <div id="flex_container">
        <p>List Length : {{ list_length }}</p>
        <div v-for="element in teacher_list" :key="element" class="flex_stuff">
          <p>Id: {{ element.id }}</p>
          <p>Email: {{ element.email }}</p>
          <p>Username: {{ element.username }}</p>
          <p>Name: {{ element.name }}</p>
          <p @click="send(element.section)">Section: {{ element.section }}</p>
          <p>Age: {{ element.age }}</p>
          <p>Arrival Date: {{ element.arrivaldate }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStudentsStore } from "../stores/students";
import { useRouter, useRoute } from "vue-router";

const storeStore = useStudentsStore();
const router = useRouter();
const route = useRoute();

const list_length = ref(0);
const teacher_list = ref([]);

onMounted(() => {
  console.log("On Mounted");
  DisplayTeachers();
});

function send(stuff) {
  console.log("send");
  console.log(stuff);
  router.push({ name: "section", params: { id: stuff } });
}

function DisplayTeachers() {
  console.log("Display Teachers");
  teacher_list.value = storeStore.all_professors;
  list_length.value = storeStore.all_professors.length;
  teacher_list.value.forEach((current_teach) => {
    if (isNaN(current_teach.section)) {
      let section_list = storeStore.all_sections;
      let failure = false;
      section_list.forEach((element) => {
        if (element["@id"] == current_teach.section) {
          current_teach.section = element.name;
        }
      });
    }
  });
}
</script>
<style scoped>
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