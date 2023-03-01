import { useDispatch } from 'react-redux';
import { removeProduct } from '../../../actions/cartActions';

import './CartList.scss';

export default function CartList({ items, show }) {
  const dispatch = useDispatch();
  const totalSum = items.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

  if (show) return (
    <article className='cart-list' style={{ zIndex: show && 5 }}>
      <h2>Din beställning</h2>
      <section className='cart-list__products'>
        {items.map((item) =>
          <article className='cart-list__product' key={item.id}>
            <aside>
              <h3 className='cart-list__title'>{item.title}</h3>
              <p className='cart-list__price'>{item.price * item.quantity} kr</p>
            </aside>

            <div className='cart-list__divider' />

            <aside>
              <p className='cart-list__quantity'>{item.quantity}</p>
            </aside>

            <aside>
              <button className='cart-list__remove' onClick={() => dispatch(removeProduct(item))}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </aside>
          </article>
        )}
      </section>

      <article className='cart-list__total'>
        <header>
          <h3>Total</h3>
          <div className='cart-list__divider cart-list__divider--total' />
          <h3>{totalSum} kr</h3>
        </header>

        <p>inkl moms + drönarleverans</p>
      </article>

      <button className='cart-list__button'>Take my money!</button>
    </article>
  );
}
