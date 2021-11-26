import firebase from 'firebase'

const firebaseConfig = {
	apiKey: 'AIzaSyDTR_LVu-U8Ib8ciS0UTzbuaEChvGR9leM',
	authDomain: 'ongoing-crud.firebaseapp.com',
	projectId: 'ongoing-crud',
	storageBucket: 'ongoing-crud.appspot.com',
	messagingSenderId: '151400412943',
	appId: '1:151400412943:web:4e9bb446d70ef487ba307a'
}

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
}

// Initialize Firebase
const db = firebase.firestore()

export { db }
