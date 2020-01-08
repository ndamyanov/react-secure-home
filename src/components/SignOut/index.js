import React from 'react';

import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
    <button className="SignOutBtn" type="button" onClick={firebase.SignOut}>
      Sign Out
    </button>
);

export default withFirebase(SignOutButton);