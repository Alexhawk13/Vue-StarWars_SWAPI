<template lang="html">
  <div>
    <v-container class="grey lighten-5">
      <form><input class="search" v-model="search"  placeholder="Search character..">
        <i class="fa fa-search"></i>
      </form>
      <v-row>
        <v-col cols="4" md="3" v-for="(character, index) in filteredList" :key="character.name">
          <object :data="`https://starwars-visualguide.com/assets/img/characters/${index+1}.jpg`"
            type="image/jpg" width="100%">
            <img src="../assets/xsYoda.jpg" width="100%" height="92%">
          </object>
          <div>{{ character.name }}</div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Character",
  data: () => ({
    characters: [],
    search: "",
    index: ""
  }),

  mounted() {
    fetch(`https://swapi.dev/api/films/${this.$route.params.id}`)
      .then(response => response.json())
      .then(result =>
        result.characters.forEach(x => {
          fetch(x)
            .then(response => response.json())
            .then(result => this.characters.push(result));
        })
      );
  },
  computed: {
    filteredList() {
      return this.characters.filter(character =>
        character.name.toLowerCase().includes(this.search.toLowerCase().trim())
      );
    }
  }
};
</script>

<style lang="sass" scoped>
@import '../styles/search'
</style>
