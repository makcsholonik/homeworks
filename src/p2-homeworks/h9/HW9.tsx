import React from 'react';
import s from '../../p1-main/m1-ui/u1-app/App.module.css';
import { Clock } from './Clock';

function HW9 () {
	return (
		<div>
			<hr/>
			<span className={ s.hw }> homeworks 9</span>

			{/*should work (должно работать)*/ }
			<Clock/>

			<hr/>
			{/*для личного творчества, могу проверить*/ }
			{/*<AlternativeClock/>*/ }
			<hr/>
		</div>
	)
}

export default HW9
