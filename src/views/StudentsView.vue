<template>
  <div>
    <h1>Page liste students</h1>
    Ici, le directeur et peut-être les profs pourront voir les éléves.
    <br />
    <button @click="FetchStudents">Fetch Students</button><br />
    <button @click="get_student_info">Get student info</button>

    <ul>
      <!-- <li v-for="index in recombined_list" :key="index">
        <p>
          Stupid output
        </p>
      </li> -->
      <li v-for="stuff in Object.keys(recombined_list)" :key="stuff">Ppeis</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const ze_students_list = ref([]);
const id_students_no_info = ref([]);
const recombined_list = ref({});

async function FetchStudents() {
  console.log("Fetch Students");
  let response = await fetch("http://127.0.0.1:36159/api/students", {
    method: "GET",
  })
    .then((r) => r.json())
    .catch();
  console.log(response["hydra:member"]);
  ze_students_list.value = response["hydra:member"];
  console.log(ze_students_list);
}

async function get_student_info() {
  console.log("get_student_info");
  console.log(ze_students_list.value);

  ze_students_list.value.forEach((element) => {
    let retrieved_id = element["@id"].replace("/api/students/", "");
    id_students_no_info.value.push(retrieved_id);
  });
  console.log(id_students_no_info.value);

  let response = await fetch("http://127.0.0.1:36159/api/people", {
    method: "GET",
  })
    .then((r) => r.json())
    .catch();
  console.log(response["hydra:member"]);
  let people_list = response["hydra:member"];
  people_list.forEach((element) => {
    recombined_list[element["@id"].replace("/api/students/", "")] = element;
  });
  console.log(recombined_list);

  console.log(Object.keys(recombined_list).length);

  for (let index = 0; index < Object.keys(recombined_list).length; index++) {
    console.log("test");
  }
  console.log("end of get_student_info");
}
</script>
