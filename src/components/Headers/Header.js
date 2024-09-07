import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="header flex text-white">
      <nav className="nav nav--tours">
        <a href="/overview.html" className="nav__el">
          All tours
        </a>
      </nav>
      <div className="header__logo">
        <img src="/img/logo-white.png" alt="Natours logo" />
      </div>

      <div className="flex gap-6">
        <nav>
          <ui className="flex gap-10 list-none">
            <li>
              <Link to="/login">
               Login
              </Link>
            </li>
            <li>
              <Link to="signup">
                Signup
              </Link>
            </li>
          </ui>
        </nav>
      </div>
    </header>
  );
}

export default Header