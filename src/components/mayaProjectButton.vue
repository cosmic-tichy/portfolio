<template>
  <b-button v-b-toggle:my-collapse v-if="mayaSidebar" id="collapseButton">
    <span class="when-open"><b-icon-arrow-bar-left></b-icon-arrow-bar-left></span>
    <span class="when-closed"><b-icon-arrow-bar-right></b-icon-arrow-bar-right></span>
  </b-button>
</template>

<script>
import {bus} from "../main";

export default {
  name: "mayaProjectButton",
  data() {
    return {
      mayaSidebar: false,
    }
  },
  watch: {
    $route(to, from) {
      if(to.path == "/mayaProject"){
        this.mayaSidebar = true;
      }
      else if (from.path == "/mayaProject"){
        this.mayaSidebar = false;
      }
    }
  },
  mounted() {
    bus.$on('mayaProject', ()=>{
      this.mayaSidebar = true;
    })
  }
}
</script>

<style scoped>

#collapseButton {
  background-color: #2D3142;

}

.when-open{
  color: #EF8354;
}
.when-closed{
  color: #EF8354;
}
</style>