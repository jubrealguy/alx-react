import React from "react";
import PropTypes from 'prop-types'
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Login from '../Login/Login'
import CourseList from '../CourseList/CourseList'
import Footer from '../Footer/Footer'
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom"
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
  }
})

class App extends React.Component {
  
  listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40}
  ]
  
  listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: getLatestNotification() },
  ]

  handleKeyDown(e) {
    if (e.ctrlKey && e.Key === 'h') {
      alert("Logging you out")
      this.props.logOut()
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown)
  }

  const 

  render () {
    return (
      <React.Fragment>
        <div className="App">
          <div className={css(styles.flex)}>
            <Header />
            <Notifications listNotifications={this.listNotifications} />
          </div>
          {this.props.isLoggedIn ? (
            <BodySectionWithMarginBottom title='Course List'>
              <CourseList listCourses={this.listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title='Log in to continue'>
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => { return; }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
}

export default App;
