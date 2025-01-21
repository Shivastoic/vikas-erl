import Container from "@/app/components/container/index";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

// DATA
const data = {

    title: "Who are we",
    description: "At Viaks Excellent Roadlines, we prioritize trust, reliability, and timely delivery across the nation. Our dedicated team and well-maintained fleet ensure seamless transportation of goods, catering to diverse industries with efficiency and care.",
    description_two: "Committed to building lasting partnerships, we strive to provide dependable logistics solutions that businesses can count on every step of the way.",

}

const card_data = [

    {
        label: "Customer Satisfaction",
        stat: "100%",
    },
    {
        label: "Regular customers",
        stat: "350+",
    },
    {
        label: "Round-the-Clock Support",
        stat: "24/7",
    },
    {
        label: "Delivered packages",
        stat: "1500+",
    },

]

export default function About(){

    return(

        <section id="about" className="py-14 lg:py-20">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-28 lg:px-10">
                    <div className="flex flex-col justify-between gap-6">
                        <h2 className="text-4xl lg:text-6xl font-montserrat font-medium">{ data.title }</h2>
                        <p className="text-neutral-500 font-openSans font-medium">{ data.description }</p>
                        <p className="text-neutral-500 font-openSans font-medium">{ data.description_two }</p>
                        <Link href="/contact-us">
                            <button className="relative flex items-center gap-3 rounded-full pl-5 pr-12 py-2 border-2 border-accent-green bg-white text-accent-green hover:bg-accent-green hover:text-white font-openSans font-semibold group  duration-300">
                                Contact Us
                                <span className="absolute right-1 text-lg size-8 group-hover:bg-white group-hover:text-accent-green bg-accent-green text-white -rotate-45 group-hover:rotate-0 duration-300 flex items-center justify-center rounded-full"><FaArrowRight /></span>
                            </button>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-10">
                        {

                            card_data.map( ( data, index ) =>(

                                <div key={ index } className="flex flex-col gap-4 items-center py-4">
                                    <p className="text-accent-green text-4xl lg:text-6xl font-montserrat font-semibold">{ data.stat }</p>
                                    <p className="font-openSans text-sm text-center font-semibold">{ data.label }</p>
                                </div>

                            ))
                            
                        }
                    </div>
                </div>
            </Container>
        </section>

    )

}
