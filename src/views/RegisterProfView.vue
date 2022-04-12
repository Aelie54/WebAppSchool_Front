<template>
  <FormRegister @form-submit="add_professor" />
</template>

<script setup>
import FormRegister from "../components/FormRegisterProf.vue";

async function add_professor(prof) {
  console.log("Function add_professor");
  let datas = {
    username: prof.username,
    email: prof.email,
    name: prof.name,
    firstname: prof.firstname,
    roles: ["ROLE_PROF"],
    age: prof.age,
    arrivaldate: prof.arrival,
    salary: prof.salary,
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
  let error_code = 0;
  let response = await fetch("http://127.0.0.1:8000/api/professors", {
    method: "POST",
    body: JSON.stringify(datas),
    headers: {
      "Content-Type": "application/ld+json",
    },
  })
    .then(function (response) {
      console.log(response.status);
      error_code = response.status;
      response = response.json();
      return response;
    })
    .catch();
  console.log(response);

  // if (error_code === 201) {
  //   console.log("Successfully sent");
  // } else {
  //   console.log("Error in sending.");
  // }

  // .then((r) => r.json())
  //
  // .then(function (response) {
  //   console.log(response.status);
  //   error_code = response.status;
  //   response = response.json();
  //   return response;
  // })
}
</script>
