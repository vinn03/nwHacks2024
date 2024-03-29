// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from 'firebase/app'
import {
    getFirestore, collection, getDocs, getDocs
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCrbs-FJBu_oBISTdx_8DnM1JIz2rec1Kc",
    authDomain: "nwhacks2024-74042.firebaseapp.com",
    projectId: "nwhacks2024-74042",
    storageBucket: "nwhacks2024-74042.appspot.com",
    messagingSenderId: "147348273717",
    appId: "1:147348273717:web:cbea9631cb3337667a0f7c",
    measurementId: "G-1NCZD9R798"
  };

// initialize firebase app
initializeApp(firebaseConfig)

// initialize firestone
const db = getFirestore()
const colRef = collection(db, 'Fuel Consumption Coupe')

// get collection data

getDocs(colRef)
  .then((snapshot) => {
    let FCCoupe = []
    snapshot.docs.forEach((doc) => {
        FCCoupe.push({...doc.data(), id: doc.id })
    })
    console.log(FCCoupe)
    .catch(err =>{
        console.log(err.message)
    })
  })


