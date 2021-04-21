<template lang="html">
  <div class="wrapper">
    <v-container class="grey lighten-5">
        <form :class="{active : isActive}"  id="form" action="">
          <input  id="search" class="search" type="search" v-model="search" placeholder="Search for a movie"  autocomplete="off">
          <i  @click="active()"  class="fa fa-search"></i>
        </form>
      <v-row v-if="filteredList.length !=0">
        <v-col class="singleMovie" cols="6" md="3" v-for="film in filteredList" :key="film.id">
        <router-link class="black--text" :to="{name: 'SingleFilm', params: { id: film.id }}">
          <img class="movie-picture"
            :src="`https://starwars-visualguide.com/assets/img/films/${film.id}.jpg`"
            :alt="`${film.title}`" width="100%"
          >
          <div class="text">Episode {{ film.id }}: {{ film.title }}</div>
          <div class="text">{{ film.director }} | {{ film.producer }}</div>
        </router-link>
        </v-col>
      </v-row>
      <div class="wrongSearch" v-else>
        <p>Sorry, there is no such movies</p>
      </div> 
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Films",
  data: () => ({
    films: [],
    search: "",
    isActive: false,
  }),

  mounted() {
    fetch(`https://swapi.dev/api/films/`)
      .then(response => response.json())
      .then(result =>
        result.results.forEach(def => {
          this.films.push({
            id: def.episode_id,
            title: def.title,
            description: def.opening_crawl,
            director: def.director,
            producer: def.producer
          });
        })
      );
  },
  computed: {
    filteredList() {
      return this.films.filter(film =>
      film.title.toLowerCase().includes(this.search.toLowerCase().trim())
      )
    },
  },
  methods: {
    active() {
      this.isActive = !this.isActive;
      console.log(this.filteredList);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/search.scss';
a {
  text-decoration: none;
}
.grey {
  background-image: url("../assets/BG.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: -1px 0px 10px 5px #2932c3;
  border: 1px solid #2e4eb5;
}
.wrapper {
  background-image: url("../assets/BG.jpg");
  min-height: 100vh;
}
.text {
  color: #fff;
  font-size: 1.2em;
  text-shadow: 2px 3px 1px #000000;
}
.singleMovie {
  border: 1px solid #2e4eb5
}
.movie-picture {
  transition: .3s;
  border-radius: 3px;
  &:hover {
    transform: scale(1.05);
  }
}
.active {
  width: 200px;
  transition: 1.5s;
  
}
.wrongSearch {
  color: #fff;
  p {
    text-align: center;
  }
}
</style>
