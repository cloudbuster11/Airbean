import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { addProduct, removeProduct, clearCart } from '../../../actions/cartActions';

import { postOrder } from '../../../helpers/api';

import './CartList.scss';

export default function CartList({ items, show }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const totalSum = items.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

  const placeOrder = async () => {
    const order = items.flatMap((item) =>
      Array(item.quantity).fill(0).map(() => {
        return { 'name': item.title, 'price': item.price, }
      })
    );

    const data = await postOrder(order);

    if (data.message === 'invalid-token') {
      navigate('/profile');
    }

    if (data.orderNr) {
      dispatch(clearCart());
      sessionStorage.setItem('currentOrder', data.orderNr);
      navigate('/status');
    }
  }

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

            <aside className='cart-list__buttons'>
              <button className='cart-list__icon-button' onClick={() => dispatch(addProduct(item))}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>

              <button className='cart-list__icon-button' onClick={() => dispatch(removeProduct(item))}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
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

      <button className='cart-list__button' onClick={() => items.length && placeOrder()}>Take my money!</button>
    </article>
  );
}
