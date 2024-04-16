"use client"
import React, { useState } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Divider from '@mui/material/Divider';
import Hero from './Hero';




function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <div className='flex md:flex-row flex-col gap-4 sm:gap-1 justify-around p-4 items-center'>
                <div className='text-zinc-400 font-sans sm:text-sm text-xs '> Customer Care: +91 123456789 | shop@unity.com </div >

                <div className='flex flex-row gap-4'>
                    <div>
                        <Button
                            // id="basic-button"
                            // variant='text'
                            // aria-controls={open ? 'basic-menu' : undefined}
                            // aria-haspopup="true"
                            // aria-expanded={open ? 'true' : undefined}
                            size='small'
                            variant='text'
                            color='inherit'
                            onClick={handleClick}
                            endIcon={<KeyboardArrowDownIcon />}
                            className='from-neutral-700'
                        >
                            My Account
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Login</MenuItem>
                            <MenuItem onClick={handleClose}>Orders</MenuItem>
                            <MenuItem onClick={handleClose}>Cart</MenuItem>
                            <MenuItem onClick={handleClose}>Wishlist</MenuItem>
                            <MenuItem onClick={handleClose}>Checkout</MenuItem>
                            <MenuItem onClick={handleClose}>Order</MenuItem>
                        </Menu>

                    </div>

                    <ul className='flex flex-row gap-5 items-center cursor-pointer'>
                        <li className='hover:scale-110 transition-all'><InstagramIcon fontSize='small' /></li>
                        <li className='hover:scale-110 transition-all'><FacebookIcon fontSize='small' /></li>
                        <li className='hover:scale-110 transition-all'><TwitterIcon fontSize='small' /></li>
                        <li className='hover:scale-110 transition-all'><PinterestIcon fontSize='small' /></li>
                    </ul>
                </div>
            </div >
            <Divider />
            <Hero />
        </>
    )
}

export default Navbar;
