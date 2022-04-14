<template>
  <div class="main_section">
    <h1>Page display unique sections</h1>
    <div class="flex_container">
      <p>Section name : {{ item.name }}</p>
      <p>Section Professor : {{ item.instit }}</p>
      <p>Section id : {{ item.id }}</p>
      <p>Section students : {{ item.Eleve }}</p>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStudentsStore } from "../stores/students";
const storeStore = useStudentsStore();
const router = useRouter();
const route = useRoute();

const section_list = ref([]);
const item = ref([]);

onMounted(() => {
  display_sections();
});

function display_sections() {
  console.log("display_sections");
  console.log(route.params);
  console.log(route.params.id);

  let all_sections = storeStore.all_sections;

  for (let index = 0; index < all_sections.length; index++) {
    if (all_sections[index].name == route.params.id) {
      console.log("Success");
      console.log(all_sections[index]);
      item.value = all_sections[index];
      console.log(item.value.name);
      console.log(item.value);
      return;
    }
  }

  // all_sections.forEach((element) => {
  //   if (element.name == route.params.id) {
  //     console.log("Success");
  //     console.log(element);
  //     item.value = element;
  //     console.log(item.value.name);
  //     console.log(item.value);
  //     return;
  //   }
  // });
  //   item.value = storeStore.all_sections;
}
</script>