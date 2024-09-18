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

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            enableSubmit: false
        }
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }
    handleLoginSubmit(event) {
        this.props.logIn(event.target.elements.email.value, event.target.elements.password.value)
    }

    handleChangeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    handleChangePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    render() {
        const isSubmitDisabled = !this.state.email || !this.state.password;
        return (
            <form onSubmit={this.handleLoginSubmit}>
                <p>Login to access the full dashboard</p>
                <label className={css(styles.label)} htmlFor='email'>Email:</label>
                <input className={css(styles.input)} id='email' type='email' value={this.state.email} onChange={this.handleChangeEmail} required />
                <label className={css(styles.label)} htmlFor='password'>Password:</label>
                <input className={css(styles.input)} id='password' type='password' value={this.state.password} onChange={this.handleChangePassword} required />
                <input type='submit' value='OK' />
            </form>
        )
    }
}

export default Login