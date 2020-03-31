<template>
  <div id="app">
    <transition :name="slide">
      <keep-alive :include="/keep/">
        <router-view class="page-content"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data() {
    return {
      slide: ''
    }
  },
  mounted() {
    Vue.nextTick(() => {
      setTimeout(() => {
        this.slide = 'slide'
      }, 800)
    });
  }
}
</script>
