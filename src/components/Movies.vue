<template>
  <div id="movies">
    <!--<ul>-->
    <!--<li v-for="movie in movies">{{movie.rank}} : {{movie.title}}</li>-->
    <!--</ul>-->
    <div class="card-deck">
      <div class="card" v-for="movie in movies">
        <img class="card-img-top" :src="randomPoster(movie.posters)" alt="Card image cap">
        <div class="card-body">
          <h4 class="card-title">{{movie.rank}}: {{movie.title}}</h4>
          <p class="card-text"><i><b>Rating</b></i>: {{movie.rating}}</p>
          <p class="card-text"><i><b>Director</b></i>: {{movie.director}}</p>
          <p class="card-text">
            <i><b>Actors</b></i>:
            <span v-for="(actor, index) in movie.actors">{{actor}}
              <span v-if="index != (movie.actors.length - 1)">, </span>
            </span>
          </p>
          <p class="card-text" id="desc">
            <i><b>Description</b></i>:<span v-text="shortDesc(movie.description)"></span>
          </p>
        </div>
        <!--<div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'movie-list',
    data() {
      return {
        msg: 'movie list',
        movies: []
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.getMovies();
      })
    },
    methods: {
      getMovies: function () {
        this.$http.get('/api/movie').then((response) => {
          this.movies = response.data;
        }).catch((error) => {
          console.log(error)
        })
      },
      shortDesc: function (desc) {
        if (desc.length > 300) {
          var result = desc.substring(0, 300);
          var index = result.lastIndexOf(" ");
          result = result.substring(0, index);
          return result + '...';
        } else {
          return desc;
        }
      },
      randomPoster: function (posters) {
        var min = 1;
        var max = 6;
        // index range: int [1,6)
        var index = Math.floor(Math.random() * (max - min)) + min;
        return posters[index];
      }
    }
  }
</script>

<style scoped>
  .card-deck {
    margin-left: 0;
    margin-right: 0;
  }

  .card-deck .card {
    flex: 1 0 18%;
    margin-bottom: 20px;
  }

  h4 {
    font-size: 1.2rem;
  }

  .card-img-top {
    width: 300px;
    height: 350px;
    margin: auto;
  }

</style>
