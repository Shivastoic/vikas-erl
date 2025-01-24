import Container from "@/app/components/container/index";
import GlobeComponent from "./globe";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

// DATA
const data = {

    title: "Driving Success: Reliable Transport Solutions for Businesses and Individuals",

}

const features = [

    {
        title: "Unmatched Reliability and On-Time Deliveries",
        description: "Whether it's bulk shipments for businesses or personal deliveries, our transport network ensures everything arrives on time, every time.",
    },
    {
        title: "Efficient and Cost-Effective Solutions",
        description: "Save time and money with our expertly planned logistics, designed to meet the needs of businesses and individuals alike.",
    },
    {
        title: "Personalized Services for Every Need",
        description: "From small parcels to large shipments, our flexible transport solutions cater to your unique requirements with ease.",
    },

]

export default function MapSection(){

    return (

        <section className="py-14 lg:py-20 bg-accent-green">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="w-full overflow-hidden">
                        <GlobeComponent />
                    </div>
                    <div className="flex flex-col justify-center gap-10 py-8">
                        <h2 className="text-3xl lg:text-4xl text-white font-openSans font-semibold lg:leading-tight">{ data.title }</h2>
                        <div className="flex flex-col gap-6">
                            {

                                features.map( ( data, index ) =>(

                                    <div key={ index } className="flex gap-4">
                                        <div className="py-1">
                                            <FaCheckCircle className="text-white text-xl" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-neutral-100 text-xl font-openSans font-medium">{ data.title }</h3>
                                            <p className="text-sm font-openSans text-neutral-200">{ data.description }</p>
                                        </div>
                                    </div>

                                ))

                            }
                        </div>
                    </div>
                </div>
            </Container>
        </section>

    )

}
