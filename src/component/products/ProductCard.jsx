import React from 'react'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
function ProductCard({ discount, title, price, image }) {

    let discountedPrice = price - (discount / 100 * price);

    return (
        <div className='border border-grey rounded-lg w-52 h-72 px-3'>
            <div className='mt-3 h-48 rounded-lg' >
                <span className='bg-slate-900 opacity-60 rounded-full mx-2 px-2 text-white text-sm'>
                    {discount}%
                </span>
                <img src={image} alt="product_image" />
            </div>
            <div className='mt-2 p-1'>
                <p className='text-sm'>
                    {title}
                </p>
                <div className='flex mt-2'>
                    <p className='text-xs line-through'>${price}</p>
                    <p className='ml-2 text-xs font-bold'>${discountedPrice}</p>
                    <button className='ml-auto'>
                        <PlusCircleIcon className='size-6' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard