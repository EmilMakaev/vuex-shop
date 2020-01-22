<template>
  <footer class="footer">
    <div class="bottom-panel">
      <div class="panel">
        <router-link to="/">
          <email :size="30" />
          <p class="cart">Email</p>
        </router-link>
      </div>
      <div class="panel">
        <router-link to="/">
          <phone-in-talk :size="30" />
          <p class="cart">Phone</p>
        </router-link>
      </div>
      <div class="panel">
        <router-link to="/cart">
          <cart-plus :size="30" />
          <span class="panel__notification">{{cartItemCount}}</span>
          <p class="cart">Cart</p>
        </router-link>
      </div>
      <div class="panel">
        <router-link to="/">
          <map-marker :size="30" />
          <p class="cart">Map</p>
        </router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    cartItemCount() {
      return this.$store.getters.lengthOfCart || 0
    }
  }
}
</script>
