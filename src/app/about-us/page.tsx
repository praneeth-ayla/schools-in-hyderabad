import HeroStart from "@/components/HeroStart";
import Image from "next/image";

export default function page() {
	return (
		<div className="bg-gradient-to-r">
			<HeroStart text="About Us" />
			<div className="pt-10 mx-4 lg:mx-28 sm:p-10  sm:text-left text-white">
				<center className="lg:flex">
				<Image
						alt="logo"
						src={"/Profile.jpg"}
						height={300}
						width={300}
						className="rounded-full transition duration-500 hover:scale-110"
				    />
					<div className="italic font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl">
						&quot;The journey begins at school, where you gain
						wisdom and knowledge to help the less fortunate and grow
						wiser by leveling up, besides taking care of ourselves,
						so that you might become the most resourceful person in
						the country. &quot;
						<p className="text-xs  sm:text-md md:text-lg text-muted-foreground pt-4 text-right font-medium">
						  Y.Bhaskara Phani Kumar - Founder
					    </p>
					</div>
					
					
				</center>
				   <br />
			       <br />
				<div className="flex flex-col gap-6 md:gap-10 ">
				
					<div>
					
						<h1 className="text-lg sm:text-2xl font-bold pb-1">
							Welcome to Edu Infonence
						</h1>
						<p className="text-base md:text-lg text-muted-foreground font-medium">
							At Edu Infonence, we are dedicated to providing
							comprehensive and high-quality information about
							schools in Hyderabad. Through our website,
							schoolsinhyderabad.co.in, we aim to make the process
							of finding the right school for your child as
							seamless and informed as possible.
						</p>
					</div>
					<div>
						<h1 className="text-lg sm:text-2xl font-bold pb-1">
							Our Mission
						</h1>
						<p className="text-base md:text-lg text-muted-foreground font-medium">
							Our mission is to offer parents a reliable and
							comprehensive resource for school information,
							aiding their decision-making by providing up-to-date
							details and high-quality images.
							SchoolsInHyderabad.co.in is designed to simplify the
							search for the best schools in Hyderabad for both
							parents and children. Our portal offers complete
							information, including detailed school profiles,
							photos, curriculum specifics, and extracurricular
							activities, ensuring you have everything you need to
							make an informed choice.
						</p>
					</div>
					<div>
						<h1 className="text-lg sm:text-2xl font-bold pb-1">
							Our Story
						</h1>
						<p className="text-base md:text-lg text-muted-foreground font-medium">
							Edu Infonence was founded out of a desire to improve
							the way parents find professional and reliable
							information about schools. We noticed a gap in the
							availability of quality visuals and accurate data,
							which inspired us to create a platform that combines
							both. Since our inception, we have grown steadily,
							building a reputation for excellence and
							trustworthiness.
						</p>
					</div>
					<div>
						<h1 className="text-lg sm:text-2xl font-bold pb-1 ">
							Why Choose Us?
						</h1>
						<div className="text-base md:text-lg text-muted-foreground font-medium">
							<li>
								<b>High-Quality Images: </b> Our advanced camera
								ensures every school is showcased beautifully.
							</li>
							<li>
								<b>Comprehensive Information: </b> We cover all
								aspects of schools, from facilities to reviews.
							</li>
							<li>
								<b>User-Friendly Interface: </b>Our website is
								designed for ease of use, making your search
								effortless.
							</li>
						</div>
					</div>

					<div>
						<h1 className="text-lg sm:text-2xl font-bold pb-1 ">
							Join Our Launch Promotion!
						</h1>
						<p className="text-base md:text-lg text-muted-foreground font-medium">
							To celebrate our launch, we are offering an
							exclusive promotion! Stay tuned for special offers
							and updates that will help you get the most out of
							our platform. Follow us on @schoolsinhyderabad to be
							the first to know.
						</p>
					</div>
					<div>
						<h1 className="text-lg sm:text-2xl font-bold pb-1 ">
							Get in Touch
						</h1>
						<p className="text-base md:text-lg text-muted-foreground font-medium">
							We love hearing from our users. Whether you have a
							question, feedback, or just want to say hello, feel
							free to contact us at
							support@schoolsinhyderabad.co.in or follow us on
							@schoolsinhyderabad.
						</p>
					</div>
					<span className="text-base md:text-lg text-yellow-300 font-medium">
						<b className="text-white">Please Note: </b>As we strive
						to provide detailed information school by school, it may
						take us a few months to fully populate our database. We
						appreciate your patience as we work diligently to ensure
						every school profile is accurate and up-to-date.
					</span>
				</div>
				
			</div>
		</div>
	);
}
