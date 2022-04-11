<template>
  <div>
    <h1>Page liste my fake_grades</h1>
    Ici, un éléve pourra voir ses notes Moyenne générale :
    <table>
      <tr>
        <th>Matière</th>
        <th>Note</th>
      </tr>
      <div v-for="grade in fake_grades" :key="grade">
        <tr>
          <td>{{ grade.subject }}</td>
          <td>{{ grade.grade }}</td>
        </tr>
      </div>
    </table>
  </div>
</template>

<script setup>
const fake_grades = [
  {
    subject: "Math",
    grade: "15",
  },
  {
    subject: "English",
    grade: "12",
  },
  {
    subject: "French",
    grade: "13",
  },
];
</script>

<style scoped>
table {
  border: 1px solid black;
  width: 100%;
}

tr {
  border: 1px solid black;
  width: 100%;
}

td {
  border: 1px solid black;
  width: 100%;
}
th {
  border: 1px solid black;
  /* width: 100%; */
}
</style>
