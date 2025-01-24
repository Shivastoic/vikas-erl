import Container from "@/app/components/container/index";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

// DATA
const data = {

    title_one: "Leading the way",
    des_one: "Establishing trust and security in Transport like never before. We specialize in transparency and customer relations.",
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
                            <h2 className="text-4xl lg:text-[115px] leading-none font-montserrat font-semibold"><span className="text-slate-500">Leading</span> the way</h2>
                            <p className="hidden md:block text-sm text-neutral-600 font-openSans font-semibold max-w-64 pt-6">{ data.des_one }</p>
                        </div>
                        <div className="flex justify-between items-center gap-6">
                            <div className="flex gap-3 border border-black/15 rounded-3xl p-2 md:p-4 mt-2">
                                <div className="flex items-center justify-center text-white px-4 md:px-8 py-2 bg-accent-green rounded-full">
                                    <span className="text-xs md:text-base text-white font-montserrat font-semibold">Learn More</span>
                                </div>
                                <Link href="#about">
                                    <div className="size-12 md:size-20 flex items-center justify-center border-2 bg-accent-mint border-accent-mint text-white hover:bg-white hover:text-accent-mint duration-200 rounded-full">
                                        <FaArrowRight className="size-6 rotate-45"/>
                                    </div>
                                </Link>
                            </div>
                            <h2 className="text-4xl lg:text-[115px] leading-none font-montserrat font-semibold">logistics <span className="text-accent-mint">solutions</span></h2>
                        </div>
                    </div>
                    <div className="rounded-2xl overflow-hidden w-full aspect-video">
                        <video
                            src={data.video_src}
                            autoPlay
                            loop
                            muted
                            className="w-full h-full rounded-2xl"
                        ></video>
                    </div>
                </div>
            </Container>
        </section>

    )

}
