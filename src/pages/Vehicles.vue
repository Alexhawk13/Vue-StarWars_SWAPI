<template lang="html">
  <div>
    <v-container class="grey lighten-5">
      <input class="search" v-model="search" placeholder="Search vehicle..">
      <v-row>
        <v-col cols="6" md="3" v-for="(vehicle, index) in filteredList" :key="vehicle.name">
          <object :data="`https://starwars-visualguide.com/assets/img/vehicles/${index + 1}.jpg`" type="image/jpg"
            width="100%" alt:="`${vehicle.name}`">
            <img src="../assets/Cloud_Car_NEGVV.jpg" width="102.5%">
          </object>
          <div class="green darken-2 text-center"><span class="white--text">{{ vehicle.name }}</span></div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "Vehicles",
    data: () => ({
      vehicles: [],
      search: ""
    }),

    mounted() {
      fetch(`https://swapi.dev/api/films/${this.$route.params.id}`)
        .then(response => response.json())
        .then(result =>
          result.vehicles.forEach(x => {
            fetch(x)
              .then(response => response.json())
              .then(result => this.vehicles.push(result));
          }))
    }
      ,
    computed: {
      filteredList() {
        return this.vehicles.filter(vehicle =>
          vehicle.name.toLowerCase().includes(this.search.toLowerCase().trim())
        )
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '../styles/search'
</style>