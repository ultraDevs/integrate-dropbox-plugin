export const setActiveTabWithParam = (tab, setTab, id = null) => {
    // Set the active tab
    setTab(tab);

    // Create a new URL object based on the current window location
    const url = new URL(window.location.href);

    // Remove existing 'create' and 'edit' parameters
    url.searchParams.delete('create');
    url.searchParams.delete('edit');

    // Add the appropriate parameter based on the active tab
    if (tab === 'edit' && id !== null) {
        url.searchParams.set('edit', id);
    } else if (tab === 'create') {
        url.searchParams.set('create', '');
    }

    // Update the browser's history state with the new URL
    window.history.pushState({}, '', url.toString());
};