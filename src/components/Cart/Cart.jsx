import { useState } from 'react';
import { useSelector } from 'react-redux';

import CartList from './CartList/CartList';

import './Cart.scss';

export default function Cart() {
  const [showCart, setShowCart] = useState(false);
  const cart = useSelector((state) => state.cart);

  const numberOfItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  const zIndex = showCart ? 2 : 1;

  return (
    <>
      {showCart && <div className='overlay' style={{ zIndex: zIndex }} />}

      <article className='cart' onClick={() => setShowCart(!showCart)} style={{ zIndex: zIndex }}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
          />
        </svg>

        <p className='cart__number-of-items'>{numberOfItems}</p>
      </article>

      <CartList items={cart} show={showCart} />
    </>
  );
}
