import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard29792186Reducer from '../features/Dashboard29792186/redux/reducers'
import CalendarView9492098Reducer from '../features/CalendarView9492098/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard29792186: Dashboard29792186Reducer,
CalendarView9492098: CalendarView9492098Reducer,

});