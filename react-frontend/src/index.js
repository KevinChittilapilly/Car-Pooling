import React from 'react';
import ReactDOM from 'react-dom';


import Routes from '../src/components/Routes';
import * as serviceWorker from './serviceWorker';
import './index.css'


ReactDOM.render(<Routes />, document.getElementById('root'));



//ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.register();
