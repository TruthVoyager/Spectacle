<template>
  <div>
    <logo />
    <searchTab />
    <span id="history">
      <h3 v-for="search in SearchHistoryJoined" :Key="search">{{ search }}</h3>
    </span>
  </div>
</template>

<script>
import searchTab from '@/components/search-tab';
import logo from '@/components/logo';

export default {
  name: 'history',

  components: {
    searchTab,
    logo,
  },

  data: function() {
    return {
      SearchHistoryTitles: [],
      SearchHistoryStatuses: [],
      SearchHistoryJoined: [],
    };
  },

  created() {
    this.GetHistory();

    this.$store.dispatch('setState', 2);
  },

  methods: {
    //gets history stored in the user's local storage.
    GetHistory: function() {
      if (localStorage['searches']) {
        this.SearchHistoryTitles = JSON.parse(localStorage.getItem('searches'));
        this.SearchHistoryStatuses = JSON.parse(
          localStorage.getItem('searchSuccess')
        );
        var showamount;
        if (this.SearchHistoryTitles.length > 50) {
          showamount = 50;
        } else {
          showamount = this.SearchHistoryTitles.length;
        }
        for (
          var i = this.SearchHistoryTitles.length - 1;
          i >= this.SearchHistoryTitles.length - showamount;
          i--
        ) {
          this.SearchHistoryJoined.push(
            'Searched for "' +
              this.SearchHistoryTitles[i] +
              '", and the movie was ' +
              this.SearchHistoryStatuses[i] +
              '.'
          );
        }
      }
    },
  },
};
</script>

<style scoped>
#history {
  position: absolute;
  left: 36%;
  top: 25%;
  font-family: Arial, Helvetica, sans-serif;
  color: #862d86;
  z-index: 0;
}
</style>
