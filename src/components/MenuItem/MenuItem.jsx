export default function MenuItem(props) {
  return (
    <article>
      <button>+</button>
      <section>
        <h3>{props.product.title}</h3>
        <p>{props.product.desc}</p>
      </section>
      <h3>{props.product.price}</h3>
    </article>
  );
}
