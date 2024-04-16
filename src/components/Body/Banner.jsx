"use client"
import Image from 'next/image'
import React from 'react'

function Banner() {
    return (
        <div>
            <div className=''>
                <Image
                    alt='banner'
                    // src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/0915cb29655437.5e29731d37ced.jpg"
                    src="https://www.angara.com/blog/wp-content/uploads/2023/08/The-Evolution-of-Gold-Jewelry.jpg"

                    width={800}
                    height={100}
                    className='w-full object-cover'
                />
            </div>

        </div>
    )
}

export default Banner
