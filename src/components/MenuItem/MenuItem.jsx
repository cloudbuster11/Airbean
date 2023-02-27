export default function MenuItem(props) {
  return (
    <article>
      <button>+</button>
      <h3>{props.product.title}</h3>
      <p>{props.product.desc}</p>
      <h3>{props.product.price}</h3>
    </article>
  );
}
