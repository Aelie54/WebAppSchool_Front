<template>
  <div>
    <h1>Page liste students</h1>

    <div class="main_section">
      <p>
        Name :
        {{ item.name }}
      </p>
      <p>
        First name :
        {{ item.firstname }}
      </p>
      <p>
        Username :
        {{ item.username }}
      </p>
      <p>
        Email :
        {{ item.email }}
      </p>
      <p>
        Parent 1 Email :
        {{ item.parent1 }}
      </p>
      <p>
        Parent 2 Email :
        {{ item.parent2 }}
      </p>
      <p>
        Section :
        {{ item.section }}
      </p>
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

const section_list = ref([]);
const item = ref([]);

onMounted(() => {
  console.log("O Mounted");
  DisplayStudent();
});

function DisplayStudent() {
  console.log("Display Student");
  console.log(route.params);
  console.log(route.params.id);

  let all_students = storeStore.all_students;
  all_students.forEach((element) => {
    if (element.id == route.params.id) {
      console.log("Success");
      console.log(element);
      item.value = element;
      console.log(item.value.id);
      console.log(item.value);
      return;
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
