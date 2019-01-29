import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD-F6IiBPI4S93Y1QACl7mmSJPFZPsVU4g",
  authDomain: "obra-400f4.firebaseapp.com",
  databaseURL: "https://obra-400f4.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
