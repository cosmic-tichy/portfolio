<template>
  <div>

    <div class="accordion" role="tablist">
      <b-card no-body class="aboutCard">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-1 variant="outline-dark">Background</b-button>
        </b-card-header>
        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              <b-list-group >
                <b-list-group-item class="listItem"> Born in Grand Rapids, Michigan <br/>
                  Raised in Quintana Roo Mexico

                </b-list-group-item>

                <b-list-group-item class="listItem">4th year undergraduate at Indiana University Luddy School, class of 2021.</b-list-group-item>
                <b-list-group-item class="listItem">
                  Student of Computer Science (B.S) and Philosophy
                </b-list-group-item>
                <b-list-group-item class="listItem">
                  Member of the Hutton Honors College, and President of the IU Philosophy Club (2019 - 2020)
                </b-list-group-item>
                <b-list-group-item class="listItem">
                  Bilingual (English and Spanish)
                </b-list-group-item>
              </b-list-group>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-title="Skills"
              img-alt="Image"
              img-top
              tag="article"
              class="aboutCard"
              no-body
      >
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-2 variant="outline-dark">Skills</b-button>
        </b-card-header>
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              <h5>Web Technologies</h5> <i style="font-size: 10px">*Highly Proficient</i>
              <hr />
              <ul>
                <li>
                  Vue.js*
                </li>
                <li>
                  Django*
                </li>
                <li>
                  JavaScript/CSS/HTML*
                </li>
                <li>
                  Angular
                </li>
                <li>
                  Leaflet/Google Maps*
                </li>
                <li>
                  Wagtail
                </li>
                <li>
                  Node.js
                </li>
                <li>
                  MySQL
                </li>
                <li>
                  MongoDB
                </li>
                <li>
                  Apache Airavata*
                </li>
              </ul>

              <h5>Programming Languages</h5>
              <hr />
              <ul>
                <li>
                  Python
                </li>
                <li>
                  Javascript*
                </li>
                <li>
                  Java*
                </li>
                <li>
                  C
                </li>
                <li>
                  Lisp
                </li>

              </ul>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="aboutCard">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-3 variant="outline-dark">Experience</b-button>
        </b-card-header>
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              <h5>Google Summer of Code</h5>
              <ul>
                <li>
                  @ The Apache Software Foundation
                </li>
                <li>
                  Worked on the Apache Airavata Supercomputing framework
                </li>
                <li>
                  Helped to integrate Science Gateway with Airavata API
                </li>

              </ul>
              <b-button  v-b-modal.gsoc>Certificate of Completion</b-button>
              <hr />
              <h5>Student Developer | CIRC</h5>
              <ul>
                <li>
                  NASA JPL Quakes team <br /> (Andrea Donnelan: PI)
                </li>
                <li>
                  Updated software stack and built GeoGateway webapp from scratch
                </li>
                <li>
                  GeoGateway is used by geophysicists around the world to analyze, dispaly, and present geophysical data
                </li>
              </ul>
              <b-button href="https://science.jpl.nasa.gov/projects/GeoGateway/" variant="secondary">JPL GeoGateway Project page</b-button>

              <hr />
              <h5>Project Assistant | <br/> Indiana Geological Survey</h5>
              <ul>
                <li>
                  Digital Exhibit Assistant <br /> (Polly Sturgeon: PI)
                </li>
                <li>
                  Used ESRI Storymaps to create digital exhibit for IU Bicentennial
                </li>
              </ul>
              <hr />
              <b-button  variant="dark" v-b-modal.cv>View CV for more details</b-button>
            </b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>

    <br />
    <br />
    <div class="buttonColumn">
      <nav>
        <ul>
          <li class="orangeButton" @mouseover="workColor(true)" @mouseleave="workColor(false)" @click="viewWork" >
            View My Work
            <span></span><span></span><span></span><span></span>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li class="orangeButton" @mouseover="workColor(true)" @mouseleave="workColor(false)" @click="contact" >
            Contact
            <span></span><span></span><span></span><span></span>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "mobileAbout",
  methods: {
    workColor(active) {
      active ? this.activeColor = '#2D3142' : this.activeColor = '#EF8354'
    },
    viewWork(){
      this.$router.push('/work');
    },
    contact(){
      this.$router.push('/contact');
    }
  }
}
</script>

<style scoped>

.banner {
  height: 5%;
  width: 100%;
}
.imgBorder {
  border-width: thick;
  border-color: #EF8354;
  border-bottom: #EF8354;
}



body { background: #FCF; }

.buttonColumn {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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
  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(transparent), to(#EF8354));
  background-image: -webkit-linear-gradient(180deg, transparent, #EF8354);
  background-image: -moz-linear-gradient(180deg, transparent, #EF8354);
  background-image: -o-linear-gradient(180deg, transparent, #EF8354);
  background-image: linear-gradient(90deg, transparent, #EF8354);
}
.divider span:nth-child(2) {
  color: #EF8354; padding: 0px 5px; width: auto; white-space: nowrap;
}
.divider span:last-child {				/* color changes in here */
  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#EF8354), to(transparent));
  background-image: -webkit-linear-gradient(180deg, #EF8354, transparent);
  background-image: -moz-linear-gradient(180deg, #EF8354, transparent);
  background-image: -o-linear-gradient(180deg, #EF8354, transparent);
  background-image: linear-gradient(90deg, #EF8354, transparent);
}

.aboutSection {

  width: 85%;
  align-content: center;
  border-radius: 10px;
}
html {
  overflow-y:scroll;
}
h4 {
  align-content: center;
  text-align: center;
  color: #4F5D75;
  font-family: Ubuntu;
}

p {
  color: #2D3142;
  font-family: Ubuntu;
  font-size: 15px;
}

.aboutCard {

  background-color: #EF8354;
  border-color: #4F5D75;
  border-width: thick;
}

hr {
  border-top: 5px solid #4F5D75;
  border-radius: 5px;
}

.listItem {
  background-color: #EF8354;
}

#map {
  height: 250px;
  width: 250px;
  border-radius: 10px;
  border-width: thick;
  border-color: #4F5D75;
}

#mapWindow {
  border-width: thick;
  border-color: #4F5D75;
  border-radius: 10px;
  height: 250px;
  width: 250px;
}

.aboutWindow {

  height: 100%;
}

i {
  font-size: 12px;
}

h1 {
  color: #EF8354;
  margin-top: 50%;
  font-family: Ubuntu;
}

body {
  margin: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
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