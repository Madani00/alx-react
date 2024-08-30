import React from 'react'
import propTypes from 'prop-types'

const NotificationItem = ({ type, html, value, markAsRead, id }) => {
    if (type && value) {
        return <li onClick={() => markAsRead(id)} data-notification-type={type}>{value}</li>
    }
    else if (html)
        return <li onClick={() => markAsRead(id)} data-notification-type="urgent" dangerouslySetInnerHTML={{ __html: html }}></li>
    else {
        return null
    }
}

NotificationItem.propTypes = {
    __html: propTypes.shape({
        html: propTypes.string
    }),
    type: propTypes.string.isRequired,
    value: propTypes.string,
    markAsRead: propTypes.func,
    id: propTypes.number
};

NotificationItem.defaultProps = {
    type: "default",
    markAsRead: () => {
        return;
    },
    id: 0
};

export default NotificationItem