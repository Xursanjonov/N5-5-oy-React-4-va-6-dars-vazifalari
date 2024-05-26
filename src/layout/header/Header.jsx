import React from 'react'
import { BiSolidWatchAlt } from "react-icons/bi";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
    return (
        <header className='w-[1519px] px-14 py-3 mx-auto flex items-center justify-between bg-black'>
            <a href='/' className="logo py-1 flex items-center gap-2 text-xl font-bold text-white">
                <BiSolidWatchAlt fontSize={28} /> Mohid
            </a>
            <div className="header-tabs flex items-center justify-center gap-4">
                <a href="">Home</a>
                <a href="">Brands</a>
                <a href="">Recent Products</a>
                <a href="">Contact</a>
                <a href="">About</a>
            </div>
            <div className="header-icons flex text-lg items-center justify-center gap-5 text-white">
                <FaSearch />
                <FaUser />
                <FaShoppingCart />
            </div>
        </header>
    )
}

export default Header