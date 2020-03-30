<template>
  <div>
    <input class="input" type="text" v-model="searchTitle" v-on:keyup.enter="search">
    <button @click="this.search">Search</button>
  </div>
</template>

<script>
import { dataService } from '../shared';
export default {
  name: 'search',

  data: function() {
    return {
      searchTitle: '',
      response: {},
    };
  },

  methods: {
    async search() {
        this.response = {};
        this.response = await dataService.getMovie(this.searchTitle);
        this.$emit('update:movie', this.response);
    },
  },
};
</script>

<style>
#searchfield {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
</style>