export interface IBlog2 {
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

const Page = ({ params: { blogDeets } }: { params: { blogDeets: string } }) => {
	return <div className="text-white">{blogDeets}</div>;
};

export default Page;
