import Swal from 'sweetalert2';

export const showAlert = (data) => {
	const defaultData = {
		showCloseButton: true,
	};
	data = Object.assign(defaultData, data);
	return Swal.fire(data);
};
