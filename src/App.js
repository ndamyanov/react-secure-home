import React, {Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import { withFirebase } from './components/Firebase';
import { AuthUserContext } from './components/Session';
import Routes from './routes.js';
;
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authUser: null,
    };
  }
  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      },
    );
  }
  componentWillUnmount() {
    this.listener();
  }

  render(){
    return (
      <div className="App">
         <AuthUserContext.Provider value={this.state.authUser}>
       <Router>
          <Navigation />
          <hr /> 
          <Routes />
        </Router>
        </AuthUserContext.Provider>
      </div>
    );
  }
 
}

export default withFirebase(App);
