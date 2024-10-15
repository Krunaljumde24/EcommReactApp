import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { PlusIcon, MinusIcon } from '@heroicons/react/20/solid';
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';

function ProductDetails() {

    const [product, setProduct] = useState({
        _id: '',
        title: '',
        price: 0,
        rating: 0,
        reviewCount: 0,
        description: '',
        discount: 0,
        features: [],
        images: []
    });
    const navigate = useNavigate();

    const location = useLocation();

    const [qty, setQty] = useState(0);
    const [displayImg, setDisplayImg] = useState();

    const { addItemToCart, getCartData } = useContext(CartContext);

    let handleAddToCartBtnClick = (event) => {
        event.preventDefault();
        if (qty > 0) {
            let cartItem = {
                id: product._id,
                productTitle: product.title,
                price: product.price,
                discount: product.discount,
                quantity: qty
            }

            addItemToCart(cartItem)
            toast.success('Item Added to cart.')
            setQty(0)

        } else {
            toast.error('Please select item before you add to cart.')
        }
    }

    useEffect(() => {
        if (location && location.state) {
            const { productData } = location.state;
            let discountedPrice = productData.price - (productData.discount / 100 * productData.price);
            setProduct({ ...productData, discountedPrice: discountedPrice })
            setDisplayImg(productData.images[0])
        } else {
            navigate('/shop')
        }
    }, [])

    return (
        <div className='mx-20'>
            <div className='my-5 flex flex-row gap-4'>
                <div className='basis-2/12 gap-4 flex flex-col rounded-sm'>
                    {product.images.map((img, index) => {
                        return (
                            <div className='p-1 w-full self-center bg-slate-400 rounded-sm basis-1/3' onMouseOver={(event) => setDisplayImg(img)} key={index}>
                                <img id="" className="" src={img} alt="image_url" />
                            </div>
                        )
                    })}
                </div>
                <div className='p-2 basis-4/12 col-span-3 rounded-sm border '>
                    <img src={displayImg} alt="" />
                </div>
                <div className='basis-6/12 rounded-sm '>
                    <h3 className='text-xl font-bold mb-4'>{product.title}</h3>
                    <p className='mb-4 text-xl'>₹{product.price} |
                        <span className='size-'>⭐⭐⭐⭐⭐</span>
                        ({product.reviewCount} review)</p>
                    <hr />
                    <p className='mt-4'>
                        {product.description}
                    </p>
                    <ul className='m-5 list-disc'>
                        {product.features.map((fet, index) => {
                            return (
                                <li key={index}>{fet}</li>
                            )
                        })}
                    </ul>
                    <div className='flex flex-row gap-2'>
                        <div className='basis-1/5 flex'>
                            <button className='p-2 border border-l border-gray-900 rounded-l-full hover:bg-slate-950  hover:text-white' onClick={() => {
                                if (qty > 0) {
                                    setQty(qty - 1)
                                }
                            }}>
                                <MinusIcon width='15px' />
                            </button>
                            <span className='p-1 px-3 border-t border-b border-gray-900 font-bold'>{qty}</span>
                            <button
                                className='p-2 border border-r border-gray-900 rounded-r-full hover:bg-slate-950  hover:text-white'
                                onClick={() => setQty(qty + 1)}>
                                <PlusIcon width='15px' />
                            </button>
                        </div>
                        <div className='basis-4/5'>
                            <button
                                className='p-1  w-full border border-gray-900 rounded-full hover:bg-slate-950  hover:text-white transition ease-linear duration-100'
                                onClick={(event) => handleAddToCartBtnClick(event)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    <button className='mt-2 p-1 w-full bg-slate-950 
                    border rounded-full text-white'>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails