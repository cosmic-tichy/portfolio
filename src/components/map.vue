<template>

  <div id="mapWindow">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css">
    <div id="mapHeader">
      <br />
      <h2> Maps For Democracy | Mapbox Contest</h2>
      <hr />
      <br />
      <br />
      <p>Content coming soon</p>
      <br />
    </div>
    <div id="map"></div>

  </div>

</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
export default {
  name: "map",
  data(){
    return {
      map: null,
    }
  },
  mounted() {
    this.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    }).addTo(this.map);

  }
}
</script>

<style scoped>
#map {
  height: 80%;
  width: 80%;
  float: left;
  border-radius: 10px;
}

#mapWindow {
  border-width: thick;
  border-color: #4F5D75;
  overflow: hidden;
  height: 800px;
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

</style>