import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function StudyMaterial() {
  const data = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "JEE Mains Study Material",
      designation: "hello world",
      src: "/studymaterial/1.png",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "JEE Ultimate Study Material",
      designation: "hello world",
      src: "/studymaterial/2.png",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "JEE Advanced Study Material",
      designation: "hello world",
      src: "/studymaterial/3.png",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "JEE Super Study Material",
      designation: "hello world",
      src: "/studymaterial/4.png",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "JEE Rapid Study Material",
      designation: "hello world",
      src: "/studymaterial/5.png",
    },
  ];
  return(
    <>
    <div className="min-h-[575px] ">

    <div className="text-6xl font-bold m-4 p-6 text-center">Study Material</div>

      <AnimatedTestimonials testimonials={data} />;
    </div>
    </>
  ) 
}
