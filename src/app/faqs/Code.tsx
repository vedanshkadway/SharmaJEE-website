
import React, { useState } from 'react';
import { AiOutlinePlus,  AiOutlineMinus } from 'react-icons/ai';
import Image from 'next/image';

const faqs = [ 
    { question: 'What is the eligibility criteria for JEE Main?', answer: 'Candidates must have passed their Class 12 exams with Physics, Chemistry, and Mathematics. There is no age limit for JEE Main.' },
    { question: 'How many times can I attempt JEE Main?', answer: 'You can attempt JEE Main six times in three consecutive years (two attempts per year).' },
    { question: 'What is the difference between JEE Main and JEE Advanced?', answer: 'JEE Main is the qualifying exam for JEE Advanced. JEE Advanced is required for admission to IITs, while JEE Main is for NITs, IIITs, and other engineering colleges.' },
    { question: 'How is the JEE Main exam conducted?', answer: 'JEE Main is conducted in Computer-Based Test (CBT) mode, except for the drawing test in the B.Arch paper, which is pen-and-paper based.' },
    { question: 'What is the syllabus for JEE Main?', answer: 'The syllabus includes Physics, Chemistry, and Mathematics topics from Classes 11 and 12 as per the NCERT curriculum.' },
    { question: 'Can I apply for both JEE Main sessions?', answer: 'Yes, candidates can apply for both sessions, and the best score among them will be considered for ranking.' },
    { question: 'Is there negative marking in JEE Main?', answer: 'Yes, for every incorrect answer, one mark is deducted. However, no negative marking is applied for numerical value-based questions.' },
    { question: 'How can I prepare for JEE effectively?', answer: 'Follow the NCERT textbooks, solve previous years’ papers, take mock tests, and practice time management during exams.' },
    { question: 'What is the JEE Advanced eligibility criteria?', answer: 'Candidates who qualify JEE Main and rank among the top 2.5 lakh candidates are eligible for JEE Advanced.' },
    { question: 'What is the reservation criteria in JEE?', answer: 'Reservation is applicable as per government norms: OBC-NCL (27%), SC (15%), ST (7.5%), EWS (10%), and PwD (5%).' }
  ];
  

const FAQPage = () => {
  const [activeIndex, setActiveMarginIndex] = useState(null);
  const toggleFAQ = index => {
    setActiveMarginIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='container mx-auto px-4 py-8'>
    <h1 className='text-center font-bold text-3xl mb-8'>Your Questions Answered</h1>
      <div className='flex flex-wrap lg:flex-nowrap items-center justify-center'>
        <div className='w-full lg:w-3/5'>
          {faqs.map((faq, index) => (
            <div key={index} className='bg-white shadow-md p-4 mb-4 rounded-lg'>
              <button className='flex justify-between items-center w-full text-left' onClick={() => toggleFAQ(index)}>
                <h2 className='text-lg font-semibold text-navy'>{faq.question}</h2>
                {activeIndex === index ? <AiOutlineMinus className='text-navy'/> : <AiOutlinePlus className='text-navy'/>}
              </button>
              <div className={activeIndex === index ? 'mt-4 text-gray-600' : 'hidden'}>{faq.answer}</div>
            </div>
          ))}
        </div>
        <div className='w-full  lg:w-2/5 flex justify-center items-center p-4'>
          <Image
          src='/testimonial/id1.jpeg'
          width={400}
          height={300}
          alt='Frequently Asked Questions' 
          />
        </div>
      </div>
      <div className='text-center mt-12'>
        <p className='text-lg text-gray-700 mb-4'>Didn&apos;t find the answer you were looking for? Our customer support team is here to help.</p>
        <button className='bg-navy hover:bg-org text-white font-bold py-2 px-4 rounded-full'>Contact Support</button>
      </div>
    </div>
  );
};

export default FAQPage;