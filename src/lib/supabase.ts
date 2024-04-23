import { createClient } from "@supabase/supabase-js";

export const supabaseServerClient = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// export const supabaseClient = createClient(
// 	process.env.NEXT_PUBLIC_SUPABASE_URL!,
// 	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );
// console.log("Supabase server Instance: ", supabaseServerClient);
