import {initializeApp} from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getDatabase,
  ref as firebaseDatabaseRef,
  set as firebaseSet,
} from 'firebase/database';
const firebaseConfig = {
  apiKey: 'AIzaSyDs2p-74ZCmF0qAATj9Mr-MOiHaKci1g7Q',
  authDomain: 'react-by-ha-phan.firebaseapp.com',
  databaseURL:
    'https://react-by-ha-phan-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'react-by-ha-phan',
  storageBucket: 'react-by-ha-phan.appspot.com',
  messagingSenderId: '614228871157',
  appId: '1:614228871157:web:b2a5bad792fcad83c142bc',
  measurementId: 'G-0JX10V6V1H',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firebaseDatabase = getDatabase();
export {
  auth,
  firebaseDatabase,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  firebaseDatabaseRef,
  firebaseSet,
};
