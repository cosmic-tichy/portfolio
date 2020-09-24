<template>
  <div>
    <b-nav align="center">
      <b-nav-item >About</b-nav-item>
      <b-nav-item >Work</b-nav-item>
      <b-nav-item >CV</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: 'navbar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.nav li {
  display: inline-block;
  list-style: outside none none;
  margin: .5em 1em;
  paddin: 0;
}

.nav a {
  padding: .5em .8em;
  color: darkslategrey;
  position: relative;
  text-decoration: none;
  font-size: 17px;

}

.nav a::before,
.nav a::after {
  content: '';
  height: 14px;
  width: 14px;
  position: absolute;
  transition: all .35s ease;
  opacity: 0;
}

.nav a::before {
  content: '';
  right: 0;
  top: 0;
  border-top: 3px solid #82ACB0;
  border-right: 3px solid #91C0C4;
  transform: translate(-100%, 50%);
}

.nav a:after {
  content: '';
  left: 0;
  bottom: 0;
  border-bottom: 3px solid #82ACB0;
  border-left: 3px solid #91C0C4;
  transform: translate(100%, -50%)
}

.nav a:hover:before,
.nav a:hover:after{
  transform: translate(0,0);
  opacity: 1;
}

.nav a:hover {
  color: #91C0C4;
}
</style>
