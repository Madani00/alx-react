import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notif from '../Notifications/Notifications';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import propTypes from 'prop-types';


function App({ isLoggedIn }) {
  return (
    <React.Fragment>
      <Notif />
      <div className="App">
        <Header />
        <div className="App-body">
          {isLoggedIn ? (
            <CourseList />
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
