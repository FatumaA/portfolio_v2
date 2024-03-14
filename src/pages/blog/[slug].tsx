// import { gql } from '@apollo/client'
// import { NextPage } from 'next'
// import { Client, GET_BLOGS, GET_ONE_BLOG } from '../../queries'

// const SingleBlog: NextPage = ({postBody}: any) => {
//     console.log('POSTBODY IN COMPONENT', postBody)
//     return (
//         <div className="top-styles my-14">
//             <h1>hellooo</h1>
//             <h2>{postBody.title}</h2>
//             <h3 dangerouslySetInnerHTML={{__html: postBody.content}}></h3>
//             <article className="prose lg:prose-xl" dangerouslySetInnerHTML={{__html: postBody.contentMarkdown}}></article>
//         </div>
//     )
// }

// export default SingleBlog

// export async function getStaticPaths() {
//       const { data } = await Client.query({
//         query: gql `${GET_BLOGS}`
//       });

//       const paths = data.user.publication.posts.map((post: any) => ({
//         params: { slug: post.slug },
//       }))

//       return {
//         paths, fallback: false
//     }
//   }

// export async function getStaticProps({params}: any) {
//       const { data } = await Client.query({
//         query: gql `${GET_ONE_BLOG(params.slug)}`
//       });

//     return {
//         props: {
//           postBody: data.post
//         },
//         revalidate: 86400
//     }
//   }
