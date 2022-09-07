import React from 'react'
import { gql } from '@apollo/client';

import Card, { IBlog } from '../../components/Card';
import { Client, GET_BLOGS } from '../../queries';
 
const Blog = ({posts}: any) => {
    return (
        <div className="top-styles my-14">
            <h5 className="tagline"> BLOG POSTS </h5>
            <h1 className="headline">Thoughts on the tech I&apos;m using, learning and loving </h1>
            <div className="card-section">
            {posts.map((p: IBlog, index: number ) => 
             <Card key={index} cardInfo={p}/>

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