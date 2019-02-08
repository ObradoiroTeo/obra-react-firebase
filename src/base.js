import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";
<<<<<<< HEAD
import "firebase/auth";
=======
>>>>>>> c595fcb324637fc1ccba064546d9ea84b03e13ee

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL
};
<<<<<<< HEAD

const firebaseApp = firebase.initializeApp(config);
const base = Rebase.createClass(firebase.database());

export { firebaseApp };

=======
const firebaseApp = firebase.initializeApp(config);
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
>>>>>>> c595fcb324637fc1ccba064546d9ea84b03e13ee
export default base;
