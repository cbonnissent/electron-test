import Immutable from "immutable";

export default function module(state, action) {
    if (!state) {
        state = Immutable.Map();
    }
    switch(action.type) {

        default:
            return state;
    }
}
