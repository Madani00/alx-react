import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notif from '../Notifications/Notifications';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import propTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';


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
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={this.listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Login to continue">
                <Login />
              </BodySectionWithMarginBottom>
            )
            }
            <BodySection title="News from the School">
              <p>Do proident fugiat ad Lorem ea consectetur ea nulla officia fugiat ut incididunt deserunt. Magna dolore dolore cillum voluptate aliqua ea fugiat consequat ea dolor. Et consequat incididunt enim tempor dolor nostrud commodo. Sit magna mollit aliquip officia. Mollit mollit duis aute pariatur reprehenderit nulla fugiat irure cillum sunt. Elit excepteur dolor aliquip adipisicing non incididunt voluptate amet id ad fugiat sunt dolore. Elit nisi fugiat duis esse culpa nostrud adipisicing excepteur nisi consectetur.

                Laboris cillum aliquip do laborum in sit duis incididunt sint elit do ut non. Dolore culpa aute non labore exercitation ipsum exercitation quis culpa aute non magna. Amet nulla incididunt aliqua proident ullamco Lorem veniam cillum sunt. Proident esse reprehenderit consequat duis id et.</p>
            </BodySection>
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
