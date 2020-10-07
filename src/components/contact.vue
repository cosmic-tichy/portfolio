<template>
<div id="formWindow">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <br />
  <div id="contactSection">
<h4>Email me directly or use the form below to contact me</h4>
  </div>
  <br />
  <hr />
  <div v-if="!isMobile">
  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfrN_CVWCdgAXxBZNaea20bfGU5reKNAuZ80P5pg_HdAD3o_w/viewform?embedded=true" width="640" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
  </div>
  <div v-else>
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfrN_CVWCdgAXxBZNaea20bfGU5reKNAuZ80P5pg_HdAD3o_w/viewform?embedded=true" width="95%" height="800" frameborder="0" marginheight="0" marginwidth="0" margin="auto">Loading…</iframe>
  </div>
    <div id="infoSection">
  <h3>nbmowery@iu.edu</h3>
  <div class="icon-bar">
<b-row>
  <b-col><a href="https://www.linkedin.com/in/nicholas-mowery-37287a141/" class="linkedin"><i class="fa fa-linkedin fa-lg"></i></a></b-col>
  <b-col><a href="https://github.com/cosmic-tichy" class="github"><i class="fa fa-github fa-lg"></i></a></b-col>

</b-row>
<br />

  </div>
</div>

</div>
</template>

<script>
export default {
name: "contact",
  methods: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },
  }
}
</script>

<style scoped>
#formWindow {
  height: 100%;
}

h4 {
  text-align: center;
  color: #EF8354;
}

h3 {
  color: #4F5D75;
  font-family: Ubuntu;
}
p {
  color: #EF8354;
  font-family: Ubuntu;
}

#infoSection {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;


}

.icon-bar{
  font-size: 24px;
}

</style>