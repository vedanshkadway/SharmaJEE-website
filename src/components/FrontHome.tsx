"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";

export function FrontHomePage() {
  const words = [
    {
      text: "Padho",
    },
    {
      text: "kahi",
    },
    {
      text: "se",
    },
    {
      text: "Revison",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "yahi",

    },
    {
      text: "se !",
    },
  ];
  return (

    <div className="flex flex-col items-center justify-center h-[40rem] ">
      {/* <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
        The road to freedom starts from here
      </p> */}
      <TypewriterEffect words={words} />
      <p
        className="mt-4 font-normal py-6 text-base md:text-lg text-neutral-800 max-w-lg mx-auto"
      >Dive into our comprehensive JEE courses and transform your JEE journey today.Whether you&#39;re a beginner or looking to refine your skills, join us to unlock your true potential.</p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button className="w-40 h-10 rounded-xl bg-navy hover:bg-org border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border hover:bg-org hover:text-white border-black  text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}
