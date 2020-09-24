<template>
  <div id="mainWindow">
    <b-container>
      <b-row id="buttonNav">
      <b-col>
    <div class="container">
      <div class="hovereffect">
        <img class="img-responsive" src="../assets/aboutNick.jpg" alt="" >
        <div class="overlay">
          <h2>About</h2>
          <p>
            <a href="#">LINK HERE</a>
          </p>
        </div>
      </div>
    </div>
      </b-col>
      <b-col>
      <div class="container">
        <div class="hovereffect">
          <img class="img-responsive" src="../assets/cellCrop2.png" alt="" >
          <div class="overlay">
            <h2>Work</h2>
            <p>
              <a href="#">View my work</a>
            </p>
          </div>
        </div>
      </div>
      </b-col>
      <b-col>
      <div class="container">
        <div class="hovereffect">
          <img class="img-responsive" src="../assets/newCv.png" alt="" >
          <div class="overlay">
            <h2>Effect 12</h2>
            <p>
              <a href="#">LINK HERE</a>
            </p>
          </div>
        </div>
      </div>
      </b-col>
    </b-row>
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
  margin-top: 50%;
}
.hovereffect {
  width: 100%;
  height: 100%;
  float: left;
  overflow: hidden;
  position: relative;
  text-align: center;
  cursor: default;
  background: #91C0C4;
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
</style>

<style lang="scss" scoped>

</style>