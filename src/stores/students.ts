import { defineStore } from "pinia";

export const useStudentsStore = defineStore({
  id: "students_store",
  state: () => ({
    all_students: [],
    sections: [],

  }),
  persist: true,
  getters: {},
  actions: {},
});
