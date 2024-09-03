import React from 'react'
import Close from '../assets/close.png'
import NotificationItem from './NotificationItem'
import propTypes from 'prop-types'
import NotificationItemShape from './NotificationItemShape'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
    notifHolder: {
        paddingRight: '8px',
        paddingTop: '8px',
        position: 'absolute',
        right: '0'
    },
    menuItem: {
        marginBottom: '4px',
        textAlign: 'right'
    },
    Notifications: {
        position: 'relative',
        padding: '4px',
        paddingRight: '24px',
        border: '2px solid rgb(97, 80, 255)',
        borderStyle: 'dashed'
    },
    p: {
        margin: '0',
        padding: '0'
    }
})

class Notif extends React.Component {
    constructor(props) {
        super(props);
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`)
    }

    btnClicked() {
        console.log("Close button has been clicked");
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.listNotifications.length > this.props.listNotifications.length) {
            return true;
        }
        return false;
    }

    render() {
        return <div className={css(styles.notifHolder)}>
            <div className={css(styles.menuItem)}>
                <p className={css(styles.p)}>Your notifications</p>
            </div>
            {this.props.displayDrawer ? (
                <div className={css(styles.Notifications)}>
                    <p className={css(styles.p)}>Here is the list of notifications</p>
                    <button aria-label='Close' onClick={this.btnClicked} style={{ position: 'absolute', right: '1px', top: '4px', background: 'none', border: 'none' }}>
                        <img src={Close} width={'25px'} alt='close button' />
                    </button>
                    <ul>
                        {this.props.listNotifications.length === 0 ? (
                            <NotificationItem type="default" value="No new notification for now" />
                        ) : (
                            this.props.listNotifications.map((v, idx) =>
                                <NotificationItem key={v.id} type={v.type} value={v.value} html={v.html} markAsRead={this.markAsRead} id={v.id} />
                            )
                        )}
                    </ul>
                </div >
            ) : (
                null
            )
            }
        </div>
    }
}

Notif.propTypes = {
    displayDrawer: propTypes.bool,
    listNotifications: propTypes.arrayOf(NotificationItemShape)
}

Notif.defaultProps = {
    displayDrawer: true,
    listNotifications: []
}

export default Notif;