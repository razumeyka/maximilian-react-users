import React from 'react';

import Card from './../UI/Card';

const UsersList = props => {
	return (
		<Card>
			<ul>
				{props.items.map( item => <li key={item.id}>{item.name} - {item.age} years old</li>)}
			</ul>
		</Card>
	);
}

export default UsersList;