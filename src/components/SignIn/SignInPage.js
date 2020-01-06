import React, { Component } from 'react';
import { compose } from 'recompose';

import * as ROUTES from '../../constants/routes';
import withFirebase from '../Firebase';

class SignInPage extends Component {
    render() {
        return (
            <div>
                <h1>Sign In</h1>
                <button>Login</button>
            </div>
        )
    }
}

export default SignInPage
