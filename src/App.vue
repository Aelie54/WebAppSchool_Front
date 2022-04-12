<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.jpeg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <!-- <RouterLink to="/login">Login</RouterLink> -->
        <RouterLink to="/my_grades">Mes notes (eleve)</RouterLink>
        <RouterLink to="/sections">Sections</RouterLink>
        <RouterLink to="/students">Students</RouterLink>
        <RouterLink to="/teachers">Teachers</RouterLink>
        <RouterLink to="/register">Register new person</RouterLink>
      </nav>
      <div>
        <div>
          <button @click="mykey.fill_students_store">
            Store Fill Students
          </button>
          <button @click="mykey.fill_people_store">Store Fill People</button>
          <button @click="mykey.fill_sections_store">Store Fill Sections</button>

          <button @click="mykey.fill_professor_store">Store Fill Professor</button>

        </div>
        <div>
          <button @click="mykey.empty_students_store">
            Store Empty Students
          </button>
          <button @click="mykey.empty_people_store">Store Empty People</button>
          <button @click="mykey.empty_sections_store">
            Store Empty Sections
          </button>
          <button @click="mykey.empty_professor_store">
            Store Empty Professor
          </button>
        </div>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import * as mykey from "./views/PeopleFetch";
</script>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
