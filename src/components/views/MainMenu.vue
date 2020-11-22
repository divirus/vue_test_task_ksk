<template>
  <div class="main">
    <p class="main-menu_title">Выберите способ доставки</p>
    <div class="main-menu_tabs-wrapper" v-if="windowWidth >= 1200">
      <TabsPanel />
    </div>
    <div class="main-menu_spoilers-wrapper" v-if="windowWidth < 1200">
      <SpoilersPanel />
    </div>
  </div>
</template>

<script>
import TabsPanel from './TabsPanel.vue'
import SpoilersPanel from './SpoilersPanel.vue'

export default {
  name: 'MainMenu',
  components: {
    TabsPanel,
    SpoilersPanel
  },
  data () {
    return {
      activeTab: ''
    }
  },
  computed: {
    windowWidth() {
      return this.$store.state.windowWidth;
    }
  }
}
</script>

<style lang="scss">
  @import '../../assets/scss/mainmenu.scss'
</style>
