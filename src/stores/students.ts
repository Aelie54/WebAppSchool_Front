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
      console.log("Looping through all students")
      // console.log(this.all_students)
      // console.log(this.all_students[0])
      // console.log(temp_students)
      let temp_students: any = [];
      temp_students = this.all_students[0];
      console.log(unique_id)
      let done_search = false;
      temp_students.forEach((element: any) => {
        if(done_search == true) {
          return;
        }
          
        console.log("Looping")
        if (element.id === unique_id) {
          console.log("Found student")
          // console.log(element)
          done_search = true;
          return element;
        }
      });
    },
  }
});
