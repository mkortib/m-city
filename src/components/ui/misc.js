import React from 'react'
import { Link } from 'react-router-dom'

export const Tag = (props) => {
	const template = <div 
										style={{
											background: props.bck,
											fontSize: props.size,
											color: props.color,
											padding: '5px 10px',
											display: 'inline-block',
											fontFamily: 'Righteous',
											...props.add
										}}
										className={props.clsRespnsive}
	
									 >{props.children}</div>

	if (props.link) {
		return (
			<Link to={props.linkto}>
				{template}
			</Link>
		)
	} else {
		return template
	}
}

export const firebaseLooper = (snapshot) => {
	const data = [];
	snapshot.forEach((childSnapshot) => {
		data.push({
			...childSnapshot.val(),
			id: childSnapshot.key
		});
	})
	return data;
}

export const reverseArray = (actualArray) => {
	let revercedArray = [];
	for(let i = actualArray.length - 1; i >= 0; i--) {
		revercedArray.push(actualArray[i]);
	}
	return revercedArray;
}

export const validate = (element) => {
	let error = [true, ''];

	if (element.validation.email) {
		const valid = /\S+@\S+\.\S+/.test(element.value);
		const message = `${!valid ? 'Must be a valid email' : ''}`; 
		error = !valid ? [valid, message] : error; 	
	}

	if (element.validation.required) {
		const valid = element.value.trim() !== ''; // if field has a symbols
		const message = `${!valid ? 'this field is required' : ''}`; 
		error = !valid ? [valid, message] : error; 			
	}

	return error;

}