import React from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import ModalWrapper from '../../../../partials/modals/ModalWrapper'
import SpinnerButton from '../../../../partials/spinners/SpinnerButton'

const ModalAddTeacher = () => {
  return (
    <ModalWrapper >
        <div className="main-modal w-[300px] bg-secondary text-content h-full">
            <div className="modal-header p-4 relative">
                <h2>New Teacher</h2>
                <button className='absolute top-[25px] right-4'>
                    <LiaTimesSolid /></button>
            </div>
            <div className="modal-body p-4">
                <form action="" className='h-[calc(100vh-110px)] flex flex-col justify-between'>
                    <div className='grow overflow-y-auto'>

                    <div className="input-wrapper">
                        <label htmlFor="">Name</label>
                        <input type="text" />
                        <small className='error-msg'>Required</small>
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="">Class</label>
                        <input type="text" />
                        <small className='error-msg'>Required</small>
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="">Name</label>
                        <select>
                            <option value="Male"  className='text-stone-900'>Male</option>
                            <option value="Female"  className='text-stone-900'>Female</option>
                        </select>
                        <small className='error-msg'>Required</small>
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor="">Age</label>
                        <input type="number" />
                        <small className='error-msg'>Required</small>
                    </div>

                    </div>
                    <div className='form-action'>
                      <button className='btn btn-accent btn-form'> Add <SpinnerButton /> </button>
                      <button className='btn btn-cancel btn-form'> Canceled </button>
                    </div>

                </form>
            </div>
          </div>
          </ ModalWrapper >
  )
}

export default ModalAddTeacher