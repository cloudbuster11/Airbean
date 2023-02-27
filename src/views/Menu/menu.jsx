import { useEffect, useState } from 'react';
import MenuItem from '../../components/MenuItem/MenuItem';

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

  const menuList = menuData.map((product) => {
    return <MenuItem key={product.id} product={product} />;
  });

  return (
    <article>
      <h1>Meny</h1>
      {menuList}
    </article>
  );
}
