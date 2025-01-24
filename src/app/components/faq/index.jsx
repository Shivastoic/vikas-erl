import Container from "@/app/components/container/index";
import Image from "next/image";
import Accordion from "./accordion";

// DATA
const data = {

    title: "FAQ",
    src: "/images/deliveryman.jpg",

}

const accordionData = [
    {
        title: "What services does your transport company offer?",
        description: "We offer a wide range of transport services, including full truckload, less-than-truckload (LTL), container shipping, and customized logistics solutions to meet your specific needs.",
    },
    {
        title: "Which areas do you serve?",
        description: "Our transport services primarily operate in and around Hyderabad, Telangana. However, we also cover multiple locations across India based on customer requirements.",
    },
    {
        title: "What types of goods do you transport?",
        description: "We transport a variety of goods, including industrial equipment, consumer goods, raw materials, and perishable items. Contact us to confirm if we can handle your specific cargo type.",
    },
    {
        title: "How do I book your transport services?",
        description: "You can book our services by contacting us directly via phone, email, or our website. We'll guide you through the process and confirm your booking swiftly.",
    },
    {
        title: "Do you offer insurance for goods during transit?",
        description: "Yes, we provide insurance options to ensure your goods are protected against unforeseen circumstances during transit.",
    },
    {
        title: "What is the process for resolving transport-related issues?",
        description: "In case of any issues, you can contact our customer support team. We aim to address and resolve any concerns promptly and efficiently.",
    },
];


export default function FAQ(){

    return (

        <section className="py-14 lg:py-20" id="faq">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16">
                    <div className="w-full h-full ">
                        <Image 
                            src={ data.src }
                            alt=""
                            width={ 1000 }
                            height={ 1000 }
                            className="object-cover w-full h-full rounded-2xl"
                        />
                    </div>
                    <div className="flex flex-col gap-8">
                        <h2 className="text-4xl lg:text-6xl text-accent-green font-openSans font-semibold text-right">{ data.title }</h2>
                        <Accordion accordionData={ accordionData } />
                    </div>
                </div>
            </Container>
        </section>

    )

}
