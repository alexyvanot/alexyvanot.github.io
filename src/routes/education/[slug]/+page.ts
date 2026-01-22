import { EducationData } from '$lib/data';

export function load({ params }: { params: Record<string, string> }) {
	if (params.slug) {
		const item = EducationData.items.find((item) => {
			return item.slug === params.slug;
		});

		return { item };
	}
}
