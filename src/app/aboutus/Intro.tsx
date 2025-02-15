"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

function Intro() {
    const images = ["/courses/courses1.png", "/courses/courses2.png", "/courses/courses3.png", "/courses/courses4.png"];
    const [currentImage, setCurrentImage] = useState(images[0]);

    useEffect(() => {
        const eventId = setInterval(() => {
            setCurrentImage((prevImage) => {
                const currentIndex = images.indexOf(prevImage);
                const nextIndex = (currentIndex + 1) % images.length;
                return images[nextIndex];
            });
        }, 3000);
        return () => clearInterval(eventId);
    }, [images]);

    return (
        <>
        <div className="py-16 bg-white"></div>
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:w-5/12 lg:w-5/12">
                        <Image 
                            src={currentImage}
                            width={500}
                            height={300}
                            alt="image"
                            />
                    </div>
                    <div className="md:w-7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Lorem ipsum dolor sit amet.
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                            omnis voluptatem accusantium nemo perspiciatis delectus atque
                            autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
                            consequatur! Officiis id consequatur atque doloremque!
                        </p>
                        <p className="mt-4 text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
                            expedita at? Asperiores nemo possimus nesciunt dicta veniam
                            aspernatur quam mollitia.
                        </p>
                    </div>
                </div>
            </div>
    </>
    );
}

export default Intro;
