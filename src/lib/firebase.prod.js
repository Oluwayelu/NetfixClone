import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyCZvxJimClOk26J4chH4GhTorcn8ZeEhFU',
  authDomain: 'netflix-230cd.firebaseapp.com',
  projectId: 'netflix-230cd',
  storageBucket: 'netflix-230cd.appspot.com',
  messagingSenderId: '460230830331',
  appId: '1:460230830331:web:14f7af0000c8069e3e685e',
  measurementId: 'G-3J0YSVPBR1',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
