import { ApolloClient, InMemoryCache } from "@apollo/client";

export const Client = new ApolloClient({
  uri: 'https://api.hashnode.com/',
  cache: new InMemoryCache()
});

export const GET_BLOGS = `
    {
        user(username: "HijabiCoder") {
          publication {
            posts(page: 0) {
              title
              brief
              slug
              coverImage
            }
          }
        }
      }
`;

export const GET_ONE_BLOG = (slugg: string) =>  `
{
    post(slug: "${slugg}" , hostname:"blog.hijabicoder.dev") {
        title,
        slug,
        coverImage,
        content,
        contentMarkdown
      }
  }
`;