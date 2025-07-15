import BlogData from '$lib/data/blog';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	if (params.slug) {
		const item = BlogData.items.find((item) => {
			return item.slug === params.slug;
		});

		return { item };
	}
	
	return { item: undefined };
};
