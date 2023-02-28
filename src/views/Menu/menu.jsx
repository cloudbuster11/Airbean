import { useEffect, useState } from 'react';
import MenuItem from '../../components/MenuItem/MenuItem';
import '../Menu/Menu.scss';

export default function Menu() {
  const [menuData, setMenuData] = useState([]);

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
    return <MenuItem key={product.id} product={product} />;
  });

  return (
    <article className='menu__container'>
      <h1 className='menu__title'>Meny</h1>
      {allProductsElem}
    </article>
  );
}
