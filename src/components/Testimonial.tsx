import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

function Testimonial() {
    const musicSchoolTestimonials = [
        {
            quote:
              "SHARMAJEE's teaching methods made even the toughest JEE topics easy to grasp. His in-depth explanations and problem-solving techniques helped me gain confidence. Thanks to him, I secured a great rank!",
            image:'/testimonial/id5.jpeg',
            name: 'Aarav Mishra',
            title: 'Dropper Batch',
          },
          {
            quote:
              "I struggled with Physics, but SHARMAJEE's unique way of explaining concepts like electromagnetism and mechanics made learning enjoyable. His mentorship was a game-changer for me!",
            image:'/testimonial/id4.jpeg',
            name: 'Ishaan Verma',
            title: 'Foundation Course',
          },
          {
            quote:
              "Math was my weak point, but SHARMAJEE's structured approach and regular practice sessions improved my problem-solving speed. I can't thank him enough for helping me clear JEE with flying colors!",
            image:'/testimonial/id3.jpeg',
            name: 'Riya Gupta',
            title: 'Regular Test Series + Crash Course',
          },
          {
            quote:
            "The personalized guidance and doubt-solving sessions at SHARMAJEE’s classes were incredible. He ensured we understood every topic thoroughly before moving ahead. His motivation kept me going!",
            image:'/testimonial/id2.jpeg',
            name: 'Neha Sharma',
            title: 'Foundation Course + Doubt-Solving Sessions',
          },
          {
            quote:
             "JEE preparation felt overwhelming, but SHARMAJEE simplified everything with his conceptual clarity and strategic approach. His problem-solving techniques saved me a lot of time in the exam!",
            image:'/testimonial/id1.jpeg',  
            name: 'Kunal Yadav',
            title: 'Dropper Batch',
          },
    ];
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden bg-black">
    <h2 className="text-6xl font-bold text-white text-center mb-12 mt-2 z-10">Hear from our Students</h2>
    <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
        <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="slow"
  />
        </div>
    </div>
</div>
  )
}

export default Testimonial
