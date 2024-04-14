import React from 'react';
import { useState } from '@wordpress/element';
import DropdownPopover from './DropDownPopover';
import classnames from 'classnames';
import apiFetch from '@wordpress/api-fetch';
import { useSelect, dispatch } from '@wordpress/data';
import { showAlert } from '../../utils/alertHelper';

const Header = () => {
	const { activeAccount, accounts } = IDBData;

	const breadcrumbs = useSelect((select) => select('dropbox-browser').getData('breadcrumbs'));
	const refresh = useSelect((select) => select('dropbox-browser').getData('refresh'));
	const filterV = useSelect((select) => select('dropbox-browser').getData('filter'));
	const currentPath = useSelect((select) => select('dropbox-browser').getData('current_path'));

	const filter = filterV.by ? filterV.by : 'name';
	const sortDirection = filterV.direction ? filterV.direction : 'asc';

	console.log(filterV);

	const setFilter = (filter) => {
		dispatch('dropbox-browser').setData('isLoading', true);
		// update FilterV's by property.
		dispatch('dropbox-browser').setData('filter', {
			...filterV,
			by: filter,
		});
	};

	const setSortDirection = (dir) => {
		dispatch('dropbox-browser').setData('isLoading', true);
		dispatch('dropbox-browser').setData('filter', {
			...filterV,
			direction: dir,
		});
	};

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
				dispatch('dropbox-browser').setData('refresh', true);
				dispatch('dropbox-browser').setData('isLoading', true);
			}
			// Reload the page.
			window.location.reload();
		});
	};

	const handleCreateFolder = () => {
		showAlert({
			title: 'New Folder',
			html: `
					<p>Create New Folder</p>
					<div>
						<input id="swal-new-folder-input" class="swal2-input" placeholder="Create New Folder" />
					</div>
				`,
			confirmButtonText: 'Create',
		}).then((result) => {
			if (result.isConfirmed) {
				wp.ajax
					.post('idb_create_folder', {
						account_id: activeAccount['id'],
						nonce: IDBData?.ajaxNonce,
						path: currentPath,
						name: document.getElementById('swal-new-folder-input').value,
					})
					.then((response) => {
						showAlert({
							title: 'Success',
							text: response.message,
							icon: 'success',
						});

						// Dispatch an action to refresh the browser.
						dispatch('dropbox-browser').setData('isLoading', true);
						dispatch('dropbox-browser').setData('refresh', true);
					})
					.catch((error) => {
						showAlert({
							title: 'Error',
							text: error.message,
							icon: 'error',
						});
					});
			}
		});
	};

	return (
		<div className='idb-file-browser__header'>
			<nav className='flex idb-file-browser__header__breadcrumb' aria-label='Breadcrumb'>
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
					{breadcrumbs.map((item, index) => {
						return (
							<li
								aria-current='page'
								key={index}
								onClick={() => {
									dispatch('dropbox-browser').setData(
										'current_path',
										item.path.replace(/\/$/, '')
									);
								}}
							>
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
									<a href='#'>{item.name}</a>
								</div>
							</li>
						);
					})}
				</ol>
			</nav>
			<div className='idb-file-browser__header__right'>
				{/* <div className='idb-file-browser__header__right__search idb-file-browser__header__right__btn'>
					<img src={IDBData.assets + 'images/search.svg'} />
				</div> */}
				<div
					className='idb-file-browser__header__right__refresh idb-file-browser__header__right__btn'
					onClick={() => {
						dispatch('dropbox-browser').setData('refresh', !refresh);
						dispatch('dropbox-browser').setData('isLoading', true);
					}}
				>
					<img src={IDBData.assets + 'images/refresh.svg'} />
				</div>

				<DropdownPopover
					className='relative'
					btnData={{
						className:
							'idb-file-browser__header__right__filter idb-file-browser__header__right__btn relative',
						icon: IDBData.assets + 'images/filter.svg',
						contentClass: 'min-w-[200px]',
					}}
					content={
						<>
							<div className='idb-file-browser__header__right__filter__content'>
								<div className='idb-file-browser__header__right__filter__content__title'>
									Filter by
								</div>
								<div className='idb-file-browser__header__right__filter__content__options'>
									<ul>
										<li
											className={classnames(
												'idb-file-browser__header__right__filter__content__options__item',
												{
													'idb-file-browser__header__right__filter__content__options__item--active':
														filter === 'name',
												}
											)}
											onClick={() => setFilter('name')}
										>
											Name
										</li>
										<li
											className={classnames(
												'idb-file-browser__header__right__filter__content__options__item',
												{
													'idb-file-browser__header__right__filter__content__options__item--active':
														filter === 'size',
												}
											)}
											onClick={() => setFilter('size')}
										>
											Size
										</li>
										<li
											className={classnames(
												'idb-file-browser__header__right__filter__content__options__item',
												{
													'idb-file-browser__header__right__filter__content__options__item--active':
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
								<div className='idb-file-browser__header__right__filter__content__title'>
									Sort Direction
								</div>
								<div className='idb-file-browser__header__right__filter__content__options'>
									<ul>
										<li
											className={classnames(
												'idb-file-browser__header__right__filter__content__options__item',
												{
													'idb-file-browser__header__right__filter__content__options__item--active':
														sortDirection === 'asc',
												}
											)}
											onClick={() => setSortDirection('asc')}
										>
											ASC
										</li>
										<li
											className={classnames(
												'idb-file-browser__header__right__filter__content__options__item',
												{
													'idb-file-browser__header__right__filter__content__options__item--active':
														sortDirection === 'desc',
												}
											)}
											onClick={() => setSortDirection('desc')}
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
							'idb-file-browser__header__right__more idb-file-browser__header__right__btn relative',
						icon: IDBData.assets + 'images/more.svg',
						contentClass: 'min-w-[200px]',
					}}
					content={
						<>
							<div className='idb-file-browser__header__right__more__content'>
								<ul>
									<li onClick={() => handleCreateFolder()}>New Folder</li>
									<li onClick={ () => dispatch('dropbox-browser').setData('showUploader', true) }>Upload</li>
									<li>Select All</li>
									<li>Download</li>
								</ul>
							</div>
						</>
					}
				/>

				<DropdownPopover
					className='relative'
					btnData={{
						className:
							'idb-file-browser__header__right__user idb-file-browser__header__right__btn relative',
						contentClass: 'min-w-[200px]',
					}}
					btnContent={
						<>
							{accounts ? (
								<div className='idb-file-browser__header__right__user__info'>
									<img src={aAccount.photo} alt={aAccount.name} />
									<div className='idb-file-browser__header__right__user__info__more'>
										<div className='idb-file-browser__header__right__user__info__more__name'>
											{aAccount.name}
										</div>
										<div className='idb-file-browser__header__right__user__info__more__email'>
											{aAccount.email}
										</div>
									</div>
								</div>
							) : (
								<button
									onClick={() => {
										window.open(
											IDBData.authUrl,
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
							<div className='idb-file-browser__header__right__user__content'>
								{accounts && (
									<>
										<h3>Switch Account</h3>
										{Object.entries(accounts).map((account) => {
											account = account[1];
											return (
												<>
													<div
														className={classnames(
															'idb-file-browser__header__right__user__info',
															account.id === aAccount.id
																? 'idb-file-browser__header__right__user__info--active'
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
														<div className='idb-file-browser__header__right__user__info__more'>
															<div className='idb-file-browser__header__right__user__info__more__name'>
																{account.name}
															</div>
															<div className='idb-file-browser__header__right__user__info__more__email'>
																{account.email}
															</div>
														</div>
													</div>
												</>
											);
										})}
									</>
								)}
								<div className='idb-file-browser__header__right__user__content__add'>
									<button
										onClick={() => {
											window.open(
												IDBData.authUrl,
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
