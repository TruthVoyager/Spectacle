<template>
  <div>
    <router-link :id="this.HistoryId" to="/history" title="Search History">
      <i class="fa fa-history fa-2x"></i>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'historyTab',

  computed: {
    ...mapState(['ui']),

    HistoryId() {
      return 'historypos' + this.ui;
    },
  },
};
</script>

<style>
#historypos1 {
  position: relative;
  left: 1%;
  top: -45px;
  z-index: 4;
  color: #7f2394;
}
#historypos2 {
  position: relative;
  left: 310px;
  top: -115px;
  z-index: 4;
  color: #7f2394;
}
</style>
