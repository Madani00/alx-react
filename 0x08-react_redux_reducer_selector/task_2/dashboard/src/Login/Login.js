import React from "react";
import {StyleSheet, css} from "aphrodite";


const styles = StyleSheet.create({
  appBody: {
    fontSize: '1rem',
    padding: '2em',
    height: '45%',
  },
  formInput: {
    margin: '10px',
  },
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.logIn(email, password);
  }

  handleChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    }, this.validateForm);
  }

  handleChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    }, this.validateForm);
  }

  validateForm = () => {
    this.setState({
      enableSubmit: this.state.email.length > 0 && this.state.password.length > 0
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className={css(styles.appBody)}>
          <p>Login to access the full dashboard</p>
          <form onSubmit={this.handleLoginSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleChangeEmail} className={css(styles.formInput)} />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChangePassword} className={css(styles.formInput)} />
            <input type="submit" value="OK" disabled={!this.state.enableSubmit} />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
