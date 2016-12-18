import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk'; 

// import the root reducer
import rootReducer from './reducers/RootReducer';

// create an object for the default data
const defaultState = {

};

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;