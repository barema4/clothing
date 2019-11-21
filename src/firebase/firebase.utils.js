import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDp0YFzSWTAyzkCMstwVoxzWJU2WMzwWQs",
    authDomain: "cloth-db-7fbd5.firebaseapp.com",
    databaseURL: "https://cloth-db-7fbd5.firebaseio.com",
    projectId: "cloth-db-7fbd5",
    storageBucket: "cloth-db-7fbd5.appspot.com",
    messagingSenderId: "63385071114",
    appId: "1:63385071114:web:af6ff945406048b33879f3",
    measurementId: "G-DNKW4365TC"
  }
export const createUserprofileDocument =  async (userAuth, additionalData) => {

    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists){

      const { displayName, email } = userAuth

      const createdAt = new Date()

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      } catch(error){

        console.log('error creating user', error.message)

      }
    }

    return userRef


}


  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase