import Search from "@/components/Search";
import Card from "../../components/Card";
import { getClient, getBlogsQuery } from "../../queries/gql";
import { IBlog } from "@/types";

const Page = async () => {
	const {
		data: {
			publication: {
				posts: { edges },
			},
		},
	} = await getClient().query({ query: getBlogsQuery });

	console.log(edges[4].node.title);

	return (
		<div className="top-styles my-14">
			<h5 className="tagline"> BLOG POSTS </h5>
			<h1 className="headline mb-8">
				Thoughts on the tech I&apos;m using, learning and loving{" "}
			</h1>
			<Search />

			<div className="card-section w-8/12">
				{edges.map(({ node }: { node: IBlog }, index: number) => (
					<Card key={index} cardInfo={node} />
				))}
			</div>
		</div>
	);
};

export default Page;
