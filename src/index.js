import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import './Resources/css/app.css';
import { firebase } from './Firebase'

const App = (props) => {
	return (
		<BrowserRouter>
			<Routes {...props}></Routes>
		</BrowserRouter>
	)
}

firebase.auth().onAuthStateChanged((user) => {
	ReactDOM.render(<App user={user}/>, document.getElementById('root'));
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

