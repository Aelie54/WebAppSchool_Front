<template>
  <div>
    <h1>Page liste my fake_grades</h1>
    Ici, un éléve pourra voir ses notes
    <p>Moyenne générale :</p>
    <p>
      {{ current_student }}
    </p>
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
  let found = false
  all_students.forEach((element) => {
    console.log("Loop");
    if (found) {
      return;
    }
    if (element.id == route.params.id) {
      console.log("Success");
      console.log(element);
      current_student.value = element;
      console.log(current_student.value);
      found = true;
    }
  });
}
</script>

<style scoped>
</style>
