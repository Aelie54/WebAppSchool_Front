<template>
  <div>
    <br />
    <Form @form-submit="Logout" />
  </div>
</template>


<script setup>

import { useTokenStore } from "../stores/token";
import {useRouter, useRoute} from "vue-router";

const router = useRouter();

Logout();


async function Logout() {

  const tokenStore = useTokenStore();
  sessionStorage.clear();
  localStorage.clear();

  tokenStore.token = "";
  tokenStore.refresh_token = "";
  tokenStore.roles = "";

  router.push('/')

}

</script>
