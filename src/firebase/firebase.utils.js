// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyC9D2CGVouCMFRVYjjCDN-0bWjVspYP2Cc",
  authDomain: "crwn-database-7d87d.firebaseapp.com",
  projectId: "crwn-database-7d87d",
  storageBucket: "crwn-database-7d87d.appspot.com",
  messagingSenderId: "1020855728387",
  appId: "1:1020855728387:web:07bee84c51b0880e785136",
  measurementId: "G-SRF71J281R",
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (userAuth != null) {
    const user = firestore.doc(`/users/${userAuth.uid}`);
    const snapShot = await user.get();
    // console.log("UserData", snapShot);

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await user.set({
          displayName,
          email,
          createdAt,
          ...additionalData,
        });
      } catch (error) {
        console.log("Error creating user", error.message);
      }
    }
    return user;
  }
};

export const addCollectionAndDocuments = async (
  collectionKey,
  collectionItems
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  collectionItems.forEach((item) => {
    const docRef = collectionRef.doc();
    batch.set(docRef, item);
  });
  return await batch.commit();
};

export const transformSnapShot = (collections) => {
  const transformedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  console.log(transformedCollections);
  transformedCollections.reduce((accumulator, collection) => {
    return (accumulator[collection.title.toLowerCase()] = collection);
  }, {});
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
