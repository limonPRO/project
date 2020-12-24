// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyApnTC5L6Sn9HqZ1ZdZ2Pbqrb2N4r5L6T8",
    authDomain: "project-finder-9de40.firebaseapp.com",
    projectId: "project-finder-9de40",
    storageBucket: "project-finder-9de40.appspot.com",
    messagingSenderId: "807982550291",
    appId: "1:807982550291:web:dd4414a9a95269be17dee6",
    measurementId: "G-762D4TL94E"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig)
  const db =firebaseApp.firestore();
  const auth =firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db ;