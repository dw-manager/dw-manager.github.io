import app from 'gatsby-plugin-firebase-v9.0';

import {
    addDoc, // adds new doc with random key (dbRef, data);
    collection, // reference to collection (dbRef, 'collectionName')
    doc, // reference to doc (dbRef, 'collection', 'id')
    getFirestore,
    setDoc, // adds new doc with specific id (dbRef, 'docId', data)
    where, // needed for query ('field', '==', 'value')
    getDoc, // get individual doc
    getDocs, // get array of docs
    query, // filters data (dbRef, whereStatement)
    onSnapshot, // listens for data changes
} from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const db = getFirestore(app);
const auth = getAuth(app);
const gProvider = new GoogleAuthProvider();
const storage = getStorage(app);

// add new data and return id with data
export async function addData(newData) {
    try {
        const testCollection = collection(db, 'test');
        const dataDoc = await addDoc(testCollection);
        return { ...newData, id: dataDoc.id };
    } catch {
        return {};
    }
}

// handle google sign popup and return user info
export async function googleSignIn() {
    try {
        // prompt user to sign in with google then get email & username
        const { user } = await signInWithPopup(auth, gProvider);
        const userData = { email: user.email, userName: user.displayName };

        const userCollection = collection(db, 'users');
        // check if user exists in db
        const q = query(userCollection, where('email', '==', userData.email));
        const usersSnap = await getDocs(q);
        if (usersSnap.empty) {
            const newUserDoc = await addDoc(userCollection, userData);
            userData.id = newUserDoc.id;
        } else {
            const { userName } = usersSnap.docs[0].data();
            userData.userName = userName;
            userData.id = usersSnap.docs[0].id;
        }
        return userData;
    } catch {
        return {};
    }
}

// sing in user with their last user id and return user info
export async function signInWithId(id) {
    const userInfo = {};
    try {
        // check if user exists in db
        const userDoc = await getDoc(doc(db, 'users', id));
        if (userDoc.exists()) {
            const { userName, email } = userDoc.data();
            userInfo.id = id;
            userInfo.userName = userName;
            userInfo.email = email;
        }
        return userInfo;
    } catch {
        return userInfo;
    }
}