import React, { Fragment } from 'react';
import { useState, useEffect } from '@wordpress/element';
import { Popover, Transition } from '@headlessui/react';
import DropdownPopover from './DropDownPopover';
import classnames from 'classnames';
import apiFetch from '@wordpress/api-fetch';

const Header = () => {
	const { activeAccount, accounts } = IDBAdmin;

	const { dispatch, select } = wp.data;

	const [filter, setFilter] = useState(select('dropbox-browser').getData('filter'));
	const [sort, setSort] = useState('asc');

	useEffect(() => {
		dispatch('dropbox-browser').setData('filter', filter);
	}, [filter]);

	// dispatch('dropbox-browser').setData('filter', filter);

	const [aAccount, setActiveAccount] = useState(activeAccount);

	const switchAccount = (id) => {
		apiFetch({
			path: '/idb/v1/switch-account',
			method: 'POST',
			data: {
				id: id,
			},
		}).then((response) => {
			if ('success' === response.status) {
				// window.location.reload();
			}
		});
	};

	return (
		<div className='ud-c-file-browser__header'>
			<nav className='flex ud-c-file-browser__header__breadcrumb' aria-label='Breadcrumb'>
				<ol>
					<li>
						<a href='#'>
							<svg
								aria-hidden='true'
								class='w-4 h-4 mr-2'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'></path>
							</svg>
							Home
						</a>
					</li>
					<li aria-current='page'>
						<div class='flex items-center'>
							<svg
								aria-hidden='true'
								class='w-6 h-6 text-gray-400'
								fill='currentColor'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fill-rule='evenodd'
									d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
									clip-rule='evenodd'
								></path>
							</svg>
							<a
								href='#'
								class='ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white'
							>
								DropBox
							</a>
						</div>
					</li>
				</ol>
			</nav>
			<div className='ud-c-file-browser__header__right'>
				<div className='ud-c-file-browser__header__right__search ud-c-file-browser__header__right__btn'>
					<img src={IDBAdmin.assets + 'images/search.svg'} />
				</div>
				<div className='ud-c-file-browser__header__right__refresh ud-c-file-browser__header__right__btn'>
					<img src={IDBAdmin.assets + 'images/refresh.svg'} />
				</div>

				<DropdownPopover
					className='relative'
					btnData={{
						className:
							'ud-c-file-browser__header__right__filter ud-c-file-browser__header__right__btn relative',
						icon: IDBAdmin.assets + 'images/filter.svg',
						contentClass: 'min-w-[200px]',
					}}
					content={
						<>
							<div className='ud-c-file-browser__header__right__filter__content'>
								<div className='ud-c-file-browser__header__right__filter__content__title'>
									Filter by
								</div>
								<div className='ud-c-file-browser__header__right__filter__content__options'>
									<ul>
										<li
											className={classnames(
												'ud-c-file-browser__header__right__filter__content__options__item',
												{
													'ud-c-file-browser__header__right__filter__content__options__item--active':
														filter === 'name',
												}
											)}
											onClick={() => setFilter('name')}
										>
											Name
										</li>
										<li
											className={classnames(
												'ud-c-file-browser__header__right__filter__content__options__item',
												{
													'ud-c-file-browser__header__right__filter__content__options__item--active':
														filter === 'size',
												}
											)}
											onClick={() => setFilter('size')}
										>
											Size
										</li>
										<li
											className={classnames(
												'ud-c-file-browser__header__right__filter__content__options__item',
												{
													'ud-c-file-browser__header__right__filter__content__options__item--active':
														filter === 'modified',
												}
											)}
											onClick={() => setFilter('modified')}
										>
											Modified
										</li>
									</ul>
								</div>
								<hr />
								<div className='ud-c-file-browser__header__right__filter__content__title'>
									Sort Direction
								</div>
								<div className='ud-c-file-browser__header__right__filter__content__options'>
									<ul>
										<li
											className={classnames(
												'ud-c-file-browser__header__right__filter__content__options__item',
												{
													'ud-c-file-browser__header__right__filter__content__options__item--active':
														sort === 'asc',
												}
											)}
											onClick={() => setSort('asc')}
										>
											ASC
										</li>
										<li
											className={classnames(
												'ud-c-file-browser__header__right__filter__content__options__item',
												{
													'ud-c-file-browser__header__right__filter__content__options__item--active':
														sort === 'desc',
												}
											)}
											onClick={() => setSort('desc')}
										>
											DESC
										</li>
									</ul>
								</div>
							</div>
						</>
					}
				/>

				<DropdownPopover
					className='relative'
					btnData={{
						className:
							'ud-c-file-browser__header__right__more ud-c-file-browser__header__right__btn relative',
						icon: IDBAdmin.assets + 'images/more.svg',
						contentClass: 'min-w-[200px]',
					}}
					content={<h2>More</h2>}
				/>

				<DropdownPopover
					className='relative'
					btnData={{
						className:
							'ud-c-file-browser__header__right__user ud-c-file-browser__header__right__btn relative',
						contentClass: 'min-w-[200px]',
					}}
					btnContent={
						<>
							{accounts ? (
								<div className='ud-c-file-browser__header__right__user__info'>
									<img src={aAccount.photo} alt={aAccount.name} />
									<div className='ud-c-file-browser__header__right__user__info__more'>
										<div className='ud-c-file-browser__header__right__user__info__more__name'>
											{aAccount.name}
										</div>
										<div className='ud-c-file-browser__header__right__user__info__more__email'>
											{aAccount.email}
										</div>
									</div>
								</div>
							) : (
								<button
									onClick={() => {
										window.open(
											IDBAdmin.authUrl,
											'_blank',
											'width=600,height=600,toolbar=yes,scrollbars=yes,resizable=yes'
										);
									}}
									className='ud-c-btn ud-c-btn--primary'
								>
									Add Account
								</button>
							)}
						</>
					}
					content={
						<>
							<div className='ud-c-file-browser__header__right__user__content'>
								{accounts && (
									<>
										<h3>Switch Account</h3>
										{Object.entries(accounts).map((account) => {
											account = account[1];
											return (
												<>
													<div
														className={classnames(
															'ud-c-file-browser__header__right__user__info',
															account.id === aAccount.id
																? 'ud-c-file-browser__header__right__user__info--active'
																: ''
														)}
														onClick={() => {
															switchAccount(account.id);
															setActiveAccount(account);
														}}
													>
														<img
															src={account.photo}
															alt={account.name}
														/>
														<div className='ud-c-file-browser__header__right__user__info__more'>
															<div className='ud-c-file-browser__header__right__user__info__more__name'>
																{account.name}
															</div>
															<div className='ud-c-file-browser__header__right__user__info__more__email'>
																{account.email}
															</div>
														</div>
													</div>
												</>
											);
										})}
									</>
								)}
								<div className='ud-c-file-browser__header__right__user__content__add'>
									<button
										onClick={() => {
											window.open(
												IDBAdmin.authUrl,
												'_blank',
												'width=600,height=600,toolbar=yes,scrollbars=yes,resizable=yes'
											);
										}}
										className='ud-c-btn ud-c-btn--primary'
									>
										Add Account
									</button>
								</div>
							</div>
						</>
					}
				/>
			</div>
		</div>
	);
};

export default Header;
