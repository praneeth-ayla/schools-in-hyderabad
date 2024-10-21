// Helper function to generate a slug from the school name
export default function generateSlug(name: string) {
	return (
		name
			.trim() // Remove leading and trailing spaces
			.toLowerCase()
			// Preserve double spaces by temporarily replacing them
			.replace(/  /g, "[[DOUBLE_SPACE]]")
			// Replace single spaces with single hyphens
			.replace(/\s/g, "-")
			// Replace the double space marker with double hyphens
			.replace(/\[\[DOUBLE_SPACE\]\]/g, "--")
			// Remove special characters but keep hyphens
			.replace(/[^\w-]+/g, "")
	);
}

export function getIdFromSlug(url: string): string {
	const match = url.match(/-(\d+)$/);
	return match ? match[1] : "";
}

export function extractNameAndArea(url: string) {
	// Extract the part after the last slash (e.g., 'cambridge-syllabus-in-bollaram')
	const lastPart = url.split("/").pop() || "";

	// Split using '-in-' to separate the name and area
	const [namePart, ...areaParts] = lastPart.split("-in-");

	// Replace hyphens with spaces for better readability
	const name = namePart.replace(/-/g, " ");
	const area = areaParts.join("-").replace(/-/g, " ");

	return { name, area };
}
