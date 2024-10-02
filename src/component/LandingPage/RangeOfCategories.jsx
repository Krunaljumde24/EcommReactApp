import React from 'react'

function RangeOfCategories() {
    return (
        <div className='min-h-[400px] md:mx-44 my-20'>
            <h4 className='my-4 text-2xl md:w-2/3 font-bold text-center mx-auto'>
                View Our Range Of Categories
            </h4>
            <p className='md:w-2/3 mx-auto text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur at commodi amet numquam sed voluptate in ullam illum maxime sunt! Recusandae voluptatum id alias quasi vero repellendus officiis quod omnis!
            </p>

            <dir className="flex flex-row gap-6 text-white font-semibold text-lg text-center">

                <div className="p-1 min-h-72 bg-slate-400 basis-1/3 rounded-xl">
                    <p>Smartphones</p>
                </div>
                <div className="basis-1/3 rounded-xl flex flex-col gap-6">
                    <div className="p-1 basis-1/2 bg-purple-400 rounded-xl">
                        <p>Laptops</p>

                    </div>
                    <div className="p-1 basis-1/2 bg-purple-400 rounded-xl">
                        Macbook
                    </div>
                </div>
                <div className="p-1 min-h-72 bg-slate-400 basis-1/3 rounded-xl">
                    Electronics Accessories
                </div>
            </dir>

        </div>
    )
}

export default RangeOfCategories 