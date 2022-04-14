<template>
  <div>
    <h1>Page liste teachers</h1>
    Ici, le directeur peut voir les éléves.
    <br />

    <div class="main_section">
      <div id="flex_container">
        <div class="flex_container">
          <div class="flex_stuff">
            <p>Id: {{ item.id }}</p>
            <p>Email: {{ item.email }}</p>
            <p>Username: {{ item.username }}</p>
            <p>Name: {{ item.name }}</p>
            <p @click="send('section', item.section)">
              Section: {{ item.section }}
            </p>
            <p>Age: {{ item.age }}</p>
            <p>Arrival Date: {{ item.arrivaldate }}</p>
          </div>
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

const item = ref([]);

onMounted(() => {
  console.log("On Mounted");
  DisplayTeacher();
});

function send(direction, stuff) {
  console.log("send");
  console.log(direction);
  console.log(stuff)
  router.push({ name: direction, params: { id: stuff } });

}

function DisplayTeacher() {
  console.log("Display Teacher");
  console.log(route.params);
  console.log(route.params.id);

  let all_professors = storeStore.all_professors;

  for (let index = 0; index < all_professors.length; index++) {
    if (all_professors[index].id == route.params.id) {
      console.log("Success");
      console.log(all_professors[index]);
      item.value = all_professors[index];
      console.log(item.value.id);
      console.log(item.value);
      return;
    }
  }
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
