<template>
  <div>
    <h1>Inscrire un professeur</h1>
    Ici, le directeur peut inscrire un nouveau professeur et créer ses
    identifiants.
    <br />

    <form @submit.prevent="add(prof)">
      <input
        type="text"
        name="email"
        id="email"
        placeholder="email"
        v-model="prof.email"
      /><br />
      <input
        type="text"
        name="username"
        id="size"
        placeholder="pseudo"
        v-model="prof.username"
      /><br />
      <input
        type="text"
        name="name"
        id="name"
        placeholder="nom"
        v-model="prof.name"
      /><br />
      <input
        type="text"
        name="firstname"
        id="firstname"
        placeholder="prénom"
        v-model="prof.firstname"
      /><br />
      <input
        type="number"
        name="age"
        id="age"
        placeholder="age"
        v-model="prof.age"
      /><br />
      <input
        type="date"
        name="arrival"
        id="arrival"
        placeholder="date d'arrivée"
        v-model="prof.arrival"
      /><br />
      <!-- <input type="number" name="section" id="section" placeholder="section" v-model="prof.section" /><br /> -->
      <input
        type="number"
        name="salary"
        id="salary"
        placeholder="salaire"
        v-model="prof.salary"
      /><br />
      <input type="submit" value="Ajouter professeur" id="submit" /><br /><br />
    </form>
    <!-- <h1>Inscrire un élève</h1>
        Ici, le directeur peut inscrire un nouvel élève et créer ses identitfiants.
        <br />
        <form @submit.prevent="new(student)">

            <input type="text" name="email" id="email" placeholder="email" v-model="student.email" /><br />
            <input type="number" name="username" id="size" placeholder="pseudo" v-model="student.username" /><br />
            <input type="text" name="name" id="name" placeholder="nom" v-model="student.name" /><br />
            <input type="number" name="firstname" id="firstname" placeholder="prénom" v-model="student.firstname" /><br />
            <input type="number" name="section" id="section" placeholder="section" v-model="student.section" /><br />
            <input type="number" name="parent1" id="parent1" placeholder="email parent 1" v-model="student.parent1" /><br />
            <input type="number" name="parent2" id="parent2" placeholder="email parent 2" v-model="student.parent2" /><br />

            <input type="submit" value="Ajouter élève" id="submit" /><br /><br />
        </form> -->
  </div>
</template>

<script setup>
let prof = {
  email: prof.email,
  Username: prof.username,
  Name: prof.name,
  FirstName: prof.firstname,
  Roles: ["ROLE_PROF"],
  Age: prof.age,
  ArrivalDate: prof.arrival,
  Salary: prof.salary,
};

async function add(prof) {
  console.log(prof);
  let response = await fetch("http://127.0.0.1:8000/api/professors", {
    method: "POST",
    body: JSON.stringify(prof),
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
