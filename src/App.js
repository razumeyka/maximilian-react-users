import React, {useState} from 'react';

import UserForm from './components/Users/UserForm';
import UsersList from './components/Users/UsersList';

const dummyUsers = [
	{
		id: 0,
		name: "Nast",
		age: 18,
	},
	{
		id: 1,
		name: "Nazar",
		age: 20,
	}
]
	
function App() {
	const [users, setUsers] = useState(dummyUsers);
	
	const saveUsersHandler = (user) => {
		setUsers(prevUsers => {
			return [user, ...prevUsers]
		});
	}
	
	return (
		<div>
			<UserForm onSaveUsers={saveUsersHandler} />
			<UsersList items={users} />
		</div>
	);
}

export default App;
