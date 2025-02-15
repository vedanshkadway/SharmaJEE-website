import { Results2 } from '@/components/Result2'
import React from 'react'
// import Image from 'next/image'
// import { CardWithForm } from './RankFilter'
import  Carousel  from '@/components/Carousel'
// import ResultCarousel from '@/components/ResultCarousel'


function FullPage() {
    return (
        <div>
            {/* <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans ">
                JEE Mains Result
            </h2> */}
            
            {/* <ResultCarousel/> */}
            <Carousel/>
            <div className='md:flex md:flex-row'>

                    {/* <CardWithForm /> */}


                <Results2 />
            </div>

        </div>
    )
}

export default FullPage
