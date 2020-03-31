<template>
  <div>
    <div @update:movie="movieSetup" v-if="this.ui === 2">
      <span id="movie">
        <h1 v-text="movie.title" id="title"></h1>
        <img :src="movie.poster" id="poster" />
        <p id="date">Release Date: {{ movie.date }}</p>
        <p id="rating">Rated: {{ movie.content }}</p>
        <span id="scorecontain">
          <p v-for="rating in movie.quality" :key="rating.Source" id="score">
            {{ rating.Source }} : {{ rating.Value }}
          </p>
        </span>
        <p id="runtime">Run Time: {{ movie.length }}</p>
        <p id="genre">Genre: {{ movie.genre }}</p>
        <p id="plot">Plot: {{ movie.plot }}</p>
        <p id="director">Director: {{ movie.director }}</p>
        <p id="actors">Actors/Actresses: {{ movie.actors }}</p>
      </span>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'movie',

  computed: {
    ...mapState(['ui']),
  },

  data: function() {
    return {
      movie: {
        title: '',
        poster: '',
        date: '',
        content: '',
        quality: [],
        length: '',
        genre: '',
        plot: '',
        director: '',
        actors: '',
      },
    };
  },

  props: {
    moviedata: {
      type: Object,
      default: () => {},
    },
  },

  watch: {
    moviedata: {
      immediate: false,
      handler(newVal) {
        this.movieSetup(newVal);
      },
    },
  },

  methods: {
    movieSetup: function(movieInfo) {
      this.movie.title = movieInfo.Title;
      this.movie.poster = movieInfo.Poster;
      this.movie.date = movieInfo.Released;
      this.movie.content = movieInfo.Rated;
      this.movie.quality = movieInfo.Ratings;
      this.movie.length = movieInfo.Runtime;
      this.movie.genre = movieInfo.Genre;
      this.movie.plot = movieInfo.Plot;
      this.movie.director = movieInfo.Director;
      this.movie.actors = movieInfo.Actors;
      this.$store.dispatch('setState', 2);
    },
  },
};
</script>

<style scoped>
#movie {
  position: absolute;
  top: 25%;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  display: -webkit-box;
  left: 100px;
  height: 100%;
}
#title {
  position: absolute;
  left: 320px;
  top: -45px;
  width: 800px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 40pt;
  color: #7f2394;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
#poster {
  position: absolute;
  top: 0%;
}
#date {
  position: absolute;
  top: 30px;
  left: 320px;
  width: 400px;
  font-family: Arial, Helvetica, sans-serif;
  font-style: italic;
  font-size: 20pt;
  color: #9c29b6;
}
#rating {
  position: absolute;
  top: 70px;
  left: 320px;
  width: 400px;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-size: 20pt;
  color: #9c29b6;
}
#runtime {
  position: absolute;
  top: 30px;
  left: 750px;
  width: 400px;
  font-family: Arial, Helvetica, sans-serif;
  font-style: italic;
  font-size: 20pt;
  color: #9c29b6;
}
#genre {
  position: absolute;
  top: 70px;
  left: 600px;
  width: 900px;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-size: 20pt;
  color: #9c29b6;
}
#plot {
  position: absolute;
  top: 110px;
  left: 320px;
  width: 1000px;
  height: 50px;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-size: 20pt;
  color: #9c29b6;
}
#director {
  position: absolute;
  top: 215px;
  left: 320px;
  width: 800px;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-size: 20pt;
  color: #9c29b6;
}
#actors {
  position: absolute;
  top: 255px;
  left: 320px;
  width: 800px;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-size: 20pt;
  color: #9c29b6;
}
#score {
  position: relative;
  width: 400px;
  top: -60px;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-size: 20pt;
  color: #9c29b6;
}
#scorecontain {
  position: absolute;
  width: 450px;
  left: 320px;
  top: 400px;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-size: 20pt;
  color: #9c29b6;
}
</style>
