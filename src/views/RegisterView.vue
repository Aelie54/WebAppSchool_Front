<template>
  <FormRegister @form-submit="add" />
</template>

<script setup>
import FormRegister from "../components/Formregisterprof.vue";

async function add() {
  let datas = {
    email: prof.email,
    Username: prof.username,
    Name: prof.name,
    FirstName: prof.firstname,
    Roles: ["ROLE_PROF"],
    Age: prof.age,
    ArrivalDate: prof.arrival,
    Salary: prof.salary,
    password: prof.password,
  };

  console.log("add lancée!");
  console.log(prof.value);

  let response = await fetch("http://127.0.0.1:8000/api/professors", {
    method: "POST",
    body: JSON.stringify(prof),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((r) => r.json())
    .catch();
  if (response) {
    console.log("ajout du prof avec succès");
  }
}
</script>
