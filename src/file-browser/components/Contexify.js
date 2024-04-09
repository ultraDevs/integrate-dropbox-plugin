// React Contextify.
import { Menu, Item, Separator, Submenu, useContextMenu } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.css';

const MENU_ID = 'file-browser';

export const Contexify = () => {
	const { show } = useContextMenu({
		id: MENU_ID,
	});

	function handleItemClick({ event, props, triggerEvent, data }) {
		console.log(event, props, triggerEvent, data);
	}

	function displayMenu(e) {
		// put whatever custom logic you need
		// you can even decide to not display the Menu
		show({
			event: e,
		});
	}
	// {
	// 	/* just display the menu on right click */
	// }
	// <div onContextMenu={show}>Right click inside the box</div>;
	// {
	// 	/* run custom logic then display the menu */
	// }
	// <div onContextMenu={displayMenu}>Right click inside the box</div>;

	return (
		<div>
			<Menu id={MENU_ID}>
				<Item onClick={handleItemClick}>Item 1</Item>
				<Item onClick={handleItemClick}>Item 2</Item>
				<Separator />
				<Item disabled>Disabled</Item>
				<Separator />
				<Submenu label='Submenu'>
					<Item onClick={handleItemClick}>Sub Item 1</Item>
					<Item onClick={handleItemClick}>Sub Item 2</Item>
				</Submenu>
			</Menu>
		</div>
	);
};
