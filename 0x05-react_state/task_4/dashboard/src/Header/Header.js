import React from 'react'
import logo from '../assets/holberton-logo.jpg'
import { StyleSheet, css } from 'aphrodite'
import { AppContext } from '../App/AppContext';

const styles = StyleSheet.create({
    AppHeader: {
        backgroundColor: '#ffffff',
        height: '24vh',
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
        alignItems: 'center',
        justifyContent: 'flex-start',
        fontSize: 'calc(6px + 2vmin)',
        color: 'rgba(233, 37, 37, 0.894)',
        borderBottom: '2px solid rgba(233, 37, 37, 0.894)',
        padding: '10px 5px'
    },
    logo: {
        width: '140px',
        height: '140px'
    },
    welcome: {
        marginTop: '20px',
        marginLeft: '20px'
    }
});

const Header = () => {
    const { user, logOut } = React.useContext(AppContext)
    return (
        <>
            <header className={css(styles.AppHeader)}>
                <img src={logo} className={css(styles.logo)} alt="logo" />
                <h1>School dashboard</h1>
            </header>
            {user.isLoggedIn && (
                <section className={css(styles.welcome)} id="logoutSection">
                    Welcome<strong> {user.email} </strong>
                    <em>
                        <a href="#" onClick={logOut}>
                            (logout)
                        </a>
                    </em>
                </section>
            )}
        </>
    )
}

export default Header