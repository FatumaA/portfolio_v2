import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const Client = new ApolloClient({
	uri: "https://gql.hashnode.com",
	cache: new InMemoryCache(),
});

export const GET_BLOGS = gql`
	{
		query
		Publication {
			publication(host: "blog.hijabicoder.dev") {
				posts(first: 20) {
					edges {
						node {
							coverImage {
								url
							}
							title
							brief
							slug
						}
					}
				}
			}
		}
	}
`;

// export const GET_ONE_BLOG = (slugg: string) => `
// {
//     post(slug: "${slugg}" , hostname:"blog.hijabicoder.dev") {
//         title,
//         slug,
//         coverImage,
//         content,
//         contentMarkdown
//       }
//   }
// `;
