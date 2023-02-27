function addProduct(productId) {
  return {
    type: 'cart/addProduct',
    payload: productId,
  };
}

function removeProduct(productId) {
  return {
    type: 'cart/removeProduct',
    payload: productId,
  };
}

export { addProduct, removeProduct };
