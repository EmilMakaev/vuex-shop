<template>
  <div>
    <h1>Product List</h1>
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
        <p>Price: {{product.price | currency}}</p>
        <p>Left: <span class="left-products">{{product.inventory}}</span> pieces </p>
        <button 
          :disabled="!productIsInStock(product)"
          v-on:click="addProductToCart(product)"
          class="btn">Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  computed: {
    ...mapState({
      products: 'products'
    }),
    ...mapGetters({
      total: 'cartTotal',
      productIsInStock: 'productIsInStock',
      cartFromProducts: 'cartProducts',
    })
  },
  methods: {
    ...mapActions({
    fetchProducts: 'fetchProducts',
    addProductToCart: 'addProductToCart'
    })
  },
  created () {
    this.fetchProducts();
    /* if (localStorage.getItem('cartInLocalStorage')) {
        this.$store.state.cart = JSON.parse(localStorage.getItem('cartInLocalStorage'));
      } else {
        localStorage.removeItem('cartInLocalStorage');
        this.fetchProducts();
      } */
    }


    /* if (localStorage.getItem('cartInLocalStorage')) {
      try {
        this.$store.getters.availableProducts = JSON.parse(localStorage.getItem('cartInLocalStorage'));
      } catch (e) {
        // localStorage.removeItem('cartInLocalStorage');
        // this.fetchProducts();
      }
    }
    console.log(this.$store.getters.availableProducts);
    console.log(this.$store.getters.cartProducts);
    }
    */
    
  
}
</script>