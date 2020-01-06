import app from 'firebase/app';
import database from 'firebase/database';
import * as firebase from 'firebase';

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

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.database();
    // this.googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    
    this.auth = app.auth();

    this.createUser = this.createUser.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  tempHistory = () => this.db.ref('Data');
  light = () =>  this.db.ref('Light');

  createUser(email, password) {
    this.auth.createUserWithEmailAndPassword(email, password);
  }

  signIn(email, password) {
    this.auth.signInWithEmailAndPassword(email, password);
  }

  signOut() {
    this.auth.signOut();
  }
}

export default Firebase;