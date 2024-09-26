import React from "react";
import logo from "../assets/holberton-logo.jpg";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/uiActionCreators";
import { StyleSheet, css } from 'aphrodite';
import AppContext from "../App/AppContext";


const styles = StyleSheet.create({
  appHeader: {
    fontSize: '1.4rem',
    color: '#e0354b',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '3px solid #e0354b',
  },
  appHeaderImage: {
    width: '200px',
    height: '200px',
  },
  logoutSection: {
    marginLeft: 'auto',
    fontSize: '1rem',
    color: 'black'
  },
});

function Header({ user, logout , isLoggedIn}) {
  return (
    <>
      <div className={css(styles.appHeader)}>
        <img src={logo} className={css(styles.appHeaderImage)} alt="logo" />
        <h1>School dashboard</h1>
        {isLoggedIn && (
          <div className={css(styles.logoutSection)}  id="logoutSection">
            Welcome <strong>{user.email}</strong> (<a href="#" onClick={logout}><em>logout</em></a>)
          </div>
        )}
      </div>
    </>
  );
}

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }).isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

Header.defaultProps = {
  isLoggedIn: false,
};

// mapStateToProps to get the user from the Redux store
const mapStateToProps = (state) => ({
  user: state.ui.get('user'),
  isLoggedIn: state.ui.get('isUserLoggedIn')
});

// Connect the component to Redux and the logout action creator
export default connect(mapStateToProps, { logout })(Header);
