<template>
  <div>
    <searchWidget @update:movie="SetMovie($event)" :id="this.SearchId"></searchWidget>
    <historyTab />
    <movie :moviedata="movie"></movie>
  </div>
</template>

<script>
import movie from '@/components/movie.vue';
import searchWidget from '@/components/search-widget.vue';
import historyTab from '@/components/history-tab';
import { mapState } from 'vuex';

export default {
  name: 'search',

  components: {
    searchWidget,
    movie,
    historyTab, 
  },

  created () {
     this.$store.dispatch('setState', 1);
  },

  data: function() {
    return {
      movie: {},
    };
  },

  computed:{
    SearchId() {return 'searchpos' + this.ui;},

    ...mapState(['ui']),
  },

  methods: {
    SetMovie: function(movieInfo) {
      this.movie = movieInfo;
      this.$store.dispatch('setState', 2);
    },
  },
};
</script>

<style scoped>
#searchpos1{
    position: absolute;
		top: 0px;
    left: 42%;
    top:55%;
    text-align: center;
} 
#searchpos2{
    position: fixed;
		left: 42%;
		top: 10px;
    text-align: center;
    z-index: 5;
}
</style>