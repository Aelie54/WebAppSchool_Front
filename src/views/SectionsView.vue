<template>
  <div class="main_section">
    <h1>Page liste all sections</h1>
    Ici, on pourra voir la liste des classes. Je crois que le directeur et les
    profs pourront voir cette page.
    <p>
      <button @click="display_sections()">Display Sections</button>
    </p>
    <p>
      <button @click="fetch_sections">DEBUG Fetch Sections</button>
    </p>
    <p>
      <button @click="test">DEBUG Test Sections</button>
    </p>
    <p>
      <button @click="clear_store_section">DEBUG Clear sections</button>
    </p>
    <div class="flex_container">
      <div v-for="item in section_list" :key="item" class="flex_stuff">
        <!-- {{ item }} -->
        <p>Section name : {{ item.Name }}</p>
        <p>Section Professor : {{ item.Instit }}</p>
        <p>Section id : {{ item.id }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStudentsStore } from "../stores/students";
const storeStore = useStudentsStore();

const section_list = ref([]);

onMounted(() => {
  display_sections();
});

function display_sections() {
  console.log("display_sections");
  if (storeStore.all_sections.length == 0) {
    console.log("No store, fetching");
    fetch_sections();
    return;
  } else {
    console.log("Store found, displaying");
    console.log(storeStore.all_sections);
    section_list.value = storeStore.all_sections;
  }
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
  text-align: center;
  width: 50vw;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 1vh;
}
</style>
