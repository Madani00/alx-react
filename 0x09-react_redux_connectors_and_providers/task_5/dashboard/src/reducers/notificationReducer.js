import { is, Map } from 'immutable';
import { 
    FETCH_NOTIFICATIONS_SUCCESS,
    MARK_AS_READ,
    SET_TYPE_FILTER,
    SET_LOADING_STATE,
} from "../actions/notificationActionTypes";
import { notificationsNormalizer } from "../schema/notifications";


const initialState = Map({
    notifications: Map(),
    filter: 'DEFAULT',
    isLoading: false,
});

export const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING_STATE:
            return state.set('isLoading', action.loading);
        case FETCH_NOTIFICATIONS_SUCCESS:
            return state.merge({
                notifications: Map(action.data.entities.notifications),
            });
        case MARK_AS_READ:
            return state.setIn(['notifications', action.index.toString(), 'isRead'], true);
        case SET_TYPE_FILTER:
            return state.set(['filter'], action.filter);
        default:
            return state;
    };
};

export default notificationReducer;