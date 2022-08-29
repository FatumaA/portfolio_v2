import React from 'react'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import { NextPage } from 'next';
import Card from '../../components/Card';
import { Client, GET_BLOGS } from '../../queries';

const Blog: NextPage = ({posts}: any) => {
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

export default Blog



export async function getStaticProps() {
      const { data } = await Client.query({
        query: gql `${GET_BLOGS}`
      });

    return {
        props: {
          posts: data.user.publication.posts
        }
    }  
  }