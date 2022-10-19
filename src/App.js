import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";

const items = [
	{
		title: "What is React?",
		content: "React is a from end javascript freamwork",
	},
	{
		title: "Why use React?",
		content: "React is a favourite JS library among engineers",
	},
	{
		title: "How do you use React?",
		content: "You use React by creating components",
	},
];

const options = [
	{
		label: "The Color Red",
		value: "red",
	},
	{
		label: "The Color Green",
		value: "green",
	},
	{
		label: "A Shade of Blue",
		value: "blue",
	},
];

export default () => {
	const [selected, setSelected] = useState(options[0]);
	const [showDropdown, setShowDropdown] = useState(true);

	return (
		<div>
			<button onClick={() => setShowDropdown(!showDropdown)}>
				Toggle Dropdown
			</button>
			{showDropdown ? (
				<Dropdown
					selected={selected}
					onSelectedChange={setSelected}
					options={options}
				/>
			) : null}
		</div>
	);
};