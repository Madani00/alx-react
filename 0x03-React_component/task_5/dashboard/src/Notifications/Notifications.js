import React from 'react'
import './Notifications.css'
import Close from '../assets/close.png'
import NotificationItem from './NotificationItem'
import propTypes from 'prop-types'
import NotificationItemShape from './NotificationItemShape'



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
        return <div className='notif-holder'>
            <div className='menuItem'>
                <p>Your notifications</p>
            </div>
            {this.props.displayDrawer ? (
                <div className='Notifications'>
                    <p>Here is the list of notifications</p>
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