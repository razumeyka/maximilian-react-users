import React, {useState} from 'react';

import Card from './../UI/Card';
import Button from './../UI/Button';

import './Modal.css';

const Modal = (props) => {

	return (
		<div className="overlay" onClick={props.onClose}>
			<div className="modal">
				<div className="modal__header">Invalid input</div>
				<div className="modal__inner">
					<div className="modal__message">Please, enter ...</div>
					<Button onClick={props.onClose} content="Okey"/>
				</div>
			</div>
		</div>
	);
}

export default Modal;