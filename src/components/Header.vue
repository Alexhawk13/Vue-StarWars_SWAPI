<template lang="html">
    <v-toolbar style="background-color: black">
      <v-toolbar-items>
        <router-link class="nav_link" :to="{ name: 'Home', params: {} }">Home</router-link>
      </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="css" scoped>
.v-toolbar {
  flex: none;
}

.nav_link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 21px;
  text-decoration: none;
  font-weight: 500;
  margin-left: -22%;
  border-right: 1px solid white;
}

a:hover {
  background-color: #9dd7e0;
  transition: 0.5s;
}
</style>