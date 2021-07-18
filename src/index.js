import React, {createContext} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import firebase from "firebase"
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyBpbPMLFA7wExzyxphf30ppEJusYv2dd_c",
    authDomain: "react-chat-66a99.firebaseapp.com",
    projectId: "react-chat-66a99",
    storageBucket: "react-chat-66a99.appspot.com",
    messagingSenderId: "918040955507",
    appId: "1:918040955507:web:90e31caec7d66d7eab3806"
})

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

export const TempUserContext = createContext(null)

const tempUserState = {
    user: {
        uid: localStorage.getItem('uid'),
        displayName: localStorage.getItem('name'),
        photoURL: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'
    }
}

ReactDOM.render(
  <Context.Provider value={{
      firebase,
      auth,
      firestore
  }}>
      <TempUserContext.Provider value={tempUserState}>
          <App />
      </TempUserContext.Provider>
  </Context.Provider>,
  document.getElementById('root')
)
