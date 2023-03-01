import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import openNav from '../../assets/navicon.svg';
import closeNav from '../../assets/close-icon.svg';

import './Nav.scss';

export default function Nav() {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav className={'nav ' + (show ? 'nav--show-nav' : '')}>

        <NavLink to='/menu' className={({ isActive }) => (isActive ? 'nav__active' : 'nav__inactive')}>
          <h2>Meny</h2>
        </NavLink>

        <hr className="nav__solid" />

        <NavLink to='/about' className={({ isActive }) => (isActive ? 'nav__active' : 'nav__inactive')}>
          <h2>Vårt Kaffe</h2>
        </NavLink>

        <hr className="nav__solid" />

        <NavLink to='/profile' className={({ isActive }) => (isActive ? 'nav__active' : 'nav__inactive')}>
          <h2>Min profil</h2>
        </NavLink>

        <hr className="solinav__solidd" />

        <NavLink to='/status' className={({ isActive }) => (isActive ? 'nav__active' : 'nav__inactive')}>
          <h2>Orderstatus</h2>
        </NavLink>

        <hr className="nav__solid" />

        <NavLink to='/profile' className={({ isActive }) => (isActive ? 'nav__active' : 'nav__inactive')}>
          <h2>Orderhistorik</h2>
        </NavLink>
      </nav>

      <img src={show ? closeNav : openNav} className='nav__btn' onClick={() => setShow(!show)} />
    </>
  );
}
