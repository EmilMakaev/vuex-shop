import axios from 'axios';

export default {
  fetchProducts({
    commit
  }) {
    return new Promise((resolve, reject) => {
      axios.get('/products.json')
        .then(products => {
          commit('setProducts', products.data.products);
          resolve();
        });
    });
  },
  addProductToCart({
    state,
    getters,
    commit
  }, product) {
    if (getters.productIsInStock(product)) {
      // find cartItem
      const cartItem = state.cart.find(item => item.id === product.id);
      if (!cartItem) {
        commit('pushProductToCart', product.id);
      } else {
        commit('incrementItemQuantity', cartItem);
      }
      commit('decrementProductInventory', product);
    }
  },
  removProductFromCart(context, product) {
    context.commit('deleteProductFromCart', product);
  }
};