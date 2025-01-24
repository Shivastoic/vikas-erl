import Container from "@/app/components/container/index";

export default function Footer(){

    return (

        <footer className="bg-accent-green">
            <Container>
                <div className="py-14 lg:py-20 flex flex-col gap-10 justify-center items-center">
                    <h2 className="font-openSans font-semibold text-4xl md:text-6xl text-white">VIKAS EXCELLENT ROADLINES.</h2>
                </div>
                <p className="text-white/80 font-openSans text-sm text-center p-4">Copyright ©Vikas Excellent Roadlines All Right Reserved</p>
            </Container>
        </footer>

    )

}
