import '../MenuItem/MenuItem.scss';

export default function MenuItem(props) {
  return (
    <article className='product'>
      <button className='product__addtocart' onClick={() => props.handleAddToCart(props.product.id)}>
        +
      </button>
      <section className='product__text'>
        <h3 className='product__title'>{props.product.title}</h3>
        <p className='product__desc'>{props.product.desc}</p>
      </section>
      <h3 className='product__price'>{props.product.price}</h3>
    </article>
  );
}
