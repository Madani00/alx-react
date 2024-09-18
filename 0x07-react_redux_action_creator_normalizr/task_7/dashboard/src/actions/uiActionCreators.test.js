import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';



const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('uiActionCreator tests', () => {
    it('verifies login returns correct data', () => {
        const res = {
            type: LOGIN,
            user: {
                email: 'test@mail.com',
                password: '132'
            }
        };

        expect(login('test@mail.com', '132')).toEqual(res);
    });

    it('verifies logout returns correct data', () => {
        const res = {
            type: LOGOUT
        };

        expect(logout()).toEqual(res);
    });

    it('verifies displayNotificationDrawer returns correct data', () => {
        const res = {
            type: DISPLAY_NOTIFICATION_DRAWER
        };

        expect(displayNotificationDrawer()).toEqual(res);
    });

    it('verifies hideNotificationDrawer returns correct data', () => {
        const res = {
            type: HIDE_NOTIFICATION_DRAWER
        };

        expect(hideNotificationDrawer()).toEqual(res);
    })
});

describe('loginRequest action', () => {
    afterEach(() => {
        fetchMock.restore(); // Clear all fetch mocks after each test
    });

    it('dispatches LOGIN_SUCCESS when login is successful', () => {
        const expectedActions = [loginSuccess()];
        const store = mockStore({});

        fetchMock.getOnce('http://localhost:8564/login-success.json', { someData: 'data' });

        return store.dispatch(loginRequest('test@example.com', 'password'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });

    it('dispatches LOGIN_FAILURE when login fails', () => {
        const expectedActions = [loginFailure()];
        const store = mockStore({});

        fetchMock.getOnce('http://localhost:8564/login-success.json', 500); // Simulating failure with status code 500

        return store.dispatch(loginRequest('test@example.com', 'password'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });
});