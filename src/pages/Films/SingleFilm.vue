<template lang="html">
  <div>
    <Film
      :id="id"
      :title="title"
      :description="description"
      :release_date="release_date"
      :director="director"
      :producer="producer"
    ></Film>
    <router-view></router-view>
  </div>
</template>

<script>
import Film from "./Film";
export default {
  name: "SingleFilm",
  components: {
    Film
  },
  data: () => ({
    id: null,
    title: "",
    description: "",
    release_date: "",
    director: "",
    producer: ""
  }),
  mounted() {
    fetch(`https://swapi.dev/api/films/${this.$route.params.id}`)
      .then(response => response.json())
      .then(response => {
        this.id = parseInt(this.$route.params.id);
        this.title = response.title;
        this.description = response.opening_crawl;
        this.release_date = response.release_date;
        this.director = response.director;
        this.producer = response.producer;
      });
  }
};
</script>

<style lang="css" scoped>
</style>