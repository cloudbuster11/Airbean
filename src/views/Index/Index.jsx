import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { addProduct, removeProduct } from '../../actions/cartActions'
import Cart from '../../components/Cart/Cart';

import '../../style.scss';

export default function Index() {
  const [menuData, setMenuData] = useState([]);
  const dispatch = useDispatch();

  const click = (productId) => {
    dispatch(addProduct(productId));
  }

  const click2 = (productId) => {
    dispatch(removeProduct(productId));
  }

  useEffect(() => {
    const getData = async () => {
      const url = 'https://airbean.awesomo.dev/api/beans/';

      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setMenuData(data.menu);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  const test = menuData.map((product) => {
    return (
      <article key={product.id}>
        <button onClick={() => click(product)}>add product {product.id}</button>
        <button onClick={() => click2(product)}>remove product {product.id}</button>
      </article>
    )
  });

  return (
    <article className='test'>
      <Cart />

      <h1>test</h1>
      {test}
    </article>
  );
}
