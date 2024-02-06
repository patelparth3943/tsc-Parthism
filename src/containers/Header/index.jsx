import React from 'react';
import PersonIcon from '../../../public/icons/person.svg';
import SearchIcon from '../../../public/icons/search.svg';
import ShoppingBasketIcon from '../../../public/icons/shopping_basket.svg';

function Header() {
      return (
            <header className="flex gap-10 items-center px-container bg-yellow-50 py-5">
                  <a href="#">
                        <img
                              src="https://template.hasthemes.com/brancy/brancy/assets/images/logo.webp"
                              alt="logo"
                        />
                  </a>
                  <nav className="flex-1 ">
                        <ul className="gap-10 hidden md:flex">
                              <li>
                                    <a href="#home">Home</a>
                              </li>
                              <li>
                                    <a href="#about">About</a>
                              </li>
                              <li>
                                    <a href="#shop">Shop</a>
                              </li>
                              <li>
                                    <a href="#pages">Pages</a>
                              </li>
                              <li>
                                    <a href="#blogs">Blogs</a>
                              </li>
                        </ul>
                  </nav>
                  <div className="flex gap-6">
                        <button type="button">
                              <PersonIcon height={40} width={40} />
                        </button>
                        <button type="button">
                              <SearchIcon height={40} width={40} />
                        </button>
                        <button type="button">
                              <ShoppingBasketIcon height={40} width={40} />
                        </button>
                  </div>
            </header>
      );
}

export default Header;