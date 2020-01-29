<template>
  <div id="app">
    <div id="nav">
      <router-link class="nav-component" to="/">Home</router-link>|
      <router-link class="nav-component" to="/cart">Cart</router-link>
    </div>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showModal: true
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/global.scss';
</style>
