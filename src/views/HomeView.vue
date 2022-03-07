<template>
  <div class="container">
    <div class="home" v-if="userData"></div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style lang="scss">
.home {
  padding: 2rem 0;

  @include media-query {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 10px;
  }
}
</style>
