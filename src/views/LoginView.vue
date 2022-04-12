<template>
  <div>
    <br />
    <h1>Connexion</h1>
    <Form @form-submit="FormSubmit" />
  </div>
</template>

<script setup>
import Form from "../components/Form.vue";

async function FormSubmit(user) {
  let datas = {
    username: user.username,
    password: user.password,
  };

  console.log(datas);
  
  let response = await fetch("http://127.0.0.1:8000/api/login_check", {
    method: "POST",
    body: JSON.stringify(datas),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((r) => r.json())
    .catch();
  if (response.token && response.refresh_token) {
    localStorage.setItem("token", response.token);
    localStorage.setItem("refresh_token", response.refresh_token);
    console.log(response);
  }
}
</script>
