<template lang="html">
  <div>
    <v-container class="grey lighten-5">
      <form :class="{active : isActive}"><input class="search" v-model="search"  placeholder="Search planet..">
        <i @click="active()" class="fa fa-search"></i>
      </form>
      
      <v-row>
        <v-col cols="6" md="3" v-for="(planet, index) in filteredList" :key="planet.name">
          <img
          :src="`https://starwars-visualguide.com/assets/img/planets/${index + 2}.jpg`"
          :alt="`${planet.name}`" width="100%"
          >
          <div>{{ planet.name }}</div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Planets",
  data: () => ({
    planets: [],
    search: "",
    isActive: false,
  }),

  mounted() {
    fetch(`https://swapi.dev/api/films/${this.$route.params.id}`)
      .then(response => response.json())
      .then(result =>
        result.planets.forEach(x => {
          fetch(x)
            .then(response => response.json())
            .then(result => this.planets.push(result));
        })
      );
  },
  methods: {
    active() {
      this.isActive = !this.isActive;
    }
  },
  computed: {
    filteredList() {
      return this.planets.filter(planet =>
        planet.name.toLowerCase().includes(this.search.toLowerCase().trim())
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/search';
.v-application .grey.lighten-5 {
  background-color:  #383970 !important;
}


</style>