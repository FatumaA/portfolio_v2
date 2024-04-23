import { ApolloClient, gql, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
	return new ApolloClient({
		cache: new InMemoryCache(),
		link: new HttpLink({
			uri: "https://gql.hashnode.com",
		}),
	});
});

export const getBlogsQuery = gql`
	{
		publication(host: "blog.hijabicoder.dev") {
			posts(first: 20) {
				edges {
					node {
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
