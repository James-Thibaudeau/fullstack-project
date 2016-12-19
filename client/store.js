import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk'; 
import { composeWithDevTools } from 'redux-devtools-extension';

// import the root reducer
import rootReducer from './reducers/RootReducer';

// create an object for the default data
// const defaultState = {

// };

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;