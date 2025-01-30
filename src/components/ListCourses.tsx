import React from 'react'
import { CourseList } from './Courses'
const blogContent = [
  {
    courseImg: "/courses/courses1.png",
    slug: "amazing-tailwindcss-grid-layouts",
    author: "Jee Mains",
    price: "Price - 3000",
    title: "JEE Mains Crash Course",
    description:
      "Fast revision, problem-solving, mock tests, doubt-solving, shortcuts, time management, strategy, speed, accuracy, concepts, physics, chemistry, mathematics, practice, tricks, analysis, efficiency, intensive, last-minute, preparation.",
    image: "/vercel.svg",
    authorAvatar: "/globe.svg",
  },
  {
    courseImg: "/courses/courses2.png",
    slug: "amazing-tailwindcss-grid-layouts",
    author: "Jee Advanced",
    price: "Price - 3500",
    title: "JEE Advance Crash Course",
    description:
      "Fast revision, problem-solving, mock tests, doubt-solving, shortcuts, time management, strategy, speed, accuracy, concepts, physics, chemistry, mathematics, practice, tricks, analysis, efficiency, intensive, last-minute, preparation.",
    image: "/vercel.svg",
    authorAvatar: "/globe.svg",
  },
  {
    courseImg: "/courses/courses3.png",
    slug: "amazing-tailwindcss-grid-layouts",
    author: "Jee Ultimate",
    price: "Price - 3700",
    title: "JEE Ultimate Crash Course",
    description:
      "Fast revision, problem-solving, mock tests, doubt-solving, shortcuts, time management, strategy, speed, accuracy, concepts, physics, chemistry, mathematics, practice, tricks, analysis, efficiency, intensive, last-minute, preparation.",
    image: "/vercel.svg",
    authorAvatar: "/globe.svg",
  },
  {
    courseImg: "/courses/courses4.png",
    slug: "amazing-tailwindcss-grid-layouts",
    author: "Rapid JEE",
    price: "Price - 3000",
    title: "Rapid JEE",
    description:
      "Fast revision, problem-solving, mock tests, doubt-solving, shortcuts, time management, strategy, speed, accuracy, concepts, physics, chemistry, mathematics, practice, tricks, analysis, efficiency, intensive, last-minute, preparation.",
    image: "/vercel.svg",
    authorAvatar: "/globe.svg",
  },
  
];

function ListCourses() {
  return (
    <>

      <div className='text-6xl text-center p-4 font-bold  bg-sagy m-6  '>Our Courses</div>
      <div className="flex flex-row flex-wrap min-h-[575px] bg-sagy">

        {blogContent.map((item, index) => (
          <CourseList key={index} {...item} />
        ))}
       
      </div>
    </>

  )
}

export default ListCourses
