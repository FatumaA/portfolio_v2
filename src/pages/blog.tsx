import React from 'react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Button from '../components/Button'
import Card from '../components/Card';

const blog = ({posts}: any) => {
    return (
        <div className="top-styles my-14">
            <h5 className="tagline"> BLOG POSTS </h5>
            <h1 className="headline">Thoughts on the tech I&apos;m using, learning and loving </h1>
            <div className="card-section">
            {posts.map((p: any, index: number ) => 
             <Card key={index} blogs={p}/>

            )}

            </div>
            

        </div>
    )
}

export default blog

const GET_BLOGS = `
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


export async function getStaticProps() {
    const client = new ApolloClient({
        uri: 'https://api.hashnode.com/',
        cache: new InMemoryCache()
      });

      const { data } = await client.query({
        query: gql `${GET_BLOGS}`
      });
      console.log('DATAAAA', data.user.publication.posts)

    return {
        props: {
          posts: data.user.publication.posts
        }
    }  
  }