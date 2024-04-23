// "use server";
import Search from "@/components/Search";
import Card, { IBlog } from "../../components/Card";
import { getClient, getBlogsQuery } from "../../queries";
import { supabaseServerClient } from "@/lib/supabase";

const Page = async () => {
	const {
		data: {
			publication: {
				posts: { edges },
			},
		},
	} = await getClient().query({ query: getBlogsQuery });

	// const postToSupabase = (edges) => {
	// edges.forEach(async ({ node }: { node: IBlog }) => {
	// 	const {
	// 		title,
	// 		subtitle,
	// 		brief,
	// 		slug,
	// 		content: { html, markdown },
	// 		coverImage: { url = "" },
	// 	} = node;

	// 	const { data, error } = await supabaseServerClient
	// 		.from("hashnode_blogs")
	// 		.insert({ title, subtitle, brief, slug, html, markdown, url });

	// 	if (error) {
	// 		console.error("Error inserting blog to supabase", error.hint);
	// 		return;
	// 	}

	// 	console.log("Blog inserted to supabase", data);
	// 	return data;
	// });
	// };

	// const search = async (searchData: FormData) => {
	// 	"use server";
	// 	const searchTerm = searchData.get("search")!;
	// 	const searchString = searchTerm.toString();

	// 	console.log("searching for ", searchString);

	// 	// coz 2 or more words are treated as an exact match
	// 	const preparedDBSearchString = searchString.split(" ").join(" or ");

	// 	const { data, error } = await supabaseServerClient
	// 		.from("hashnode_blogs")
	// 		.select("slug")
	// 		.textSearch("title", preparedDBSearchString, {
	// 			type: "websearch",
	// 			config: "english",
	// 		});

	// 	const { data: mdData, error: mdError } = await supabaseServerClient
	// 		.from("hashnode_blogs")
	// 		.select("slug")
	// 		.textSearch("markdown", preparedDBSearchString, {
	// 			type: "websearch",
	// 			config: "english",
	// 		});

	// 	searchData.set("search", "");

	// 	console.log("COMBINED SEARCHH", [{ ...data, ...mdData }]);
	// };

	console.log(edges[4].node.title);

	return (
		<div className="top-styles my-14">
			<h5 className="tagline"> BLOG POSTS </h5>
			<h1 className="headline mb-8">
				Thoughts on the tech I&apos;m using, learning and loving{" "}
			</h1>
			{/* <form action={search} className="mb-8 flex gap-3">
				<input
					type="text"
					placeholder="search..."
					name="search"
					className="rounded-sm p-2 bg-inherit w-96 border focus:border-brand-accent focus:outline-brand-accent focus:outline-none"
				/>
				<button type="submit" className="btn-primary my-0 w-32">
					Search
				</button>
			</form> */}
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
