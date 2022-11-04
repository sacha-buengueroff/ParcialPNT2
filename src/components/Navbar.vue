<template>

  <section class="src-components-navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link to="/">
        <a class="navbar-brand" href="#">Inicio</a>
      </router-link>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <!-- navegacion Ingreso Gastos -->
          <li class="nav-item">
            <router-link to="/ingreso-gastos">
              <a class="nav-link" href="#">Ingreso de Gastos</a>
            </router-link>
          </li>
          <!-- navegacion Multiplechoice -->
          <li class="nav-item">
            <router-link to="/multiple-choice">
              <a class="nav-link" href="#">Multiple Choice</a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">

</style>
