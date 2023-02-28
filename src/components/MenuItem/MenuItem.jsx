import '../MenuItem/MenuItem.scss';

export default function MenuItem(props) {
  return (
    <article className='product'>
      <button className='product__addtocart'>+</button>
      <section>
        <h3>{props.product.title}</h3>
        <p>{props.product.desc}</p>
      </section>
      <h3>{props.product.price}</h3>
    </article>
  );
}
