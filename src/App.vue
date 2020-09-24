<template>
  <div id="app">
    <mainWindow />
  </div>
</template>

<script>

import mainWindow from "./components/mainWindow";
export default {
  name: 'App',
  components: {
    mainWindow
  }
}
</script>

<style>
  html,body{
    margin: 0;
    overflow: hidden;
    background-color: #FDF0D5;
  }
  #app {
    background-color: #FDF0D5;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  circle {
    fill: #1f77b4;
  }
</style>
