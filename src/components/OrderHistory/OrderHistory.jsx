import { useState, useEffect } from 'react';

import OrderItem from './OrderItem/OrderItem';
import OrderTotal from './OrderItem/OrderTotal/OrderTotal';
import profileImg from '../../assets/profile_img.svg';
import './OrderHistory.scss';

export default function OrderHistory() {
  const [orderHistory, setOrderHistory] = useState();

  useEffect(() => {
    const BASEURL = 'https://airbean.awesomo.dev/api/user';
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionStorage.token}`,
      },
    };

    const checkToken = async () => {
      try {
        const resp = await fetch(`${BASEURL}/status`, requestOptions);
        const data = await resp.json();

        if (data.success) getData();
        else if (!data.success) {
          sessionStorage.clear();
          window.location.reload(true);
        }
      } catch (err) {
        console.error(err);
      }
    };

    checkToken();

    const getData = async () => {
      try {
        const resp = await fetch(`${BASEURL}/history`, requestOptions);
        const data = await resp.json();
        setOrderHistory(data);
      } catch (err) {
        console.error(err);
      }
    };
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
      <h3 className='orderhistory__name'>{sessionStorage.getItem('username')}</h3>
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
