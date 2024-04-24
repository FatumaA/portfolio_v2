import { supabaseClient } from "@/lib/supabaseClient";
import { IBlog } from "@/types";

export const searchSupabase = async (preparedDBSearchString: string) => {
	const { data, error } = await supabaseClient
		.from("hashnode_blogs")
		.select("*")
		.textSearch("title", preparedDBSearchString, {
			type: "websearch",
			config: "english",
		});

	const { data: mdData, error: mdError } = await supabaseClient
		.from("hashnode_blogs")
		.select("*")
		.textSearch("markdown", preparedDBSearchString, {
			type: "websearch",
			config: "english",
		});

	const combinedSearchResults = [...data!, ...mdData!] as IBlog[];

	return combinedSearchResults;
};
