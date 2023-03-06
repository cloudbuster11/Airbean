import { useState, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.scss';

export default function Nav() {
  const [show, setShow] = useState(false);

  const links = [
    { title: 'Meny', to: '/menu' },
    { title: 'Vårt kaffe', to: '/about' },
    { title: 'Min Profil', to: '/profile' },
    { title: 'Orderstatus', to: '/status' },
  ];

  return (
    <>
      <nav className={'nav ' + (show ? 'nav--show-nav' : '')}>
        {links.map((link, i) =>
          <Fragment key={`link-${i}-${link.to}`} >
            <NavLink to={link.to} className={({ isActive }) => (isActive ? 'nav__active' : 'nav__inactive')}>
              <h2>{link.title}</h2>
            </NavLink>

            {i !== links.length - 1 && <hr className='nav__solid' />}
          </Fragment>
        )}
      </nav>

      <button className='nav__btn' onClick={() => setShow(!show)}>
        {show
          ? <svg width="52" height="52" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
            y="0px" viewBox="0 0 62 64" xmlSpace="preserve">
            <path d="M35.2,32L59.6,7.6c0.9-0.9,0.9-2.3,0-3.2c-0.9-0.9-2.3-0.9-3.2,0L32,28.8L7.6,4.4c-0.9-0.9-2.3-0.9-3.2,0
            c-0.9,0.9-0.9,2.3,0,3.2L28.8,32L4.4,56.4c-0.9,0.9-0.9,2.3,0,3.2c0.4,0.4,1,0.7,1.6,0.7c0.6,0,1.2-0.2,1.6-0.7L32,35.2l24.4,24.4
            c0.4,0.4,1,0.7,1.6,0.7c0.6,0,1.2-0.2,1.6-0.7c0.9-0.9,0.9-2.3,0-3.2L35.2,32z"/>
          </svg>

          : <svg width="52" height="52" version="1.1" id="lni_lni-menu" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
            y="0px" viewBox="0 0 64 64" xmlSpace="preserve">
            <g>
              <path d="M60,29.8H4c-1.2,0-2.3,1-2.3,2.3c0,1.2,1,2.3,2.3,2.3h56c1.2,0,2.3-1,2.3-2.3C62.3,30.8,61.2,29.8,60,29.8z" />
              <path d="M60,46.8H4c-1.2,0-2.3,1-2.3,2.3s1,2.3,2.3,2.3h56c1.2,0,2.3-1,2.3-2.3S61.2,46.8,60,46.8z" />
              <path d="M4,17.2h56c1.2,0,2.3-1,2.3-2.3s-1-2.3-2.3-2.3H4c-1.2,0-2.3,1-2.3,2.3S2.8,17.2,4,17.2z" />
            </g>
          </svg>
        }
      </button>
    </>
  );
}
