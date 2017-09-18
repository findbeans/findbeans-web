<template>
  <div id="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#"><img src="../assets/brand.png" alt=""></a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" @click="modifyIdx(0)" :class="{'active':activeIdx == 0}">
            <a class="nav-link" href="/movies">Movie</a>
          </li>
          <li class="nav-item" @click="modifyIdx(1)" :class="{'active':activeIdx == 1}">
            <a class="nav-link" href="javascript:void(0)">Music</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'header',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        activeIdx: 0
      }
    },
    methods: {
      modifyIdx: function (idx) {
        this.activeIdx = idx;
      }
    }
  }
</script>

<style scoped>
  nav {
    font-size: x-large;
  }

  .navbar-light .navbar-nav .show > .nav-link,
  .navbar-light .navbar-nav .active > .nav-link,
  .navbar-light .navbar-nav .nav-link.show,
  .navbar-light .navbar-nav .nav-link.active {
    color: #007bff;
  }


</style>
