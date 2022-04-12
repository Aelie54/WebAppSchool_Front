<template>
  <div>
    <h1>Page liste students</h1>
    Ici, le directeur et peut-être les profs pourront voir les éléves.
    <br />
    <button @click="DisplayStudents">Display Students</button><br />

    <div class="main_section">
      <div id="flex_container">
        Classe :

        <div
          v-for="element in recombined_list"
          :key="element"
          class="flex_stuff"
        >
          <p>Id: {{ element.id }}</p>
          <p>email: {{ element.email }}</p>
          <p>Username: {{ element.Username }}</p>
          <p>Name: {{ element.Name }}</p>
          <p>FirstName: {{ element.FirstName }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStudentsStore } from "../stores/students";
const storeStore = useStudentsStore();

const recombined_list = ref([]);

onMounted(() => {
  console.log("On Mounted");
  DisplayStudents();
});

async function DisplayStudents() {
  console.log("Display Students");
  // console.log(storeStore.all_students);
  recombined_list.value = storeStore.all_students;
  recombined_list.value = recombined_list.value[0];
  // console.log(recombined_list);
  // console.log(recombined_list.value[0]);
  // console.log(recombined_list.value[0][0]);

  // console.log("End of Display Students");
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
