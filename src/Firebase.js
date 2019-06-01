import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const config = {
	apiKey: "AIzaSyBSkUmDtinJNResDwpZc-XNtSRv4OQl56s",
	authDomain: "m-city-71c36.firebaseapp.com",
	databaseURL: "https://m-city-71c36.firebaseio.com",
	projectId: "m-city-71c36",
	storageBucket: "m-city-71c36.appspot.com",
	messagingSenderId: "361028444948"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');


export {
	firebase,
	firebaseDB,
	firebaseMatches,
	firebasePromotions,
	firebaseTeams,
	firebasePlayers
}