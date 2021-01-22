import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyABxF8QMhMGiSYiwi8DBIyHsWSlGAweLUQ",
  authDomain: "ridwan-1234.firebaseapp.com",
  databaseURL: "https://ridwan-1234.firebaseio.com",
  projectId: "ridwan-1234",
  storageBucket: "ridwan-1234.appspot.com",
  messagingSenderId: "904372258777",
  appId: "1:904372258777:web:b856ab7d14a0fe17ff3bc8",
  measurementId: "G-1KQE3RFGT8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const database = firebase.database();
export const cloudFirestore = firebase.firestore();
export const messaging = firebase.messaging

export default firebase