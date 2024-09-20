import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
  } from '../actions/uiActionTypes';
  
  export const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };
  
  const uiReducer = (state = initialState, action) => {
    switch (action.type) {
      case DISPLAY_NOTIFICATION_DRAWER:
        return {
          ...state,
          isNotificationDrawerVisible: true,
        };
  
      case HIDE_NOTIFICATION_DRAWER:
        return {
          ...state,
          isNotificationDrawerVisible: false,
        };
  
      case LOGIN_SUCCESS:
        return {
          ...state,
          isUserLoggedIn: true,
          user: action.user, // Update the user state with the user data from the action
        };
  
      case LOGIN_FAILURE:
        return {
          ...state,
          isUserLoggedIn: false,
          user: {}, // Clear the user data on login failure
        };
  
      case LOGOUT:
        return {
          ...state,
          isUserLoggedIn: false,
          user: {}, // Clear the user data on logout
        };
  
      default:
        return state; // Ensure the default case returns the current state
    }
  };
  
  export default uiReducer;
  