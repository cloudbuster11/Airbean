import './CartList.scss';

export default function CartList({ items, show }) {
  return (
    <article className={"cart-list" + (!show ? " hidden" : "")}>
      {items.map((item) =>
        <p key={item.id}>
          {item.title}
        </p>
      )}
    </article>
  );
}
