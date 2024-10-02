import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline';
import React from 'react'

function Page1() {
  return (
    <div className='bg-slate-500 w-full min-h-[550px] text-white items-center'>

      <h4 className='pt-20 text-4xl md:w-2/3 font-semibold text-center mx-auto'>
        Shop Smart, Live Better <br /> Your One-Stop Online Shopping Hub!
      </h4>
      <p className='pt-5 md:w-2/3 text- text-center mx-auto'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vero maxime quae dolore iure, animi cum nulla pariatur sapiente beatae quo possimus excepturi quasi voluptate impedit, tenetur officia soluta assumenda.
      </p>
      <div className='flex border-2 w-96 mt-6 mx-auto rounded-full'>
        <input type="text" name="search" id="search" placeholder='Search for a product' className='w-full ml-4 outline-none bg-slate-500' />
        <button onClick={() => {
          console.log('serach btn clicked');
        }}>
          <MagnifyingGlassCircleIcon className='size-10' />
        </button>
      </div>
    </div>
  )
}

export default Page1