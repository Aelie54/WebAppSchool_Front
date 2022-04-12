<template>
  <div>
    <h1>Page liste teachers</h1>
    Ici, le directeur peut voir les éléves.
    <br />
    <button @click="Fetchprof">Fetch Teachers</button><br />
    <button @click="get_prof_info">Get teachers info</button>

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

const ze_prof_list = ref([]);
constid_prof_no_info = ref([]);
const recombined_list = ref({});

async function Fetchprof() {
  console.log("Fetch profs");
  let response = await fetch("http://127.0.0.1:8000/api/professors", {
    method: "GET",
  })
    .then((r) => r.json())
    .catch();
  console.log(response["hydra:member"]);
  ze_prof_list.value = response["hydra:member"];
  console.log(ze_prof_list);
}

async function Fetchprof() {
  console.log("Fetch Students");
  let response = await fetch("http://127.0.0.1:8000/api/students", {
    method: "GET",
  })
    .then((r) => r.json())
    .catch();
  console.log(response["hydra:member"]);
  ze_students_list.value = response["hydra:member"];
  console.log(ze_students_list);
  // console.log(ze_students_list.value[7]);
}

async function get_prof_info() {
  console.log("get_prof_info");
  console.log(ze_students_list.value);

  ze_students_list.value.forEach((element) => {
    let retrieved_id = element["@id"].replace("/api/professors/", "");
    id_students_no_info.value.push(retrieved_id);
  });
  console.log(id_prof_no_info.value);

  let response = await fetch("http://127.0.0.1:8000/api/people", {
    method: "GET",
  })
    .then((r) => r.json())
    .catch();
  console.log(response["hydra:member"]);
  let people_list = response["hydra:member"];
  people_list.forEach((element) => {
    let elemento = element["@id"].replace("/api/professors/", "");
    recombined_list.value.push(element);
    // recombined_list[element["@id"].replace("/api/students/", "")] = element;
  });
  console.log(recombined_list);
  console.log(recombined_list.value);

  console.log("end of get_student_info");
}
</script>
