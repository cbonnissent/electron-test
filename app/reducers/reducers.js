import {
    combineReducers
} from 'redux-immutable';

export default combineReducers({
    module: require('./module').default,
    plugins: require('./plugin').default,
    application: require('./applicationState').default
});
