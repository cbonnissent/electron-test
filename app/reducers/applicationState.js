import * as ActionTypes from '../actions/application'

import Immutable from "immutable";

export default function applicationState(state, action) {
    if (!state) {
        state = Immutable.Map();
    }
    switch(action.type) {

        case ActionTypes.DISPLAY_PLUGIN_LIST:
            return state.set("display_plugin_list", true);
        case ActionTypes.HIDE_PLUGIN_LIST:
            return state.set("display_plugin_list", false);
        case ActionTypes.TOGGLE_PLUGIN_LIST:
            return state.set("display_plugin_list", !state.get("display_plugin_list"));
        case ActionTypes.INDICATE_CURRENT_ACTION:
            return state.set("current_action", action.content);
        default:
            return state;
    }
}
