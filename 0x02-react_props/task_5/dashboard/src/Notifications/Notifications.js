import React from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from './NotificationItem'
import NotificationItemShape from "./NotificationItemShape";
import PropTypes from 'prop-types'

function Notifications({displayDrawer, listNotifications}) {
  return (
    <React.Fragment>
      {displayDrawer ? (
        <div>
          <div className="menuItem">
            Your Notifications
          </div>
          <div className="Notifications">
            <ul>
              {
                listNotifications && listNotifications.length > 0 ? (
                  listNotifications.map(({id, html, type, value}) => <NotificationItem key={id} type={type} value={value} html={html} />)
                ) : (
                  <div>
                     <NotificationItem value="No new notification for now" />
                     <button
                        style={{ color: "#3a3a3a", fontWeight: "bold", background: "none", border: "none", fontSize: "15px", position: "absolute", right: "2px", top: "2px", cursor: "pointer" }}
                        aria-label="Close"
                        onClick={console.log("Close button has been clicked")}
                      >
                        <img src={closeIcon} alt="closeIcon" width="10px" />
                      </button>
                  </div>
                )
              }
            </ul>
            {/* <button
              style={{ color: "#3a3a3a", fontWeight: "bold", background: "none", border: "none", fontSize: "15px", position: "absolute", right: "2px", top: "2px", cursor: "pointer" }}
              aria-label="Close"
              onClick={console.log("Close button has been clicked")}
            >
              <img src={closeIcon} alt="closeIcon" width="10px" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              <NotificationItem type="default" value="New course available" />
              <NotificationItem type="urgent" value="New resume available" />
              <NotificationItem type="urgent" html={getLatestNotification()} />
            </ul> */}
          </div>
        </div>
      ): (
        <div className="menuItem">
            Your Notifications
        </div>
      )}
    </React.Fragment>
  );
}

Notifications.PropTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: []
}

export default Notifications;
