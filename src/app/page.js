import Hero from "@/app/components/hero/index";
import About from "@/app/components/about/index";
import Map from "@/app/components/map-section/index";
import MeetFounder from "@/app/components/meet-founder/index";

export default function Home() {

	return (

		<section className="">
			<Hero />
			<About />
			<Map />
			<MeetFounder />
		</section>

	)
   
}
