<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    window.addEventListener('resize', () => {
      this.$store.commit('setWindowWidth');
    })
  }
}
</script>

<style lang="scss">
  @import './assets/scss/app.scss'
</style>
