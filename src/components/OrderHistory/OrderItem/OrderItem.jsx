export default function OrderItem(props) {
  console.log(props);
  return (
    <article>
      <p>{props.product.total}</p>
      <p>{props.product.orderNr}</p>
      <p>{props.product.orderDate}</p>
    </article>
  );
}
