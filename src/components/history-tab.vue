<template>
  <div>
    <router-link to="/history" :id="this.HistoryId">
      <i class="fa fa-history fa-2x"></i>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'historyTab',

  computed: {
    HistoryId() {
      return 'historypos' + this.ui;
    },

    ...mapState(['ui']),
  },
};
</script>

<style scoped>
#historypos1 {
  position: absolute;
  left: 47%;
  top: 60%;
  z-index: 4;
  color: #7f2394;
}
#historypos2 {
  position: absolute;
  left: 47%;
  top: 40px;
  z-index: 4;
  color: #7f2394;
}
</style>
