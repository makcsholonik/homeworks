import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from "./HW3";

type GreetingContainerPropsType = {
	users : Array<UserType>
	addUserCallback : ( name : string ) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer : React.FC<GreetingContainerPropsType> = ( { users, addUserCallback } ) => { // деструктуризация пропсов
	const [name, setName] = useState<string> ( '' )
	const [error, setError] = useState<string> ( '' )

	const setNameCallback = ( e : ChangeEvent<HTMLInputElement> ) => {
		setName ( e.currentTarget.value )
		setError ( '' )
	}
	const addUser = () => {
		const trimmedName = name.trim ()
		if (trimmedName) {
			addUserCallback ( trimmedName );
			alert ( `Hello ${ trimmedName }!` );
		} else {
			setError ( 'Name is required!' )
		}
		setName ( '' )
	};

	const onKeyPressAddUser = ( e : KeyboardEvent<HTMLInputElement> ) => {
		if (e.key === 'Enter') {
			addUser ()
		}
	}

	const totalUsers = users.length;

	return (
		<Greeting
			name={ name }
			setNameCallback={ setNameCallback }
			addUser={ addUser }
			error={ error }
			totalUsers={ totalUsers }
			onKeyPressAddUser={ onKeyPressAddUser }
		/>
	)
}

export default GreetingContainer
