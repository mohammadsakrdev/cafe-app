import * as firebase from 'firebase';

const settings = { timestampsInSnapshots: true };

const firebaseConfig = {
  apiKey: 'AIzaSyDeAvQHTEZI1mILI8ncSsYsgvp69RMbzyM',
  authDomain: 'cafe-app-784dd.firebaseapp.com',
  databaseURL: 'https://cafe-app-784dd.firebaseio.com',
  projectId: 'cafe-app-784dd',
  storageBucket: 'cafe-app-784dd.appspot.com',
  messagingSenderId: '520645009286',
  appId: '1:520645009286:web:4030c39d913fee63d9d607'
};
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings);

export default firebase;
