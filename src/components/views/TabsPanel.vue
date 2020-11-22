<template>
  <div class="tabs_container">
    <ul class="nav nav-tabs nav-justified">
      <li class="nav-item">
        <a class="nav-link" @click.prevent="setActive('delivery')" :class="{ active: isActive('delivery') }" href="#delivery">Доставка</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="setActive('pickup')" :class="{ active: isActive('pickup') }" href="#pickup">Самовывоз</a>
      </li>
    </ul>
    <div class="tab-content py-3" id="myTabContent">
      <div class="tab-pane fade" :class="{ 'active show': isActive('delivery') }" id="delivery">
        <Delivery />
      </div>
      <div class="tab-pane fade" :class="{ 'active show': isActive('pickup') }" id="pickup">
        <Pickup />
      </div>
    </div>
  </div>
</template>

<script>
import Delivery from './Delivery.vue'
import Pickup from './Pickup.vue'

export default {
  name: 'TabsPanel',
  components: {
    Delivery,
    Pickup
  },
  data () {
    return {
      activeItem: 'delivery'
    }
  },
  methods: {
    isActive (menuItem) {
      return this.activeItem === menuItem
    },
    setActive (menuItem) {
      this.activeItem = menuItem
    }
  }
}
</script>

<style lang="scss">
  @import '../../assets/scss/tabspanel.scss';
</style>
