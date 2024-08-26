import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notif from '../Notifications/Notifications';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import propTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';


const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 }
]

const listNotif = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: getLatestNotification() }
]

function App({ isLoggedIn }) {
  return (
    <React.Fragment>
      <Notif listNotifications={listNotif} />
      <div className="App">
        <Header />
        <div className="App-body">
          {isLoggedIn ? (
            <CourseList listCourses={listCourses} />
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

App.propTypes = {
  isLoggedIn: propTypes.bool
}

App.defaultProps = {
  isLoggedIn: false
}

export default App;
