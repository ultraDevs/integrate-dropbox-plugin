import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Browser from './components/Browser';
import { Contexify } from './components/Contexify';

import './scss/admin.scss';
import 'sweetalert2/src/sweetalert2.scss'

const App = () => {
	return (
		<div className='ud-c-file-browser'>
			<Contexify />
			<Header />
			<div className='ud-c-file-browser__body'>
				<Sidebar />
				<Browser />
			</div>
		</div>
	);
};

export default App;
