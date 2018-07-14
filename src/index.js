import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todoApp from './reducers';
import Root from './components/Root';

const store = createStore(todoApp);

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>
    ,document.getElementById('root')
);
registerServiceWorker();
