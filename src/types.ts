export interface IBlog {
	id: string;
	title: string;
	brief: string;
	slug: string;
	subtitle: string;
	coverImage: {
		url: string;
	};
	content: {
		html: string;
		markdown: string;
	};
}
