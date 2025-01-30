
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const jeePrepContent = [
  {
    title: 'Discover Your Path to JEE Success: A Personalized Journey in Exam Mastery',
    description:
      'Embark on a JEE preparation journey that’s uniquely yours. Our personalized instruction adapts to your individual learning pace, setting the stage for exceptional growth, problem-solving skills, and exam readiness. At our coaching center, your aspirations meet our dedicated support, creating a clear path to JEE success.',
  },
  {
    title: 'Comprehensive Subject Mastery with Expert Guidance',
    description:
      'Unlock in-depth knowledge in all JEE subjects through tailored lessons. Our experienced instructors focus on your strengths and areas for improvement, ensuring complete mastery over Physics, Chemistry, and Mathematics to excel in the exam.',
  },
  {
    title: 'Strategic Time Management for Optimal Exam Performance',
    description:
      'Master the art of time management with expert strategies designed to maximize your productivity, enhance focus, and improve performance in the critical months leading up to JEE. Learn how to balance speed and accuracy effectively.',
  },
  {
    title: 'Live Feedback & Engagement for Continuous Improvement',
    description:
      'Immerse yourself in an interactive learning experience where feedback is immediate. Real-time assessments and doubt-clearing sessions will help you refine your concepts and improve performance techniques for the JEE.',
  },
  {
    title: 'Cutting-Edge Curriculum for JEE Excellence',
    description:
      'Our curriculum is constantly updated to reflect the latest JEE patterns, trends, and technology. Stay ahead with the most relevant and effective study materials, ensuring you’re always prepared for what’s coming in the exam.',
  },
  {
    title: 'Limitless Learning Opportunities for Continuous Growth',
    description:
      'Access a comprehensive resource library, practice tests, and additional course materials. Our platform provides unlimited opportunities for growth, ensuring your JEE preparation is always advancing and adapting to your needs.',
  },
];

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={jeePrepContent} />
    </div>
  )
}

export default WhyChooseUs