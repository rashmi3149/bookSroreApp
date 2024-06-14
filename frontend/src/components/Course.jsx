import React from 'react';
import list from '../../public/list.json';
import Cards from "./Cards";
import {Link} from "react-router-dom";

function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto  md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
         <div className='mt-12 text-center justify-center items-center  '>
            <h1 className='mt-16 text-2xl md:text-4xl'>We are delighted to have you <span className='text-pink-500'>here! :)</span></h1>
            <p className='mt-12'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
            <Link to='/'>
            <button className='text-white bg-pink-500 rounded-md mt-6 px-4 py-2 hover:bg-pink-700 duration-300'>Back</button>
            </Link>
         </div>
         <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {list.map((item)=>{
                return <Cards item={item} key={item.id} />
            })}
         </div>
      </div>
    </>
  )
}

export default Course
