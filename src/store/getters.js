export default {
  availableProducts(state, getters) {
    return state.products.filter(product => product.inventory > 0);
  },
  cartProducts(state) {
    return state.cart.map(cartItem => {
      const product = state.products.find(product => product.id === cartItem.id);
      return {
        id: product.id,
        price: product.price,
        quantity: cartItem.quantity,
        image: product.image,
        description: product.description,
        bend: product.bend,
        thickness: product.thickness,
        length: product.length
      };
    });
  },
  /* cartTotal(state, getters) {
    return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0);
  }, */
  cartTotal(state, getters) {
    let total = 0;
    getters.cartProducts.forEach(product => {
      total += product.price * product.quantity;
    });
    return total;
  },
  lengthOfCart(state) {
    return state.cart.reduce((length, product) => length + product.quantity, 0);
  },
  productIsInStock() {
    return (product) => {
      return product.inventory > 0;
    };
  }
};