<template>
  <div>
    <h1>Page liste students</h1>
    Ici, le directeur et peut-être les profs pourront voir les éléves.
    <br />
    <button @click="DisplayStudents">Display Students</button><br />

    <div class="main_section">
      <div id="flex_container">
        <p>Classe : {{ current_section }}</p>
        <p>List Length : {{ list_length }}</p>

        <div
          @click="send(element.id)"
          v-for="element in recombined_list"
          :key="element"
          class="flex_stuff"
        >
          <p>Id: {{ element.id }}</p>
          <p>email: {{ element.email }}</p>
          <p>Username: {{ element.username }}</p>
          <p>Name: {{ element.name }}</p>
          <p>FirstName: {{ element.firstname }}</p>
        </div>
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

const recombined_list = ref([]);
const list_length = ref(0);

onMounted(() => {
  console.log("On Mounted");
  DisplayStudents();
});

function DisplayStudents() {
  console.log("Display Students");
  recombined_list.value = storeStore.all_students;
  list_length.value = recombined_list.value.length;
}

function send(stuff) {
  console.log("send");
  console.log(stuff);
  router.push({ name: "student", params: { id: stuff } });
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
