import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

// Base es el componente donde se guardan las claves para acceder a Firebase. Estas estan ocultas dentro de <.env> (un archivo oculto)
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL
};
const firebaseApp = firebase.initializeApp(config);
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
