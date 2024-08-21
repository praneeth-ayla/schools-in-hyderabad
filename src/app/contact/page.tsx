import ContactForm from "@/components/ContactForm";
import HeroStart from "@/components/HeroStart";

export default function page() {
	return (
		<div>
			<HeroStart text="Contact" />

			<div className="pt-10 mx-4 lg:mx-14 xl:mx-40 sm:p-10 sm:text-left flex flex-col gap-3 md:gap-6 text-white">
				<div className="text-xl md:text-2xl lg:text-3xl font-bold">
					Address
				</div>
				<div className="border-b-2" />
				<div className="flex text-muted-foreground flex-col gap-2 text-sm md:text-base ">
					<div className="flex gap-3 items-center">
						<svg
							className="h-7"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24">
							<title>map-marker</title>
							<path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
						</svg>
						<span>Flat B 501, Essen Marvella, Hyderabad 67</span>
					</div>
					<div className="flex gap-3 items-center">
						<svg
							className="h-7"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24">
							<title>phone</title>
							<path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
						</svg>
						<span>+91 7993340799</span>
					</div>
					<div className="flex gap-3 items-center">
						<svg
							className="h-7"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24">
							<title>email</title>
							<path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
						</svg>
						<span>support@schoolsinhyderabad.co.in</span>
					</div>
				</div>
				<ContactForm />
			</div>
		</div>
	);
}
