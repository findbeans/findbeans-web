<template>
  <div id="app">
    <b-header></b-header>
    <router-view></router-view>
    <b-footer></b-footer>
  </div>
</template>

<script>
  import BHeader from './components/Header.vue'
  import BFooter from './components/Footer.vue'

  export default {
    name: 'app',
    components: {BHeader, BFooter}
  }
</script>

<style>

</style>
