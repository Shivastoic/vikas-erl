import Container from "@/app/components/container/index";
import { FaArrowLeft, FaArrowRight, FaWarehouse } from "react-icons/fa";
import { FiTruck, FiPackage } from "react-icons/fi";
import ServiceSlider from "@/app/components/services/service-slider/index";
import Link from "next/link";

// DATA
const data = {

    title: "Our Services",

}

// SLIDER DATA
const slider_data = [

    {
        icon: <FiTruck />,
        title: "Full-spectrum freight services",
        description: "Offering FTL and LTL shipping, expedited deliveries, specialized care, and global shipping for diverse transportation needs.",
    },
    {
        icon: <FiPackage />,
        title: "Packing and preparing for shipment",
        description: "Comprehensive services for safely packing and preparing items for transport, including palletizing and protecting fragile items.",
    },
    {
        icon: <FaWarehouse />,
        title: "Warehousing and inventory management",
        description: "Offering storage space and inventory. management services for clients who need to store goods before further distribution.",
    },
    {
        icon: <FiTruck />,
        title: "Full-spectrum freight services",
        description: "Offering FTL and LTL shipping, expedited deliveries, specialized care, and global shipping for diverse transportation needs.",
    },
    {
        icon: <FiPackage />,
        title: "Packing and preparing for shipment",
        description: "Comprehensive services for safely packing and preparing items for transport, including palletizing and protecting fragile items.",
    },
    {
        icon: <FaWarehouse />,
        title: "Warehousing and inventory management",
        description: "Offering storage space and inventory. management services for clients who need to store goods before further distribution.",
    },

]

export default function Services(){

    return (

        <section className="py-14 lg:py-20">
            <Container>
                <div className="flex flex-col gap-10 lg:px-10">
                    <div className="flex items-center justify-between py-4 border-b border-black/10">
                        <h2 className="text-4xl lg:text-6xl text-accent-green font-montserrat font-medium">{ data.title }</h2>
                        {/* Custom Navigation Buttons */}
                        <div className="flex items-center justify-center md:justify-end gap-4 relative bottom-0">
                            <button className="custom-swiper-button-prev rounded-full p-2 lg:p-4 flex items-center justify-center border-2 border-accent-green bg-white">
                                <FaArrowLeft className="text-accent-green text-sm lg:text-base" />
                            </button>
                            <button className="custom-swiper-button-next rounded-full p-2 lg:p-4 flex items-center justify-center border-2 border-accent-green bg-accent-green">
                                <FaArrowRight className="text-white text-sm lg:text-base" />
                            </button>
                        </div>
                    </div>
                    <div className="overflow-hidden">
                        <ServiceSlider slider_data={ slider_data } />
                    </div>
                    <div className="flex justify-center items-center">
                        <Link href="/services">
                            <button className="text-nowrap relative flex items-center gap-3 rounded-full pl-5 pr-12 py-2 border-2 border-accent-green bg-white text-accent-green hover:bg-accent-green hover:text-white font-openSans font-semibold group  duration-300">
                                More Services
                                <span className="absolute right-1 text-lg size-8 group-hover:bg-white group-hover:text-accent-green bg-accent-green text-white -rotate-45 group-hover:rotate-0 duration-300 flex items-center justify-center rounded-full"><FaArrowRight /></span>
                            </button>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>

    )

}
