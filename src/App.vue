<template>
  <div id="app" class="container">
    <router-link to="/" active-class="active">Home</router-link>
    <router-link to="/video" active-class="active">Video</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#app{

}

.active{
  color: red;
}

</style>