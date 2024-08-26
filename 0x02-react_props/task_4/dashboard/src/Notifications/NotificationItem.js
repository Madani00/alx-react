import React from 'react'
import propTypes from 'prop-types'

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

NotificationItem.propTypes = {
    html: propTypes.shape({
        __html: propTypes.string
    }),
    type: propTypes.string.isRequired,
    value: propTypes.string
};

NotificationItem.defaultProps = {
    type: "default"
};

export default NotificationItem