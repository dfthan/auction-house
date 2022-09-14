import React from "react";
import "./index.css";

const Searchbar = ({
	setSearch,
}: {
	setSearch: React.Dispatch<React.SetStateAction<string>>;
}) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value.toLowerCase());
	};

	return (
		<div className="search-container">
			<input
				type="input"
				placeholder="Search for a product"
				name="search"
				id="search"
				onChange={(e) => handleChange(e)}
			/>
		</div>
	);
};

export default Searchbar;
