function addProduct(product) {
  return {
    type: 'cart/addProduct',
    payload: product,
  };
}

function removeProduct(product) {
  return {
    type: 'cart/removeProduct',
    payload: product,
  };
}

export { addProduct, removeProduct };
