import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notif from '../Notifications/Notifications';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import propTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 }
  ]

  listNotif = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: getLatestNotification() }
  ]

  render() {
    return (
      <React.Fragment>
        <Notif listNotifications={this.listNotif} />
        <div className="App">
          <Header />
          <div className="App-body">
            {this.props.isLoggedIn ? (
              <CourseList listCourses={this.listCourses} />
            ) : (
              <Login />
            )
            }
          </div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }

  keypressedHandler(envent) {
    if (event.ctrlKey && event.key == 'h') {
      alert('Logging you out');
      this.props.log
    }
  }
  componentDidMount() {
    document.addEventListener('keydown', this.keypressedHandler)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keypressedHandler)
  }
}

App.propTypes = {
  isLoggedIn: propTypes.bool,
  logOut: propTypes.func
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {
    return;
  }
}

export default App;
