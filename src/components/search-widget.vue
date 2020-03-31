<template>
  <div>
    <logo />
    <input
      id="searchbox"
      type="text"
      v-model="searchTitle"
      v-on:keyup.enter="search"
      placeholder="Movie title..."
      autofocus
    />
    <button id="searchbutton" @click="this.search">Search</button>
    <historyTab />
  </div>
</template>

<script>
import { dataService } from '../shared';
import historyTab from '@/components/history-tab';
import logo from '@/components/logo';
import { mapState } from 'vuex';

export default {
  name: 'search',

  components: {
    historyTab,
    logo,
  },

  computed: {
    ...mapState(['ui']),
  },

  data: function() {
    return {
      searchTitle: '',
      response: {},
    };
  },

  methods: {
    //getting the movie data
    async search() {
      this.response = {};
      this.response = await dataService.getMovie(this.searchTitle);
      this.$emit('update:movie', this.response);
    },
  },
};
</script>

<style>
#searchbox {
  width: 100%;
  padding: 10px 10px;
  margin: 8px 0;
  box-sizing: border-box;
  border-color: #7f2394;
  border-radius: 5px;
  border-width: 4px;
  border-style: solid;
  z-index: 5;
  font-size: 15pt;
}
#searchbutton {
  padding: 10px 10px;
  margin: 8px 0;
  box-sizing: border-box;
  border-color: #7f2394;
  border-radius: 5px;
  border-width: 4px;
  border-style: solid;
  z-index: 5;
  font-size: 15pt;
  color: #7f2394;
  position: relative;
  top: -67px;
  left: 238px;
}
</style>
