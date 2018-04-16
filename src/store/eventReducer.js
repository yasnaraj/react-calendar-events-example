import * as types from './eventActionTypes';

let initialState = {
    allEvents: []
}

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.ALL_EVENTS:
            return { ...state, allEvents: action.allEvents }
        case types.REMOVE_EVENT:
            var newState = state;
            newState.allEvents = newState.allEvents.filter(function( obj ) {
                return obj.id !== action.payload;
              });
            return newState;
        case types.ADD_EVENT:
              var newState2 = state;
              newState2.allEvents.push(action.payload);
              return newState2;
        case types.UPDATE_EVENT:
              var newState3 = state;
              newState3.allEvents[action.payload.id] = action.payload.obj;
              return newState3;
        default:
            return state;
    }
}