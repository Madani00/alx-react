import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

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