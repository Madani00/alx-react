import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test('should get current year', () => {
    expect(getFullYear()).toBe(2024);
})

test('should return  footer', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
})

test('should get last notif', () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
})