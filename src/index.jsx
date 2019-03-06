import React from 'react';
import {render} from 'react-dom';
import App from './Components/App/App';
import { store } from './Components/App/store';
import { Provider } from 'react-redux'

render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));