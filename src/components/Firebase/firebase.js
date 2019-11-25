
import React, { Component } from 'react';
import store from '../../redux/actions.js';
import { connect } from "react-redux";
import app from 'firebase/app';
import 'firebase/database';
import { changeTemp } from '../../redux/actions.js';

//const temperatures = () => this.db.ref(`home-77c1d/Temp1`);

const config = {
    apiKey: "AIzaSyDmYWwrm_u0hna8XsGE8Nko-8adExq7kYA",
    authDomain: "home-77c1d.firebaseapp.com",
    databaseURL: "https://home-77c1d.firebaseio.com",
    projectId: "home-77c1d",
    storageBucket: "home-77c1d.appspot.com",
    messagingSenderId: "787697942103",
    //appId: "1:787697942103:web:02bbe19a3181b13a622d12",
    //measurementId: "G-0ZXKPWWTD1"
};

class Firebase extends Component {
  constructor(props) {
    super(props);

    app.initializeApp(config);
    this.db = app.database();
    let ref = Firebase.database().ref('/');
    ref.on('value', snapshot => {
      const state = snapshot.val();
      console.log(state);
      debugger;
      props.handleTempChange(state);
    })
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleTempChange: store => dispatch(changeTemp(store))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Firebase);

//export default Firebase;