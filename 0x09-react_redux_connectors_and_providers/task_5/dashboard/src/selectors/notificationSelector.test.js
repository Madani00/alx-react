import { Map, fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('notification selectors', () => {
    const state = fromJS({
      filter: 'URGENT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          isRead: true,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    });
  
    it('filterTypeSelected should return the correct filter', () => {
      expect(filterTypeSelected(state)).toBe('URGENT');
    });
  
    it('getNotifications should return the correct notifications', () => {
      const notifications = getNotifications(state);
      expect(notifications.size).toBe(3);
      expect(notifications.getIn([0, 'value'])).toBe('New course available');
      expect(notifications.getIn([1, 'value'])).toBe('New resume available');
      expect(notifications.getIn([2, 'value'])).toBe('New data available');
    });
  
    it('getUnreadNotifications should return only unread notifications', () => {
      const unreadNotifications = getUnreadNotifications(state);
      expect(unreadNotifications.size).toBe(2);
      expect(unreadNotifications.getIn([0, 'value'])).toBe('New course available');
      expect(unreadNotifications.getIn([1, 'value'])).toBe('New data available');
    });
  });
  