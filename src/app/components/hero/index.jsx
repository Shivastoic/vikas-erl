import Container from "@/app/components/container/index";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

// DATA
const data = {

    title_one: "Leading the way",
    des_one: "Establishing trust and security in Transport like never before. We believe in transparency and customer relations.",
    title_two: "logistics solutions",
    video_src: "/video/hero-video.mp4",

}

export default function Hero(){
    
    return(

        <section className="pt-36 pb-14">
            <Container>
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-6">
                        <div className="flex justify-between items-center gap-6">
                            <h2 className="text-[115px] leading-none font-montserrat font-semibold">{ data.title_one }</h2>
                            <p className="text-sm font-openSans font-semibold max-w-64 pt-6">{ data.des_one }</p>
                        </div>
                        <div className="flex justify-between items-center gap-6">
                            <div className="flex gap-3 border border-black/15 rounded-3xl p-4 mt-2">
                                <div className="flex items-center justify-center text-white px-8 py-2 bg-accent-green rounded-full">
                                    <span className="text-white font-montserrat font-semibold">Learn More</span>
                                </div>
                                <Link href="#about">
                                    <div className="size-20 flex items-center justify-center border-2 border-green-400 bg-green-400 text-white hover:bg-white hover:text-green-400 duration-200 rounded-full">
                                        <FaArrowRight className="size-6 rotate-45"/>
                                    </div>
                                </Link>
                            </div>
                            <h2 className="text-[115px] leading-none font-montserrat font-semibold">{ data.title_two }</h2>
                        </div>
                    </div>
                    <div className="rounded-2xl overflow-hidden w-full aspect-video">
                        <video src={ data.video_src } autoPlay loop className="w-full h-full rounded-2xl"></video>
                    </div>
                </div>
            </Container>
        </section>

    )

}
