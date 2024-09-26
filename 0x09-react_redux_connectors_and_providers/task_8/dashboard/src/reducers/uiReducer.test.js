import uiReducer from './uiReducer';
import { Map } from 'immutable';
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state', () => {
    const state = uiReducer(undefined, {});
    expect(state.toJS()).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: null,
    });
  });

  it('should handle LOGIN_SUCCESS', () => {
    const action = {
      type: LOGIN_SUCCESS,
      data: { email: 'user@example.com', name: 'John Doe' },
    };
    const state = uiReducer(undefined, action);
    expect(state.get('isUserLoggedIn')).toBe(true);
    expect(state.get('user')).toEqual({ email: 'user@example.com', name: 'John Doe' });
  });

  it('should handle LOGIN_FAILURE', () => {
    const action = {
      type: LOGIN_FAILURE,
    };
    const state = uiReducer(undefined, action);
    expect(state.get('isUserLoggedIn')).toBe(false);
    expect(state.get('user')).toBe(null);
  });

  it('should handle LOGOUT', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: { email: 'user@example.com', name: 'John Doe' },
    });

    const action = {
      type: LOGOUT,
    };

    const state = uiReducer(initialState, action);
    expect(state.get('isUserLoggedIn')).toBe(false);
    expect(state.get('user')).toBe(null);
  });
});
