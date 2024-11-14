import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBVzPj1NAnc6yqfA89YN85hKNjcmBRPyPY",
  authDomain: "task8-1-d.firebaseapp.com",
  projectId: "task8-1-d",
  storageBucket: "task8-1-d.appspot.com",
  messagingSenderId: "368798008532",
  appId: "1:368798008532:web:b4e6b669703cd243fb2741",
  measurementId: "G-VVWPRY9TQ5"
}; 
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
