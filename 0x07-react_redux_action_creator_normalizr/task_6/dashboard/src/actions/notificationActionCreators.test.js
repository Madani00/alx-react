import { markAsAread, setNotificationFilter } from "./notificationActionCreators";
import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

describe('notificationTypeFilters testcases', () => {
    it('verifies markAsAread returns correct data', () => {
        const res = {
            type: MARK_AS_READ,
            index: 1
        };

        expect(markAsAread(1)).toEqual(res);
    });

    it('verifies setNotificationFilter returns correct data', () => {
        const res = {
            type: SET_TYPE_FILTER,
            filter: "DEFAULT"
        };

        expect(setNotificationFilter("DEFAULT")).toEqual(res);
    })
})