import React from 'react';
import { Route } from 'react-router-dom';
import Temperature from './components/Temperature';
import * as ROUTES from './constants/routes';

const Routes = () => {
    return (
      <Route exact path={ROUTES.LANDING} component={Temperature} />
    //   <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
    //   <Route path={ROUTES.SIGN_IN} component={SignInPage} />
    //   <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
    //   <Route path={ROUTES.HOME} component={HomePage} />
    //   <Route path={ROUTES.ACCOUNT} component={AccountPage} />
    //   <Route path={ROUTES.ADMIN} component={AdminPage} />
    )
}

export default Routes;