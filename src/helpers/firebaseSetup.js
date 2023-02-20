import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FB_apiKey,
	authDomain: process.env.REACT_APP_FB_authDomain,
	projectId: process.env.REACT_APP_FB_projectId,
	storageBucket: process.env.REACT_APP_FB_storageBucket,
	messagingSenderId: process.env.REACT_APP_FB_messagingSenderId,
	appId: process.env.REACT_APP_FB_appId,
	measurementId: process.env.REACT_APP_FB_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
