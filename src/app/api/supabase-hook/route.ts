import { supabaseServerClient } from "@/lib/supabase";
import { getBlogQuery, getClient } from "@/queries/gql";
import { NextResponse } from "next/server";
import crypto from "crypto";

enum EventType {
	PostDeleted = "post_deleted",
	PostPublished = "post_published",
	PostUpdated = "post_updated",
}

const _validateSignature = (
	incomingSignatureHeader: string | null,
	secret: string,
	payload: any
): boolean => {
	if (!incomingSignatureHeader) return false;

	const parts = incomingSignatureHeader.split(",");
	const timestamp = parts.find((part) => part.startsWith("t="))?.split("=")[1];
	const signature = parts.find((part) => part.startsWith("v1="))?.split("=")[1];

	if (!timestamp || !signature) return false;

	const generatedSignature = crypto
		.createHmac("sha256", secret)
		.update(`${timestamp}.${JSON.stringify(payload)}`)
		.digest("hex");

	return crypto.timingSafeEqual(
		Buffer.from(generatedSignature),
		Buffer.from(signature)
	);
};
export async function POST(req: Request) {
	const header = req.headers.get("X-Hashnode-Signature");
	const secretKey = process.env.HASHNODE_WEBHOOK_SECRET;
	const payload = await req.json();

	console.log("Request body!!!!!", payload);

	const isValid = _validateSignature(header, secretKey!, payload);

	console.log("isValid!!!!!", isValid);

	if (!isValid) {
		console.error("Invalid Signature");
		return NextResponse.json({
			status: 401,
			statusText: "Invalid request",
		});
	}
	console.log("Hashnode Webhook Received");

	const {
		data: {
			post: { id },
			eventType,
		},
	} = payload;

	if (eventType === EventType.PostUpdated) {
		console.log("New Post Update Event");

		// const { data, error } = await supabaseServerClient
		// 	.from("hashnode_blogs")
		// 	.select()
		// 	.eq("hashnode_id", id);

		// console.log("fetched", data);

		// if (error) {
		// 	console.error("Error getting matching blog in db", error.message);
		// 	return NextResponse.json({
		// 		status: 500,
		// 		statusText: "Error getting matching blog in db",
		// 		error: error.message,
		// 	});
		// }

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
			console.error("Error updating post", updatedError.message);
			return NextResponse.json({
				status: 500,
				statusText: "Error updating post",
				error: updatedError.message,
			});
		}

		console.log("Successfully updated blog in db");

		return NextResponse.json({ status: 200, statusText: "Post updated" });
	} else if (eventType === EventType.PostDeleted) {
		console.log("New Post Delete Event");

		const { error } = await supabaseServerClient
			.from("hashnode_blogs")
			.delete()
			.eq("hashnode_id", id);

		if (error) {
			console.log("Error deleting post", error.message);
			return NextResponse.json({
				status: 500,
				statusText: "Error deleting post",
				error: error.message,
			});
		}

		console.log("Successfully deleted blog in db");

		return NextResponse.json({
			status: 200,
			statusText: "Post successfully deleted",
		});
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
			console.error("Error updating post", publishError.message);
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
