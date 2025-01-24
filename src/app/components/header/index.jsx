import Container from "@/app/components/container/index";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import MobileNav from "./mobile-nav";

// DATA
const data = {

    logo_src: "/logos/logo.png",

}

const nav_links = [

    {
        label: "About",
        link: "#about",
    },
    {
        label: "Services",
        link: "#services",
    },
    {
        label: "Clients",
        link: "#clients",
    },
    {
        label: "FAQ",
        link: "#faq",
    },

]

export default function Header(){

    return (

        <header className="fixed top-0 w-full bg-white z-50">
            <Container>
                <nav className="flex items-center justify-between py-6 border-b border-black/10">
                    <Link href="/">
                        <Image 
                            src={ data.logo_src }
                            alt=""
                            width={ 500 }
                            height={ 500 }
                            className="w-40 md:w-44"
                        />
                    </Link>
                    <ul className="hidden md:flex items-center gap-6">
                        {

                            nav_links.map( ( link, index ) =>(
                                
                                <Link href={ link.link } key={ index }>
                                    <li className="font-openSans font-semibold text-neutral-600 hover:text-accent-green duration-150">
                                        { link.label }
                                    </li>
                                </Link>

                            ))

                        }
                    </ul>
                    <Link href="#contact" className="hidden md:block">
                        <button className="relative flex items-center gap-3 rounded-full pl-5 pr-12 py-2 border-2 border-accent-green bg-white text-accent-green hover:bg-accent-green hover:text-white font-openSans font-semibold group  duration-300">
                            Contact Us
                            <span className="absolute right-1 text-lg size-8 group-hover:bg-white group-hover:text-accent-green bg-accent-green text-white -rotate-45 group-hover:rotate-0 duration-300 flex items-center justify-center rounded-full"><FaArrowRight /></span>
                        </button>
                    </Link>
                    <MobileNav navlinks={ nav_links } />
                </nav>
            </Container>
        </header>

    )

}
