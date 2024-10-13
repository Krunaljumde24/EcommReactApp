import React, { useEffect, useState } from 'react'
import ProductCard from './products/ProductCard'
import Sidebar from './Sidebar'
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import axios, { HttpStatusCode } from 'axios'
import toast from 'react-hot-toast';
import UseAuth from '../CustomHooks/useAuthentication'

function Shop() {

  const [productDetails, setProductDetails] = useState([]);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const { checkLoginStatus, loggedInUserDetails } = UseAuth();

  useEffect(() => {

    if (checkLoginStatus()) {

    } else {
      axios.get(`${API_BASE_URL}/product/api/getAllProducts`)
        .then((resp) => {
          setProductDetails(resp.data)
        })
        .catch(error => {
          console.log(error);
          toast.error('Backend servers are not accessible.')
        })
    }
  }, [loggedInUserDetails])

  return (
    <div className='flex mx-5 mb-5'>
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
          <p className='text-sm font-bold mb-2'>Showing {productDetails.length} item(s)</p>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil asperiores temporibus, eveniet cumque excepturi culpa! Sapiente a ad quibusdam. Dolor ipsum ullam voluptates in laborum inventore necessitatibus vel debitis pariatur!</p>
        </div>

        <div className='grid md:grid-cols-4  grid-cols-2 gap-4 min-h-96 mx-1 my-5'>
          {productDetails.map((data, index) => {
            return (
              <Link to='/productDetails' state={{ productData: data }} key={index}>
                <ProductCard
                  discount={data.discount}
                  price={data.price}
                  title={data.title}
                  image={data.images[0]}
                />
              </Link>
            )
          })}
        </div>
      </div>


    </div>

  )
}

export default Shop