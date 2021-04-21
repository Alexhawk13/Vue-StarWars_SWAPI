<template lang="html">
  <div>
    <v-container class="grey lighten-5">
      <form :class="{active : isActive}"><input class="search" v-model="search"  placeholder="Search for a straship..">
        <i @click="active()" class="fa fa-search"></i>
      </form>
      
      <v-row>
        <v-col cols="6" md="3" v-for="(starship, index) in filteredList" :key="starship.name">
        <object :data="`https://starwars-visualguide.com/assets/img/vehicles/${index + 1}.jpg`"
          type="image/jpg" :alt="`${starship.name}`" width="100%">
          <img src="../assets/TIEbomber_negvv.png" width="77%" >
        </object>
          <div>{{ starship.name }}</div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Starships",
  data: () => ({
    starships: [],
    search: "",
    isActive: false,
  }),

  mounted() {
    fetch(`https://swapi.dev/api/films/${this.$route.params.id}`)
      .then(response => response.json())
      .then(result =>
        result.starships.forEach(x => {
          fetch(x)
            .then(response => response.json())
            .then(result => this.starships.push(result));
        })
      );
  },
  computed: {
    filteredList() {
      return this.starships.filter(starship =>
        starship.name.toLowerCase().includes(this.search.toLowerCase().trim())
      );
    }
  },
  methods: {
    active() {
      this.isActive = !this.isActive;
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/search';
</style>