import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const onBodyClick = (event) => {
			if (ref.current.contains(event.target)) return;
			setIsOpen(false);
		};

		document.body.addEventListener("click", onBodyClick);

		return () => {
			document.body.removeEventListener("click", onBodyClick);
		};
	}, []);

	const renderedOptions = options.map((option) => {
		if (option.value === selected.value) return null;

		return (
			<div
				key={option.value}
				className="item"
				onClick={(e) => onSelectedChange(option)}
			>
				{option.label}
			</div>
		);
	});

	return (
		<div ref={ref} className="ui form">
			<div className="field">
				<label className="label">{label}</label>
				<div
					onClick={(e) => setIsOpen(!isOpen)}
					className={`ui selection dropdown ${isOpen ? "visible active" : ""}`}
				>
					<i className="dropdown icon"></i>
					<div className="text">{selected.label}</div>
					<div className={`menu ${isOpen ? "visible transition" : ""}`}>
						{renderedOptions}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
