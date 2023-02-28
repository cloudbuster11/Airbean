import { useState, useEffect } from 'react';
import OrderItem from './OrderItem/OrderItem';

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
    orderList = orderHistory.orderHistory.map((product) => {
      return <OrderItem product={product} />;
    });
  }

  return (
    <article>
      <h1>Orderhistorik</h1>
      {orderHistory.success === false ? orderHistory.message : orderList}
    </article>
  );
}

//
