"use client";
import React, { FormEvent, useState } from "react";
import Card from "./Card";
import Dialog from "./Dialog";
import { IBlog } from "@/types";
import { searchSupabase } from "@/queries/supabase";

const Search = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [isSearching, setIsSearching] = useState(false);
	const [searchResults, setSearchResults] = useState<IBlog[]>([]);
	const [error, setError] = useState("");

	const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!searchTerm) {
			setError("No search term entered");
			setTimeout(() => {
				setError("");
			}, 3000);
			return;
		}
		setIsSearching(true);

		// coz 2 or more words seem to be treated as an exact match
		const preparedDBSearchString = searchTerm.split(" ").join(" or ");

		console.log(
			"searching for ",
			searchTerm,
			"prepped search term",
			preparedDBSearchString
		);

		const res = await searchSupabase(preparedDBSearchString);

		if (res.length === 0) {
			setSearchTerm("");
			setIsSearching(false);
			setError("No search results found");

			setTimeout(() => {
				setError("");
			}, 3000);
			return;
		}

		setSearchTerm("");
		setIsSearching(false);
		setSearchResults(res);
	};
	return (
		<div className="flex flex-col mb-8 ">
			<form onSubmit={handleSearch} className="flex gap-3">
				{searchResults.length > 0 && (
					<Dialog setSearchResults={setSearchResults}>
						{searchResults.map((res: IBlog, index: number) => (
							<Card key={index} cardInfo={res} isInDialog={true} />
						))}
					</Dialog>
				)}
				<input
					type="text"
					placeholder="search..."
					name="search"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="rounded-sm p-2 bg-inherit md:w-96 border focus:border-brand-accent focus:outline-brand-accent focus:outline-none"
				/>
				<button type="submit" className="btn-primary my-0 md:w-32">
					{isSearching ? "Searching..." : "Search"}
				</button>
			</form>
			<span className=" text-red-300 font-medium mt-1">{error}</span>
		</div>
	);
};

export default Search;
