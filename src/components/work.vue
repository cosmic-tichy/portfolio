<template>
  <div id="mainWindow">
    <h1>Recent Work</h1>
    <br />
    <br />
    <br />


<!--    <b-modal size="xl" id="modal-2" ref="modal2" hide-footer hide-header>-->
<!--      <div class="d-block text-center">-->
<!--        <h3>GeoGateway Project</h3>-->
<!--      </div>-->
<!--      <div>-->
<!--        <b-carousel-->
<!--            id="carousel2"-->
<!--            style="text-shadow: 0px 0px 2px #000"-->
<!--            indicators-->
<!--            controls-->
<!--            img-width="1024"-->
<!--            img-height="480"-->
<!--        >-->
<!--          <b-carousel-slide-->
<!--              caption="First slide"-->
<!--              img-src="https://picsum.photos/1024/480/?image=10"-->
<!--          ></b-carousel-slide>-->
<!--          <b-carousel-slide-->
<!--              caption="Second Slide"-->
<!--              img-src="https://picsum.photos/1024/480/?image=12"-->
<!--          ></b-carousel-slide>-->
<!--          <b-carousel-slide-->
<!--              caption="Third Slide"-->
<!--              img-src="https://picsum.photos/1024/480/?image=22"-->
<!--          ></b-carousel-slide>-->
<!--        </b-carousel>-->
<!--      </div>-->
<!--      <b-button class="mt-3" variant="outline-danger" block @click="hideModal1">Close Me</b-button>-->
<!--      <b-button class="mt-2" variant="outline-warning" block @click="toggleModal1">Toggle Me</b-button>-->
<!--    </b-modal>-->




      <b-modal id="modal-multi-1" size="xl" ok-only no-stacking hide-header hide-footer>
        <div class="d-block text-center">
                  <h3>GeoGateway</h3>
                </div>
                <div>
                  <b-carousel
                      id="carousel1"
                      style="text-shadow: 0px 0px 2px #000"
                      indicators
                      controls
                      img-width="1024"
                      img-height="480"
                  >
                    <b-carousel-slide
                        :img-src="gg1"
                    ></b-carousel-slide>
                    <b-carousel-slide
                        :img-src="gg2"
                    ></b-carousel-slide>
                    <b-carousel-slide
                        :img-src="gg3"
                    ></b-carousel-slide>
                    <b-carousel-slide
                        :img-src="gg4"
                    ></b-carousel-slide>
                    <b-carousel-slide
                        :img-src="gg5"
                    ></b-carousel-slide>
                    <b-carousel-slide
                        :img-src="gg6"
                    ></b-carousel-slide>
                  </b-carousel>
                </div>
        <br />
        <br />
        <div class="visitButton">
          <b-button @click="geogateway" size="lg" variant="dark">Visit Site</b-button>
        </div>

      </b-modal>

      <b-modal id="modal-multi-2" size="xl" ok-only hide-header hide-footer>
        <div class="d-block text-center">
          <h3>Resurrecting Megajeff</h3>
        </div>
        <div>
          <b-carousel
              id="carousel2"
              style="text-shadow: 0px 0px 2px #000"
              indicators
              controls
              img-width="1024"
              img-height="480"
          >
            <b-carousel-slide
                caption="First slide"
                :img-src="mj1"
            ></b-carousel-slide>
            <b-carousel-slide
                caption="Second Slide"
                :img-src="mj2"
            ></b-carousel-slide>
            <b-carousel-slide
                caption="Third Slide"
                :img-src="mj3"
            ></b-carousel-slide>
            <b-carousel-slide
                caption="Third Slide"
                :img-src="mj4"
            ></b-carousel-slide>
            <b-carousel-slide
                caption="Third Slide"
                :img-src="mj5"
            ></b-carousel-slide>
          </b-carousel>
        </div>
        <br />
        <br />
        <div class="visitButton">
          <b-button @click="megajeff" size="lg" variant="dark">Visit Site</b-button>
        </div>
      </b-modal>

      <b-modal id="modal-multi-3" size="xl" title="Third Modal"
               ok-only hide-header hide-footer>
        <div class="d-block text-center">
          <h3>Interactive Cellular Automata</h3>
        </div>
        <div>
          <b-carousel
              id="carousel3"
              style="text-shadow: 0px 0px 2px #000"
              indicators
              controls
              img-width="1024"
              img-height="480"
          >
            <b-carousel-slide
                caption="Conways Game of Life recreated with 3 simple rules"
                :img-src="ca1"
            ></b-carousel-slide>
            <b-carousel-slide

                :img-src="ca2"

            ></b-carousel-slide>
            <b-carousel-slide
                :img-src="ca3"

            ></b-carousel-slide>
            <b-carousel-slide
                :img-src="ca4"

            ></b-carousel-slide>
            <b-carousel-slide
                :img-src="ca5"

            ></b-carousel-slide>
            <b-carousel-slide
                :img-src="ca6"

            ></b-carousel-slide>
          </b-carousel>
        </div>
      </b-modal>


    <div class="container">
      <div class="threeholder" >
        <div class="threeone"
             v-b-modal.modal-multi-1
             v-b-tooltip.hover title="Click for more information">
          <div class="circlepic">

          </div>
          <div class="circleborder">
            <div class="svgContainer">
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                   width="67.500000pt" height="42.00pt" viewBox="0 0 200.000000 75.000000"
                   preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,75.000000) scale(0.100000,-0.100000)"
                   fill="#000000" stroke="none">
                  <path d="M709 704 c-168 -51 -188 -319 -31 -411 46 -27 51 -28 230 -31 l182
-4 0 131 0 131 -150 0 -150 0 0 -40 0 -40 100 0 100 0 0 -45 0 -45 -112 0
c-124 0 -159 12 -194 65 -38 58 -12 158 49 195 28 17 51 20 175 20 l142 0 0
45 0 45 -147 -1 c-98 0 -164 -5 -194 -15z"/>
                  <path d="M169 474 c-168 -51 -188 -319 -31 -411 46 -27 51 -28 230 -31 l182
-4 0 131 0 131 -150 0 -150 0 0 -40 0 -40 100 0 100 0 0 -45 0 -45 -112 0
c-124 0 -159 12 -194 65 -38 58 -12 158 49 195 28 17 51 20 175 20 l142 0 0
45 0 45 -147 -1 c-98 0 -164 -5 -194 -15z"/>
                  <path d="M1120 360 l0 -90 80 0 c64 0 80 3 80 15 0 12 -13 15 -60 15 -57 0
-60 1 -60 25 0 24 3 25 60 25 47 0 60 3 60 15 0 12 -13 15 -60 15 -53 0 -60 2
-60 20 0 18 7 20 60 20 47 0 60 3 60 15 0 12 -16 15 -80 15 l-80 0 0 -90z"/>
                  <path d="M1360 438 c-53 -28 -62 -99 -18 -145 19 -20 31 -23 94 -23 68 0 74 2
98 31 32 38 33 79 2 115 -20 24 -32 28 -87 31 -40 3 -73 -1 -89 -9z m134 -39
c52 -41 18 -99 -59 -99 -32 0 -51 6 -65 20 -26 26 -25 46 5 75 30 31 82 33
119 4z"/>
                  <path d="M590 180 c-16 -16 -20 -33 -20 -80 0 -53 2 -60 20 -60 15 0 20 7 20
25 0 24 2 25 65 25 63 0 65 -1 65 -25 0 -16 6 -25 15 -25 12 0 15 14 15 70 0
83 -8 90 -99 90 -48 0 -65 -4 -81 -20z m131 -20 c10 -6 19 -17 19 -25 0 -12
-15 -15 -65 -15 -50 0 -65 3 -65 15 0 30 70 46 111 25z"/>
                  <path d="M790 185 c0 -11 11 -15 40 -15 l40 0 0 -65 c0 -58 2 -65 20 -65 18 0
20 7 20 65 l0 65 40 0 c29 0 40 4 40 15 0 12 -18 15 -100 15 -82 0 -100 -3
-100 -15z"/>
                  <path d="M1010 120 l0 -80 100 0 c82 0 100 3 100 15 0 12 -16 15 -80 15 -79 0
-80 0 -80 25 0 24 2 25 65 25 51 0 65 3 65 15 0 12 -14 15 -65 15 -37 0 -65 4
-65 10 0 6 33 10 80 10 64 0 80 3 80 15 0 12 -18 15 -100 15 l-100 0 0 -80z"/>
                  <path d="M1230 136 c0 -95 4 -97 159 -94 l126 3 3 78 c2 63 0 77 -12 77 -11 0
-16 -15 -18 -62 l-3 -63 -42 -3 -43 -3 0 65 c0 59 -2 66 -20 66 -18 0 -20 -7
-20 -66 l0 -65 -42 3 -43 3 -3 63 c-3 54 -6 62 -22 62 -18 0 -20 -7 -20 -64z"/>
                  <path d="M1570 180 c-16 -16 -20 -33 -20 -80 0 -53 2 -60 20 -60 15 0 20 7 20
25 0 24 2 25 65 25 63 0 65 -1 65 -25 0 -16 6 -25 15 -25 12 0 15 14 15 70 0
83 -8 90 -99 90 -48 0 -65 -4 -81 -20z m131 -20 c10 -6 19 -17 19 -25 0 -12
-15 -15 -65 -15 -50 0 -65 3 -65 15 0 30 70 46 111 25z"/>
                  <path d="M1770 157 c0 -24 5 -48 12 -55 7 -7 41 -12 81 -12 43 0 66 -4 62 -10
-3 -5 -33 -10 -66 -10 -46 0 -59 -3 -59 -15 0 -12 14 -15 69 -15 90 0 101 10
101 96 0 57 -2 64 -20 64 -17 0 -20 -7 -20 -40 l0 -40 -49 0 c-70 0 -81 6 -81
46 0 24 -5 34 -15 34 -11 0 -15 -11 -15 -43z"/>
                </g>
              </svg>
            </div>
            <h4>GeoGateway: Mapping Tools for Geophysicists </h4>
            <p><b>Developed For:</b>
              <br />
              NASA JPL Quakes Team <br/> <br />
              <b>Technologies Used:</b> <br />
              Django, Vue.js, Leaflet, Webpack, Apache Airavata, JavaScript/CSS/HTML, Python3 <br /> <br/>
              <b>Project Description: </b>
              <br />Tools for Analysis, Modeling, and Response Using Geodetic Imaging Products.
              <br />
            </p>
          </div>
        </div>
        <div class="threetwo"
             v-b-modal.modal-multi-2
             v-b-tooltip.hover title="Click for more information">
          <div class="circlepic">

          </div>
          <div class="circleborder">
            <div class="svgContainer">
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                   width="69.000000pt" height="42.000000pt" viewBox="0 0 69.000000 42.000000"
                   preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,42.000000) scale(0.100000,-0.100000)"
                   fill="#000000" stroke="none">
                  <path d="M7 413 c-4 -3 -7 -98 -7 -210 l0 -203 41 0 41 0 -5 47 c-3 27 -13 75
-23 109 -17 58 -17 62 0 110 10 27 21 73 23 102 l5 52 -34 0 c-19 0 -38 -3
-41 -7z"/>
                  <path d="M185 403 c-154 -80 -170 -276 -31 -371 43 -28 56 -32 116 -32 65 0
130 15 130 29 0 4 -5 12 -10 17 -7 7 2 21 25 44 43 41 46 82 10 123 -22 24
-31 27 -90 27 -61 0 -66 -2 -75 -26 -16 -41 -13 -44 50 -44 l60 0 0 -36 c0
-31 -4 -37 -37 -51 -100 -41 -204 35 -190 140 15 107 131 159 218 96 l28 -20
7 28 c4 15 11 34 17 40 7 10 -2 18 -34 33 -54 24 -151 26 -194 3z"/>
                  <path d="M472 403 c-40 -20 -62 -59 -62 -112 0 -51 34 -93 91 -111 48 -16 89
-46 89 -64 0 -43 -79 -60 -115 -26 l-21 20 -28 -29 -27 -28 31 -27 c27 -22 41
-26 99 -26 74 0 102 13 126 60 20 39 19 89 -4 126 -14 23 -36 38 -82 55 -68
27 -90 49 -73 76 18 29 49 33 87 13 l36 -19 20 26 c12 14 21 29 21 33 0 3 -17
16 -39 28 -46 26 -103 28 -149 5z"/>
                </g>
              </svg>
            </div>

            <h4>Resurrecting Megajeff: Digital Exhibit</h4>
            <p><b>Developed For:</b>
              <br />
              Indiana Geological and Water Survey<br/> <br />
              <b>Technologies Used:</b> <br />
              ArcGIS, ESRI Story Maps, JavaScript/CSS/HTML, TinkerCad<br /> <br/>
              <b>Project Description: </b>
              <br />A digital exhibit to explore the importance of natural history collections in celebration of Indiana University’s 200th anniversary.
              <br />
            </p>

          </div>

        </div>
        <div class="threethree"
             v-b-modal.modal-multi-3
             v-b-tooltip.hover title="Click for more information">
          <div class="circlepic">

          </div>
            <div class="circleborder">
              <div class="svgContainer2">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                     width="57.000000pt" height="57.000000pt" viewBox="0 0 57.000000 57.000000"
                     preserveAspectRatio="xMidYMid meet">

                  <g transform="translate(0.000000,57.000000) scale(0.100000,-0.100000)"
                     fill="#000000" stroke="none">
                    <path d="M202 453 l-2 -82 -82 -4 -83 -3 83 -2 82 -2 0 -75 0 -74 -82 -4 -83
-3 82 -2 82 -2 4 -82 3 -83 2 83 2 82 75 0 74 0 4 -82 3 -83 2 82 2 82 83 4
82 3 -82 2 -83 2 0 75 0 74 83 4 82 3 -82 2 -82 2 -4 83 -3 82 -2 -82 -2 -83
-75 0 -74 0 -4 83 -3 82 -2 -82z m158 -168 l0 -75 -75 0 -75 0 0 75 0 75 75 0
75 0 0 -75z"/>
                    <path d="M242 488 c-18 -18 -14 -63 6 -81 38 -34 92 -8 92 44 0 33 -18 49 -55
49 -17 0 -36 -5 -43 -12z"/>
                    <path d="M407 322 c-22 -24 -21 -55 1 -75 22 -20 63 -22 80 -5 16 16 16 70 0
86 -18 18 -63 14 -81 -6z"/>
                    <path d="M86 164 c-19 -18 -21 -65 -4 -82 17 -17 64 -15 82 4 22 21 20 50 -4
74 -24 24 -53 26 -74 4z"/>
                    <path d="M247 162 c-20 -22 -22 -63 -5 -80 16 -16 70 -16 86 0 18 18 14 63 -6
81 -24 22 -55 21 -75 -1z"/>
                    <path d="M410 160 c-38 -38 -15 -90 39 -90 34 0 51 17 51 51 0 54 -52 77 -90
39z"/>
                  </g>
                </svg>
              </div>
              <h4 style="margin-top: 30px ">Interactive Automata: Generative Art and Cellular Automata</h4>
              <p><b>Developed For:</b>
                <br />
                Personal Project<br/> <br />
                <b>Technologies Used:</b> <br />
                Java, Java Swing<br /> <br/>
                <b>Project Description: </b>
                A application for dynamically creating cellular automata for the purpose of generative art.
                <br />
                <br/>
              </p>
            </div>

          </div>

      </div>

    </div>
    <br />
    <br />
    <br />
<div class="visitButton">
    <nav>
      <ul>
        <li class="orangeButton" @mouseover="workColor(true)" @mouseleave="workColor(false)" @click="currentProj">
         Active Project
          <span></span><span></span><span></span><span></span>
        </li>
      </ul>
    </nav>
  <nav>
    <ul>
      <li class="orangeButton" @mouseover="workColor(true)" @mouseleave="workColor(false)" @click="about">
        About Me
        <span></span><span></span><span></span><span></span>
      </li>
    </ul>
  </nav>
</div>
  </div>
</template>

<script>
// import * as d3 from 'd3'
export default {
  name: "mainWindow",
  data(){
    return {
      threeone: false,
      threetwo: false,
      threethree: false,
      hovering: false,
      activeColor: '#EF8354',
      pointer: 'pointer',
      underline: 'none',
    }
  },
  computed: {
    mj1 () {
      return require('../assets/megajeff1.png')
    },
    mj2 () {
      return require('../assets/megajeff2.png')
    },
    mj3 () {
      return require('../assets/megajeff3.png')
    },
    mj4 () {
      return require('../assets/megajeff5.png')
    },
    mj5 () {
      return require('../assets/megajeff6.png')
    },
    gg1 () {
      return require('../assets/geogateway1.png')
    },
    gg2 () {
      return require('../assets/geogateway2.png')
    },
    gg3 () {
      return require('../assets/geogateway3.png')
    },
    gg4 () {
      return require('../assets/geogateway4.png')
    },
    gg5 () {
      return require('../assets/geogateway5.png')
    },
    gg6 () {
      return require('../assets/geogateway6.png')
    },
    ca1 () {
      return require('../assets/ca1.png')
    },
    ca2 () {
      return require('../assets/ca2.png')
    },
    ca3 () {
      return require('../assets/ca3.png')
    },
    ca4 () {
      return require('../assets/ca4.png')
    },
    ca5 () {
      return require('../assets/ca5.png')
    },
    ca6 () {
      return require('../assets/ca6.png')
    }

  },
  mounted() {
  },

  methods: {
    geogateway(){
      window.open('https://beta.geogateway.scigap.org/auth/login')
    },
    megajeff(){
      window.open('https://igws.indiana.edu/megajeff/')
    },
    workColor(active){
      active ? this.activeColor = '#2D3142' : this.activeColor ='#EF8354'
    },
    currentProj(){
      this.$router.push('/maps-for-democracy')
    },
    about(){
      this.$router.push('/about')
    }
  }
}
</script>

<style scoped>

h1 {
  color: #EF8354;
  font-family: Ubuntu;
  text-align: center;
  margin-top: 5%;
}
body {
  font-family: 'Roboto', sans-serif;
  width:100%;
  margin:0;
}

.svgContainer2 {
  margin-top: 5px;
  margin-left: 5px;
}


.threeholder {
  position: relative;
  margin-top: 0px;
  width: 800px;
  height:500px;
  margin-left: auto;
  margin-right: auto;
}
.threeone {
  cursor: pointer;
  display: inline-block;
  width: 33.33333333333%;
  height: 100%;
  background: #2D3142;
  border-bottom: 15px solid #2D3142;
  text-align: center;
  transition: all 0.25s;
}
.threetwo {
  cursor: pointer;
  display: inline-block;
  width: 33.333333333%;
  height: 100%;
  background: #2D3142;
  border-bottom: 15px solid #2D3142;
  transition: all 0.25s;
}
.threethree {
  cursor: pointer;
  display: inline-block;
  width: 33.333333333%;
  height: 100%;
  background: #2D3142;
  border-bottom: 15px solid #2D3142;
  transition: all 0.25s;
}
.threeone:hover {
  background: #EF8354;
}
.threeone:hover .circlepic {
  background: #4F5D75;
}
.threeone:hover .circleborder{
  background: #4F5D75;
}
.threeone:hover svg{
  fill:#EF8354;
}
.threeholder h4 {
  width: 200px;
  text-align: center;
  font-size: 13px;
  margin-left: -55px;
  font-weight: bold;
  margin-top: 45px;
  text-align: center;
  color: white;
}
.threeholder p {
  display: inline-block;
  width:200px;
  text-align: center;
  margin-left: -55px;
  margin-top: 20px;
  font-size: 12px;
  color:#8a8a8a;
  letter-spacing: 1px;
}
.threeone:hover h4, p {
  color: black;
}
.threetwo:hover h4, p {
  color: black;
}
.threethree:hover h4, p {
  color: black;
}
.threeone:hover p {
  color: black;
}
.threetwo:hover p {
  color: black;
}
.threethree:hover p {
  color: black;
}

.threeone:hover h5 {
  color: #4F5D75;
}

i {
  color: #4F5D75;
}


.threeone:hover svg, .threetwo:hover svg, .threethree:hover svg {
  transition: all 0.65s;
  transform: rotateY(360deg);
}
.threetwo:hover {
  background: #EF8354;
}
.threetwo:hover .circleborder{
  background: #4F5D75;
}
.threetwo:hover svg{
  fill:#EF8354;
}
.threethree:hover {
  background: #EF8354;
}
.threethree:hover .circleborder{
  background: #4F5D75;
}
.threethree:hover svg{
  fill:#EF8354;
}
.circleborder {
  position: absolute;
  top: 30px;
  width: 90px;
  height: 90px;
  background: #EF8354;
  margin-left: 88.33333px;
  border-radius: 50%;
}
.circlepic {
  position:absolute;
  top:-10px;
  margin-top: 30px;
  width: 110px;
  height: 110px;
  background: #4F5D75;
  margin-left: 78.33333px;
  border-radius: 50%;
}

.svgContainer {
  margin-top: 12px;
}

.container {
  margin-top: 100px;
}

#modal-1 {
  height: 500px;
}



#modal-multi-1 {
  background-color: #4F5D75 !important;
  color: #4F5D75 !important;
}

.body-bg-variant {
  background-color: #4F5D75 !important;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  --c: #EF8354;
  color: var(--c);
  font-size: 16px;
  border: 0.3em solid var(--c);
  border-radius: 0.5em;
  width: 12em;
  height: 3em;
  text-transform: uppercase;
  font-weight: bold;
  font-family: sans-serif;
  letter-spacing: 0.1em;
  text-align: center;
  line-height: 3em;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: 0.5s;
  margin: 1em;
}

nav ul li span {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--c);
  transform: translateY(150%);
  border-radius: 50%;
  left: calc((var(--n) - 1) * 25%);
  transition: 0.5s;
  transition-delay: calc((var(--n) - 1) * 0.1s);
  z-index: -1;
}

nav ul li:hover {
  color: #2D3142;
}

nav ul li:hover span {
  transform: translateY(0) scale(2);
}

nav ul li span:nth-child(1) {
  --n: 1;
}

nav ul li span:nth-child(2) {
  --n: 2;
}

nav ul li span:nth-child(3) {
  --n: 3;
}

nav ul li span:nth-child(4) {
  --n: 4;
}

#workLink {
  cursor: pointer;
}
a {
  color: #EF8354;
}

</style>

<style>
.orangeButton {
  cursor: pointer;
}
.visitButton {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>