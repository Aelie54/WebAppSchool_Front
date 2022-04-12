import { defineStore } from "pinia";

export const useStudentsStore = defineStore({
  id: "students_store",
  state: () => ({
    all_people: [],
    all_students: [],
    all_professors: [],
    all_sections: [],
  }),
  persist: true,
  getters: {},
  actions: {
    fetch_personal_data_store(unique_id: any) {
      console.log("Looping through all people");
      let temp_person: any = [];
      temp_person = this.all_people[0];
      console.log(unique_id);
      let done_search = false;
      temp_person.forEach((element: any) => {
        if (done_search == true) {
          return;
        }

        console.log("Looping");
        if (element.id === unique_id) {
          console.log("Found person");
          // console.log(element)
          done_search = true;
          return element;
        }
      });
    },
  },
});
