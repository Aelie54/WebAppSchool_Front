<template>
  <div>
    <form @submit.prevent="$emit('form-submit', user)">
      <br />
      <label for="username">username</label><br />
      <input type="text" v-model="user.username" id="username" /><br /><br />

      <label for="password">password</label><br />
      <input
        type="password"
        v-model="user.password"
        id="password"/><br /><br />

      <input type="submit" value="Se connecter" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
};
</script>