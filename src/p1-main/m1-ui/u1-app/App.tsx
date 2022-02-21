import React from 'react';
import s from './App.module.css';
import Junior from '../../../p2-homeworks/h5/pages/Junior';
import HW5 from '../../../p2-homeworks/h5/HW5';

export function App () {
	return (
		<div className={ s.App }>
			<div>react homeworks:</div>
			{/*<HW1/>*/}
			{/*<HW2/>*/}
			{/*<HW3/>*/}
			{/*<HW4/>*/}
			<HW5/>
			<Junior/>
		</div>
	);
}
