import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers/reducers';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import Immutable from 'immutable';


export default function configureStore(initialState = {})
{
    if (!Immutable.Map.isMap(initialState)) {
        initialState = Immutable.fromJS(initialState);
    }
    return createStore(reducers, initialState, applyMiddleware(
        thunkMiddleware,
        promiseMiddleware({
            // optional config
        }))
    );
};