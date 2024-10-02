import React from 'react'

function Page2() {
  return (
    <div className='bg-slate-500 min-h-[300px] md:px-40 px-10 my-20 py-10 flex flex-row text-white'>

      <div className='basis-1/2'>
        <h4 className='text-2xl font-bold mb-3'>
          Have a Look at Our Most Selling Products
        </h4>
        <button className='rounded-full px-3  py-2 bg-black'>
          Read More
        </button>
      </div>
      <div className='basis-1/2'>
        <p className='m-4'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ea tempore et repellendus dolore tempora at ex. Optio sunt, laborum, culpa voluptates suscipit aperiam nulla sequi mollitia in, temporibus tempora.
        </p>
        <hr />
        <p className='m-4'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae ea tempore et repellendus dolore tempora at ex. Optio sunt, laborum, culpa voluptates suscipit aperiam nulla sequi mollitia in, temporibus tempora.
        </p>

      </div>
    </div>
  )
}

export default Page2