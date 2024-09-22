import React, { useEffect, useState } from "react";
import profileIcon from "../../assets/profile-icon1.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  const [click, setClick] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loggedInNavLinks = [{ item: 'Your Profile', to: '/profile' }, { item: 'Settings', to: '/settings' }, { item: 'Sign Out', to: '/signout' }];

  const loggedOutNavLinks = [{ item: 'Sign In', to: '/login' }, { item: 'Sign Up', to: '/signup' }]

  const navLinks = [
    {
      item: 'Home',
      to: ''
    },
    {
      item: 'Shop',
      to: '/shop'
    },
    {
      item: 'Contact Us',
      to: '/contactus'
    },
    {
      item: 'Blog',
      to: '/blog'
    }
  ]

  useEffect(() => {
    let loginToken = sessionStorage.getItem('token');
    if (loginToken && loginToken != '') {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [isMenuOpen])


  return (
    <nav style={{ backgroundColor: "#cbd5e1" }}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-red-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto" src={logo} />
              <h3 className="text-lg m-2">E-Comm React</h3>
            </div>
            <div className="hidden sm:ml-6 sm:block m-">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

                {navLinks.map((lnk, index) => {
                  return (
                    <Link
                      key={index}
                      to={lnk.to}
                      className="rounded-md px-3 py-2 text-sm font-medium text-black-400 hover:bg-gray-700 hover:text-white"
                    >
                      {lnk.item}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={() => setClick(!click)}
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src={profileIcon}
                    alt=""
                  />
                </button>
              </div>
              {click ? (
                <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  transform transition ease-in-out duration-300"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                  {isLoggedIn ? <>
                    {loggedInNavLinks.map((links) => {
                      return (
                        <Link
                          to={links.to}
                          className="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          tabIndex="-1"
                          id="user-menu-item-0"
                          onClick={() => setClick(!click)}
                        >
                          {links.item}
                        </Link>
                      )
                    })}
                  </> : <>
                    {loggedOutNavLinks.map((links, index) => {
                      return (
                        <Link
                          key={index}
                          to={links.to}
                          className="block px-4 py-2 text-sm text-gray-700"
                          role="menuitem"
                          tabIndex="-1"
                          id="user-menu-item-1"
                          onClick={() => setClick(!click)}
                        >
                          {links.item}
                        </Link>
                      )
                    })}
                  </>}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
