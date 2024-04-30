import React from 'react'
import { CiBellOn } from 'react-icons/ci'
import { FaAngleDown } from 'react-icons/fa'
import { LiaAngleDownSolid, LiaKeySolid, LiaSignOutAltSolid, LiaUserCircle } from 'react-icons/lia'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header px-4 py-3 border-b border-line'>
      <div className='flex justify-end items-center gap-4 w-full relative'>
        <button className='text-3xl'><CiBellOn/></button>
        <img src="https://via.placeholder.com/40x40" alt="" className='rounded-full object-cover size-[40px]'/>
        <button className='flex items-center gap-5'>Muh Bambang<LiaAngleDownSolid/></button>

        <div className='hidden header-dropdown absolute bg-secondary p-4 rounded-md right-0 top-[calc(100%+10px)] text-center shadow-xs'>
        <img src="https://via.placeholder.com/40x40" alt="" className='rounded-full object-cover size-[40px] mx-auto'/>
        <h4 className='mb-1'>Muh Bambang</h4>
        <p className='text-sm w-[150px] truncate'>muh.bambang@gmail.com</p>
        <ul className='flex justify-center gap-5'>
          <li><Link to="#" className='text-2xl'><LiaUserCircle /></Link></li>
          <li><Link to="#" className='text-2xl'><LiaKeySolid /></Link></li>
          <li><Link to="#" className='text-2xl'><LiaSignOutAltSolid /></Link></li>

        </ul>
        </div>
      </div>
      
    </header>
  )
}

export default Header
