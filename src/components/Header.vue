<template lang="html">
  <div class= "wrapper">
    <router-link class="nav_link" :to="{ name: 'Home', params: {} }">Home</router-link>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="css" scoped>
.wrapper {
  position: fixed;
  /* width: 100%; */
  z-index: 0;

  background-color: black;
}

.nav_link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-decoration: none;
  font-weight: 500;
  transition: 0.6s;
  z-index: 3;
}

.nav_link:hover {
  background-color: #1976d2;
  color: black;
}
</style>