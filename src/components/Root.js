import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from 'react';
import App from './App';

const Root = () => (
    <Router>
        <Route path="/:filter?" component={App} />
    </Router>
);

export default Root;