import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Tabs from './components/Tabs';
import './scss/admin.scss';

const App = ( ) => {
    return (
        <>
			<Header />
			<div className='flex flex-wrap w-[90%] mx-auto sm:w-[90%] justify-between'>
				<Tabs />
				<Sidebar />
			</div>
		</>
    );
};

export default App;
