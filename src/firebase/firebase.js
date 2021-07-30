import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBFncs5IIsEjar3G8_NvIPY12enj4mKCXI",
  authDomain: "sharestash2.firebaseapp.com",
  databaseURL: "https://sharestash2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sharestash2",
  storageBucket: "sharestash2.appspot.com",
  messagingSenderId: "730310464041",
  appId: "1:730310464041:web:94b5681f778c99b1a7c238",
  measurementId: "G-14YVBNWRNN"
};
// Initialize Firebase
// firebase.initializeApp();

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}

export default firebase;