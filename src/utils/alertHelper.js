
export const showAlert = (data) => {
	const defaultData = {
		showCloseButton: true,
	};
	data = Object.assign(defaultData, data);
	
	return window.Swal.fire(data);
};
