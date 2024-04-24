import { supabaseServerClient } from "@/lib/supabase";
import { getBlogQuery, getClient } from "@/queries/gql";
import { NextResponse } from "next/server";

enum EventType {
	PostDeleted = "post_deleted",
	PostPublished = "post_published",
	PostUpdated = "post_updated",
}
export async function POST(req: Request) {
	console.log("Hashnode Webhook Received");

	const {
		data: {
			post: { id },
			eventType,
		},
	} = await req.json();

	if (eventType === EventType.PostUpdated) {
		console.log("New Post Update Event");

		const { data, error } = await supabaseServerClient
			.from("hashnode_blogs")
			.select()
			.eq("hashnode_id", id);

		console.log("fetched", data);

		if (error) {
			return NextResponse.json({
				status: 500,
				statusText: "Error getting matching blog in db",
				error: error.message,
			});
		}

		console.log("Successfully fetched blog from db");

		const variables = { id };

		const {
			data: {
				post: {
					title,
					subtitle,
					brief,
					slug,
					coverImage: { url },
					content: { html, markdown },
				},
			},
		} = await getClient().query({ query: getBlogQuery, variables });

		console.log("Successfully fetched new blog from hashnode");

		const { error: updatedError } = await supabaseServerClient
			.from("hashnode_blogs")
			.update({
				title,
				subtitle,
				brief,
				slug,
				url,
				html,
				markdown,
			})
			.eq("hashnode_id", id);

		if (updatedError) {
			return NextResponse.json({
				status: 500,
				statusText: "Error updating post",
				error: updatedError.message,
			});
		}

		console.log("Successfully updated blog in db");

		return NextResponse.json({ status: 200, statusText: "Post updated", data });
	} else if (eventType === EventType.PostDeleted) {
		console.log("New Post Delete Event");

		const { error } = await supabaseServerClient
			.from("hashnode_blogs")
			.delete()
			.eq("hashnode_id", id);

		if (error) {
			return NextResponse.json({
				status: 500,
				statusText: "Error updating post",
				error: error.message,
			});
		}

		console.log("Successfully deleted blog in db");

		return NextResponse.json({ status: 200, statusText: "Post updated" });
	} else {
		console.log("New Post Publish Event");

		const variables = { id };

		const {
			data: {
				post: {
					title,
					subtitle,
					brief,
					slug,
					coverImage: { url },
					content: { html, markdown },
				},
			},
		} = await getClient().query({ query: getBlogQuery, variables });

		console.log("Successfully retrieved newly published blog from hashnode");

		const { error: publishError } = await supabaseServerClient
			.from("hashnode_blogs")
			.insert({
				title,
				subtitle,
				brief,
				slug,
				url,
				html,
				markdown,
				hashnode_id: id,
			});

		if (publishError) {
			return NextResponse.json({
				status: 500,
				statusText: "Error updating post",
				error: publishError.message,
			});
		}

		console.log("Successfully added newly published blog to the db");

		return NextResponse.json({
			status: 200,
			statusText: "Post added to the db",
		});
	}
}

/**
 * shape of incoming request
 * {
	metadata: { uuid: 'daa8c61c-d7d1-45a8-b1d6-17b1496e0fad' },
	data: {
	  publication: { id: '613edb2a1821961e25521795' },
	  post: { id: '6628d433b71fd58826a5ab1a' },
	  eventType: 'post_deleted'
	}
  }
  Request body!!!!! {
	metadata: { uuid: 'b37afc7a-a36b-4817-b8c1-f299b2c2a047' },
	data: {
	  publication: { id: '613edb2a1821961e25521795' },
	  post: { id: '6628d433b71fd58826a5ab18' },
	  eventType: 'post_published'
	}
	Request body!!!!! {
		metadata: { uuid: '58f2da43-d225-4e2f-ae1c-888188bc1bb8' },
		data: {
		  publication: { id: '613edb2a1821961e25521795' },
		  post: { id: '6628d433b71fd58826a5ab19' },
		  eventType: 'post_updated'
		}
	  }
 *  */
