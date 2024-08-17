import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json'
import {Link} from 'react-router-dom'

function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>
            We're delighted to have you {" "}
            <span className='text-pink-500'>Here! :)</span> </h1>
            <p className='mt-12'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsam, 
                voluptate a rem at eius quod voluptates explicabo esse atque accusamus cumque 
                maxime voluptas voluptatum odio optio vitae molestiae eos officia amet nemo! Esse eius sequi eum perspiciatis
                distinctio error soluta aut excepturi impedit. Sint accusantium distinctio possimus vel itaque molestias?
            </p>
            <Link to='/'>
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md
            hover:bg-pink-700 duration-300'>
                Back
            </button>
            </Link>
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
            list.map((item)=> (
                <Cards key={item.id} item={item}/>
            ))
        }
    </div>
    </div>
    </>
  )
}

export default Course;