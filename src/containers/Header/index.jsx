import React from "react";
import PersonIcon from "../../../public/icons/person.svg";
import SearchIcon from "../../../public/icons/search.svg";
import ShoppingBasketIcon from "../../../public/icons/shopping_basket.svg";

function Header() {
  return (
    <header className="fixed z-50 flex items-center justify-between w-full bg-white/30 backdrop-blur-sm">
      <div className="flex justify-between gap-16 mx-3 my-2">
        <a href="#" >
          < img
            src="https://template.hasthemes.com/brancy/brancy/assets/images/logo.webp"
            alt="logo"

          />
        </a >
      </div>
      <nav className="flex-1 ">
        <ul className="gap-10 hidden md:flex">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/pages">Pages</a>
          </li>
          <li>
            <a href="/blogs">Blogs</a>
          </li>
        </ul>
      </nav>
      <div className="flex gap-6  p-5 ">
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
    </header >
  );
}

export default Header;
