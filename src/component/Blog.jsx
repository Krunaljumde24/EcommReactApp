import React, { useEffect, useState } from 'react'
import useAuth from '../CustomHooks/useAuth'

function Blog() {

  const { login, logout, checkLoginStatus } = useAuth();

  const [loginFlag, setLoginFlag] = useState(false);

  const handleLogin = () => {
    login('guestuser', 'Guest')
    setLoginFlag(true);
  }

  const handleLogout = () => {
    logout();
    setLoginFlag(false)

  }

  const handleCheckLoginStatus = () => {
    if (checkLoginStatus()) {
      setLoginFlag(true)
    }
  }
  
  return (
    <div className='m-10'>

      <h3 className='text-2xl font-bold mb-10' >
        This is Blog Page but we are testing useAuth feature.
      </h3>
      <div className='flex flex-row'>
        <div className='mx-10 mb-10'>
          {
            loginFlag
              ?
              <button
                className='bg-red-500 p-3 rounded-md text-white font-bold'
                onClick={() => handleLogout()}
              >
                Logout
              </button>
              :
              <button
                className='bg-blue-500 p-3 rounded-md text-white font-bold'
                onClick={() => handleLogin()}
              >
                Login
              </button>
          }
        </div>

        <div className='mx-10 mb-10'>
          <button
            className='bg-yellow-500 p-3 rounded-md text-white font-bold'
            onClick={() => handleCheckLoginStatus()}
          >
            Check Login Status
          </button>
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='w-1/4 bg-purple-300 rounded-md text-black min-h-48 mx-10 p-4 font-semibold text-sm'>
          <h3 className='text-lg'>Public Content</h3>
        </div>
        {
          loginFlag
            ?
            <div className='w-1/4 bg-green-300 rounded-md text-red-600 min-h-48 mx-10 p-4 font-semibold text-sm'>
              <h3 className='text-lg'>Private Content</h3>
            </div>
            :
            ''
        }
      </div>
      <div className='mt-10'>
        <p className='text-purple-800 text-lg font-bold'>
          Instructions : If you are not logged in you'll only see public content, if you are logged in you'll see public as well as private content. You can also check for the login status

        </p>
      </div>

    </div>
  )
}

export default Blog