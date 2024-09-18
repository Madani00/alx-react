import * as notificationData from "../../../../notifications.json";
import { normalize, schema } from 'normalizr';

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {
    idAttribute: 'guid'
})
const notification = new schema.Entity('notifications', {
    author: user,
    context: message
})

const normalized = normalize(notificationData, [notification]);

export default function getAllNotificationsByUser(userId) {
    const ret = [];
    const notifs = normalized.entities.notifications[userId];
    const messages = normalized.entities.messages;

    for (const id in notifs) {
        ret.push(normalized.entities.messages[notifs[id].context]);
    }

    return ret;
}

export { normalized };