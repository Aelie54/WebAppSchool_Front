<template>
  <div>
    <h1>Page liste my fake_grades</h1>
    Here, a student can see their grades
    <div class="main_section">
      <h3>
        <p>Grade point average:</p>
      </h3>

      <div class="flex_container">
        <div class="flex_stuff">
          <p>
            Name :
            {{ current_student.name }}
          </p>
          <p>
            Firstname :
            {{ current_student.firstname }}
          </p>
          <p>
            Email :
            {{ current_student.email }}
          </p>
          <p>
            Username :
            {{ current_student.username }}
          </p>
          <p>
            Section :
            {{ current_student.section }}
          </p>
          <p>
            Parent 1 Email :
            {{ current_student.parent1 }}
          </p>
          <p>
            Parent 2 Email :
            {{ current_student.parent2 }}
          </p>
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

const current_student = ref([]);

onMounted(() => {
  console.log("On Mounted");
  student_grade();
});

function student_grade() {
  console.log("Grade");
  console.log(route.params);
  console.log(route.params.id);

  let all_students = storeStore.all_students;

  for (let index = 0; index < all_students.length; index++) {
    console.log("lapin");
    if (all_students[index].id == route.params.id) {
      console.log("Success");
      console.log(all_students[index]);
      current_student.value = all_students[index];
      console.log(current_student.value);
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
  text-align: center;
  width: 50vw;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 1vh;
}
</style>
