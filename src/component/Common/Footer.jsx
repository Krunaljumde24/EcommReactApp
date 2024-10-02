import React from 'react'
import logo from '../../assets/logo.png'
function Footer() {
  const year = new Date().getFullYear();
  return (

    <div className='w-full min-h-24 bg-slate-900 text-white'>

      <div className='text-center'>
        <h3 className='text-xl'>
          Subscribe To Our Newsletter To Stay Updated About Disconts
        </h3>
        <input type="text" className='rounded-full px-2 my-2 py-1 bg-slate-700 border border-white min-w-72 text-center ' placeholder='Enter your email' />
      </div>

      <footer className='text-center'>
        <p className=''>
          {`Copyright © E-Commerce ${year}`}
        </p>
      </footer>
    </div>



  )
}

export default Footer