import React from 'react'
import Navigation from '../../../Navigation'
import Header from '../../../partials/Header'
import { CiSearch } from 'react-icons/ci'

const Student = () => {
  return (
   <section className='flex'>
    <Navigation />
    <main className='w-[calc(100%-250px)]'>
      <Header />
      <div className='main-wrapper px-4 py-3'>
        <div className='flex justify-between items-center'>
        <h1>Databse</h1>
        <form action="" className='relative'>
          <input type="text"  placeholder='Search Student' className='px-3 pl-10 p-1 outline-none bg-stone-300 border border-stone-800 
          rounded-md placeholder:text-stone-400'/>
          <CiSearch className='absolute top-2 left-2 text-gray-50 text-2xl z-20 text-red-700'/>
        </form>
        </div>
      </div>
    </main>
   </section>
  )
}

export default Student