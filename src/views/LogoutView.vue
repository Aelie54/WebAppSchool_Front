<template>
  <div>
    <br />
  </div>
</template>

<script setup>
import { useTokenStore } from "../stores/token";
import { useRouter } from "vue-router";

const router = useRouter();

Logout();

async function Logout() {
  const tokenStore = useTokenStore();
  sessionStorage.clear();
  localStorage.clear();

  tokenStore.token = "";
  tokenStore.refresh_token = "";
  tokenStore.roles = "";
  tokenStore.status = "";

  router.push("/");
}
</script>
