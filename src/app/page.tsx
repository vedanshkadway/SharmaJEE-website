// import { FollowingPointerDemo } from "@/components/Courses";
// import FeaturedCourses from "@/components/FeaturedCourses";
// import Header from "@/components/Header";
// import HeroSection from "@/components/HeroSection";
import ListCourses from "@/components/ListCourses";
import { StudyMaterial } from "@/components/StudyMaterial";
import Testimonial from "@/components/Testimonial";
import { FrontHomePage } from "@/components/FrontHome";
import Features from "@/components/MoreFeatures";
import WhyChooseUs from "@/components/WhyChooseUs";
// import Image from "next/image";

export default function Home() {
  return (
     <main className="min-h-screen bg-white/[0.96] antialiased bg-grid-white/[0.02]">
      
      <FrontHomePage/>
      {/* <HeroSection/> */}
      <ListCourses/>
      <StudyMaterial/>
      {/* <FeaturedCourses/> */}
      <Features/>
      <Testimonial/>
      <WhyChooseUs/>
      
      </main>
  );
}
