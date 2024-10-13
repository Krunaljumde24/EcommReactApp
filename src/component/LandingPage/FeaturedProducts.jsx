import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../products/ProductCard'
import axios from 'axios'

function FeaturedProducts() {


    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const [featuredProducts, setFeaturedProducts] = useState([])

    useEffect(() => {
        axios.get(`${API_BASE_URL}/product/api/getFeaturedProducts`)
            .then(resp => {
                setFeaturedProducts(resp.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <div className='min-h-[400px] mx-16 my-10'>
            <div className='flex'>
                <h3 className='text-2xl font-bold'>
                    Featured Products
                </h3>
                <p className='ml-auto'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit delectus.
                </p>
            </div>
            <div className='grid md:grid-cols-4  grid-cols-2 gap-4 min-h-96 mx-1 my-5'>
                {featuredProducts.map((data, index) => {
                    return (
                        <Link to='/productDetails' state={{ productData: data }} key={index} >
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
        </div >
    )
}

export default FeaturedProducts