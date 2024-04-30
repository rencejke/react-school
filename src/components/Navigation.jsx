import React from 'react'
import { FaTiktok } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
   <aside className='px-4 py-6 w-[250px] bg-primary h-screen bg-opacity-90 border-r border-line'>
    <h1>SCHOOL</h1>
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
