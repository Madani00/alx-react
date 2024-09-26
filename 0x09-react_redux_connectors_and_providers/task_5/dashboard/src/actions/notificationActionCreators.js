import { bindActionCreators } from 'redux';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE } from "./notificationActionTypes";
import { notificationsNormalizer } from '../schema/notifications';

export const markAsAread = (index) => {
    return {
        type: MARK_AS_READ,
        index,
    };
};

export const setNotificationFilter = (filter) => {
    return {
        type: SET_TYPE_FILTER,
        filter,
    };
};

export const fetchNotificationsSuccess = (data) => {
    return {
        type: FETCH_NOTIFICATIONS_SUCCESS,
        data,
    };
}

export const setLoadingState = (loading) => {
    return {
        type: SET_LOADING_STATE,
        loading,
    };
}

export const setNotifications = (data) => {
    return {
        type: FETCH_NOTIFICATIONS_SUCCESS,
        data,
    };
}

// Async action creator to fetch notifications
export const fetchNotifications = () => {
    return (dispatch) => {
        // Set loading state to true before starting the fetch
        dispatch(setLoadingState(true));

        fetch('/notifications.json')
            .then(response => response.json())
            .then(data => {
                // Dispatch the notifications data once fetched
                const normalizedData = notificationsNormalizer(data);
                console.log('Normalized Data:', normalizedData);

                // Check the structure
                console.log('Normalized Entities:', normalizedData.entities.notifications);
                dispatch(setNotifications(normalizedData));
                // Set loading state to false after fetching
                dispatch(setLoadingState(false));
            })
            .catch((error) => {
                console.error("Error fetching notifications:", error);
                // Ensure loading state is set to false if there's an error
                dispatch(setLoadingState(false));
            });
    };
};

// Bound action creators
export const boundMarkAsRead = (dispatch) => bindActionCreators(markAsRead, dispatch);
export const boundSetNotificationFilter = (dispatch) => bindActionCreators(setNotificationFilter, dispatch);
