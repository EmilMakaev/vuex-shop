<template>
  <div>
    <ItemsInCart />
    <Footer />
  </div>
</template>

<script>
import ItemsInCart from '@/components/ItemsInCart.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'cart',
  components: {
    ItemsInCart,
    Footer
  }
}
</script>
