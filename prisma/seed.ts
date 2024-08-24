const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
	// Create School
	const school = await prisma.school.create({
		data: {
			name: "TIME SCHOOL",
			aboutUs:
				"TIME SCHOOL is renowned for its exceptional education, modern facilities, and a focus on holistic development, preparing students for a bright future.",
			logo: "https://utfs.io/f/ca9956e9-2165-41b0-bcb4-4355b6f51432-1zbfv.png",
			rating: 4.8,
			locationMap:
				'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.1892139044535!2d78.47535730000001!3d17.59374765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb85f580d6ee93%3A0x352651fbd3858732!2sTIME%20SCHOOL%2C%20Hyderabad%2C%20Kandlakoya%2C%20Telangana%20501401!5e0!3m2!1sen!2sin!4v1724509514453!5m2!1sen!2sin" width="300" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
			contact: {
				create: {
					email: "info@timeschool.com",
					location: "Kandlakoya, Telangana",
					number: "+91 123 456 7890",
					website: "https://timeschool.com",
				},
			},
			facilities: {
				create: [
					{ name: "Library" },
					{ name: "Science Lab" },
					{ name: "Computer Lab" },
				],
			},
			events: {
				create: [
					{
						title: "Annual Sports Day",
						description:
							"A day filled with exciting sports events for students, including track and field, team sports, and more.",
						image: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg",
						date: new Date(),
					},
					{
						title: "Science Fair",
						description:
							"Showcase of student science projects and experiments.",
						image: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg",
						date: new Date(),
					},
					{
						title: "Cultural Fest",
						description:
							"Celebration of various cultural activities and performances.",
						image: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg",
						date: new Date(),
					},
					{
						title: "Annual Sports Day",
						description:
							"A day filled with exciting sports events for students, including track and field, team sports, and more.",
						image: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg",
						date: new Date(),
					},
					{
						title: "Science Fair",
						description:
							"Showcase of student science projects and experiments.",
						image: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg",
						date: new Date(),
					},
					{
						title: "Cultural Fest",
						description:
							"Celebration of various cultural activities and performances.",
						image: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg",
						date: new Date(),
					},
					{
						title: "Annual Sports Day",
						description:
							"A day filled with exciting sports events for students, including track and field, team sports, and more.",
						image: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg",
						date: new Date(),
					},
					{
						title: "Science Fair",
						description:
							"Showcase of student science projects and experiments.",
						image: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg",
						date: new Date(),
					},
					{
						title: "Cultural Fest",
						description:
							"Celebration of various cultural activities and performances.",
						image: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg",
						date: new Date(),
					},
				],
			},
			images: {
				create: [
					{
						url: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg",
					},
					{
						url: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg", // Same image reused
					},
					{
						url: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg", // Same image reused
					},
					{
						url: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg",
					},
					{
						url: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg", // Same image reused
					},
					{
						url: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg", // Same image reused
					},
					{
						url: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg",
					},
					{
						url: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg", // Same image reused
					},
					{
						url: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg", // Same image reused
					},
				],
			},
			videos: {
				create: [
					{
						src: "https://youtu.be/NLOp_6uPccQ?si=aCMcM35F21R3Pg90",
						title: "Introduction to TIME SCHOOL",
					},
					{
						src: "https://youtu.be/NLOp_6uPccQ?si=aCMcM35F21R3Pg90", // Same video reused
						title: "Campus Tour",
					},
					{
						src: "https://youtu.be/NLOp_6uPccQ?si=aCMcM35F21R3Pg90", // Same video reused
						title: "Student Testimonials",
					},
					{
						src: "https://youtu.be/NLOp_6uPccQ?si=aCMcM35F21R3Pg90",
						title: "Introduction to TIME SCHOOL",
					},
					{
						src: "https://youtu.be/NLOp_6uPccQ?si=aCMcM35F21R3Pg90", // Same video reused
						title: "Campus Tour",
					},
					{
						src: "https://youtu.be/NLOp_6uPccQ?si=aCMcM35F21R3Pg90", // Same video reused
						title: "Student Testimonials",
					},
					{
						src: "https://youtu.be/NLOp_6uPccQ?si=aCMcM35F21R3Pg90",
						title: "Introduction to TIME SCHOOL",
					},
					{
						src: "https://youtu.be/NLOp_6uPccQ?si=aCMcM35F21R3Pg90", // Same video reused
						title: "Campus Tour",
					},
					{
						src: "https://youtu.be/NLOp_6uPccQ?si=aCMcM35F21R3Pg90", // Same video reused
						title: "Student Testimonials",
					},
				],
			},
			reviews: {
				create: [
					{
						name: "John Doe",
						message:
							"Great school with excellent faculty and well-rounded education!",
						date: new Date(),
						rating: 5,
					},
					{
						name: "Jane Smith",
						message:
							"A fantastic learning environment with supportive teachers.",
						date: new Date(),
						rating: 4,
					},
					{
						name: "Emily Johnson",
						message:
							"Highly recommend for its innovative teaching methods.",
						date: new Date(),
						rating: 4.5,
					},
				],
			},
			area: {
				connect: { name: "Ameerpet" },
			},
			category: {
				connect: { name: "High School CBSE" },
			},
			awards: {
				create: [
					{
						title: "Best School Award 2024",
						description:
							"Awarded for overall excellence in education and student development.",
						image: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg",
						date: new Date(),
					},
					{
						title: "Top Sports School 2024",
						description:
							"Recognized for outstanding performance in sports and extracurricular activities.",
						image: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg",
						date: new Date(),
					},
					{
						title: "Excellence in Academics 2024",
						description:
							"Awarded for exceptional academic achievements by students.",
						image: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg",
						date: new Date(),
					},
					{
						title: "Best School Award 2024",
						description:
							"Awarded for overall excellence in education and student development.",
						image: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg",
						date: new Date(),
					},
					{
						title: "Top Sports School 2024",
						description:
							"Recognized for outstanding performance in sports and extracurricular activities.",
						image: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg",
						date: new Date(),
					},
					{
						title: "Excellence in Academics 2024",
						description:
							"Awarded for exceptional academic achievements by students.",
						image: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg",
						date: new Date(),
					},
					{
						title: "Best School Award 2024",
						description:
							"Awarded for overall excellence in education and student development.",
						image: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg",
						date: new Date(),
					},
					{
						title: "Top Sports School 2024",
						description:
							"Recognized for outstanding performance in sports and extracurricular activities.",
						image: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg",
						date: new Date(),
					},
					{
						title: "Excellence in Academics 2024",
						description:
							"Awarded for exceptional academic achievements by students.",
						image: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg",
						date: new Date(),
					},
				],
			},
			toppers: {
				create: [
					{
						title: "Top Science Student",
						description:
							"Recognized for outstanding achievements in Science.",
						image: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg",
						date: new Date(),
					},
					{
						title: "Top Performing Student",
						description:
							"Awarded for highest overall performance in academics.",
						image: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg",
						date: new Date(),
					},
					{
						title: "Best Arts Student",
						description:
							"Recognized for outstanding achievements in Arts.",
						image: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg",
						date: new Date(),
					},
					{
						title: "Top Science Student",
						description:
							"Recognized for outstanding achievements in Science.",
						image: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg",
						date: new Date(),
					},
					{
						title: "Top Performing Student",
						description:
							"Awarded for highest overall performance in academics.",
						image: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg",
						date: new Date(),
					},
					{
						title: "Best Arts Student",
						description:
							"Recognized for outstanding achievements in Arts.",
						image: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg",
						date: new Date(),
					},
					{
						title: "Top Science Student",
						description:
							"Recognized for outstanding achievements in Science.",
						image: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg",
						date: new Date(),
					},
					{
						title: "Top Performing Student",
						description:
							"Awarded for highest overall performance in academics.",
						image: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg",
						date: new Date(),
					},
					{
						title: "Best Arts Student",
						description:
							"Recognized for outstanding achievements in Arts.",
						image: "https://utfs.io/f/68c5927b-4a8b-474e-a456-ad5d07baf8de-tpk6wk.com_wallpaper.jpg",
						date: new Date(),
					},
				],
			},
		},
	});

	console.log({ school });
}

main()
	.catch((e) => {
		console.error(e);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
