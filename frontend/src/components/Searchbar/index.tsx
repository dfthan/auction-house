import React, { useCallback } from "react";
import "./index.css";

const Searchbar = ({
	setSearch,
}: {
	setSearch: React.Dispatch<React.SetStateAction<string>>;
}) => {
	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setTimeout(() => {
				setSearch(e.target.value.toLowerCase());
			}, 300);
		},
		[]
	);

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
