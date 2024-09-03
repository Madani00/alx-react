import React, { PureComponent } from 'react'
import propTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
    defaultNotif: {
        color: 'blue'
    },
    urgentNotif: {
        color: 'red'
    }
})

class NotificationItem extends PureComponent {
    render() {
        if (this.props.type && this.props.value) {
            return <li className={css(styles.defaultNotif)} onClick={() => markAsRead(this.props.id)} data-notification-type={this.props.type}>{this.props.value}</li>
        }
        else if (this.props.html)
            return <li className={css(styles.urgentNotif)} onClick={() => markAsRead(this.props.id)} data-notification-type="urgent" dangerouslySetInnerHTML={{ __html: this.props.html }}></li>
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
    markAsRead: () => {
        return;
    },
    id: 0
};

export default NotificationItem