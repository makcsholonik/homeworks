import React, { MouseEvent } from 'react'
import Affair from './Affair'
import { AffairType, FilterType } from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
	data : Array<AffairType>
	setFilter : ( filter : FilterType ) => void
	// ещё одна возможная типизация setFilter
	// setFilter : Dispatch<SetStateAction<FilterType>>
	deleteAffairCallback : ( _id : number ) => void
	filter : FilterType
}

function Affairs ( props : AffairsPropsType ) {
	const mappedAffairs = props.data.map ( ( a : AffairType ) => (
		<Affair
			key={ a._id }
			affair={ a }
			deleteAffairCallback={ props.deleteAffairCallback }
		/>
	) )

	// const setAll = () => {props.setFilter ( 'all' )}
	// const setHigh = () => {props.setFilter ( 'high' )}
	// const setMiddle = () => {props.setFilter ( 'middle' )}
	// const setLow = () => {props.setFilter ( 'low' )}

	// можно задать одну ф-ию set, передать её на onClick (значения будет брать из value)
	const set = ( e : MouseEvent<HTMLButtonElement> ) => {
		props.setFilter ( e.currentTarget.value as FilterType )
	}

	const setClass = ( className : FilterType ) => props.filter === className ? s.active : ''

	return (
		<div>
			{ mappedAffairs }

{/*			<button onClick={ setAll } className={ setClass ( 'all' ) }>All</button>
			<button onClick={ setHigh } className={ setClass ( 'high' ) }>High</button>
			<button onClick={ setMiddle } className={ setClass ( 'middle' ) }>Middle</button>
			<button onClick={ setLow } className={ setClass ( 'low' ) }>Low</button>*/}

			<button onClick={ set } className={ setClass ( 'all' ) } value={ 'all' }>All</button>
			<button onClick={ set } className={ setClass ( 'high' ) } value={ 'high' }>High</button>
			<button onClick={ set } className={ setClass ( 'middle' ) } value={ 'middle' }>Middle</button>
			<button onClick={ set } className={ setClass ( 'low' ) } value={ 'low' }>Low</button>
		</div>
	);
}

export default Affairs
