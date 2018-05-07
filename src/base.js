import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCJaAOqyly_poyxOWEX5CGAzsTWc4l8e-w',
  authDomain: 'learnreact-d4094.firebaseapp.com',
  databaseURL: 'https://learnreact-d4094.firebaseio.com',
  projectId: 'learnreact-d4094',
  storageBucket: 'learnreact-d4094.appspot.com',
  messagingSenderId: '460400300358',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
