import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [thunk];

export default function configureStore (initialState = {}) {
    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(...middlewares))
    );
    return store;  
}
