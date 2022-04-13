<template>
  <div>
    <br />
    <h1>Connexion</h1>
    <Form @form-submit="FormSubmit" />
  </div>
</template>

<script setup>
import Form from "../components/Form.vue";
import jwt_decode from "jwt-decode";
import { useTokenStore } from "../stores/token";

async function FormSubmit(user) {
  let datas = {
    username: user.username,
    password: user.password,
  };

const tokenStore = useTokenStore();

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
    console.log(response);
    sessionStorage.clear();
    localStorage.clear();

    tokenStore.token = response.token;
    tokenStore.refresh_token = response.refresh_token;
    // tokenStore.roles = decoded.roles;


    sessionStorage.setItem("token", "response.token");
    sessionStorage.setItem("refresh_token", "response.refresh_token");
    // sessionStorage.setItem("refresh_token", "response.roles");

    console.log("j'essaie d'afficher le decode token");

var decoded = jwt_decode(tokenStore.token);
 
console.log(decoded);

    // sessionStorage.setItem("roles", decode.roles);

  }
}
</script>
