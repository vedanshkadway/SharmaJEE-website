import Link from "next/link"
import { Spotlight } from "./ui/spotlight"
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div
    className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 bg-white"
    >
        {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="black"
      /> */}
        <div className="p-4 relative z-10 w-full text-center" >
            <h1
            className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-black"
            >Padho kahi se revision yahi se!</h1>
            <p
            className="mt-4 font-normal text-base md:text-lg text-neutral-800 max-w-lg mx-auto"
            >Dive into our comprehensive JEE courses and transform your JEE journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.</p>
            
        </div>
        
        </div>
  )
}

export default HeroSection