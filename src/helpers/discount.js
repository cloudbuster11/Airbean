import discounts from '../assets/discounts.json';

function queryDiscount(cart, combination) {
  return combination.map((query) =>
    cart.some((item) => item.id === query)
  );
}

function queryQuantities(cart, combination) {
  return combination
    .flatMap((query) => cart.filter((item) => item.id === query))
    .map((item) => item.quantity)
}

function discountQuantity(quantities) {
  const quantity = Math.min(...quantities) % Math.max(...quantities)
  return quantity ? quantity : Math.min(...quantities);
}

function applyDiscounts(cart) {
  const discountedCart = discounts.flatMap((discount) => {
    const query = queryDiscount(cart, discount.combination)
      .every((q) => q === true);

    if (query) {
      return {
        id: `discount-${discount.id}`,
        type: 'discount',
        title: discount.title,
        reduction: discount.reduction,
        quantity: discountQuantity(
          queryQuantities(cart, discount.combination)
        ),
      }
    }
  }).filter((item) => item);

  return [...cart, ...discountedCart];
}

export { applyDiscounts }
