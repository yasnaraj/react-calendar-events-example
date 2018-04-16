import * as types from './eventActionTypes';
import moment from 'moment';

export function GetInitialEvents() {
    return async (dispatch, getState) => {
        var allEvents = [{
            id: 0,
            title: 'Today!',
            allDay: true,
            start: new Date(moment()),
            end: new Date(moment()),
            hexColor: '#265985',
            notes: 'Have a great day!'
        }];

        dispatch({ type: types.ALL_EVENTS, allEvents })
    }

}