// "use client";

// import { useState, useRef, useEffect } from "react";
// import Image, { StaticImageData } from "next/image";
// import { Transition } from "@headlessui/react";

// interface Testimonial {
//     img: StaticImageData;
//     quote: string;
//     name: string;
//     role: string;
// }

// export default function FancyTestimonialsSlider({
//     testimonials,
// }: {
//     testimonials: Testimonial[];
// }) {
//     const testimonialsRef = useRef<HTMLDivElement>(null);
//     const [active, setActive] = useState<number>(0);
//     const [autorotate, setAutorotate] = useState<boolean>(true);
//     const autorotateTiming: number = 7000;

//     useEffect(() => {
//         if (!autorotate) return;
//         const interval = setInterval(() => {
//             setActive((prevActive) =>
//                 prevActive + 1 === testimonials.length ? 0 : prevActive + 1
//             );
//         }, autorotateTiming);
//         return () => clearInterval(interval);
//     }, [autorotate, testimonials.length]);

//     const heightFix = () => {
//         if (testimonialsRef.current && testimonialsRef.current.parentElement) {
//             testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
//         }
//     };

//     useEffect(() => {
//         heightFix();
//     }, [active]);

//     return (
//         <div className="mx-auto w-full max-w-3xl text-center">
//             {/* Testimonial image */}
//             <div className="relative h-32">
//                 <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-b before:from-indigo-500/25 before:via-indigo-500/5 before:via-25% before:to-indigo-500/0 before:to-75%">
//                     <div className="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">
//                         {testimonials.map((testimonial, index) => (
//                             <Transition
//                                 as="div"
//                                 key={index}
//                                 show={active === index}
//                                 className="absolute inset-0 -z-10 h-full"
//                                 enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
//                                 enterFrom="opacity-0 -rotate-[60deg]"
//                                 enterTo="opacity-100 rotate-0"
//                                 leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
//                                 leaveFrom="opacity-100 rotate-0"
//                                 leaveTo="opacity-0 rotate-[60deg]"
//                                 beforeEnter={() => heightFix()}
//                             >
//                                 <Image
//                                     className="relative left-1/2 top-11 -translate-x-1/2 rounded-full"
//                                     src={testimonial.img}
//                                     width={56}
//                                     height={56}
//                                     alt={testimonial.name}
//                                 />
//                             </Transition>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//             {/* Text */}
//             <div className="mb-9 transition-all delay-300 duration-150 ease-in-out">
//                 <div className="relative flex flex-col" ref={testimonialsRef}>
//                     {testimonials.map((testimonial, index) => (
//                         <Transition
//                             key={index}
//                             show={active === index}
//                             enter="transition ease-in-out duration-500 delay-200 order-first"
//                             enterFrom="opacity-0 -translate-x-4"
//                             enterTo="opacity-100 translate-x-0"
//                             leave="transition ease-out duration-300 delay-300 absolute"
//                             leaveFrom="opacity-100 translate-x-0"
//                             leaveTo="opacity-0 translate-x-4"
//                             beforeEnter={() => heightFix()}
//                         >
//                             <div className="text-2xl font-bold text-slate-900 before:content-['\201C'] after:content-['\201D']">
//                                 {testimonial.quote}
//                             </div>
//                         </Transition>
//                     ))}
//                 </div>
//             </div>
//             {/* Buttons */}
//             <div className="-m-1.5 flex flex-wrap justify-center">
//                 {testimonials.map((testimonial, index) => (
//                     <button
//                         key={index}
//                         className={`m-1.5 inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 text-xs shadow-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 ${
//                             active === index
//                                 ? "bg-indigo-500 text-white shadow-indigo-950/10"
//                                 : "bg-white text-slate-900 hover:bg-indigo-100"
//                         }`}
//                         onClick={() => {
//                             setActive(index);
//                             setAutorotate(false);
//                         }}
//                     >
//                         <span>{testimonial.name}</span>{" "}
//                         <span
//                             className={`${
//                                 active === index ? "text-indigo-200" : "text-slate-300"
//                             }`}
//                         >
//                             -
//                         </span>{" "}
//                         <span>{testimonial.role}</span>
//                     </button>
//                 ))}
//             </div>
//         </div>
//     );
// }

"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function Results2() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans ">
        Previous Year Results
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            {/* <div className="flex"> */}
            {/* <span>
                    <Image
                    src={"/courses/courses1.png"}
                    height={120}
                    width={120}
                    alt="image"/>
                </span> */}

            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Sharma's JEE result is proof that dedication and persistence always pay off.
                Success in JEE is not just about intelligence but the relentless effort Sharma put in.
              </span>{" "}
              Sharma JEE played a crucial role in my JEE preparation. The faculty is extremely knowledgeable, and their problem-solving techniques are top-notch. The test series closely matched the actual exam, boosting my confidence!
            </p>
            {/* </div> */}
            <div className="mt-7"></div>
            <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/9HfuDmF_TM8"
            ></iframe>
            {/* <iframe 
  width="860"
  height="484"
  src="https://www.youtube.com/embed/aL27fX5kv9U"
></iframe>; */}
            {/* <Image
              src="/Students-photo/S1.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            /> */}
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "JEE Mains Rapid Batch",
    title: "Rahul Yadav",
    src: "/Students-photo/S2.png",
    content: <DummyContent />,
  },
  {
    category: "JEE Advanced Crash Course",
    title: "Ankit jain",
    src: "/Students-photo/S3.png",
    content: <DummyContent />,
  },
  {
    category: "JEE Mains Crash course",
    title: "Mansi Chauhan",
    src: "/Students-photo/S4.png",
    content: <DummyContent />,
  },

  {
    category: "JEE Ultimate Course",
    title: "Rohit Sharma",
    src: "/Students-photo/S5.png",
    content: <DummyContent />,
  },
  {
    category: "JEE Study Material",
    title: "Grav Gupta",
    src: "/Students-photo/S6.png",
    content: <DummyContent />,
  },
  {
    category: "Youtube Only",
    title: "Shivam Jaiswal",
    src: "/Students-photo/S7.png",
    content: <DummyContent />,
  },
  {
    category: "Youtube Only",
    title: "Shivam Jaiswal",
    src: "/Students-photo/S8.png",
    content: <DummyContent />,
  },
  {
    category: "Youtube Only",
    title: "Shivam Jaiswal",
    src: "/Students-photo/S9.png",
    content: <DummyContent />,
  },
  {
    category: "Youtube Only",
    title: "Shivam Jaiswal",
    src: "/Students-photo/S10.png",
    content: <DummyContent />,
  },
  {
    category: "Youtube Only",
    title: "Shivam Jaiswal",
    src: "/Students-photo/S11.png",
    content: <DummyContent />,
  },
  {
    category: "Youtube Only",
    title: "Shivam Jaiswal",
    src: "/Students-photo/S12.png",
    content: <DummyContent />,
  },
];
