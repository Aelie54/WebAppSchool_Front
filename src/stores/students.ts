import { defineStore } from "pinia";

export const useStudentsStore = defineStore({
  id: "students_store",
  state: () => ({
    all_students: [],
    sections: [],
  }),
  persist: true,
  getters: {},
  actions: {
    fetch_personal_data_store(unique_id: any) {
      console.log("lapin");
      console.log(unique_id);
    },
  },
});
