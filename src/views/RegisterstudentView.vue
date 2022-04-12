<template>
    <FormRegister @form-submit="add" />
</template>

<script setup>
import FormRegister from "../components/Formregisterstudent.vue";


async function add(student) {

    let datas = {
        
        email: student.email,
        Gender: true,
        password : student.password,
        username: student.username,
        Name: student.name,
        roles: ["ROLE_STUDENT"],
        FirstName: student.firstname,
        parent_email_1: student.parent1,
        parent_email_2: student.parent2

    };

    console.log("add lancée!")
    console.log(student.value);

    let response = await fetch("http://127.0.0.1:8000/api/students", {
        method: "POST",
        body: JSON.stringify(student),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((r) => r.json())
        .catch();
    if (response) {
        console.log("ajout du prof avec succès");
    }
}
</script>
