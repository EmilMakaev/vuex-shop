export default {
  setProducts(state, products) {
    state.products = products;
  },
  pushProductToCart(state, productId) {
    state.cart.push({
      id: productId,
      quantity: 1
    });
  },
  incrementItemQuantity(state, cartItem) {
    cartItem.quantity++;
  },
  decrementProductInventory(state, product) {
    product.inventory--;
  },
  deleteProductFromCart(state, payload) {
    state.cart.splice(state.cart.indexOf(item => item.id === payload.id), 1);

    /* let element = state.cart.find(item => item.id === payload.id);
    if (element.quantity > 1) {
      element.quantity--;
    } else {
      state.cart.splice(element, 1);
    } */
  }
};