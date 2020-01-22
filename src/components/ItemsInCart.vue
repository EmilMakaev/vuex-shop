<template>
  <div>
    <h1>Shopping Cart</h1>
    <h2>Your purchase amount: <span class="price">{{total | currency}}</span></h2>
    <div class="goods">
      <div
        class="good" 
        v-for="product in products" 
      >
        <img class="img" v-bind:src="product.image" />
        <p class="good-description">{{product.description}}</p>
        <p>Bend: {{product.bend}}</p>
        <p>Thickness: {{product.thickness}}</p>
        <p>Length: {{product.length}}</p>
        <!-- <p>Length: {{product.quantity}}</p> -->
        <button v-on:click="removeItem(product)" class="btn">Remove the item</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: {
    ...mapGetters({
      products: 'cartProducts',
      total: 'cartTotal'
    })
  },
  methods: {
    ...mapActions({
      removeItem: 'removProductFromCart'
    })
  }
}
</script>