<template>
  <div class="main_section">
    <h1>Page liste all sections</h1>
    Ici, on pourra voir la liste des classes. Je crois que le directeur et les
    profs pourront voir cette page.
    <p>
      <button @click="display_sections">Display Sections</button>
    </p>
    <p>
      <button @click="fetch_sections">Fetch Sections</button>
    </p>
    <p>
      <button @click="test">Test Sections</button>
    </p>
    <div class="flex_container">
      <div v-for="item in section_list" :key="item" class="flex_stuff">
        <!-- {{ item }} -->
        <p>
          <span>
            {{ item.name }}
          </span>
          <span>
            {{ item.Instit }}
          </span>
          <span>
            {{ item.id }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStudentsStore } from "../stores/students";
const storeStore = useStudentsStore();

const section_list = ref([]);

function display_sections() {
  console.log("display_sections");
  if (storeStore.sections.length == 0) {
    console.log("No store, fetching");
    fetch_sections();
    return;
  } else {
    console.log("Store found, displaying");
    console.log(storeStore.sections);
  }
}

async function fetch_sections() {
  console.log("fetch_sections");
  let response = await fetch("http://127.0.0.1:8000/api/sections", {
    method: "GET",
  })
    .then((r) => r.json())
    .catch();
  console.log(response);
  console.log(response["hydra:member"]);
  console.log(section_list);
  storeStore.sections = response["hydra:member"];
  section_list.value = storeStore.sections;
  console.log(section_list);
}

function test() {
  console.log("func test");
  // storeStore.fetch_personal_data_store(Math.random());
  storeStore.fetch_personal_data_store(180);
  let temp_output = storeStore.fetch_personal_data_store(180);
  console.log({ temp_output });
}
</script>


<style>
.main_section {
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.flex_container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-top: 5vh;
  height: 30vh;
}

.flex_stuff {
  background-color: aquamarine;
  width: 20vw;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>