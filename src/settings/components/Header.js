import React, { Fragment } from 'react';
import { Popover, Transition } from "@headlessui/react";
import DropdownPopover from './DropDownPopover';

const Header = () => {
	const { activeAccount } = IDBAdmin;
	const options = ["Option 1", "Option 2", "Option 3"];

    return (
		<div className="ud-c-file-browser__header">
			<nav
				className="flex ud-c-file-browser__header__breadcrumb"
				aria-label="Breadcrumb"
			>
				<ol>
					<li>
						<a href="#">
							<svg
								aria-hidden="true"
								class="w-4 h-4 mr-2"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
							</svg>
							Home
						</a>
					</li>
					<li aria-current="page">
						<div class="flex items-center">
							<svg
								aria-hidden="true"
								class="w-6 h-6 text-gray-400"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
									clip-rule="evenodd"
								></path>
							</svg>
							<a
								href="#"
								class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
							>
								Projects
							</a>
						</div>
					</li>
				</ol>
			</nav>
			<div className="ud-c-file-browser__header__right">
				<div className="ud-c-file-browser__header__right__search ud-c-file-browser__header__right__btn">
					<img src={IDBAdmin.assets + "images/search.svg"} />
				</div>
				<div className="ud-c-file-browser__header__right__refresh ud-c-file-browser__header__right__btn">
					<img src={IDBAdmin.assets + "images/refresh.svg"} />
				</div>
				{/* <button
					data-dropdown-toggle="dropdown"
					className="ud-c-file-browser__header__right__filter ud-c-file-browser__header__right__btn"
				></button> */}

				<DropdownPopover
					className="relative"
					btnData={{
						className:
							"ud-c-file-browser__header__right__filter ud-c-file-browser__header__right__btn relative",
						icon: IDBAdmin.assets + "images/filter.svg",
						contentClass: "min-w-[200px]",
					}}
					content={<h2>Filter</h2>}
				/>

				{/* <div className="ud-c-file-browser__header__right__more ud-c-file-browser__header__right__btn">
					<img src={IDBAdmin.assets + "images/more.svg"} />
				</div> */}

				<DropdownPopover
					className="relative"
					btnData={{
						className:
							"ud-c-file-browser__header__right__more ud-c-file-browser__header__right__btn relative",
						icon: IDBAdmin.assets + "images/more.svg",
						contentClass: "min-w-[200px]",
					}}
					content={<h2>More</h2>}
				/>

				<div className="ud-c-file-browser__header__right__user ud-c-file-browser__header__right__btn">
					<div className="ud-c-file-browser__header__right__user__info">
						<img
							src={activeAccount.photo}
							alt={activeAccount.name}
						/>
						<div className="ud-c-file-browser__header__right__user__info__more">
							<div className="ud-c-file-browser__header__right__user__info__more__name">
								{activeAccount.name}
							</div>
							<div className="ud-c-file-browser__header__right__user__info__more__email">
								{activeAccount.email}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
