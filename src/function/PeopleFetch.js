// ULTRA JANKY MAIS CA MARCHE ET LES GENS SONT DANS LE STORE.

import { useStudentsStore } from "../stores/students";

export async function fill_people_store() {
    const storeStore = useStudentsStore();

    console.log("Putting all people in the store");

    let people_to_add = [];
    let need_loops = await fetch("http://127.0.0.1:8000/api/people", {
            method: "GET",
        })
        .then((r) => r.json())
        .catch();
    // console.log(need_loops);

    let needed_loops = parseInt(
        need_loops["hydra:view"]["hydra:last"].replace("/api/people?page=", "")
    );
    // console.log(needed_loops);

    // console.log("starting loop");
    needed_loops = needed_loops + 1;
    // console.log(needed_loops);

    for (let index = 1; index < needed_loops; index++) {
        let need_loops = await fetch(
                "http://127.0.0.1:8000/api/people?page=" + index, {
                    method: "GET",
                }
            )
            .then((r) => r.json())
            .catch();
        // console.log("lapni");
        // console.log(need_loops);
        people_to_add[index] = need_loops["hydra:member"];
    }

    let final_people_add = [];
    for (let index = 0; index < people_to_add.length; index++) {
        final_people_add = final_people_add.concat(people_to_add[index]);
    }
    final_people_add.shift();
    // console.log({ final_people_add });

    storeStore.all_people = final_people_add;
    // console.log(storeStore.all_people);
    // console.log({final_people_add});
    // console.log({people_to_add});
}

export async function fill_students_store() {
    const storeStore = useStudentsStore();

    console.log("Putting all students in the store");

    let students_to_add = [];
    let need_loops = await fetch("http://127.0.0.1:8000/api/students", {
            method: "GET",
        })
        .then((r) => r.json())
        .catch();
    // console.log(need_loops);

    let needed_loops = parseInt(
        need_loops["hydra:view"]["hydra:last"].replace("/api/students?page=", "")
    );
    // console.log(needed_loops);

    // console.log("starting loop");
    needed_loops = needed_loops + 1;
    // console.log(needed_loops);

    for (let index = 1; index < needed_loops; index++) {
        let need_loops = await fetch(
                "http://127.0.0.1:8000/api/students?page=" + index, {
                    method: "GET",
                }
            )
            .then((r) => r.json())
            .catch();
        // console.log("lapni");
        // console.log(need_loops);
        students_to_add[index] = need_loops["hydra:member"];
    }

    let final_students_add = [];
    for (let index = 0; index < students_to_add.length; index++) {
        final_students_add = final_students_add.concat(students_to_add[index]);
    }
    final_students_add.shift();
    // console.log({ final_students_add });

    storeStore.all_students = final_students_add;
    // console.log(storeStore.all_people);
    // console.log({final_students_add});
    // console.log({students_to_add});
}

export async function fill_sections_store() {
    console.log("fill_sections_store");
    const storeStore = useStudentsStore();

    let response = await fetch("http://127.0.0.1:8000/api/sections", {
            method: "GET",
        })
        .then((r) => r.json())
        .catch();
    storeStore.all_sections = response["hydra:member"];
}

export async function fill_professor_store() {
    console.log("fill_professor_store");
    const storeStore = useStudentsStore();

    let response = await fetch("http://127.0.0.1:8000/api/professors", {
            method: "GET",
        })
        .then((r) => r.json())
        .catch();
    storeStore.all_professors = response["hydra:member"];
}

export function empty_students_store() {
    console.log("empty_students_store");
    const storeStore = useStudentsStore();
    storeStore.all_students = [];
}

export function empty_people_store() {
    console.log("empty_people_store");
    const storeStore = useStudentsStore();
    storeStore.all_people = [];
}

export function empty_sections_store() {
    console.log("empty_sections_store");
    const storeStore = useStudentsStore();
    storeStore.all_sections = [];
}

export function empty_professor_store() {
    console.log("empty_professor_store");
    const storeStore = useStudentsStore();
    storeStore.all_professors = [];
}