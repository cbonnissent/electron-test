import * as ActionTypes from '../actions/plugin';
import Immutable from "immutable";

export default function plugin(state, action) {
    if (!state) {
        state = Immutable.Map();
    }
    switch(action.type) {
        case ActionTypes.ADD_PLUGIN:
            return state.set(action.logicalName, action.description);
        case ActionTypes.REMOVE_PLUGIN:
            return state.delete(action.logicalName);
        default:
            return state;
    }
}
