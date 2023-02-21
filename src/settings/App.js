import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Tabs from './components/Tabs';
import 'react-toastify/dist/ReactToastify.css';
import './scss/admin.scss';

const App = ( ) => {
    return (
        <>
			<ToastContainer
				position="bottom-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover
			/>
			<Header />
			<div className='flex flex-wrap w-[90%] mx-auto sm:w-[90%] justify-between'>
				<Tabs />
				<Sidebar />
			</div>
		</>
    );
};

export default App;
