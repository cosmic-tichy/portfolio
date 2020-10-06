<template>
  <div id="app">
    <b-navbar id="navbar" toggleable variant="dark">
      <router-link to="/" style="text-decoration: none; color: #2D3142"><b-navbar-brand id="brand">
        Nick Mowery </b-navbar-brand></router-link>
      <b-navbar-toggle target="navbar-toggle-collapse">
        <template v-slot:default="{ expanded }">
          <b-icon v-if="expanded" icon="caret-up-fill"></b-icon>
          <b-icon v-else icon="caret-down-fill"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto" >
          <router-link class="routerLink" to="/">home</router-link>
          <router-link  class="routerLink" to="/work">work </router-link>
          <router-link class="routerLink" to="/contact">contact</router-link>
          <router-link class="routerLink" to="/about">about</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>


import 'vue-router'
export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
  html,body{
    margin: 0;
    overflow: auto;
    background-color: #2D3142;
  }
  #app {
    background-color: #2D3142;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  circle {
    fill: #1f77b4;
  }
  #navbar {
    width: 100%;
    background-color: #EF8354 !important;
  }
  .routerLink {
    text-decoration: none;
    color: #2D3142;
  }
  .routerLink:hover {
    text-decoration: none;
    color: #FFFFFF;
  }

  #brand {
    color: #2D3142;
    font-family: Ubuntu;
  }


  /*BFC0C0*/
  /*FFFFFF*/
  /*EF8354*/
  /*4F5D75*/
</style>
