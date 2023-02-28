const initalState = {
  cart: {},
};

function cartReducer(state = initalState, action) {
  const product = action.payload;

  switch (action.type) {
    case 'cart/addProduct':
      return {
        ...state,
        cart: {
          ...state.cart,
          [product.id]: {
            ...product,
            quantity: (state.cart[product.id]?.quantity ?? 0) + 1,
          },
        },
      };

    case 'cart/removeProduct':
      if (state.cart[product.id]?.quantity) {
        const { [product.id]: _, ...filtered } = state.cart;
        const { quantity } = state.cart[product.id];

        return {
          ...state,
          cart: quantity > 1
            ? { ...state.cart, [product.id]: { ...product, quantity: quantity - 1 } }
            : filtered,
        }
      }

    default:
      return state;
  }
}

export { cartReducer };
