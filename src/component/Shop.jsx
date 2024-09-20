import React, { useState } from 'react'
import ProductCard from './products/ProductCard'
import Sidebar from './Sidebar'
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid'

function Shop() {

  const [data, setData] = useState([{
    name: 'apple',
  }, {
    name: 'banana',
  }, {
    name: 'straberry',
  }, {
    name: 'berry',
  }, {
    name: 'orange',
  }, {
    name: 'orange',
  }, {
    name: 'orange',
  }, {
    name: 'orange',
  }, {
    name: 'orange',
  }])
  return (
    <div className='flex mx-5'>
      <div className='w-52 m-5'>
        <Sidebar />
      </div>
      <div className='mt-5'>
        <p className='font-bold text-2xl'>Our Collection of Products</p>
        <div className='flex mt-5 w-full border rounded-full'>
          <input type="text" name="search" id="search" placeholder='Search a product' className='w-full ml-4 outline-none' />
          <button onClick={() => {
            console.log('serach btn clicked');
          }}>
            <MagnifyingGlassCircleIcon className='size-10' />
          </button>
        </div>

        <div className='mt-5'>
          <p className='text-sm font-bold mb-2'>Showing 1-12 of 24 item(s)</p>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil asperiores temporibus, eveniet cumque excepturi culpa! Sapiente a ad quibusdam. Dolor ipsum ullam voluptates in laborum inventore necessitatibus vel debitis pariatur!</p>
        </div>

        <div className='grid md:grid-cols-4  grid-cols-2 gap-4 min-h-96 mx-1 my-5'>
          {data.map((dt) => {
            return (
              <ProductCard />
            )
          })}
        </div>
      </div>


    </div>

  )
}

export default Shop