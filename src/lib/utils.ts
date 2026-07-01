// Small shared helpers.

/** Turn a display name into a URL-safe slug (handles Swedish characters). */
export function slug(input: string): string {
	return input
		.toLowerCase()
		.replace(/&/g, 'och')
		.replace(/[åä]/g, 'a')
		.replace(/ö/g, 'o')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '');
}
