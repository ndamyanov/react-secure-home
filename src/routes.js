import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Temperature from './components/Temperature';
import SignInPage from './components/SignIn/SignInPage';
import * as ROUTES from './constants/routes';

const Routes = () => {
    return (
      <Switch>
        <Route exact path={ROUTES.LANDING} component={Temperature} />
        <Route exact path={ROUTES.SIGN_IN} render={() => <SignInPage />} />
      </Switch>
      //   <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        //   <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        //   <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        //   <Route path={ROUTES.HOME} component={HomePage} />
        //   <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        //   <Route path={ROUTES.ADMIN} component={AdminPage} />
    )
}

export default Routes;