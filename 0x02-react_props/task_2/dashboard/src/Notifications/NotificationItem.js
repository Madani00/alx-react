import React from 'react'

const NotificationItem = ({ type, html, value }) => {
    if (type && value) {
        return <li data-notification-type={type}>{value}</li>
    }
    else if (html)
        return <li data-notification-type="urgent" dangerouslySetInnerHTML={{ __html: html }}></li>
    else {
        return null
    }
}

export default NotificationItem