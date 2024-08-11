import React from "react";

interface StarRatingProps {
	rating: number; // Rating value between 0 and 5
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
	// Calculate the number of full stars, half stars, and empty stars
	const fullStars = Math.floor(rating);
	const hasHalfStar = rating % 1 !== 0;
	const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

	return (
		<div className="flex">
			{/* Render full stars */}
			{[...Array(fullStars)].map((_, index) => (
				<svg
					key={index}
					xmlns="http://www.w3.org/2000/svg"
					className="h-4 w-4 text-yellow-300"
					fill="currentColor"
					viewBox="0 0 24 24">
					<title>star</title>
					<path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
				</svg>
			))}

			{/* Render half star if needed */}
			{hasHalfStar && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-4 w-4 text-yellow-300"
					fill="currentColor"
					viewBox="0 0 24 24">
					<title>star-half-full</title>
					<path d="M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />
				</svg>
			)}

			{/* Render empty stars */}
			{[...Array(emptyStars)].map((_, index) => (
				<svg
					key={index + fullStars}
					xmlns="http://www.w3.org/2000/svg"
					className="h-4 w-4 text-yellow-300"
					fill="currentColor"
					viewBox="0 0 24 24">
					<title>star-outline</title>
					<path d="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" />
				</svg>
			))}
		</div>
	);
};

export default StarRating;
