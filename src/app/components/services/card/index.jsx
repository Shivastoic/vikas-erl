import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function ServiceCard({ title, description, icon }){

    return (

        <Link href="/services">
            <div className="flex flex-col gap-8 border-2 border-black/10 rounded-2xl p-6 group hover:bg-accent-green duration-200">
                <div className="flex justify-between items-center">
                    <span className="text-accent-green group-hover:text-white duration-150 text-4xl">{ icon }</span>
                    <div className="rounded-full bg-white border-2 border-accent-green group-hover:bg-accent-green group-hover:border-white duration-150 p-2 flex justify-center items-center">
                        <FaArrowRight className="text-accent-green group-hover:text-white text-xl -rotate-45" />
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h4 className="text-xl text-black group-hover:text-white duration-150 font-medium font-openSans">{ title }</h4>
                    <p className="text-neutral-500 text-sm group-hover:text-neutral-100 duration-150 font-openSans">{ description }</p>
                </div>
            </div>
        </Link>

    ) 

}
