import Rebase from 're-base';
import firebase from 'firebase';

const app = firebase.initializeApp({
  apiKey: "AIzaSyCGOI3EmFEVJwRahdW1qcDKJmrfZCoNHjc",
  authDomain: "catch-of-the-day-ani-4ba4b.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-ani-4ba4b.firebaseio.com"
});

const base = Rebase.createClass(app.database());

export default base;
