import { FollowingPointerDemo } from "@/components/Courses";
import FeaturedCourses from "@/components/FeaturedCourses";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ListCourses from "@/components/ListCourses";
import { AnimatedTestimonialsDemo } from "@/components/StudyMaterial";
import Testimonial from "@/components/Testimonial";
import { TypewriterEffectDemo } from "@/components/TypeWriter";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
     <main className="min-h-screen bg-white/[0.96] antialiased bg-grid-white/[0.02]">
      <Header/>
      <TypewriterEffectDemo/>
      {/* <HeroSection/> */}
      <ListCourses/>
      <AnimatedTestimonialsDemo/>
      {/* <FeaturedCourses/> */}
      <Testimonial/>
      <WhyChooseUs/>
      <UpcomingWebinar/>
      
      </main>
  );
}
