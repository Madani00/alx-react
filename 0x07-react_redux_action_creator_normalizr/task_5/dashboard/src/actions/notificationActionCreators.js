import { SET_TYPE_FILTER, MARK_AS_READ, NotificationTypeFilters } from "./notificationActionTypes";

export const markAsAread = (index) => {
    return {
        type: MARK_AS_READ,
        index: index
    }
}

export const setNotificationFilter = (filter) => {
    return {
        type: SET_TYPE_FILTER,
        filter: filter
    }
}