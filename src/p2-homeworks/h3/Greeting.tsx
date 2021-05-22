import React, { ChangeEvent } from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
	name : string
	setNameCallback : ( e : ChangeEvent<HTMLInputElement> ) => void
	addUser : () => void
	error : string
	totalUsers : number
}

// презентационная компонента (для верстальщика)
const Greeting : React.FC<GreetingPropsType> = (
	{ name, setNameCallback, addUser, error, totalUsers } // деструктуризация пропсов
) => {
	const inputClass = error ? (`${ s.input } ${ s.error }`) : (s.input)

	return (
		<div>
			<input value={ name } onChange={ setNameCallback } className={ inputClass }/>
			<span className={ s.errorMessage }>{ error }</span>
			<button className={ s.buttonAdd } onClick={ addUser }>ADD</button>
			<div className={s.totalUsers}> Total users: { totalUsers }</div>
		</div>
	)
}

export default Greeting
