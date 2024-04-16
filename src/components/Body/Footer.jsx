"use client"
import React from 'react'
import Button from '@mui/material/Button'

function Footer() {
    return (
        <div className='p-2'>
            <div className='flex md:flex-row flex-col items-center justify-center gap-5 p-4 
            bg-stone-200' >
                <span>NEWSLETTER </span>
                <input type="text"
                    className='p-2 w-[20rem] border border-zinc-950' />
                <Button color='error' size='large' variant='contained'>SUBSCRIBE</Button>
            </div>

            <div className='flex md:flex-row flex-col cursor-pointer items-center justify-center gap-20  font-sans bg-zinc-100 p-3'>
                <ul className='flex flex-col gap-1 md:text-left text-center '>
                    <li className='font-bold mb-5 font-sans '> INFORMATION</li>
                    <li >TESTIMONALS</li>
                    <li className='hover:text-zinc-500 transition-colors'>WHY BUY FROM US?</li>
                    <li className='hover:text-zinc-500 transition-colors'>TERMS & CONDITIONS</li>
                    <li className='hover:text-zinc-500 transition-colors'>PAYMENT OPTIONS</li>
                    <li className='hover:text-zinc-500 transition-colors'>RETURNS & EXCHANGE</li>
                    <li className='hover:text-zinc-500 transition-colors'>PRIVACY POLICY</li>
                </ul>
                <ul className='flex  flex-col gap-1 md:text-left text-center '>
                    <li className='font-bold mb-5 font-sans'> MY ACCOUNT</li>
                    <li>MY ACCOUNT</li>
                    <li className='hover:text-zinc-500 transition-colors'>ORDERS</li>
                    <li className='hover:text-zinc-500 transition-colors'>CART</li>
                    <li className='hover:text-zinc-500 transition-colors'>WISHLIST</li>
                    <li className='hover:text-zinc-500 transition-colors'>CHECKOUT</li>
                    <li className='hover:text-zinc-500 transition-colors'>TRACK ORDER</li>
                </ul>
                <div className='flex flex-col'>
                    <ul className='flex  flex-col gap-1 mb-5 md:text-left text-center '>
                        <li className='font-bold  mb-5 font-sans'>CONTACT US </li>
                        <li className='hover:text-zinc-500 transition-colors' >Unity Showroom</li>
                        <li className='hover:text-zinc-500 transition-colors' >Suresh Nagar, Andheri(w),Mumbai-400053</li>
                    </ul>
                    <ul className='flex  flex-col gap-1 md:text-left text-center '>
                        <li className='font-bold mb-5 font-sans '>CUSTOMER CARE </li>
                        <li className='hover:text-zinc-600'>10:30am – 6:30pm IST(Mon-Fri)</li>
                        <li className='hover:text-zinc-600'>Customer Care- +91 88793 12536
                        </li>
                    </ul>
                </div>
            </div>



        </div >
    )
}

export default Footer
