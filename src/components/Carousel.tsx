"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const images = [
  "/result/result1.png",
  "/result/result2.png",
  "/result/result3.png",
  "/result/result4.png",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-[1500px] h-[50vh] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden m-2">

      {/* Image Container */}
      <div className="absolute inset-0 transition-opacity duration-700 ease-in-out">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Left Arrow */}
      <button
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-800/50 p-3 rounded-full text-white"
        onClick={prevSlide}
      >
        <ArrowLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-800/50 p-3 rounded-full text-white"
        onClick={nextSlide}
      >
        <ArrowRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

// import * as React from "react"

// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"

// export function CarouselDemo() {
//   return (
//     <Carousel className="w-full max-w-xs">
//       <CarouselContent >
//         {Array.from({ length: 5 }).map((_, index) => (
//           <CarouselItem key={index}>
//             <div className="p-1">
//               <Card className="w-full">
//               <Image 
//             src={images[index]} 
//             alt="Dynamic image"
//             width={500} 
//             height={300} 
//         />
//                 {/* <CardContent className="flex  items-center justify-center p-6">
//                   <span className="text-4xl font-semibold">{index + 1}</span>
//                 </CardContent> */}
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   )
// }

