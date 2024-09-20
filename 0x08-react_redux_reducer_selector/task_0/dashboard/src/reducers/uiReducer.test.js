import uiReducer, { initialState } from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

// Test suite for the uiReducer
describe('uiReducer', () => {
  // Test for the initial state when no action is passed
  it('should return the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {}); // Pass undefined state and an empty action
    expect(state).toEqual(initialState); // Expect the state to be equal to the initial state
  });

  // Test for the initial state when a non-related action is passed (e.g., SELECT_COURSE)
  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const action = { type: 'SELECT_COURSE' }; // Non-related action
    const state = uiReducer(undefined, action);
    expect(state).toEqual(initialState); // Expect the state to remain as the initial state
  });

  // Test for DISPLAY_NOTIFICATION_DRAWER action
  it('should change isNotificationDrawerVisible property to true when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const expectedState = {
      ...initialState,
      isNotificationDrawerVisible: true,
    };
    const state = uiReducer(undefined, action);
    expect(state).toEqual(expectedState); // Expect the state to have isNotificationDrawerVisible set to true
  });
});
