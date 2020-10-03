import React from 'react';
import {NavLink} from "react-router-dom";
import css from './Header.module.scss';

const Header = () => {
  return (
    <nav className={css.header}>
      <div className={css.logo}>
        <h1>Solutions</h1>
      </div>
      <ul className={css.headerLinks}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/myapps">MyApps</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li>
          <NavLink to="/login">
            <button className={css.loginButton}>Login</button>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header;
