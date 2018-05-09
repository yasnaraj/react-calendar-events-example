import * as types from './eventActionTypes';
import moment from 'moment';
import localForage from "localforage";

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

        localForage.getItem("AllEvents", function(err, allEve){
            if(allEve){
                allEvents = allEve;
            }else{
                localForage.setItem("AllEvents", allEvents);
            }

            dispatch({ type: types.ALL_EVENTS, allEvents });
        });
        

        
    }

}