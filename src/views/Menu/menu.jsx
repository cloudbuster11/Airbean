import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addProduct, removeProduct } from '../../actions/cartActions';
import MenuItem from '../../components/MenuItem/MenuItem';
import '../Menu/Menu.scss';

export default function Menu() {
  const [menuData, setMenuData] = useState([]);

  const dispatch = useDispatch();

  const handleAddToCart = (productId) => {
    console.log('add ' + productId);
    dispatch(addProduct(productId));
  };

  const handleRemoveFromCart = (productId) => {
    console.log('rem ' + productId);
    dispatch(removeProduct(productId));
  };

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

  const allProductsElem = menuData.map((product) => {
    return <MenuItem key={product.id} product={product} handleAddToCart={handleAddToCart} />;
  });

  return (
    <article className='menu__container'>
      <h1 className='menu__title'>Meny</h1>
      {allProductsElem}
    </article>
  );
}