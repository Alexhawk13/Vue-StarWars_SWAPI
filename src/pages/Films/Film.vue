<template lang="html">
  <div>
    <v-container class="grey lighten-5">
      <v-row>
        <v-col cols="2" md="2">
          <img
          :src="`https://starwars-visualguide.com/assets/img/films/${id}.jpg`"
          :alt="`${title}`" width="100%"
          >
        </v-col>
        <v-col cols="10" md="10"
        >
          <h2 class="sub_title">Episode {{ id }}: {{ title }}</h2>
          <p class="caption"><span class="font-weight-bold">Date Created:</span> {{ release_date }}</p>
          <p class="caption"><span class="font-weight-bold">Director:</span> {{ director }}</p>
          <p class="caption"><span class="font-weight-bold">Producer(s):</span> {{ producer }}</p>
          <p class="caption"><span class="font-weight-bold">Opening Crawl:</span><br />{{ description }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4" md="4" v-for="group in starwarsgroup" :key="group.item">
          <router-link class="nav_link" :to="`/${parseInt(id)}/${group.item}`">
            <img
              :src="`https://starwars-visualguide.com/assets/img/categories/${group.item}.jpg`"
              :alt="`${group.item}`"  width="100%"
            >
            <div class="green darken-2 text-center"><span class="white--text">{{ group.item }}</span></div>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Film',
    props: {
      id: Number,
      title: String,
      description: String,
      release_date: String,
      director: String,
      producer: String,
    },
    data: () => ({
    starwarsgroup: [
      {
        item: 'character'
      },
      {
        item: 'planets'
      },
      {
        item: 'species'
      },
      {
        item: 'vehicles'
      },
      {
        item: 'starships'
      }
    ]
  }),
  }
</script>

<style lang="css" scoped>
.sub_title {
  margin-bottom: 20px;
}
</style>