import React from 'react';
import { render } from 'react-dom';
//import bootstrap/font-awesome
import 'bootstrap/less/bootstrap.less';
import 'font-awesome/less/font-awesome.less';
import './styles/style.less';
// Import Components
import { MainContainer } from './components/Main';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={MainContainer}>
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));