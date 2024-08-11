import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function page() {
	const schools= [
		{
		  title: "CMR School",
		  img: "https://cdn-icons-png.flaticon.com/128/5065/5065181.png",
		  description: [
			"Cyber security is the application of technologies, processes and controls to protect systems, networks, programs, devices and data from cyber attacks. It aims to reduce the risk of cyber attacks and protect against the unauthorised exploitation of systems, networks and technologies"
		  ],
		  link: "https://example.com/cyber-security"
		},
	  ];
	  
	  
	  
	return (
		<div className="mt-10 grid md:grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 px-2  sm:px-4 md:px-10 lg:px-40 xl:px-60">
			<Link href={`/school?name=${"randomidhere"}`}>
				<Card className="">
					<CardTitle>
					
        				<img className="rounded-t-lg shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
    				
					</CardTitle>
					<CardDescription>
							
							<div className="p-5">
								<Link href="#">
									<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CMR School</h5>
								</Link>
								<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
								<Link href={`/school?name=${"randomidhere"}`}  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
									Read more
									<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
										<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
									</svg>
								</Link>
							</div>

					</CardDescription>
				</Card>
			</Link>
			<Link href={`/school?name=${"randomidhere"}`}>
				<Card className="">
					<CardTitle>
					
        				<img className="rounded-t-lg shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400 " src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
    				
					</CardTitle>
					<CardDescription>
							
							<div className="p-5">
								<Link href="#">
									<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">School</h5>
								</Link>
								<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
								<Link href={`/school?name=${"randomidhere"}`}  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
									Read more
									<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
										<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
									</svg>
								</Link>
							</div>

					</CardDescription>
				</Card>
			</Link>
			<Link href={`/school?name=${"randomidhere"}`}>
				<Card className="">
					<CardTitle>
					
        				<img className="rounded-t-lg shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
    				
					</CardTitle>
					<CardDescription>
							
							<div className="p-5">
								<Link href="#">
									<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">School</h5>
								</Link>
								<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
								<Link href={`/school?name=${"randomidhere"}`}  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
									Read more
									<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
										<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
									</svg>
								</Link>
							</div>

					</CardDescription>
				</Card>
			</Link>
			<Link href={`/school?name=${"randomidhere"}`}>
				<Card className="">
					<CardTitle>
					
        				<img className="rounded-t-lg shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
    				
					</CardTitle>
					<CardDescription>
							
							<div className="p-5">
								<Link href="#">
									<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">School</h5>
								</Link>
								<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
								<Link href={`/school?name=${"randomidhere"}`}  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
									Read more
									<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
										<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
									</svg>
								</Link>
							</div>

					</CardDescription>
				</Card>
			</Link>
			<Link href={`/school?name=${"randomidhere"}`}>
				<Card className="">
					<CardTitle>
					
        				<img className="rounded-t-lg shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
    				
					</CardTitle>
					<CardDescription>
							
							<div className="p-5">
								<Link href="#">
									<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">School</h5>
								</Link>
								<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
								<Link href={`/school?name=${"randomidhere"}`}  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
									Read more
									<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
										<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
									</svg>
								</Link>
							</div>

					</CardDescription>
				</Card>
			</Link>
			<Link href={`/school?name=${"randomidhere"}`}>
				<Card className="">
					<CardTitle>
					
        				<img className="rounded-t-lg shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
    				
					</CardTitle>
					<CardDescription>
							
							<div className="p-5">
								<Link href="#">
									<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">School</h5>
								</Link>
								<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
								<Link href={`/school?name=${"randomidhere"}`}  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
									Read more
									<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
										<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
									</svg>
								</Link>
							</div>

					</CardDescription>
				</Card>
			</Link>
			<Link href={`/school?name=${"randomidhere"}`}>
				<Card className="">
					<CardTitle>
					
        				<img className="rounded-t-lg shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
    				
					</CardTitle>
					<CardDescription>
							
							<div className="p-5">
								<Link href="#">
									<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">School</h5>
								</Link>
								<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
								<Link href={`/school?name=${"randomidhere"}`}  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
									Read more
									<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
										<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
									</svg>
								</Link>
							</div>

					</CardDescription>
				</Card>
			</Link>
			<Link href={`/school?name=${"randomidhere"}`}>
				<Card className="">
					<CardTitle>
					
        				<img className="rounded-t-lg shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
    				
					</CardTitle>
					<CardDescription>
							
							<div className="p-5">
								<Link href="#">
									<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">School</h5>
								</Link>
								<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
								<Link href={`/school?name=${"randomidhere"}`}  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
									Read more
									<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
										<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
									</svg>
								</Link>
							</div>

					</CardDescription>
				</Card>
			</Link>
			<Link href={`/school?name=${"randomidhere"}`}>
				<Card className="">
					<CardTitle>
					
        				<img className="rounded-t-lg shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
    				
					</CardTitle>
					<CardDescription>
							
							<div className="p-5">
								<Link href="#">
									<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">School</h5>
								</Link>
								<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
								<Link href={`/school?name=${"randomidhere"}`}  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
									Read more
									<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
										<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
									</svg>
								</Link>
							</div>

					</CardDescription>
				</Card>
			</Link>
			
		</div>
	);
}