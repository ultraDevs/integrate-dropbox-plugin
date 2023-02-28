import { render } from '@wordpress/element';
import App from './App';
import './store/browser-store';

render(<App />, document.getElementById('ud-id-app'));
