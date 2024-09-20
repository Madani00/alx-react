import * as notificationData from '../../notifications.json';
import { normalize, schema } from "normalizr";

// Define the user, message, and notification schemas
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
    author: user,
    context: message
});

// Normalize the notification data
const normalizedData = normalize(notificationData.default, [notification]);

// Function to get all notifications for a specific user by user ID
export default function getAllNotificationsByUser(userId) {
    const notifications = normalizedData.entities.notifications;
    const userNotifications = [];

    for (const id in notifications) {
        if (notifications[id].author === userId) {
            userNotifications.push(notifications[id].context);
        }
    }

    return userNotifications;
}

// Export the normalized data
export { normalizedData };
