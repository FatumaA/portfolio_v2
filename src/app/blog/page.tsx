import React, { useEffect } from "react";
import { gql } from "@apollo/client";

import Card, { IBlog } from "../../components/Card";
import { Client, GET_BLOGS } from "../../queries";

export async function getBlogs() {
	const data = await Client.query({
		query: gql`
			${GET_BLOGS}
		`,
	});

	console.log("DATAAA", data);

	return data;
}

const Page = async () => {
	await getBlogs();
	return (
		<div className="top-styles my-14">
			<h5 className="tagline"> BLOG POSTS </h5>
			<h1 className="headline">
				Thoughts on the tech I&apos;m using, learning and loving{" "}
			</h1>
			<div className="card-section">
				{/* {posts.map((p: IBlog, index: number ) => 
             <Card key={index} cardInfo={p}/>

            )} */}
			</div>
		</div>
	);
};

export default Page;
