import { render } from '@wordpress/element';
import App from './App';

// setTimeout( () => {
//     render(
//         <App />,
//         document.getElementById( 'ud-id-app' )
//     );

// }, 0 );


render(
    <App />,
    document.getElementById( 'ud-id-app' )
);