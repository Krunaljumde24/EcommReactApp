import React from 'react'

function Footer() {
  const year = new Date().getFullYear();
  return (

    <footer className='w-full min-h-10 bg-slate-900 text-white text-center'>
      <p className=''>
        {`Copyright © E-Commerce ${year}`}
      </p>
    </footer>
  )
}

export default Footer