import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Browser from "./components/Browser";
import './scss/admin.scss';

const App = ( ) => {
    return (
		<div className="ud-c-file-browser">
			<Header />
			<div className="ud-c-file-browser__body">
				<Sidebar />
				<Browser />
			</div>
		</div>
	);
};

export default App;
