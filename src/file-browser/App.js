import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Browser from './components/Browser';
import { Contexify } from './components/Contexify';

import './scss/admin.scss';
import 'sweetalert2/src/sweetalert2.scss'

// import styles
import 'lightgallery/css/lightgallery-bundle.css';
// import 'lightgallery/css/lg-zoom.css';
// import 'lightgallery/css/lg-video.css';
// import 'lightgallery/css/lg-thumbnail.css';


const App = () => {
	return (
		<div className='edbi-file-browser'>
			<Contexify />
			<Header />
			<div className='edbi-file-browser__body'>
				<Sidebar />
				<Browser />
			</div>
		</div>
	);
};

export default App;
