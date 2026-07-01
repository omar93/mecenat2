import data from './mecenat_data2.json';

export interface PageContent {
	title: string;
	subtitle?: string;
	body: string[];
}

// Copy for the static content pages, sourced from mecenat_data.json
// (regenerate via `npm run data`). Edit the JSON, not this file.
export const pages: Record<string, PageContent> = data.pages;
