"use client"

import { items } from '@/helpers/images'
import Image from 'next/image'
import React from 'react'

function Cards() {
    return (
        // <div>

        //     <div className='grid grid-cols-12 mb-10 mt-20 gap-4 '>
        //         {items.map((item) => (
        //             <div key={item} className='grid md:col-span-6 col-span-12 '>
        //                 <Image
        //                     src={item.img}
        //                     width={600}
        //                     height={400}
        //                     alt='cards'
        //                 />
        //             </div>

        //         ))}
        //     </div>
        // </div>
        <div className="flex justify-center p-4 mt-6 ">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-10   '>
                {items.map((item, index) => (
                    <div key={index} className='flex justify-center '>
                        <div className='max-w-[600px] cursor-pointer hover:scale-95 transition-transform  '>
                            <Image
                                src={item.img}
                                width={600}
                                height={400}
                                alt='cards'
                                className='rounded-lg'
                            />
                            <p className='font-bold text-center p-2'>{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards
