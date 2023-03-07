import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getMenu } from '../../helpers/api';
import { addProduct } from '../../actions/cartActions';

import Header from '../../components/Header/Header';
import Cart from '../../components/Cart/Cart';
import MenuItem from '../../components/MenuItem/MenuItem';
import Nav from '../../components/Nav/Nav';

import '../Menu/Menu.scss';

export default function Menu() {
  const [menuData, setMenuData] = useState([]);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addProduct(product));
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getMenu();

      if (data.success) {
        setMenuData(data.menu);
      }
    };

    getData();
  }, []);

  return (
    <main className='container menu'>
      <Header>
        <Nav />
        <Cart />
      </Header>

      <article className='menu__container'>
        <h1 className='menu__title'>Meny</h1>
        {menuData.map((product) =>
          <MenuItem key={product.id} product={product} handleAddToCart={handleAddToCart} />
        )}
      </article>
    </main>
  );
}
