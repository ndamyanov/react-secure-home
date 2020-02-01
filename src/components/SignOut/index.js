import React from 'react';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
    <a className="SignOutBtn" type="button" onClick={firebase.SignOut}>
      Sign Out
    </a>
);

export default withFirebase(SignOutButton);