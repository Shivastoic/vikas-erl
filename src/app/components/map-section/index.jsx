import Container from "@/app/components/container/index";
import GlobeComponent from "./globe";
import Image from "next/image";

// DATA
const data = {

    title: "",

}

export default function MapSection(){

    return (

        <section className="py-14 lg:py-20 bg-accent-green">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="flex flex-col gap-8">
                        <h2 className=""></h2>
                    </div>
                    <div className="w-full flex justify-end">
                        <GlobeComponent />
                    </div>
                </div>
            </Container>
        </section>

    )

}
