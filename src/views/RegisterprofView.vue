<template>
    <FormRegister @form-submit="add" />
</template>

<script setup>
import FormRegister from "../components/Formregisterprof.vue";


async function add(prof) {


    let datas = {
        age: prof.age,
        arrivaldate: prof.arrival,
        salary: prof.salary,
        email: prof.email,
        roles: ["ROLE_PROF"],
        password : prof.password,
        username: prof.username,
        name: prof.name,
        firstName: prof.firstname,

// marche sur postman et apiplateform:
//   "Age": 55,
//   "ArrivalDate": "2022-04-12",
//   "Salary": 1000,
//   "email": "eee@gmail.fr",
//   "roles": ["prof"],
//   "password": "123",
//   "Username": "123a",
//   "Name": "bah",
//   "FirstName": "beh"

    };

    console.log("add lancée!")
    console.log(prof.value);

    let response = await fetch("http://127.0.0.1:8000/api/professors", {
        method: "POST",
        body: JSON.stringify(prof),
        headers: {
            "Content-Type": "application/ld+json",
        },
    })
        .then((r) => r.json())
        .catch();
    if (response) {
        console.log("ajout du prof avec succès");
    }
}
</script>
