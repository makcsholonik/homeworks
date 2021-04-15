import React from 'react'
import cl from './Message.module.css'

type MessagePropsType = {
	avatar : string
	name : string
	message : string
	time : string
}

export function Message ( props : MessagePropsType ) {
	return (
		<div className={ cl.message }>
			<img className={cl.image} src={ props.avatar } alt="avatar"/>
			<div className={ cl.content }>
				<div className={ cl.name }>{ props.name }</div>
				<div className={ cl.message }>{ props.message }</div>
				<div className={ cl.time }>{ props.time }</div>
			</div>
			<div className={cl.clear}>

			</div>
		</div>
	)
}
