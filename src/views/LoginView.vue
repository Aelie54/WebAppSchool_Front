<template>
  <div>
    <br />
    <h1>Connexion</h1>
    <Form @form-submit="FormSubmit" />
  </div>
</template>

<script setup>
import Form from "../components/Form.vue";
import VueJWTDecode from 'vue-jwt-decode';
// import { useTokenStore } from "../stores/token";

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

    .catch((e) =>{
      return e.json();
    });

  if (response.token && response.refresh_token) {
    sessionStorage.clear();
    localStorage.clear();

    console.log(response);

    // var decode = jwt.decode(response.token);
    // var role = decode.roles;
    // console.log(role);
    // localStorage.setItem("role", response.refresh_token);


    // tokenStore.token = response.token;
    // tokenStore.refresh_token = response.refresh_token;
    // tokenStore.roles = "abc";

    sessionStorage.setItem("token", "response.token");
    sessionStorage.setItem("refresh_token", "response.refresh_token");

    let decode = VueJwtDecode.decode(response.token);
    console.log(decode);

    // sessionStorage.setItem("roles", decode.roles);

  }
}
</script>
