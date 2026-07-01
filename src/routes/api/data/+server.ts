import { json } from '@sveltejs/kit';
import data from '$lib/data/mecenat_data2.json';

// GET /api/data — serves the single content file that powers the site's text
// and image URLs. Regenerate the underlying JSON with `npm run data`.
export function GET() {
	return json(data);
}
