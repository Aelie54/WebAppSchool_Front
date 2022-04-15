<template>
  <div>
    <h1>Page liste students</h1>

    <div class="main_section">
      <div class="flex_container">
        <div class="flex_stuff">
          <p>Name : {{ item.name }}</p>
          <p>First name : {{ item.firstname }}</p>
          <p>Username :{{ item.username }}</p>
          <p>Email :{{ item.email }}</p>
          <p>Parent 1 Email :{{ item.parent1 }}</p>
          <p>Parent 2 Email :{{ item.parent2 }}</p>
          <p>Grades :{{ item.grades }}</p>

          <p @click="send(item.section)">Section : {{ item.section }}</p>
          <div class="button_section">
            <div @click="edit_student(item)" class="buttons">Edit</div>
            <div @click="delete_student(item)" class="buttons">Remove</div>
          </div>
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

const item = ref([]);

onMounted(() => {
  console.log("O Mounted");
  DisplayStudent();
});

function send(stuff) {
  console.log("send");
  console.log(stuff);
  stuff = stuff.replace("/api/sections/", "");
  stuff = parseInt(stuff);
  router.push({ name: "section", params: { id: stuff } });
}

function edit_student(stuff) {
  console.log("edit");
  // router.push({ name: "edit_student", params: { id: item.id } });
}

function delete_student(stuff) {
  console.log("delete");

}

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
