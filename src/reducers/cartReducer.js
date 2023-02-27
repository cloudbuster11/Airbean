const initalState = {
  cart: {},
};

function cartReducer(state = initalState, action) {
  switch (action.type) {
    case 'cart/addProduct':
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload]: (state.cart[action.payload] ?? 0) + 1,
        }
      };

    case 'cart/removeProduct':
      if (state.cart[action.payload]) {
        const { [action.payload]: quantity, ...filtered } = state.cart;

        return {
          ...state,
          cart: quantity > 1
            ? { ...state.cart, [action.payload]: state.cart[action.payload] - 1, }
            : { ...filtered },
        };
      }

    default:
      return state;
  }
}

export { cartReducer };
