import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import './styles.css';

const Navigation = ({authUser}) => (
  <header className="App-header">
     <div>
       <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
    </div>
  </header>
);

const NavigationAuth = () => (
  <ul className="nav-ul">
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
      <li>
        <Link to={ROUTES.LIGHT}>Light</Link>
      </li>
      <li>
        <Link to={ROUTES.TEMP}>Temperature</Link>
      </li>
      <li>
        <SignOutButton />
      </li>
    </ul>
)

const NavigationNonAuth = () => (
  <ul className="nav-ul">
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
)
export default Navigation;