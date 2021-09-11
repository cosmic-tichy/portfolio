<template>
  <div>
    <div class="title">
      <div class="divider"><span></span><span>Maya Site Map</span><span></span></div>
    </div>
  <div id="controls">
    <b-checkbox class="control" v-mode="showSites" @change="loadGeoJson"><p>Show Sites</p></b-checkbox>
  </div>
  </div>
</template>

<script>

// import L from 'leaflet'
import {bus} from '../main'
export default {
  name: "mapTool",
  components: {
  },
  data (){
    return {
      showSites: true,
    }
  },
  mounted() {
    // temporarily load GJ on mount

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
    loadGeoJson(){
      bus.$emit('loadGJ');
    }
  },

}
</script>

<style >
#controls {
  width: auto;
  margin-left: 10%;

}

.control{
  color: #1f77b4;
}

h2{
  color: #A5B9CC;
  font-family: Ubuntu;
}

.title {
  text-align: center;
  margin-top: 20px;
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
  color: #A5B9CC;
}

.divider {								/* minor cosmetics */
  display: table;
  font-size: 24px;
  font-family: Ubuntu;
  text-align: center;
  width: 75%; 						/* divider width */
  margin: 40px auto;					/* spacing above/below */
}
.divider span { display: table-cell; position: relative; }
.divider span:first-child, .divider span:last-child {
  width: 50%;
  top: 13px;							/* adjust vertical align */
  -moz-background-size: 100% 2px; 	/* line width */
  background-size: 100% 2px; 			/* line width */
  background-position: 0 0, 0 100%;
  background-repeat: no-repeat;
}
.divider span:first-child {				/* color changes in here */
  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(transparent), to(#A5B9CC));
  background-image: -webkit-linear-gradient(180deg, transparent, #A5B9CC);
  background-image: -moz-linear-gradient(180deg, transparent, #A5B9CC);
  background-image: -o-linear-gradient(180deg, transparent, #A5B9CC);
  background-image: linear-gradient(90deg, transparent, #A5B9CC);
}
.divider span:nth-child(2) {
  color: #A5B9CC; padding: 0px 5px; width: auto; white-space: nowrap;
}
.divider span:last-child { /* color changes in here */
  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#A5B9CC), to(transparent));
  background-image: -webkit-linear-gradient(180deg, #A5B9CC, transparent);
  background-image: -moz-linear-gradient(180deg, #A5B9CC, transparent);
  background-image: -o-linear-gradient(180deg, #A5B9CC, transparent);
  background-image: linear-gradient(90deg, #A5B9CC, transparent);
}

</style>
