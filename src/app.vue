<template>
  <div id="app">
    <img src="@/assets/TopBanner.png" id="topbanner" />
    <div class="main-section columns">
      <main class="column">
        <router-view />
      </main>
    </div>
    <img src="@/assets/BottomBanner.png" id="bottombanner" />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
#topbanner {
  position: fixed;
  width: 110%;
  z-index: 3;
  top: -10px;
  left: -20px;
}
#bottombanner {
  position: fixed;
  width: 110%;
  z-index: 3;
  bottom: -10px;
  left: -20px;
}
</style>
