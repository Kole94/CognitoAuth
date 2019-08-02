import {createStore, combineReducers, applyMiddleware} from 'redux';
import reducerNumber from './reducerNumber'
import reducerText from './reducerText'
import thunk from 'redux-thunk'
import logger from 'redux-logger'



const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
        reducerNumber, 
        reducerText}),
        {},
        applyMiddleware(thunk) 
    );
    return store;
}

export default ConfigureStore;