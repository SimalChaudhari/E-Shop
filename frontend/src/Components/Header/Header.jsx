import React, { useState } from 'react';
import { BsCart3 } from 'react-icons/bs';
import { LuUserCircle2 } from 'react-icons/lu';
import { HiMenu } from 'react-icons/hi';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("Headphones");
  const menus = [
    "All Electronics",
    "Smart TV",
    "Headphones",
    "Cell Phones",
    "Camera & Photo",
    "Portable Audio",
    "Computers",
    "iPad & Tablets",
    "Pc Gaming",
    "Smart Home",
    "Laptops",
  ];

  return (
    <>
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              {/* Logo */}
              <span className="text-2xl font-bold">Flipkart</span>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden">
              <HiMenu
                className="text-2xl"
                onClick={() => setMenuOpen(!menuOpen)}
              />
            </div>

            {/* Desktop Search Bar */}
            <div className="hidden md:flex flex-grow mx-4 bg-white">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="w-full px-4 py-2 rounded outline-none bg-white"
              />
            </div>

            {/* Desktop User Options */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center gap-2">
                <LuUserCircle2 className="text-xl mt-1" />
                <span>Login</span>
              </div>
              <div className="flex items-center gap-2">
                <BsCart3 className="text-xl mt-1" />
                <span>Cart</span>
              </div>
            </div>
          </nav>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden mt-4">
              <div className="flex flex-col items-start space-y-4">
                {/* Mobile Search Bar */}
                <input
                  type="text"
                  placeholder="Search for products, brands and more"
                  className="w-full px-4 py-2 rounded outline-none"
                />
                <div className="flex items-center gap-2">
                  <LuUserCircle2 className="text-xl" />
                  <span>Login</span>
                </div>
                <div className="flex items-center gap-2">
                  <BsCart3 className="text-xl" />
                  <span>Cart</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full overflow-x-auto scrollbar-hide snap-x snap-mandatory bg-white py-2 border-b-2">
        <div className="flex flex-nowrap space-x-4 sm:space-x-8 px-10 py-2 lg:justify-center bg-white">
          {menus.map((menu) => (
            <div
              key={menu}
              className={`cursor-pointer whitespace-nowrap snap-start bg-white ${selectedMenu === menu ? "border-b-2 border-black " : ""
                }`}
              onClick={() => setSelectedMenu(menu)}
            >
              {menu}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Header;
