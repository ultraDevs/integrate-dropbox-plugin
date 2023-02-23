import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Tabs from './components/Tabs';
import './scss/admin.scss';

const App = ( ) => {
    return (
		<div className="ud-c-file-browser">
			<Header />
			<div className="ud-c-file-browser__body">
				<Sidebar />
				<Tabs />
			</div>
		</div>
	);
};

export default App;
