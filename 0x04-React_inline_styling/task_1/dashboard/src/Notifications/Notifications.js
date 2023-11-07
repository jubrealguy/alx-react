import React from "react";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from './NotificationItem'
import NotificationItemShape from "./NotificationItemShape";
import PropTypes from 'prop-types'
import { StyleSheet, css } from "aphrodite";

class Notifications extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.length > this.props.listNotifications.length;
  }
  
  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`)
  }

  render() {
    return (
      <React.Fragment>
        <div className={css(styles.noti)}>
          <div className={css(styles.menuItem)}>
            <p>Your notifications</p>
          </div>
          {this.props.displayDrawer ? (
            <div className={css(styles.Notifications)}>
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
                onClick={(e) => {
                  console.log("Close button has been clicked");
                }}
              >
                <img src={closeIcon} alt="close icon" width='12px' className={styles.img} />
              </button>
              {this.props.listNotifications.length != 0 ? <p>Here is the list of notifications</p> : null}
              <ul>
                {this.props.listNotifications.length == 0 ? <NotificationItem type="default" value="No new notification for now" /> : null}
                {this.props.listNotifications.map((val, idx) => {
                  return <NotificationItem type={val.type} value={val.value} html={val.html} key={val.id} markAsRead={this.markAsRead} id={val.id} />;
                })}
              </ul>
            </div>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  Notifications: {
    padding: '.4em 1em',
    border: '2px dashed red',
    position: 'relative',
  },

  img: {
    position: 'absolute',
    top: '5px',
    right: '5px',
  },

  menuItem: {
    textAlign: 'right'
  },
  
  '[data-notification-type="default"]': {
    color: "blue",
  },

  "[data-urgent]": {
    color: "red",
  },

  noti: {
    flex: '0 0 40%'
  }
})

Notifications.PropTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: []
}

export default Notifications;
