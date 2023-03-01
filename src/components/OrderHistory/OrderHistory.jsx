import { useState, useEffect } from 'react';
import OrderItem from './OrderItem/OrderItem';

import profileImg from '../../assets/profile_img.svg';
import './OrderHistory.scss';

export default function OrderHistory() {
  const [orderHistory, setOrderHistory] = useState();

  console.log(orderHistory);
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
        console.log(data);
        console.log(sessionStorage.token);
        setOrderHistory(data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  if (orderHistory === undefined) return;

  let orderList = {};
  if (orderHistory.success === true) {
    orderList = orderHistory.orderHistory.map((product, id) => {
      return <OrderItem key={id} product={product} />;
    });
  }

  let totalSum = orderHistory.orderHistory.reduce(function (previousValue, currentValue) {
    return {
      total: previousValue.total + currentValue.total,
    };
  });

  return (
    <main className='orderhistory'>
      <img className='orderhistory__profile' src={profileImg}></img>
      {/* <h3>{data.name}</h3> */}
      <h3 className='orderhistory__name'>Sixten Kaffelövér</h3>
      <article className='orderhistory__stats'>
        <h3 className='orderhistory__subtitle'>Orderhistorik</h3>
        {orderHistory.success === false ? orderHistory.message : orderList}
        <section className='orderhistory__total'>
          <p>Totalt spenderat</p>
          <p>
            {totalSum.total}
            <span> kr</span>
          </p>
        </section>
      </article>
    </main>
  );
}

//
