"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@public/logo3.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import Fade from "@mui/material/Fade";


function Hero() {
    const [anchorEl1, setAnchorEl1] = useState(null);
    const [anchorEl2, setAnchorEl2] = useState(null);
    const [anchorEl3, setAnchorEl3] = useState(null);

    const open1 = Boolean(anchorEl1);
    const open2 = Boolean(anchorEl2);
    const open3 = Boolean(anchorEl3);

    const handleClick = (event, setter) => {
        setter(event.currentTarget);
    };

    const handleClose = (setter) => {
        setter(null);
    };

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <>
            <div className="flex flex-row justify-center p-2 gap-10">
                <Image
                    src={logo}
                    className="md:w-[15rem] sm:w-[10rem] w-[6rem]"
                    alt="logo"
                />
                <div className="flex flex-row items-center gap-5">
                    {isMobile ? (
                        <>
                            <Button
                                variant="text"
                                color="inherit"
                                onClick={(event) => handleClick(event, setAnchorEl1)}
                            >
                                <MenuIcon />
                            </Button>
                            <Menu
                                id="fade-menu"
                                anchorEl={anchorEl1}
                                open={open1}
                                onClose={() => handleClose(setAnchorEl1)}
                                TransitionComponent={Fade}
                            >
                                <MenuItem onClick={() => handleClose(setAnchorEl1)}>
                                    PRODUCTS
                                </MenuItem>
                                <MenuItem onClick={() => handleClose(setAnchorEl1)}>
                                    COLLECTIONS
                                </MenuItem>
                                <MenuItem onClick={() => handleClose(setAnchorEl1)}>
                                    GIFTS
                                </MenuItem>
                                <MenuItem onClick={() => handleClose(setAnchorEl1)}>
                                    GALLERY
                                </MenuItem>
                                <MenuItem onClick={() => handleClose(setAnchorEl1)}>
                                    ABOUT US
                                </MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <>
                            <div>
                                <Button
                                    variant="text"
                                    size="small"
                                    color="inherit"
                                    endIcon={<KeyboardArrowDownIcon />}
                                    onClick={(event) => handleClick(event, setAnchorEl1)}
                                >
                                    Products
                                </Button>
                                <Menu
                                    id="basic-menu1"
                                    anchorEl={anchorEl1}
                                    open={open1}
                                    onClose={() => handleClose(setAnchorEl1)}
                                >
                                    <MenuItem
                                        onClick={() => handleClose(setAnchorEl1)}
                                    >
                                        18 KT Gold
                                    </MenuItem>
                                    <MenuItem onClick={() => handleClose(setAnchorEl1)}>
                                        Gold Plated
                                    </MenuItem>
                                    <MenuItem onClick={() => handleClose(setAnchorEl1)}>
                                        Sterling Silver
                                    </MenuItem>
                                </Menu>
                            </div>
                            <div>
                                <Button
                                    variant="text"
                                    size="small"
                                    color="inherit"
                                    endIcon={<KeyboardArrowDownIcon />}
                                    onClick={(event) => handleClick(event, setAnchorEl2)}
                                >
                                    COLLECTIONS
                                </Button>
                                <Menu
                                    id="basic-menu2"
                                    anchorEl={anchorEl2}
                                    open={open2}
                                    onClose={() => handleClose(setAnchorEl2)}
                                >
                                    <MenuItem onClick={() => handleClose(setAnchorEl2)}>
                                        18 KT Gold
                                    </MenuItem>
                                    <MenuItem onClick={() => handleClose(setAnchorEl2)}>
                                        Gold Plated
                                    </MenuItem>
                                    <MenuItem onClick={() => handleClose(setAnchorEl2)}>
                                        Little & More 2023
                                    </MenuItem>
                                </Menu>
                            </div>
                            <div>
                                <Button
                                    variant="text"
                                    size="small"
                                    color="inherit"
                                    endIcon={<KeyboardArrowDownIcon />}
                                    onClick={(event) => handleClick(event, setAnchorEl3)}
                                >
                                    GIFTS
                                </Button>
                                <Menu
                                    id="basic-menu3"
                                    anchorEl={anchorEl3}
                                    open={open3}
                                    onClose={() => handleClose(setAnchorEl3)}
                                >
                                    <MenuItem onClick={() => handleClose(setAnchorEl3)}>
                                        Gifts Sets
                                    </MenuItem>
                                    <MenuItem onClick={() => handleClose(setAnchorEl3)}>
                                        Gift Packaging
                                    </MenuItem>
                                    <MenuItem onClick={() => handleClose(setAnchorEl3)}>
                                        Gift Voucher
                                    </MenuItem>
                                </Menu>
                            </div>
                            <ul className="flex flex-row gap-5 text-sm items-center">
                                <li>GALLERY</li>
                                <li>ABOUT US</li>
                            </ul>
                        </>
                    )}
                    <div className="flex flex-row gap-5 items-center">
                        <ShoppingBagIcon
                            fontSize="inherit"
                            className="hover:scale-110 transition-all"
                        />
                        <SearchIcon
                            fontSize="inherit"
                            className="hover:scale-110 transition-all"
                        />
                    </div>
                </div>
            </div>
            <Divider />
        </>
    );
}

export default Hero;
