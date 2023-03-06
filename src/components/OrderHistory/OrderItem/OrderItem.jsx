import './OrderItem.scss';

export default function OrderItem({ product }) {
  return (
    <article className='history'>
      <section className='history__left'>
        <p className='history__ordernr'>#{product.orderNr}</p>
        <p>total ordersumma</p>
      </section>
      <section className='history__right'>
        <p>{product.orderDate}</p>
        <p>
          {product.total}
          <span> kr</span>
        </p>
      </section>
    </article>
  );
}
