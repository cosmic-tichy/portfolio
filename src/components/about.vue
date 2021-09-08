<template>
  <div class="aboutWindow">

    <b-modal id="gsoc" size="xl" title="Certificate of Completion"
             ok-only hide-footer>
      <div class="d-block text-center">
        <pdf :src="gsoc"></pdf>
      </div>
    </b-modal>
    <b-modal id="cv" size="xl" title="CV"
             ok-only hide-footer>
      <div class="d-block text-center">
        <pdf :src="cv"></pdf>
      </div>
    </b-modal>
    <div class="imgBorder">
      <img class="banner" src="../assets/aboutNick2.jpg" alt="Sandboarding in the huacachina desert">
    </div>
    <div class="divider"><span></span><span>About Me</span><span></span></div>
    <div v-if="isMobile">
      <b-container class="aboutSection">
        <b-row>
          <b-col>
            <div>
              <b-card
                  title="Background"
                  img-alt="Image"
                  img-top
                  tag="article"
                  class="aboutCard"
              >
                <b-card-text>
                  <b-list-group >
                    <b-list-group-item class="listItem"> Born in Grand Rapids, Michigan <br/>
                      Raised in Quintana Roo Mexico <br/>
                      Living in Washington DC.
                    </b-list-group-item>
                    <b-list-group-item class="listItem">Current Junior GIS Software Engineer at <a href="https://www.ara.com/">Applied Research Associates</a> in Arlington, VA.</b-list-group-item>
                    <b-list-group-item class="listItem">
                      B.S. in Computer Science from Indiana University Luddy School with a minor in Philosophy.
                    </b-list-group-item>

                    <b-list-group-item class="listItem">
                      Bilingual (English and Spanish)
                    </b-list-group-item>
                  </b-list-group>
                </b-card-text>
              </b-card>

<!--              <b-card-->
<!--                  title="Outside Work"-->
<!--                  img-alt="Image"-->
<!--                  img-top-->
<!--                  tag="article"-->
<!--                  class="aboutCard"-->
<!--                  style="margin-top: 10px"-->
<!--              >-->
<!--                <b-card-text>-->
<!--                  <b-list-group >-->
<!--                    <b-list-group-item class="listItem"> Born in Grand Rapids, Michigan <br/>-->
<!--                      Raised in Quintana Roo Mexico <br/>-->
<!--                      Living in Washington DC.-->
<!--                    </b-list-group-item>-->
<!--                  </b-list-group>-->
<!--                </b-card-text>-->
<!--              </b-card>-->
            </div>
          </b-col>
          <b-col><div>
            <b-card
                title="Skills"
                img-alt="Image"
                img-top
                tag="article"
                class="aboutCard"
            >
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
                    Python*
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
                    Bash/Shell
                  </li>

                </ul>
              </b-card-text>
              <b-button @click="work" variant="secondary">View My Work</b-button>
            </b-card>
          </div>
          </b-col>
          <b-col><div>
            <b-card
                title="Experience"
                img-alt="Image"
                img-top
                tag="article"
                class="aboutCard"
            >
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

            </b-card>
          </div>
          </b-col>
        </b-row>
      </b-container>
      <br />
      <br />
    </div>
    <div v-else>
      <mobileAbout/>
    </div>
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import pdf from 'vue-pdf'
import mobileAbout from "@/components/mobileAbout";
export default {
  name: "about",
  data(){
    return {
      map: null,
      startIcon: new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_blueA.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      }),
    }
  },
  computed: {
    gsoc(){
      return require('file-loader!../assets/Completion_2020_1010.pdf');
    },
    cv(){
      return require('file-loader!../assets/MoweryResumeJune2021.pdf')
    }
  },
  components: {
    pdf,
    mobileAbout
  },
  methods : {
    work(){
      this.$router.push('/work')
    },
    showHome(){
      L.marker([19.263021, -87.450912], {icon: this.startIcon}).addTo(this.map)
          .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
          .openPopup();
    },
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },

  },
  mounted() {
    this.map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

    }).addTo(this.map);
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
  width: 325px;
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
a {
  color: #4F5D75;
}
i {
  font-size: 12px;
}
</style>