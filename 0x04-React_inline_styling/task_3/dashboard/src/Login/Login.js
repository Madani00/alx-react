import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
    label: {
        marginRight: '8px',
        '@media (max-width: 900px)': {
            margin: '4px 0',
            display: 'block'
        }
    },
    input: {
        marginRight: '8px',
        '@media (max-width: 900px)': {
            margin: '4px 0',
            display: 'block'
        }
    },
})

const Login = () => {
    return (
        <React.Fragment>
            <p>Login to access the full dashboard</p>
            <label className={css(styles.label)} htmlFor='email'>Email:</label>
            <input className={css(styles.input)} id='email' type='email' />
            <label className={css(styles.label)} htmlFor='password'>Password:</label>
            <input className={css(styles.input)} id='password' type='password' />
            <button>OK</button>
        </React.Fragment>
    )
}

export default Login