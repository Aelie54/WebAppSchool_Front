<template>
  <FormRegister @form-submit="add_professor" />
</template>

<script setup>
import FormRegister from "../components/FormRegisterProf.vue";

async function add_professor(prof) {
  console.log("Function add_professor");
  let datas = {
    Username: prof.username,
    email: prof.email,
    Name: prof.name,
    FirstName: prof.firstname,
    Roles: ["ROLE_PROF"],
    Age: prof.age,
    ArrivalDate: prof.arrival,
    Salary: prof.salary,
    password: prof.password,
  };

  // age: prof.age,
  // arrivaldate: prof.arrival,
  // salary: prof.salary,
  // email: prof.email,
  // roles: ["ROLE_PROF"],
  // password : prof.password,
  // username: prof.username,
  // name: prof.name,
  // firstName: prof.firstname,

  console.log(prof);

  let response = await fetch("http://127.0.0.1:8000/api/professors", {
    method: "POST",
    body: JSON.stringify(datas),
    headers: {
      "Content-Type": "application/ld+json",
    },
  })
    .then((r) => r.json())
    .catch();
  console.log(response);
}
</script>
