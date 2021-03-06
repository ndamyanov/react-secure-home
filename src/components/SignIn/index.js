import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignInMarkup = () => (
    <div>
        <SignInForm />
    </div>
)

class SignInPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: null
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(event) {
        const { email, password } = this.state;
        this.props.firebase
          .SignIn(email, password)
          .then(() => {
            this.setState({ ...this.state });
            this.props.history.push(ROUTES.HOME);
          })
          .catch(error => {
            this.setState({ error });
          });
        event.preventDefault();
    };

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, password, error } = this.state;
        const isInvalid = password === '' || email === '';

        return (
            <div id="login">
              <form onSubmit={this.onSubmit}>
                <h4>Account Login</h4>
                <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <button disabled={isInvalid} type="submit">
                    Sign In
                </button>
                {error && <p>{error.message}</p>}
            </form>
            </div>
        )
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInPage);

export default SignInMarkup;
export { SignInForm };