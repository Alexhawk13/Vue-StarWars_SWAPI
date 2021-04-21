<template lang="html">
  <div>
    <v-container class="grey lighten-5">
      <form :class="{active : isActive}"><input class="search" v-model="search"  placeholder="Search for a specie..">
        <i @click="active()" class="fa fa-search"></i>
      </form>
      
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
  name: "Species",
  components: {},

  data: () => ({
    species: [],
    search: "",
    isActive: false,
  }),

  mounted() {
    fetch(`https://swapi.dev/api/films/${this.$route.params.id}`)
      .then(response => response.json())
      .then(result =>
        result.species.forEach(x => {
          fetch(x)
            .then(response => response.json())
            .then(result => this.species.push(result));
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
      return this.species.filter(specie =>
        specie.name.toLowerCase().includes(this.search.toLowerCase().trim())
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/search';
</style>