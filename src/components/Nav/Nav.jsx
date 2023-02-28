import openNav from '../../assets/navicon.svg';
import closeNav from '../../assets/close-icon.svg';
import './Nav.scss';
import { useRef } from 'react';

export default function Nav() {

  const navRef = useRef();

  function showNav() {
    navRef.current.classList.toggle('show-nav');
  }

  return (
    <header className='nav__header'>
      <nav ref={ navRef }>
        <h2>Meny</h2>
        <h2>Vårt Kaffe</h2>
        <h2>Min profil</h2>
        <h2>Orderstatus</h2>
        <h2>Orderhistorik</h2>
      </nav>

      <button className='nav__btn nav__btn--open' onClick={ showNav }>
          <img src={ openNav } />
      </button>

    </header>
  );
}
