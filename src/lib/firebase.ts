import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, type Auth } from 'firebase/auth';
import firebaseConfig from '../../firebase-applet-config.json';

let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let googleAuthProvider: GoogleAuthProvider | undefined;

try {
  app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
  auth = getAuth(app);
  googleAuthProvider = new GoogleAuthProvider();
} catch (err) {
  console.warn('Firebase client initialization warning:', err);
}

export { app, auth, googleAuthProvider };
