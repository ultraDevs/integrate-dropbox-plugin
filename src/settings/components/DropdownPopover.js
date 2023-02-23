import React, { useState, useRef } from "react";
import { Popover } from "@headlessui/react";

const DropdownPopover = ({ title, options }) => {
	const [selectedOption, setSelectedOption] = useState(options[0]);
	const popoverRef = useRef(null);

	const handleOptionClick = (option) => {
		setSelectedOption(option);
		popoverRef.current.click();
	};

	return (
		<Popover>
			<Popover.Button
				ref={popoverRef}
				className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
			>
				{title}
				
			</Popover.Button>

			<Popover.Panel className="absolute z-10 w-full max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
				<div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
					<div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
						{options.map((option) => (
							<button
								key={option}
								className={`${
									option === selectedOption
										? "bg-gray-100 text-gray-900"
										: "text-gray-700 hover:bg-gray-50"
								} block w-full rounded-md py-2 px-3 text-left text-sm font-medium`}
								onClick={() => handleOptionClick(option)}
							>
								{option}
							</button>
						))}
					</div>
				</div>
			</Popover.Panel>
		</Popover>
	);
};

export default DropdownPopover;
