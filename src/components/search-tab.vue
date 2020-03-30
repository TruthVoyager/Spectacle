<template>
  <div>
    <router-link to="/search" id="searchpos">
      <i class="fa fa-search fa-3x"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'searchTab',
};
</script>

<style scoped>
#searchpos {
  position: absolute;
  left: 450px;
  top: 25px;
  z-index: 4;
  color:#7f2394;
}
</style>
