import React from 'react'
import logo from '../../assets/logo.png'
function Footer() {
  const year = new Date().getFullYear();
  return (

    <div className='w-full min-h-72 bg-slate-900 text-white text-center '>
      <div className='pt-10'>
        <h3 className='text-2xl font-semibold'>
          Subscribe To Our Newsletter To Stay Updated About Discounts
        </h3>
        <div className='my-8'>
          <input type="text" className='rounded-full px-2  py-1 bg-slate-700 border border-white min-w-72 text-center ' placeholder='Enter your email' />
          <button className='rounded-full border border-white mx-2 px-2 py-1'>Subscribe</button>
        </div>
      </div>
      <footer className='text-center bottom-0'>
        <p className=''>
          {`Copyright © E-Commercke ${year}`}
        </p>
      </footer>
    </div>



  )
}

export default Footer