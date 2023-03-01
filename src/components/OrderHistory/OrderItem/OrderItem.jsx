import './OrderItem.scss';

export default function OrderItem(props) {
  console.log(props);
  return (
    <article className='history'>
      <section className='history__left'>
        <p>#{props.product.orderNr}</p>
        <p>total ordersumma</p>
      </section>
      <section className='history__right'>
        <p>{props.product.orderDate}</p>
        <p>{props.product.total}</p>
      </section>
    </article>
  );
}
