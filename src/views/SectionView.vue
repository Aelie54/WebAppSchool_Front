<template>
  <div class="main_section">
    <h1>Page liste all sections</h1>
    Ici, on pourra voir la liste des classes. Je crois que le directeur et les
    profs pourront voir cette page.
    <p>
      <button @click="display_sections()">Display Sections</button>
    </p>
    <div class="flex_container">
      <p>Section name : {{ item.Name }}</p>
      <p>Section Professor : {{ item.Instit }}</p>
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
const item = ref({});

onMounted(() => {
  display_sections();
});

function display_sections() {
  console.log("display_sections");
  console.log(route.params);
  console.log(route.params.id);

  let all_sections = storeStore.all_sections;
  all_sections.forEach(element => {
      if(element.Name == route.params.id){
        console.log("Success");
        console.log(element)
        item.value = element
        console.log(item.value.name)
        console.log(item.value)
        return;
      }
  });
//   item.value = storeStore.all_sections;
}
</script>