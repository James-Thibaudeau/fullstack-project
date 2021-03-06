import React from 'react';
import { render } from 'react-dom';
//import bootstrap/font-awesome
import 'bootstrap/less/bootstrap.less';
import 'font-awesome/less/font-awesome.less';
import './styles/style.less';
import 'react-select/dist/react-select.css';
// Import Components
import { App } from './components/App';
import { MainContainer } from './components/Main';
import {ProfileContainer} from './components/Profile/Profile';
import {AppointmentContainer} from './components/Appointments/Appointment';
import {AppointmentFormContainer} from './components/Appointments/AppointmentForm';

// import react router deps
import { Router, Route, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={MainContainer} />
                <Route path="/main" component={MainContainer} onEnter={onEnterRoute}>
                    <IndexRoute component={MainContainer} onEnter={onEnterRoute} />
                    <Route path="/profile" component={ProfileContainer} onEnter={onEnterRoute}/>
                    <Route path="/appointments" component={AppointmentContainer} onEnter={onEnterRoute}/>
                    <Route path="/appointform" component={AppointmentFormContainer} onEnter={onEnterRoute}/>
                </Route>
            </Route>
        </Router>
    </Provider>
);

function onEnterRoute(nextState, replace) {
    console.log('Routing to: ' + nextState.location.pathname);
    var state = store.getState();

    if(!state.login.isLoggedIn) {
        console.log('not loggedin');
        replace({
            pathname: '/',
            state: { ...state, redirectTo: nextState.location.pathname }
        });
    }
}

render(router, document.getElementById('root'));