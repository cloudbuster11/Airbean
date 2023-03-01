import openNav from '../../assets/nav_icon.svg';
import closeNav from '../../assets/close_icon.svg';
import './Nav.scss';
import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  const [navIcon, setNavIcon] = useState(openNav);

  const navRef = useRef();

  function showNav() {
    navRef.current.classList.toggle('show-nav');
    if (navIcon === openNav) {
      setNavIcon(closeNav)
    } else{
      setNavIcon(openNav)
    }
  }


  return (
    <header className='nav__header'>
      <nav ref={ navRef }>

      <NavLink to='/menu' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
        <h2>Meny</h2>
      </NavLink>

        <hr className="solid"/>

        <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
          <h2>Vårt Kaffe</h2>
        </NavLink>

        <hr className="solid"/>

      <NavLink to='/profile' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
        <h2>Min profil</h2>
      </NavLink>

        <hr className="solid"/>

      <NavLink to='/status' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
        <h2>Orderstatus</h2>
      </NavLink>

        <hr className="solid"/>

      <NavLink to='/profile' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
        <h2>Orderhistorik</h2>
      </NavLink>
      </nav>

      <img src={ navIcon } className='nav__btn' onClick={ showNav } />

    </header>
  );
}