import React from 'react'
import { FollowingPointerDemo } from './Courses'

function ListCourses() {
  return (
    <>
    
        <div className='text-7xl text-center p-4  bg-sagy  '>Our Courses</div>
      <div className="flex flex-row flex-wrap min-h-[575px]">
        
      <FollowingPointerDemo/>
      <FollowingPointerDemo/>
      <FollowingPointerDemo/>
      <FollowingPointerDemo/>
      </div>
    </>
    
  )
}

export default ListCourses
