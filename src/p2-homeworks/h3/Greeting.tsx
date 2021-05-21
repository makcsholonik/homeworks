import React, { ChangeEvent, KeyboardEvent } from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
	name : string
	setNameCallback : ( e : ChangeEvent<HTMLInputElement> ) => void
	addUser : () => void
	error : string
	totalUsers : number
	onKeyPressAddUser : ( e : KeyboardEvent<HTMLInputElement> ) => void
}

// презентационная компонента (для верстальщика)
const Greeting : React.FC<GreetingPropsType> = (
	{ name, setNameCallback, addUser, error, totalUsers, onKeyPressAddUser } // деструктуризация пропсов
) => {
	const inputClass = error ? (`${ s.inputClass } ${ s.error }`) : (s.inputClass);

	return (
		<div>
			<input value={ name } onChange={ setNameCallback } className={ inputClass } onKeyPress={ onKeyPressAddUser }/>
			<span>{ error }</span>
			<button onClick={ addUser }>add</button>
			<span>{ totalUsers }</span>
		</div>
	)
}

export default Greeting
