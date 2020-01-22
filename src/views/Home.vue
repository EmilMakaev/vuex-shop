<template>
  <div>
    <Goods />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import Goods from '@/components/Goods.vue'

export default {
  name: 'home',
  components: {
    Footer,
    Goods
  }
}
</script>
