import React, {useState} from 'react';

import Modal from './../Modal/Modal';
import Card from './../UI/Card';
import Button from './../UI/Button';

import './UserForm.css';

const UserForm = (props) => {
	
	const [userName, setUserName] = useState('');
	const [userAge, setUserAge] = useState('');
	const [errorModal, setErrorModal] = useState(false);
	
	const changeNameHandler = (event) => {
		setUserName(event.target.value);
	}
	
	const changeAgeHandler = (event) => {
		setUserAge(event.target.value);
	}
	
	const closeModalHandler = () => {
		setErrorModal(null);
	};
	
	const submitHandler = (event) => {
		event.preventDefault();
		
		if ( userName.trim().length === 0 || userAge.trim().length === 0 ) {
			setErrorModal(true);
			return;
		}
		
		if ( userAge < 1 ) {
			setErrorModal(true);
			return;
		}
		
		const userData = {
			id: Math.random().toString(),
			name: userName,
			age: userAge,
		};
		
		props.onSaveUsers(userData);
		
		setUserName('');
		setUserAge('');
	}
	
	return (
		<div>
			{ errorModal && <Modal onClose={closeModalHandler} />}
			<Card className="form">
				<form onSubmit={submitHandler}>
					<label>
						<span>Username</span>
						<input type="text" value={userName} onChange={changeNameHandler}></input>
					</label>
					<label>
						<span>Age(years)</span>
						<input type="number" value={userAge} onChange={changeAgeHandler}></input>
					</label>
					<Button type="submit" content="Add user"/>
				</form>
			</Card>
		</div>
	);
}

export default UserForm;