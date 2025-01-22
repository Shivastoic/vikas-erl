import Container from "@/app/components/container/index";

export default function MeetFounder(){

    return (

        <section className="py-14 lg:py-20 bg-[url('/images/founder.jpg')] bg-cover bg-cneter bg-no-repeat h-[130vh]">
            <Container>
                <div className="flex justify-end">
                    <div className="rounded-3xl bg-white/15 backdrop-blur-md h-[70vh] w-[500px]"></div>
                </div>
            </Container>
        </section>

    )

}
