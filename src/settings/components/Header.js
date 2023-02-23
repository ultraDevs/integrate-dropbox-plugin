import React, { Fragment } from 'react';
import { Popover, Transition } from "@headlessui/react";

const Header = () => {
	const { activeAccount } = IDBAdmin;

	const solutions = [
		{
			name: "Insights",
			description: "Measure actions your users take",
			href: "##",
		},
		{
			name: "Automations",
			description: "Create your own targeted content",
			href: "##",
		},
		{
			name: "Reports",
			description: "Keep track of your growth",
			href: "##",
		},
	];

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
				<Popover className="relative ud-c-file-browser__header__right__filter ud-c-file-browser__header__right__btn">
					<Popover.Button>
						<img src={IDBAdmin.assets + "images/filter.svg"} />
					</Popover.Button>
					<Transition
						as={Fragment}
						enter="transition ease-out duration-200"
						enterFrom="opacity-0 translate-y-1"
						enterTo="opacity-100 translate-y-0"
						leave="transition ease-in duration-150"
						leaveFrom="opacity-100 translate-y-0"
						leaveTo="opacity-0 translate-y-1"
					>
						<Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl">
							<div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
								<div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
									{solutions.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
										>
											<div className="flex items-center justify-center w-10 h-10 text-white shrink-0 sm:h-12 sm:w-12">
											</div>
											<div className="ml-4">
												<p className="text-sm font-medium text-gray-900">
													{item.name}
												</p>
												<p className="text-sm text-gray-500">
													{item.description}
												</p>
											</div>
										</a>
									))}
								</div>
								<div className="p-4 bg-gray-50">
									<a
										href="##"
										className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
									>
										<span className="flex items-center">
											<span className="text-sm font-medium text-gray-900">
												Documentation
											</span>
										</span>
										<span className="block text-sm text-gray-500">
											Start integrating products and tools
										</span>
									</a>
								</div>
							</div>
						</Popover.Panel>
					</Transition>
				</Popover>

				<div className="ud-c-file-browser__header__right__more ud-c-file-browser__header__right__btn">
					<img src={IDBAdmin.assets + "images/more.svg"} />
				</div>

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
