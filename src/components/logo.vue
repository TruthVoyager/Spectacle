<template>
  <div>
    <h1 :id="this.LogoId">Spectacle</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Logo',

  computed: {
    ...mapState(['ui']),

    LogoId() {
      return 'logopos' + this.ui;
    },
  },
};
</script>

<style scoped>
#logopos1 {
  position: absolute;
  left: 38%;
  top: 37%;
  z-index: 4;
  text-align: center;
  font-size: 60pt;
  height: 72px;
  margin-bottom: 0px;
  color: #7f2394;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 100%;
}
#logopos2 {
  position: fixed;
  top: -45px;
  left: 44px;
  z-index: 4;
  text-align: center;
  font-size: 60pt;
  height: 72px;
  margin-bottom: 0px;
  color: #7f2394;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 100%;
}
h1 {
  text-align: center;
  font-size: 60pt;
  height: 72px;
  margin-bottom: 0px;
  color: #7f2394;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 100%;
}
</style>
