<template>
  <div id="tabs">
    <b-tabs small pills card>
      <b-tab>tab1</b-tab>
      <b-tab>tab2</b-tab>
    </b-tabs>
  </div>
</template>

<script>

// import L from 'leaflet'
export default {
  name: "ToolTabs",
  components: {
  },
  data (){
    return {
      tabIndex: 0,
    }
  },
  mounted() {

  },
  watch: {
    tabIndex: function(val){
      this.toPage(val);
    },
    tabUrl: function(val){
      this.directUrl(val);
    }
  },
  computed: {

  },
  methods: {

    },

}
</script>

<style >
#tabs {
  width: auto;
  background-color: #e6e6ff;

}

.tab-text {
  width: auto;
  position: relative;
  align-content: center;
  height: 100% ;
  overflow: auto;
}

h3 {
  font-size: 20px !important;
}

.nav-pills .nav-link.active {
  background-color: #343a40;

}
.nav-link.tab {
  color: #343a40;
}

label {
  color: #343a40 ;
}
p {
  color: #343a40;
}
</style>
