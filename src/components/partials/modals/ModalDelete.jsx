import React from 'react'
import ModalWrapper from './ModalWrapper'
import { LiaTimesSolid, LiaTrashAltSolid } from 'react-icons/lia'
import { BiErrorCircle } from 'react-icons/bi'

const ModalDelete = ({position}) => {
  return (
   <ModalWrapper position={position}>
    <div className="modal-main max-w-[400px] w-full">
        <div className="modal-header bg-alert text-white flex 
        justify-between items-center p-3 rounded-t-md">
            <h4 className='mb-0 text-white'>Error</h4>
            <button><LiaTimesSolid /></button>
        </div>
        <div className="modal-body p-4 rounded-b-md  bg-secondary">

      <div className='flex gap-2 items-center'>
      <LiaTrashAltSolid className='text-4xl text-alert mb-3'/>
         <div>
         <h2 className='mb-2'>Deleting Record</h2>
        <p className='mb-5'>Are you want to delete this record?</p>
         </div>
      </div>


        <div className='flex justify-end mx-auto gap-2'>
        <button className='btn btn-alert btn-form w-1/4'>Delete</button>
        <button className='btn btn-cancel btn-form w-1/4'>Cancel</button>
        </div>
        </div>
    </div>
   </ModalWrapper>
  )
}

export default ModalDelete