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
import { useRouter, useRoute } from "vue-router";

const router = useRouter();

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

    .catch((e) => {
      return e.json();
    });

  if (response.token && response.refresh_token) {
    sessionStorage.clear();
    localStorage.clear();

    tokenStore.token = response.token;
    tokenStore.refresh_token = response.refresh_token;

    let decoded = jwt_decode(tokenStore.token);

    // console.log("mon token:", response.token);
    // console.log("mon refresh token:", response.refresh_token);
    // sessionStorage.setItem("token", "response.token");
    // sessionStorage.setItem("refresh_token", "response.refresh_token");
    // console.log("j'essaie d'afficher le decode token et maintenant decoded");
    // console.log("mon decoded : ",decoded);
    // sessionStorage.setItem("roles", "decoded.roles");

    tokenStore.roles = decoded.roles;

    console.log("mon store :");
    console.log(tokenStore.refresh_token);
    console.log(tokenStore.token);
    console.log(tokenStore.roles);

    //https://www.digitalocean.com/community/tutorials/js-array-search-methods-fr
    if (tokenStore.roles.includes("ROLE_ADMIN") == true) {
      console.log("gagné directeur!");
      router.push("director");
    } else {
      router.push("director");
    }
    if (tokenStore.roles.includes("ROLE_PROF") == true) {
      router.push("prof");
    }
    if (tokenStore.roles.includes("ROLE_STUDENT") == true) {
      router.push("eleve");
    }
  }
}
</script>
