<template lang="html">
  <div class= "wrapper">
    <router-link class="nav-link" :to="{ name: 'Home', params: {} }">Home</router-link>
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
  z-index: 0;
  background-color: black;
}

.nav-link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-decoration: none;
  font-weight: 500;
  transition: 0.6s;
  z-index: 3;
}

.nav-link:hover {
  background-color: #1976d2;
  color: black;
}
</style>