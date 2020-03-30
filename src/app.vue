<template>
  <div id="app">
    <img src="@/assets/TopBanner.png" id="topbanner">
    <div class="main-section columns">
      <logo />
      <main class="column">
        <router-view />
      </main>
    </div>
    <img src="@/assets/BottomBanner.png" id="bottombanner">
  </div>
</template>

<script>
import logo from '@/components/logo';

export default {
  name: 'App',
  components: {logo },
};
</script>

<style scoped>
#topbanner{
  position: fixed;
  width: 110%;
  z-index: 0;
  top: -10px;
  left: -20px;
}
#bottombanner{
  position: fixed;
  width: 110%;
  z-index: 0;
  bottom: -10px;
  left: -20px;
}
</style>
