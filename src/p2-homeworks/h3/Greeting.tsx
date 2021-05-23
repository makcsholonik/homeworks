import React, { ChangeEvent, KeyboardEvent } from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
	name : string
	setNameCallback : ( e : ChangeEvent<HTMLInputElement> ) => void
	addUser : () => void
	error : string
	totalUsers : number
	keyEnter : ( e : KeyboardEvent<HTMLInputElement> ) => void
}

// презентационная компонента (для верстальщика)
const Greeting : React.FC<GreetingPropsType> = (
	{ name, setNameCallback, addUser, error, totalUsers, keyEnter } // деструктуризация пропсов
) => {

	const inputClass = error ? s.error : s.input

	return (
		<div className={ s.greeting }>
			<div>
				<input value={ name } onChange={ setNameCallback } className={ inputClass } onKeyDown={ keyEnter }/>
				<div className={ s.errorMessage }>{ error }</div>
			</div>
			<button className={ s.buttonAdd } disabled={!name} onClick={ addUser }>Add</button>

			<div className={ s.totalUsers }> Total users: { totalUsers }</div>
		</div>
	)
}

export default Greeting
