<template lang="html">
  <div>
    <v-container class="grey lighten-5">
      <input class="search" v-model="search"  placeholder="Search species..">
      <v-row>
        <v-col cols="6" md="3" v-for="(view, index) in filteredList" :key="view.name">
          <img
          :src="`https://starwars-visualguide.com/assets/img/species/${index + 1}.jpg`"
          :alt="`${view.name}`"  width="100%"
          >
          <div>{{ view.name }}</div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Species',
    components: {

    },

    data: () => ({
      species: [],
      search: "",
    }),

    mounted() {
      fetch(`https://swapi.co/api/films/${this.$route.params.id}`)
        .then(response => response.json())
        .then(result => result.species.forEach(x => {
          fetch(x)
          .then(response => response.json())
          .then(result => this.species.push(result)
        )}))
    },
    computed: {
      filteredList() {
        return this.species.filter(specie => specie.name.toLowerCase().includes(this.search.toLowerCase().trim()))
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '../styles/search'
 </style>