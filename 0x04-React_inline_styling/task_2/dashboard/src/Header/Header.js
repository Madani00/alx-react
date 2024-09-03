import React from 'react'
import logo from '../assets/holberton-logo.jpg'
import { StyleSheet, css } from 'aphrodite'

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
    }
});

const Header = () => {
    return (
        <header className={css(styles.AppHeader)}>
            <img src={logo} className={css(styles.logo)} alt="logo" />
            <h1>School dashboard</h1>
        </header>
    )
}

export default Header