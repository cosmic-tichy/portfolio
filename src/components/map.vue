<template>

  <div id="mapWindow">

    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css">

    <b-collapse visible id="my-collapse" bg-variant="dark">
      <mapTool/>
    </b-collapse>
    <div id="map"></div>

  </div>

</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import {bus} from "../main";
import mapTool from "./mapTool";
import 'leaflet-ajax'
export default {
  name: "map",
  components: {mapTool},
  data(){
    return {
      map: null,


    }
  },
  mounted() {
    this.map = L.map('map').setView([17.2220, -89.6237], 7.5);

    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {

    }).addTo(this.map);

    bus.$emit('mayaProject');
    bus.$on('loadGJ', ()=>{
      L.geoJson.ajax("https://opendata.arcgis.com/datasets/1a3a1295bf2e4cafab64580182d15367_0.geojson", {
        onEachFeature: function (feature, layer) {
          layer.bindPopup('<p>'+feature.properties.NAME+'</p>');

        }}).addTo(this.map);
    });
  },
  watch: {
    $route(to, from) {
      if(to == "/mayaProject"){
        this.mayaSidebar = true;
      }
      else if (from == "/mayaProject"){
        this.mayaSidebar = false;
      }
    }
  }
}
</script>

<style scoped>
#map {

  position: relative;
  height: 100%;
  /*z-index: 30000;*/
  width: auto;
  margin-left: auto;
  margin-bottom: auto;
  /*float: right;*/

}

#mapWindow {
  border-width: thick;
  border-color: #4F5D75;
  overflow: hidden;
  height: 93vh;
  width: 100%;

}

#mapHeader {

}
hr {
  border-top: 5px solid #4F5D75;
  border-radius: 5px;
  width: 40%;
  float: left;
}

h2 {
  color: #EF8354;
}

p {
  color: #EF8354;
  text-align: left;
}

#my-collapse {
  height: 100%;
  width: 27%;
  overflow-y: scroll;
  float: left;
  background-color: #2c3e50;
  -webkit-transition: none;
  transition: none;
}


</style>