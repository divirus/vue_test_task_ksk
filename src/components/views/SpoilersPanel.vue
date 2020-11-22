<template>
<div class="accordion" role="tablist">
  <b-card no-body class="mb-1">
    <b-card-header header-tag="header" class="p-1" role="tab">
      <b-button block v-b-toggle.accordion-1 variant="info">Доставка</b-button>
      <div class="arrow" />
    </b-card-header>
    <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
      <b-card-body>
        <Delivery />
      </b-card-body>
    </b-collapse>
  </b-card>

  <b-card no-body class="mb-1">
    <b-card-header header-tag="header" class="p-1" role="tab">
      <b-button block v-b-toggle.accordion-2 variant="info">Самовывоз</b-button>
      <div class="arrow" />
    </b-card-header>
    <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
      <b-card-body>
        <Pickup />
      </b-card-body>
    </b-collapse>
  </b-card>
</div>
</template>

<script>
import Delivery from './Delivery.vue'
import Pickup from './Pickup.vue'

export default {
  name: 'SpoilersPanel',
  components: {
    Delivery,
    Pickup
  }
}
</script>

<style lang="scss">
  @import '../../assets/scss/spoilerspanel.scss';
</style>
