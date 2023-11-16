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
        <div className= {this.props.displayDrawer ? css(styles.notA) : css(styles.notB)}>
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

const opacity = {
  "0%": { opacity: 0.5 },
  "100%": { opacity: 1 },
};

const move = {
  "0%": { transform: "translateY(0px)" },
  "33%": { transform: "translateY(-5px)" },
  "66%": { transform: "translateY(5px)" },
  "100%": { transform: "translateY(0px)" },
};

const styles = StyleSheet.create({
  Notifications: {
    clear: 'both',
    padding: '.4em 1em',
    border: '2px dashed red',
    position: 'relative',

    "@media (max-width: 900px)": {
      border: 'none',
    },
  },

  img: {
    position: 'absolute',
    top: '5px',
    right: '5px',
  },

  menuItem: {
    float: 'right',
    display: 'block',
    marginRight: 'auto',
    backgroundColor: '#fff8f8',
    ":hover": {
      cursor: 'pointer',
      animationName: [opacity, move],
      animationDuration: "1s, 0.5s",
      animationIterationCount: "3",
    }
  },


  notA: {
    flex: '0 0 40%',
    "@media (max-width: 900px)": {
      position: 'absolute',
      width: '100%',
      height: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      background: 'white',
    },
  },

  notB: {
    flex: '0 0 40%',
    "@media (max-width: 900px)": {
      position: 'absolute',
      width: '100%',
      height: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }
})

Notifications.PropTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {}
}

export default Notifications;
