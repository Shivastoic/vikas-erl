import Hero from "@/app/components/hero/index";
import About from "@/app/components/about/index";
import MapSection from "@/app/components/map-section/index";
import MeetFounder from "@/app/components/meet-founder/index";
import Services from "@/app/components/services/index";
import FAQ from "@/app/components/faq/index";
import Clients from "@/app/components/clients/index";

export default function Home() {

	return (

		<section className="">
			<Hero />
			<About />
			<MapSection />
			<Services />
			<FAQ />
			<Clients />
			<MeetFounder />
		</section>

	)
   
}
