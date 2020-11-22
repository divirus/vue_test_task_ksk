<template>
  <div class="delivery-container">
    <div class="input-wrapper" :class="{'first-line': windowWidth >= 1200}">
        <p>ФИО</p>
        <input class="input-text" v-model="fio.value" placeholder="Только кириллица" @keydown="validFio" :class="{ error: this.fio.status }">
    </div>
    <div class="input-wrapper" :class="{'first-line': windowWidth >= 1200}">
        <p>Телефон</p>
        <the-mask class="input-text" v-model="phoneNumber.value" placeholder="+7(___)___-__-__" :mask="'+7(###)###-##-##'"  :class="{ error: this.phoneNumber.status }"/>
    </div>
    <div class="input-wrapper">
        <p>Адрес доставки</p>
        <input class="input-text" v-model="address.value" placeholder="Город, улица, дом" :class="{ error: this.address.status }"> 
    </div>
    <div class="input-wrapper">
        <p>Комментарий</p>
        <textarea class="text-area_commentary" v-model="commentary.value" :class="{ error: this.commentary.status }" />
    </div>
    <button class="button_send delivery js-send" v-on:click="send">Отправить</button>
  </div>
</template>

<script>
import {TheMask} from 'vue-the-mask'
import {KeyCodes} from '../../utils/KeyCodes.js'

export default {
  name: 'Delivery',
  components: {
      TheMask
  },
  data () {
    return {
      fio: {value: '', status: false},
      phoneNumber: {value: '', status: false},
      address: {value: '', status: false},
      commentary: {value: '', status: false},
    }
  },
  computed: {
    windowWidth() {
      return this.$store.state.windowWidth;
    }
  },
  methods: {
    send () {
      this.validateInputFields();
      console.log('Отправить')
    },
    validateInputFields () {
      this.fio.status = this.nullOrEmpty(this.fio.value);
      this.phoneNumber.status = this.nullOrEmpty(this.phoneNumber.value);
      this.address.status = this.nullOrEmpty(this.address.value);
      this.commentary.status = this.nullOrEmpty(this.commentary.value);
    },
    validFio (event) {
      const letter = event.key;
      const keycode = event.keyCode;

      if(/[а-яё]+/i.test(letter)) {
          return;
      };

      if (this.serviceKeys(keycode)) {
          return;
      }

      event.preventDefault();
    },
    serviceKeys (key) {
      return Object.values(KeyCodes).includes(key);
    },
    nullOrEmpty (inputValue) {
      return !inputValue && inputValue === '';
    }
  }
}
</script>

<style lang="scss">
    @import '../../assets/scss/delivery.scss';
</style>
