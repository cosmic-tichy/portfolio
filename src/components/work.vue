<template>
  <div id="mainWindow">
    <h1>Recent Work</h1>
    <b-container>
      <b-col id="buttonNav">
        <b-row class="project">
          <div class="container">
            <div class="hovereffect">
              <img class="img-responsive" src="../assets/geoclip7.png" alt="">
              <div class="overlay">
                <p>
                  View my work on GeoGateway
                </p>
              </div>
            </div>
          </div>
        </b-row>
        <br />
        <b-row class="project">
          <div class="container">
            <div class="hovereffect">
              <img class="img-responsive" src="../assets/mjclip.png" alt="">
              <div class="overlay">
                <h2></h2>
                <p>
                View my work on the Resurrecting Megajeff Digital Exhibit
                </p>
              </div>
            </div>
          </div>
        </b-row>
        <br />
      </b-col>
    </b-container>
    <b-container>
      <b-col>
        <b-row class="project">
          <div class="container">
            <div class="hovereffect">
              <img class="img-responsive" src="../assets/cellgrowth.png" alt="">
              <div class="overlay">
                <p>
                  View my work with interactive cellular automata
                </p>
              </div>
            </div>
          </div>
        </b-row>
      </b-col>
    </b-container>
    <br />
    <b-container>
      <b-col>
        <b-row class="project">
          <div class="container">
            <div class="hovereffect">
              <img class="img-responsive" src="../assets/run-snip.png" alt="">
              <div class="overlay">
                <p>
                  View my work on a natural selection simulation in Racket
                </p>
              </div>
            </div>
          </div>
        </b-row>
      </b-col>
    </b-container>



  </div>
</template>

<script>
// import * as d3 from 'd3'
export default {
  name: "mainWindow",
  data(){
    return {
    }
  },
  mounted() {
  },
}
</script>

<style scoped>
#buttonNav {
  margin-top: 15%;
}
h1 {
  color: #EF8354;
  font-family: Ubuntu;
  text-align: center;
  margin-top: 5%;
}
.hovereffect {
  width: 100%;
  height: 100%;
  float: left;
  overflow: hidden;
  position: relative;
  text-align: center;
  cursor: default;
  background: #2D3142;
  border-radius:10px;

}
.hovereffect .overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  padding: 50px 20px;
}
.hovereffect img {
  display: block;
  position: relative;
  max-width: none;
  width: calc(100% + 20px);
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(-10px,0,0);
  transform: translate3d(-10px,0,0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.hovereffect:hover img {
  opacity: 0.4;
  filter: alpha(opacity=40);
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}
.hovereffect h2 {
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  position: relative;
  font-size: 17px;
  overflow: hidden;
  padding: 0.5em 0;
  background-color: transparent;
}
.hovereffect h2:after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #fff;
  content: '';
  -webkit-transition: -webkit-transform 0.35s;
  transition: transform 0.35s;
  -webkit-transform: translate3d(-100%,0,0);
  transform: translate3d(-100%,0,0);
}
.hovereffect:hover h2:after {
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}
.hovereffect a, .hovereffect p {
  color: #FFF;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(100%,0,0);
  transform: translate3d(100%,0,0);
}
.hovereffect:hover a, .hovereffect:hover p {
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}
.container {
 height: 60%;
  width: 60%;
}
.project {
  border-width: thick;
  border-color: #EF8354;
}
</style>