import Image from "next/image";

// DATA
const data = {
    title: "Our Partners",
};

const logo_src = [
    "/logos/clients/Bharat_Sanchar_Nigam_Limited-Logo.wine.png",
    "/logos/clients/Badge_of_the_Indian_Air_Force.png",
    "/logos/clients/Customs,_Central_Excise_&_Service_Tax.jpg",
    "/logos/clients/Emblem_of_National_Cadet_Corps_(India).png",
    "/logos/clients/logo_0.png",
    "/logos/clients/msoportal.png",
    "/logos/clients/South-central-railways.webp",
    "/logos/clients/NRSC.png",
    "/logos/clients/images.png",
    "/logos/clients/BL_lgo.png",
];

export default function Clients() {
    return (
        <section className="py-14 lg:py-20" id="clients">
            <div className="flex flex-col gap-10">
                <h2 className="text-4xl lg:text-6xl text-center text-accent-green font-montserrat font-medium">
                    {data.title}
                </h2>

                {/* Logo Container with Infinite Scroll */}
                <div className="overflow-hidden">
                    <div className="flex animate-scroll gap-10 py-4">
                        {
                        
                            logo_src.map((logo, index) => (


                                    <Image
                                        key={index}
                                        src={logo}
                                        alt=""
                                        width={ 500 }
                                        height={ 500 }
                                        className="w-48 aspect-video object-contain"
                                    />


                            ))
                        
                        }
                        {/* Repeat the logos to create an infinite loop effect */}
                        {
                        
                            logo_src.map((logo, index) => (


                                    <Image
                                        key={index}
                                        src={logo}
                                        alt=""
                                        width={ 500 }
                                        height={ 500 }
                                        className="w-48 aspect-video object-contain"
                                    />


                            ))
                            
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}
