import './CartList.scss';

export default function CartList({ items, show }) {
  if (show) return (
    <article className='cart-list'>
      {items.map((item) =>
        <p key={item.id}>
          {item.title}
        </p>
      )}
    </article>
  );
}
