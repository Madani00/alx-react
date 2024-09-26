import { createSelector } from 'reselect';

export const filterTypeSelected = (state) => state.get('filter');
export const getNotifications = (state) => state.get('notifications');

export const getUnreadNotificationsByType = createSelector(
    [filterTypeSelected, getNotifications],
    (filter, notifications) => {
        return notifications.filter((notification) => notification.get('isRead') === false && notification.get('type') === filter);
    }
);
