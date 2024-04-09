import Header from './components/Header';
import Sidebar from './components/Sidebar';

import './scss/settings.scss';
import 'sweetalert2/src/sweetalert2.scss'

const App = () => {
	return (
		<div className='idb-settings'>
			<Header />
			<div className='idb-settings__body'>
				<Sidebar />
				<div className='idb-settings__content'>
					Content
				</div>
			</div>
		</div>
	);
};

export default App;
