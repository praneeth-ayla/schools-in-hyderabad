export function extractPngName(url: string) {
	// Find the position of 'f/' in the URL
	const index = url.indexOf("f/") + 2;

	// Extract the PNG name from the URL
	const pngName = url.substring(index);

	return pngName;
}
