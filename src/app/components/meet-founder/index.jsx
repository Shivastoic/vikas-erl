import Container from "@/app/components/container/index";
import Image from "next/image";
import ContactForm from "@/app/components/meet-founder/contact-form/index";

// DATA
const data = {

    title: "Contact Us",

}

export default function MeetFounder(){

    return (

        <section className="pt-14 lg:pt-20 bg-[url('/images/banner.jpg')] bg-cover bg-right bg-no-repeat" id="contact">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                    <div className="flex flex-col gap-10 items-center justify-center">
                        <h2 className="text-4xl lg:text-6xl text-accent-green font-montserrat font-semibold">{ data.title }</h2>
                        <ContactForm />
                    </div>
                    <div className="flex items-center justify-center">
                        <Image 
                            src="/images/banner-img.png"
                            alt=""
                            width={ 1000 }
                            height={ 1000 }
                            className="w-full"
                        />
                    </div>
                </div>
            </Container>
        </section>

    )

}
