<template lang="html">
  <div>
    <v-container class="grey lighten-5">
      <input class="search" v-model="search"  placeholder="Search planet..">
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
    name: 'Planets',
    data: () => ({
      planets: [],
      search: "",
    }),

    mounted() {
      fetch(`https://swapi.co/api/films/${this.$route.params.id}`)
        .then(response => response.json())
        .then(result => result.planets.forEach(x => {
          fetch(x)
          .then(response => response.json())
          .then(result => this.planets.push(result)
        )}))
    },
    computed: {
      filteredList() {
        return this.planets.filter(planet => planet.name.toLowerCase().includes(this.search.toLowerCase().trim()))
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '../styles/search'
 </style>