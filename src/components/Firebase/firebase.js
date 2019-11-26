import app from 'firebase/app';
import database from 'firebase/database';

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
  }
  users = () => this.db.ref('Temp3');
}
export default Firebase;