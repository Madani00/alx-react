import React, { PureComponent } from "react";
import { connect } from 'react-redux';
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";
import { fetchNotifications } from '../actions/notificationActionCreators';

const styles = StyleSheet.create({
  notifications: {
    display: 'block',
    padding: '1em',
    border: '2px dashed red',
    position: 'absolute',
    top: '1.8em',
    right: '0',
    width: '30%',
    background: 'white',
    height: '30%',
    overflowY: 'scroll'
  },
  notificationHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuItem: {
    textAlign: 'right',
    cursor: 'pointer',
  },
  defaultNotification: {
    color: 'blue',
  },
  urgentNotification: {
    color: 'red',
  },
});

class Notifications extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotifications();
    console.log('Notifications from props:', this.props.listNotifications);
  }

  render() {
    const { listNotifications, isLoading, handleDisplayDrawer, handleHideDrawer } = this.props;
    return (
      <React.Fragment>
        <div className={css(styles.menuItem)} onClick={handleDisplayDrawer}>
          <p>Your notifications</p>
        </div>
        {this.props.displayDrawer  ? (
          <div className={css(styles.notifications)}>
            <button
              style={{
                color: "#3a3a3a",
                fontWeight: "bold",
                background: "none",
                border: "none",
                fontSize: "15px",
                position: "absolute",
                right: "3px",
                top: "3px",
                cursor: "pointer",
                outline: "none",
              }}
              aria-label="Close"
              onClick={handleHideDrawer}
            >
              <img src={closeIcon} alt="close icon" width="10px" />
            </button>
            {isLoading ? <p>Loading notifications...</p> : (
              <>
                {listNotifications.length !== 0 ? <p>Here is the list of notifications</p> : null}
                <ul>
                  {listNotifications.length === 0 ? <NotificationItem type="default" value="No new notification for now" /> : null}
                  {listNotifications.map((val) => (
                      <NotificationItem
                      type={val.context.type}
                      value={val.context.value}
                      html={val.context.html}
                      key={val.id}
                      markAsRead={() => this.props.markNotificationAsRead(val.id)} 
                      id={val.context.guid}
                    />
                  ))}
                </ul>
              </>
            )}
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: PropTypes.func,
};



const mapStateToProps = (state) => ({
  listNotifications: state.notifications.get('notifications'),
  isLoading: state.notifications.get('isLoading'),
  displayDrawer: state.ui.get('isNotificationDrawerVisible'),
});

const mapDispatchToProps = {
  fetchNotifications,
  handleDisplayDrawer: () => ({ type: 'DISPLAY_NOTIFICATION_DRAWER' }),
  handleHideDrawer: () => ({ type: 'HIDE_NOTIFICATION_DRAWER' }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);