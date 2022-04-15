import { defineStore } from "pinia";

export const useStudentsStore = defineStore({
  id: "students_store",
  state: () => ({
    all_people: [],
    all_students: [],
    all_professors: [],
    all_sections: [],
    all_matters: [],
    all_grades: [],
  }),
  persist: true,
  getters: {},
  actions: {},
});
