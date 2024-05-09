import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { LiaEnvelope, LiaKeySolid } from 'react-icons/lia'

const DatabaseInfoStaff = ({showInfo, staffInfo}) => {

  

  const handleClose = () => setShowInfo(false)
  return (
    <div className={`information absolute
    border-l border-line min-h-[calc(100vh-65px)] overflow-hidden w-1/4 ${showInfo ? "right-0" : "-right-1/4"}`}>

      <button className='absolute top-0 left-0 size-10 grid place-content-center bg-secondary text-content' onClick={handleClose}><FaTimes /></button>

      <div className='p-10'>
      <div className="text-center mb-8 ">
     <img src="https://via.placeholder.com/100x100" alt="" className='size-[100px] mx-auto rounded-full object-cover mb-4'/>
        <h3 className='mb-1'>{staffInfo.staff_name}</h3>
        <small className='opacity-60'>{staffInfo.staff_email}</small>
        <ul className='flex gap-5 mt-5 justify-center'>
          <li>
            <button className='text-2xl tooltip' data-tooltip="Account"><LiaKeySolid /> </button>
          </li>
          <li>
            <button className='text-2xl tooltip' data-tooltip="Email"><LiaEnvelope /> </button>
          </li>
        </ul>
      </div>
      <h4 className='mb-3'>About</h4>
      <p className='text-xs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nisi et necessitatibus. Ut, quia itaque.</p>
    
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className='info-box'>
          <h4>Age</h4>
          <p  className='text-xs'>7</p>
        </div>

        <div className='info-box'>
          <h4>Gender</h4>
          <p className='text-xs'>Male</p>
        </div>

        <div className='info-box'>
          <h4>Birthday</h4>
          <p className='text-xs'>June 1, 2000</p>
        </div>

        <div className='info-box'>
          <h4>Address</h4>
          <p className='text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default DatabaseInfoStaff