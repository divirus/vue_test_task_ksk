<template>
  <div class="pickup-container">
    <div class="radio-button-group_wrapper" :class="{inline: windowWidth >= 1200 }">
      <div class="input-radio_wrapper">
          <input type="radio" v-model="selected" class="input-radio" value="1">
          <p>Пункт выдачи заказов Песчаная улица, дом 13</p>
      </div>
      <div class="input-radio_wrapper">
          <input type="radio" v-model="selected" class="input-radio" value="2">
          <p>Пункт выдачи Подсосенкий переулок, 11</p>
      </div>
    </div>
    <div class="map">
      <yandex-map 
        :settings="settings" 
        :zoom="zoom" 
        :style="mapStyle" 
        :coords="coords"
        :controls="['zoomControl']"
        :show-all-markers=true
        @map-was-initialized="mapCalibration">

        <ymap-marker
          v-for="(coordsValue, index) in markerCoords"
          :marker-id="index"
          :coords="coordsValue"
          :icon="markerIcon"
          :key="index"
          marker-type="placemark"
          cluster-name="1"
        ></ymap-marker>

      </yandex-map>
    </div>
    <button class="button_send pickup js-send" v-on:click="send">Отправить</button>
  </div>
</template>

<script>
import { loadYmap, yandexMap, ymapMarker } from 'vue-yandex-maps'

export default {
  name: 'Pickup',
  components: { loadYmap, yandexMap, ymapMarker },
  data () {
    return {
      coords: [55.7522200,37.6155600],
      markerCoords: [
        [55.1, 37.1],
        [56.2, 38.2],
        [57.3, 39.3],
        [59.4, 40.3]
      ],
      bounds: [],
      zoom: 9,
      mapStyle: "width: 100%; max-width: 100%; height: 60vh;",
      behaviors: ["disable('scrollZoom')"],
      settings: {
        apiKey: '',
        lang: 'ru_RU',
        coordorder: 'latlong',
        version: '2.1'
      },
      markerIcon: {
        layout: 'default#imageWithContent',
        imageHref: '../../../src/icons/pin.png',
        imageSize: [40, 40],
        imageOffset: [0, 0],
      },
      selected: ''
    }
  },
  computed: {
    windowWidth() {
      return this.$store.state.windowWidth;
    },
    isTouchscreen() {
      return matchMedia('(hover: none), (pointer: coarse)').matches;
    }
  },
  methods: {
    send () {
      console.log('Done')
    },
    mapCalibration(map) {
      if (this.isTouchscreen) { 
        map.behaviors.disable('multiTouch');
        map.behaviors.disable('drag');
        map.behaviors.disable('scrollZoom');
      }
    }
  }
}
</script>

<style lang="scss">
    @import '../../assets/scss/pickup.scss';
</style>
