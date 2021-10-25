import React from 'react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Button from '../components/Button'

const blog = ({}) => {
    return (
        <div className="bg-white">
            <h1> Hello Blogs </h1>

        </div>
    )
}

export default blog

const GET_BLOGS = `
    {
        user(username: "catalinpit") {
          publication {
            posts(page: 0) {
              title
              brief
              slug
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
      console.log(data)

    return {
        props: {

        }
    }  
  }