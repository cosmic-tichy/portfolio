<template>
  <div id="mainWindow">
    <b-container>
      <b-row id="buttonNav">
      <b-col>
      <div id="mainblurb">
        <h1>Full-stack developer <br/> helping scientists do more science</h1>

        <nav>
          <ul>
            <li class="orangeButton" @mouseover="workColor(true)" @mouseleave="workColor(false)" @click="viewWork" >
             View My Work
              <span></span><span></span><span></span><span></span>
            </li>
          </ul>
        </nav>
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
      activeColor: '#EF8354',
      pointer: 'pointer',
      underline: 'none',
    }
  },
  mounted() {

  },
  methods: {
    workColor(active){
      active ? this.activeColor = '#2D3142' : this.activeColor ='#EF8354'
    },
    viewWork(){
      this.$router.push('/work')
    },
  }
}
</script>

<style scoped>
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
