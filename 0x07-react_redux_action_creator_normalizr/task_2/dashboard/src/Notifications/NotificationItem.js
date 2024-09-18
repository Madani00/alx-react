import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
    defaultNotif: {
        color: 'blue'
    },
    urgentNotif: {
        color: 'red'
    },
    botLine: {
        '@media (max-width: 950px)': {
            padding: '8px 0',
            borderBottom: '2px solid grey'
        }
    }
})

class NotificationItem extends PureComponent {
    render() {
        const { type, value, html, markAsRead, id } = this.props;
        if (type && value) {
            return <li className={css(styles.defaultNotif, styles.botLine)} onClick={() => markAsRead(id)} data-notification-type={type}>{value}</li>
        }
        else if (this.props.html)
            return <li className={css(styles.urgentNotif, styles.botLine)} onClick={() => markAsRead(id)} data-notification-type="urgent" dangerouslySetInnerHTML={{ __html: html }}></li>
        else {
            return null
        }
    }
}
// const NotificationItem = ({ type, html, value, markAsRead, id }) => {

// }

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
    markAsRead: () => { },
    id: 0
};

export default NotificationItem