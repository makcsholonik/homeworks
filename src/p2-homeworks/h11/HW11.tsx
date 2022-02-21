import React, { useState } from 'react';
import SuperRange from './common/c7-SuperRange/SuperRange';

function HW11 () {
	const [value1, setValue1] = useState ( 0 );
	// const [value2, setValue2] = useState ( 100 );

	const setValueSuperRange = ( newValue : number ) => setValue1 ( newValue );

	return (
		<div>
			<hr/>
			homeworks 11
			<div>
				<span>{ value1 }</span>
				<SuperRange
					value1={ value1 }
					setValueSuperRange={ setValueSuperRange }
				/>
			</div>

			{/*<div>
				<span>{ value1 }</span>
				<SuperDoubleRange
					// сделать так чтоб value1 и value2 изменялось
				/>
				<span>{ value2 }</span>
			</div>*/}

			<hr/>
			{/*для личного творчества, могу проверить*/ }
			{/*<AlternativeSuperRange/>*/ }
			{/*<AlternativeSuperDoubleRange/>*/ }
			<hr/>
		</div>
	);
}

export default HW11;
