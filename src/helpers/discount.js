import discounts from '../assets/discounts.json';

function matchDiscount(cart, combination) {
  return combination
    .map((query) => cart.some((item) => item.id === query))
    .every((match) => match === true);
}

function discountQuantity(cart, combination) {
  const quantities = combination
    .map((query) => cart.find((item) => item.id === query).quantity);

  return Math.min(...quantities);
}

function getDiscounts(cart) {
  return discounts.map((discount) => {
    const isMatch = matchDiscount(cart, discount.combination);

    if (isMatch) {
      return {
        id: `discount-${discount.id}`,
        title: discount.title,
        reduction: discount.reduction,
        quantity: discountQuantity(cart, discount.combination),
      }
    }
  }).filter((item) => item);
}

export { getDiscounts };
