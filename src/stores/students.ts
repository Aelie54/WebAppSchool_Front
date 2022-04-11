import { defineStore } from "pinia";

export const useStudentsStore = defineStore({
  id: "students_store",
  state: () => ({
    all_students: [],

  }),
  persist: true,
  getters: {},
  actions: {},
});
