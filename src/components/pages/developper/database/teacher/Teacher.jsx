import React from 'react'
import Navigation from '../../../../Navigation'
import Header from '../../../../partials/Header'
import { CiSearch } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import DatabaseInformation from '../DatabaseInformation'
import TeacherTable from './TeacherTable'
import useQueryData from '../../../../custom hook/useQueryData'
import DatabaseInfoTeacher from './DatabaseInfoTeacher'



const Teacher = () => {

  const [teacherInfo, setTeacherInfo] = React.useState('');

    
  const [showInfo, setShowInfo] = React.useState(false);
  const {
    isLoading,
    isFetching,
    error,
    data: teacher,
  } = useQueryData(
    "/v1/teacher", // endpoint
    "get", // method
    "teacher" // key
  );



  return (
    <>
   <section className='flex overflow-x-hidden'>
    <Navigation />
    <main className='w-[calc(100%-250px)]'>
      <Header />
      <div className='flex relative'>
      <div className={`main-wrapper px-4 py-3 transition-all ${showInfo ? 'w-3/4' : "w-full"}`}>

        <div className='flex justify-between items-center'>
        <h1>Database</h1>
        <form action="" className='relative'>
          <input type="text"  placeholder='Search Student' className='px-3 pl-10 p-1 outline-none border border-stone-800 
          rounded-md bg-secondary  placeholder:text-white placeholder:opacity-20'/>
          <CiSearch className='absolute top-2 left-2 text-gray-50 text-2xl z-20 text-white text-2xl opacity-20'/>
        </form>
        </div>
    

      <div className='tab flex items-center justify-between mt-8 border-b border-line mb-8 '>
       <ul className='flex space-x-10'>
        <li className='tab-link'><Link to="/database/student">Student</Link></li>
        <li className='tab-link active'><Link to="/database/teacher">Teacher</Link></li>
        <li className='tab-link '><Link to="/database/staff">Staff</Link></li>
       </ul>
       <button className='btn btn-accent'>
        <FiPlus /> New
        </button>
      </div>

     <TeacherTable showInfo={showInfo} setShowInfo={setShowInfo} isLoading={isLoading} 
     teacher={teacher} setTeacherInfo={setTeacherInfo}/>
      </div>
      <DatabaseInfoTeacher  showInfo={showInfo} teacherInfo={teacherInfo} setShowInfo={setShowInfo}/>


      </div>
    </main>
   </section>
   {/* <ModalAddStudent /> */}
   {/* <ModalError position="center"/> */}
   {/* <ModalConfirm position="center"/> */}
    {/* <SpinnerWindow /> */}
   </>
  )
}

export default Teacher