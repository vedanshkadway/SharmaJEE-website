'use client'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';

function Features() {
    const featuredWebinars = [
        {
          title: 'MENTORSHIP PROGRAM',
          description:
            'A JEE mentorship program provides guidance, strategies, motivation, and support from experts to help aspirants excel in their preparation.',
          slug: 'understanding-jee-theory',
          isFeatured: true,
        },
        {
          title: 'THE CAREER COUNSELLOR',
          description:
            'The career counselor guides individuals in choosing the right career path by assessing skills, interests, and opportunities for growth..',
          slug: 'the-art-of-guidance',
          isFeatured: true,
        },
        {
          title: 'CORPORATE COUNSULTANCY',
          description:
            'Corporate consultancy provides expert advice to businesses, helping them improve operations, strategy, efficiency, and overall growth in a competitive market.',
          slug: 'mastering-your-instrument',
          isFeatured: true,
        },
        {
          title: 'GUIDANCE FOR JEE ADVANCE',
          description:
            'Guidance for JEE Advanced includes expert mentorship, strategic study plans, problem-solving techniques, time management, and motivation for exam success.',
          slug: 'music-production-essentials',
          isFeatured: true,
        },
        {
          title: 'LIVE PERFORMANCE TRACKING',
          description:
            'Live performance tracking provides real-time analysis of progress, helping individuals or businesses optimize strategies, improve efficiency, and achieve better results.',
          slug: 'live-performance-techniques',
          isFeatured: true,
        },
        {
          title: 'ONE TO ONE MENTORSHIP',
          description:
            'One-to-one mentorship offers personalized guidance, support, and skill development, ensuring focused learning, confidence building, and goal achievement effectively.',
          slug: 'digital-music-marketing',
          isFeatured: true,
        },
      ];
    
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase"> SOME MORE FEATURES</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your JEE Journey</p>
        </div>
          <div>
            <HoverEffect items = {featuredWebinars.map(webinar => (
                {
                    title:webinar.title,
                    description:webinar.description,
                    link:"/"
                }
            ))}></HoverEffect>
          </div>
        <div className="mt-10 text-center">
         
        </div>
        </div>
        </div>
  )
}

export default Features
