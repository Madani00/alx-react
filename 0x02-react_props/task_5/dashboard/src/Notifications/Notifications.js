import React from 'react'
import './Notifications.css'
import Close from '../assets/close.png'
import NotificationItem from './NotificationItem'
import propTypes from 'prop-types'
import NotificationItemShape from './NotificationItemShape'

function btnClicked() {
    console.log("Close button has been clicked");
}

const Notif = ({ displayDrawer, listNotifications }) => {
    return <div className='notif-holder'>
        <div className='menuItem'>
            <p>Your notifications</p>
        </div>
        {displayDrawer ? (
            <div className='Notifications'>
                <p>Here is the list of notifications</p>
                <button aria-label='Close' onClick={btnClicked} style={{ position: 'absolute', right: '1px', top: '4px', background: 'none', border: 'none' }}>
                    <img src={Close} width={'25px'} alt='close button' />
                </button>
                <ul>
                    {listNotifications.length === 0 ? (
                        <NotificationItem type="default" value="No new notification for now" />
                    ) : (
                        listNotifications.map(({ id, html, type, value }) =>
                            <NotificationItem key={id} type={type} value={value} html={html} />
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

Notif.propTypes = {
    displayDrawer: propTypes.bool,
    listNotifications: propTypes.arrayOf(NotificationItemShape)
}

Notif.defaultProps = {
    displayDrawer: true,
    listNotifications: []
}

export default Notif;