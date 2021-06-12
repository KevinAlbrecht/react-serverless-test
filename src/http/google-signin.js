import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';

const firebaseConfig = {
  
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const provider = new firebase.auth.GoogleAuthProvider();

export function signInWithPopupAsync() {
  return firebase.auth().signInWithPopup(provider);
}

export function signInWithRedirect() {
  return firebase.auth().signInWithRedirect(provider);
}

export function signOutAsync() {
  return firebase.auth().signOut();
}

export function getRedirectResultAsync() {
  return firebase.auth().getRedirectResult();
}
