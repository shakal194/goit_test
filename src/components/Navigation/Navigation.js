// import Container from 'components/Container';
import React from 'react';
import { NavLink } from 'react-router-dom';
import defaultLogo from '../../images/book.jpg';
import s from './Navigation.module.css';

export const styleLink = {
  display: 'inline-block',
  textDecoration: 'none',
  padding: 12,
  fontWeight: 700,
  color: 'rgb(28, 15, 2)',
  fontSize: 30,
};
export const activeStyleLink = {
  display: 'inline-block',
  textDecoration: 'none',
  padding: 12,
  fontWeight: 700,
  color: 'rgb(180, 47, 7)',
  // color: '#3c020b',
  fontSize: 30,
};
export const Navigation = () => {
  const logo = defaultLogo;
  return (
    <nav className={s.nav}>
      <NavLink to="/">
        <img src={logo} alt="logo" width="60" />
      </NavLink>

      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyleLink : styleLink)}
      >
        Phone book
      </NavLink>
    </nav>
  );
};
