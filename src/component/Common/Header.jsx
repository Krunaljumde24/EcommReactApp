import React, { useContext, useEffect, useState } from "react";
import profileIcon from "../../assets/profile-icon1.png";
import logo from "../../assets/logo.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import useAuthentication from "../../CustomHooks/useAuthentication";
import { AuthContext } from "../../Context/AuthContext";

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const { logout } = useAuthentication();

  const { isUserLoggedIn } = useContext(AuthContext);

  const loggedInNavLinks = [{ item: 'Your Profile', to: '/profile' }, { item: 'Settings', to: '/settings' }, { item: 'Sign Out', to: '/signout' }];

  const loggedOutNavLinks = [{ item: 'Login', to: '/login' }, { item: 'Sign Up', to: '/signup' }]

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
      item: 'ContactUs',
      to: '/contactus'
    },
    {
      item: 'Blog',
      to: '/blog'
    },
    {
      item: 'Setting',
      to: '/settings'
    },
    {
      item: 'Cart',
      to: '/cart'
    },
    {
      item: 'ProductDetails',
      to: '/productDetails'
    }

  ]

  useEffect(() => {

  }, [isMenuOpen])


  return (
    <nav style={{ backgroundColor: "#cbd5e1" }}>
      <div className=" px-2 sm:px-6 lg:px-8">
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
            <div className="hidden sm:ml-6 sm:block mx-auto">
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
                {
                  isUserLoggedIn
                    ?
                    <button
                      className="rounded-md px-3 py-2 text-sm font-medium
                 text-red-400 bg-white hover:bg-gray-700 
                 hover:text-white"

                      onClick={() => logout()}
                    >
                      Logout
                    </button>
                    :
                    <button className="rounded-md px-3 py-2 text-sm font-medium text-red-400 bg-white hover:bg-gray-700 hover:text-white"
                      onClick={() => navigate('/login')}
                    >
                      Login
                    </button>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
