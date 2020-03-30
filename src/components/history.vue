<template>
    <div>
        <search @update:movie="movieSetup"></search>
        <div v-if="showMovie === true">
            <h1 v-text="movie.title"></h1>
            <img :src="movie.poster">
            <p>Release Date: {{movie.date}}</p>
            <p>Rated: {{movie.content}}</p>
            <p v-for="rating in movie.quality" :key="rating.Source">{{rating.Source}} : {{rating.Value}}</p>
            <p>Run Time: {{movie.length}}</p>
            <p>Genre: {{movie.genre}}</p>
            <p>Plot: {{movie.plot}}</p>
            <p>Director: {{movie.director}}</p>
            <p>Actors/Actresses: {{movie.actors}}</p>
        </div>
    </div>
</template>

<script>
    
    import search from './search.vue';

    export default {
        name: "movie",

        components: {
            search,
        },

        mounted: function (){

        },

        data: function(){
            return{
                showMovie: false,
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
                    actors: ''
                }
            }
        },

        methods:  {
            movieSetup: function (movieInfo){
                console.log(movieInfo);
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
                this.showMovie = true;
            }
        }
    }
</script>

<style scoped>

</style>