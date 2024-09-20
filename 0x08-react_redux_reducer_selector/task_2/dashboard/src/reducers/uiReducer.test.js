import { Map } from 'immutable';
import uiReducer, { initialState } from './uiReducer';
import { LOGIN, DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should return the initial state when an unrelated action is passed', () => {
    const state = uiReducer(undefined, { type: 'SELECT_COURSE' });
    expect(state).toEqual(initialState);
  });

  it('should handle DISPLAY_NOTIFICATION_DRAWER action', () => {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state.get('isNotificationDrawerVisible')).toBe(true);
  });

  it('should handle LOGIN action and update user state', () => {
    const user = { email: 'test@example.com', password: 'password' };
    const state = uiReducer(undefined, { type: LOGIN, user });
    expect(state.get('user')).toEqual(Map(user));
    expect(state.get('user').get('email')).toBe('test@example.com');
  });

  it('should handle LOGOUT action and clear user state', () => {
    const user = { email: 'test@example.com', password: 'password' };
    const stateWithUser = uiReducer(initialState.set('user', Map(user)), { type: LOGOUT });
    expect(stateWithUser.get('isUserLoggedIn')).toBe(false);
    expect(stateWithUser.get('user')).toEqual(Map({}));
  });
});
