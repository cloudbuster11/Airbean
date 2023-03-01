import { useState, useEffect } from 'react';

import OrderItem from './OrderItem/OrderItem';
import OrderTotal from './OrderItem/OrderTotal/OrderTotal';
import profileImg from '../../assets/profile_img.svg';
import './OrderHistory.scss';

export default function OrderHistory() {
  const [orderHistory, setOrderHistory] = useState();

  useEffect(() => {
    const getData = async () => {
      const url = 'https://airbean.awesomo.dev/api/user/history';
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.token}`,
        },
      };

      try {
        const resp = await fetch(url, requestOptions);
        const data = await resp.json();
        setOrderHistory(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  let orderList = {};
  if (orderHistory === undefined) return;
  else if (orderHistory.success) {
    orderList = orderHistory.orderHistory.map((product, id) => {
      return <OrderItem key={id} product={product} />;
    });
  }

  return (
    <main className='orderhistory'>
      <img className='orderhistory__profile' src={profileImg}></img>
      <h3 className='orderhistory__name'>Sixten Kaffelövér</h3>
      <article className='orderhistory__stats'>
        <h3 className='orderhistory__subtitle'>Orderhistorik</h3>
        {orderHistory.success ? orderList : <p>Inga beställningar finns för den här användaren.</p>}
        <section className='orderhistory__total'>
          {orderHistory.success ? <OrderTotal orderHistory={orderHistory} /> : null}
        </section>
      </article>
    </main>
  );
}
