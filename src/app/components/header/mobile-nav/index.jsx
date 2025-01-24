"use client"

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

export default function MobileNav({ navlinks }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative md:hidden">
            {/* Circle Button */}
            <button
                onClick={toggleNav}
                className={`fixed top-4 right-4 z-50 flex items-center justify-center size-11 rounded-full shadow-lg bg-accent-green text-white`}
            >
                {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>

            {/* Sliding Navigation Menu */}
            <div
                className={`flex flex-col gap-10 px-8 py-20 fixed top-0 right-0 h-full bg-white shadow-md transform transition-transform duration-300 min-w-60 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <ul className="flex flex-col gap-6">
                    {

                        navlinks.map( ( link, index ) =>(
                            
                            <Link href={ link.link } key={ index }>
                                <li className="font-openSans font-semibold text-neutral-600 hover:text-accent-green duration-150">
                                    { link.label }
                                </li>
                            </Link>

                        ))

                    }
                </ul>
                <Link href="#contact" className="">
                    <button className="relative flex items-center gap-3 rounded-full pl-5 pr-12 py-2 border-2 border-accent-green bg-white text-accent-green hover:bg-accent-green hover:text-white font-openSans font-semibold group  duration-300">
                        Contact Us
                        <span className="absolute right-1 text-lg size-8 group-hover:bg-white group-hover:text-accent-green bg-accent-green text-white -rotate-45 group-hover:rotate-0 duration-300 flex items-center justify-center rounded-full"><FaArrowRight /></span>
                    </button>
                </Link>
            </div>
        </div>
    );
}
