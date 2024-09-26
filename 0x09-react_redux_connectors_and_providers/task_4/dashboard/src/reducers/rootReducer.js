import courseReducer from './courseReducer';
import {combineReducers} from 'redux';
import uiReducer from './uiReducer';
import notificationReducer from './notificationReducer';


export const rootReducer = combineReducers({
    courses: courseReducer,
    ui: uiReducer,
    notifications: notificationReducer
});