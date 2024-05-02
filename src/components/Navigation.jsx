import React from 'react'
import { FaTiktok } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Logo from './partials/svg/Logo'

const Navigation = () => {
  return (
   <aside className='px-4 py-6 w-[250px] bg-primary h-screen bg-opacity-90 border-r border-line'>
    <div className='flex items-center gap-2'>
      <Logo />
    <h1 className='mb-0'>SCHOOL</h1>
    </div>
    <ul className='nav'>
      <li className='nav-link active'><Link to="#"> <FaTiktok />Dashboard</Link></li>
      <li className='nav-link'><Link to="#"><FaTiktok />Messenger</Link></li>
      <li className='nav-link'><Link to="#"><FaTiktok />Calendar</Link></li>
      <li className='nav-link'><Link to="#"><FaTiktok />Database</Link></li>
      <li className='nav-link'><Link to="#"><FaTiktok />Attedance</Link></li>
      <li className='nav-link'><Link to="#"><FaTiktok />Settings</Link></li>
    </ul>
   </aside>
  )
}

export default Navigation
