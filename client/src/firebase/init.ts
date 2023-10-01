import { getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyABzr0BZ0ulBiGYl5ADCdLuq_o4oHR2jhA",
  authDomain: "gdsc-portfolio-fce8e.firebaseapp.com",
  projectId: "gdsc-portfolio-fce8e",
  storageBucket: "gdsc-portfolio-fce8e.appspot.com",
  messagingSenderId: "316472796475",
  appId: "1:316472796475:web:3dee57963ab4f47757431e"
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}
// Initialize Firebase auth
export const auth = getAuth();