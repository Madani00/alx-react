import React from "react";
import logo from "../assets/holberton-logo.jpg";
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

function Header() {
  const { user, logOut } = React.useContext(AppContext)
  return (
    <>
      <div className={css(styles.appHeader)}>
        <img src={logo} className={css(styles.appHeaderImage)} alt="logo" />
        <h1>School dashboard</h1>
        {user.isLoggedIn && (
          <div className={css(styles.logoutSection)}  id="logoutSection">
            Welcome <strong>{user.email}</strong> (<a href="#" onClick={logOut}><em>logout</em></a>)
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
