require("dotenv").config();
import { ApolloClient, InMemoryCache, HttpLink, gql } from "@apollo/client";
import { supabaseServerClient } from "./lib/supabase";
import { IBlog } from "./types";

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: new HttpLink({
		uri: "https://gql.hashnode.com",
	}),
});

const getBlogsQuery = gql`
	{
		publication(host: "blog.hijabicoder.dev") {
			posts(first: 20) {
				edges {
					node {
						id
						coverImage {
							url
						}
						title
						subtitle
						brief
						slug
						content {
							html
							markdown
						}
					}
				}
			}
		}
	}
`;

export async function populateBlogs() {
	const {
		data: {
			publication: {
				posts: { edges },
			},
		},
	} = await client.query({ query: getBlogsQuery });

	const { data: blogs, error: fetchError } = await supabaseServerClient
		.from("hashnode_blogs")
		.select("id")
		.limit(1);

	if (fetchError) {
		console.error(
			"Error checking if from supabase blogs table is populated",
			fetchError.hint
		);
		return;
	}

	if (blogs.length > 0) {
		console.log("Blogs table is not empty, skipping population");
		return;
	}

	edges.forEach(async ({ node }: { node: IBlog }) => {
		const {
			id,
			title,
			subtitle,
			brief,
			slug,
			content: { html, markdown },
			coverImage: { url },
		} = node;

		const { data, error: insertError } = await supabaseServerClient
			.from("hashnode_blogs")
			.insert({
				hashnode_id: id,
				title,
				subtitle,
				brief,
				slug,
				html,
				markdown,
				url,
			});

		if (insertError) {
			console.error(
				"Error adding hashnode blogs to supabase",
				insertError.hint
			);
			return;
		}

		console.log("Hashnode blogs added to supabase table", data);
		return data;
	});
}
populateBlogs().catch(console.error);
