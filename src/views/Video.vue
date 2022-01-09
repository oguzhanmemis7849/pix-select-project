import VueHtml2Canvas from 'vue-html2canvas';
<template>
  <div class="container">
    <div class="row">
      <div id="screenShot" class="d-flex justify-content-center">
        <!-- <section>
        <iframe
          width="640"
          height="480"
          src="http://46.151.101.149:8081/?action=stream"
          frameborder="0"
        ></iframe>
      </section> -->
        <img src="../assets/cam.jpg" alt="cam" class="cam" />
      </div>
      <div  class="d-flex justify-content-center m-3">
        <button @click="getScreenShot()">Ekran Görüntüsü Al</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getScreenShot() {
      const html2canvas = require('html2canvas');
      console.log("ss alındı");
      html2canvas(document.querySelector("#screenShot")).then(canvas => {
      document.body.appendChild(canvas)
});
    },
  },
};
</script>

<style>
.cam {
  width: 640px;
  height: 480px;
  margin: 20px;
}
</style>
