<template>

  <section class="src-components-multiple-choice">
    <div class="jumbotron">
      <h2>Multiple Choice</h2>
      <hr>
      <hr>
      <br>

      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Número de pregunta</th>
            <th scope="col">Respuesta</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(pregunta, index) in preguntas" :key="index">
            <td>{{ pregunta.numero }}</td>
            <td>{{ pregunta.respuestas.join(", ") }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-multiple-choice',
    props: [],
    mounted () {

    },
    data () {
      return {
        preguntas: [
          { numero: 1, respuestas: ['b', 'd']},
          { numero: 2, respuestas: ['c']},
          { numero: 3, respuestas: ['b', 'e']}
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .jumbotron {
    background-color: teal;
    color: white;
  }

  hr {
    background-color: #bbb;
  }
</style>
