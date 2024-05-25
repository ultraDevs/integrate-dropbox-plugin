import { render } from '@wordpress/element';
import App from './App';
import './store/browser-store';

const root = document.getElementById('edbi-file-browser');

if (root) {
    render(<App />, root);
}